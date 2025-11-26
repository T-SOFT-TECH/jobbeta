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
		]
	} = $props();
	let activeTopic = $state('All');
</script>

<div class="mb-16 flex flex-col items-center">
	<h2 class="text-text-muted mb-8 text-[40px] font-bold">Featured by Selected Topics</h2>
	<div class="flex flex-wrap justify-center gap-4">
		{#each topics as topic}
			<button
				class="rounded-[20px] border border-[#d9d9d9] px-6 py-2.5 text-base font-medium transition-colors
        {activeTopic === topic
					? 'bg-primary text-white'
					: 'text-text-muted/60 bg-white/5 hover:bg-gray-50'}"
				onclick={() => (activeTopic = topic)}
			>
				{topic}
			</button>
		{/each}
	</div>
</div>
