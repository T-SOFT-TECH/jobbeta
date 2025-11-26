<script lang="ts">
	// Career Centers Testimonials Section

	let { testimonials = [] } = $props();

	// Fallback if no data provided
	const defaultTestimonials = [
		{
			quote:
				'Partnering with JobBeta has helped our students secure quality internships and first jobs — all while reducing our administrative load.',
			author: 'Career Services Manager',
			company: 'XYZ University'
		},
		{
			quote:
				'JobBeta transformed how we connect with talented graduates. The platform is intuitive and delivers exceptional results.',
			author: 'HR Director',
			company: 'Tech Solutions Inc'
		},
		{
			quote:
				"We've seen a 40% increase in qualified candidates since using JobBeta. It's become an essential part of our recruitment strategy.",
			author: 'Talent Acquisition Lead',
			company: 'Global Enterprises'
		},
		{
			quote:
				"The quality of candidates from JobBeta is outstanding. We've hired some of our best team members through this platform.",
			author: 'Recruitment Manager',
			company: 'Innovation Corp'
		},
		{
			quote:
				'JobBeta streamlined our campus recruitment process and helped us build strong relationships with universities nationwide.',
			author: 'Head of Campus Relations',
			company: 'Finance Group'
		},
		{
			quote:
				'Our partnership with JobBeta has been transformative. The platform connects us with motivated, skilled graduates ready to make an impact.',
			author: 'People Operations Director',
			company: 'Creative Agency'
		}
	];

	const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

	let currentSlide = $state(0);
	const totalSlides = displayTestimonials.length;

	function nextSlide() {
		currentSlide = (currentSlide + 1) % totalSlides;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
	}
</script>

<section class="w-full py-16 lg:py-20">
	<div class="page-container">
		<div class="bg-primary relative overflow-hidden rounded-[20px] p-8 lg:p-16">
			<!-- Section Header -->
			<div class="mb-12 flex flex-col gap-8 lg:flex-row lg:gap-16">
				<div class="flex-1">
					<div
						class="font-geist mb-2 text-base font-medium leading-6 text-white opacity-85"
						style="letter-spacing: -0.005em"
					>
						Success Stories
					</div>
					<h2
						class="font-geist text-3xl font-bold leading-tight text-white lg:text-[40px] lg:leading-[51px]"
						style="letter-spacing: -0.005em"
					>
						Employer Testimonials & Success Stories
					</h2>
				</div>
				<div class="flex-1">
					<p
						class="font-geist text-lg font-medium leading-relaxed text-white opacity-85 lg:text-xl lg:leading-[30px]"
						style="letter-spacing: -0.005em"
					>
						Hear from companies that have found exceptional talent through JobBeta. Join these
						successful employers – Post your job today!
					</p>
				</div>
			</div>

			<!-- Testimonial Card -->
			<div class="bg-secondary relative rounded-2xl px-8 py-16 lg:p-16">
				<!-- Carousel Controls -->
				<div class="flex flex-col items-center justify-end gap-4 py-16 lg:flex-row lg:items-center">
					<button
						onclick={prevSlide}
						class="flex h-[60px] w-[60px] items-center justify-center rounded-[50px] border border-solid border-white opacity-60 transition-all hover:bg-white hover:bg-opacity-10 hover:opacity-100"
						aria-label="Previous testimonial"
					>
						<svg class="h-[30px] w-[30px] rotate-90" viewBox="0 0 24 24" fill="none">
							<path
								d="M7 10L12 15L17 10"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
					<div
						class="font-geist text-xl leading-[30px] text-white opacity-75"
						style="letter-spacing: -0.005em"
					>
						{String(currentSlide + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
					</div>
					<button
						onclick={nextSlide}
						class="flex h-[60px] w-[60px] items-center justify-center rounded-[50px] border border-solid border-white bg-[rgba(248,243,255,0.20)] transition-all hover:bg-white hover:bg-opacity-30"
						aria-label="Next testimonial"
					>
						<svg class="h-[30px] w-[30px] -rotate-90" viewBox="0 0 24 24" fill="none">
							<path
								d="M7 10L12 15L17 10"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>

				<div class="flex flex-col items-start gap-8 lg:flex-row lg:items-center">
					<div class="flex-1">
						<blockquote
							class="font-geist mb-8 text-2xl font-normal leading-relaxed text-white lg:text-[32px] lg:leading-[38px]"
							style="letter-spacing: -0.005em"
						>
							"{displayTestimonials[currentSlide].quote}"
						</blockquote>
						<div class="font-geist text-base leading-6 text-[rgba(255,255,255,0.75)]">
							<span class="font-medium">{displayTestimonials[currentSlide].author}</span>,
							<span>{displayTestimonials[currentSlide].company}</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Background Decorative Circles - Top Left -->
			<div class="pointer-events-none absolute inset-0 overflow-hidden">
				<div
					class="absolute -left-32 -top-16 h-36 w-36 rounded-full border border-white opacity-20"
				></div>
				<div
					class="absolute -left-16 -top-8 h-36 w-36 rounded-full border border-white opacity-20"
				></div>
				<div
					class="absolute -left-24 -top-24 h-36 w-36 rounded-full border border-white opacity-20"
				></div>
				<div
					class="absolute -left-8 top-0 h-36 w-36 rounded-full border border-white opacity-20"
				></div>
				<div
					class="absolute -top-12 left-8 h-36 w-36 rounded-full border border-white opacity-20"
				></div>
				<div
					class="absolute -top-20 left-24 h-36 w-36 rounded-full border border-white opacity-20"
				></div>
			</div>
		</div>
	</div>
</section>
