/**
 * Site-wide destinations for calls to action.
 *
 * The client's routing table maps every button to one of these. While JobBeta is
 * pre-launch, all sign-up / sign-in flows go to the waitlist; when the app ships,
 * change the target here instead of hunting through components.
 */
export const links = {
	waitlist: '/waitlist',
	waitlistStudent: '/waitlist?role=student',
	waitlistEmployer: '/waitlist?role=employer',
	signUp: '/waitlist',
	login: '/waitlist',
	contact: '/contact',
	demo: '/contact?topic=demo',
	partner: '/contact?topic=partnership',
	learnMore: '/why-jobbeta',
	howItWorks: '/how-it-works',
	careers: '/career',
	privacy: '/privacy',
	careerTips: '/career-tips',
	productsSolutions: '/products',
	// Career Centres: post-MVP, so out of the main nav; reached from the footer
	// and Products & Solutions. Primary CTA is "Register Your Interest".
	institutions: '/career-centers',
	registerInterest: '/career-centers#register',
	studentFaqs: '/students#faq'
} as const;

/**
 * Pages the client removed (review v2). Jobs, Blog and Resources are coming
 * back later, so they redirect temporarily (307); Solutions was merged into
 * Products & Solutions for good (308). hooks.server.ts applies these; the old
 * route code is in git history.
 */
export const retiredRoutes: { prefix: string; to: string; permanent?: boolean }[] = [
	{ prefix: '/jobs', to: '/students' },
	{ prefix: '/blog', to: '/career-tips' },
	{ prefix: '/resources', to: '/career-tips' },
	{ prefix: '/solutions', to: links.productsSolutions, permanent: true }
];

export const contact = {
	// Confirmed by the client (info@jobbeta.ng also works)
	email: 'hello@jobbeta.ng'
};

// JobBeta is only active on these two (client review v2, Contact Us §3)
export const socials = [
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/jobbeta-ng/' },
	{ label: 'Instagram', href: 'https://www.instagram.com/usejobbeta/' }
];
