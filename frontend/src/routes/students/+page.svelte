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
		content="Discover internships and entry-level roles matched to your skills, interests, and potential. Free for students and graduates."
	/>
</svelte:head>

<StudentsHero />
<StudentSteps />
<ExclusiveFeatures />
<CtaBanner
	title="Your next opportunity starts here."
	body="Join the waitlist for early access to JobBeta. It's free for students and graduates."
	primary={{ label: 'Join Student Waitlist', href: links.waitlistStudent }}
	secondary={{ label: 'Learn More About JobBeta', href: links.learnMore }}
	tertiary={null}
/>
<FaqSection
	audiences={['student']}
	title="Student FAQs"
	subtitle="Everything you need to know before you join."
	helpText="Have a question about JobBeta? We're here to help."
	tone="lavender"
/>
