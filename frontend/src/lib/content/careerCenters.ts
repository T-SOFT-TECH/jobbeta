import type { IconName } from '$lib/components/ui/Icon.svelte';

/**
 * Career Centres page copy (client review v2). Post-MVP product: communicate the
 * vision and collect expressions of interest, without promising features that
 * haven't been built.
 */

export const building: { icon: IconName; title: string; body: string; accent: string }[] = [
	{
		icon: 'briefcase',
		title: 'Career Opportunities',
		body: 'Connect students with relevant internships and graduate opportunities.',
		accent: '#7502ff'
	},
	{
		icon: 'users',
		title: 'Employer Connections',
		body: 'Help institutions build stronger relationships with employers.',
		accent: '#3296f8'
	},
	{
		icon: 'chart',
		title: 'Career Insights',
		body: 'Understand student engagement and career outcomes.',
		accent: '#0e9f6e'
	}
];

export const institutionTypes = [
	'University',
	'Polytechnic',
	'College of Education',
	'Career centre / careers service',
	'Other'
] as const;
