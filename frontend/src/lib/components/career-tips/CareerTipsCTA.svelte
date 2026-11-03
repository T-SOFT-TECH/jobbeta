<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
</script>

<!--
	Client review v2: left collects institutional interest (no demo, product
	isn't ready), right serves employers and general enquiries. Shorter than
	before.
-->
<section class="grid grid-cols-1 lg:grid-cols-2">
	<div class="relative overflow-hidden bg-primary text-white">
		<div class="pointer-events-none absolute -bottom-24 -left-10 hidden opacity-20 lg:block" aria-hidden="true">
			{#each Array(5) as _, i (i)}
				<div
					class="absolute h-[185px] w-[185px] rounded-full border border-white"
					style="left: {i * 80}px; bottom: {(i % 2) * 24}px"
				></div>
			{/each}
		</div>

		<div class="relative flex flex-col items-start gap-6 px-6 py-14 md:px-12 md:py-20 xl:pl-[max(4rem,calc((100vw_-_80rem)/2_+_4rem))]">
			<span class="eyebrow-light">Coming Soon</span>
			<div class="flex max-w-lg flex-col gap-3">
				<h2 class="font-geist text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl">
					Interested in bringing JobBeta to your campus?
				</h2>
				<p class="font-geist text-base leading-relaxed text-white/85 md:text-lg">
					We're building tools to help universities connect students with career opportunities. Be
					among the first to know when we launch.
				</p>
			</div>
			<div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
				<a href={links.registerInterest} class="btn btn-dark">
					Register Your Interest <Icon name="arrow-right" size={18} />
				</a>
				<a href={links.learnMore} class="btn btn-outline-light">Explore Our Vision</a>
			</div>
		</div>
	</div>

	<div class="relative overflow-hidden bg-secondary text-white">
		<div class="pointer-events-none absolute -top-24 -right-24 hidden opacity-20 lg:block" aria-hidden="true">
			<div class="h-[185px] w-[185px] rounded-full border border-white"></div>
			<div class="absolute top-24 -left-10 h-[185px] w-[185px] rounded-full border border-white"></div>
		</div>

		<div class="relative flex flex-col items-start gap-6 px-6 py-14 md:px-12 md:py-20 xl:pr-[max(4rem,calc((100vw_-_80rem)/2_+_4rem))]">
			<span class="eyebrow-light">We'd love to hear from you</span>
			<div class="flex max-w-lg flex-col gap-3">
				<h2 class="font-geist text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl">Let's talk.</h2>
				<p class="font-geist text-base leading-relaxed text-white/80 md:text-lg">
					Whether you're hiring, exploring a partnership or have a question, we're here to help.
				</p>
			</div>
			<div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
				<a href="/employers" class="btn btn-light">Hire With JobBeta</a>
				<a href={links.contact} class="btn btn-outline-light">Contact Us</a>
			</div>
		</div>
	</div>
</section>
