<script>
	// The Numbers Don't Lie Section
	const stats = [
		{
			number: '1 Million',
			label: 'Nearly 1M employers on the platform'
		},
		{
			number: '10,000+',
			label: 'students already using JobBeta'
		},
		{
			number: '20,000',
			label: 'Job applications submitted'
		}
	];
</script>

<section class="relative h-auto w-full overflow-hidden py-16 sm:py-20 lg:h-[1057px] lg:py-0">
	<!-- Dark Background -->
	<div
		class="absolute left-0 top-0 h-[400px] w-full overflow-hidden bg-[#110d21] sm:h-[450px] lg:h-[545px]"
	>
		<!-- Heading -->
		<div
			class="absolute left-1/2 top-[80px] w-full max-w-[913px] -translate-x-1/2 px-4 text-center sm:top-[100px] lg:top-[149px]"
		>
			<h2
				class="text-[32px] font-bold leading-tight text-white sm:text-[40px] lg:text-5xl lg:leading-[68px]"
				style="font-family: var(--font-geist); letter-spacing: -0.005em;"
			>
				The Numbers Don't Lie<br />(But Ours Are Just Getting Started)
			</h2>
		</div>
	</div>

	<!-- Stats Card -->
	<div
		class="relative z-10 mx-auto mt-[220px] w-full max-w-7xl px-4 sm:mt-[250px] lg:absolute lg:left-1/2 lg:top-[365px] lg:mt-0 lg:-translate-x-1/2 lg:px-0"
	>
		<div class="overflow-hidden rounded-2xl bg-white">
			<div
				class="flex flex-col items-center justify-center gap-8 px-6 py-12 sm:px-12 sm:py-16 lg:flex-row lg:gap-10 lg:px-[102px] lg:py-[72px]"
			>
				{#each stats as stat, index}
					<div class="flex w-full flex-col items-start justify-center gap-1.5 lg:w-auto">
						<div
							class="self-stretch text-left text-[40px] font-bold leading-tight text-[#110d21] sm:text-[50px] lg:text-[55px] lg:leading-[82px]"
							style="font-family: var(--font-geist); letter-spacing: -0.005em;"
						>
							{stat.number}
						</div>
						<div
							class="text-center text-base font-normal leading-relaxed text-[rgba(42,44,44,0.66)] sm:text-lg lg:text-lg lg:leading-[27px]"
							style="font-family: var(--font-geist); letter-spacing: -0.005em;"
						>
							{stat.label}
						</div>
					</div>
					{#if index < stats.length - 1}
						<div class="hidden h-32 w-0 border-l-2 border-[rgba(42,44,44,0.23)] lg:block"></div>
					{/if}
				{/each}
			</div>
		</div>
	</div>

	<!-- Testimonial -->
	<div
		class="relative z-10 mx-auto mt-12 w-full max-w-3xl px-4 text-center sm:mt-16 lg:absolute lg:left-1/2 lg:top-[751px] lg:mt-0 lg:w-[558px] lg:-translate-x-1/2 lg:px-0"
	>
		<div class="relative">
			<!-- Opening Quote -->
			<div class="absolute -left-8 -top-4 sm:-left-12 lg:-left-[120px] lg:-top-[34px]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 290 290"
					class="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
					><path
						d="M22.12 145v97.65h97.65V145H70.95c0-26.92 21.9-48.82 48.82-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65zm245.76-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65v97.65h97.65V145h-48.82c-.01-26.92 21.89-48.82 48.82-48.82z"
						fill="#22347F"
					></path></svg
				>
			</div>

			<!-- Quote Text -->
			<p
				class="relative text-[20px] font-light leading-relaxed text-[#2a2c2c] sm:text-[24px] lg:text-[32px]"
				style="font-family: var(--font-geist); letter-spacing: -0.005em;"
			>
				I didn't just get job alerts — I got options that made sense for where I am."
			</p>

			<!-- Closing Quote -->
			<div class="absolute -bottom-4 -right-8 sm:-right-12 lg:-bottom-[4px] lg:-right-[150px]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 290 290"
					class="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
					style="transform: rotate(180deg);"
					><path
						d="M22.12 145v97.65h97.65V145H70.95c0-26.92 21.9-48.82 48.82-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65zm245.76-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65v97.65h97.65V145h-48.82c-.01-26.92 21.89-48.82 48.82-48.82z"
						fill="#22347F"
					></path></svg
				>
			</div>
		</div>

		<!-- Author -->
		<p
			class="mt-8 text-base font-bold leading-relaxed text-[#2a2c2c] sm:text-lg lg:mt-[148px] lg:text-lg lg:leading-[27px]"
			style="font-family: var(--font-geist); letter-spacing: -0.005em;"
		>
			Olamide T., Communications Student
		</p>
	</div>
</section>
