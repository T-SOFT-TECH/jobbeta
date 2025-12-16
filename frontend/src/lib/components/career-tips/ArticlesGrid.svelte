<script>
	import { slide, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let { articles = [] } = $props();
	let openIndex = $state(-1);

	// Reset open index when articles change (i.e., topic filter changes)
	$effect(() => {
		articles;
		openIndex = -1;
	});

	/**
	 * @param {number} index
	 */
	function toggle(index) {
		openIndex = openIndex === index ? -1 : index;
	}

	// Split articles into two columns
	let leftColumn = $derived(articles.filter((_, i) => i % 2 === 0));
	let rightColumn = $derived(articles.filter((_, i) => i % 2 === 1));
</script>

<!-- Articles grid with view-transition-name for smooth tab switching -->
<div class="articles-grid mt-8 flex flex-col gap-6 lg:flex-row lg:gap-[93px]">
	<!-- Left Column -->
	<div class="flex w-full flex-col gap-6 lg:w-1/2">
		{#each leftColumn as article, index (article.title)}
			{@const actualIndex = index * 2}
			<button
				class="flex w-full flex-col rounded-2xl bg-[rgba(42,44,44,0.04)] p-5 text-left transition-all duration-300 hover:bg-[rgba(42,44,44,0.08)] md:p-6"
				onclick={() => toggle(actualIndex)}
				in:fade={{ duration: 200, delay: index * 50 }}
			>
				<div class="flex items-center justify-between gap-[30px]">
					<h3
						class="flex-1 text-lg leading-[30px] font-bold transition-colors duration-300 md:text-xl {openIndex ===
						actualIndex
							? 'text-primary'
							: 'text-[rgba(42,44,44,0.80)]'}"
						style="font-family: var(--font-geist); letter-spacing: -0.005em;"
					>
						{article.title}
					</h3>
					<!-- Animated plus/minus icon -->
					<div class="relative flex h-6 w-6 shrink-0 items-center justify-center">
						<!-- Horizontal line (always visible) -->
						<span
							class="absolute h-0.5 w-4 rounded-full transition-colors duration-300 {openIndex ===
							actualIndex
								? 'bg-primary'
								: 'bg-[rgba(42,44,44,0.6)]'}"
						></span>
						<!-- Vertical line (animates to 0 when open) -->
						<span
							class="absolute h-4 w-0.5 rounded-full transition-all duration-300 {openIndex ===
							actualIndex
								? 'scale-y-0 bg-primary'
								: 'scale-y-100 bg-[rgba(42,44,44,0.6)]'}"
						></span>
					</div>
				</div>

				{#if openIndex === actualIndex && article.content}
					<div
						class="mt-4 text-sm leading-[21px] text-[rgba(42,44,44,0.80)]"
						style="font-family: var(--font-geist); letter-spacing: -0.005em;"
						transition:slide={{ duration: 300, easing: cubicOut }}
					>
						{article.content}
					</div>
				{/if}
			</button>
		{/each}
	</div>

	<!-- Right Column -->
	<div class="flex w-full flex-col gap-6 lg:w-1/2">
		{#each rightColumn as article, index (article.title)}
			{@const actualIndex = index * 2 + 1}
			<button
				class="flex w-full flex-col rounded-2xl bg-[rgba(42,44,44,0.04)] p-5 text-left transition-all duration-300 hover:bg-[rgba(42,44,44,0.08)] md:p-6"
				onclick={() => toggle(actualIndex)}
				in:fade={{ duration: 200, delay: index * 50 }}
			>
				<div class="flex items-center justify-between gap-[30px]">
					<h3
						class="flex-1 text-lg leading-[30px] font-bold transition-colors duration-300 md:text-xl {openIndex ===
						actualIndex
							? 'text-primary'
							: 'text-[rgba(42,44,44,0.80)]'}"
						style="font-family: var(--font-geist); letter-spacing: -0.005em;"
					>
						{article.title}
					</h3>
					<!-- Animated plus/minus icon -->
					<div class="relative flex h-6 w-6 shrink-0 items-center justify-center">
						<!-- Horizontal line (always visible) -->
						<span
							class="absolute h-0.5 w-4 rounded-full transition-colors duration-300 {openIndex ===
							actualIndex
								? 'bg-primary'
								: 'bg-[rgba(42,44,44,0.6)]'}"
						></span>
						<!-- Vertical line (animates to 0 when open) -->
						<span
							class="absolute h-4 w-0.5 rounded-full transition-all duration-300 {openIndex ===
							actualIndex
								? 'scale-y-0 bg-primary'
								: 'scale-y-100 bg-[rgba(42,44,44,0.6)]'}"
						></span>
					</div>
				</div>

				{#if openIndex === actualIndex && article.content}
					<div
						class="mt-4 text-sm leading-[21px] text-[rgba(42,44,44,0.80)]"
						style="font-family: var(--font-geist); letter-spacing: -0.005em;"
						transition:slide={{ duration: 300, easing: cubicOut }}
					>
						{article.content}
					</div>
				{/if}
			</button>
		{/each}
	</div>
</div>

<style>
	/* View transition for articles grid */
	.articles-grid {
		view-transition-name: articles-grid;
	}
</style>
