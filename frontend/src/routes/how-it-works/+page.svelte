<script lang="ts">
	import ProcessSteps from '$lib/components/ProcessSteps.svelte';
	import StudentsHowItWorks from '$lib/components/how-it-works/StudentsHowItWorks.svelte';
	import EmployersHowItWorksHero from '$lib/components/employers/EmployersHowItWorksHero.svelte';
	import SolutionsCTA from '$lib/components/solutions/SolutionsCTA.svelte';
	import Animate from '$lib/components/Animate.svelte';
</script>

<svelte:head>
	<title>How It Works - JobBeta</title>
	<meta name="description" content="Learn how JobBeta works for job seekers and employers" />
</svelte:head>

<div class="w-full bg-white">
	<!-- Hero Section -->
	<section class="relative w-full overflow-hidden px-4 py-20 md:h-[712px] md:py-0">
		<!-- Background image -->
		<div
			class="absolute inset-0 bg-cover bg-center bg-no-repeat"
			style="background-image: url('/images/how-it-works/frame-20856641690.png'); opacity: 0.5;"
		></div>

		<!-- Purple overlay on top of image -->
		<div class="absolute inset-0 bg-[#7502ff]/98"></div>

		<!-- Decorative circles - hidden on mobile -->
		<div class="pointer-events-none hidden lg:block">
			<img
				src="/images/career-tips/group-13213144580.svg"
				alt=""
				class="absolute top-[550px] left-0"
			/>
			<img
				src="/images/career-tips/group-13213144580.svg"
				alt=""
				class="absolute bottom-[550px] left-0"
			/>
			<img
				src="/images/career-tips/group-13213144580.svg"
				alt=""
				class="absolute right-0 bottom-[550px]"
			/>
			<img
				src="/images/career-tips/group-13213144580.svg"
				alt=""
				class="absolute top-[550px] right-0"
			/>
		</div>

		<!-- Content - centered -->
		<Animate variant="bottom" duration={0.8}>
			<div
				class="relative z-10 flex h-full min-h-[400px] w-full flex-col items-center justify-center text-center md:min-h-[712px]"
			>
				<div class="mx-auto flex max-w-[640px] flex-col items-center gap-4">
					<h1
						class="text-3xl leading-tight font-bold text-white sm:text-4xl md:text-[40px] md:leading-[60px]"
						style="font-family: var(--font-geist); letter-spacing: -0.005em;"
					>
						How it works
					</h1>
					<p
						class="text-base leading-relaxed font-medium text-white/85 sm:text-lg md:text-xl md:leading-[30px]"
						style="font-family: var(--font-geist); letter-spacing: -0.005em;"
					>
						Get expert-backed insights, practical tips, and guidance to help you make informed
						career decisions, grow your skills, and reach your professional goals.
					</p>
				</div>
			</div>
		</Animate>
	</section>

	<!-- Process Section - Using Reusable Component -->
	<ProcessSteps />

	<!-- How It Works for Students Section -->
	<StudentsHowItWorks />

	<!-- How It Works for Employers Section -->
	<EmployersHowItWorksHero />

	<!-- CTA Footer Section -->
	<SolutionsCTA
		leftBgColor="bg-primary"
		rightBgColor="bg-secondary"
		leftLabel=""
		leftTitle="Ready to bring JobBeta to your students?"
		leftDescription="Let’s work together to shape the future of early-career hiring."
		leftButton1Text="Become a Partner"
		leftButton2Text="Schedule a Demo"
		rightLabel="We love to hear from you"
		rightTitle="Do you need more Details<br />or support?"
		rightButton1Text="Hire With JobBeta"
		rightButton2Text="Partner with JobBeta"
		showDecorators={true}
	/>
</div>
