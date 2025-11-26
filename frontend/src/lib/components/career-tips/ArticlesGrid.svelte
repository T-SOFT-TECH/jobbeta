<script>
	let { articles = [] } = $props();
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
	{#each articles as article}
		<div
			class="bg-text-muted/5 hover:bg-text-muted/10 flex cursor-pointer flex-col gap-4 rounded-2xl p-6 transition-colors"
		>
			<div class="flex items-start justify-between gap-4">
				<h3 class="text-text-muted/80 flex-1 text-xl font-bold">{article.title}</h3>
				{#if article.icon}
					<img src={article.icon} alt="" class="h-6 w-6 shrink-0" />
				{/if}
			</div>
			{#if article.content}
				<p class="text-text-muted/80 text-sm leading-relaxed">
					{article.content}
				</p>
			{/if}
		</div>
	{/each}
</div>
