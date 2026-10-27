<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
	import { studentSteps } from '$lib/content/students';
	import { partnerBrands, sampleJobs } from '$lib/content/home';

	// Previews are built in code with fictional companies; the old phone screenshots showed real
	// brands (Apple, Starbucks, Siemens) and were too tall for the "one screen per section" brief.
	const matches = sampleJobs.slice(3, 6);
	const nodes = partnerBrands.slice(0, 4);
	const initials = (name: string) => name.split(' ').map((w) => w[0]).join('').slice(0, 2);
	const updates = [
		{ text: 'New role matches your profile', time: 'Mon · 09:12' },
		{ text: "You've been invited to interview", time: 'Wed · 14:30' },
		{ text: 'Offer received. Congratulations!', time: 'Fri · 11:05' }
	];
</script>

<section id="student-steps" class="section scroll-mt-20 bg-white">
	<div class="page-container">
		<div class="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
			<span class="eyebrow">How it works</span>
			<h2 class="title-section text-secondary">Finding a job has never been easier</h2>
		</div>

		<ol class="snap-row mt-10 md:grid-cols-2 lg:grid-cols-4">
			{#each studentSteps as step, i (step.title)}
				<li class="lift flex flex-col gap-4 rounded-3xl bg-neutral-light p-5 md:p-6">
					<span class="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-geist text-sm font-bold text-white">
						{i + 1}
					</span>
					<div class="flex flex-col gap-2">
						<h3 class="font-geist text-lg font-semibold text-secondary">{step.title}</h3>
						<p class="font-geist text-sm leading-relaxed text-text-secondary">{step.body}</p>
					</div>

					<div class="mt-auto rounded-2xl bg-white p-4 shadow-sm" aria-hidden="true">
						{#if step.preview === 'profile'}
							<div class="flex items-center gap-3">
								<span class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-geist text-sm font-bold text-primary">AO</span>
								<div class="font-geist leading-tight">
									<p class="text-sm font-semibold text-secondary">Ada Okafor</p>
									<p class="text-xs text-text-secondary">Economics graduate</p>
								</div>
							</div>
							<p class="mt-3 font-geist text-xs text-text-secondary">Profile strength</p>
							<div class="mt-1.5 h-2 rounded-full bg-neutral-grey">
								<div class="h-2 w-4/5 rounded-full bg-primary"></div>
							</div>
							<div class="mt-3 flex flex-wrap gap-1.5">
								{#each ['Excel', 'Research', 'SQL'] as skill (skill)}
									<span class="rounded-full bg-neutral-light px-2.5 py-1 font-geist text-xs text-secondary">{skill}</span>
								{/each}
							</div>
						{:else if step.preview === 'matches'}
							<ul class="flex flex-col gap-2.5">
								{#each matches as job (job.role)}
									<li class="flex items-center gap-2.5">
										<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-geist text-[10px] font-bold text-white" style="background-color: {job.color}">
											{initials(job.company)}
										</span>
										<div class="min-w-0 font-geist leading-tight">
											<p class="truncate text-xs font-semibold text-secondary">{job.role}</p>
											<p class="truncate text-[11px] text-text-secondary">{job.company}</p>
										</div>
									</li>
								{/each}
							</ul>
						{:else if step.preview === 'connect'}
							<div class="grid grid-cols-3 grid-rows-3 place-items-center gap-1">
								{#each nodes as brand, n (brand.name)}
									<span
										class="flex h-9 w-9 items-center justify-center rounded-full font-geist text-[10px] font-bold text-white"
										style="background-color: {brand.color}; grid-column: {n % 2 ? 3 : 1}; grid-row: {n < 2 ? 1 : 3}"
									>
										{initials(brand.name)}
									</span>
								{/each}
								<span class="col-start-2 row-start-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white ring-4 ring-primary/15">
									<Icon name="briefcase" size={18} />
								</span>
							</div>
						{:else}
							<ul class="flex flex-col gap-2.5">
								{#each updates as update (update.text)}
									<li class="flex items-start gap-2.5 font-geist">
										<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
											<Icon name="bell" size={12} />
										</span>
										<div class="leading-tight">
											<p class="text-xs font-semibold text-secondary">{update.text}</p>
											<p class="text-[11px] text-text-secondary">{update.time}</p>
										</div>
									</li>
								{/each}
							</ul>
						{/if}
					</div>

					<a href={links.waitlistStudent} class="inline-flex items-center gap-2 font-geist text-sm font-semibold text-primary">
						{step.link} <Icon name="arrow-right" size={16} />
					</a>
				</li>
			{/each}
		</ol>
	</div>
</section>
