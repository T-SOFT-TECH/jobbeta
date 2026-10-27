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
	<title>Blog - JobBeta</title>
	<meta name="description" content="Expert career advice, tips, and guidance - JobBeta Blog" />
</svelte:head>

<div class="w-full bg-white">
	<!-- Hero Section -->
	<div class="w-full overflow-hidden py-20">
		<div class="page-container flex w-full flex-col gap-12 lg:flex-row lg:gap-16">
			<!-- Left Content -->
			<div class="flex flex-col gap-[38px]">
				<div class="flex flex-col gap-4">
					<h1
						class="font-geist text-[40px] leading-[60px] font-bold text-[#2a2c2c]"
						style="letter-spacing: -0.005em"
					>
						Blog
					</h1>
					<p
						class="max-w-[453px] font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.85)]"
						style="letter-spacing: -0.005em"
					>
						Get expert-backed insights, practical tips, and guidance to help you make informed
						career decisions, grow your skills, and reach your professional goals.
					</p>
				</div>
				<form class="flex flex-col gap-3" onsubmit={subscribe}>
					<div class="flex flex-row">
						<div
							class="bg-neutral-primary-grey flex min-w-0 flex-1 flex-row items-center gap-2.5 rounded-tl-3xl rounded-bl-3xl p-4 sm:flex-none"
						>
							<img class="h-6 w-6" src="/icons/blog/search0.svg" alt="" />
							<input
								type="email"
								required
								bind:value={email}
								placeholder="Enter Email"
								class="w-full min-w-0 border-0 bg-transparent p-0 font-lato text-base leading-6 text-text-muted placeholder:text-[rgba(42,44,44,0.49)] focus:ring-0 focus:outline-none sm:w-[200px]"
								style="letter-spacing: -0.005em"
							/>
						</div>
						<button
							type="submit"
							disabled={subscribing}
							class="bg-brand-colours-dark-purple text-neutral-primary-grey flex w-[149px] items-center justify-center rounded-tr-[20px] rounded-br-[20px] p-4 font-geist text-base leading-6 font-bold disabled:opacity-60"
							style="letter-spacing: -0.005em"
						>
							{subscribing ? 'Subscribing...' : 'Subscribe'}
						</button>
					</div>
					{#if status === 'success'}
						<div
							class="font-geist text-base leading-6 font-medium text-green-600"
							style="letter-spacing: -0.005em"
						>
							You're subscribed! Watch your inbox for updates.
						</div>
					{:else if status === 'error'}
						<div
							class="font-geist text-base leading-6 font-medium text-red-600"
							style="letter-spacing: -0.005em"
						>
							Something went wrong. Please try again later.
						</div>
					{:else}
						<div
							class="font-geist text-base leading-6 font-medium text-[rgba(42,44,44,0.70)]"
							style="letter-spacing: -0.005em"
						>
							You can unsubscribe at any time.
						</div>
					{/if}
				</form>
			</div>

			<!-- Right Image with Cards -->
			<div class="relative">
				<img
					class="border-accent-color h-[500px] w-full rounded-2xl border-8 border-solid object-cover lg:w-[544px]"
					src="/icons/blog/frame-20856642380.png"
					alt=""
				/>

				<!-- Testimonial Cards -->
				<div class="absolute top-[51px] right-[-20px] hidden rounded-2xl bg-white p-3 lg:block">
					<div class="flex flex-row gap-3">
						<img
							class="border-neutral-primary-grey h-[50px] w-[50px] rounded-[50px] border-[3px] border-solid object-cover"
							src="/icons/blog/frame-20856641871.png"
							alt=""
						/>
						<div class="flex flex-col gap-2">
							<div
								class="font-geist text-sm leading-[21px] font-bold text-[#2a2c2c]"
								style="letter-spacing: -0.005em"
							>
								Shola Adamson
							</div>
							<div class="flex flex-row gap-2">
								{#each Array(5) as _, i}
									<img class="h-6 w-6" src="/icons/blog/kid-star{i + 5}.svg" alt="" />
								{/each}
							</div>
						</div>
					</div>
				</div>
				<div class="absolute right-[50px] bottom-[-40px] hidden rounded-2xl bg-white p-3 lg:block">
					<div class="flex flex-row gap-3">
						<img
							class="border-neutral-primary-grey h-[50px] w-[50px] rounded-[50px] border-[3px] border-solid object-cover"
							src="/icons/blog/frame-20856641870.png"
							alt=""
						/>
						<div class="flex flex-col gap-2">
							<div
								class="font-geist text-sm leading-[21px] font-bold text-[#2a2c2c]"
								style="letter-spacing: -0.005em"
							>
								James Anthony
							</div>
							<div class="flex flex-row gap-2">
								{#each Array(5) as _, i}
									<img class="h-6 w-6" src="/icons/blog/kid-star{i}.svg" alt="" />
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Filter Tabs Section -->
	<div class="w-full bg-[rgba(234,236,240,0.20)] py-8">
		<div class="page-container w-full">
			<div class="flex flex-col gap-8">
				<div class="flex flex-row flex-wrap gap-6">
					<button
						class="bg-accent-color flex w-20 items-center justify-center rounded-[20px] p-2 font-geist text-xl leading-[30px] font-bold text-white"
						style="letter-spacing: -0.005em"
					>
						All
					</button>
					<button
						class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]"
						style="letter-spacing: -0.005em"
					>
						Students
					</button>
					<button
						class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]"
						style="letter-spacing: -0.005em"
					>
						Employers
					</button>
					<button
						class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]"
						style="letter-spacing: -0.005em"
					>
						Career Center
					</button>
				</div>
				<div class="-mt-px h-0 border-t border-[rgba(42,44,44,0.16)]"></div>
			</div>
		</div>
	</div>

	<!-- Blog Posts Section -->
	<div class="w-full bg-[rgba(234,236,240,0.20)] pb-16">
		<div class="page-container w-full">
			<div class="flex flex-col gap-10">
				<!-- Category Tags & Search -->
				<div class="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
					<div class="flex flex-row flex-wrap gap-4">
						<div
							class="flex items-center justify-center rounded-2xl border border-solid border-[#3296f8] bg-[rgba(50,150,248,0.20)] px-3 py-1.5"
						>
							<div
								class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]"
								style="letter-spacing: -0.005em"
							>
								Career Tips
							</div>
						</div>
						<div
							class="bg-neutral-primary-grey flex items-center justify-center rounded-2xl border border-solid border-[#eaecf0] px-3 py-1.5"
						>
							<div
								class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]"
								style="letter-spacing: -0.005em"
							>
								Employment
							</div>
						</div>
						<div
							class="bg-neutral-primary-grey flex items-center justify-center rounded-2xl border border-solid border-[#eaecf0] px-3 py-1.5"
						>
							<div
								class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]"
								style="letter-spacing: -0.005em"
							>
								Cv Optimization
							</div>
						</div>
						<div
							class="bg-neutral-primary-grey flex items-center justify-center rounded-2xl border border-solid border-[#eaecf0] px-3 py-1.5"
						>
							<div
								class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]"
								style="letter-spacing: -0.005em"
							>
								Education
							</div>
						</div>
						<div
							class="bg-neutral-primary-grey flex items-center justify-center rounded-2xl border border-solid border-[#eaecf0] px-3 py-1.5"
						>
							<div
								class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]"
								style="letter-spacing: -0.005em"
							>
								Work
							</div>
						</div>
					</div>

					<!-- Search -->
					<div class="flex flex-row">
						<div class="flex h-14 min-w-0 flex-1 items-center border border-[#b9bcbf] px-3 sm:w-[352px] sm:flex-none">
							<input
								type="text"
								placeholder="Search the blog post"
								class="min-w-0 flex-1 border-0 bg-transparent p-0 font-lato text-base leading-6 text-text-muted placeholder:text-[rgba(42,44,44,0.49)] focus:ring-0 focus:outline-none"
								style="letter-spacing: -0.005em"
							/>
						</div>
						<button
							class="bg-accent-color flex h-14 w-[126px] items-center justify-center font-lato text-base leading-6 font-bold text-white"
							style="letter-spacing: -0.005em"
						>
							Search
						</button>
					</div>
				</div>

				<!-- Blog Posts Grid -->
				<div class="flex flex-col gap-20">
					{#each Array(3) as _, i}
						<div
							class="flex flex-col items-center gap-10 lg:flex-row lg:gap-[66px]"
						>
							<!-- Content -->
							<div class="flex min-w-0 flex-1 flex-col gap-10">
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
								<h2
									class="max-w-[580px] font-geist text-[32px] leading-9 font-bold text-black"
									style="letter-spacing: -0.005em"
								>
									{i === 0
										? 'Staying relevant in a constantly changing job market'
										: 'Stay relevant in a constantly changing job market'}
								</h2>
								<p
									class="max-w-[580px] font-geist text-base leading-6 text-[rgba(42,44,44,0.70)]"
									style="letter-spacing: -0.005em"
								>
									In a highly experienced Society to oversee and implement security measures across
									all phases of our project life-cycle. This role involves developing,
									coordinating,...
								</p>
								<div class="flex flex-row items-center gap-2">
									<div
										class="font-geist text-base leading-6 font-semibold text-[#3296f8] uppercase"
										style="letter-spacing: -0.005em"
									>
										Learn MorE
									</div>
									<img class="h-6 w-6" src="/icons/blog/arrow-right-alt{i}.svg" alt="" />
								</div>
								<div class="flex flex-row gap-3">
									<img
										class="border-neutral-primary-grey h-[50px] w-[50px] rounded-[50px] border-[3px] border-solid object-cover"
										src="/icons/blog/frame-2085664187{i + 2}.png"
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
							<img
								class="h-72 w-full shrink-0 rounded-[20px] object-cover sm:h-96 lg:h-[476px] lg:w-[438px]"
								src="/icons/blog/frame-2085664184{i}.png"
								alt=""
							/>
						</div>
					{/each}
				</div>

				<!-- Pagination -->
				<div class="flex flex-row items-center justify-center gap-3">
					<button
						class="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] border border-solid border-[#eeecfc]"
					>
						<span class="text-2xl">←</span>
					</button>
					<button
						class="bg-accent-color flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] font-geist text-base leading-6 font-bold text-white"
						style="letter-spacing: -0.005em">1</button
					>
					<button
						class="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] border border-solid border-[#eeecfc] font-geist text-base leading-6 font-bold text-[#62717a]"
						style="letter-spacing: -0.005em">2</button
					>
					<button
						class="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] border border-solid border-[#eeecfc] font-geist text-base leading-6 font-bold text-[#62717a]"
						style="letter-spacing: -0.005em">3</button
					>
					<button
						class="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] border border-solid border-[#eeecfc]"
					>
						<span class="text-2xl">→</span>
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Other Related Blog Section -->
	<div class="w-full py-16">
		<div class="page-container w-full">
			<div class="flex flex-col gap-8">
				<div class="flex flex-col gap-2 text-center">
					<h2
						class="font-geist text-[40px] leading-[60px] font-bold text-black"
						style="letter-spacing: -0.005em"
					>
						Other Related Blog
					</h2>
					<p
						class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.85)]"
						style="letter-spacing: -0.005em"
					>
						Get Updates and timely resources crucial suitable for you
					</p>
				</div>

				<div class="flex flex-col gap-[66px] lg:flex-row">
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
							class="font-geist text-[32px] leading-9 font-bold text-black"
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
							<img class="h-6 w-6" src="/icons/blog/arrow-right-alt3.svg" alt="" />
						</div>
						<div class="flex flex-row gap-3">
							<img
								class="border-neutral-primary-grey h-[50px] w-[50px] rounded-[50px] border-[3px] border-solid object-cover"
								src="/icons/blog/frame-20856641875.png"
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
						<img
							class="h-[476px] w-full rounded-[20px] object-cover"
							src="/icons/blog/frame-20856641843.png"
							alt=""
						/>
					</div>
				</div>
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
