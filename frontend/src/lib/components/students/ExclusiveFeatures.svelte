<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import MatchCard from '$lib/components/ui/MatchCard.svelte';
	import { exclusiveFeatures } from '$lib/content/students';
</script>

<!-- Copy and mockup per client review v2: student-focused, four features -->
<section class="section bg-neutral-light">
	<div class="page-container grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
		<div class="flex flex-col gap-6">
			<div class="flex flex-col gap-3">
				<h2 class="title-section text-secondary">Everything you need to get ahead.</h2>
				<p class="lead text-text-secondary">
					More than job opportunities. Discover tools to help you grow your career, all for free.
				</p>
			</div>
			<ul class="grid gap-4 sm:grid-cols-2">
				{#each exclusiveFeatures as feature (feature.title)}
					<li class="flex gap-3">
						<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
							<Icon name={feature.icon} size={20} />
						</span>
						<div class="font-geist">
							<p class="font-semibold text-secondary">{feature.title}</p>
							<p class="mt-1 text-sm leading-relaxed text-text-secondary">{feature.body}</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Student-facing: an opportunity with the student's BetaMatch score (client review v2) -->
		<MatchCard variant="job" class="text-text-secondary" />
	</div>
</section>
