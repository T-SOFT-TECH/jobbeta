<script lang="ts" module>
	import type { TipTone } from '$lib/content/careerTips';

	const tones: Record<TipTone, string> = {
		lavender: 'bg-primary/10 text-primary',
		blue: 'bg-[#eaf4ff] text-[#1f6fc4]',
		orange: 'bg-amber-50 text-amber-600',
		green: 'bg-emerald-50 text-emerald-600',
		pink: 'bg-rose-50 text-rose-600'
	};
</script>

<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import type { CareerTip } from '$lib/content/careerTips';

	let { tips = [] }: { tips?: CareerTip[] } = $props();
</script>

<!--
	Card grid per the client's sample (review v2). Native <details> sharing a
	name: one tip open at a time with no JS state. One grid (not two flex
	columns) so rows stay aligned when a card opens.
-->
<div class="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-5">
	{#each tips as tip, i (tip.question)}
		<details
			name="career-tips"
			open={i === 0}
			class="accordion group rounded-2xl border border-neutral-grey bg-white transition-colors hover:border-primary/30 open:border-primary/20 open:bg-neutral-light/60 open:shadow-sm"
		>
			<summary
				class="flex cursor-pointer list-none items-center gap-4 p-5 md:p-6 [&::-webkit-details-marker]:hidden"
			>
				<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl {tones[tip.tone]}">
					<Icon name={tip.icon} size={20} />
				</span>
				<h3
					class="flex-1 font-geist text-base leading-snug font-semibold text-secondary transition-colors group-open:text-primary md:text-lg"
				>
					{tip.question}
				</h3>
				<Icon
					name="plus"
					size={20}
					class="shrink-0 text-text-secondary transition-transform duration-500 ease-out-expo group-open:rotate-45 group-open:text-primary"
				/>
			</summary>
			<p class="px-5 pb-5 font-geist text-base leading-relaxed text-text-secondary md:px-6 md:pb-6 md:pl-[5.25rem]">
				{tip.answer}
			</p>
		</details>
	{/each}
</div>
