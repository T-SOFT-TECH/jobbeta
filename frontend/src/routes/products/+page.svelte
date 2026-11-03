<script lang="ts">
	import ProductsHero from '$lib/components/products/ProductsHero.svelte';
	import HiringShowcase from '$lib/components/products/HiringShowcase.svelte';
	import HiringPillars from '$lib/components/products/HiringPillars.svelte';
	import MatchShowcase from '$lib/components/home/MatchShowcase.svelte';
	import ProductSuite from '$lib/components/products/ProductSuite.svelte';
	import CtaBanner from '$lib/components/ui/CtaBanner.svelte';
	import { links } from '$lib/config/site';
</script>

<!-- Products and Solutions merged into one page (client review v2); /solutions redirects here -->
<svelte:head>
	<title>Products & Solutions | JobBeta</title>
	<meta
		name="description"
		content="One platform for early-career hiring. Discover, match and connect with early-career talent with BetaMatch, job posting, interview scheduling and hiring analytics."
	/>
</svelte:head>

<ProductsHero />
<HiringShowcase />
<HiringPillars />
<MatchShowcase
	eyebrow="Feature spotlight"
	title="BetaMatch: more than a job listing."
	body="Go beyond applications. BetaMatch uses skills, experience and preferences to surface candidates who are a better fit for your roles."
	points={[
		'AI-powered candidate matching',
		'Ranked shortlists with match insights',
		'Mutual interest and direct messaging'
	]}
	cta={{ label: 'Join the Employer Waitlist', href: links.waitlistEmployer }}
/>
<ProductSuite />
<CtaBanner
	title="Discover how JobBeta can transform your hiring."
	body="See the platform in action, or join the waitlist for early access."
	primary={{ label: 'Request a Demo', href: links.demo }}
	secondary={{ label: 'Join the Waitlist', href: links.waitlistEmployer }}
	tertiary={null}
/>
