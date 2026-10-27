<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
	import { tools } from '$lib/content/careerCenters';

	const accents = ['#7502ff', '#3296f8', '#0e9f6e', '#f59e0b', '#e11d48', '#9333ea'];
</script>

<section class="section bg-white">
	<div class="page-container">
		<div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
			<div class="flex max-w-2xl flex-col gap-3">
				<span class="eyebrow">Features</span>
				<h2 class="title-section text-secondary">Tools that help every student get career-ready</h2>
			</div>
			<a href={links.resources} class="inline-flex shrink-0 items-center gap-2 font-geist font-semibold text-primary">
				Browse free resources <Icon name="arrow-right" size={18} />
			</a>
		</div>

		<ul class="snap-row mt-10 md:grid-cols-2 lg:grid-cols-3">
			{#each tools as tool, i (tool.title)}
				<li class="lift flex gap-4 rounded-2xl border border-neutral-grey p-5">
					<span
						class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
						style="background-color: {accents[i % accents.length]}"
					>
						<Icon name={tool.icon} size={20} />
					</span>
					<div class="font-geist">
						<p class="font-semibold text-secondary">{tool.title}</p>
						<p class="mt-1 text-sm leading-relaxed text-text-secondary">{tool.body}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
