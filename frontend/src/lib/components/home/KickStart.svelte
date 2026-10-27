<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import EmailCapture from '$lib/components/ui/EmailCapture.svelte';
	import { links } from '$lib/config/site';

	// Sample notifications (fictional people and companies)
	const notifications = [
		{ name: 'Jane Osteen', detail: 'Fresh graduate', match: 'Internship at Northfield Labs', avatar: '/images/Ellipse177.png' },
		{ name: 'Abraham Jude', detail: 'Year 3 student', match: 'Graduate role at Bluepine Finance', avatar: '/images/Ellipse178.png' },
		{ name: 'Rachel Obaloluwa', detail: 'Year 1 student', match: 'Internship at Arcline Studio', avatar: '/images/Ellipse179.png' }
	];
</script>

<section class="section bg-neutral-light">
	<div class="page-container">
		<div class="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
			<h2 class="title-section text-secondary">Kick-start your career!</h2>
			<p class="lead text-text-secondary">
				Stand out to employers, get curated opportunities and showcase your skills on a platform
				built to help you get noticed and hired.
			</p>
			<EmailCapture role="student" tone="light" buttonLabel="Sign Up" class="mt-2 max-w-lg" />
		</div>

		<div class="snap-row mt-8 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
			<!-- How the network fits together -->
			<article class="lift flex flex-col gap-6 rounded-3xl bg-white p-6 md:p-7">
				<div class="flex items-center justify-between px-2 py-4" aria-hidden="true">
					<img src="/images/Ellipse175.png" alt="" class="h-12 w-12 rounded-full" />
					<span class="h-px flex-1 border-t-2 border-dashed border-primary/30"></span>
					<span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
						<Icon name="users" size={26} />
					</span>
					<span class="h-px flex-1 border-t-2 border-dashed border-primary/30"></span>
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white">
						<Icon name="building" size={22} />
					</span>
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="font-geist text-lg font-semibold text-secondary">One place for your career</h3>
					<p class="font-geist text-base leading-relaxed text-text-secondary">
						JobBeta brings students, employers and career centres together, with jobs, internships
						and industry insight in one platform.
					</p>
				</div>
				<a href={links.learnMore} class="mt-auto inline-flex items-center gap-2 font-geist font-semibold text-primary">
					Learn more about JobBeta <Icon name="arrow-right" size={18} />
				</a>
			</article>

			<!-- Recommendations -->
			<article class="lift flex flex-col gap-3 rounded-3xl bg-white p-6 md:p-7">
				<h3 class="font-geist text-lg font-semibold text-secondary">Recommendations, as they land</h3>
				<ul class="flex flex-col gap-3">
					{#each notifications as n (n.name)}
						<li class="flex gap-3 rounded-2xl bg-neutral-light/70 p-3">
							<img src={n.avatar} alt="" class="h-10 w-10 shrink-0 rounded-full" />
							<div class="min-w-0 font-geist">
								<p class="text-sm font-semibold text-secondary">
									{n.name} <span class="font-normal text-text-secondary">· {n.detail}</span>
								</p>
								<p class="text-sm text-text-secondary">
									New match: <span class="font-medium text-secondary">{n.match}</span>
								</p>
							</div>
							<Icon name="bell" size={18} class="ml-auto text-primary" />
						</li>
					{/each}
				</ul>
			</article>

			<!-- Fit over volume -->
			<article class="lift flex flex-col overflow-hidden rounded-3xl bg-white md:col-span-2 lg:col-span-1">
				<img
					src="/images/Frame 2085663329.png"
					alt="A smiling graduate in a job interview"
					loading="lazy"
					class="h-48 w-full object-cover lg:h-52"
				/>
				<div class="flex flex-col gap-2 p-6 md:p-7">
					<h3 class="font-geist text-lg font-semibold text-secondary">Matches built around you</h3>
					<p class="font-geist text-base leading-relaxed text-text-secondary">
						We connect you with the right employers by understanding your strengths, aspirations and
						career goals, so it's a fit that lasts.
					</p>
				</div>
			</article>
		</div>
	</div>
</section>
