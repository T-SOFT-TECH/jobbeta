<script lang="ts">
	import EmployersHero from '$lib/components/employers/EmployersHero.svelte';
	import EmployerSteps from '$lib/components/employers/EmployerSteps.svelte';
	import RecruitmentSolutions from '$lib/components/employers/RecruitmentSolutions.svelte';
	import FindTopTalent from '$lib/components/employers/FindTopTalent.svelte';
	import EmployersPricing from '$lib/components/employers/EmployersPricing.svelte';
	import BrandMarquee from '$lib/components/ui/BrandMarquee.svelte';
	import CtaBanner from '$lib/components/ui/CtaBanner.svelte';
	import FaqSection from '$lib/components/home/FaqSection.svelte';
	import { partnerBrands } from '$lib/content/home';
	import { links } from '$lib/config/site';
</script>

<svelte:head>
	<title>Employers | JobBeta</title>
	<meta
		name="description"
		content="Find the right early-career talent with JobBeta. Discover promising students and graduates, find candidates who fit your needs, and manage hiring in one place."
	/>
</svelte:head>

<EmployersHero />
<BrandMarquee brands={partnerBrands} heading="Built for teams hiring early-career talent" />
<EmployerSteps />
<FindTopTalent />
<RecruitmentSolutions />
<EmployersPricing />
<FaqSection
	audiences={['employer']}
	title="Employer FAQs"
	subtitle="What hiring teams usually ask before getting started."
	tone="sky"
/>
<CtaBanner
	title="Be among the first to hire with JobBeta."
	body="Join our waitlist for early access to smarter hiring and a growing pool of students and graduates."
	primary={{ label: 'Join the Employer Waitlist', href: links.waitlistEmployer }}
	secondary={{ label: 'Request a Demo', href: links.demo }}
	tertiary={{ label: 'Partner with JobBeta', href: links.partner }}
/>
