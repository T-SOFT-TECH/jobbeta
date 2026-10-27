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

export const audiences: { key: AudienceKey; label: string; features: Feature[] }[] = [
	{
		key: 'students',
		label: 'For Students',
		features: [
			{
				icon: 'target',
				title: 'Smart job matching',
				body: 'We map your skills and goals to the right roles, and let you know as soon as a relevant job goes live.'
			},
			{
				icon: 'profile',
				title: 'Profiles that show your work',
				body: 'Showcase coursework, projects and extracurriculars. Go beyond a one-page CV.'
			},
			{
				icon: 'shield-check',
				title: 'Verified opportunities only',
				body: 'Every listing comes from a verified employer. No scams, no ghost jobs.'
			},
			{
				icon: 'book',
				title: 'Career readiness resources',
				body: 'CV tips, interview preparation and industry insights to help you become Day-1 ready.'
			}
		]
	},
	{
		key: 'employers',
		label: 'For Employers',
		features: [
			{
				icon: 'sparkles',
				title: 'AI-matched shortlists',
				body: 'Post a role and get a ranked shortlist of students and graduates who fit it, with the reasons why.'
			},
			{
				icon: 'calendar',
				title: 'Built-in interview scheduling',
				body: 'Invite candidates, book interviews and track responses without leaving your dashboard.'
			},
			{
				icon: 'megaphone',
				title: 'Promote your employer brand',
				body: 'Tell your story to early-career talent through your company profile and featured roles.'
			},
			{
				icon: 'chart',
				title: 'Hiring analytics',
				body: 'See applicants, shortlists and interviews per role at a glance, and spot where candidates drop off.'
			}
		]
	},
	{
		key: 'career-centers',
		label: 'Career Centres',
		features: [
			{
				icon: 'building',
				title: 'Direct employer access',
				body: 'Connect your students with verified employers looking for early-career talent.'
			},
			{
				icon: 'dashboard',
				title: 'Partner dashboard',
				body: "Follow your students' applications and placements, with no extra admin."
			},
			{
				icon: 'bell',
				title: 'Share opportunities fast',
				body: 'Send relevant jobs and internships to the right students as soon as they are posted.'
			},
			{
				icon: 'graduation',
				title: 'Career support beyond class',
				body: 'Give students CV, interview and career resources they can use any time.'
			}
		]
	}
];

export interface Step {
	title: string;
	body: string;
}

export const howItWorks: Record<'students' | 'employers', Step[]> = {
	students: [
		{
			title: 'Create your free profile',
			body: 'Tell us about your studies, skills and the kind of role you want.'
		},
		{ title: 'Get matched', body: 'Smart matching surfaces internships and entry-level roles that fit you.' },
		{ title: 'Apply & connect', body: 'Apply in a few clicks and chat directly with hiring teams.' },
		{ title: 'Land the role', body: 'Track interviews and offers in one place, then start your career.' }
	],
	employers: [
		{
			title: 'Set up your employer profile',
			body: 'Add your company details and show early-career talent what you stand for.'
		},
		{ title: 'Post your openings', body: 'Publish jobs and internships with the skills you need.' },
		{
			title: 'Review your matched shortlist',
			body: 'See candidates ranked by fit, with skills and portfolios side by side.'
		},
		{ title: 'Interview & hire', body: 'Invite, schedule and hire the right person from one dashboard.' }
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

export type FaqAudience = 'employer' | 'student' | 'career-center';

export const faqs: { key: FaqAudience; label: string; items: { q: string; a: string }[] }[] = [
	{
		key: 'employer',
		label: 'Employer',
		items: [
			{
				q: 'How do I post a job on JobBeta?',
				a: "Once your employer account is set up, choose 'Post a job' on your dashboard and add the title, description, skills and pay range. While we're pre-launch, join the waitlist and we'll set you up as soon as employer accounts open."
			},
			{
				q: 'What does hiring through JobBeta cost?',
				a: "We're finalising launch pricing. Join the waitlist or contact our team and we'll share plans that fit your hiring needs, including options for bulk hiring."
			},
			{
				q: 'How do I find the right candidates?',
				a: 'Our matching ranks candidates against each role using their skills, studies and portfolio. You can also filter by experience level, location and availability.'
			},
			{
				q: 'Can I hire interns and entry-level talent?',
				a: 'Yes. JobBeta focuses on students and recent graduates, so internships, graduate trainee programmes and entry-level roles are exactly what the platform is built for.'
			},
			{
				q: 'Do you support bulk or campus hiring?',
				a: "Yes. Tell us about your hiring plans through the contact page and we'll work with you on a campus or bulk-hiring setup."
			}
		]
	},
	{
		key: 'student',
		label: 'Student',
		items: [
			{
				q: 'Is JobBeta free for students?',
				a: 'Yes. Creating a profile, getting matched and applying for roles is free for students and graduates.'
			},
			{
				q: 'How do I get started?',
				a: "Join the waitlist with your email. We'll invite you to create your profile as soon as we launch."
			},
			{
				q: 'Can I find internships as well as full-time roles?',
				a: 'Yes. You can look for internships, graduate trainee programmes, part-time and full-time roles, and filter by the type you want.'
			},
			{
				q: 'How are jobs verified?',
				a: 'Every employer is reviewed before they can post, so the listings you see come from real companies that are actively hiring.'
			},
			{
				q: 'What happens after I apply?',
				a: "You can follow each application's status on your dashboard, and employers can message you or invite you to interview there too."
			}
		]
	},
	{
		key: 'career-center',
		label: 'Career Centre',
		items: [
			{
				q: 'How can our career centre partner with JobBeta?',
				a: "Reach out through the contact page. We'll set up a partner account so you can share opportunities with your students and follow their progress."
			},
			{
				q: 'What does the partner dashboard show?',
				a: 'How engaged your students are, where they apply, and how ready they are for work, all summarised so there is no extra admin for your team.'
			},
			{
				q: 'Can we share our own events or job fairs?',
				a: "Event tools are on our roadmap after launch. For now, tell us what you'd like to promote and we'll help you reach your students."
			},
			{
				q: 'Is there a cost for career centres?',
				a: "We're finalising partner plans. Contact us to discuss what fits your institution."
			}
		]
	}
];
