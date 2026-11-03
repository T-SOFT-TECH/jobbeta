import type { IconName } from '$lib/components/ui/Icon.svelte';
import { links } from '$lib/config/site';

/**
 * Products & Solutions page copy (client review v2: Products and Solutions merged).
 * A focused MVP today and a credible roadmap: solutions, not pricing tiers, and
 * nothing promised that isn't confirmed for launch.
 */

export const modules: { icon: IconName; title: string; body: string }[] = [
	{ icon: 'target', title: 'BetaMatch', body: 'Ranked shortlists with the reasons each candidate fits.' },
	{ icon: 'megaphone', title: 'Job posting & branding', body: 'Post opportunities and showcase your company to emerging talent.' },
	{ icon: 'calendar', title: 'Scheduler & pipeline', body: 'Interviews, statuses and messages in one place.' },
	// Client wording, kept verbatim
	{ icon: 'chart', title: 'Hiring analytics', body: 'Track applications, candidate progress and hiring activity in one place.' }
];

export interface Solution {
	icon: IconName;
	title: string;
	summary: string;
	features: string[];
	cta: { label: string; href: string };
	comingSoon?: boolean;
}

export const solutions: Solution[] = [
	{
		icon: 'building',
		title: 'Enterprise Solutions',
		summary: 'Smarter hiring for organisations recruiting at scale.',
		features: [
			'BetaMatch-powered candidate discovery',
			'Ranked candidate shortlists',
			'Recruitment pipeline management',
			'Tailored hiring support'
		],
		cta: { label: 'Talk to Our Team', href: links.contact }
	},
	{
		icon: 'graduation',
		title: 'JobBeta for Career Centres',
		summary:
			'Help your students discover opportunities, connect with employers and take their next career steps.',
		features: ['Verified opportunities', 'Student engagement insights', 'Employer connections'],
		cta: { label: 'Register Your Interest', href: links.registerInterest },
		comingSoon: true
	}
];

export const additionalServices: Solution[] = [
	{
		icon: 'sparkles',
		title: 'Employer Branding',
		summary: 'Stand out to students with a company profile that shows your culture and values.',
		features: [],
		cta: { label: 'Talk to Our Team', href: links.contact }
	},
	{
		icon: 'megaphone',
		title: 'Campus Campaigns',
		summary: 'Reach students at the universities you hire from most.',
		features: [],
		cta: { label: 'Join the Waitlist', href: links.waitlistEmployer },
		comingSoon: true
	}
];
