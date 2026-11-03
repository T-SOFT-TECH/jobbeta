<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import { links } from '$lib/config/site';
	import { institutionTypes } from '$lib/content/careerCenters';
	import { joinWaitlist } from '$lib/waitlist';

	/**
	 * Institutional expressions of interest (client review v2). Saved to the same
	 * `waitlist` collection as students and employers, with role `career_centre`
	 * plus the institution fields, so launch outreach works from one list.
	 */
	let institution = $state('');
	let contactName = $state('');
	let email = $state('');
	let institutionType = $state('');
	let loading = $state(false);
	let error = $state('');
	let result: 'joined' | 'already' | null = $state(null);

	const field =
		'h-14 w-full rounded-2xl border border-[#d0d5dd] bg-white px-4 font-geist text-base text-secondary placeholder:text-[#98a2b3] focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none';
	const label = 'font-geist text-sm font-semibold text-secondary';

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!institution.trim() || !contactName.trim() || !email.trim() || !institutionType) {
			error = 'Please fill in all four fields.';
			return;
		}
		loading = true;
		error = '';
		try {
			result = await joinWaitlist({
				email,
				role: 'career_centre',
				source: 'career-centres',
				full_name: contactName,
				institution,
				institution_type: institutionType
			});
		} catch (err) {
			console.error(err);
			error =
				'We could not save your details right now. Please try again in a moment, or reach us through the contact page.';
		} finally {
			loading = false;
		}
	}
</script>

<section id="register" class="section scroll-mt-20 bg-white">
	<div class="page-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
		<div class="flex flex-col items-start gap-4">
			<span class="eyebrow">Register your interest</span>
			<h2 class="title-section text-secondary">Be first to bring JobBeta to your campus.</h2>
			<p class="lead text-text-secondary">
				Tell us about your institution and we'll be in touch as JobBeta for Career Centres takes
				shape. No commitment, just an early conversation.
			</p>
		</div>

		<div class="rounded-3xl border border-neutral-grey bg-white p-6 shadow-lg md:p-8">
			{#if result}
				<div class="flex flex-col items-center py-6 text-center" aria-live="polite">
					<span class="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
						<Icon name="check" size={32} class="text-green-600" />
					</span>
					<h3 class="mt-6 font-geist text-2xl font-semibold text-secondary">
						{result === 'already' ? "You're already registered." : 'Thanks for registering your interest!'}
					</h3>
					<p class="mt-3 max-w-sm font-geist text-base text-text-secondary">
						{result === 'already'
							? 'We have your details and will be in touch soon.'
							: "We'll reach out to you before JobBeta for Career Centres launches."}
					</p>
					<a href={links.learnMore} class="btn btn-primary mt-8">Learn More About JobBeta</a>
				</div>
			{:else}
				<form class="flex flex-col gap-5" onsubmit={handleSubmit}>
					{#if error}
						<p class="rounded-xl border border-red-200 bg-red-50 p-4 font-geist text-sm text-red-700" role="alert">
							{error}
						</p>
					{/if}
					<div class="flex flex-col gap-2">
						<label for="cc-institution" class={label}>Institution name <span class="text-red-500">*</span></label>
						<input id="cc-institution" bind:value={institution} required maxlength="160" autocomplete="organization" placeholder="e.g. University of Lagos" class={field} />
					</div>
					<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
						<div class="flex flex-col gap-2">
							<label for="cc-name" class={label}>Contact name <span class="text-red-500">*</span></label>
							<input id="cc-name" bind:value={contactName} required maxlength="120" autocomplete="name" placeholder="Your full name" class={field} />
						</div>
						<div class="flex flex-col gap-2">
							<label for="cc-email" class={label}>Work email <span class="text-red-500">*</span></label>
							<input id="cc-email" type="email" bind:value={email} required autocomplete="email" placeholder="you@institution.edu.ng" class={field} />
						</div>
					</div>
					<div class="flex flex-col gap-2">
						<label for="cc-type" class={label}>Institution type <span class="text-red-500">*</span></label>
						<div class="relative">
							<select id="cc-type" bind:value={institutionType} required class="{field.replace('text-secondary', institutionType ? 'text-secondary' : 'text-[#98a2b3]')} cursor-pointer appearance-none pr-12">
								<option value="" disabled>Select institution type</option>
								{#each institutionTypes as type (type)}
									<option value={type} class="text-secondary">{type}</option>
								{/each}
							</select>
							<Icon name="chevron-down" size={18} class="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-text-secondary" />
						</div>
					</div>
					<button type="submit" disabled={loading} class="btn btn-primary mt-1 h-14">
						{loading ? 'Submitting…' : 'Register Your Interest'}
					</button>
				</form>
			{/if}
		</div>
	</div>
</section>
