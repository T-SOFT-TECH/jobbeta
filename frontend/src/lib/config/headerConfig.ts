/**
 * Header Navigation Configuration
 * Defines page-specific navigation items for the dynamic header
 */

export interface NavItem {
	href: string;
	label: string;
}

/**
 * Navigation configurations mapped by route pattern
 */
const navConfig: Record<string, NavItem[]> = {
	// Home and general pages - main navigation
	'/': [
		{ href: '/why-jobbeta', label: 'Why JobBeta?' },
		{ href: '/students', label: 'Students' },
		{ href: '/employers', label: 'Employers' },
		{ href: '/career-centers', label: 'Career Centers' },
		{ href: '/jobs', label: 'Jobs' }
	],
	'/about': [
		{ href: '/why-jobbeta', label: 'Why JobBeta?' },
		{ href: '/students', label: 'Students' },
		{ href: '/employers', label: 'Employers' },
		{ href: '/career-centers', label: 'Career Centers' },
		{ href: '/jobs', label: 'Jobs' }
	],
	'/why-jobbeta': [
		{ href: '/why-jobbeta', label: 'Why JobBeta?' },
		{ href: '/students', label: 'Students' },
		{ href: '/employers', label: 'Employers' },
		{ href: '/career-centers', label: 'Career Centers' },
		{ href: '/jobs', label: 'Jobs' }
	],
	'/career-page': [
		{ href: '/why-jobbeta', label: 'Why JobBeta?' },
		{ href: '/students', label: 'Students' },
		{ href: '/employers', label: 'Employers' },
		{ href: '/career-centers', label: 'Career Centers' },
		{ href: '/jobs', label: 'Jobs' }
	],

	// Students section
	'/students': [
		{ href: '/students', label: 'Students' },
		{ href: '/career-tips', label: 'Career Tips' }
	],
	'/career-tips': [
		{ href: '/students', label: 'Students' },
		{ href: '/career-tips', label: 'Career Tips' }
	],

	// Employers section
	'/employers': [
		{ href: '/employers', label: 'Employers' },
		{ href: '/products', label: 'Products' },
		{ href: '/solutions', label: 'Solutions' }
	],
	'/products': [
		{ href: '/employers', label: 'Employers' },
		{ href: '/products', label: 'Products' },
		{ href: '/solutions', label: 'Solutions' }
	],
	'/solutions': [
		{ href: '/employers', label: 'Employers' },
		{ href: '/products', label: 'Products' },
		{ href: '/solutions', label: 'Solutions' }
	],

	// Career Centers section
	'/career-centers': [
		{ href: '/career-centers', label: 'Career Centers' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/resources', label: 'Resources' }
	],
	'/blog': [
		{ href: '/career-centers', label: 'Career Centers' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/resources', label: 'Resources' }
	],

	// Jobs section - single item
	'/jobs': [{ href: '/jobs', label: 'Jobs' }],

	// How It Works
	'/how-it-works': [
		{ href: '/how-it-works', label: 'How it works' },
		{ href: '/students', label: 'Students' },
		{ href: '/employers', label: 'Employers' },
		{ href: '/career-centers', label: 'Career Centers' }
	]
};

/**
 * Get navigation items for a specific pathname
 * Handles dynamic routes like /jobs/[id] and /blog/[slug]
 */
export function getNavItems(pathname: string): NavItem[] {
	// Handle dynamic job routes (job details, job listings)
	if (pathname.startsWith('/jobs/') || pathname === '/job-listings') {
		return navConfig['/jobs'];
	}

	// Handle dynamic blog routes (blog details)
	if (pathname.startsWith('/blog/')) {
		return navConfig['/blog'];
	}

	// Return exact match or fallback to home navigation
	return navConfig[pathname] || navConfig['/'];
}

/**
 * Get the main navigation items (home page navigation)
 */
export function getMainNavItems(): NavItem[] {
	return navConfig['/'];
}

/**
 * Check if a pathname has custom navigation different from main nav
 */
export function hasCustomNav(pathname: string): boolean {
	const pageNav = getNavItems(pathname);
	const mainNav = navConfig['/'];

	// Compare arrays - if they're different, the page has custom nav
	if (pageNav.length !== mainNav.length) return true;

	return pageNav.some((item, index) =>
		item.href !== mainNav[index].href || item.label !== mainNav[index].label
	);
}

