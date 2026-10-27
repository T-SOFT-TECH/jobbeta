import type { IconName } from '$lib/components/ui/Icon.svelte';
import { links } from '$lib/config/site';

/**
 * Products page copy. PLACEHOLDER: tiers and features until the client confirms pricing (HANDOVER A2);
 * per the launch-safe decision no naira amounts are shown, every paid tier routes to sales.
 */

export const modules: { icon: IconName; title: string; body: string }[] = [
	{ icon: 'target', title: 'AI matching', body: 'Ranked shortlists with the reasons each candidate fits.' },
	{ icon: 'megaphone', title: 'Job posting & branding', body: 'Listings and a company page students actually read.' },
	{ icon: 'calendar', title: 'Scheduler & pipeline', body: 'Interviews, statuses and messages in one place.' },
	{ icon: 'chart', title: 'Hiring analytics', body: 'See which roles, schools and sources perform best.' }
];

export type SuiteKey = 'schools' | 'organisations' | 'services';

export interface Tier {
	name: string;
	summary: string;
	features: string[];
	cta: { label: string; href: string };
	featured?: boolean;
}

export const suites: { key: SuiteKey; label: string; tiers: Tier[] }[] = [
	{
		key: 'schools',
		label: 'For schools',
		tiers: [
			{
				name: 'Campus Starter',
				summary: 'Connect your students with verified employers.',
				features: ['Verified job feed for students', 'Career centre profile', 'Student engagement overview'],
				cta: { label: 'Partner with us', href: links.partner }
			},
			{
				name: 'Campus Plus',
				summary: 'Run career services and events on JobBeta.',
				features: ['Everything in Starter', 'Virtual career fairs', 'Placement tracking', 'Employer partnerships'],
				cta: { label: 'Contact sales', href: links.demo },
				featured: true
			},
			{
				name: 'Campus Custom',
				summary: 'For universities with several faculties or campuses.',
				features: ['Multi-campus dashboards', 'Custom reporting', 'Dedicated success manager'],
				cta: { label: 'Contact sales', href: links.demo }
			}
		]
	},
	{
		key: 'organisations',
		label: 'Large-scale organisations',
		tiers: [
			{
				name: 'Enterprise Basic',
				summary: 'Essential tools for large-scale early-career recruitment.',
				features: ['Multiple active listings', 'AI-ranked shortlists', 'Applicant tracking'],
				cta: { label: 'Contact sales', href: links.demo }
			},
			{
				name: 'Enterprise Pro',
				summary: 'Advanced analytics and AI matching for high-volume hiring.',
				features: ['Everything in Basic', 'Hiring analytics', 'Interview scheduler', 'Sponsored listings'],
				cta: { label: 'Contact sales', href: links.demo },
				featured: true
			},
			{
				name: 'Enterprise Custom',
				summary: 'Tailored solutions for complex graduate programmes.',
				features: ['Unlimited listings', 'Skill assessments', 'Integrations & SSO', 'Dedicated support'],
				cta: { label: 'Contact sales', href: links.demo }
			}
		]
	},
	{
		key: 'services',
		label: 'Additional services',
		tiers: [
			{
				name: 'Employer branding',
				summary: 'Stand out to students with a refreshed company page.',
				features: ['Company page design', 'Culture content', 'Featured placement'],
				cta: { label: 'Contact sales', href: links.demo }
			},
			{
				name: 'Campus campaigns',
				summary: 'Reach students at the schools you hire from most.',
				features: ['Targeted student outreach', 'Virtual info sessions', 'Campaign reporting'],
				cta: { label: 'Contact sales', href: links.demo },
				featured: true
			},
			{
				name: 'Assessment design',
				summary: 'Custom skill tests that reflect the real job.',
				features: ['Role-specific tests', 'Scoring rubrics', 'Results in your pipeline'],
				cta: { label: 'Contact sales', href: links.demo }
			}
		]
	}
];

/** Compare table for the organisations suite: true = included */
export const comparison: { feature: string; values: [boolean, boolean, boolean] }[] = [
	{ feature: 'School engagement', values: [true, true, true] },
	{ feature: 'AI-ranked shortlists', values: [true, true, true] },
	{ feature: 'Sponsored listings for specific candidates', values: [false, true, true] },
	{ feature: 'Hiring analytics', values: [false, true, true] },
	{ feature: 'Skill assessments', values: [false, false, true] },
	{ feature: 'Dedicated support', values: [false, false, true] }
];
