<script lang="ts">
	import { tipTopics, type TipTopic } from '$lib/content/careerTips';

	let { activeTopic = $bindable<TipTopic>('All') }: { activeTopic?: TipTopic } = $props();
</script>

<div class="flex flex-col gap-5">
	<h2 class="title-section text-secondary">Explore Career Topics</h2>

	<!-- Wraps on desktop, swipes on phones -->
	<div class="relative -mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:overflow-visible sm:px-0">
		<div class="flex w-max gap-2.5 sm:w-auto sm:flex-wrap md:gap-3" role="group" aria-label="Filter tips by topic">
			{#each tipTopics as topic (topic)}
				<button
					type="button"
					aria-pressed={activeTopic === topic}
					onclick={() => (activeTopic = topic)}
					class="shrink-0 cursor-pointer rounded-full border px-5 py-2.5 font-geist text-sm font-medium transition-colors duration-300 active:scale-95 md:text-base
						{activeTopic === topic
						? 'border-primary bg-primary text-white shadow-md shadow-primary/25'
						: 'border-neutral-grey bg-white text-text-secondary hover:border-primary/40 hover:text-secondary'}"
				>
					{topic}
				</button>
			{/each}
		</div>
	</div>
</div>
