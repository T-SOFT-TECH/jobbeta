<script>
	import { run } from 'svelte/legacy';

	/** @type {{}} */
	let { ...props } = $props();
</script>

<section class="relative w-full overflow-hidden bg-[#FDFBFF] py-20">
	<!-- Background Decorative Elements -->
	<div
		class="absolute right-0 top-0 h-[420px] w-[420px] -translate-y-1/3 translate-x-1/3 rounded-full bg-[#E6D2FF] opacity-20 blur-3xl"
	></div>

	<div
		class="mx-auto flex w-full max-w-[1369px] flex-col items-center justify-between gap-16 px-4 md:flex-row md:px-[58px]"
	>
		<!-- Text Content -->
		<div class="flex w-full flex-col items-start justify-center gap-8 md:w-1/2">
			<div class="flex flex-col gap-6">
				<div
					class="font-['Geist-Bold',_sans-serif] text-3xl font-bold leading-tight text-[#2a2c2c] md:text-[40px] md:leading-[60px]"
				>
					Join JobBeta Today <br />
					– It's Free!
				</div>
				<div
					class="max-w-[439px] font-['Geist-Medium',_sans-serif] text-lg font-medium leading-[30px] text-[rgba(42,44,44,0.70)] md:text-xl"
				>
					Start your job search today! Create your free account and explore opportunities tailored
					to your skills.
				</div>
			</div>

			<button
				class="flex w-full items-center justify-center rounded-[20px] bg-[#7502ff] px-6 py-4 transition-colors hover:bg-[#5e02cc] md:w-auto"
			>
				<span
					class="text-center font-['Geist-Bold',_sans-serif] text-base font-bold leading-6 text-white"
				>
					Sign Up- It’s Free
				</span>
			</button>
		</div>

		<!-- Floating Cards Visual -->
		<div class="relative mt-10 h-[400px] w-full md:mt-0 md:h-[500px] md:w-1/2">
			<!-- Card 1: No spam -->
			<div
				class="absolute right-[10%] top-[40%] flex w-[280px] rotate-[-0.137deg] items-center gap-[18px] rounded-[20px] border border-white bg-[#7502ff] p-2.5 shadow-lg md:w-[340px]"
			>
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
					<img src="/icons/how-it-works/group33.svg" class="h-6 w-6" alt="" />
				</div>
				<div class="font-['Geist-Bold',_sans-serif] text-base font-bold leading-6 text-white">
					No spam, real Jobs
				</div>
			</div>

			<!-- Card 2: AI Smart Job Matching -->
			<div
				class="absolute right-[5%] top-[10%] flex w-[280px] rotate-[1.6deg] items-center gap-[18px] rounded-[20px] border border-[#7502ff] bg-white p-2.5 shadow-lg md:w-[340px]"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#7502ff] bg-white"
				>
					<img src="/icons/how-it-works/group35.svg" class="h-6 w-6" alt="" />
				</div>
				<div class="font-['Geist-Bold',_sans-serif] text-base font-bold leading-6 text-[#7502ff]">
					Ai Smart Job Matching
				</div>
			</div>

			<!-- Card 3: Virtual Career Fairs -->
			<div
				class="absolute right-[15%] top-[-10%] flex w-[280px] rotate-[0.2deg] items-center gap-[18px] rounded-[20px] border border-white bg-[#7502ff] p-2.5 shadow-lg md:top-[0%] md:w-[340px]"
			>
				<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
					<img src="/icons/how-it-works/group37.svg" class="h-6 w-6" alt="" />
				</div>
				<div class="font-['Geist-Bold',_sans-serif] text-base font-bold leading-6 text-white">
					Virtual Career Fairs
				</div>
			</div>

			<!-- Card 4: Internships -->
			<div
				class="absolute right-[8%] top-[60%] flex w-[280px] rotate-[-0.45deg] items-center gap-[18px] rounded-[20px] border border-[#7502ff] bg-white p-2.5 shadow-lg md:w-[340px]"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#7502ff] bg-white"
				>
					<img src="/icons/how-it-works/group39.svg" class="h-6 w-6" alt="" />
				</div>
				<div class="font-['Geist-Bold',_sans-serif] text-base font-bold leading-6 text-[#7502ff]">
					Internships
				</div>
			</div>
		</div>
	</div>
</section>
