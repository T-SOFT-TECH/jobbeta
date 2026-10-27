<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import MatchCard from '$lib/components/ui/MatchCard.svelte';
	import { links } from '$lib/config/site';

	const points = [
		'Ranked matches, with the reasons behind every score',
		'Skills, projects and portfolios side by side',
		'Interview scheduling and messaging built in'
	];
</script>

<section class="section relative overflow-hidden bg-primary text-white">
	<div
		class="pointer-events-none absolute inset-0 opacity-15"
		style="background-image: url('/images/kick-start-your-career-bg.svg'); background-size: cover;"
	></div>

	<div class="page-container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
		<div class="flex flex-col items-start gap-6">
			<span class="eyebrow-light">Customised job matching</span>
			<h2 class="title-section">Connect with top talent and opportunities, all in one place.</h2>
			<p class="lead text-white/85">
				We match talent with employers who fit their skills, passions and potential, so both people
				and companies grow together.
			</p>
			<ul class="flex flex-col gap-3">
				{#each points as point (point)}
					<li class="flex items-start gap-3 font-geist text-base">
						<span class="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
							<Icon name="check" size={14} strokeWidth={3} />
						</span>
						{point}
					</li>
				{/each}
			</ul>
			<a href={links.waitlist} class="btn btn-light">
				Join Waitlist <Icon name="arrow-right" size={18} />
			</a>
		</div>

		<MatchCard class="text-white" />
	</div>
</section>
