<script>
	let { ctaBg = '/images/career-tips/frame-20856642780.png' } = $props();
</script>

<section class="relative w-full overflow-hidden py-20">
	<div
		class="absolute inset-0 bg-cover bg-center bg-no-repeat"
		style="background-image: url('{ctaBg}'); background-color: #110d21;"
	></div>

	<div
		class="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-4 md:flex-row md:px-20"
	>
		<div class="flex max-w-xl flex-col gap-4 text-left">
			<h2 class="text-[32px] font-bold leading-tight text-white">
				Need that dream Job or career change?
			</h2>
			<p class="text-base text-white">Stay updated with our announcement, tips and News</p>
		</div>

		<div class="flex w-full max-w-md md:w-auto">
			<input
				type="email"
				placeholder="Enter your Email Address"
				class="w-full rounded-l-lg border border-transparent bg-white/15 px-6 py-4 text-white placeholder-white outline-none transition-colors focus:border-white/30"
			/>
			<button
				class="bg-primary flex items-center justify-center rounded-r-lg px-6 py-4 transition-colors hover:bg-[#6002d1]"
			>
				<img src="/images/career-tips/send0.svg" alt="Send" class="h-6 w-6" />
			</button>
		</div>
	</div>
</section>
