<script>
	import { run } from 'svelte/legacy';

	/** @type {{}} */
	let { ...props } = $props();

	const benefits = [
		'Resume & Cover Letter Reviews',
		'Interview Preparation',
		'Networking & Mentorship',
		'Skill Certification Courses'
	];
</script>

<section class="relative w-full overflow-hidden bg-[#7502ff]">
	<div class="mx-auto flex w-full max-w-[1369px] flex-col items-center justify-between md:flex-row">
		<!-- Content Side -->
		<div
			class="relative z-10 flex flex-col items-start justify-center gap-12 px-4 py-20 md:w-1/2 md:pl-[129px]"
		>
			<div class="flex flex-col gap-1">
				<div
					class="font-['Geist-SemiBold',_sans-serif] text-4xl leading-[54px] font-semibold text-white"
				>
					Boost Your Career with JobBeta
				</div>
				<div
					class="max-w-[466px] font-['Lato-Regular',_sans-serif] text-base leading-6 font-normal text-white"
				>
					Looking for an edge in your job search? We offer exclusive career services to help you
					stand out!. Upgrade your career toolkit
				</div>
			</div>

			<button
				class="flex items-center justify-center rounded-[20px] bg-white px-2.5 py-4 transition-colors hover:bg-gray-100"
			>
				<span
					class="text-center font-['Lato-Bold',_sans-serif] text-base leading-6 font-bold text-[#2a2c2c]"
				>
					Upgrade Your Career Toolkit
				</span>
			</button>

			<!-- Benefits List -->
			<div class="flex flex-col gap-6">
				{#each benefits as benefit}
					<div class="flex flex-row items-center gap-2">
						<!-- Check Icon -->
						<div class="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 p-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="h-4 w-4 text-white"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
							</svg>
						</div>
						<div
							class="font-['Geist-Regular',_sans-serif] text-xl leading-[30px] font-normal text-white"
						>
							{benefit}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Image Side -->
		<div class="relative h-[500px] w-full md:h-[761px] md:w-1/2">
			<!-- Decorative Circles Overlay (Simplified) -->
			<div class="absolute top-0 right-0 bottom-0 left-0 z-0 opacity-20">
				<div
					class="absolute bottom-10 left-10 h-[185px] w-[185px] rounded-full border border-white"
				></div>
				<div
					class="absolute right-20 bottom-20 h-[185px] w-[185px] rounded-full border border-white"
				></div>
				<div
					class="absolute top-10 right-10 h-[185px] w-[185px] rounded-full border border-white"
				></div>
			</div>

			<img
				class="absolute top-0 left-0 h-full w-full object-cover"
				src="/images/students/Frame 2085663912.png"
				alt="Boost Career"
			/>
		</div>
	</div>
</section>
