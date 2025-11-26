<svelte:head>
	<title>Blog - JobBeta</title>
	<meta name="description" content="Expert career advice, tips, and guidance - JobBeta Blog" />
</svelte:head>

<div class="w-full bg-white">
	<!-- Hero Section -->
	<div class="w-full overflow-hidden py-20">
		<div class="mx-auto flex w-full max-w-[1344px] flex-col gap-12 px-6 lg:flex-row lg:gap-16">
			<!-- Left Content -->
			<div class="flex flex-col gap-[38px]">
				<div class="flex flex-col gap-4">
					<h1 class="font-geist text-[40px] font-bold leading-[60px] text-[#2a2c2c]" style="letter-spacing: -0.005em">
						Blog
					</h1>
					<p class="font-geist max-w-[453px] text-xl leading-[30px] text-[rgba(42,44,44,0.85)]" style="letter-spacing: -0.005em">
						Get expert-backed insights, practical tips, and guidance to help you make informed career decisions, grow your skills, and reach your professional goals.
					</p>
				</div>
				<div class="flex flex-col gap-3">
					<div class="flex flex-row">
						<div class="flex flex-row items-center gap-2.5 rounded-bl-3xl rounded-tl-3xl bg-neutral-primary-grey p-4">
							<img class="h-6 w-6" src="/icons/blog/search0.svg" alt="" />
							<input
								type="email"
								placeholder="Enter Email"
								class="font-lato w-[200px] text-center text-base leading-6 text-[rgba(42,44,44,0.49)] outline-none"
								style="letter-spacing: -0.005em"
							/>
						</div>
						<button class="font-geist flex w-[149px] items-center justify-center rounded-br-[20px] rounded-tr-[20px] bg-brand-colours-dark-purple p-4 text-base font-bold leading-6 text-neutral-primary-grey" style="letter-spacing: -0.005em">
							Subscribe
						</button>
					</div>
					<div class="font-geist text-base font-medium leading-6 text-[rgba(42,44,44,0.70)]" style="letter-spacing: -0.005em">
						You can unsubscribe at any time.
					</div>
				</div>
			</div>

			<!-- Right Image with Cards -->
			<div class="relative">
				<img class="h-[500px] w-full rounded-2xl border-8 border-solid border-accent-color object-cover lg:w-[544px]" src="/icons/blog/frame-20856642380.png" alt="" />

				<!-- Testimonial Cards -->
				<div class="absolute right-[-20px] top-[51px] hidden rounded-2xl bg-white p-3 lg:block">
					<div class="flex flex-row gap-3">
						<img class="h-[50px] w-[50px] rounded-[50px] border-[3px] border-solid border-neutral-primary-grey object-cover" src="/icons/blog/frame-20856641871.png" alt="" />
						<div class="flex flex-col gap-2">
							<div class="font-geist text-sm font-bold leading-[21px] text-[#2a2c2c]" style="letter-spacing: -0.005em">Shola Adamson</div>
							<div class="flex flex-row gap-2">
								{#each Array(5) as _, i}
									<img class="h-6 w-6" src="/icons/blog/kid-star{i + 5}.svg" alt="" />
								{/each}
							</div>
						</div>
					</div>
				</div>
				<div class="absolute bottom-[-40px] right-[50px] hidden rounded-2xl bg-white p-3 lg:block">
					<div class="flex flex-row gap-3">
						<img class="h-[50px] w-[50px] rounded-[50px] border-[3px] border-solid border-neutral-primary-grey object-cover" src="/icons/blog/frame-20856641870.png" alt="" />
						<div class="flex flex-col gap-2">
							<div class="font-geist text-sm font-bold leading-[21px] text-[#2a2c2c]" style="letter-spacing: -0.005em">James Anthony</div>
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
		<div class="mx-auto w-full max-w-[1344px] px-6">
			<div class="flex flex-col gap-8">
				<div class="flex flex-row flex-wrap gap-6">
					<button class="font-geist flex w-20 items-center justify-center rounded-[20px] bg-accent-color p-2 text-xl font-bold leading-[30px] text-white" style="letter-spacing: -0.005em">
						All
					</button>
					<button class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]" style="letter-spacing: -0.005em">
						Students
					</button>
					<button class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]" style="letter-spacing: -0.005em">
						Employers
					</button>
					<button class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]" style="letter-spacing: -0.005em">
						Career Center
					</button>
				</div>
				<div class="-mt-px h-0 border-t border-[rgba(42,44,44,0.16)]"></div>
			</div>
		</div>
	</div>

	<!-- Blog Posts Section -->
	<div class="w-full bg-[rgba(234,236,240,0.20)] pb-16">
		<div class="mx-auto w-full max-w-[1344px] px-6">
			<div class="flex flex-col gap-10">
				<!-- Category Tags & Search -->
				<div class="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
					<div class="flex flex-row flex-wrap gap-4">
						<div class="flex items-center justify-center rounded-2xl border border-solid border-[#3296f8] bg-[rgba(50,150,248,0.20)] px-3 py-1.5">
							<div class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]" style="letter-spacing: -0.005em">Career Tips</div>
						</div>
						<div class="flex items-center justify-center rounded-2xl border border-solid border-[#eaecf0] bg-neutral-primary-grey px-3 py-1.5">
							<div class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]" style="letter-spacing: -0.005em">Employment</div>
						</div>
						<div class="flex items-center justify-center rounded-2xl border border-solid border-[#eaecf0] bg-neutral-primary-grey px-3 py-1.5">
							<div class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]" style="letter-spacing: -0.005em">Cv Optimization</div>
						</div>
						<div class="flex items-center justify-center rounded-2xl border border-solid border-[#eaecf0] bg-neutral-primary-grey px-3 py-1.5">
							<div class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]" style="letter-spacing: -0.005em">Education</div>
						</div>
						<div class="flex items-center justify-center rounded-2xl border border-solid border-[#eaecf0] bg-neutral-primary-grey px-3 py-1.5">
							<div class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.40)]" style="letter-spacing: -0.005em">Work</div>
						</div>
					</div>

					<!-- Search -->
					<div class="flex flex-row">
						<div class="flex h-14 w-[352px] items-center border border-[#b9bcbf] px-3">
							<input
								type="text"
								placeholder="Search the blog post"
								class="font-lato flex-1 text-base leading-6 text-[rgba(42,44,44,0.49)] outline-none"
								style="letter-spacing: -0.005em"
							/>
						</div>
						<button class="font-lato flex h-14 w-[126px] items-center justify-center bg-accent-color text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">
							Search
						</button>
					</div>
				</div>

				<!-- Blog Posts Grid -->
				<div class="flex flex-col gap-20">
					{#each Array(3) as _, i}
						<div class="flex flex-col gap-[66px] {i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center">
							<!-- Content -->
							<div class="flex flex-col gap-10">
								<div class="flex flex-row flex-wrap gap-[22px] uppercase">
									<span class="font-geist text-base leading-6 text-[rgba(42,44,44,0.70)]" style="letter-spacing: -0.005em">Career tips & Employment .</span>
									<span class="font-geist text-base leading-6 text-[rgba(42,44,44,0.40)]" style="letter-spacing: -0.005em">June 12, 2021</span>
								</div>
								<h2 class="font-geist max-w-[580px] text-[32px] font-bold leading-9 text-black" style="letter-spacing: -0.005em">
									{i === 0 ? 'Staying relevant in a constantly changing job market' : 'Stay relevant in a constantly changing job market'}
								</h2>
								<p class="font-geist max-w-[580px] text-base leading-6 text-[rgba(42,44,44,0.70)]" style="letter-spacing: -0.005em">
									In a highly experienced Society to oversee and implement security measures across all phases of our project life-cycle. This role involves developing, coordinating,...
								</p>
								<div class="flex flex-row items-center gap-2">
									<div class="font-geist text-base font-semibold uppercase leading-6 text-[#3296f8]" style="letter-spacing: -0.005em">Learn MorE</div>
									<img class="h-6 w-6" src="/icons/blog/arrow-right-alt{i}.svg" alt="" />
								</div>
								<div class="flex flex-row gap-3">
									<img class="h-[50px] w-[50px] rounded-[50px] border-[3px] border-solid border-neutral-primary-grey object-cover" src="/icons/blog/frame-2085664187{i + 2}.png" alt="" />
									<div class="flex flex-col gap-2">
										<div class="font-geist text-sm font-bold leading-[21px] text-[#2a2c2c]" style="letter-spacing: -0.005em">James Anthony</div>
										<div class="font-geist text-base leading-6 text-[#62717a]" style="letter-spacing: -0.005em">Researcher, AI Expert</div>
									</div>
								</div>
							</div>

							<!-- Image -->
							<img class="h-[476px] w-full rounded-[20px] object-cover lg:w-[438px]" src="/icons/blog/frame-2085664184{i}.png" alt="" />
						</div>
					{/each}
				</div>

				<!-- Pagination -->
				<div class="flex flex-row items-center justify-center gap-3">
					<button class="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] border border-solid border-[#eeecfc]">
						<span class="text-2xl">←</span>
					</button>
					<button class="font-geist flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] bg-accent-color text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">1</button>
					<button class="font-geist flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] border border-solid border-[#eeecfc] text-base font-bold leading-6 text-[#62717a]" style="letter-spacing: -0.005em">2</button>
					<button class="font-geist flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] border border-solid border-[#eeecfc] text-base font-bold leading-6 text-[#62717a]" style="letter-spacing: -0.005em">3</button>
					<button class="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[50px] border border-solid border-[#eeecfc]">
						<span class="text-2xl">→</span>
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Other Related Blog Section -->
	<div class="w-full py-16">
		<div class="mx-auto w-full max-w-[1344px] px-6">
			<div class="flex flex-col gap-8">
				<div class="flex flex-col gap-2 text-center">
					<h2 class="font-geist text-[40px] font-bold leading-[60px] text-black" style="letter-spacing: -0.005em">Other Related Blog</h2>
					<p class="font-geist text-xl leading-[30px] text-[rgba(42,44,44,0.85)]" style="letter-spacing: -0.005em">
						Get Updates and timely resources crucial suitable for you
					</p>
				</div>

				<div class="flex flex-col gap-[66px] lg:flex-row">
					<!-- Content -->
					<div class="flex flex-col gap-10 lg:w-1/2">
						<div class="flex flex-row flex-wrap gap-[22px] uppercase">
							<span class="font-geist text-base leading-6 text-[rgba(42,44,44,0.70)]" style="letter-spacing: -0.005em">Education .</span>
							<span class="font-geist text-base leading-6 text-[rgba(42,44,44,0.40)]" style="letter-spacing: -0.005em">June 12, 2021</span>
						</div>
						<h3 class="font-geist text-[32px] font-bold leading-9 text-black" style="letter-spacing: -0.005em">
							Stay relevant in a constantly changing job market
						</h3>
						<p class="font-geist text-base leading-6 text-[rgba(42,44,44,0.70)]" style="letter-spacing: -0.005em">
							In a highly experienced Society to oversee and implement security measures across all phases of our project life-cycle. This role involves developing, coordinating,...
						</p>
						<div class="flex flex-row items-center gap-2">
							<div class="font-geist text-base font-semibold uppercase leading-6 text-[#3296f8]" style="letter-spacing: -0.005em">Learn MorE</div>
							<img class="h-6 w-6" src="/icons/blog/arrow-right-alt3.svg" alt="" />
						</div>
						<div class="flex flex-row gap-3">
							<img class="h-[50px] w-[50px] rounded-[50px] border-[3px] border-solid border-neutral-primary-grey object-cover" src="/icons/blog/frame-20856641875.png" alt="" />
							<div class="flex flex-col gap-2">
								<div class="font-geist text-sm font-bold leading-[21px] text-[#2a2c2c]" style="letter-spacing: -0.005em">James Anthony</div>
								<div class="font-geist text-base leading-6 text-[#62717a]" style="letter-spacing: -0.005em">Researcher, AI Expert</div>
							</div>
						</div>
					</div>

					<!-- Image -->
					<div class="lg:w-1/2">
						<img class="h-[476px] w-full rounded-[20px] object-cover" src="/icons/blog/frame-20856641843.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- CTA Sections -->
	<div class="w-full">
		<div class="flex flex-col lg:flex-row">
			<!-- Blue Section -->
			<div class="relative w-full overflow-hidden bg-accent-color px-6 py-20 lg:w-1/2">
				<div class="relative z-10 mx-auto max-w-lg">
					<div class="flex flex-col gap-8">
						<h2 class="font-geist text-4xl font-semibold leading-[54px] text-white" style="letter-spacing: -0.005em">
							Whether You're Searching or Hiring — Start Here.
						</h2>
						<button class="font-lato w-fit rounded-[20px] bg-black px-6 py-4 text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">
							Go to Career Centers
						</button>
					</div>
				</div>
				<!-- Decorative circles -->
				<div class="absolute -bottom-[100px] -left-[100px] h-[300px] w-[300px] rounded-full border border-white opacity-30"></div>
				<div class="absolute -bottom-[50px] left-[50px] h-[200px] w-[200px] rounded-full border border-white opacity-30"></div>
			</div>

			<!-- Dark Purple Section -->
			<div class="relative w-full overflow-hidden bg-brand-colours-dark-purple px-6 py-20 lg:w-1/2">
				<div class="relative z-10 mx-auto max-w-lg">
					<div class="flex flex-col gap-8">
						<div class="flex flex-col gap-1">
							<p class="font-lato text-base leading-6 text-white" style="letter-spacing: -0.005em">We love to hear from you</p>
							<h2 class="font-geist text-4xl font-semibold leading-[54px] text-white" style="letter-spacing: -0.005em">
								Do you need more Details or support?
							</h2>
						</div>
						<div class="flex flex-row flex-wrap gap-3">
							<button class="font-lato w-60 rounded-[20px] bg-white px-6 py-4 text-base font-bold leading-6 text-black" style="letter-spacing: -0.005em">
								Get Info updates
							</button>
							<button class="font-lato w-60 rounded-[20px] border border-solid border-white px-6 py-4 text-base font-bold leading-6 text-white" style="letter-spacing: -0.005em">
								Explore self-solution
							</button>
						</div>
					</div>
				</div>
				<!-- Decorative circles -->
				<div class="absolute -top-[100px] -right-[100px] h-[300px] w-[300px] rounded-full border border-white opacity-30"></div>
			</div>
		</div>
	</div>
</div>
