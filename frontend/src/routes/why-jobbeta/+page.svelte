<script lang="ts">
	import WhyHero from '$lib/components/why/WhyHero.svelte';
	import CareerHubBento from '$lib/components/why/CareerHubBento.svelte';
	import AudienceShowcase from '$lib/components/why/AudienceShowcase.svelte';
	import Promises from '$lib/components/why/Promises.svelte';
	import CtaBanner from '$lib/components/ui/CtaBanner.svelte';
	import { links } from '$lib/config/site';
</script>

<svelte:head>
	<title>Why JobBeta — Early careers deserve a better start</title>
	<meta
		name="description"
		content="We're building more than a job board. JobBeta connects students, graduates, and employers through meaningful opportunities, skills, and potential."
	/>
</svelte:head>

<WhyHero />
<CareerHubBento />
<AudienceShowcase />
<Promises />
<CtaBanner
	title="Whether you're searching or hiring, start here."
	body="Join the waitlist and be first in line when JobBeta launches."
	primary={{ label: 'Join Student Waitlist', href: links.waitlistStudent }}
	secondary={{ label: 'Join Employer Waitlist', href: links.waitlistEmployer }}
	tertiary={{ label: 'Career Centres: Partner With Us', href: links.registerInterest }}
/>
