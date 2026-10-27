import { inViewport } from './transitions';

/**
 * Scroll reveal. Elements opt in with `data-reveal` (up · down · left · right · scale · fade · bar)
 * or `data-reveal-stagger` (its children rise one after another). Sections without markup are tagged
 * automatically, so older pages animate too. The hidden state lives in app.css behind `html.reveal`,
 * a class app.html only sets when motion is allowed and removes again if this script never starts.
 */

const SELECTOR = '[data-reveal], [data-reveal-stagger]';
const MAX_STAGGER = 10;

let io: IntersectionObserver | undefined;

const isClientNav = () => document.documentElement.classList.contains('vt-nav');

// Longest reveal: 0.9s plus a 10-step stagger
const REVEAL_MS = 1800;

function show(el: Element, instant: boolean) {
	io?.unobserve(el);
	el.classList.add('is-revealed');
	// `reveal-done` ends the reveal for good, so children inserted later (a tab panel's new
	// items) render normally instead of replaying the entrance mid-transition
	if (instant) el.classList.add('reveal-done');
	else setTimeout(() => el.classList.add('reveal-done'), REVEAL_MS);
}

/**
 * `instantIfVisible`: after a client navigation the page morph is the entrance, so whatever is
 * already on screen appears at once; below-the-fold content still animates on scroll.
 */
function bind(el: HTMLElement, instantIfVisible: boolean) {
	if (!io || el.dataset.revealBound !== undefined) return;
	el.dataset.revealBound = '';
	if (el.hasAttribute('data-reveal-stagger')) {
		[...el.children].forEach((child, i) =>
			(child as HTMLElement).style.setProperty('--i', String(Math.min(i, MAX_STAGGER)))
		);
	}
	if (instantIfVisible && inViewport(el)) show(el, true);
	else io.observe(el);
}

const isListLike = (el: Element) =>
	el.tagName === 'UL' ||
	el.tagName === 'OL' ||
	el.classList.contains('grid') ||
	el.classList.contains('snap-row');

/**
 * 'left' when a sibling sits to its right (so it enters from the left edge), 'right' for the
 * mirror case, null when it's alone on its row or in the middle. Measured from the live layout,
 * so a pair that sits side by side on desktop but stacks on a phone just rises on the phone.
 */
type Side = 'left' | 'right' | null;

function sideOf(el: HTMLElement, siblings: HTMLElement[]): Side {
	const r = el.getBoundingClientRect();
	let hasRight = false;
	let hasLeft = false;
	for (const sibling of siblings) {
		if (sibling === el) continue;
		const o = sibling.getBoundingClientRect();
		const overlap = Math.min(r.bottom, o.bottom) - Math.max(r.top, o.top);
		if (overlap < Math.min(r.height, o.height) * 0.3) continue; // not on the same row
		if (o.left >= r.right - 1) hasRight = true;
		else if (o.right <= r.left + 1) hasLeft = true;
	}
	if (hasRight && !hasLeft) return 'left';
	if (hasLeft && !hasRight) return 'right';
	return null;
}

const isMedia = (el: HTMLElement) =>
	el.matches('img, picture, figure, video') ||
	(!!el.querySelector('img') && !el.textContent?.trim());

/** Pick an entrance from what the element is and where it sits */
function entranceFor(
	el: HTMLElement,
	siblings: HTMLElement[],
	inherited: Side
): [attr: string, variant: string] {
	if (isListLike(el) && el.children.length > 1) {
		const display = getComputedStyle(el).display;
		// Swipe rows (flex on phones) slide in from the side they scroll from; card grids scale
		// up; plain lists rise one item at a time
		if (el.classList.contains('snap-row') && display !== 'grid') return ['data-reveal-stagger', 'right'];
		return ['data-reveal-stagger', display === 'grid' ? 'scale' : ''];
	}
	const side = sideOf(el, siblings) ?? inherited;
	if (side) return ['data-reveal', side];
	if (isMedia(el)) return ['data-reveal', 'zoom'];
	if (el.matches('h1, h2, h3') || el.querySelector(':scope > h2, :scope > h3, :scope > * > h2')) return ['data-reveal', 'blur'];
	if (el.tagName === 'P') return ['data-reveal', 'fade'];
	return ['data-reveal', ''];
}

