<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { afterNavigate, onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { armPageParts, canAnimate, disarmPageParts } from '$lib/motion/transitions';
	import { refreshReveal, startReveal } from '$lib/motion/reveal';

	let { children } = $props();

	onMount(startReveal);
	afterNavigate(() => refreshReveal());

	// Page-to-page View Transitions: the header holds still, the active nav pill slides, the hero
	// band and title morph into the next page's, everything else fades out and rises in.
	onNavigate((navigation) => {
		if (!canAnimate()) return;
		// Same page (hash jump, form action): nothing to transition
		if (navigation.from?.url.pathname === navigation.to?.url.pathname) return;

		const html = document.documentElement;
		// The morph is the entrance from now on: CSS entrance animations are for full loads only
		html.classList.add('vt-nav');
		html.dataset.vt = 'page';
		html.toggleAttribute('data-vt-back', navigation.type === 'popstate' && (navigation.delta ?? 0) < 0);
		armPageParts(); // old page, before the first snapshot

		return new Promise((resolve) => {
			const transition = document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
				armPageParts(); // new page, before the second snapshot
				refreshReveal(true); // on-screen content appears at once instead of fading in under the morph
			});
			transition.finished.finally(() => {
				disarmPageParts();
				delete html.dataset.vt;
				html.removeAttribute('data-vt-back');
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Lato:wght@400;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<!-- overflow-x-clip: sideways reveal slides must never cause a horizontal scrollbar (clip keeps sticky working) -->
	<main class="flex-1 overflow-x-clip">
		{@render children?.()}
	</main>
	<Footer />
</div>
