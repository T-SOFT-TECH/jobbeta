<script lang="ts">
	import CareerCentersHero from '$lib/components/career-centers/CareerCentersHero.svelte';
	import CareerCentersBuilding from '$lib/components/career-centers/CareerCentersBuilding.svelte';
	import RegisterInterest from '$lib/components/career-centers/RegisterInterest.svelte';
</script>

<!--
	Client review v2: Career Centres are post-MVP, so the page is three sections
	focused on expressions of interest. Reached from the footer and Products &
	Solutions, not the main nav.
-->
<svelte:head>
	<title>JobBeta for Career Centres (Coming Soon) | JobBeta</title>
	<meta
		name="description"
		content="We're building tools to help universities and career centres connect students with career opportunities and employers. Register your interest."
	/>
</svelte:head>

<CareerCentersHero />
<CareerCentersBuilding />
<RegisterInterest />
