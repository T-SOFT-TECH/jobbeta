/// <reference path="../pb_data/types.d.ts" />

/**
 * JobBeta Waitlist Auto-Responder
 *
 * Subject, sender name and body all come from the `settings` collection and
 * are editable at /admin/ -> Auto-Responder. This file supplies only the
 * branded SHELL (logo, background, footer) — no copy lives here.
 *
 * Sent as multipart/alternative: a branded HTML part plus a plain-text part
 * generated from the same content. Clients that render HTML get the design;
 * everything else — and any filter that scores HTML harshly — still has
 * readable text.
 *
 * ⚠ DELIVERABILITY: Truehost's outbound filter has rejected styled HTML with
 *   550 "Message discarded as high-probability spam"
 * Plain text alone was reaching the inbox. If HTML starts bouncing again, set
 * USE_HTML to false below — that reverts to the proven text-only message
 * without touching anything else.
 *
 * ⚠ EVERY helper must be declared INSIDE the handler. PocketBase runs hook
 * callbacks in isolated goja runtimes that do NOT inherit this file's
 * top-level scope; functions declared out here parse fine but throw
 * "X is not defined" at runtime.
 *
 * Placeholders: {{name}}, {{full_name}}, {{email}}, {{role}}
 *
 * Ported from the landing backend (jobbeta.ng). The settings row is seeded
 * DISABLED here (see pb_migrations/1793000020_created_settings.js), so nothing
 * sends until someone switches it on at launch.
 */
