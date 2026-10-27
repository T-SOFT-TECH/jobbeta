<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
	import { heroPoints } from '$lib/content/students';
	import { sampleJobs } from '$lib/content/home';

	// The old location/placement/pay search bar looked interactive but did nothing (client review);
	// a preview of matched roles makes the same promise without a dead control.
	const preview = sampleJobs.slice(0, 3);
	const scores = [96, 91, 87];
</script>

<section class="relative overflow-hidden bg-primary text-white">
	<div
		class="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-white/10 blur-3xl"
	></div>
	<div
		class="page-container relative grid grid-cols-1 items-center gap-12 py-12 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20"
	>
		<div class="flex flex-col items-start gap-6">
			<span class="eyebrow-light"><Icon name="graduation" size={14} /> For students & graduates</span>
			<h1 class="title-display">Your career starts here with JobBeta.</h1>
			<p class="lead max-w-xl text-white/85">
				Your gateway to internships, entry-level jobs and career opportunities. We connect students
				and graduates with employers looking for fresh talent.
			</p>
			<ul class="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
				{#each heroPoints as point (point)}
					<li class="flex items-center gap-2 font-geist text-sm text-white/90">
						<span class="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
							<Icon name="check" size={12} strokeWidth={3} />
						</span>
						{point}
					</li>
				{/each}
			</ul>
			<div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
				<a href={links.waitlistStudent} class="btn btn-light text-primary">
					Join the Waitlist <Icon name="arrow-right" size={18} />
				</a>
				<a href="#student-steps" class="btn btn-outline-light">See how it works</a>
			</div>
		</div>

		<div class="rounded-3xl bg-white p-5 text-secondary shadow-2xl md:p-6" aria-hidden="true">
			<div class="flex items-center justify-between">
				<p class="font-geist font-semibold">Jobs matched for you</p>
				<span class="rounded-full bg-primary/10 px-3 py-1 font-geist text-xs font-semibold text-primary">
					This week
				</span>
			</div>
			<ul class="mt-4 flex flex-col gap-3">
				{#each preview as job, i (job.role)}
					<li class="flex items-center gap-3 rounded-2xl border border-neutral-grey p-3">
						<span
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-geist text-xs font-bold text-white"
							style="background-color: {job.color}"
						>
							{job.company.split(' ').map((w) => w[0]).join('').slice(0, 2)}
						</span>
						<div class="min-w-0 flex-1 font-geist leading-tight">
							<p class="truncate text-sm font-semibold">{job.role}</p>
							<p class="truncate text-xs text-text-secondary">{job.company} · {job.location}</p>
						</div>
						<span class="rounded-full bg-emerald-50 px-2.5 py-1 font-geist text-xs font-semibold text-emerald-700">
							{scores[i]}%
						</span>
					</li>
				{/each}
			</ul>
			<p class="mt-4 font-geist text-xs text-text-secondary">Sample matches shown for illustration.</p>
		</div>
	</div>
</section>
