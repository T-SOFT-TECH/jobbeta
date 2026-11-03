<script lang="ts">
	import CareerTipsHero from '$lib/components/career-tips/CareerTipsHero.svelte';
	import TopicsSection from '$lib/components/career-tips/TopicsSection.svelte';
	import ArticlesGrid from '$lib/components/career-tips/ArticlesGrid.svelte';
	import CareerTipsCTA from '$lib/components/career-tips/CareerTipsCTA.svelte';
	import { careerTips, type TipTopic } from '$lib/content/careerTips';

	let activeTopic: TipTopic = $state('All');
	const tips = $derived(
		activeTopic === 'All' ? careerTips : careerTips.filter((tip) => tip.topic === activeTopic)
	);
</script>

<svelte:head>
	<title>Career Tips | JobBeta</title>
	<meta
		name="description"
		content="Practical advice on CVs, interviews, networking, and everything you need to navigate your early career."
	/>
</svelte:head>

<CareerTipsHero />

<section class="section bg-white">
	<div class="page-container flex flex-col gap-8">
		<TopicsSection bind:activeTopic />
		<ArticlesGrid {tips} />
	</div>
</section>

<CareerTipsCTA />
