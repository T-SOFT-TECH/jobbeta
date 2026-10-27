<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
	import { modules } from '$lib/content/products';
</script>

<section class="relative overflow-hidden bg-secondary text-white">
	<div class="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-primary/40 blur-3xl"></div>
	<div
		class="page-container relative grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-20"
	>
		<div class="flex flex-col items-start gap-6">
			<span class="eyebrow-light"><Icon name="sparkles" size={14} /> Our products</span>
			<h1 class="title-display">One platform for early-career hiring.</h1>
			<p class="lead max-w-xl text-white/80">
				Matching, job posting, interview scheduling and analytics, built for employers, schools and
				the students they serve.
			</p>
			<div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
				<a href={links.demo} class="btn btn-primary">Book a Demo</a>
				<a href="#product-suite" class="btn btn-outline-light">See plans</a>
			</div>
		</div>

		<ul class="grid gap-4 sm:grid-cols-2">
			{#each modules as mod, i (mod.title)}
				<li
					class="flex flex-col gap-3 rounded-2xl p-5 {i === 0
						? 'bg-primary'
						: 'bg-white/6 ring-1 ring-white/10'}"
				>
					<span class="flex h-10 w-10 items-center justify-center rounded-xl {i === 0 ? 'bg-white text-primary' : 'bg-primary'}">
						<Icon name={mod.icon} size={20} />
					</span>
					<p class="font-geist font-semibold">{mod.title}</p>
					<p class="font-geist text-sm leading-relaxed text-white/75">{mod.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
