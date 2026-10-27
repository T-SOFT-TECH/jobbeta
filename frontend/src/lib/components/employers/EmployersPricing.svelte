<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
	import { plans } from '$lib/content/employers';
</script>

<!-- Prices are withheld until launch (client review: "edit with the appropriate pricing") -->
<section id="pricing" class="section scroll-mt-20 bg-white">
	<div class="page-container">
		<div class="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
			<span class="eyebrow">Plans</span>
			<h2 class="title-section text-secondary">Plans that grow with your hiring</h2>
			<p class="lead text-text-secondary">
				Pricing will be announced at launch. Join the waitlist for early-access rates, or
				<a href={links.demo} class="font-semibold text-primary underline-offset-4 hover:underline">talk to sales</a>
				about bulk hiring.
			</p>
		</div>

		<ul class="snap-row mt-10 md:grid-cols-3">
			{#each plans as plan (plan.name)}
				<li
					class="flex flex-col gap-6 rounded-3xl p-6 md:p-7 {plan.featured
						? 'bg-secondary text-white shadow-xl'
						: 'border border-neutral-grey bg-white text-secondary'}"
				>
					<div class="flex flex-col gap-2">
						<div class="flex items-center justify-between gap-3">
							<h3 class="font-geist text-xl font-semibold">{plan.name}</h3>
							{#if plan.featured}
								<span class="rounded-full bg-primary px-3 py-1 font-geist text-xs font-semibold">Most popular</span>
							{/if}
						</div>
						<p class="font-geist text-sm {plan.featured ? 'text-white/70' : 'text-text-secondary'}">{plan.summary}</p>
					</div>
					<p class="font-geist text-sm font-semibold {plan.featured ? 'text-white/90' : 'text-primary'}">
						Pricing at launch
					</p>
					<ul class="flex flex-col gap-2.5">
						{#each plan.features as feature (feature)}
							<li class="flex items-center gap-2.5 font-geist text-sm">
								<Icon name="check" size={16} strokeWidth={2.5} class={plan.featured ? 'text-[#b98aff]' : 'text-primary'} />
								{feature}
							</li>
						{/each}
					</ul>
					<a href={plan.cta.href} class="btn mt-auto {plan.featured ? 'btn-primary' : 'btn-outline'}">
						{plan.cta.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
