import type { IconName } from '$lib/components/ui/Icon.svelte';

/**
 * Home page copy and sample data.
 *
 * Pre-launch rule from the client review: no invented statistics, testimonials or
 * real company names. Everything marked PLACEHOLDER should be swapped for real
 * data once partnerships and launch numbers exist.
 */

export type AudienceKey = 'students' | 'employers' | 'career-centers';

export interface Feature {
	icon: IconName;
	title: string;
	body: string;
}

/**
 * "Connecting talent with real-world opportunities" tabs.
 * Students copy is the client's (review v2). Career Centres are post-MVP, so
 * that tab is marked coming soon and only describes what's being built.
 */
export const audiences: {
	key: AudienceKey;
	label: string;
	comingSoon?: boolean;
	features: Feature[];
}[] = [
	{
		key: 'students',
		label: 'For Students',
		features: [
			{
				icon: 'target',
				title: 'Smarter job matching',
				body: 'We map your skills and goals to the right roles, and let you know as soon as a relevant job goes live.'
			},
			{
				icon: 'profile',
				title: 'More than a CV',
				body: 'Showcase your skills, projects, and experiences beyond your CV.'
			},
			{
				icon: 'shield-check',
				title: 'Verified opportunities',
				body: 'Explore opportunities from verified employers you can trust.'
			},
			{
				icon: 'book',
				title: 'Career readiness resources',
				body: 'Access CV tips, interview guidance, and career insights to get ahead.'
			}
		]
	},
	{
		key: 'employers',
		label: 'For Employers',
		features: [
			{
				icon: 'sparkles',
				title: 'BetaMatch shortlists',
				body: 'Post a role and see students and graduates ranked by fit, with clear reasons behind each match.'
			},
			{
				icon: 'users',
				title: 'Mutual interest, then conversation',
				body: 'Express interest in candidates. When it is mutual, message them and schedule interviews.'
			},
			{
				icon: 'megaphone',
				title: 'Promote your employer brand',
				body: 'Showcase your company to emerging talent through your employer profile and job postings.'
			},
			{
				icon: 'chart',
				title: 'Hiring analytics',
				body: 'Track matches, shortlists and interviews for every role in one place.'
			}
		]
	},
	{
		key: 'career-centers',
		label: 'Career Centres',
		comingSoon: true,
		features: [
			{
				icon: 'briefcase',
				title: 'Career Opportunities',
				body: 'Connect students with relevant internships and graduate opportunities.'
			},
			{
				icon: 'building',
				title: 'Employer Connections',
				body: 'Help institutions build stronger relationships with employers.'
			},
			{
				icon: 'chart',
				title: 'Career Insights',
				body: 'Understand student engagement and career outcomes.'
			}
		]
	}
];

export interface Step {
	title: string;
	body: string;
}

/** Home "Simple from start to finish." steps (client copy, review v2). */
export const howItWorks: Record<'students' | 'employers', Step[]> = {
	students: [
		{
			title: 'Create your free profile',
			body: 'Tell us about your skills, experience, interests, and career goals.'
		},
		{
			title: 'Discover your matches',
			body: 'Explore opportunities matched to your profile and preferences.'
		},
		{
			title: 'Connect with employers',
			body: "Express interest. When it's mutual, start a conversation."
		},
		{
			title: 'Take the next step',
			body: 'Connect, interview, and move closer to your next opportunity.'
		}
	],
	employers: [
		{
			title: 'Create your employer profile',
			body: 'Set up your company profile and showcase what makes your team unique.'
		},
		{
			title: 'Post roles & discover talent',
			body: 'Share opportunities and discover candidates matched to your needs.'
		},
		{
			title: 'Review & express interest',
			body: 'Explore matched profiles, compare skills, and express interest in candidates.'
		},
		{
			title: 'Connect & hire',
			body: 'Unlock conversations through mutual interest, schedule interviews, and hire confidently.'
		}
	]
};

/** Fictional brands for the logo marquee. PLACEHOLDER until partners are signed. */
export const partnerBrands = [
	{ name: 'Northfield Labs', color: '#7502ff' },
	{ name: 'Kestrel Health', color: '#0e9f6e' },
	{ name: 'Bluepine Finance', color: '#3296f8' },
	{ name: 'Lagoonway Logistics', color: '#f59e0b' },
	{ name: 'Sahelgrow Agritech', color: '#65a30d' },
	{ name: 'Arcline Studio', color: '#e11d48' },
	{ name: 'Ridgeway Power', color: '#0f766e' },
	{ name: 'Brightpath Learning', color: '#9333ea' }
];

export interface SampleJob {
	role: string;
	company: string;
	category: string;
	type: 'Full-time' | 'Internship' | 'Part-time' | 'Graduate trainee';
	location: string;
	color: string;
}

