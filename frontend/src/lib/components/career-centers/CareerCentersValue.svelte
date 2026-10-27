<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { benefits } from '$lib/content/careerCenters';
</script>

<!-- Client review: "more colour" (image 40) and the four benefits as small cards (image 41) -->
<section class="section bg-gradient-to-br from-neutral-light via-white to-[#e8f3ff]">
	<div class="page-container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
		<div class="flex flex-col gap-8">
			<div class="flex flex-col gap-3">
				<span class="eyebrow">Value proposition</span>
				<h2 class="title-section text-secondary">Why career centres choose JobBeta</h2>
				<p class="lead text-text-secondary">
					Verified opportunities, career-building tools and employers who want to hire your
					students, on one dynamic platform.
				</p>
			</div>
			<ul class="grid gap-3 sm:grid-cols-2">
				{#each benefits as benefit (benefit.title)}
					<li
						class="flex gap-3 rounded-2xl border-l-4 bg-white p-4 shadow-sm"
						style="border-left-color: {benefit.accent}"
					>
						<span
							class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
							style="background-color: {benefit.accent}1a; color: {benefit.accent}"
						>
							<Icon name={benefit.icon} size={18} />
						</span>
						<div class="font-geist">
							<p class="font-semibold text-secondary">{benefit.title}</p>
							<p class="mt-1 text-sm leading-relaxed text-text-secondary">{benefit.body}</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>

		<div class="relative mx-auto w-full max-w-md">
			<div class="absolute -inset-3 rotate-3 rounded-[2rem] bg-gradient-to-br from-primary via-[#3296f8] to-[#0e9f6e] opacity-90"></div>
			<img
				src="/images/career-centers/value-proposition.webp"
				alt="A career adviser holding a tablet"
				loading="lazy"
				class="relative aspect-[4/5] max-h-[480px] w-full rounded-3xl object-cover"
			/>
		</div>
	</div>
</section>
