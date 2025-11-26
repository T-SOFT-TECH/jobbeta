<script>
	let activeTab = $state('For School');
	const tabs = ['For School', 'Large scale organizations', 'Additional services'];
</script>

<div class="mb-12 flex flex-wrap justify-center gap-4 px-4 md:gap-6">
	{#each tabs as tab}
		<button
			class="rounded-full px-6 py-2.5 text-base font-medium transition-colors duration-200
      {activeTab === tab
				? 'bg-primary font-bold text-white'
				: 'text-text-muted bg-[#f2f4f7] hover:bg-gray-200'}"
			onclick={() => (activeTab = tab)}
		>
			{tab}
		</button>
	{/each}
</div>
