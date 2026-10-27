import { flushSync } from 'svelte';

/**
 * View Transition helpers shared by page navigation (routes/+layout.svelte) and in-page swaps
 * (tabs, filters). Names are applied just in time: a name that is always on would also be captured
 * by unrelated transitions, and an off-screen named element flies across the viewport.
 */

export const canAnimate = () =>
	typeof document !== 'undefined' &&
	'startViewTransition' in document &&
	!matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Set (or clear, with `null`) an element's view-transition name and role class. */
export function vtName(el: HTMLElement, name: string | null, kind?: string) {
	// Names must be CSS identifiers: no spaces, no leading digit
	el.style.viewTransitionName = name ? name.replace(/[^a-zA-Z0-9_-]/g, '-') : '';
	el.style.setProperty('view-transition-class', name && kind ? kind : '');
}

export const inViewport = (el: Element) => {
	const r = el.getBoundingClientRect();
	return r.bottom > 0 && r.top < innerHeight;
};

let active: ViewTransition | null = null;

/**
 * Run a same-page state change as a view transition. `arm` names the elements that should morph;
 * it runs on the old DOM and again on the new one, and is undone when the transition ends.
 * Everything unnamed cross-fades quickly (see `html[data-vt='swap']` in app.css).
 */
export function morph(
	update: () => void,
	{ arm, direction }: { arm: (on: boolean) => void; direction?: 'next' | 'prev' }
) {
	if (!canAnimate()) {
		update();
		return;
	}
	const html = document.documentElement;
	arm(true);
	html.dataset.vt = 'swap';
	if (direction) html.dataset.vtDir = direction;
	else delete html.dataset.vtDir;

	const transition = document.startViewTransition(() => {
		update();
		flushSync(); // the new DOM must exist before the browser takes the second snapshot
		arm(true);
	});
	active = transition;
	transition.finished.finally(() => {
		// A newer swap may have started (and skipped this one); leave its names alone
		if (active !== transition) return;
		arm(false);
		delete html.dataset.vt;
		delete html.dataset.vtDir;
		active = null;
	});
}

/**
 * The hero band is the block around the page's single h1. Pages wrap it differently (a top-level
 * section, or a section/div inside one page-wide wrapper), so look outward from the title.
 * Whole-page wrappers are not heroes: morphing those would swallow the page-rise.
 */
function findHero(h1: Element | null) {
	if (!h1) return null;
	const hero =
		h1.closest<HTMLElement>('main > section') ??
		h1.closest<HTMLElement>('main > * > section') ??
		h1.closest<HTMLElement>('main > * > div');
	return hero && hero.offsetHeight < innerHeight * 1.5 ? hero : null;
}

/** The parts every page shares, named by position so one page's hero morphs into the next one's. */
function pageParts() {
	const h1 = document.querySelector<HTMLElement>('main h1');
	return [
		[findHero(h1), 'page-hero', 'vt-panel'],
		[h1, 'page-title', 'vt-text']
	] as const;
}

/** Name the hero and title of the current DOM, but only if visible (else they'd fly in from afar). */
export function armPageParts() {
	for (const [el, name, kind] of pageParts()) {
		if (el) vtName(el, inViewport(el) ? name : null, kind);
	}
}

export function disarmPageParts() {
	for (const [el] of pageParts()) if (el) vtName(el, null);
}
