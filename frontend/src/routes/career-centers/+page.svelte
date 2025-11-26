<script lang="ts">
	// Career Centers page - Partner with JobBeta
	import CareerCentersHero from '$lib/components/career-centers/CareerCentersHero.svelte';
	import CareerCentersValue from '$lib/components/career-centers/CareerCentersValue.svelte';
	import CareerCentersLogos from '$lib/components/career-centers/CareerCentersLogos.svelte';
	import CareerCentersFeatures from '$lib/components/career-centers/CareerCentersFeatures.svelte';
	import CareerCentersStats from '$lib/components/career-centers/CareerCentersStats.svelte';
	import CareerCentersTestimonials from '$lib/components/career-centers/CareerCentersTestimonials.svelte';
	import CareerCentersServices from '$lib/components/career-centers/CareerCentersServices.svelte';
	import SolutionsCTA from '$lib/components/solutions/SolutionsCTA.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>Career Centers - JobBeta</title>
	<meta
		name="description"
		content="Partner with JobBeta to connect your students with verified job opportunities and top employers"
	/>
</svelte:head>

<CareerCentersHero />
<CareerCentersValue />
<CareerCentersLogos />
<CareerCentersFeatures />
<CareerCentersStats />
<CareerCentersTestimonials testimonials={data.testimonials} />
<CareerCentersServices />
<SolutionsCTA
	leftTitle="Ready to bring JobBeta to your students?"
	leftDescription="Let's work together to shape the future of early-career hiring."
	leftButton1Text="Become a Partner"
	leftButton2Text="Schedule A Demo"
	leftLabel=""
/>
