<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
	import { employerSteps } from '$lib/content/employers';

	// Code-built previews (fictional people) replace the blurry phone screenshots
	const candidates = [
		{ name: 'Franklin Adekola', role: 'Cloud Engineer · Lagos', tone: 'bg-primary text-white' },
		{ name: 'Jude Williams', role: 'Marketing Associate · Oyo', tone: 'bg-[#3296f8]/15 text-[#1f6fc4]' }
	];
	const shortlist = [
		{ name: 'Amaka Eze', role: 'Finance graduate', score: 94 },
		{ name: 'Ruth Bello', role: 'Product design intern', score: 90 },
		{ name: 'Sani Musa', role: 'Customer success', score: 86 }
	];
	const pipeline = [
		{ name: 'Jane Williams', status: 'Passed interview', ok: true },
		{ name: 'Kunle Ade', status: 'Interview Tue', ok: true },
		{ name: 'Mary Obi', status: 'Not a fit', ok: false }
	];
	const initials = (name: string) => name.split(' ').map((w) => w[0]).join('');
</script>

<section id="employer-steps" class="section scroll-mt-20 bg-white">
	<div class="page-container">
		<div class="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
			<span class="eyebrow">How it works</span>
			<h2 class="title-section text-secondary">Hiring on JobBeta is simple and effective</h2>
		</div>

		<ol class="snap-row mt-10 md:grid-cols-2 lg:grid-cols-4">
			{#each employerSteps as step, i (step.title)}
				<li class="lift flex flex-col gap-4 rounded-3xl bg-neutral-light p-5 md:p-6">
					<span class="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-geist text-sm font-bold text-white">
						{i + 1}
					</span>
					<div class="flex flex-col gap-2">
						<h3 class="font-geist text-lg font-semibold text-secondary">{step.title}</h3>
						<p class="font-geist text-sm leading-relaxed text-text-secondary">{step.body}</p>
					</div>

					<div class="mt-auto rounded-2xl bg-white p-4 font-geist shadow-sm" aria-hidden="true">
						{#if step.preview === 'company'}
							<div class="flex items-center gap-3">
								<span class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0e9f6e] text-xs font-bold text-white">KH</span>
								<div class="leading-tight">
									<p class="text-sm font-semibold text-secondary">Kestrel Health</p>
									<p class="text-xs text-text-secondary">Healthcare · Ibadan</p>
								</div>
							</div>
							<div class="mt-3 flex flex-col gap-1.5 text-xs text-secondary">
								<p class="flex items-center gap-2"><Icon name="check" size={13} class="text-emerald-600" /> Company verified</p>
								<p class="flex items-center gap-2"><Icon name="check" size={13} class="text-emerald-600" /> Culture & benefits added</p>
							</div>
						{:else if step.preview === 'candidates'}
							<p class="text-xs font-semibold text-secondary">Candidates available for hire</p>
							<ul class="mt-3 flex flex-col gap-2.5">
								{#each candidates as c (c.name)}
									<li class="flex items-center gap-2.5">
										<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold {c.tone}">{c.name[0]}</span>
										<div class="min-w-0 leading-tight">
											<p class="truncate text-xs font-semibold text-secondary">{c.name}</p>
											<p class="truncate text-[11px] text-text-secondary">{c.role}</p>
										</div>
									</li>
								{/each}
							</ul>
						{:else if step.preview === 'shortlist'}
							<ul class="flex flex-col gap-2.5">
								{#each shortlist as s (s.name)}
									<li class="flex items-center gap-2.5">
										<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">{initials(s.name)}</span>
										<div class="min-w-0 flex-1 leading-tight">
											<p class="truncate text-xs font-semibold text-secondary">{s.name}</p>
											<p class="truncate text-[11px] text-text-secondary">{s.role}</p>
										</div>
										<span class="text-[11px] font-semibold text-emerald-700">{s.score}%</span>
									</li>
								{/each}
							</ul>
						{:else}
							<p class="text-xs font-semibold text-secondary">Graduate Analyst · Applied</p>
							<ul class="mt-3 flex flex-col gap-2.5">
								{#each pipeline as p (p.name)}
									<li class="flex items-center justify-between gap-2">
										<span class="truncate text-xs text-secondary">{p.name}</span>
										<span class="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold {p.ok ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'}">
											{p.status}
										</span>
									</li>
								{/each}
							</ul>
						{/if}
					</div>

					<a href={links.waitlistEmployer} class="inline-flex items-center gap-2 font-geist text-sm font-semibold text-primary">
						Get started <Icon name="arrow-right" size={16} />
					</a>
				</li>
			{/each}
		</ol>
	</div>
</section>
