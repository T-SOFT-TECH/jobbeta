<script lang="ts">
	import CareerCentersHero from '$lib/components/career-centers/CareerCentersHero.svelte';
	import CareerCentersValue from '$lib/components/career-centers/CareerCentersValue.svelte';
	import CareerCentersFeatures from '$lib/components/career-centers/CareerCentersFeatures.svelte';
	import CareerCentersTestimonials from '$lib/components/career-centers/CareerCentersTestimonials.svelte';
	import CtaBanner from '$lib/components/ui/CtaBanner.svelte';
	import FaqSection from '$lib/components/home/FaqSection.svelte';
	import { links } from '$lib/config/site';

	let { data } = $props();
</script>

<svelte:head>
	<title>Career Centres | JobBeta</title>
	<meta
		name="description"
		content="Partner with JobBeta to connect your students with verified job opportunities and employers."
	/>
</svelte:head>

<CareerCentersHero />
<CareerCentersValue />
<CareerCentersFeatures />
<CareerCentersTestimonials testimonials={data.testimonials} />
<FaqSection
	audiences={['career-center']}
	title="Questions from career centres"
	subtitle="How partnering with JobBeta works."
/>
<CtaBanner
	title="Ready to bring JobBeta to your students?"
	body="Let's work together to shape the future of early-career hiring."
	primary={{ label: 'Become a Partner', href: links.partner }}
	secondary={{ label: 'Book a Demo', href: links.demo }}
	tertiary={{ label: 'Browse career resources', href: links.resources }}
/>
