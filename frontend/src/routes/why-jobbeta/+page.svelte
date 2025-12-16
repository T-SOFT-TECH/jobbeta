<script lang="ts">
	import EarlyCareerFeature from '$lib/components/EarlyCareerFeature.svelte';
	import AISmartFeature from '$lib/components/AISmartFeature.svelte';
	import ProfilesFeature from '$lib/components/ProfilesFeature.svelte';
	import NumbersSection from '$lib/components/NumbersSection.svelte';
	import RealConnectionsSection from '$lib/components/RealConnectionsSection.svelte';
	import StudentsGraduatesSection from '$lib/components/StudentsGraduatesSection.svelte';
	import EmployersSection from '$lib/components/EmployersSection.svelte';
	import CareerCentersSection from '$lib/components/CareerCentersSection.svelte';
	import SolutionsCTA from '$lib/components/solutions/SolutionsCTA.svelte';
</script>

<svelte:head>
	<title>Why JobBeta - Early Careers Deserve a Better Start</title>
</svelte:head>

<!-- Hero Section -->
<section
	class="relative h-[500px] w-full bg-[url(/images/hero-background.png)] bg-cover bg-center sm:h-[600px] md:h-[700px] lg:h-[881px]"
>
	<!-- Gradient Overlay - Dark on left, transparent on right to preserve face -->
	<div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

	<div class="absolute inset-0 flex items-center">
		<div class="page-container w-full">
			<!-- Content Container -->
			<div class="relative z-10 flex max-w-[684px] flex-col items-start gap-4 sm:gap-6">
				<!-- Heading -->
				<h1
					class="text-[32px] leading-tight font-semibold text-white sm:text-[40px] md:text-[50px] lg:text-[60px]"
					style="font-family: var(--font-geist); letter-spacing: -0.3px;"
				>
					Why JobBeta? Because Early Careers Deserve a Better Start
				</h1>

				<!-- Description -->
				<p
					class="max-w-[495px] text-[16px] leading-relaxed font-normal text-white sm:text-[18px] lg:text-[20px]"
					style="font-family: var(--font-geist); letter-spacing: -0.1px;"
				>
					We're building more than a job board — we're creating an ecosystem where students,
					graduates, and employers connect meaningfully, grow together, and succeed.
				</p>

				<!-- Buttons Container -->
				<div
					class="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start sm:gap-[12px]"
				>
					<!-- Primary Button -->
					<button
						class="flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-[20px] bg-[#3296F8] px-[10px] py-[16px] transition-all duration-200 hover:bg-[#3296f8]/90 sm:w-[240px]"
					>
						<p
							class="text-center text-[16px] text-white"
							style="font-family: var(--font-lato); font-weight: 700; line-height: 24px; letter-spacing: -0.08px;"
						>
							See How It Works
						</p>
					</button>

					<!-- Secondary Button -->
					<button
						class="flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-[20px] border border-white/30 px-[10px] py-[16px] transition-all duration-200 hover:bg-white/10 sm:w-[240px]"
					>
						<p
							class="text-center text-[16px] text-white"
							style="font-family: var(--font-lato); font-weight: 700; line-height: 24px; letter-spacing: -0.08px;"
						>
							Join Now – It's Free
						</p>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="w-full bg-white py-12 md:py-20">
	<div class="page-container px-4 md:px-6">
		<!-- Main Heading -->
		<div class="mb-12 flex justify-center md:mb-20">
			<h2
				class="max-w-[688px] text-center text-2xl leading-tight font-bold text-[#110d21] sm:text-3xl md:text-[40px] md:leading-[52px]"
				style="font-family: var(--font-geist); letter-spacing: -0.2px;"
			>
				Not Just Another Job Board.<br />A Smarter Career Hub.
			</h2>
		</div>

		<!-- Feature 1: Made for Early-Career Talent -->
		<div class="flex w-full justify-center">
			<EarlyCareerFeature />
		</div>

		<!-- Feature 2: Human-Centered + AI Smart -->
		<div class="mt-16 flex w-full justify-center md:mt-32">
			<AISmartFeature />
		</div>

		<!-- Feature 3: Profiles that Tell Your Story -->
		<div class="mt-16 flex w-full justify-center md:mt-32">
			<ProfilesFeature />
		</div>
	</div>
</section>

<!-- Real Connections Section -->
<RealConnectionsSection />

<!-- Students & Graduates Section -->
<StudentsGraduatesSection />

<!-- Employers Section -->
<EmployersSection />

<!-- Career Centers Section -->
<CareerCentersSection />

<!-- Numbers Section -->
<NumbersSection />

<SolutionsCTA
	leftTitle="Whether You’re Searching or Hiring — Start Here."
	leftDescription="Whether You’re Searching or Hiring — Start Here."
	leftButton1Text="Join As a Student / Graduate"
	rightTitle="Do you need more Details
or support?"
	rightButton1Text="Hire With JobBeta"
	rightButton2Text="Partner with JobBeta"
	leftBgColor="bg-[#3296F8]"
/>
