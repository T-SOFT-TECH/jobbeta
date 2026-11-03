<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
</script>

<!--
	Client review v2: hero ~35-40% shorter so the tips show sooner, and the
	circle pattern kept but quieter. Layout follows the client's sample.
-->
<section class="relative overflow-hidden rounded-b-[2rem] bg-gradient-to-br from-primary to-[#5b2bff] text-white">
	<!-- Quiet pattern: the original circle motif at low opacity, desktop only -->
	<div class="pointer-events-none absolute inset-0 hidden opacity-25 lg:block" aria-hidden="true">
		<img src="/images/career-tips/group-13213144580.svg" alt="" class="absolute -bottom-40 -left-16 w-[420px]" />
		<img src="/images/career-tips/group-13213144580.svg" alt="" class="absolute -top-44 right-1/4 w-[420px]" />
	</div>

	<div class="page-container relative grid items-center gap-8 py-12 md:py-16 lg:grid-cols-[1fr_auto]">
		<div class="flex max-w-2xl flex-col items-start gap-4">
			<h1 class="title-display">Career Tips</h1>
			<p class="lead text-white/90">
				Practical advice on CVs, interviews, networking, and everything you need to navigate your
				early career.
			</p>
		</div>

		<!-- Decorative stack of tip cards -->
		<div class="relative hidden h-44 w-64 lg:block" aria-hidden="true">
			<div class="absolute top-8 left-0 h-36 w-44 -rotate-6 rounded-3xl bg-white/15"></div>
			<div class="absolute top-0 right-0 flex h-40 w-48 rotate-6 flex-col gap-3 rounded-3xl bg-white/25 p-5 backdrop-blur-sm">
				<span class="flex h-9 w-9 items-center justify-center rounded-xl bg-white/30">
					<Icon name="book" size={18} />
				</span>
				<span class="h-2.5 w-28 rounded-full bg-white/60"></span>
				<span class="h-2.5 w-20 rounded-full bg-white/40"></span>
				<span class="h-2.5 w-24 rounded-full bg-white/40"></span>
			</div>
		</div>
	</div>
</section>
