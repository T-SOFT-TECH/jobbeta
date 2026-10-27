<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { sampleJobs } from '$lib/content/home';
	import { links } from '$lib/config/site';

	const jobs = sampleJobs.slice(0, 3);
	const initials = (company: string) =>
		company
			.split(' ')
			.slice(0, 2)
			.map((w) => w[0])
			.join('');
</script>

<!-- Visuals are Tosin's product screens (purple) or small code-built previews; no stock mockups -->
<section class="section bg-white">
	<div class="page-container">
		<h2 class="title-section mx-auto max-w-2xl text-center text-secondary">
			Not just another job board. <span class="text-primary">A smarter career hub.</span>
		</h2>

		<div class="mt-10 grid gap-5 md:mt-12 lg:grid-cols-3">
			<!-- Human-centred + AI smart -->
			<article class="lift flex flex-col overflow-hidden rounded-3xl bg-neutral-light lg:col-span-2">
				<div class="flex flex-col gap-3 p-6 md:p-8">
					<span class="eyebrow">Human-centred + AI smart</span>
					<h3 class="font-geist text-xl font-semibold text-secondary md:text-2xl">
						Matches you can understand
					</h3>
					<p class="max-w-xl font-geist text-base leading-relaxed text-text-secondary">
						Our matching ranks opportunities on fit, not keywords, and explains why someone is a top
						pick. People always make the final call.
					</p>
					<a href={links.waitlist} class="inline-flex w-fit items-center gap-2 font-geist font-semibold text-primary">
						Get matched today <Icon name="arrow-right" size={18} />
					</a>
				</div>
				<img
					src="/images/employers/candidate-match-panel.png"
					alt="JobBeta candidate match view showing a 90% AI match with the reasons explained"
					loading="lazy"
					class="mx-6 mt-auto h-56 w-[calc(100%-3rem)] rounded-t-2xl object-cover object-top shadow-lg md:mx-8 md:h-64 md:w-[calc(100%-4rem)]"
				/>
			</article>

			<!-- Made for early-career talent -->
			<article class="lift flex flex-col gap-5 rounded-3xl bg-secondary p-6 text-white md:p-8">
				<div class="flex flex-col gap-3">
					<span class="eyebrow-light">Made for early-career talent</span>
					<h3 class="font-geist text-xl font-semibold md:text-2xl">Roles for people starting out</h3>
					<p class="font-geist text-base leading-relaxed text-white/75">
						Internships, graduate programmes and first jobs, without being buried under senior
						roles.
					</p>
				</div>
				<ul class="flex flex-col gap-2">
					{#each jobs as job (job.role)}
						<li class="flex items-center gap-3 rounded-2xl bg-white/8 p-3">
							<span
								class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-geist text-xs font-bold"
								style="background-color: {job.color}"
							>
								{initials(job.company)}
							</span>
							<div class="min-w-0 font-geist">
								<p class="truncate text-sm font-semibold">{job.role}</p>
								<p class="truncate text-xs text-white/60">{job.type} · {job.location}</p>
							</div>
						</li>
					{/each}
				</ul>
				<a href={links.jobs} class="mt-auto inline-flex items-center gap-2 font-geist font-semibold">
					Explore our job openings <Icon name="arrow-right" size={18} />
				</a>
			</article>

			<!-- Profiles that tell your story -->
			<article class="lift flex flex-col gap-5 rounded-3xl border border-neutral-grey p-6 md:p-8">
				<div class="flex flex-col gap-3">
					<span class="eyebrow">Profiles that tell your story</span>
					<h3 class="font-geist text-xl font-semibold text-secondary md:text-2xl">Beyond the CV</h3>
					<p class="font-geist text-base leading-relaxed text-text-secondary">
						Show your projects, passions and portfolio, and let employers see what you can actually
						do.
					</p>
				</div>
				<div class="mt-auto rounded-2xl bg-neutral-light p-4" aria-hidden="true">
					<div class="flex items-center gap-3">
						<span class="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-geist text-sm font-bold text-white">
							TA
						</span>
						<div class="font-geist leading-tight">
							<p class="text-sm font-semibold text-secondary">Tobi Adeyemi</p>
							<p class="text-xs text-text-secondary">Final-year Computer Science</p>
						</div>
					</div>
					<p class="mt-4 font-geist text-xs font-semibold tracking-wider text-primary uppercase">Projects</p>
					<ul class="mt-2 flex flex-col gap-1.5 font-geist text-sm text-secondary">
						<li class="flex items-center gap-2"><Icon name="check" size={14} class="text-primary" /> Campus marketplace app</li>
						<li class="flex items-center gap-2"><Icon name="check" size={14} class="text-primary" /> Data analysis of student housing</li>
					</ul>
				</div>
			</article>

			<!-- Employer dashboard -->
			<article class="lift flex flex-col overflow-hidden rounded-3xl bg-primary text-white lg:col-span-2">
				<div class="flex flex-col gap-3 p-6 md:p-8">
					<span class="eyebrow-light">For employers</span>
					<h3 class="font-geist text-xl font-semibold md:text-2xl">Your whole hiring pipeline, at a glance</h3>
					<p class="max-w-xl font-geist text-base leading-relaxed text-white/80">
						Active roles, talent pool, interviews and shortlists, all on one dashboard built for
						early-career hiring.
					</p>
				</div>
				<img
					src="/images/employers/dashboard-overview.png"
					alt="JobBeta employer dashboard with active roles, talent pool and interview counts"
					loading="lazy"
					class="mx-6 mt-auto h-56 w-[calc(100%-3rem)] rounded-t-2xl object-cover object-left-top shadow-2xl md:mx-8 md:h-64 md:w-[calc(100%-4rem)]"
				/>
			</article>
		</div>
	</div>
</section>
