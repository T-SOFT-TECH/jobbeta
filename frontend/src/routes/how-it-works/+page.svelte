<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import StudentSteps from '$lib/components/students/StudentSteps.svelte';
	import EmployerSteps from '$lib/components/employers/EmployerSteps.svelte';
	import CtaBanner from '$lib/components/ui/CtaBanner.svelte';
	import FaqSection from '$lib/components/home/FaqSection.svelte';
</script>

<svelte:head>
	<title>How It Works | JobBeta</title>
	<meta
		name="description"
		content="How JobBeta works for students and graduates looking for their first role, and for employers hiring them."
	/>
</svelte:head>

<!-- Client review: a dedicated page in the nav, students/graduates and employers in separate sections -->
<section class="relative overflow-hidden bg-primary text-white">
	<div class="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
	<div class="page-container relative flex flex-col items-center gap-6 py-14 text-center md:py-20">
		<span class="eyebrow-light"><Icon name="sparkles" size={14} /> How it works</span>
		<h1 class="title-display max-w-3xl">Simple from start to finish, whichever side you're on.</h1>
		<p class="lead max-w-2xl text-white/85">
			Students build a profile and get matched to roles that fit. Employers post a role and get a
			ranked shortlist. Here's each journey, step by step.
		</p>
		<nav aria-label="Jump to a guide" class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
			<a href="#student-steps" class="btn btn-light text-primary">
				<Icon name="graduation" size={18} /> For students & graduates
			</a>
			<a href="#employer-steps" class="btn btn-outline-light">
				<Icon name="briefcase" size={18} /> For employers
			</a>
		</nav>
	</div>
</section>

<StudentSteps />
<div class="page-container"><hr class="border-neutral-grey" /></div>
<EmployerSteps />
<FaqSection />
<CtaBanner />
