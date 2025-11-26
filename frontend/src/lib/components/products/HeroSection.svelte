<script>
	let {
		title = 'Our Product Suite',
		subtitle = 'Choose a plan that fits your needs. Contact us for a customized package.'
	} = $props();
</script>

<section class="flex flex-col items-center justify-center px-4 py-16 text-center">
	<h1 class="text-text-muted mb-5 text-4xl font-bold leading-tight md:text-[40px]">
		{title}
	</h1>
	<p class="text-text-muted mx-auto max-w-2xl text-lg font-normal md:text-xl">
		{subtitle}
	</p>
</section>
