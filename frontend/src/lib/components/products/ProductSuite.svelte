<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { additionalServices, solutions } from '$lib/content/products';
</script>

<!--
	Client review v2: clear solutions instead of Campus/Enterprise pricing tiers.
	One Enterprise card, one Career Centres "Coming Soon" card, and two add-on
	services (Assessment Design removed for the MVP).
-->
<section id="product-suite" class="section scroll-mt-20 bg-white">
	<div class="page-container">
		<div class="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
			<h2 class="title-section text-secondary">Our product suite</h2>
			<p class="lead text-text-secondary">
				Explore solutions designed to make early-career hiring smarter, simpler and more connected.
			</p>
		</div>

		<ul class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
			{#each solutions as solution, i (solution.title)}
				<li
					class="lift flex flex-col gap-6 rounded-3xl p-6 md:p-8 {i === 0
						? 'bg-primary text-white shadow-xl'
						: 'bg-neutral-light text-secondary'}"
				>
					<div class="flex items-start justify-between gap-4">
						<span
							class="flex h-12 w-12 items-center justify-center rounded-2xl {i === 0
								? 'bg-white text-primary'
								: 'bg-white text-primary shadow-sm'}"
						>
							<Icon name={solution.icon} size={22} />
						</span>
						{#if solution.comingSoon}
							<span class="eyebrow">Coming Soon</span>
						{/if}
					</div>
					<div class="flex flex-col gap-2">
						<h3 class="font-geist text-2xl font-semibold">{solution.title}</h3>
						<p class="font-geist text-base leading-relaxed {i === 0 ? 'text-white/80' : 'text-text-secondary'}">
							{solution.summary}
						</p>
					</div>
					<ul class="flex flex-col gap-2.5">
						{#each solution.features as feature (feature)}
							<li class="flex items-center gap-2.5 font-geist text-sm md:text-base">
								<Icon name="check" size={16} strokeWidth={2.5} class={i === 0 ? 'text-white' : 'text-primary'} />
								{feature}
							</li>
						{/each}
					</ul>
					<a
						href={solution.cta.href}
						class="btn mt-auto w-full sm:w-fit {i === 0 ? 'btn-light text-primary' : 'btn-primary'}"
					>
						{solution.cta.label} <Icon name="arrow-right" size={18} />
					</a>
				</li>
			{/each}
		</ul>

		<h3 class="mt-12 font-geist text-xl font-semibold text-secondary">Additional services</h3>
		<ul class="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
			{#each additionalServices as service (service.title)}
				<li class="lift flex flex-col gap-4 rounded-3xl border border-neutral-grey p-6 sm:flex-row sm:items-center">
					<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
						<Icon name={service.icon} size={20} />
					</span>
					<div class="flex flex-1 flex-col gap-1">
						<p class="flex flex-wrap items-center gap-2 font-geist text-lg font-semibold text-secondary">
							{service.title}
							{#if service.comingSoon}
								<span class="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-primary uppercase">
									Coming Soon
								</span>
							{/if}
						</p>
						<p class="font-geist text-sm leading-relaxed text-text-secondary">{service.summary}</p>
					</div>
					<a
						href={service.cta.href}
						class="inline-flex shrink-0 items-center gap-2 font-geist text-sm font-semibold text-primary"
					>
						{service.cta.label} <Icon name="arrow-right" size={16} />
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
