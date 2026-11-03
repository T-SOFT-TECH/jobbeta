import type { IconName } from '$lib/components/ui/Icon.svelte';

/** Employers page copy. Pre-launch: no prices, testimonials or invented numbers. */

export type EmployerPreview = 'company' | 'candidates' | 'shortlist' | 'pipeline';

export const employerSteps: { title: string; body: string; preview: EmployerPreview }[] = [
	// Client copy (review v2, How It Works)
	{
		title: 'Create your employer profile',
		body: 'Set up your company profile and showcase what makes your team unique.',
		preview: 'company'
	},
	{
		title: 'Post roles & discover talent',
		body: 'Share opportunities and discover candidates matched to your needs.',
		preview: 'candidates'
	},
	{
		title: 'Review & express interest',
		body: 'Explore matched profiles, compare skills, and express interest in candidates.',
		preview: 'shortlist'
	},
	{
		title: 'Connect & hire',
		body: 'Unlock conversations through mutual interest, schedule interviews, and hire confidently.',
		preview: 'pipeline'
	}
];

// Client review v2: only capabilities JobBeta is confident of delivering at
// launch. Featured job listings and skill assessments are parked.
export const services: { icon: IconName; title: string; body: string }[] = [
	{ icon: 'building', title: 'Employer branding', body: 'Show your culture and values to attract early-career talent.' },
	{ icon: 'chart', title: 'Talent analytics', body: 'See how your roles are performing and where your matches come from.' },
	{ icon: 'users', title: 'Talent pool access', body: 'Discover students and graduates whose skills match your needs.' }
];

// Client copy (review v2, Employers)
export const talentPoints: { title: string; body: string }[] = [
	{ title: 'Smarter matching', body: 'Candidates ranked by fit, with clear reasons behind each match.' },
	{ title: 'Simpler hiring', body: 'Find, shortlist and connect with candidates in one place.' },
	{ title: 'Relevant talent', body: 'Discover students and graduates with skills that match your needs.' },
	{ title: 'Flexible hiring', body: 'Hire for internships, graduate programmes and entry-level roles.' }
];

/**
 * Pricing is not finalised (client review v2): show who JobBeta is for, with no
 * tiers, features or prices. Wording follows the client's "Pricing Coming Soon"
 * sample.
 */
export const pricingSegments: { name: string; summary: string; icon: IconName; dark?: boolean }[] = [
	{ name: 'Starter', summary: 'For teams making their first early-career hires.', icon: 'users' },
	{ name: 'Growth', summary: 'For companies hiring interns and graduates every quarter.', icon: 'chart', dark: true },
	{ name: 'Enterprise', summary: 'For graduate programmes and bulk hiring.', icon: 'building' }
];
