<script lang="ts">
	import { pb } from '$lib/pocketbase';

	let email = $state('');
	let subscribing = $state(false);
	let status = $state<'idle' | 'success' | 'error'>('idle');

	async function subscribe(e: SubmitEvent) {
		e.preventDefault();
		if (!email.trim()) return;
		subscribing = true;
		status = 'idle';
		try {
			await pb.collection('waitlist').create({ email: email.trim(), role: 'newsletter' });
			status = 'success';
			email = '';
		} catch (err) {
			console.error(err);
			status = 'error';
		} finally {
			subscribing = false;
		}
	}
</script>

<svelte:head>
	<title>Staying relevant in a constantly changing job market - JobBeta Blog</title>
	<meta name="description" content="Expert career advice and tips - JobBeta Blog" />
</svelte:head>

<div class="w-full bg-white">
	<!-- Main Article Section -->
	<div class="mx-auto w-full max-w-[1176px] px-6 py-16">
		<div class="flex flex-col gap-12">
			<!-- Breadcrumb -->
			<a
				href="/blog"
				class="text-left font-geist text-xl leading-[30px] font-bold text-[#2a2c2c]"
				style="letter-spacing: -0.005em"
			>
				← Go back
			</a>

			<!-- Article Header -->
			<div class="flex flex-col gap-8">
				<div class="flex flex-row flex-wrap gap-[22px] uppercase">
					<span
						class="font-geist text-base leading-6 text-[rgba(42,44,44,0.70)]"
						style="letter-spacing: -0.005em">Career tips & Employment .</span
					>
					<span
						class="font-geist text-base leading-6 text-[rgba(42,44,44,0.40)]"
						style="letter-spacing: -0.005em">June 12, 2021</span
					>
				</div>
				<h1
					class="max-w-[1060px] font-geist text-[40px] leading-9 font-bold text-black"
					style="letter-spacing: -0.005em"
				>
					Staying relevant in a constantly changing job market
				</h1>
				<p
					class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.70)]"
					style="letter-spacing: -0.005em"
				>
					In a highly experienced Society to oversee and implement security measures across all
					phases of our project life-cycle.
				</p>
			</div>

			<!-- Featured Image -->
			<img
				class="h-[606px] w-full rounded-[20px] object-cover"
				src="/icons/blog-details/frame-20856641980.webp"
				alt=""
			/>

			<!-- Author Info -->
			<div class="flex flex-col gap-[25px]">
				<div class="flex flex-row gap-3">
					<img
						class="border-neutral-primary-grey h-[50px] w-[50px] rounded-[50px] border-[3px] border-solid object-cover"
						src="/icons/blog-details/frame-20856641871.png"
						alt=""
					/>
					<div class="flex flex-col gap-2">
						<div
							class="font-geist text-2xl leading-9 font-bold text-[#2a2c2c]"
							style="letter-spacing: -0.005em"
						>
							James Anthony
						</div>
						<div
							class="font-geist text-base leading-6 text-[#62717a]"
							style="letter-spacing: -0.005em"
						>
							Researcher, AI Expert
						</div>
					</div>
				</div>

				<!-- Article Content -->
				<div class="flex flex-col gap-5">
					<p
						class="font-geist text-2xl leading-9 text-[rgba(42,44,44,0.70)]"
						style="letter-spacing: -0.005em"
					>
						In a highly experienced Society to oversee and implement security measures across all
						phases of our project life-cycle. In a highly experienced Society to oversee and
						implement security measures across all phases of our project life-cycle. In a highly
						experienced Society to oversee and implement security measures across all phases of our
						project life-cycle.In a highly experienced Society to oversee and implement security
						measures across all phases of our project life-cycle.In a highly experienced Society to
						oversee and implement security measures across all phases of our project life-cycle.In a
						highly experienced Society to oversee and implement security measures across all phases
						of our project life-cycle.In a highly experienced Society to oversee and implement
						security measures across all phases of our project life-cycle.In a highly experienced
						Society to oversee and implement security measures across all phases of our project
						life-cycle.In a highly experienced Society to oversee and implement security measures
						across all phases of our project life-cycle.In a highly experienced Society to oversee
						and implement security measures across all phases of our project life-cycle.In a highly
						experienced Society to oversee and implement security measures across all phases of our
						project life-cycle.In a highly experienced Society to oversee and implement security
						measures across all phases of our project life-cycle.In a highly experienced Society to
						oversee and implement security measures across all phases of our project life-cycle.In a
						highly experienced Society to oversee and implement security measures across all phases
						of our project life-cycle.In a highly experienced Society to oversee and implement
						security measures across all phases of our project life-cycle.In a highly experienced
						Society to oversee and implement security measures across all phases of our project
						life-cycle.
					</p>
					<p
						class="font-geist text-2xl leading-9 text-[rgba(42,44,44,0.70)]"
						style="letter-spacing: -0.005em"
					>
						In a highly experienced Society to oversee and implement security measures across all
						phases of our project life-cycle. In a highly experienced Society to oversee and
						implement security measures across all phases of our project life-cycle. In a highly
						experienced Society to oversee and implement security measures across all phases of our
						project life-cycle.In a highly experienced Society to oversee and implement security
						measures across all phases of our project life-cycle.In a highly experienced Society to
						oversee and implement security measures across all phases of our project life-cycle.In a
						highly experienced Society to oversee and implement security measures across all phases
						of our project life-cycle.In a highly experienced Society to oversee and implement
						security measures across all phases of our project life-cycle.In a highly experienced
						Society to oversee and implement security measures across all phases of our project
						life-cycle.In a highly experienced Society to oversee and implement security measures
						across all phases of our project life-cycle.In a highly experienced Society to oversee
						and implement security measures across all phases of our project life-cycle.In a highly
						experienced Society to oversee and implement security measures across all phases of our
						project life-cycle.In a highly experienced Society to oversee and implement security
						measures across all phases of our project life-cycle.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Other Related Blog Section -->
	<div class="w-full bg-[#f4f7fd] py-16">
		<div class="page-container w-full">
			<div class="flex flex-col gap-12">
				<div class="flex flex-col gap-5 text-center">
					<h2
						class="font-geist text-[40px] leading-[60px] font-bold text-black"
						style="letter-spacing: -0.005em"
					>
						Other Related Blog
					</h2>
					<p
						class="font-geist text-xl leading-[30px] text-[#62717a]"
						style="letter-spacing: -0.005em"
					>
						Get Updates and timely resources upload suitable for you
					</p>
				</div>

				<div class="flex flex-col gap-[34px] lg:flex-row">
					<!-- Content -->
					<div class="flex flex-col gap-10 lg:w-1/2">
						<div class="flex flex-row flex-wrap gap-[22px] uppercase">
							<span
								class="font-geist text-base leading-6 text-[rgba(42,44,44,0.70)]"
								style="letter-spacing: -0.005em">Education .</span
							>
							<span
								class="font-geist text-base leading-6 text-[rgba(42,44,44,0.40)]"
								style="letter-spacing: -0.005em">June 12, 2021</span
							>
						</div>
						<h3
							class="max-w-[580px] font-geist text-[32px] leading-9 font-bold text-black"
							style="letter-spacing: -0.005em"
						>
							Stay relevant in a constantly changing job market
						</h3>
						<p
							class="font-geist text-base leading-6 text-[rgba(42,44,44,0.70)]"
							style="letter-spacing: -0.005em"
						>
							In a highly experienced Society to oversee and implement security measures across all
							phases of our project life-cycle. This role involves developing, coordinating,...
						</p>
						<div class="flex flex-row items-center gap-2">
							<div
								class="font-geist text-base leading-6 font-semibold text-[#3296f8] uppercase"
								style="letter-spacing: -0.005em"
							>
								Learn MorE
							</div>
							<img loading="lazy" decoding="async" class="h-6 w-6" src="/icons/blog-details/arrow-right-alt0.svg" alt="" />
						</div>
						<div class="flex flex-row gap-3">
							<img loading="lazy" decoding="async"
								class="border-neutral-primary-grey h-[50px] w-[50px] rounded-[50px] border-[3px] border-solid object-cover"
								src="/icons/blog-details/frame-20856641870.png"
								alt=""
							/>
							<div class="flex flex-col gap-2">
								<div
									class="font-geist text-sm leading-[21px] font-bold text-[#2a2c2c]"
									style="letter-spacing: -0.005em"
								>
									James Anthony
								</div>
								<div
									class="font-geist text-base leading-6 text-[#62717a]"
									style="letter-spacing: -0.005em"
								>
									Researcher, AI Expert
								</div>
							</div>
						</div>
					</div>

					<!-- Image -->
					<div class="lg:w-1/2">
						<img loading="lazy" decoding="async"
							class="h-[476px] w-full rounded-[20px] object-cover"
							src="/icons/blog-details/frame-20856641840.webp"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Newsletter Footer -->
	<div
		class="w-full overflow-hidden bg-cover bg-center"
		style="background-image: url('/icons/blog-details/frame-20856642780.webp')"
	>
		<div class="bg-[rgba(17,13,33,0.9)] px-6 py-[117px]">
			<div
				class="mx-auto flex w-full max-w-[1270px] flex-col items-center justify-between gap-12 lg:flex-row lg:gap-[90px]"
			>
				<!-- Left Content -->
				<div class="flex flex-1 flex-col gap-6">
					<div class="h-[30px] w-[143px] overflow-hidden">
						<img loading="lazy" decoding="async" class="h-auto" src="/icons/blog-details/layer-21.svg" alt="JobBeta" />
					</div>
					<div class="flex flex-col gap-4">
						<h2
							class="font-geist text-[32px] leading-[48px] font-bold text-neutral-white"
							style="letter-spacing: -0.005em"
						>
							Need that dream Job or career change?
						</h2>
						<p class="font-geist text-base leading-6 text-white" style="letter-spacing: -0.005em">
							Stay updated with our announcement, tips and News
						</p>
					</div>
				</div>

				<!-- Newsletter Form -->
				<form class="flex w-full flex-col gap-2 lg:w-[431px]" onsubmit={subscribe}>
					<div class="flex w-full flex-row">
						<div
							class="flex w-full items-center rounded-tl-lg rounded-bl-lg bg-[rgba(255,255,255,0.14)] p-4"
						>
							<input
								type="email"
								required
								bind:value={email}
								placeholder="Enter your Email Address"
								class="w-full bg-transparent font-geist text-base leading-6 text-white outline-none placeholder:text-white"
								style="letter-spacing: -0.005em"
							/>
						</div>
						<button
							type="submit"
							disabled={subscribing}
							class="bg-accent-color flex items-center justify-center rounded-tr-lg rounded-br-lg px-4 py-4 disabled:opacity-60"
						>
							<img loading="lazy" decoding="async" class="h-6 w-6" src="/icons/blog-details/send0.svg" alt="Send" />
						</button>
					</div>
					{#if status === 'success'}
						<p class="font-geist text-sm text-green-400" style="letter-spacing: -0.005em">
							You're subscribed! Watch your inbox for updates.
						</p>
					{:else if status === 'error'}
						<p class="font-geist text-sm text-red-400" style="letter-spacing: -0.005em">
							Something went wrong. Please try again later.
						</p>
					{/if}
				</form>
			</div>

			<!-- Footer Links -->
			<div
				class="mx-auto mt-[90px] flex w-full max-w-[1270px] flex-col justify-between gap-12 lg:flex-row"
			>
				<!-- Company -->
				<div class="flex flex-col gap-4">
					<h3
						class="font-geist text-base leading-6 font-bold text-white"
						style="letter-spacing: -0.005em"
					>
						Company
					</h3>
					<div class="flex flex-col gap-3">
						{#each [{ label: 'About us', href: '/about' }, { label: 'Why JobBeta', href: '/why-jobbeta' }, { label: 'Jobs', href: '/jobs' }, { label: 'Blog', href: '/blog' }, { label: 'Privacy Policy', href: '/privacy' }] as link}
							<a
								href={link.href}
								class="font-geist text-base leading-6 text-white"
								style="letter-spacing: -0.005em">{link.label}</a
							>
						{/each}
					</div>
				</div>

				<!-- Students -->
				<div class="flex flex-col gap-4">
					<h3
						class="font-geist text-base leading-6 font-bold text-white"
						style="letter-spacing: -0.005em"
					>
						Students
					</h3>
					<div class="flex flex-col gap-3">
						{#each [{ label: 'How it Works', href: '/how-it-works' }, { label: 'Resources', href: '/resources' }, { label: 'Jobs', href: '/jobs' }] as link}
							<a
								href={link.href}
								class="font-geist text-base leading-6 text-white"
								style="letter-spacing: -0.005em">{link.label}</a
							>
						{/each}
					</div>
				</div>

				<!-- Employers -->
				<div class="flex flex-col gap-4">
					<h3
						class="font-geist text-base leading-6 font-bold text-white"
						style="letter-spacing: -0.005em"
					>
						Employers
					</h3>
					<div class="flex flex-col gap-3">
						{#each [{ label: 'Solutions', href: '/solutions' }, { label: 'Products', href: '/products' }, { label: 'Blog', href: '/blog' }] as link}
							<a
								href={link.href}
								class="font-geist text-base leading-6 text-white"
								style="letter-spacing: -0.005em">{link.label}</a
							>
						{/each}
					</div>
				</div>

				<!-- Career Centers -->
				<div class="flex flex-col gap-4">
					<h3
						class="font-geist text-base leading-6 font-bold text-white"
						style="letter-spacing: -0.005em"
					>
						Career Centers
					</h3>
					<div class="flex flex-col gap-3">
						{#each [{ label: 'Resources', href: '/resources' }, { label: 'News', href: '/blog' }, { label: 'Blogs', href: '/blog' }] as link}
							<a
								href={link.href}
								class="font-geist text-base leading-6 text-white"
								style="letter-spacing: -0.005em">{link.label}</a
							>
						{/each}
					</div>
				</div>
			</div>

			<!-- Copyright -->
			<div
				class="mx-auto mt-12 w-full max-w-[1270px] border-t border-[rgba(255,255,255,0.2)] pt-6 text-center"
			>
				<p class="font-geist text-base leading-6 text-white" style="letter-spacing: -0.005em">
					Copyright@2025. All rights Reserved
				</p>
			</div>
		</div>
	</div>

	<!-- CTA Sections -->
	<div class="w-full">
		<div class="flex flex-col lg:flex-row">
			<!-- Blue Section -->
			<div class="bg-accent-color relative w-full overflow-hidden px-6 py-20 lg:w-1/2">
				<div class="relative z-10 mx-auto max-w-lg">
					<div class="flex flex-col gap-8">
						<h2
							class="font-geist text-4xl leading-[54px] font-semibold text-white"
							style="letter-spacing: -0.005em"
						>
							Whether You're Searching or Hiring — Start Here.
						</h2>
						<a
							href="/career-centers"
							class="w-fit rounded-[20px] bg-black px-6 py-4 font-lato text-base leading-6 font-bold text-white"
							style="letter-spacing: -0.005em"
						>
							Go to Career Centers
						</a>
					</div>
				</div>
				<!-- Decorative circles -->
				<div
					class="absolute -bottom-[100px] -left-[100px] h-[300px] w-[300px] rounded-full border border-white opacity-30"
				></div>
				<div
					class="absolute -bottom-[50px] left-[50px] h-[200px] w-[200px] rounded-full border border-white opacity-30"
				></div>
			</div>

			<!-- Dark Purple Section -->
			<div class="bg-brand-colours-dark-purple relative w-full overflow-hidden px-6 py-20 lg:w-1/2">
				<div class="relative z-10 mx-auto max-w-lg">
					<div class="flex flex-col gap-8">
						<div class="flex flex-col gap-1">
							<p class="font-lato text-base leading-6 text-white" style="letter-spacing: -0.005em">
								We love to hear from you
							</p>
							<h2
								class="font-geist text-4xl leading-[54px] font-semibold text-white"
								style="letter-spacing: -0.005em"
							>
								Do you need more Details or support?
							</h2>
						</div>
						<div class="flex flex-row flex-wrap gap-3">
							<a
								href="/contact"
								class="w-60 rounded-[20px] bg-white px-6 py-4 text-center font-lato text-base leading-6 font-bold text-black"
								style="letter-spacing: -0.005em"
							>
								Get Info updates
							</a>
							<a
								href="/resources"
								class="w-60 rounded-[20px] border border-solid border-white px-6 py-4 text-center font-lato text-base leading-6 font-bold text-white"
								style="letter-spacing: -0.005em"
							>
								Explore self-solution
							</a>
						</div>
					</div>
				</div>
				<!-- Decorative circles -->
				<div
					class="absolute -top-[100px] -right-[100px] h-[300px] w-[300px] rounded-full border border-white opacity-30"
				></div>
			</div>
		</div>
	</div>
</div>
