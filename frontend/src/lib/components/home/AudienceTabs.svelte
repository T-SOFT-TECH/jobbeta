<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import SegmentedTabs from '$lib/components/ui/SegmentedTabs.svelte';
	import { audiences, type AudienceKey } from '$lib/content/home';

	let active: AudienceKey = $state('students');
	const current = $derived(audiences.find((a) => a.key === active)!);
</script>

<section class="section bg-white">
	<div class="page-container">
		<div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
			<div class="flex max-w-2xl flex-col gap-4">
				<h2 class="title-section text-secondary">
					Connecting education with <span class="text-primary">real-world</span> career opportunities
				</h2>
				<p class="lead text-text-secondary">
					Whether you're a student, an employer or a university career centre, JobBeta was built for
					you.
				</p>
			</div>
			<SegmentedTabs
				options={audiences.map(({ key, label }) => ({ key, label }))}
				bind:value={active}
				idPrefix="audience"
				label="Who JobBeta is for"
			/>
		</div>

		<div
			id="audience-panel-{active}"
			role="tabpanel"
			aria-labelledby="audience-tab-{active}"
			class="snap-row mt-8 md:mt-10 md:grid-cols-2"
		>
			{#each current.features as feature, i (feature.title)}
				<article
					class="flex flex-col gap-3 rounded-3xl p-6 md:p-7 {i === 0
						? 'bg-gradient-to-br from-primary to-[#4a01a3] text-white'
						: 'border border-neutral-grey bg-white'}"
				>
					<span
						class="flex h-11 w-11 items-center justify-center rounded-xl {i === 0
							? 'bg-white/15 text-white'
							: 'bg-primary/8 text-primary'}"
					>
						<Icon name={feature.icon} size={22} />
					</span>
					<h3 class="font-geist text-lg font-semibold md:text-xl {i === 0 ? '' : 'text-secondary'}">
						{feature.title}
					</h3>
					<p class="font-geist text-base leading-relaxed {i === 0 ? 'text-white/85' : 'text-text-secondary'}">
						{feature.body}
					</p>
				</article>
			{/each}
		</div>
	</div>
</section>
