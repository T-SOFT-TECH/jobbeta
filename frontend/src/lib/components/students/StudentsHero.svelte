<script>
	import { run } from 'svelte/legacy';
	import Animate from '$lib/components/Animate.svelte';

	/** @type {{}} */
	let { ...props } = $props();
</script>

<section class="relative w-full overflow-hidden bg-white">
	<!-- Hero Background with Conic Gradient -->
	<div
		class="absolute left-0 top-0 h-full w-full overflow-hidden"
		style="
      background: conic-gradient(
        from 77.98deg at 50% 50%,
        rgba(133, 31, 255, 1) 0%,
        rgba(117, 2, 255, 1) 89.05%,
        rgba(230, 210, 255, 1) 100%
      );
    "
	>
		<!-- Decorative Elements (Circles/Patterns) - Hidden on mobile for cleaner look or positioned relatively -->
		<div
			class="absolute right-[10%] top-[10%] hidden h-[140px] w-[282px] overflow-hidden bg-[rgba(255,255,255,0.10)] md:block"
		></div>
		<div
			class="absolute bottom-[20%] left-[20%] hidden h-[140px] w-[282px] overflow-hidden bg-[rgba(255,255,255,0.10)] md:block"
		></div>
		<div
			class="absolute left-[-5%] top-[5%] hidden h-[140px] w-[282px] overflow-hidden bg-[rgba(255,255,255,0.10)] md:block"
		></div>
	</div>

	<!-- Main Content Container -->
	<div
		class="relative z-10 mx-auto flex min-h-screen w-full max-w-[1369px] flex-col items-center justify-center px-4 pb-20 pt-32 md:px-10"
	>
		<!-- Text Content -->
		<Animate variant="bottom" duration={0.8}>
			<div class="flex w-full max-w-[805px] flex-col items-center justify-start gap-5 text-center">
				<h1
					class="font-['Geist-Bold',_sans-serif] text-4xl font-bold leading-tight tracking-[-0.005em] text-white md:text-[64px] md:leading-[73px]"
				>
					Your Career Starts Here with <span class="text-[#E6D2FF]">JobBeta!</span>
				</h1>
				<p
					class="font-['Geist-Regular',_sans-serif] text-lg font-normal leading-7 tracking-[-0.005em] text-white md:text-2xl md:leading-9"
				>
					JobBeta is your gateway to internships, entry-level jobs, and career opportunities. We
					connect students and graduates with top employers looking for fresh talent.
				</p>
			</div>
		</Animate>

		<!-- Features List -->
		<div
			class="mt-12 flex w-full max-w-[746px] flex-col items-center justify-center gap-4 md:flex-row md:justify-between"
		>
			<div class="flex shrink-0 flex-row items-center justify-start gap-2">
				<div class="relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-white/20 p-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-full w-full text-white"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
					</svg>
				</div>
				<div
					class="relative text-left font-['Geist-Regular',_sans-serif] text-lg font-normal leading-[30px] tracking-[-0.005em] text-white md:text-xl"
				>
					Thousands of Jobs placement
				</div>
			</div>
			<div class="flex shrink-0 flex-row items-center justify-start gap-2">
				<div class="relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-white/20 p-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-full w-full text-white"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
					</svg>
				</div>
				<div
					class="relative text-left font-['Geist-Regular',_sans-serif] text-lg font-normal leading-[30px] tracking-[-0.005em] text-white md:text-xl"
				>
					100% Free
				</div>
			</div>
			<div class="flex shrink-0 flex-row items-center justify-start gap-2">
				<div class="relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-white/20 p-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-full w-full text-white"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
					</svg>
				</div>
				<div
					class="relative text-left font-['Geist-Regular',_sans-serif] text-lg font-normal leading-[30px] tracking-[-0.005em] text-white md:text-xl"
				>
					Build Your Personal Brand
				</div>
			</div>
		</div>

		<!-- Search/Filter Section -->
		<div class="mt-16 w-full max-w-[1201px]">
			<!-- Tab -->
			<div
				class="mx-auto flex w-full max-w-[242px] flex-col items-center rounded-t-[20px] bg-white pt-4 md:mx-0 md:ml-[calc(50%-601px+100px)] lg:ml-20"
			>
				<div
					class="text-center font-['Geist-Bold',_sans-serif] text-xl font-bold leading-9 tracking-[-0.005em] text-[#7502ff] md:text-2xl"
				>
					Students
				</div>
				<div class="mt-2 h-1.5 w-full rounded-lg bg-[#7502ff]"></div>
			</div>

			<!-- Filter Box -->
			<div
				class="flex w-full flex-col items-center justify-between gap-6 rounded-b-[20px] rounded-tr-[20px] border-t border-[#E5E7EB] bg-white p-6 shadow-lg md:flex-row md:rounded-tr-none md:px-14 md:py-8"
			>
				<!-- Location -->
				<div class="flex w-full flex-col items-start justify-start gap-2 md:w-auto">
					<div
						class="text-left font-['Geist-Regular',_sans-serif] text-lg font-normal leading-[30px] tracking-[-0.005em] text-[#2A2C2C]/60 md:text-xl"
					>
						Location
					</div>
					<div class="flex w-full flex-row items-center justify-between gap-2 md:justify-start">
						<div class="flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-6 w-6 text-[#2A2C2C]"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								/>
							</svg>
							<div
								class="text-center font-['Geist-Regular',_sans-serif] text-lg font-normal leading-[30px] tracking-[-0.005em] text-[#2a2c2c] md:text-xl"
							>
								Lagos, Nigeria
							</div>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-6 w-6 text-[#2A2C2C]"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</div>
				</div>

				<!-- Divider (Hidden on mobile) -->
				<div class="hidden h-[79px] w-px bg-[#2A2C2C]/40 md:block"></div>
				<div class="h-px w-full bg-[#2A2C2C]/10 md:hidden"></div>

				<!-- Placement -->
				<div class="flex w-full flex-col items-start justify-start gap-2 md:w-auto">
					<div
						class="text-left font-['Geist-Regular',_sans-serif] text-lg font-normal leading-[30px] tracking-[-0.005em] text-[#2A2C2C]/60 md:text-xl"
					>
						Placement
					</div>
					<div class="flex w-full flex-row items-center justify-between gap-2 md:justify-start">
						<div class="flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-6 w-6 text-[#2A2C2C]"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
								/>
							</svg>
							<div
								class="text-center font-['Geist-Regular',_sans-serif] text-lg font-normal leading-[30px] tracking-[-0.005em] text-[#2a2c2c] md:text-xl"
							>
								Internship
							</div>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-6 w-6 text-[#2A2C2C]"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</div>
				</div>

				<!-- Divider (Hidden on mobile) -->
				<div class="hidden h-[79px] w-px bg-[#2A2C2C]/40 md:block"></div>
				<div class="h-px w-full bg-[#2A2C2C]/10 md:hidden"></div>

				<!-- Compensation -->
				<div class="flex w-full flex-col items-start justify-start gap-2 md:w-auto">
					<div
						class="text-left font-['Geist-Regular',_sans-serif] text-lg font-normal leading-[30px] tracking-[-0.005em] text-[#2A2C2C]/60 md:text-xl"
					>
						Compensation
					</div>
					<div class="flex w-full flex-row items-center justify-between gap-2 md:justify-start">
						<div class="flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-6 w-6 text-[#2A2C2C]"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<div
								class="text-center font-['Geist-Regular',_sans-serif] text-lg font-normal leading-[30px] tracking-[-0.005em] text-[#2a2c2c] md:text-xl"
							>
								N100,000 - N300,000
							</div>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-6 w-6 text-[#2A2C2C]"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</div>
				</div>

				<!-- Search Button -->
				<button
					class="flex w-full shrink-0 cursor-pointer flex-row items-center justify-center gap-2.5 rounded-[20px] bg-[#7502ff] py-4 transition-colors hover:bg-[#6002d1] md:w-[199px]"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6 text-white"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
					<div
						class="text-center font-['Geist-Bold',_sans-serif] text-base font-bold leading-6 tracking-[-0.005em] text-white"
					>
						Search
					</div>
				</button>
			</div>
		</div>
	</div>
</section>
