import type { IconName } from '$lib/components/ui/Icon.svelte';

/**
 * Career Tips page content (client review v2).
 * Topics and the CV/interview questions follow the client's list; the first
 * eight tips are in the order of the client's sample design.
 */

export const tipTopics = [
	'All',
	'Networking',
	'Productivity',
	'CVs',
	'Interviews',
	'Job Search',
	'Career Growth',
	'Portfolios'
] as const;

export type TipTopic = (typeof tipTopics)[number];
export type TipTone = 'lavender' | 'blue' | 'orange' | 'green' | 'pink';

export interface CareerTip {
	question: string;
	answer: string;
	topic: Exclude<TipTopic, 'All'>;
	icon: IconName;
	tone: TipTone;
}

export const careerTips: CareerTip[] = [
	{
		question: 'How do I build professional connections while still in school?',
		answer:
			"Start by attending career fairs, joining professional clubs, and connecting with alumni on LinkedIn. Don't be afraid to reach out to professionals in your field for informational interviews. Building genuine relationships now will pay dividends throughout your career.",
		topic: 'Networking',
		icon: 'users',
		tone: 'lavender'
	},
	{
		question: "What's the best way to follow up after a networking event?",
		answer:
			'Send a personalised LinkedIn connection request or email within 24–48 hours. Mention something specific you discussed and say you would like to stay in touch. Keep it brief and professional, and suggest a short call or coffee chat if it feels right.',
		topic: 'Networking',
		icon: 'calendar',
		tone: 'blue'
	},
	{
		question: 'How can I balance job searching with my current responsibilities?',
		answer:
			"Set aside dedicated time blocks for your search, even if it's just 30 minutes a day. Turn on job alerts, keep a CV and cover letter template ready to tailor, and track your applications in a simple spreadsheet. Consistency beats occasional all-day sessions.",
		topic: 'Productivity',
		icon: 'briefcase',
		tone: 'orange'
	},
	{
		question: 'What tools can help me stay organized during my job search?',
		answer:
			'Use Notion, Trello or a simple spreadsheet to track opportunities and next steps. Set calendar reminders for follow-ups, save interesting roles as you find them, and keep your CV and cover letter templates somewhere easy to reach.',
		topic: 'Productivity',
		icon: 'dashboard',
		tone: 'green'
	},
	{
		question: 'How do I make my CV stand out with little experience?',
		answer:
			'Lead with transferable skills from coursework, projects, volunteering, student societies and part-time work. Use action verbs and add numbers where you can ("grew club membership by 40%"). Tailor your CV to each role by echoing the skills the employer asks for.',
		topic: 'CVs',
		icon: 'profile',
		tone: 'lavender'
	},
	{
		question: 'Should I include a personal statement on my CV?',
		answer:
			"Yes, a short one helps, especially early in your career. In two or three sentences, say who you are, the skills you bring and the kind of role you're looking for. Tailor it to each opportunity and skip generic lines like \"hard-working team player\".",
		topic: 'CVs',
		icon: 'book',
		tone: 'pink'
	},
	{
		question: 'What are the most important skills employers look for in fresh graduates?',
		answer:
			'Beyond your course, employers look for communication, problem-solving, teamwork, digital confidence and a willingness to learn. Show these with real examples from projects, internships, volunteering or student leadership rather than just listing them.',
		topic: 'Career Growth',
		icon: 'chart',
		tone: 'green'
	},
	{
		question: 'How do I prepare for my first job interview?',
		answer:
			"Research the company and the role, then prepare short stories that show your skills (the STAR method helps: Situation, Task, Action, Result). Practise answering out loud, plan two or three questions to ask them, and check the time, location or video link the day before.",
		topic: 'Interviews',
		icon: 'message',
		tone: 'blue'
	},
	{
		question: 'How many jobs should I apply to per week?',
		answer:
			'Quality over quantity is key. Aim for 5–10 well-researched, tailored applications per week rather than 50 generic ones. Each application should be customised with a relevant cover letter and CV adjustments.',
		topic: 'Job Search',
		icon: 'target',
		tone: 'orange'
	},
	{
		question: "What should I do if I never hear back after applying?",
		answer:
			"Follow up with a polite email 1–2 weeks after applying. If there's still no response, move on but don't take it personally — many companies receive hundreds of applications. Keep applying and refining your approach.",
		topic: 'Job Search',
		icon: 'bell',
		tone: 'pink'
	},
	{
		question: 'What career path is best suited for my skills and interests?',
		answer:
			"Reflect on the work that energises you, try a career assessment, and research roles that match. Talk to people in fields you're curious about, and use internships or part-time roles to test a path before committing.",
		topic: 'Career Growth',
		icon: 'graduation',
		tone: 'lavender'
	},
	{
		question: "Do I need a portfolio if I'm not in a creative field?",
		answer:
			'It helps. A portfolio can hold projects, case studies, writing samples or presentations from any field. It shows your skills more clearly than a CV alone and gives employers real evidence of what you can do.',
		topic: 'Portfolios',
		icon: 'sparkles',
		tone: 'blue'
	},
	{
		question: 'What should I include in my online portfolio?',
		answer:
			'Your best work samples, a short note on your role and impact for each, your CV and your contact details. Keep it clean, easy to navigate and readable on a phone.',
		topic: 'Portfolios',
		icon: 'check',
		tone: 'green'
	}
];
