<script>
	let {
		title = 'Your Next Hire <br/> Starts Here...',
		subtitle = 'We match skilled professionals with the right roles, helping businesses grow and individuals thrive at JobBeta'
	} = $props();
</script>

<section class="relative w-full bg-white px-4 pb-20 pt-32 text-center">
	<div class="mx-auto flex max-w-4xl flex-col items-center gap-6">
		<h1 class="text-text-muted text-[40px] font-bold leading-tight md:text-[64px]">
			{@html title}
		</h1>
		<p class="text-text-muted/70 max-w-2xl text-xl">
			{subtitle}
		</p>

		<div class="mt-8 flex flex-col gap-4 sm:flex-row">
			<button
				class="bg-primary rounded-[20px] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-[#6002d1]"
			>
				Get Started For Free
			</button>
			<button
				class="border-secondary text-secondary rounded-[20px] border px-8 py-4 text-base font-bold transition-colors hover:bg-gray-50"
			>
				Request For a Demo
			</button>
		</div>
	</div>
</section>
