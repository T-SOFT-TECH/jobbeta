<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { comparison, suites } from '$lib/content/products';

	const tiers = suites.find((s) => s.key === 'organisations')!.tiers;
</script>

<section class="section bg-neutral-light">
	<div class="page-container">
		<div class="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
			<h2 class="title-section text-secondary">Compare plans</h2>
			<p class="lead text-text-secondary">What's included for large-scale organisations.</p>
		</div>

		<!-- A real table so screen readers announce the row and column for each tick -->
		<!-- relative: the sr-only labels are absolutely positioned and would otherwise escape this scroll clip -->
		<div class="relative mt-10 overflow-x-auto rounded-3xl bg-white p-2 md:p-4">
			<table class="w-full min-w-[560px] border-collapse font-geist text-sm">
				<thead>
					<tr>
						<th scope="col" class="p-4 text-left font-semibold text-text-secondary">Feature</th>
						{#each tiers as tier (tier.name)}
							<th scope="col" class="p-4 text-center font-semibold text-secondary">{tier.name}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each comparison as row (row.feature)}
						<tr class="border-t border-neutral-grey">
							<th scope="row" class="p-4 text-left font-medium text-secondary">{row.feature}</th>
							{#each row.values as included, i (i)}
								<td class="p-4 text-center">
									{#if included}
										<span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
											<Icon name="check" size={14} strokeWidth={3} />
										</span>
										<span class="sr-only">Included</span>
									{:else}
										<span class="text-text-secondary/60" aria-hidden="true">—</span>
										<span class="sr-only">Not included</span>
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>
