<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import SegmentedTabs from '$lib/components/ui/SegmentedTabs.svelte';
	import { howItWorks } from '$lib/content/home';
	import { links } from '$lib/config/site';

	type Audience = keyof typeof howItWorks;
	let audience: Audience = $state('students');

	const options: { key: Audience; label: string }[] = [
		{ key: 'students', label: 'Students & Graduates' },
		{ key: 'employers', label: 'Employers' }
	];
</script>

<!-- Layout follows the client's reference: pitch on the left, numbered steps on the right -->
<section id="how-it-works" class="section scroll-mt-20 bg-white">
	<div class="page-container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
		<div class="flex flex-col items-start gap-6">
			<span class="eyebrow">How it works</span>
			<h2 class="title-section text-secondary">Simple from start to finish.</h2>
			<p class="lead max-w-lg text-text-secondary">
				Whether you're starting your career or hiring fresh talent, JobBeta takes you from
				"I'm looking" to "I'm hired" without the stress.
			</p>
			<SegmentedTabs {options} bind:value={audience} idPrefix="how" label="Choose your path" />
			<div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
				<a
					href={audience === 'employers' ? links.waitlistEmployer : links.waitlistStudent}
					class="btn btn-primary"
				>
					Join Our Waitlist
				</a>
				<a href={links.howItWorks} class="btn btn-outline">
					See the full guide <Icon name="arrow-up-right" size={18} />
				</a>
			</div>
		</div>

		<div
			id="how-panel-{audience}"
			role="tabpanel"
			aria-labelledby="how-tab-{audience}"
			class="rounded-3xl bg-neutral-light p-6 sm:p-8 md:p-10"
		>
			<!-- Numbers and the connecting line share one column, so they always line up -->
			<ol class="flex flex-col">
				{#each howItWorks[audience] as step, i (step.title)}
					<li class="relative flex gap-5 pb-8 last:pb-0">
						{#if i < howItWorks[audience].length - 1}
							<span class="absolute top-11 bottom-1 left-5 w-px bg-primary/25" aria-hidden="true"></span>
						{/if}
						<span
							class="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary font-geist text-base font-bold text-white"
						>
							{i + 1}
						</span>
						<div class="flex flex-col gap-1 pt-1.5">
							<h3 class="font-geist text-lg font-semibold text-secondary">{step.title}</h3>
							<p class="font-geist text-base leading-relaxed text-text-secondary">{step.body}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>
