<script>
	import Animate from '$lib/components/Animate.svelte';

	let { heroBg = '/images/career-tips/frame-20856641690.png' } = $props();
</script>

<section class="relative w-full overflow-hidden px-4 py-20 md:h-[712px] md:py-0">
	<!-- Background image -->
	<div
		class="absolute inset-0 bg-cover bg-center bg-no-repeat"
		style="background-image: url('{heroBg}'); opacity: 0.5;"
	></div>

	<!-- Purple overlay on top of image -->
	<div class="absolute inset-0 bg-[#7502ff]/98"></div>

	<!-- Decorative circles - hidden on mobile -->
	<div class="pointer-events-none hidden lg:block">
		<img
			src="/images/career-tips/group-13213144580.svg"
			alt=""
			class="absolute top-[550px] left-0"
		/>
		<img
			src="/images/career-tips/group-13213144580.svg"
			alt=""
			class="absolute bottom-[550px] left-0"
		/>
		<img
			src="/images/career-tips/group-13213144580.svg"
			alt=""
			class="absolute right-0 bottom-[550px]"
		/>
		<img
			src="/images/career-tips/group-13213144580.svg"
			alt=""
			class="absolute top-[550px] right-0"
		/>
	</div>

	<!-- Content - centered -->
	<Animate variant="bottom" duration={0.8}>
		<div
			class="relative z-10 flex h-full min-h-[400px] w-full flex-col items-center justify-center text-center md:min-h-[712px]"
		>
			<div class="mx-auto flex max-w-[640px] flex-col items-center gap-4">
				<h1
					class="text-3xl leading-tight font-bold text-white sm:text-4xl md:text-[40px] md:leading-[60px]"
					style="font-family: var(--font-geist); letter-spacing: -0.005em;"
				>
					Career Tips
				</h1>
				<p
					class="text-base leading-relaxed font-medium text-white/85 sm:text-lg md:text-xl md:leading-[30px]"
					style="font-family: var(--font-geist); letter-spacing: -0.005em;"
				>
					Get expert-backed insights, practical tips, and guidance to help you make informed career
					decisions, grow your skills, and reach your professional goals.
				</p>
			</div>
		</div>
	</Animate>
</section>
