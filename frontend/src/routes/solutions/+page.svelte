<script lang="ts">
	import SolutionsHero from '$lib/components/solutions/SolutionsHero.svelte';
	import SolutionsFeatures from '$lib/components/solutions/SolutionsFeatures.svelte';
	import MatchShowcase from '$lib/components/home/MatchShowcase.svelte';
	import CtaBanner from '$lib/components/ui/CtaBanner.svelte';
	import { links } from '$lib/config/site';
</script>

<svelte:head>
	<title>Solutions | JobBeta</title>
	<meta
		name="description"
		content="Attract, connect with, engage and hire early-career talent with JobBeta's employer solutions."
	/>
</svelte:head>

<SolutionsHero />
<SolutionsFeatures />
<MatchShowcase />
<CtaBanner
	title="Ready to meet your next hire?"
	body="Join the waitlist as an employer, or book a demo and we'll walk you through the platform."
	primary={{ label: 'Join as an Employer', href: links.waitlistEmployer }}
	secondary={{ label: 'Book a Demo', href: links.demo }}
	tertiary={{ label: 'Partner with JobBeta', href: links.partner }}
/>
