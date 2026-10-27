<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import Animate from '$lib/components/Animate.svelte';
	import Icon from '$lib/components/ui/Icon.svelte';
	import { page } from '$app/state';

	// CTAs like "Join as Employer" link here with ?role= to preselect the audience
	const requestedRole = page.url.searchParams.get('role');

	let name = $state('');
	let email = $state('');
	let role = $state(
		requestedRole === 'employer' || requestedRole === 'career-center' ? requestedRole : 'student'
	);
	let loading = $state(false);
	let submitted = $state(false);
	let error = $state('');

	const roles = [
		{ value: 'student', label: 'Student / New Graduate' },
		{ value: 'employer', label: 'Employer' },
		{ value: 'career-center', label: 'Career Centre' }
	];

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!email.trim()) {
			error = 'Please enter your email address.';
			return;
		}
		loading = true;
		error = '';
		try {
			await pb.collection('waitlist').create({
				name: name.trim(),
				email: email.trim(),
				role
			});
			submitted = true;
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
		content="Join the JobBeta waitlist to be the first to access verified internships, entry-level jobs and career tools."
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
				Be the first to access verified internships, entry-level jobs and career tools built for
				students, new graduates, employers and career centres.
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
				{#if submitted}
					<div class="flex flex-col items-center py-8 text-center">
						<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
							<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
								<path
									d="M20 6L9 17L4 12"
									stroke="#16a34a"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
						<h2 class="font-geist text-2xl font-bold text-[#110d21]">You're on the list!</h2>
						<p class="mt-3 max-w-sm font-geist text-base text-[#62717a]">
							Thanks for joining. We'll email you as soon as JobBeta goes live with early access
							details.
						</p>
						<div class="mt-8 flex flex-col gap-3 sm:flex-row">
							<a
								href="/jobs"
								class="flex items-center justify-center rounded-[20px] bg-[#7502ff] px-6 py-3.5 font-geist text-base font-bold text-white transition-colors hover:bg-[#6502dd]"
							>
								Explore Jobs
							</a>
							<a
								href="/career-tips"
								class="flex items-center justify-center rounded-[20px] border border-[#110d21] px-6 py-3.5 font-geist text-base font-bold text-[#110d21] transition-colors hover:bg-gray-50"
							>
								Read Career Tips
							</a>
						</div>
					</div>
				{:else}
					<h2 class="font-geist text-2xl font-bold text-[#110d21] md:text-[28px]">
						Reserve your spot
					</h2>
					<p class="mt-2 font-geist text-base text-[#62717a]">
						It takes less than a minute — no spam, just launch updates.
					</p>

					{#if error}
						<div
							class="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 font-geist text-sm text-red-700"
						>
							{error}
						</div>
					{/if}

					<form class="mt-8 flex flex-col gap-6" onsubmit={handleSubmit}>
						<div class="flex flex-col gap-2">
							<label for="waitlist-name" class="font-geist text-sm font-semibold text-[#2a2c2c]">
								Full Name
							</label>
							<input
								id="waitlist-name"
								type="text"
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
								bind:value={email}
								placeholder="Enter your email address"
								class="h-14 rounded-2xl border border-[#d0d5dd] px-4 font-geist text-base text-[#110d21] placeholder:text-[#98a2b3] focus:border-[#7502ff] focus:ring-2 focus:ring-[#7502ff]/20 focus:outline-none"
							/>
						</div>

						<div class="flex flex-col gap-2">
							<span class="font-geist text-sm font-semibold text-[#2a2c2c]"> I'm joining as </span>
							<div class="grid gap-2 sm:grid-cols-3">
								{#each roles as item (item.value)}
									<button
										type="button"
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
						</div>

						<button
							type="submit"
							disabled={loading}
							class="mt-2 flex h-14 items-center justify-center rounded-[20px] bg-[#7502ff] font-geist text-base font-bold text-white transition-colors hover:bg-[#6502dd] disabled:cursor-not-allowed disabled:opacity-60"
						>
							{loading ? 'Joining...' : 'Join the Waitlist'}
						</button>
					</form>
				{/if}
			</div>

			<!-- Benefits -->
			<div class="flex flex-col gap-6 lg:pt-6">
				<h2 class="font-geist text-2xl font-bold text-[#110d21] md:text-[28px]">
					Why join the waitlist?
				</h2>
				<ul class="flex flex-col gap-5">
					<li class="flex items-start gap-4">
						<span
							class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#7502ff]/10"
						>
							<Icon name="shield-check" size={20} class="text-primary" />
						</span>
						<div>
							<h3 class="font-geist text-base font-bold text-[#110d21]">
								Verified opportunities only
							</h3>
							<p class="mt-1 font-geist text-sm leading-relaxed text-[#62717a]">
								Every listing comes from a verified employer — no scams, no ghost jobs.
							</p>
						</div>
					</li>
					<li class="flex items-start gap-4">
						<span
							class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#7502ff]/10"
						>
							<Icon name="sparkles" size={20} class="text-primary" />
						</span>
						<div>
							<h3 class="font-geist text-base font-bold text-[#110d21]">Smart job matching</h3>
							<p class="mt-1 font-geist text-sm leading-relaxed text-[#62717a]">
								Get matched to internships and entry-level roles that fit your skills and goals.
							</p>
						</div>
					</li>
					<li class="flex items-start gap-4">
						<span
							class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#7502ff]/10"
						>
							<img src="/icons/Business center.svg" alt="" class="h-5 w-5" />
						</span>
						<div>
							<h3 class="font-geist text-base font-bold text-[#110d21]">
								Career tools &amp; insights
							</h3>
							<p class="mt-1 font-geist text-sm leading-relaxed text-[#62717a]">
								Resume builders, interview prep and industry insights to make you Day-1 ready.
							</p>
						</div>
					</li>
					<li class="flex items-start gap-4">
						<span
							class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#7502ff]/10"
						>
							<img src="/icons/star-4.svg" alt="" class="h-5 w-5" />
						</span>
						<div>
							<h3 class="font-geist text-base font-bold text-[#110d21]">Early access</h3>
							<p class="mt-1 font-geist text-sm leading-relaxed text-[#62717a]">
								Be first in line when we launch — and help shape what we build next.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
