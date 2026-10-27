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
		content="Hire students and graduates with JobBeta: AI-matched shortlists, interview scheduling and one hiring pipeline."
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
/>
<CtaBanner
	title="Create an employer account."
	body="Join the waitlist to start hiring top students and graduates as soon as we launch."
	primary={{ label: 'Join as an Employer', href: links.waitlistEmployer }}
	secondary={{ label: 'Request a demo', href: links.demo }}
	tertiary={{ label: 'Partner with JobBeta', href: links.partner }}
/>
