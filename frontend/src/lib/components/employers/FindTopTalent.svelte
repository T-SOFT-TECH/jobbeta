<script>
	import { base } from '$app/paths';
	import EmployerDashboardMockup from './EmployerDashboardMockup.svelte';

	const features = [
		{
			title: 'AI Powered Matching',
			description:
				'Find candidates that align with your job requirements effortlessly. Advanced algorithms ensure optimal candidate-employer fit.'
		},
		{
			title: 'Fast & Efficient Hiring',
			description: 'Post jobs and connect with talent in minutes.'
		},
		{
			title: 'Qualified Candidates',
			description: 'Access a pool of verified students and graduates ready to work.'
		},
		{
			title: 'Affordable & Flexible Plans',
			description: 'Choose a plan that fits your budget and hiring needs.'
		}
	];
</script>

<section class="relative overflow-hidden bg-[#eeecfc] py-12 md:py-20 lg:py-45">
	<div class="container mx-auto px-4">
		<!-- Main Content (Text + Image) -->
		<div class="mb-20 flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
			<!-- Text Content -->
			<div class="w-full lg:w-1/2">
				<h2 class="mb-6 font-geist text-4xl leading-tight font-bold text-neutral-800 md:text-5xl">
					Find Top Talent Faster & <br />Smarter
				</h2>
				<p class="mb-8 font-geist text-xl leading-relaxed text-neutral-800/80">
					At JobBeta, we connect employers with skilled students and graduates who are ready to
					contribute and grow within your organization. Our platform streamlines the hiring process,
					giving you direct access to a pool of highly motivated candidates actively seeking job
					opportunities.
				</p>
				<button
					class="rounded-[20px] bg-primary px-8 py-4 font-lato text-base font-bold text-white shadow-lg transition-colors hover:bg-primary/90"
				>
					Learn More
				</button>
			</div>

			<!-- Dashboard Preview Component -->
			<div class="flex w-full justify-center lg:w-1/2 lg:justify-end">
				<EmployerDashboardMockup />
			</div>
		</div>

		<!-- Features Grid (4 Columns) -->
		<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each features as feature}
				<div class="flex items-start gap-4">
					<!-- Purple Vertical Bar -->
					<div class="h-[100px] w-[3px] shrink-0 rounded-lg bg-[#7502ff]"></div>
					<div class="flex flex-col gap-2">
						<h3 class="font-geist text-xl font-bold text-neutral-800/80">
							{feature.title}
						</h3>
						<p class="font-geist text-base leading-relaxed text-neutral-800/80">
							{feature.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
