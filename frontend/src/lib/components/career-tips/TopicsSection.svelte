<script>
	let {
		topics = [
			'All',
			'Networking',
			'Productivity',
			'Resume',
			'Career',
			'Job Applications',
			'Portfolios'
		],
		activeTopic = $bindable('All')
	} = $props();
</script>

<div class="topics-section mb-12 flex flex-col items-center gap-5">
	<h2
		class="text-center text-2xl font-bold text-black sm:text-3xl md:text-[40px] md:leading-[60px]"
		style="font-family: var(--font-geist); letter-spacing: -0.005em;"
	>
		Featured by Selected Topics
	</h2>

	<!-- Topics with smooth transitions -->
	<div class="flex flex-wrap justify-center gap-3 md:gap-4">
		{#each topics as topic}
			<button
				class="topic-btn relative cursor-pointer overflow-hidden rounded-[20px] border px-4 py-2.5 text-sm font-medium transition-all duration-300 ease-out sm:px-6 sm:text-base
        {activeTopic === topic
					? 'border-primary bg-primary text-white shadow-md shadow-primary/30'
					: 'border-[#d9d9d9] bg-white/5 text-[rgba(42,44,44,0.60)] hover:border-primary/50 hover:bg-gray-50 hover:text-[rgba(42,44,44,0.80)]'}"
				style="font-family: 'Lato', sans-serif; letter-spacing: -0.005em;"
				onclick={() => (activeTopic = topic)}
			>
				{topic}
			</button>
		{/each}
	</div>
</div>

<style>
	/* View transition for topics section */
	.topics-section {
		view-transition-name: topics-section;
	}

	/* Smooth scale on active state */
	.topic-btn {
		transform: scale(1);
	}

	.topic-btn:active {
		transform: scale(0.95);
	}
</style>
