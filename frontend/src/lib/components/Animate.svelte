<script lang="ts">
	import type { Snippet } from 'svelte';

	// Thin wrapper over the shared scroll-reveal engine ($lib/motion/reveal.ts); kept for the
	// pages that already use it. New code can put `data-reveal` on the element directly.
	let {
		variant = 'fade',
		duration = 0.9,
		delay = 0,
		children
	}: {
		variant?: 'fade' | 'top' | 'bottom' | 'left' | 'right' | 'scale';
		duration?: number;
		delay?: number;
		children?: Snippet;
	} = $props();

	// Old variant names describe where the element starts from
	const direction = { fade: 'fade', top: 'down', bottom: 'up', left: 'left', right: 'right', scale: 'scale' };
</script>

<div
	data-reveal={direction[variant]}
	style="--reveal-duration: {duration}s; --reveal-delay: {delay}s"
>
	{@render children?.()}
</div>
