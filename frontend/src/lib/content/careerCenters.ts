import type { IconName } from '$lib/components/ui/Icon.svelte';

/** Career Centres page copy. Pre-launch: no partner counts, stats or real institution logos. */

// Each benefit carries its own accent; the client asked for "more colour" on this page
export const benefits: { icon: IconName; title: string; body: string; accent: string }[] = [
	{
		icon: 'briefcase',
		title: 'Seamless employer access',
		body: 'Verified employers actively hiring early-career talent.',
		accent: '#7502ff'
	},
	{
		icon: 'users',
		title: 'Community',
		body: 'Virtual and in-person events that bring students together.',
		accent: '#3296f8'
	},
	{
		icon: 'chart',
		title: 'Data-driven support',
		body: 'Job-search activity and career readiness on a partner dashboard.',
		accent: '#0e9f6e'
	},
	{
		icon: 'graduation',
		title: 'Streamlined experience',
		body: 'One place for students to build profiles, apply and grow.',
		accent: '#f59e0b'
	}
];

export const tools: { icon: IconName; title: string; body: string }[] = [
	{ icon: 'briefcase', title: 'Verified job board', body: 'Opportunities matched to student profiles and programmes.' },
	{ icon: 'dashboard', title: 'Career insights dashboard', body: 'Track engagement, top employers and skill gaps.' },
	{ icon: 'megaphone', title: 'Employer engagement tools', body: 'Promote career fairs, networking events and workshops.' },
	{ icon: 'profile', title: 'Student portfolios', body: 'A holistic view of achievements beyond the CV.' },
	{ icon: 'book', title: 'Skill & career programmes', body: 'On-demand modules for interviews, networking and the job hunt.' },
	{ icon: 'sparkles', title: 'CV optimisation', body: 'Help students prepare CVs that get noticed.' }
];

/** Shape of a published record in the PocketBase `testimonials` collection */
export interface Testimonial {
	quote: string;
	author: string;
	company: string;
}
