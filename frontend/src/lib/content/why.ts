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
		key: 'students',
		label: 'Students & Graduates',
		title: 'Your first role, without the guesswork',
		body: 'Build a profile that shows what you can do, and let the right opportunities come to you.',
		image: { src: '/images/hero-4.webp', alt: 'A smiling student holding notebooks on campus' },
		points: [
			{ title: 'Portfolio-style profiles', body: 'Show projects, coursework and skills, not just a CV.' },
			{ title: 'Internships & first roles', body: 'Opportunities picked for students and recent graduates.' },
			{ title: 'Smart matching', body: 'Get notified when a role that fits you goes live.' },
			{ title: 'Modern career tools', body: 'CV tips, interview prep and industry insights in one place.' }
		],
		cta: { label: 'Join as a student / graduate', href: links.waitlistStudent }
	},
	{
		key: 'employers',
		label: 'Employers',
		title: 'Hire early-career talent with confidence',
		body: 'Reach motivated students and graduates, and spend your time on the candidates who fit.',
		image: { src: '/images/hero-3.webp', alt: 'A professional reviewing candidates on a laptop' },
		points: [
			{ title: 'Verified, high-potential candidates', body: 'Profiles with real skills and projects behind them.' },
			{ title: 'Less time to hire', body: 'AI-ranked shortlists and built-in interview scheduling.' },
			{ title: 'Promote your brand', body: 'Show student talent why your team is worth joining.' },
			{ title: 'Smart filters & insights', body: 'Track applicants, shortlists and interviews per role.' }
		],
		cta: { label: 'Hire with JobBeta', href: links.waitlistEmployer }
	},
	{
		key: 'career-centers',
		label: 'Career Centres',
		title: 'Extend career support beyond the classroom',
		body: 'Give your students verified opportunities and see how they progress, with no extra admin.',
		image: { src: '/images/students/Frame 2085663912.webp', alt: 'A group of cheerful university students' },
		points: [
			{ title: 'Verified jobs for your students', body: 'Share roles from employers we have reviewed.' },
			{ title: 'Insight without extra admin', body: 'See engagement and readiness on a partner dashboard.' },
			{ title: 'Reach students quickly', body: 'Send relevant opportunities to the right students as soon as they are posted.' },
			{ title: 'Always-on career resources', body: 'CV, interview and career guidance students can use any time.' }
		],
		cta: { label: 'Partner with JobBeta', href: links.partner }
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
		body: 'Profiles, matching and applications cost students nothing.'
	},
	{
		icon: 'users',
		title: 'People first, AI-assisted',
		body: 'Smart matching does the sorting, and people make the decisions.'
	}
];
