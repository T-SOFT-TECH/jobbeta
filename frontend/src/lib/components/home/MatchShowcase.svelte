<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import MatchCard from '$lib/components/ui/MatchCard.svelte';
	import { links } from '$lib/config/site';

	// Home uses the defaults; Products & Solutions passes the Feature Spotlight copy
	let {
		eyebrow = 'Smarter talent matching',
		title = 'The right talent. The right opportunity. A better match.',
		body = 'JobBeta matches emerging talent with employers based on skills, experience, and potential, making every connection more meaningful.',
		points = [
			'Relevant matches, backed by match scores',
			'Skills, projects, and experience beyond CVs',
			'Direct messaging and interview scheduling'
		],
		cta = { label: 'Join Waitlist', href: links.waitlist }
	}: {
		eyebrow?: string;
		title?: string;
		body?: string;
		points?: string[];
		cta?: { label: string; href: string };
	} = $props();
</script>

<section class="section relative overflow-hidden bg-primary text-white">
	<div
		class="pointer-events-none absolute inset-0 opacity-15"
		style="background-image: url('/images/kick-start-your-career-bg.svg'); background-size: cover;"
	></div>

	<div class="page-container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
		<div class="flex flex-col items-start gap-6">
			<span class="eyebrow-light">{eyebrow}</span>
			<h2 class="title-section">{title}</h2>
			<p class="lead text-white/85">{body}</p>
			<ul class="flex flex-col gap-3">
				{#each points as point (point)}
					<li class="flex items-start gap-3 font-geist text-base">
						<span class="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
							<Icon name="check" size={14} strokeWidth={3} />
						</span>
						{point}
					</li>
				{/each}
			</ul>
			<a href={cta.href} class="btn btn-light">
				{cta.label} <Icon name="arrow-right" size={18} />
			</a>
		</div>

		<MatchCard class="text-white" />
	</div>
</section>
