<script lang="ts">
	import HomeHero from '$lib/components/home/HomeHero.svelte';
	import AudienceTabs from '$lib/components/home/AudienceTabs.svelte';
	import HowItWorks from '$lib/components/home/HowItWorks.svelte';
	import MatchShowcase from '$lib/components/home/MatchShowcase.svelte';
	import KickStart from '$lib/components/home/KickStart.svelte';
	import CuratedJobs from '$lib/components/home/CuratedJobs.svelte';
	import FaqSection from '$lib/components/home/FaqSection.svelte';
	import BrandMarquee from '$lib/components/ui/BrandMarquee.svelte';
	import CtaBanner from '$lib/components/ui/CtaBanner.svelte';
	import { partnerBrands } from '$lib/content/home';
</script>

<svelte:head>
	<title>JobBeta — Early-career jobs, internships and hiring</title>
	<meta
		name="description"
		content="JobBeta connects students and graduates with verified internships and entry-level roles, and helps employers hire early-career talent."
	/>
</svelte:head>

<HomeHero />
<BrandMarquee brands={partnerBrands} heading="Built for teams hiring early-career talent across Nigeria" />
<AudienceTabs />
<HowItWorks />
<MatchShowcase />
<KickStart />
<CuratedJobs />
<CtaBanner />
<FaqSection />
