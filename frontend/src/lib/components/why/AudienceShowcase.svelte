<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import SegmentedTabs from '$lib/components/ui/SegmentedTabs.svelte';
	import { audiencePanels, type AudiencePanel } from '$lib/content/why';

	let active: AudiencePanel['key'] = $state('students');
	const panel = $derived(audiencePanels.find((p) => p.key === active)!);
</script>

<section class="section bg-neutral-light">
	<div class="page-container">
		<div class="flex flex-col items-center gap-6 text-center">
			<h2 class="title-section max-w-3xl text-secondary">
				Real connections. Real momentum. For everyone starting out.
			</h2>
			<SegmentedTabs
				options={audiencePanels.map(({ key, label }) => ({ key, label }))}
				bind:value={active}
				idPrefix="why-audience"
				label="Who JobBeta helps"
				class="bg-white"
			/>
		</div>

		<div
			id="why-audience-panel-{active}"
			role="tabpanel"
			aria-labelledby="why-audience-tab-{active}"
			class="mt-10 grid items-center gap-8 rounded-3xl bg-white p-5 md:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"
		>
			<img
				src={panel.image.src}
				alt={panel.image.alt}
				loading="lazy"
				class="aspect-[4/3] w-full rounded-2xl object-cover lg:aspect-[4/5] lg:max-h-[440px]"
			/>
			<div class="flex flex-col items-start gap-6">
				<div class="flex flex-col gap-3">
					<h3 class="font-geist text-2xl font-semibold text-secondary md:text-3xl">{panel.title}</h3>
					<p class="lead text-text-secondary">{panel.body}</p>
				</div>
				<ul class="grid gap-5 sm:grid-cols-2">
					{#each panel.points as point (point.title)}
						<li class="flex gap-3">
							<span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
								<Icon name="check" size={15} strokeWidth={3} />
							</span>
							<div class="font-geist">
								<p class="font-semibold text-secondary">{point.title}</p>
								<p class="mt-1 text-sm leading-relaxed text-text-secondary">{point.body}</p>
							</div>
						</li>
					{/each}
				</ul>
				<a href={panel.cta.href} class="btn btn-primary w-full sm:w-auto">
					{panel.cta.label} <Icon name="arrow-right" size={18} />
				</a>
			</div>
		</div>
	</div>
</section>
