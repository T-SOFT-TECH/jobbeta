<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import Marquee from '$lib/components/ui/Marquee.svelte';
	import { sampleJobs } from '$lib/content/home';
	import { links } from '$lib/config/site';

	const half = Math.ceil(sampleJobs.length / 2);
	const rows = [sampleJobs.slice(0, half), sampleJobs.slice(half)];

	const initials = (company: string) =>
		company
			.split(' ')
			.slice(0, 2)
			.map((w) => w[0])
			.join('');
</script>

<section class="section overflow-hidden bg-secondary">
	<div class="page-container mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
		<h2 class="title-section max-w-2xl text-white">
			Curated job and internship opportunities tailored to your goals.
		</h2>
		<a href={links.jobs} class="btn btn-outline-light w-full md:w-auto">
			Explore jobs <Icon name="arrow-right" size={18} />
		</a>
	</div>

	<div class="flex flex-col gap-4">
		{#each rows as row, i (i)}
			<Marquee items={row} duration={50} reverse={i === 1}>
				{#snippet item(job)}
					<article class="lift flex w-72 flex-col gap-3 rounded-2xl bg-white p-4">
						<div class="flex items-center gap-3">
							<span
								class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-geist text-sm font-bold text-white"
								style="background-color: {job.color}"
							>
								{initials(job.company)}
							</span>
							<div class="min-w-0 font-geist">
								<h3 class="truncate text-sm font-semibold text-secondary">{job.role}</h3>
								<p class="truncate text-xs text-text-secondary">{job.company} · {job.category}</p>
							</div>
						</div>
						<div class="flex gap-2 font-geist text-xs text-secondary">
							<span class="rounded-full bg-neutral-light px-2.5 py-1">{job.type}</span>
							<span class="flex items-center gap-1 rounded-full bg-neutral-light px-2.5 py-1">
								<Icon name="map-pin" size={12} />
								{job.location}
							</span>
						</div>
					</article>
				{/snippet}
			</Marquee>
		{/each}
	</div>
	<p class="page-container mt-6 font-geist text-xs text-white/50">
		Sample listings shown for illustration.
	</p>
</section>
