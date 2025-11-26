<script>
	import { base } from '$app/paths';

	const brands = [
		{ src: 'image.png', alt: 'Brand 1', width: '100', height: '50' },
		{ src: 'image-1.png', alt: 'Brand 2', width: '100', height: '50' },
		{ src: 'image-2.png', alt: 'Brand 3', width: '100', height: '50' },
		{ src: 'image-3.png', alt: 'Brand 4', width: '100', height: '50' },
		{ src: 'image 63.png', alt: 'Brand 5', width: '100', height: '50' },
		{ src: 'image 64.png', alt: 'Brand 6', width: '100', height: '50' }
	];
</script>

<section class="border-b border-neutral-100 bg-white py-12">
	<div class="container mx-auto px-4">
		<div
			class="flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale transition-all duration-500 hover:grayscale-0 md:gap-16"
		>
			{#each brands as brand}
				<div class="relative h-12 w-auto shrink-0 transition-transform hover:scale-110">
					<img
						src="{base}/images/employers/{brand.src}"
						alt={brand.alt}
						class="h-full w-auto object-contain"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>
