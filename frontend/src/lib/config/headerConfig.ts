/**
 * Header Navigation Configuration
 * Each site section shows its own sub-navigation; everything else gets the main nav.
 */

export interface NavItem {
	href: string;
	label: string;
}

const mainNav: NavItem[] = [
	{ href: '/why-jobbeta', label: 'Why JobBeta?' },
	{ href: '/how-it-works', label: 'How it works' },
	{ href: '/students', label: 'Students' },
	{ href: '/employers', label: 'Employers' },
	{ href: '/career-centers', label: 'Career Centers' },
	{ href: '/jobs', label: 'Jobs' }
];

const sectionNavs: NavItem[][] = [
	[
		{ href: '/students', label: 'Students' },
		{ href: '/career-tips', label: 'Career Tips' }
	],
	[
		{ href: '/employers', label: 'Employers' },
		{ href: '/products', label: 'Products' },
		{ href: '/solutions', label: 'Solutions' }
	],
	[
		{ href: '/career-centers', label: 'Career Centers' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/resources', label: 'Resources' }
	],
	[{ href: '/jobs', label: 'Jobs' }]
];

function matches(pathname: string, href: string) {
	return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Get navigation items for a specific pathname.
 * Nested routes (e.g. /jobs/[id], /blog/[slug]) inherit their section's nav.
 */
export function getNavItems(pathname: string): NavItem[] {
	return sectionNavs.find((nav) => nav.some((item) => matches(pathname, item.href))) ?? mainNav;
}

export function getMainNavItems(): NavItem[] {
	return mainNav;
}

export function hasCustomNav(pathname: string): boolean {
	return getNavItems(pathname) !== mainNav;
}
