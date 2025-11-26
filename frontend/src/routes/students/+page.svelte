<script>
	import StudentsHero from '$lib/components/students/StudentsHero.svelte';
	import StudentHowItWorks from '$lib/components/students/StudentHowItWorks.svelte';
	import SuccessStories from '$lib/components/students/SuccessStories.svelte';
	import ExclusiveFeatures from '$lib/components/students/ExclusiveFeatures.svelte';
	import StudentFAQs from '$lib/components/students/StudentFAQs.svelte';
	import BoostCareerCTA from '$lib/components/students/BoostCareerCTA.svelte';
	import JoinJobBetaCTA from '$lib/components/students/JoinJobBetaCTA.svelte';
</script>

<svelte:head>
	<title>Students | JobBeta</title>
	<meta
		name="description"
		content="Find your dream job or internship with JobBeta. Free for students and graduates."
	/>
</svelte:head>

<div class="flex w-full flex-col">
	<StudentsHero />
	<StudentHowItWorks />
	<SuccessStories />
	<ExclusiveFeatures />
	<StudentFAQs />
	<BoostCareerCTA />
	<JoinJobBetaCTA />
</div>
