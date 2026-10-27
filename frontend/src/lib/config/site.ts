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
	jobs: '/jobs',
	resources: '/resources'
} as const;

export const contact = {
	// Placeholder until JobBeta confirms a support inbox
	email: 'hello@jobbeta.com'
};

// Placeholder profiles until JobBeta shares its real social handles
export const socials = [
	{ label: 'LinkedIn', href: 'https://www.linkedin.com' },
	{ label: 'X (Twitter)', href: 'https://x.com' },
	{ label: 'Instagram', href: 'https://www.instagram.com' }
];
