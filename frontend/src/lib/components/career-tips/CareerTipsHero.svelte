<script>
	import Animate from '$lib/components/Animate.svelte';

	let { heroBg = '/images/career-tips/frame-20856641690.png' } = $props();
</script>

<section class="bg-primary relative h-[712px] w-full overflow-hidden">
	<div
		class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
		style="background-image: url('{heroBg}');"
	></div>

	<!-- Decorative Elements -->
	<img
		src="/images/career-tips/group-13213144580.svg"
		alt=""
		class="absolute left-[50%] top-[-573px] translate-x-[-738px] translate-y-[573px] opacity-50"
	/>
	<img
		src="/images/career-tips/group-13213144600.svg"
		alt=""
		class="absolute left-[50%] top-[1263px] translate-x-[-700px] translate-y-[-705px] opacity-50"
	/>
	<img
		src="/images/career-tips/group-13213144620.svg"
		alt=""
		class="absolute left-[50%] top-[574px] translate-x-[700px] opacity-50"
	/>
	<img
		src="/images/career-tips/group-13213144590.svg"
		alt=""
		class="absolute left-[50%] top-[-573px] translate-x-[700px] translate-y-[573px] opacity-50"
	/>

	<Animate variant="bottom" duration={0.8}>
		<div class="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
			<h1 class="mb-4 text-[40px] font-bold leading-tight text-white md:text-[60px]">Career Tips</h1>
			<p class="max-w-2xl text-xl font-medium leading-relaxed text-white/85">
				Get expert-backed insights, practical tips, and guidance to help you make informed career
				decisions, grow your skills, and reach your professional goals.
			</p>
		</div>
	</Animate>
</section>
