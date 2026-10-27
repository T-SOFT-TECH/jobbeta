import { pb } from '$lib/pocketbase';

export type WaitlistRole = 'student' | 'employer' | 'career-center' | 'newsletter';

export interface WaitlistEntry {
	email: string;
	name?: string;
	role: WaitlistRole;
}

/** Saves a sign-up to the PocketBase `waitlist` collection. Throws on failure. */
export async function joinWaitlist({ email, name = '', role }: WaitlistEntry) {
	await pb.collection('waitlist').create({ email: email.trim(), name: name.trim(), role });
}
