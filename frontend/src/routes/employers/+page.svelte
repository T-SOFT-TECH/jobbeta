<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import EmployersHero from '$lib/components/employers/EmployersHero.svelte';
	import EmployersHowItWorksHero from '$lib/components/employers/EmployersHowItWorksHero.svelte';
	import EmployersBrands from '$lib/components/employers/EmployersBrands.svelte';
	import RecruitmentSolutions from '$lib/components/employers/RecruitmentSolutions.svelte';
	import FindTopTalent from '$lib/components/employers/FindTopTalent.svelte';
	import EmployersHowItWorks from '$lib/components/employers/EmployersHowItWorks.svelte';
	import EmployersPricing from '$lib/components/employers/EmployersPricing.svelte';
	import EmployersTestimonials from '$lib/components/employers/EmployersTestimonials.svelte';
	import EmployersFAQ from '$lib/components/employers/EmployersFAQ.svelte';
	import SolutionsCTA from '$lib/components/solutions/SolutionsCTA.svelte';
</script>

<svelte:head>
	<title>Employers | JobBeta</title>
	<meta
		name="description"
		content="Hire top talent with JobBeta. Post jobs, manage candidates, and grow your team."
	/>
</svelte:head>

<div class="flex min-h-screen flex-col bg-white font-geist">
	<main class="flex-grow">
		<EmployersHero
			title="Hire the Best Talent with JobBeta"
			subtitle="Connect with top-tier candidates and streamline your recruitment process."
		/>
		<EmployersBrands />
		<EmployersHowItWorksHero />
		<RecruitmentSolutions />
		<FindTopTalent />

		<EmployersPricing />
		<EmployersTestimonials />
		<EmployersFAQ />
		<SolutionsCTA
			leftBgColor="bg-primary"
			rightBgColor="bg-secondary"
			leftLabel=""
			leftTitle="Create an Employer Account"
			leftDescription="Start hiring today! Sign up as an employer and gain access to top students and graduate talent."
			leftButton1Text="Join As an Employer"
			leftButton2Text="Partner with us "
			rightLabel="We love to hear from you"
			rightTitle="Do you need more Details<br />or support?"
			rightButton1Text="Hire With JobBeta"
			rightButton2Text="Partner with JobBeta"
			showDecorators={true}
		/>
	</main>

	<Footer />
</div>
