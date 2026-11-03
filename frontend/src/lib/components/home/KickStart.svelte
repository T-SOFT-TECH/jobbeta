<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import EmailCapture from '$lib/components/ui/EmailCapture.svelte';
	import { links } from '$lib/config/site';

	// Sample match notifications: job titles and employers, as a student would
	// see them (client review v2). Fictional companies.
	const notifications = [
		{ role: 'Software Engineering Intern', company: 'Northfield Labs', detail: 'Lagos', color: '#7502ff' },
		{ role: 'Graduate Analyst', company: 'Bluepine Finance', detail: 'Abuja', color: '#3296f8' },
		{ role: 'Junior Product Designer', company: 'Arcline Studio', detail: 'Remote', color: '#e11d48' }
	];

	const initials = (company: string) =>
		company
			.split(' ')
			.slice(0, 2)
			.map((w) => w[0])
			.join('');
</script>

<section class="section bg-neutral-light">
	<div class="page-container">
		<div class="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
			<h2 class="title-section text-secondary">Kick-start your career!</h2>
			<p class="lead text-text-secondary">
				Showcase your skills, discover relevant opportunities, stand out and connect with employers
				who see your potential.
			</p>
			<EmailCapture
				role="talent"
				source="home-kickstart"
				tone="light"
				buttonLabel="Join Waitlist"
				placeholder="Enter your email to join the waitlist"
				class="mt-2 max-w-lg"
			/>
		</div>

		<div class="snap-row mt-8 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
			<!-- How the network fits together -->
			<article class="lift flex flex-col gap-6 rounded-3xl bg-white p-6 md:p-7">
				<div class="flex items-center justify-between px-2 py-4" aria-hidden="true">
					<img loading="lazy" decoding="async" src="/images/Ellipse175.webp" alt="" class="h-12 w-12 rounded-full" />
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
						Discover opportunities, connect with employers, and access career resources in one place.
					</p>
				</div>
				<a href={links.learnMore} class="mt-auto inline-flex items-center gap-2 font-geist font-semibold text-primary">
					Learn more about JobBeta <Icon name="arrow-right" size={18} />
				</a>
			</article>

			<!-- Recommendations -->
			<article class="lift flex flex-col gap-3 rounded-3xl bg-white p-6 md:p-7">
				<h3 class="font-geist text-lg font-semibold text-secondary">Matches as they happen</h3>
				<p class="font-geist text-base leading-relaxed text-text-secondary">
					Get notified when new opportunities match your skills and interests.
				</p>
				<ul class="flex flex-col gap-3" aria-label="Example match notifications">
					{#each notifications as n (n.role)}
						<li class="flex gap-3 rounded-2xl bg-neutral-light/70 p-3">
							<span
								class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-geist text-sm font-bold text-white"
								style="background-color: {n.color}"
								aria-hidden="true">{initials(n.company)}</span
							>
							<div class="min-w-0 font-geist">
								<p class="text-sm font-semibold text-secondary">{n.role}</p>
								<p class="text-sm text-text-secondary">{n.company} · {n.detail}</p>
							</div>
							<Icon name="bell" size={18} class="ml-auto shrink-0 text-primary" />
						</li>
					{/each}
				</ul>
			</article>

			<!-- Fit over volume -->
			<article class="lift flex flex-col overflow-hidden rounded-3xl bg-white md:col-span-2 lg:col-span-1">
				<img
					src="/images/Frame 2085663329.webp"
					alt="A smiling graduate in a job interview"
					loading="lazy"
					class="h-48 w-full object-cover lg:h-52"
				/>
				<div class="flex flex-col gap-2 p-6 md:p-7">
					<h3 class="font-geist text-lg font-semibold text-secondary">Matches built around you</h3>
					<p class="font-geist text-base leading-relaxed text-text-secondary">
						Find employers who value your skills, interests, and potential.
					</p>
				</div>
			</article>
		</div>
	</div>
</section>
