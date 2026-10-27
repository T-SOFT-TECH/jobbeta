<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
	import type { SampleJob } from '$lib/content/home';

	let { job }: { job: SampleJob } = $props();

	const initials = $derived(
		job.company
			.split(' ')
			.slice(0, 2)
			.map((w) => w[0])
			.join('')
	);
</script>

<article class="flex h-full flex-col gap-4 lift rounded-2xl border border-neutral-grey bg-white p-5">
	<div class="flex items-center gap-3">
		<span
			class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-geist text-sm font-bold text-white"
			style="background-color: {job.color}"
			aria-hidden="true"
		>
			{initials}
		</span>
		<div class="min-w-0 font-geist leading-tight">
			<h3 class="truncate font-semibold text-secondary">{job.role}</h3>
			<p class="truncate text-sm text-text-secondary">{job.company}</p>
		</div>
	</div>
	<ul class="flex flex-wrap gap-2 font-geist text-xs">
		<li class="flex items-center gap-1 rounded-full bg-neutral-light px-2.5 py-1 text-secondary">
			<Icon name="map-pin" size={12} />
			{job.location}
		</li>
		<li class="rounded-full bg-neutral-light px-2.5 py-1 text-secondary">{job.type}</li>
		<li class="rounded-full bg-neutral-light px-2.5 py-1 text-secondary">{job.category}</li>
	</ul>
	<!-- Applications open at launch; until then every apply routes to the waitlist -->
	<a href={links.waitlistStudent} class="btn btn-primary mt-auto py-2.5 text-sm">
		Apply at launch <span class="sr-only">for {job.role} at {job.company}</span>
	</a>
</article>
