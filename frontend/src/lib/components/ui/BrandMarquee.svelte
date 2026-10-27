<script lang="ts">
	import Marquee from './Marquee.svelte';

	// Moving brand strip: mark + company name, as requested in the client review
	let {
		brands,
		heading
	}: { brands: { name: string; color: string }[]; heading?: string } = $props();

	const initials = (name: string) =>
		name
			.split(' ')
			.slice(0, 2)
			.map((word) => word[0])
			.join('');
</script>

<section class="border-y border-neutral-grey/70 bg-white py-8 md:py-10">
	{#if heading}
		<p class="page-container mb-6 text-center font-geist text-sm font-medium text-text-secondary">
			{heading}
		</p>
	{/if}
	<Marquee items={brands} duration={45}>
		{#snippet item(brand)}
			<div class="flex items-center gap-3 px-4 opacity-80 transition-opacity hover:opacity-100">
				<span
					class="flex h-9 w-9 items-center justify-center rounded-xl font-geist text-sm font-bold text-white"
					style="background-color: {brand.color}"
				>
					{initials(brand.name)}
				</span>
				<span class="font-geist text-lg font-semibold whitespace-nowrap text-secondary">
					{brand.name}
				</span>
			</div>
		{/snippet}
	</Marquee>
</section>
