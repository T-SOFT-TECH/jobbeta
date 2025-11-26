<script>
	import { run } from 'svelte/legacy';

	/** @type {{}} */
	let { ...props } = $props();

	const testimonials = [
		{
			name: 'Amina',
			role: 'Graduate',
			image: '/images/students/Ellipse 229.png',
			quote: 'I found my first internship through JobBeta, and now I’m working full-time!'
		},
		{
			name: 'Tolu',
			role: 'Recent Graduate',
			image: '/images/students/Ellipse 229-1.png',
			quote: 'JobBeta connected me to employers in my field. The process was super easy!'
		},
		{
			name: 'Sarah',
			role: 'Undergraduate',
			image: '/images/students/Ellipse 229-2.png',
			quote: 'Omo, I got my first internship here. Mad o!'
		}
	];
</script>

<section class="relative w-full overflow-hidden px-4 py-20 md:px-0">
	<div
		class="relative mx-auto w-full max-w-[1369px] rounded-[20px] bg-[#7502ff] px-6 py-20 pb-32 md:px-[58px]"
	>
		<!-- Background Decorative Circles -->
		<div
			class="absolute left-[-50px] top-[-50px] h-[100px] w-[100px] rounded-full border border-white/20 md:left-[-100px] md:top-0 md:h-[148px] md:w-[148px]"
		></div>
		<div
			class="absolute right-[-20px] top-20 h-[80px] w-[80px] rounded-full border border-white/20 md:right-[-50px] md:h-[148px] md:w-[148px]"
		></div>
		<div
			class="absolute left-[20%] top-[-50px] hidden h-[148px] w-[148px] rounded-full border border-white/20 md:block"
		></div>

		<div class="relative z-10 flex flex-col items-center justify-center gap-12 md:gap-16">
			<!-- Header -->
			<div
				class="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
			>
				<div class="flex flex-col gap-2">
					<div
						class="font-['Geist-Medium',_sans-serif] text-lg font-medium leading-[30px] text-white/85 md:text-xl"
					>
						Success Stories
					</div>
					<div
						class="max-w-[594px] font-['Geist-Bold',_sans-serif] text-3xl font-bold leading-tight text-white md:text-[40px] md:leading-[51px]"
					>
						Read inspiring testimonials from users who successfully found jobs using our platform.
					</div>
				</div>
				<div
					class="max-w-[439px] font-['Geist-Medium',_sans-serif] text-lg font-medium leading-[30px] text-white/85 md:text-xl"
				>
					Hear from students and graduates who landed their dream jobs with JobBeta!. You could be
					next! Sign up and start applying today
				</div>
			</div>

			<!-- Testimonials Grid -->
			<div
				class="flex w-full flex-col items-center justify-center gap-5 md:flex-row md:items-stretch"
			>
				{#each testimonials as testimonial}
					<div
						class="flex w-full max-w-[404px] flex-col items-center justify-start gap-6 rounded-2xl border border-white bg-white p-6 md:h-[536px]"
					>
						<div class="flex w-full flex-row items-center justify-between">
							<div
								class="font-['Geist-Bold',_sans-serif] text-2xl font-bold leading-9 text-[#2a2c2c] md:text-[32px] md:leading-[48px]"
							>
								{testimonial.name}
							</div>
							<div class="text-sm font-normal leading-[21px] text-[rgba(42,44,44,0.90)]">
								{testimonial.role}
							</div>
						</div>
						<img
							class="h-[200px] w-[200px] object-cover md:h-[267px] md:w-[240px]"
							src={testimonial.image}
							alt={testimonial.name}
						/>
						<div
							class="w-full text-left font-['Geist-Regular',_sans-serif] text-lg font-normal leading-[30px] text-[#2a2c2c] md:text-xl"
						>
							"{testimonial.quote}"
						</div>
					</div>
				{/each}
			</div>

			<!-- Navigation / Pagination (Visual) -->
			<div class="flex w-full flex-row items-center justify-center md:justify-start md:gap-[42px]">
				<!-- Arrows and Counter -->
				<div class="flex flex-row items-center gap-[17px]">
					<button
						class="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white bg-transparent hover:bg-white/10 md:h-[60px] md:w-[60px]"
					>
						<img
							class="h-[24px] w-[24px] rotate-90 opacity-60 md:h-[30px] md:w-[30px]"
							src="/icons/how-it-works/keyboard-arrow-down0.svg"
							alt="Prev"
						/>
					</button>
					<div class="text-lg font-normal leading-[30px] text-white/80 md:text-xl">
						<span>01/</span><span class="text-white">06</span>
					</div>
					<button
						class="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white bg-[rgba(248,243,255,0.20)] hover:bg-[rgba(248,243,255,0.30)] md:h-[60px] md:w-[60px]"
					>
						<img
							class="h-[24px] w-[24px] -rotate-90 md:h-[30px] md:w-[30px]"
							src="/icons/how-it-works/keyboard-arrow-down0.svg"
							alt="Next"
						/>
					</button>
				</div>
			</div>

			<!-- Trusted By Badge -->
			<div
				class="absolute bottom-[-25px] left-1/2 flex w-[90%] max-w-[400px] -translate-x-1/2 flex-row items-center justify-center gap-4 rounded-[50px] bg-[#E6D2FF] px-4 py-3 shadow-lg md:w-auto md:gap-5 md:px-5"
			>
				<div class="flex -space-x-4">
					<img
						class="h-[40px] w-[40px] rounded-full border-2 border-white object-cover md:h-[50px] md:w-[50px]"
						src="/images/students/Frame 2085663361.png"
						alt="User 1"
					/>
					<img
						class="h-[40px] w-[40px] rounded-full border-2 border-white object-cover md:h-[50px] md:w-[50px]"
						src="/images/students/Frame 2085663325.png"
						alt="User 2"
					/>
					<img
						class="h-[40px] w-[40px] rounded-full border-2 border-white object-cover md:h-[50px] md:w-[50px]"
						src="/images/students/Frame 2085663327-1.png"
						alt="User 3"
					/>
				</div>
				<div
					class="font-['Geist-SemiBold',_sans-serif] text-xs font-semibold leading-[21px] text-[#7502ff] md:text-sm"
				>
					Trusted by 10,000+ Users
				</div>
			</div>
		</div>
	</div>
</section>
