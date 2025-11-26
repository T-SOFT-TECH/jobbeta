<script>
	import CareerTipsHero from '$lib/components/career-tips/CareerTipsHero.svelte';
	import TopicsSection from '$lib/components/career-tips/TopicsSection.svelte';
	import ArticlesGrid from '$lib/components/career-tips/ArticlesGrid.svelte';
	import CareerTipsCTA from '$lib/components/career-tips/CareerTipsCTA.svelte';

	const topics = [
		'All',
		'Networking',
		'Productivity',
		'Resume',
		'Career',
		'Job Applications',
		'Portfolios'
	];

	let activeTopic = 'All';

	const articles = [
		{
			title: 'What career path is best suited for my skills and interests?',
			icon: '/images/career-tips/group0.svg',
			content: 'Yes! Signing up, creating a profile, and applying for jobs is completely free.'
		},
		{
			title: 'What are high-demand jobs in my field right now?',
			icon: '/images/career-tips/add0.svg'
		},
		{
			title: 'Should I pursue further education or certifications?',
			icon: '/images/career-tips/add1.svg'
		},
		{
			title: 'What types of candidates are on JobBeta?',
			icon: '/images/career-tips/add2.svg'
		},
		{
			title: 'How do I connect with candidates?',
			icon: '/images/career-tips/add3.svg'
		},
		{
			title: 'How do I apply for jobs?',
			icon: '/images/career-tips/add4.svg'
		},
		{
			title: 'How do I switch careers without starting from scratch?',
			icon: '/images/career-tips/group1.svg',
			content: 'Yes! Signing up, creating a profile, and applying for jobs is completely free.'
		},
		{
			title: 'How do I apply for jobs?',
			icon: '/images/career-tips/add5.svg'
		},
		{
			title: 'How do I apply for jobs?',
			icon: '/images/career-tips/add6.svg'
		},
		{
			title: 'How do I apply for jobs?',
			icon: '/images/career-tips/add7.svg'
		},
		{
			title: 'How do I apply for jobs?',
			icon: '/images/career-tips/add8.svg'
		},
		{
			title: 'How do I apply for jobs?',
			icon: '/images/career-tips/add9.svg'
		}
	];
</script>

<svelte:head>
	<title>Career Tips - JobBeta</title>
</svelte:head>

<div class="overflow-hidden bg-white font-['Geist',sans-serif]">
	<CareerTipsHero />

	<section class="px-4 py-20 md:px-20">
		<div class="mx-auto max-w-7xl">
			<TopicsSection {topics} bind:activeTopic />
			<ArticlesGrid {articles} />
		</div>
	</section>

	<CareerTipsCTA />
</div>