/** Illustrative listings for the curated-jobs strip. PLACEHOLDER: fictional companies. */
export const sampleJobs: SampleJob[] = [
	{ role: 'Software Engineering Intern', company: 'Northfield Labs', category: 'Technology', type: 'Internship', location: 'Lagos', color: '#7502ff' },
	{ role: 'Graduate Analyst', company: 'Bluepine Finance', category: 'Banking & Finance', type: 'Graduate trainee', location: 'Abuja', color: '#3296f8' },
	{ role: 'Nursing Assistant', company: 'Kestrel Health', category: 'Healthcare', type: 'Full-time', location: 'Ibadan', color: '#0e9f6e' },
	{ role: 'Operations Associate', company: 'Lagoonway Logistics', category: 'Logistics', type: 'Full-time', location: 'Lagos', color: '#f59e0b' },
	{ role: 'Agronomy Intern', company: 'Sahelgrow Agritech', category: 'Agriculture', type: 'Internship', location: 'Kano', color: '#65a30d' },
	{ role: 'Junior Product Designer', company: 'Arcline Studio', category: 'Design', type: 'Full-time', location: 'Remote', color: '#e11d48' },
	{ role: 'Field Engineer Trainee', company: 'Ridgeway Power', category: 'Energy', type: 'Graduate trainee', location: 'Port Harcourt', color: '#0f766e' },
	{ role: 'Teaching Assistant', company: 'Brightpath Learning', category: 'Education', type: 'Part-time', location: 'Enugu', color: '#9333ea' },
	{ role: 'Marketing Intern', company: 'Northfield Labs', category: 'Marketing', type: 'Internship', location: 'Lagos', color: '#7502ff' },
	{ role: 'Customer Success Associate', company: 'Bluepine Finance', category: 'Customer Service', type: 'Full-time', location: 'Abuja', color: '#3296f8' }
];

export type FaqAudience = 'student' | 'employer' | 'career-center';

// Order = tab order: Student | Employer | Career Centre (client review v2).
// Student and Employer copy is the client's wording verbatim.
export const faqs: { key: FaqAudience; label: string; items: { q: string; a: string }[] }[] = [
	{
		key: 'student',
		label: 'Student',
		items: [
			{
				q: 'Is JobBeta free for students?',
				a: 'Yes! JobBeta is free for students and graduates, from creating your profile to connecting with employers.'
			},
			{
				q: 'How do I get started?',
				a: "Join our waitlist. We'll invite you to create your profile when we launch."
			},
			{
				q: 'Can I find internships and full-time roles?',
				a: 'Yes! Explore internships, graduate programmes, part-time, and full-time opportunities.'
			},
			{
				q: 'How are jobs verified?',
				a: 'Employers are reviewed before posting opportunities to help ensure a safer, more trusted experience.'
			},
			{
				q: 'What happens after I express interest in a role?',
				a: "If an employer is also interested, you'll match and can start a conversation directly on JobBeta."
			}
		]
	},
	{
		key: 'employer',
		label: 'Employer',
		items: [
			{
				q: 'How do I post a job on JobBeta?',
				a: 'Once JobBeta launches, you can create an employer account, post your openings and start connecting with matched candidates. Join our waitlist for early access.'
			},
			{
				q: 'What does hiring through JobBeta cost?',
				a: "We're developing flexible plans to suit different hiring needs. Pricing will be announced closer to launch. Join our waitlist to stay updated."
			},
			{
				q: 'How do I find the right candidates?',
				a: "BetaMatch helps you discover candidates based on their skills, experience and fit for your roles. You'll see ranked matches and insights explaining why each candidate could be a good fit."
			},
			{
				q: 'Can I hire interns and entry-level talent?',
				a: 'Absolutely! JobBeta is built for early-career hiring, helping you connect with students and recent graduates seeking internships, graduate programmes and entry-level opportunities.'
			},
			{
				q: 'Do you support bulk or campus hiring?',
				a: "We're building solutions for employers with larger recruitment needs, including graduate programmes and campus hiring. Contact our team to discuss your requirements and explore how we can support you."
			}
		]
	},
	{
		key: 'career-center',
		label: 'Career Centre',
		// Institutional product comes after the MVP: answers describe intent only.
		items: [
			{
				q: 'Is JobBeta available for career centres yet?',
				a: "Not yet. We're building tools to help universities and career centres connect students with career opportunities and employers. Register your interest and we'll let you know when JobBeta for Career Centres launches."
			},
			{
				q: 'How can our institution get involved?',
				a: "Register your interest with your institution's details. We'll keep you updated as we develop our institutional offering."
			},
			{
				q: 'Is there a cost for career centres?',
				a: "We haven't set institutional pricing yet. We'll share details closer to launch."
			}
		]
	}
];
