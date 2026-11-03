import type { IconName } from '$lib/components/ui/Icon.svelte';
import { links } from '$lib/config/site';

/** Why JobBeta page copy. Pre-launch: no invented statistics or testimonials. */

export interface AudiencePanel {
	key: 'students' | 'employers' | 'career-centers';
	label: string;
	title: string;
	body: string;
	image: { src: string; alt: string };
	points: { title: string; body: string }[];
	cta: { label: string; href: string };
}

export const audiencePanels: AudiencePanel[] = [
	{
		// Client copy (review v2)
		key: 'students',
		label: 'Students & Graduates',
		title: 'Your career starts with the right match.',
		body: 'Showcase your potential, discover relevant opportunities, and connect with employers who value what you bring.',
		image: { src: '/images/hero-4.webp', alt: 'A smiling student holding notebooks on campus' },
		points: [
			{ title: 'Beyond the resume', body: 'Highlight your skills, projects, and experiences.' },
			{ title: 'Relevant opportunities', body: 'Explore internships and entry-level roles tailored to you.' },
			{ title: 'Smarter matching', body: 'Discover roles aligned with your skills and goals.' },
			{ title: 'Career resources', body: 'Access practical tips and insights to get career-ready.' }
		],
		cta: { label: 'Join the Student Waitlist', href: links.waitlistStudent }
	},
	{
		key: 'employers',
		label: 'Employers',
		title: 'Hire early-career talent with confidence',
		body: 'Reach motivated students and graduates, and spend your time on the candidates who fit.',
		image: { src: '/images/hero-3.webp', alt: 'A professional reviewing candidates on a laptop' },
		points: [
			{ title: 'High-potential candidates', body: 'Profiles with real skills and projects behind them.' },
			{ title: 'BetaMatch shortlists', body: 'Candidates ranked by fit, with clear reasons behind each match.' },
			{ title: 'Mutual interest', body: 'Express interest in candidates. When it is mutual, start a conversation.' },
			{ title: 'Promote your brand', body: 'Show emerging talent why your team is worth joining.' }
		],
		cta: { label: 'Join the Employer Waitlist', href: links.waitlistEmployer }
	},
	{
		// Post-MVP: describe what's being built, collect interest
		key: 'career-centers',
		label: 'Career Centres',
		title: 'Coming soon: JobBeta for Career Centres',
		body: "We're building tools to help universities and career centres connect students with career opportunities and employers.",
		image: { src: '/images/students/Frame 2085663912.webp', alt: 'A group of cheerful university students' },
		points: [
			{ title: 'Career Opportunities', body: 'Connect students with relevant internships and graduate opportunities.' },
			{ title: 'Employer Connections', body: 'Help institutions build stronger relationships with employers.' },
			{ title: 'Career Insights', body: 'Understand student engagement and career outcomes.' }
		],
		cta: { label: 'Register Your Interest', href: links.registerInterest }
	}
];

export const promises: { icon: IconName; title: string; body: string }[] = [
	{
		icon: 'shield-check',
		title: 'Verified employers only',
		body: 'Every company is reviewed before it can post a role.'
	},
	{
		icon: 'graduation',
		title: 'Free for students',
		body: 'Profiles, matching and connecting with employers cost students nothing.'
	},
	{
		icon: 'users',
		title: 'Human-centred, technology-powered',
		body: 'BetaMatch does the sorting, and people make the decisions.'
	}
];
