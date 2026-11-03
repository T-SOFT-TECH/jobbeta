#!/usr/bin/env node
/**
 * One-off launch task: copy every sign-up from the landing page backend
 * (jobbeta.ng) into this site's backend.
 *
 * Safe to re-run: emails already present in the target are skipped (the target
 * has a unique index on email), so running it twice imports nothing new.
 * PocketBase autodate fields cannot be written, so each record's original
 * landing sign-up date is kept in `source` as "landing:<date>". The
 * auto-responder hook skips any record whose source starts with "landing:",
 * so imported people are not sent a second welcome email.
 *
 * Usage (Node 18+, no dependencies):
 *
 *   SOURCE_URL=https://jobbeta.ng \
 *   SOURCE_EMAIL=admin@... SOURCE_PASSWORD=... \
 *   TARGET_URL=https://<new-site> \
 *   TARGET_EMAIL=admin@... TARGET_PASSWORD=... \
 *   node backend/scripts/import-landing-waitlist.mjs [--dry-run]
 *
 * Both logins are PocketBase SUPERUSER accounts: the waitlist list rule is
 * admin-only on both sides.
 */

const dryRun = process.argv.includes('--dry-run');

const need = (key) => {
	const value = process.env[key];
	if (!value) {
		console.error(`Missing env var ${key}`);
		process.exit(1);
	}
	return value.replace(/\/$/, '');
};

const source = {
	url: need('SOURCE_URL'),
	email: need('SOURCE_EMAIL'),
	password: need('SOURCE_PASSWORD')
};
const target = {
	url: need('TARGET_URL'),
	email: need('TARGET_EMAIL'),
	password: need('TARGET_PASSWORD')
};

async function api(base, path, { token, method = 'GET', body } = {}) {
	const res = await fetch(base + path, {
		method,
		headers: {
			'Content-Type': 'application/json',
			...(token ? { Authorization: token } : {})
		},
		body: body ? JSON.stringify(body) : undefined
	});
	const data = await res.json().catch(() => ({}));
	if (!res.ok) {
		const err = new Error(`${method} ${path} → ${res.status} ${data.message ?? ''}`);
		err.status = res.status;
		err.data = data.data;
		throw err;
	}
	return data;
}

async function login({ url, email, password }) {
	const { token } = await api(url, '/api/collections/_superusers/auth-with-password', {
		method: 'POST',
		body: { identity: email, password }
	});
	return token;
}

async function allRecords(url, token) {
	const out = [];
	for (let page = 1; ; page++) {
		const res = await api(
			url,
			`/api/collections/waitlist/records?page=${page}&perPage=200&sort=created`,
			{ token }
		);
		out.push(...res.items);
		if (page >= res.totalPages) return out;
	}
}

const sourceToken = await login(source);
const targetToken = await login(target);

const incoming = await allRecords(source.url, sourceToken);
const existing = new Set(
	(await allRecords(target.url, targetToken)).map((r) => r.email.toLowerCase())
);

console.log(`Landing records: ${incoming.length}. Already in target: ${existing.size}.`);

let imported = 0;
let skipped = 0;
let failed = 0;

for (const r of incoming) {
	const email = r.email.trim().toLowerCase();
	if (existing.has(email)) {
		skipped++;
		continue;
	}

	const record = {
		full_name: r.full_name ?? '',
		email,
		phone: r.phone ?? '',
		role: r.role, // 'talent' | 'employer' — identical values on both sides
		interest: r.interest ?? '',
		source: `landing:${r.created ?? ''}`.slice(0, 60)
	};

	if (dryRun) {
		console.log('would import', email, record.role);
		imported++;
		continue;
	}

	try {
		await api(target.url, '/api/collections/waitlist/records', {
			token: targetToken,
			method: 'POST',
			body: record
		});
		existing.add(email);
		imported++;
	} catch (err) {
		failed++;
		console.error(`failed ${email}: ${err.message}`, err.data ?? '');
	}
}

console.log(
	`${dryRun ? '[dry run] ' : ''}Imported ${imported}, skipped ${skipped} duplicates, ${failed} failed.`
);
// exitCode, not process.exit(): exiting while fetch's keep-alive sockets are
// still closing trips a libuv assertion on Windows.
process.exitCode = failed ? 1 : 0;