onRecordAfterCreateSuccess((e) => {
	try {
		// Flip to false to fall back to the proven text-only email.
		const USE_HTML = true;

		// 'light' or 'dark'.
		// Light is the safer default: if a client strips background colours
		// (some do), dark text still reads on the white fallback, whereas a
		// white wordmark on a stripped-away dark header disappears entirely.
		const THEME = 'light';

		const SITE_URL = 'https://jobbeta.ng';

		// Both logos are transparent PNGs, so neither shows a rectangle against
		// its backdrop. The wordmark colour is what differs.
		const PALETTE =
			THEME === 'dark'
				? {
						page: '#0b0817',
						header: '#110d21',
						card: '#1c172b',
						text: '#e8e0f7',
						heading: '#ffffff',
						muted: '#9b8fbb',
						faint: '#6f6494',
						link: '#b366ff',
						rule: '#7502ff',
						quoteBg: '#241d38',
						logo: SITE_URL + '/email-logo.png'
					}
				: {
						page: '#f4effc',
						header: '#ffffff',
						card: '#ffffff',
						text: '#2a2140',
						heading: '#100b1f',
						muted: '#6a5b8c',
						faint: '#8b7fa8',
						link: '#6210f0',
						rule: '#7502ff',
						quoteBg: '#f2ecfd',
						logo: SITE_URL + '/email-logo-dark.png'
					};

		// ── helpers (must stay inside this callback — see note above) ──

		const codePoint = (n) => {
			try {
				return String.fromCodePoint(n);
			} catch (err) {
				return '';
			}
		};

		const decodeEntities = (input) =>
			input
				.replace(/&#(\d+);/g, (_, dec) => codePoint(parseInt(dec, 10)))
				.replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => codePoint(parseInt(hex, 16)))
				.replace(/&nbsp;/g, ' ')
				.replace(/&mdash;/g, '—')
				.replace(/&ndash;/g, '–')
				.replace(/&rsquo;/g, '’')
				.replace(/&lsquo;/g, '‘')
				.replace(/&ldquo;/g, '“')
				.replace(/&rdquo;/g, '”')
				.replace(/&quot;/g, '"')
				.replace(/&lt;/g, '<')
				.replace(/&gt;/g, '>')
				.replace(/&amp;/g, '&');

		/** Flatten the stored HTML body into readable plain text. */
		const htmlToText = (html) => {
			const stripped = html
				.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, '')
				// Collapse pretty-printing between tags, else hand-formatted HTML
				// leaves a blank line under every list item. Only newlines go —
				// a plain space between inline tags is meaningful.
				.replace(/>[ \t]*\r?\n[ \t]*</g, '><')
				.replace(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, '$2 ($1)')
				.replace(/<br\s*\/?>/gi, '\n')
				.replace(/<li[^>]*>/gi, '\n  - ')
				.replace(/<\/li>/gi, '')
				.replace(/<\/(p|div|h[1-6])>/gi, '\n\n')
				.replace(/<\/(ul|ol)>/gi, '\n\n')
				.replace(/<\/(tr|table)>/gi, '\n')
				.replace(/<[^>]+>/g, '');

			return decodeEntities(stripped)
				.replace(/\r\n?/g, '\n')
				.replace(/[ \t]+\n/g, '\n')
				.replace(/\n{3,}/g, '\n\n')
				.trim();
		};

		/**
		 * Inline-style a tag written in the dashboard, unless the author already
		 * set their own style. Email clients ignore <style> blocks and class
		 * selectors, so every rule has to live on the element itself.
		 */
		const styleTag = (html, tag, css) =>
			html.replace(new RegExp('<' + tag + '(?![a-z])([^>]*)>', 'gi'), (m, attrs) =>
				/style\s*=/i.test(attrs) ? m : '<' + tag + attrs + ' style="' + css + '">'
			);

		/** Apply the brand's typography to whatever markup the admin saved. */
		const styleBody = (html) => {
			const P = PALETTE;
			let out = html;
			out = styleTag(out, 'p', `margin:0 0 16px;color:${P.text};`);
			out = styleTag(out, 'h1', `margin:0 0 14px;font-size:24px;font-weight:700;color:${P.heading};`);
			out = styleTag(out, 'h2', `margin:0 0 14px;font-size:20px;font-weight:700;color:${P.heading};`);
			out = styleTag(out, 'h3', `margin:0 0 12px;font-size:17px;font-weight:700;color:${P.heading};`);
			out = styleTag(out, 'ul', `margin:0 0 16px;padding-left:20px;color:${P.text};`);
			out = styleTag(out, 'ol', `margin:0 0 16px;padding-left:20px;color:${P.text};`);
			out = styleTag(out, 'li', 'margin:0 0 8px;');
			out = styleTag(out, 'a', `color:${P.link};text-decoration:underline;`);
			out = styleTag(out, 'strong', `color:${P.heading};font-weight:700;`);
			out = styleTag(out, 'blockquote', `margin:0 0 16px;padding:12px 16px;border-left:3px solid ${P.rule};background:${P.quoteBg};color:${P.text};`);
			return out;
		};

		const escapeHtml = (s) =>
			s
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/"/g, '&quot;');

		// ── content ──

		const settings = $app.findFirstRecordByFilter('settings', "key = 'autoresponder'");

		if (!settings || !settings.getBool('enabled')) {
			e.next();
			return;
		}

		const record = e.record;

		// Imported from the landing backend at launch: these people already got
		// their welcome email from jobbeta.ng (scripts/import-landing-waitlist.mjs).
		if (record.getString('source').startsWith('landing:')) {
			e.next();
			return;
		}

		const name = record.getString('full_name');
		const email = record.getString('email');
		const role = record.getString('role');

		// full_name is optional on this site (email-only capture forms), so a
		// missing name must not produce "Welcome aboard, !".
		const firstName = name.trim().split(' ')[0] || 'there';
		const roleLabels = {
			talent: 'Student/Graduate',
			employer: 'Employer',
			career_centre: 'Career Centre'
		};

		const interpolate = (tpl) =>
			tpl
				.replaceAll('{{name}}', firstName)
				.replaceAll('{{full_name}}', name || firstName)
				.replaceAll('{{email}}', email)
				// Stored values stay 'talent' | 'employer' | 'career_centre'; only
				// the label a subscriber reads changes, matching the signup form.
				.replaceAll('{{role}}', roleLabels[role] || 'Student/Graduate');

		// A subject header is not HTML, so entities must be decoded or
		// "&#127881;" arrives literally. The ", there!" cleanup keeps a nameless
		// subject reading naturally ("You're on the JobBeta waitlist!").
		const subject = decodeEntities(
			interpolate(settings.getString('subject') || "You're on the JobBeta waitlist")
		).replace(', there!', '!');

		const rawBody = interpolate(
			settings.getString('body') || '<p>Thank you for joining the JobBeta waitlist.</p>'
		);

		const text = htmlToText(rawBody);
		const senderName = settings.getString('sender_name') || 'JobBeta Team';
		const year = new Date().getFullYear();

		// First line of the text version doubles as the inbox preview snippet.
		const preheader = escapeHtml(text.split('\n')[0].slice(0, 110));

		const P = PALETTE;

		const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="${THEME}">
<meta name="supported-color-schemes" content="${THEME}">
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background-color:${P.page};-webkit-font-smoothing:antialiased;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${preheader}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${P.page}" style="background-color:${P.page};">
<tr><td align="center" style="padding:32px 12px;">

<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;border-collapse:collapse;">

<tr><td align="center" bgcolor="${P.header}" style="background-color:${P.header};border-radius:16px 16px 0 0;padding:30px 24px 26px;">
<a href="${SITE_URL}" style="text-decoration:none;"><img src="${P.logo}" width="190" alt="JobBeta" style="display:block;border:0;outline:none;width:190px;max-width:190px;height:auto;"></a>
</td></tr>

<tr><td style="height:3px;line-height:3px;font-size:0;background-color:${P.rule};">&nbsp;</td></tr>

<tr><td bgcolor="${P.card}" style="background-color:${P.card};padding:34px 30px;color:${P.text};font-family:'DM Sans',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.65;">
${styleBody(rawBody)}
</td></tr>

<tr><td align="center" bgcolor="${P.header}" style="background-color:${P.header};border-radius:0 0 16px 16px;padding:24px;color:${P.muted};font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.7;border-top:1px solid ${THEME === 'dark' ? '#241d38' : '#ece4f9'};">
<a href="${SITE_URL}" style="color:${P.link};text-decoration:none;">jobbeta.ng</a><br>
&copy; ${year} JobBeta &middot; Lagos, Nigeria<br>
<span style="color:${P.faint};">You received this email because you joined the JobBeta waitlist.</span>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

		const meta = $app.settings().meta;

		const payload = {
			from: { address: meta.senderAddress, name: senderName },
			to: [{ address: email }],
			subject: subject,
			text: text
		};
		if (USE_HTML) {
			payload.html = html;
		}

		$app.newMailClient().send(new MailerMessage(payload));
		$app.logger().info(`[autoresponder] Sent waitlist confirmation to ${email}`);
	} catch (err) {
		// Never block the signup flow because of a mail failure.
		$app.logger().error(`[autoresponder] Failed to send email: ${err}`);
	}

	e.next();
}, 'waitlist');
