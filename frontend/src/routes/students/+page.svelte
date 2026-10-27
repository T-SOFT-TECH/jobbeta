<script lang="ts">
	import StudentsHero from '$lib/components/students/StudentsHero.svelte';
	import StudentSteps from '$lib/components/students/StudentSteps.svelte';
	import ExclusiveFeatures from '$lib/components/students/ExclusiveFeatures.svelte';
	import CtaBanner from '$lib/components/ui/CtaBanner.svelte';
	import FaqSection from '$lib/components/home/FaqSection.svelte';
	import { links } from '$lib/config/site';
</script>

<svelte:head>
	<title>Students & Graduates | JobBeta</title>
	<meta
		name="description"
		content="Find internships and first jobs with JobBeta. Free for students and graduates."
	/>
</svelte:head>

<StudentsHero />
<StudentSteps />
<ExclusiveFeatures />
<CtaBanner
	title="Join JobBeta today. It's free."
	body="Get your profile ready before launch and be first in line for opportunities tailored to you."
	primary={{ label: 'Sign up – it’s free', href: links.waitlistStudent }}
	secondary={{ label: 'Learn more about JobBeta', href: links.learnMore }}
	tertiary={null}
/>
<FaqSection
	audiences={['student']}
	title="Student FAQs"
	subtitle="Everything you need to know before you join."
/>