/** `inherited`: pieces of a block that enters from one side follow it from that side */
function tagChildren(container: Element, depth: number, inherited: Side = null) {
	const siblings = [...container.children].filter(
		(c): c is HTMLElement =>
			c instanceof HTMLElement &&
			c.getClientRects().length > 0 &&
			!['absolute', 'fixed'].includes(getComputedStyle(c).position)
	);
	for (const child of siblings) {
		if (child.matches(SELECTOR)) continue;
		// Something inside already has its own reveal: animate its siblings, not the whole block
		if (child.querySelector(SELECTOR)) {
			if (depth < 2) tagChildren(child, depth + 1, sideOf(child, siblings) ?? inherited);
			continue;
		}
		// Never hide what the reader can already see
		if (child.getBoundingClientRect().top < innerHeight) continue;
		const [attr, variant] = entranceFor(child, siblings, inherited);
		child.setAttribute(attr, variant);
	}
}

/** Page blocks: <section>s, or for div-built pages the blocks inside the page-wide wrapper */
function pageBlocks(): Element[] {
	const main = document.querySelector('main');
	if (!main) return [];
	const sections = [...main.querySelectorAll('section')];
	if (sections.length || !main.firstElementChild) return sections;
	return [...main.firstElementChild.children];
}

function autoTag() {
	const h1 = document.querySelector('main h1');
	for (const section of pageBlocks()) {
		if (h1 && section.contains(h1)) continue; // the hero has its own CSS entrance
		if (section.closest('[data-reveal-skip]') || section.closest(SELECTOR)) continue;
		let content: Element = section.querySelector(':scope > .page-container') ?? section;
		// Step through single wrappers to reach the real content blocks
		for (let i = 0; i < 3 && content.children.length === 1; i++) content = content.children[0];
		tagChildren(content, 0);
	}
}

function bindAll(instantIfVisible: boolean) {
	document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => bind(el, instantIfVisible));
}

let retag: ReturnType<typeof setTimeout> | undefined;

/** Bind everything on the current page; safe to call repeatedly. */
export function refreshReveal(instantIfVisible = isClientNav()) {
	if (!io) return;
	autoTag();
	bindAll(instantIfVisible);
	// Images still loading make the page shorter than it will be, so a section can look
	// "on screen" now and sit below the fold a moment later. Tag again once layout settles:
	// anything on screen by then is still skipped, so this never hides what's visible.
	clearTimeout(retag);
	retag = setTimeout(() => {
		autoTag();
		bindAll(false);
	}, 800);
}

export function startReveal() {
	const html = document.documentElement;
	if (!html.classList.contains('reveal') || !('IntersectionObserver' in window)) return () => {};
	(window as Window & { __revealReady?: boolean }).__revealReady = true;

	io = new IntersectionObserver(
		(entries) => entries.forEach((e) => e.isIntersecting && show(e.target, false)),
		{ rootMargin: '0px 0px -8% 0px' }
	);
	refreshReveal(false);
	if (document.readyState !== 'complete') {
		addEventListener('load', () => (autoTag(), bindAll(false)), { once: true });
	}

	// Content rendered later (tab panels, filtered lists, the next page) binds itself
	const mo = new MutationObserver((records) => {
		for (const record of records) {
			for (const node of record.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;
				if (node.matches(SELECTOR)) bind(node, true);
				node.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => bind(el, true));
			}
		}
	});
	mo.observe(document.body, { childList: true, subtree: true });

	return () => {
		io?.disconnect();
		io = undefined;
		mo.disconnect();
	};
}
