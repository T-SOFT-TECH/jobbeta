import { ClientResponseError } from 'pocketbase';
import { pb } from '$lib/pocketbase';

/**
 * Stored role values. They match the landing page backend (jobbeta.ng) so its
 * records can be imported unchanged at launch: students are 'talent' there.
 * See backend/pb_migrations/1793000000_created_waitlist.js.
 */
export type WaitlistRole = 'talent' | 'employer' | 'career_centre';

/** Friendly `?role=` values used in links (site.ts) → stored role. */
export function roleFromParam(param: string | null): WaitlistRole | null {
	switch (param) {
		case 'student':
		case 'talent':
			return 'talent';
		case 'employer':
			return 'employer';
		case 'career-centre':
		case 'career-center':
		case 'career_centre':
			return 'career_centre';
		default:
			return null;
	}
}

export interface WaitlistEntry {
	email: string;
	role: WaitlistRole;
	/** Which form this came from, e.g. "waitlist-page", "home-kickstart" */
	source: string;
	full_name?: string;
	institution?: string;
	institution_type?: string;
	interest?: string;
}

/**
 * Saves a sign-up to the `waitlist` collection.
 *
 * Resolves 'already' when the email is on the list (unique index) — for the
 * visitor that's a success, not an error. Throws on any other failure.
 */
export async function joinWaitlist(entry: WaitlistEntry): Promise<'joined' | 'already'> {
	const record = Object.fromEntries(
		Object.entries({ ...entry, email: entry.email.trim().toLowerCase() }).map(([k, v]) => [
			k,
			typeof v === 'string' ? v.trim() : v
		])
	);
	try {
		await pb.collection('waitlist').create(record);
		return 'joined';
	} catch (err) {
		if (err instanceof ClientResponseError && err.response?.data?.email?.code === 'validation_not_unique') {
			return 'already';
		}
		throw err;
	}
}

export type EnquiryType = 'general' | 'support' | 'partnership' | 'demo' | 'other';

/** Contact form dropdown, in the order the client listed them (review v2). */
export const enquiryTypes: { value: EnquiryType; label: string }[] = [
	{ value: 'general', label: 'General Enquiry' },
	{ value: 'support', label: 'Account Support' },
	{ value: 'partnership', label: 'Partnership' },
	{ value: 'demo', label: 'Request a Demo' },
	{ value: 'other', label: 'Other' }
];

/** Saves a Contact page message to the `enquiries` collection. Throws on failure. */
export async function sendEnquiry(entry: {
	name: string;
	email: string;
	enquiry_type: EnquiryType;
	message: string;
	organisation?: string;
}) {
	await pb.collection('enquiries').create({
		name: entry.name.trim(),
		email: entry.email.trim().toLowerCase(),
		enquiry_type: entry.enquiry_type,
		organisation: entry.organisation?.trim() ?? '',
		message: entry.message.trim()
	});
}
