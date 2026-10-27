<script lang="ts" generics="T">
	import type { Snippet } from 'svelte';

	let {
		items,
		item,
		duration = 40,
		reverse = false,
		class: className = ''
	}: {
		items: T[];
		item: Snippet<[T]>;
		/** Seconds for one full loop */
		duration?: number;
		reverse?: boolean;
		class?: string;
	} = $props();
</script>

<!-- The list renders twice and slides by exactly one copy, so the loop has no visible seam -->
<div class="marquee {className}" style="--duration: {duration}s">
	<div class="marquee-track" class:reverse>
		{#each [0, 1] as copy (copy)}
			<ul class="marquee-group" aria-hidden={copy === 1 ? 'true' : undefined} inert={copy === 1}>
				{#each items as entry, i (i)}
					<li>{@render item(entry)}</li>
				{/each}
			</ul>
		{/each}
	</div>
</div>

<style>
	.marquee {
		--gap: 1rem;
		overflow: hidden;
		mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
	}

	.marquee-track {
		display: flex;
		width: max-content;
		animation: marquee var(--duration) linear infinite;
	}

	.marquee-track.reverse {
		animation-direction: reverse;
	}

	.marquee:hover .marquee-track {
		animation-play-state: paused;
	}

	.marquee-group {
		display: flex;
		align-items: stretch;
		gap: var(--gap);
		padding-right: var(--gap);
	}

	@keyframes marquee {
		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee-track {
			animation: none;
		}

		.marquee {
			overflow-x: auto;
		}
	}
</style>
