<script>
	// Dual CTA Section - Partner CTA and Contact CTA
</script>

<!-- Dual CTA Section -->
<section class="relative w-full overflow-hidden">
	<div class="flex flex-col lg:flex-row">
		<!-- Left Panel - Partner CTA (Primary/Blue) -->
		<div
			class="relative w-full overflow-hidden bg-primary px-6 py-16 md:px-20 lg:w-1/2 lg:py-[227px]"
		>
			<!-- Decorative circles -->
			<div class="pointer-events-none absolute -bottom-20 -left-10 hidden opacity-20 lg:block">
				{#each Array(7) as _, i}
					<div
						class="absolute h-[185px] w-[185px] rounded-full border border-white"
						style="left: {i * 70}px; bottom: {(i % 3) * 20}px; transform: rotate(-40deg);"
					></div>
				{/each}
			</div>

			<div class="relative z-10 flex flex-col gap-8 md:gap-12">
				<div class="flex flex-col gap-5">
					<h2
						class="text-2xl leading-tight font-semibold text-white sm:text-3xl md:text-4xl md:leading-[54px]"
						style="font-family: var(--font-geist); letter-spacing: -0.005em;"
					>
						Ready to bring JobBeta to your students?
					</h2>
					<p
						class="text-base leading-relaxed text-white md:text-xl md:leading-[30px]"
						style="font-family: var(--font-geist); letter-spacing: -0.005em;"
					>
						Let's work together to shape the future of early-career hiring.
					</p>
				</div>

				<div class="flex flex-col gap-3 sm:flex-row">
					<a
						href="/partner"
						class="flex w-full items-center justify-center rounded-[20px] bg-black px-[10px] py-4 text-base leading-6 font-bold text-white transition-colors hover:bg-gray-800 sm:w-60"
						style="font-family: 'Lato', sans-serif; letter-spacing: -0.005em;"
					>
						Become a Partner
					</a>
					<a
						href="/demo"
						class="flex w-full items-center justify-center rounded-[20px] border border-white px-[10px] py-4 text-base leading-6 font-bold text-white transition-colors hover:bg-white/10 sm:w-60"
						style="font-family: 'Lato', sans-serif; letter-spacing: -0.005em;"
					>
						Schedule A Demo
					</a>
				</div>
			</div>
		</div>

		<!-- Right Panel - Contact CTA (Dark Purple) -->
		<div
			class="relative w-full overflow-hidden bg-secondary px-6 py-16 md:px-20 lg:w-1/2 lg:py-[261px]"
		>
			<!-- Decorative circles -->
			<div class="pointer-events-none absolute -top-20 -right-20 hidden opacity-20 lg:block">
				<div class="h-[185px] w-[185px] rounded-full border border-white"></div>
				<div
					class="absolute top-24 -left-10 h-[185px] w-[185px] rounded-full border border-white"
				></div>
				<div
					class="absolute -top-14 left-10 h-[185px] w-[185px] rounded-full border border-white"
				></div>
			</div>

			<div class="relative z-10 flex flex-col gap-8 md:gap-[47px]">
				<div class="flex flex-col gap-1">
					<p
						class="text-base leading-6 text-white"
						style="font-family: 'Lato', sans-serif; letter-spacing: -0.005em;"
					>
						We love to hear from you
					</p>
					<h2
						class="text-2xl leading-tight font-semibold text-white sm:text-3xl md:text-4xl md:leading-[54px]"
						style="font-family: var(--font-geist); letter-spacing: -0.005em;"
					>
						Do you need more Details<br class="hidden md:block" />
						or support?
					</h2>
				</div>

				<div class="flex flex-col gap-3 sm:flex-row">
					<a
						href="/employers"
						class="flex w-full items-center justify-center rounded-[20px] bg-white px-[10px] py-4 text-base leading-6 font-bold text-secondary transition-colors hover:bg-gray-100 sm:w-60"
						style="font-family: 'Lato', sans-serif; letter-spacing: -0.005em;"
					>
						Hire With JobBeta
					</a>
					<a
						href="/partner"
						class="flex w-full items-center justify-center rounded-[20px] px-[10px] py-4 text-base leading-6 font-bold text-white transition-colors hover:bg-white/10 sm:w-60"
						style="font-family: 'Lato', sans-serif; letter-spacing: -0.005em;"
					>
						Partner with JobBeta
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
