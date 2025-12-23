<script>
	import { base } from '$app/paths';

	let activeIndex = $state(0);
	let innerWidth = $state(0);

	const testimonials = [
		{
			name: 'Amina',
			role: 'Graduate',
			image: '/images/students/Ellipse 229.png',
			quote: '"I found my first internship through JobBeta, and now I\'m working full-time!"'
		},
		{
			name: 'Tolu',
			role: 'Recent Graduate',
			image: '/images/students/Ellipse 229-1.png',
			quote:
				'"Betamatch was so smooth to use. I was able to easily match with employers in my field. The process was super easy!"'
		},
		{
			name: 'Sarah',
			role: 'Undergraduate',
			image: '/images/students/Ellipse 229-2.png',
			quote:
				'"I found so many other students in the same boat as myself and JobBeta made it very easy to connect."'
		},
		{
			name: 'David',
			role: 'Recent Graduate',
			image: '/images/students/Ellipse 229.png',
			quote:
				'"The AI matching feature is incredible. I got relevant job recommendations that matched my skills perfectly."'
		},
		{
			name: 'Funke',
			role: 'Undergraduate',
			image: '/images/students/Ellipse 229-1.png',
			quote:
				'"I was skeptical at first, but JobBeta connected me with my dream company within weeks!"'
		},
		{
			name: 'Michael',
			role: 'Graduate',
			image: '/images/students/Ellipse 229-2.png',
			quote:
				'"The platform made networking so easy. I built valuable connections that helped me land my role."'
		}
	];

	let cardsToShow = $derived(innerWidth < 768 ? 1 : 3);
	let cardWidth = $derived(innerWidth < 768 ? innerWidth - 64 : 404);
	let gap = 20;

	let totalSlides = $derived(testimonials.length);
	let maxIndex = $derived(Math.max(0, totalSlides - cardsToShow));

	function nextSlide() {
		if (activeIndex < maxIndex) {
			activeIndex++;
		} else {
			activeIndex = 0; // Loop back to start
		}
	}

	function prevSlide() {
		if (activeIndex > 0) {
			activeIndex--;
		} else {
			activeIndex = maxIndex; // Loop to end
		}
	}
</script>

<svelte:window bind:innerWidth />

<section class="relative w-full overflow-hidden px-4 py-20 md:px-0">
	<div
		class="relative mx-auto w-full max-w-[1369px] rounded-[20px] bg-[#7502ff] px-6 py-20 pb-32 md:px-[58px]"
	>
		<!-- Background Decorative Circles -->
		<div class="pointer-events-none absolute inset-0">
			<div
				class="absolute top-[-50px] left-[-50px] h-[100px] w-[100px] rounded-full border border-white/20 md:top-0 md:left-[-100px] md:h-[148px] md:w-[148px]"
			></div>
			<div
				class="absolute top-20 right-[-20px] h-[80px] w-[80px] rounded-full border border-white/20 md:right-[-50px] md:h-[148px] md:w-[148px]"
			></div>
			<div
				class="absolute top-[-50px] left-[20%] hidden h-[148px] w-[148px] rounded-full border border-white/20 md:block"
			></div>
			<div
				class="absolute right-[10%] bottom-[20%] hidden h-[100px] w-[100px] rounded-full border border-white/20 md:block"
			></div>
		</div>

		<div class="relative z-10 flex flex-col items-center justify-center gap-8 md:gap-12">
			<!-- Header -->
			<div
				class="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
			>
				<div class="flex flex-col gap-2">
					<div
						class="font-['Geist-Medium',_sans-serif] text-lg leading-[30px] font-medium text-white/85 md:text-xl"
					>
						Success Stories
					</div>
					<div
						class="max-w-[594px] font-['Geist-Bold',_sans-serif] text-3xl leading-tight font-bold text-white md:text-[40px] md:leading-[51px]"
					>
						Read inspiring testimonials from users who successfully found jobs using our platform.
					</div>
				</div>
				<div
					class="max-w-[439px] font-['Geist-Medium',_sans-serif] text-lg leading-[30px] font-medium text-white/85 md:text-xl"
				>
					Hear from students and graduates who landed their dream jobs with JobBeta!. You could be
					next! Sign up and start applying today
				</div>
			</div>

			<!-- Carousel Controls & Cards Container -->
			<div class="flex w-full flex-col gap-6 md:gap-[42px]">
				<!-- Navigation Controls (Right Aligned) -->
				<div class="flex items-center justify-end gap-[17px] self-end">
					<!-- Prev Button -->
					<button
						onclick={prevSlide}
						class="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white transition-colors hover:bg-white/10 md:h-[60px] md:w-[60px]"
					>
						<svg
							class="h-6 w-6 rotate-180 opacity-60 md:h-[30px] md:w-[30px]"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="white" />
						</svg>
					</button>

					<!-- Counter -->
					<div class="font-['Geist-Regular',_sans-serif] text-lg text-white/80 md:text-xl">
						<span class="text-white">0{activeIndex + 1}</span>/<span class="text-white/50"
							>0{totalSlides}</span
						>
					</div>

					<!-- Next Button -->
					<button
						onclick={nextSlide}
						class="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white bg-[rgba(248,243,255,0.20)] transition-colors hover:bg-[rgba(248,243,255,0.30)] md:h-[60px] md:w-[60px]"
					>
						<svg
							class="h-6 w-6 md:h-[30px] md:w-[30px]"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="white" />
						</svg>
					</button>
				</div>

				<!-- Cards Track -->
				<div class="w-full overflow-hidden">
					<div
						class="flex gap-5 transition-transform duration-500 ease-in-out"
						style="transform: translateX(-{activeIndex * (cardWidth + gap)}px);"
					>
						{#each testimonials as testimonial}
							<div
								class="relative shrink-0 overflow-hidden rounded-2xl border border-white bg-white px-6 py-12 md:h-[536px] md:px-[26px]"
								style="width: {cardWidth}px;"
							>
								<div class="flex w-full flex-col gap-6">
									<!-- Header: Name and Role -->
									<div class="flex flex-row items-center justify-between">
										<h3
											class="font-['Geist-Bold',_sans-serif] text-2xl leading-tight font-bold text-[#2a2c2c] md:text-[32px] md:leading-[48px]"
										>
											{testimonial.name}
										</h3>
										<span
											class="font-['Geist-Regular',_sans-serif] text-sm text-[rgba(42,44,44,0.90)]"
										>
											{testimonial.role}
										</span>
									</div>

									<!-- Image -->
									<div class="flex justify-center">
										<img
											src={testimonial.image}
											alt={testimonial.name}
											class="h-[200px] w-[200px] rounded-full object-cover md:h-[267px] md:w-[240px]"
										/>
									</div>

									<!-- Quote -->
									<p
										class="font-['Geist-Regular',_sans-serif] text-lg leading-[30px] font-normal text-[#2a2c2c] md:text-xl"
									>
										{testimonial.quote}
									</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Trusted By Badge - Below the purple container with overlap -->
		<div class="mt-20 flex justify-center">
			<div
				class="flex flex-row items-center justify-center gap-4 rounded-[50px] bg-gray-900 px-4 py-3 shadow-lg md:gap-5 md:px-5"
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
					class="font-['Geist-SemiBold',_sans-serif] text-xs leading-[21px] font-semibold text-white md:text-sm"
				>
					Trusted by 10,000+ Users
				</div>
			</div>
		</div>
	</div>
</section>
