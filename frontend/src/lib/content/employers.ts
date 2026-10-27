import type { IconName } from '$lib/components/ui/Icon.svelte';
import { links } from '$lib/config/site';

/** Employers page copy. Pre-launch: no prices, testimonials or invented numbers. */

export type EmployerPreview = 'company' | 'candidates' | 'shortlist' | 'pipeline';

export const employerSteps: { title: string; body: string; preview: EmployerPreview }[] = [
	{
		title: 'Create your employer profile',
		body: 'Set up your company page and add the key details candidates care about.',
		preview: 'company'
	},
	{
		title: 'Post roles & find candidates',
		body: 'Share job or internship openings with the skills and qualifications you need.',
		preview: 'candidates'
	},
	{
		title: 'Review & shortlist',
		body: 'Browse a curated candidate pool, compare profiles and shortlist the best fits.',
		preview: 'shortlist'
	},
	{
		title: 'Hire with speed & confidence',
		body: 'Reach out, schedule interviews and track every candidate in one pipeline.',
		preview: 'pipeline'
	}
];

export const services: { icon: IconName; title: string; body: string }[] = [
	{ icon: 'megaphone', title: 'Featured job listings', body: 'Put your most important roles in front of more of the right candidates.' },
	{ icon: 'chart', title: 'Talent analytics', body: 'See applicant trends and how each role is performing.' },
	{ icon: 'building', title: 'Employer branding', body: 'Show your culture and values to attract early-career talent.' },
	{ icon: 'shield-check', title: 'Skill assessments', body: 'Evaluate candidates with custom skill tests.' },
	{ icon: 'users', title: 'Talent pool access', body: 'Browse a curated list of pre-screened candidates.' }
];

export const talentPoints: { title: string; body: string }[] = [
	{ title: 'AI-powered matching', body: 'Candidates ranked by fit, with the reasons explained.' },
	{ title: 'Fast, efficient hiring', body: 'Post a role and start reviewing matches the same day.' },
	{ title: 'Qualified candidates', body: 'Verified students and graduates who are ready to work.' },
	{ title: 'Flexible plans', body: 'Start free and scale up as your hiring grows.' }
];

export interface Plan {
	name: string;
	summary: string;
	features: string[];
	cta: { label: string; href: string };
	featured?: boolean;
}

// PLACEHOLDER: plan names and features until the client confirms pricing (HANDOVER A2).
export const plans: Plan[] = [
	{
		name: 'Starter',
		summary: 'For teams making their first early-career hires.',
		features: ['One active job listing', 'AI-matched candidates', 'Basic applicant tracking'],
		cta: { label: 'Join the waitlist', href: links.waitlistEmployer }
	},
	{
		name: 'Growth',
		summary: 'For companies hiring interns and graduates every quarter.',
		features: [
			'Multiple active listings',
			'Ranked shortlists & match reasons',
			'Interview scheduling',
			'Employer brand page'
		],
		cta: { label: 'Join the waitlist', href: links.waitlistEmployer },
		featured: true
	},
	{
		name: 'Enterprise',
		summary: 'For graduate programmes and bulk hiring.',
		features: ['Unlimited listings', 'Talent analytics', 'Skill assessments', 'Dedicated support'],
		cta: { label: 'Contact sales', href: links.demo }
	}
];
