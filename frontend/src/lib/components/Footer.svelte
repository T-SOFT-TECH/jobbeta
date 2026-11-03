<script lang="ts">
	import Logo from '$lib/components/ui/Logo.svelte';
	import EmailCapture from '$lib/components/ui/EmailCapture.svelte';
	import { links, socials } from '$lib/config/site';

	let { class: className = '' } = $props();

	const year = new Date().getFullYear();

	// Client review v2 (Footer): Join Us → Join Waitlist, Help center → FAQs,
	// Products → How It Works; only pages that are live. Career Centres live
	// here (not in the header) as "Universities & Institutions".
	const columns = [
		{
			title: 'Company',
			links: [
				{ label: 'About us', href: '/about' },
				{ label: 'Why JobBeta', href: '/why-jobbeta' },
				{ label: 'Join Waitlist', href: links.waitlist },
				{ label: 'Contact us', href: links.contact },
				{ label: 'Privacy Policy', href: links.privacy }
			]
		},
		{
			title: 'Students',
			links: [
				{ label: 'How it works', href: links.howItWorks },
				{ label: 'Career Tips', href: links.careerTips },
				{ label: 'FAQs', href: links.studentFaqs }
			]
		},
		{
			title: 'Employers',
			links: [
				{ label: 'Products & Solutions', href: links.productsSolutions },
				{ label: 'How It Works', href: `${links.howItWorks}#employer-steps` },
				{ label: 'Request a demo', href: links.demo }
			]
		},
		{
			title: 'Universities & Institutions',
			links: [
				{ label: 'JobBeta for Career Centres', href: links.institutions },
				{ label: 'Register Your Interest', href: links.registerInterest }
			]
		}
	];
</script>

<footer class="relative w-full overflow-hidden bg-[#1a1625] {className}">
	<div class="page-container relative pt-14 pb-16 md:pt-20 md:pb-24 xl:pb-44">
		<!-- Top: pitch + newsletter -->
		<div class="mb-12 grid gap-8 md:mb-16 lg:grid-cols-2 lg:items-end lg:gap-16">
			<div class="flex flex-col gap-5">
				<a href="/" class="w-fit" aria-label="JobBeta home">
					<Logo tone="light" class="h-7 w-auto" />
				</a>
				<div class="flex max-w-md flex-col gap-2 text-white">
					<h2 class="font-geist text-2xl leading-tight font-semibold md:text-3xl">
						Your next opportunity starts here.
					</h2>
					<p class="font-geist text-base text-white/70">
						Get the latest from JobBeta, career tips, and early access updates.
					</p>
				</div>
			</div>

			<EmailCapture
				source="footer"
				buttonLabel="Join Waitlist"
				class="max-w-lg lg:justify-self-end"
			/>
		</div>

		<!-- Link columns -->
		<nav class="relative grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12" aria-label="Footer">
			{#each columns as column (column.title)}
				<div class="flex flex-col gap-4">
					<h3 class="font-geist text-lg font-semibold text-white">{column.title}</h3>
					<ul class="flex flex-col gap-3 font-geist text-base text-white/70">
						{#each column.links as link (link.label)}
							<li><a href={link.href} class="transition-colors hover:text-white">{link.label}</a></li>
						{/each}
					</ul>
				</div>
			{/each}
		</nav>
	</div>

	<!-- Illustration (desktop only) -->
	<div class="pointer-events-none absolute right-0 bottom-[7rem] hidden h-[260px] w-[260px] xl:block">
		<img loading="lazy" decoding="async" src="/icons/Graphic_elements-footer.svg" alt="" class="h-full w-full object-contain" />
	</div>

	<!-- Bottom bar -->
	<div class="relative">
		<img loading="lazy" decoding="async" src="/icons/Footer-Vector.svg" alt="" class="w-full" />
		<div class="bg-primary py-5">
			<div
				class="page-container flex flex-col items-center justify-between gap-3 font-geist text-sm text-white md:flex-row"
			>
				<p>© {year} JobBeta. All rights reserved.</p>
				<ul class="flex gap-6">
					{#each socials as social (social.label)}
						<li>
							<a href={social.href} target="_blank" rel="noopener noreferrer" class="hover:underline">
								{social.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</footer>
