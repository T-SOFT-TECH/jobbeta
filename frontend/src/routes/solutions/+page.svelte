<script>
	import SolutionsHero from '$lib/components/solutions/SolutionsHero.svelte';
	import DashboardPreview from '$lib/components/solutions/DashboardPreview.svelte';
	import SolutionsFeatures from '$lib/components/solutions/SolutionsFeatures.svelte';
	import SolutionsCTA from '$lib/components/solutions/SolutionsCTA.svelte';
	import SolutionsFooter from '$lib/components/solutions/SolutionsFooter.svelte';
</script>

<svelte:head>
	<title>Solutions - JobBeta</title>
</svelte:head>

<div class="overflow-hidden bg-white font-['Geist',sans-serif]">
	<SolutionsHero />
	<DashboardPreview />
	<SolutionsFeatures />
	<SolutionsCTA />
</div>
