<script lang="ts">
	// Career Centers Partner Logos Section with Infinite Scroll
	const logos = [
		'/icons/career-centers/clip-path-group0.svg',
		'/icons/career-centers/group0.svg',
		'/icons/career-centers/group1.svg',
		'/icons/career-centers/page-10.svg',
		'/icons/career-centers/page-11.svg',
		'/icons/career-centers/page-12.svg',
		'/icons/career-centers/page-14.svg',
		'/icons/career-centers/clip-path-group2.svg',
		'/icons/career-centers/group2.svg',
		'/icons/career-centers/page-15.svg',
		'/icons/career-centers/group3.svg',
		'/icons/career-centers/page-16.svg'
	];
</script>

<section class="w-full overflow-hidden py-12 lg:py-16">
	<div class="relative">
		<!-- Scrolling Container -->
		<div class="animate-scroll flex">
			<!-- First set of logos -->
			{#each logos as logo}
				<div class="mx-8 flex h-12 w-32 flex-shrink-0 items-center justify-center">
					<img
						class="max-h-full max-w-full object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
						src={logo}
						alt="Partner logo"
					/>
				</div>
			{/each}
			<!-- Duplicate set for seamless loop -->
			{#each logos as logo}
				<div class="mx-8 flex h-12 w-32 flex-shrink-0 items-center justify-center">
					<img
						class="max-h-full max-w-full object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
						src={logo}
						alt="Partner logo"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.animate-scroll {
		animation: scroll 30s linear infinite;
	}

	.animate-scroll:hover {
		animation-play-state: paused;
	}
</style>
