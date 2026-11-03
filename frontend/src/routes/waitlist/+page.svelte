<script lang="ts">
	import Animate from '$lib/components/Animate.svelte';
	import Icon from '$lib/components/ui/Icon.svelte';
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import { links } from '$lib/config/site';
	import { joinWaitlist, roleFromParam, type WaitlistRole } from '$lib/waitlist';

	type IconName = 'target' | 'sparkles' | 'bell' | 'users' | 'chart' | 'building' | 'mail';

	// CTAs link here with ?role= to preselect the audience; the footer's email
	// field forwards ?email= (and ?source=) so the visitor doesn't type it twice.
	const params = page.url.searchParams;

	let name = $state('');
	let email = $state(params.get('email') ?? '');
	let role = $state<WaitlistRole>(roleFromParam(params.get('role')) ?? 'talent');
	let source = $state(params.get('source') || 'waitlist-page');
	let loading = $state(false);
	let result = $state<'joined' | 'already' | null>(null);
	let error = $state('');

	// SvelteKit reuses this component when navigating /waitlist → /waitlist
	// (e.g. the footer form on this page), so re-read the query each time.
	afterNavigate(({ from }) => {
		if (!from) return; // first load: already initialised above
		const next = page.url.searchParams;
		email = next.get('email') ?? email;
		role = roleFromParam(next.get('role')) ?? role;
		source = next.get('source') || 'waitlist-page';
		result = null;
		error = '';
	});

	const roles: { value: WaitlistRole; label: string }[] = [
		{ value: 'talent', label: 'Student / New Graduate' },
		{ value: 'employer', label: 'Employer' },
		{ value: 'career_centre', label: 'Career Centre (Coming Later)' }
	];

	// Client copy (review v2, Login / Join Waitlist): benefits follow the audience.
	const benefits: Record<WaitlistRole, { icon: IconName; title: string; text: string }[]> = {
		talent: [
			{
				icon: 'target',
				title: 'Discover opportunities',
				text: 'Explore internships and entry-level roles that match your skills and interests.'
			},
			{
				icon: 'sparkles',
				title: 'Smarter matching',
				text: 'Connect with employers based on more than just your CV.'
			},
			{
				icon: 'bell',
				title: 'Early access',
				text: 'Be among the first to experience JobBeta when we launch.'
			}
		],
		employer: [
			{
				icon: 'users',
				title: 'Discover emerging talent',
				text: 'Connect with students and graduates suited to your hiring needs.'
			},
			{
				icon: 'sparkles',
				title: 'Better candidate matching',
				text: 'Identify promising candidates based on skills and potential.'
			},
			{
				icon: 'bell',
				title: 'Early access',
				text: 'Get notified when employer onboarding opens.'
			}
		],
		career_centre: [
			{
				icon: 'building',
				title: 'Future partnerships',
				text: "Explore how JobBeta could support your institution's career services."
			},
			{
				icon: 'users',
				title: 'Employer connections',
				text: 'Help students discover relevant career opportunities.'
			},
			{
				icon: 'mail',
				title: 'Stay informed',
				text: 'Receive updates as we develop our institutional offering.'
			}
		]
	};

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!name.trim() || !email.trim()) {
			error = 'Please enter your full name and email address.';
			return;
		}
		loading = true;
		error = '';
		try {
			result = await joinWaitlist({
				full_name: name,
				email,
				role,
				source
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

<svelte:head>
	<title>Join the Waitlist - JobBeta</title>
	<meta
		name="description"
		content="Be among the first to discover a smarter way to connect students and graduates with employers across Nigeria."
	/>
</svelte:head>

<!-- Hero -->
<section class="relative w-full overflow-hidden bg-[#7502ff]">
	<div
		class="pointer-events-none absolute inset-0 opacity-20"
		style="background-image: url('/images/kick-start-your-career-bg.svg'); background-size: cover; background-position: center;"
	></div>
	<div class="page-container relative py-16 text-center md:py-24">
		<Animate variant="bottom" duration={0.7}>
			<span
				class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 font-geist text-sm font-medium text-white"
			>
				<span class="h-2 w-2 rounded-full bg-green-400"></span>
				Launching soon
			</span>
			<h1
				class="mx-auto mt-6 max-w-3xl font-geist text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl"
			>
				Join the JobBeta Waitlist
			</h1>
			<p
				class="mx-auto mt-4 max-w-2xl font-geist text-base leading-relaxed text-white/85 sm:text-lg"
			>
				Be among the first to discover a smarter way to connect students and graduates with
				employers across Nigeria.
			</p>
		</Animate>
	</div>
</section>

<!-- Form + Benefits -->
<section class="w-full bg-white py-12 md:py-20">
	<div class="page-container">
		<div class="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
			<!-- Form Card -->
			<div class="rounded-[24px] border border-[#eaecf0] bg-white p-6 shadow-lg md:p-10">
				{#if result}
					<div class="flex flex-col items-center py-8 text-center">
						<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
							<Icon name="check" size={32} class="text-green-600" />
						</div>
						<h2 class="font-geist text-2xl font-bold text-[#110d21]">
							{result === 'already' ? "You're already on the list!" : "You're on the list!"}
						</h2>
						<p class="mt-3 max-w-sm font-geist text-base text-[#62717a]">
							{result === 'already'
								? "This email is already on the JobBeta waitlist. We'll email you as soon as early access opens."
								: "Thanks for joining. We'll email you as soon as JobBeta goes live with early access details."}
						</p>
						<div class="mt-8 flex flex-col gap-3 sm:flex-row">
							<a href={links.learnMore} class="btn btn-primary">Learn More About JobBeta</a>
							<a href="/career-tips" class="btn btn-outline">Read Career Tips</a>
						</div>
					</div>
				{:else}
					<h2 class="font-geist text-2xl font-bold text-[#110d21] md:text-[28px]">
						Reserve your spot
					</h2>
					<p class="mt-2 font-geist text-base text-[#62717a]">
						It takes less than a minute. No spam, just launch updates.
					</p>

					{#if error}
						<div
							class="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 font-geist text-sm text-red-700"
							role="alert"
						>
							{error}
						</div>
					{/if}

					<form class="mt-8 flex flex-col gap-6" onsubmit={handleSubmit}>
						<div class="flex flex-col gap-2">
							<label for="waitlist-name" class="font-geist text-sm font-semibold text-[#2a2c2c]">
								Full Name <span class="text-red-500">*</span>
							</label>
							<input
								id="waitlist-name"
								type="text"
								required
								minlength="2"
								maxlength="120"
								autocomplete="name"
								bind:value={name}
								placeholder="Enter your full name"
								class="h-14 rounded-2xl border border-[#d0d5dd] px-4 font-geist text-base text-[#110d21] placeholder:text-[#98a2b3] focus:border-[#7502ff] focus:ring-2 focus:ring-[#7502ff]/20 focus:outline-none"
							/>
						</div>

						<div class="flex flex-col gap-2">
							<label for="waitlist-email" class="font-geist text-sm font-semibold text-[#2a2c2c]">
								Email Address <span class="text-red-500">*</span>
							</label>
							<input
								id="waitlist-email"
								type="email"
								required
								autocomplete="email"
								bind:value={email}
								placeholder="Enter your email address"
								class="h-14 rounded-2xl border border-[#d0d5dd] px-4 font-geist text-base text-[#110d21] placeholder:text-[#98a2b3] focus:border-[#7502ff] focus:ring-2 focus:ring-[#7502ff]/20 focus:outline-none"
							/>
						</div>

						<fieldset class="flex flex-col gap-2">
							<legend class="mb-2 font-geist text-sm font-semibold text-[#2a2c2c]">
								I'm joining as
							</legend>
							<div class="grid grid-cols-1 gap-2 sm:grid-cols-3">
								{#each roles as item (item.value)}
									<button
										type="button"
										aria-pressed={role === item.value}
										onclick={() => (role = item.value)}
										class="rounded-2xl border px-3 py-3 font-geist text-sm font-medium transition-colors {role ===
										item.value
											? 'border-[#7502ff] bg-[#7502ff]/5 text-[#7502ff]'
											: 'border-[#d0d5dd] text-[#62717a] hover:border-[#7502ff]/40'}"
									>
										{item.label}
									</button>
								{/each}
							</div>
						</fieldset>

						<button type="submit" disabled={loading} class="btn btn-primary mt-2 h-14">
							{loading ? 'Joining…' : 'Join the Waitlist'}
						</button>
					</form>
				{/if}
			</div>

			<!-- Benefits: follow the selected audience -->
			<div class="flex flex-col gap-6 lg:pt-6">
				<h2 class="font-geist text-2xl font-bold text-[#110d21] md:text-[28px]">
					Why join the waitlist?
				</h2>
				{#key role}
					<ul class="flex flex-col gap-5" aria-live="polite">
						{#each benefits[role] as benefit (benefit.title)}
							<li class="flex items-start gap-4">
								<span
									class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#7502ff]/10"
								>
									<Icon name={benefit.icon} size={20} class="text-primary" />
								</span>
								<div>
									<h3 class="font-geist text-base font-bold text-[#110d21]">{benefit.title}</h3>
									<p class="mt-1 font-geist text-sm leading-relaxed text-[#62717a]">
										{benefit.text}
									</p>
								</div>
							</li>
						{/each}
					</ul>
				{/key}
			</div>
		</div>
	</div>
</section>
