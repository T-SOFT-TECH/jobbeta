<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
</script>

<section class="relative overflow-hidden bg-primary text-white">
	<div class="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#3296f8]/40 blur-3xl"></div>
	<div class="pointer-events-none absolute -top-32 right-10 h-80 w-80 rounded-full bg-[#f59e0b]/25 blur-3xl"></div>

	<div
		class="page-container relative grid items-center gap-12 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-20"
	>
		<div class="flex flex-col items-start gap-6">
			<span class="eyebrow-light"><Icon name="building" size={14} /> For career centres</span>
			<h1 class="title-display">Power your students' career journey with JobBeta.</h1>
			<p class="lead max-w-xl text-white/85">
				Connect your students with verified opportunities, career-building tools and employers,
				all on one platform.
			</p>
			<div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
				<a href={links.partner} class="btn btn-light text-primary">
					Partner with Us <Icon name="arrow-right" size={18} />
				</a>
				<a href={links.demo} class="btn btn-outline-light">Book a Demo</a>
			</div>
		</div>

		<div class="relative mx-auto w-full max-w-md">
			<img
				src="/images/students/Frame 2085663912.webp"
				alt="A group of cheerful university students"
				fetchpriority="high"
				class="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl ring-4 ring-white/15"
			/>
			<div class="absolute -top-5 -left-4 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-secondary shadow-xl sm:-left-10">
				<span class="flex h-8 w-8 items-center justify-center rounded-full bg-[#0e9f6e]/10 text-[#0e9f6e]">
					<Icon name="briefcase" size={16} />
				</span>
				<p class="font-geist text-sm font-semibold">New verified internship</p>
			</div>
			<div class="absolute -right-3 -bottom-5 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-secondary shadow-xl sm:-right-8">
				<span class="flex h-8 w-8 items-center justify-center rounded-full bg-[#f59e0b]/15 text-[#b45309]">
					<Icon name="calendar" size={16} />
				</span>
				<p class="font-geist text-sm font-semibold">Career fair on Friday</p>
			</div>
		</div>
	</div>
</section>
