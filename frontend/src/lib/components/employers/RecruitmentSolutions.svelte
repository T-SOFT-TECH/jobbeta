<script>
	import { base } from '$app/paths';
	import Animate from '$lib/components/Animate.svelte';

	const solutions = [
		{
			title: 'Featured Job Listings',
			description: 'Get 5X more visibility for your job postings.',
			iconBg: 'group8.svg',
			iconFg: 'group9.svg'
		},
		{
			title: 'Talent Analytics',
			description: 'Gain insights on applicant trends and industry hiring data.',
			iconBg: 'group10.svg',
			iconFg: 'group11.svg'
		},
		{
			title: 'Employer Branding',
			description: 'Attract top candidates by showcasing your company culture & values.',
			iconBg: 'group12.svg',
			iconFg: 'group13.svg'
		},
		{
			title: 'Skill Assessments',
			description: 'Evaluate candidates with custom skill tests & assessments.',
			iconBg: 'group14.svg',
			iconFg: 'group15.svg'
		},
		{
			title: 'Talent Pool Access',
			description: 'Browse through a curated list of pre-screened candidates.',
			iconBg: 'group16.svg',
			iconFg: 'group17.svg'
		}
	];
</script>

<section class="relative overflow-hidden bg-primary py-40">
	<!-- Decorative Background Circles -->
	<!-- Decorative Header -->
	<div class="pointer-events-none absolute top-0 left-0 h-[130px] w-full overflow-hidden">
		<div
			class="absolute top-[43px] left-[70px] flex flex-row items-center justify-start gap-[79px] opacity-20 md:opacity-100"
		>
			<div class="relative h-8 w-[106px] shrink-0 overflow-hidden">
				<img
					class="absolute top-[0.39px] left-[0.41px] h-auto"
					src="{base}/icons/employers/clip-path-group0.svg"
					alt=""
				/>
			</div>
			<div class="relative h-8 w-[100px] shrink-0 overflow-hidden">
				<img
					class="absolute inset-0 h-full w-full"
					src="{base}/icons/employers/group6.svg"
					alt=""
				/>
			</div>
			<div class="relative h-8 w-[100px] shrink-0 overflow-hidden">
				<img
					class="absolute inset-0 h-full w-full"
					src="{base}/icons/employers/group7.svg"
					alt=""
				/>
			</div>
			<div class="relative h-[15px] w-[98px] shrink-0 overflow-hidden">
				<img
					class="absolute top-[0.01px] left-[0.01px] h-auto"
					src="{base}/icons/employers/page-10.svg"
					alt=""
				/>
			</div>
			<div class="relative h-[15px] w-[98px] shrink-0 overflow-hidden">
				<img
					class="absolute top-[0.01px] left-[0.01px] h-auto"
					src="{base}/icons/employers/page-11.svg"
					alt=""
				/>
			</div>
			<div class="relative h-[15px] w-[98px] shrink-0 overflow-hidden">
				<img
					class="absolute top-[0.01px] left-[0.01px] h-auto"
					src="{base}/icons/employers/page-12.svg"
					alt=""
				/>
			</div>
			<div class="relative h-[29px] w-[94px] shrink-0 overflow-hidden">
				<img
					class="absolute top-[0.36px] left-[0.36px] h-auto"
					src="{base}/icons/employers/clip-path-group1.svg"
					alt=""
				/>
			</div>
			<img
				class="relative h-[44.44px] w-[53.4px] shrink-0"
				src="{base}/icons/employers/page-13.svg"
				alt=""
			/>
		</div>
	</div>

	<div class="relative z-10 container mx-auto px-4">
		<!-- Header -->
		<Animate variant="bottom" duration={0.8}>
			<div class="mx-auto mb-16 max-w-3xl text-center">
				<h2 class="mb-6 font-geist text-3xl font-bold text-white md:text-5xl">
					Recruitment Solutions & Services
				</h2>
				<p class="mb-8 font-geist text-lg text-white/85 md:text-xl">
					At JobBeta, we go beyond job postings. We provide end-to-end recruitment solutions to help
					you find the right talent faster. Need tailored hiring solutions? Contact us today!
				</p>
				<button
					class="rounded-[20px] bg-white px-8 py-4 font-lato font-bold text-neutral-800 shadow-lg transition-colors hover:bg-neutral-100"
				>
					Contact us today
				</button>
			</div>
		</Animate>

		<!-- Solutions Grid -->
		<div class="flex flex-col items-center gap-6">
			<!-- Top Row (3 items) -->
			<div class="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each solutions.slice(0, 3) as solution}
					<div
						class="flex h-full min-h-[300px] flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl"
					>
						<div
							class="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary"
						>
							<img src="{base}/icons/employers/{solution.iconFg}" alt="" class="h-6 w-6" />
						</div>
						<h3 class="font-geist text-xl font-bold text-neutral-800">{solution.title}</h3>
						<p class="font-geist text-base text-neutral-600">{solution.description}</p>
					</div>
				{/each}
			</div>

			<!-- Bottom Row (2 items) -->
			<div class="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
				{#each solutions.slice(3, 5) as solution}
					<div
						class="flex h-full min-h-[300px] flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl"
					>
						<div
							class="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary"
						>
							<img src="{base}/icons/employers/{solution.iconFg}" alt="" class="h-6 w-6" />
						</div>
						<h3 class="font-geist text-xl font-bold text-neutral-800">{solution.title}</h3>
						<p class="font-geist text-base text-neutral-600">{solution.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
