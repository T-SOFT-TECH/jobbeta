<script lang="ts" module>
	/**
	 * Section backgrounds — the client asked for FAQs to sit on colour rather
	 * than plain white, optionally a different colour per page (review v2).
	 * `blue` is the solid brand blue they asked to try on the home page.
	 */
	export type FaqTone = 'blue' | 'lavender' | 'sky' | 'mint';

	const tones: Record<FaqTone, { section: string; title: string; lead: string; dark: boolean }> = {
		blue: { section: 'bg-accent-color', title: 'text-white', lead: 'text-white font-medium', dark: true },
		lavender: { section: 'bg-neutral-light', title: 'text-secondary', lead: 'text-text-secondary', dark: false },
		sky: { section: 'bg-[#eaf4ff]', title: 'text-secondary', lead: 'text-text-secondary', dark: false },
		mint: { section: 'bg-[#e9f8f1]', title: 'text-secondary', lead: 'text-text-secondary', dark: false }
	};
</script>

<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import SegmentedTabs from '$lib/components/ui/SegmentedTabs.svelte';
	import { faqs, type FaqAudience } from '$lib/content/home';
	import { contact, links } from '$lib/config/site';

	let {
		audiences = faqs.map((f) => f.key),
		title = 'A few things you may want to ask us',
		subtitle = 'Everything you need to know about JobBeta.',
		helpText = 'We are here to help. Reach out with any questions about JobBeta or partnering with us.',
		tone = 'lavender'
	}: {
		/** Which FAQ groups to show; with a single group the tabs are hidden */
		audiences?: FaqAudience[];
		title?: string;
		subtitle?: string;
		/** Body of the "Still have questions?" card */
		helpText?: string;
		tone?: FaqTone;
	} = $props();

	const t = $derived(tones[tone]);
	const groups = $derived(faqs.filter((f) => audiences.includes(f.key)));
	let active: FaqAudience = $state(audiences.includes('student') ? 'student' : audiences[0]);
	const current = $derived(groups.find((f) => f.key === active) ?? groups[0]);
</script>

<section id="faq" class="section scroll-mt-20 {t.section}">
	<div class="page-container grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
		<div class="flex flex-col gap-6">
			<div class="flex flex-col gap-3">
				<h2 class="title-section {t.title}">{title}</h2>
				<p class="lead {t.lead}">{subtitle}</p>
			</div>

			{#if groups.length > 1}
				<SegmentedTabs
					options={groups.map(({ key, label }) => ({ key, label }))}
					bind:value={active}
					idPrefix="faq"
					label="FAQ topic"
				/>
			{/if}

			<!-- Native <details> with a shared name: one answer open at a time, no JS needed -->
			<div
				id="faq-panel-{current.key}"
				role={groups.length > 1 ? 'tabpanel' : undefined}
				aria-labelledby={groups.length > 1 ? `faq-tab-${current.key}` : undefined}
				data-reveal-stagger
				class="flex flex-col gap-3"
			>
				{#each current.items as item, i (item.q)}
					<details
						name="faq"
						class="accordion group rounded-2xl border bg-white open:shadow-sm {t.dark
							? 'border-transparent'
							: 'border-neutral-grey hover:border-primary/30 open:border-primary/20'}"
						open={i === 0}
					>
						<summary
							class="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-geist text-base font-semibold text-secondary md:text-lg [&::-webkit-details-marker]:hidden"
						>
							{item.q}
							<Icon
								name="plus"
								size={20}
								class="shrink-0 text-primary transition-transform duration-500 ease-out-expo group-open:rotate-45"
							/>
						</summary>
						<p class="px-5 pb-5 font-geist text-base leading-relaxed text-text-secondary">{item.a}</p>
					</details>
				{/each}
			</div>
		</div>

		<aside
			class="h-fit rounded-3xl p-7 md:p-8 lg:sticky lg:top-24 {t.dark ? 'bg-secondary text-white' : 'bg-white'}"
		>
			<span class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
				<Icon name="message" size={22} />
			</span>
			<h3 class="mt-5 font-geist text-xl font-semibold {t.dark ? 'text-white' : 'text-secondary'}">
				Still have questions?
			</h3>
			<p class="mt-2 font-geist text-base leading-relaxed {t.dark ? 'text-white/75' : 'text-text-secondary'}">
				{helpText}
			</p>
			<div class="mt-6 flex flex-col gap-3">
				<a href={links.contact} class="btn {t.dark ? 'btn-light' : 'btn-dark'}">Contact Us</a>
				<a href="mailto:{contact.email}" class="btn {t.dark ? 'btn-outline-light' : 'btn-outline'}">
					<Icon name="mail" size={18} />
					{contact.email}
				</a>
			</div>
		</aside>
	</div>
</section>
