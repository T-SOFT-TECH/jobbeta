import type { IconName } from '$lib/components/ui/Icon.svelte';

/**
 * Students page copy. The client flagged the old hero bullets ("Thousands of jobs placement",
 * "100% Free", "Build your personal brand") for rewording; these are launch-safe placeholders.
 */

// Client copy (review v2, Students)
export const heroPoints = [
	'Verified employers, real opportunities',
	'Free for students & graduates',
	'Matched on skills, not just resumes'
];

export type StepPreview = 'profile' | 'matches' | 'connect' | 'offer';

export interface StudentStep {
	title: string;
	body: string;
	link: string;
	preview: StepPreview;
}

// Client copy (review v2, How It Works). Pre-launch: every step links to the waitlist.
export const studentSteps: StudentStep[] = [
	{
		title: 'Create your free profile',
		body: 'Showcase your skills, projects, and career interests.',
		link: 'Join the Waitlist',
		preview: 'profile'
	},
	{
		title: 'Discover your matches',
		body: 'Explore opportunities matched to your skills and goals.',
		link: 'Join the Waitlist',
		preview: 'matches'
	},
	{
		title: 'Connect with employers',
		body: "Express interest. When it's mutual, start a conversation.",
		link: 'Join the Waitlist',
		preview: 'connect'
	},
	{
		title: 'Take the next step',
		body: 'Chat, interview, and move closer to your first role.',
		link: 'Join the Waitlist',
		preview: 'offer'
	}
];

// Client copy (review v2). Virtual career events and skill development were
// removed for a future release.
export const exclusiveFeatures: { icon: IconName; title: string; body: string }[] = [
	{ icon: 'target', title: 'Smart job matching', body: 'Discover roles matched to your skills and goals.' },
	{ icon: 'profile', title: 'A profile that stands out', body: 'Showcase your skills, projects, and experience.' },
	{ icon: 'book', title: 'Career tips & guides', body: 'Practical advice on CVs, interviews, and networking.' },
	{ icon: 'shield-check', title: 'Verified opportunities', body: 'Explore opportunities from reviewed employers.' }
];
