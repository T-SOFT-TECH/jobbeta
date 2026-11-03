<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
	import { pricingSegments } from '$lib/content/employers';
</script>

<!--
	Client review v2: no tiers, prices or feature promises until pricing is
	validated. Keeps employers interested without premature commitments.
-->
<section id="pricing" class="section relative scroll-mt-20 overflow-hidden bg-neutral-light">
	<div class="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/8 blur-3xl"></div>
	<div class="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-[#3296f8]/8 blur-3xl"></div>

	<div class="page-container relative">
		<div class="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
			<span class="eyebrow">Pricing coming soon</span>
			<h2 class="title-section text-secondary">Plans that grow with your hiring.</h2>
			<p class="lead text-text-secondary">
				Flexible hiring solutions for teams of every size. Join our waitlist to be first to know when
				pricing is announced.
			</p>
		</div>

		<ul class="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
			{#each pricingSegments as segment (segment.name)}
				<li
					class="lift flex flex-col gap-4 rounded-3xl p-6 md:p-7 {segment.dark
						? 'bg-secondary text-white shadow-xl'
						: 'border border-neutral-grey bg-white text-secondary'}"
				>
					<span
						class="flex h-12 w-12 items-center justify-center rounded-2xl {segment.dark
							? 'bg-primary/30 text-white'
							: 'bg-primary/10 text-primary'}"
					>
						<Icon name={segment.icon} size={22} />
					</span>
					<div class="flex flex-col gap-1.5">
						<h3 class="font-geist text-xl font-semibold">{segment.name}</h3>
						<p class="font-geist text-base leading-relaxed {segment.dark ? 'text-white/75' : 'text-text-secondary'}">
							{segment.summary}
						</p>
					</div>
				</li>
			{/each}
		</ul>

		<div class="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
			<a href={links.waitlistEmployer} class="btn btn-primary">
				Join the Waitlist <Icon name="arrow-right" size={18} />
			</a>
			<a href={links.demo} class="btn btn-outline">Contact Sales</a>
		</div>
	</div>
</section>
