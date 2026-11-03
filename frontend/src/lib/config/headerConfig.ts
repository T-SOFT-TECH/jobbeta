/**
 * Header Navigation Configuration
 * Each site section shows its own sub-navigation; everything else gets the main nav.
 *
 * Career Centres are deliberately absent from the main nav: they are a
 * post-MVP product (client review v2) reached via the footer and Products &
 * Solutions. Jobs and Blog were removed for now.
 */

export interface NavItem {
	href: string;
	label: string;
}

const mainNav: NavItem[] = [
	{ href: '/why-jobbeta', label: 'Why JobBeta?' },
	{ href: '/how-it-works', label: 'How it works' },
	{ href: '/students', label: 'Students' },
	{ href: '/employers', label: 'Employers' }
];

const sectionNavs: NavItem[][] = [
	[
		{ href: '/students', label: 'Students' },
		{ href: '/career-tips', label: 'Career Tips' }
	],
	[
		{ href: '/employers', label: 'Employers' },
		{ href: '/products', label: 'Products & Solutions' }
	]
];

function matches(pathname: string, href: string) {
	return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Get navigation items for a specific pathname.
 * Nested routes inherit their section's nav.
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
