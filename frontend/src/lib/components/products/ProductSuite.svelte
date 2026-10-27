<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import SegmentedTabs from '$lib/components/ui/SegmentedTabs.svelte';
	import { suites, type SuiteKey } from '$lib/content/products';

	let active: SuiteKey = $state('organisations');
	const suite = $derived(suites.find((s) => s.key === active)!);
</script>

<section id="product-suite" class="section scroll-mt-20 bg-white">
	<div class="page-container">
		<div class="flex flex-col items-center gap-6 text-center">
			<div class="flex max-w-2xl flex-col items-center gap-3">
				<h2 class="title-section text-secondary">Our product suite</h2>
				<p class="lead text-text-secondary">
					Choose what fits your needs. Pricing is shared on request while we prepare for launch.
				</p>
			</div>
			<SegmentedTabs
				options={suites.map(({ key, label }) => ({ key, label }))}
				bind:value={active}
				idPrefix="suite"
				label="Product suite"
			/>
		</div>

		<ul
			id="suite-panel-{active}"
			role="tabpanel"
			aria-labelledby="suite-tab-{active}"
			class="snap-row mt-10 md:grid-cols-3"
		>
			{#each suite.tiers as tier (tier.name)}
				<li
					class="flex flex-col gap-6 rounded-3xl p-6 md:p-7 {tier.featured
						? 'bg-primary text-white shadow-xl'
						: 'bg-neutral-light text-secondary'}"
				>
					<div class="flex flex-col gap-2">
						<h3 class="font-geist text-xl font-semibold">{tier.name}</h3>
						<p class="font-geist text-sm {tier.featured ? 'text-white/80' : 'text-text-secondary'}">{tier.summary}</p>
					</div>
					<ul class="flex flex-col gap-2.5">
						{#each tier.features as feature (feature)}
							<li class="flex items-center gap-2.5 font-geist text-sm">
								<Icon name="check" size={16} strokeWidth={2.5} class={tier.featured ? 'text-white' : 'text-primary'} />
								{feature}
							</li>
						{/each}
					</ul>
					<a href={tier.cta.href} class="btn mt-auto {tier.featured ? 'btn-light text-primary' : 'btn-primary'}">
						{tier.cta.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
