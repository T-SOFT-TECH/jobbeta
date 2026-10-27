<script lang="ts">
	import Animate from '$lib/components/Animate.svelte';

	const resources = [
		{
			title: 'Stay Relevant with Student Trends',
			description:
				'Insights on what students and employers care about, and how to stay ahead of early-career trends.',
			href: '/career-tips',
			image: '/images/career-centers/frame-20856640660.png'
		},
		{
			title: 'Grow Your Network',
			description:
				'Practical advice for building connections, finding mentors and creating momentum in your early career.',
			href: '/career-tips',
			image: '/images/career-centers/frame-20856640720.webp'
		},
		{
			title: 'Create Meaningful Career Experience',
			description:
				"What's happening across industries, and what it means for students and new graduates.",
			href: '/blog',
			image: '/images/career-centers/frame-20856640721.webp'
		},
		{
			title: 'Tell Your Story to Others',
			description: 'How to present your projects, skills and journey so employers take notice.',
			href: '/blog',
			image: '/images/career-centers/frame-20856640722.webp'
		}
	];
</script>

<svelte:head>
	<title>Resources - JobBeta</title>
	<meta
		name="description"
		content="Guides, templates and insights to help students, graduates and employers get the most out of JobBeta."
	/>
</svelte:head>

<section class="relative w-full overflow-hidden bg-white py-12 md:py-16">
	<div class="page-container text-center">
		<Animate variant="bottom" duration={0.7}>
			<span
				class="inline-flex items-center rounded-full border border-[#7502ff]/30 bg-[#7502ff]/5 px-4 py-2 font-geist text-sm font-medium text-[#7502ff]"
			>
				Resources
			</span>
			<h1
				class="mx-auto mt-5 max-w-3xl font-geist text-3xl leading-tight font-bold text-[#110d21] sm:text-4xl md:text-5xl"
			>
				Everything you need to move your career forward
			</h1>
			<p
				class="mx-auto mt-4 max-w-2xl font-geist text-base leading-relaxed text-[#62717a] sm:text-lg"
			>
				Free guides, templates and insights for students, graduates, employers and career centres.
			</p>
		</Animate>
	</div>
</section>

<section class="w-full bg-white pb-16 md:pb-24">
	<div class="page-container">
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each resources as resource (resource.title)}
				<a
					href={resource.href}
					class="group flex flex-col overflow-hidden rounded-[20px] border border-[#eaecf0] bg-white transition-shadow duration-300 hover:shadow-xl"
				>
					<div class="h-[200px] overflow-hidden">
						<img
							src={resource.image}
							alt=""
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							loading="lazy"
						/>
					</div>
					<div class="flex flex-1 flex-col p-6">
						<h2 class="font-geist text-lg font-bold text-[#110d21]">{resource.title}</h2>
						<p class="mt-2 flex-1 font-geist text-sm leading-relaxed text-[#62717a]">
							{resource.description}
						</p>
						<span
							class="mt-5 inline-flex items-center gap-2 font-geist text-sm font-bold text-[#7502ff]"
						>
							Explore
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								class="transition-transform duration-300 group-hover:translate-x-1"
							>
								<path
									d="M5 12H19M19 12L12 5M19 12L12 19"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="w-full bg-white pb-16 md:pb-24">
	<div class="page-container">
		<div
			class="flex flex-col items-center gap-6 rounded-[24px] bg-gradient-to-r from-[#7502ff] to-[#3296F8] px-6 py-10 text-center md:flex-row md:justify-between md:px-12 md:text-left"
		>
			<div>
				<h2 class="font-geist text-2xl font-bold text-white md:text-3xl">
					Want these resources and more?
				</h2>
				<p class="mt-2 font-geist text-base text-white/85">
					Join the waitlist to be first in line when JobBeta launches.
				</p>
			</div>
			<a
				href="/waitlist"
				class="flex flex-shrink-0 items-center justify-center rounded-[20px] bg-white px-8 py-4 font-geist text-base font-bold text-[#7502ff] transition-colors hover:bg-gray-100"
			>
				Join the Waitlist
			</a>
		</div>
	</div>
</section>
