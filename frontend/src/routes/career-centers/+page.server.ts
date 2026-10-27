import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/public';
import type { Testimonial } from '$lib/content/careerCenters';

// Real testimonials are managed in /admin/testimonials. With none published the page simply
// hides the section; it never falls back to invented quotes.
export async function load(): Promise<{ testimonials: Testimonial[] }> {
	// A fresh client per request, so no auth state is shared between visitors on the server
	const pb = new PocketBase(env.PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090');

	try {
		const records = await pb.collection('testimonials').getFullList({
			filter: 'page = "career-centers" && active = true',
			sort: '-created'
		});
		return {
			testimonials: records.map((t) => ({ quote: t.quote, author: t.author, company: t.company }))
		};
	} catch (e) {
		console.error('Error fetching testimonials:', e);
		return { testimonials: [] };
	}
}
