import type { IconName } from '$lib/components/ui/Icon.svelte';

/**
 * Students page copy. The client flagged the old hero bullets ("Thousands of jobs placement",
 * "100% Free", "Build your personal brand") for rewording; these are launch-safe placeholders.
 */

export const heroPoints = [
	'Verified employers only',
	'Free for students & graduates',
	'Matched on skills, not just your CV'
];

export type StepPreview = 'profile' | 'matches' | 'connect' | 'offer';

export interface StudentStep {
	title: string;
	body: string;
	link: string;
	preview: StepPreview;
}

export const studentSteps: StudentStep[] = [
	{
		title: 'Create your free account',
		body: 'Sign up in minutes and build a profile that shows your skills, projects and career interests.',
		link: 'Build your profile',
		preview: 'profile'
	},
	{
		title: 'Get matched to roles that fit',
		body: 'Our AI matches you with internships, part-time and graduate roles that suit your goals.',
		link: 'See your matches',
		preview: 'matches'
	},
	{
		title: 'Apply & connect with employers',
		body: 'Send applications and chat directly with recruiters, all in one place.',
		link: 'Get started for free',
		preview: 'connect'
	},
	{
		title: 'Land your first role',
		body: 'Track every application, prepare for interviews and get notified the moment things move.',
		link: 'Join the waitlist',
		preview: 'offer'
	}
];

export const exclusiveFeatures: { icon: IconName; title: string; body: string }[] = [
	{ icon: 'target', title: 'Smart job matching', body: 'Roles ranked by how well they fit your skills and goals.' },
	{ icon: 'profile', title: 'A profile that stands out', body: 'Show your experience, skills and projects.' },
	{ icon: 'book', title: 'Career tips & guides', body: 'Practical advice on CVs, interviews and networking.' },
	{ icon: 'calendar', title: 'Virtual career events', body: 'Meet employers and learn from people already in the job.' },
	{ icon: 'sparkles', title: 'Skill development', body: 'Learn new skills and grow your portfolio as you go.' }
];
