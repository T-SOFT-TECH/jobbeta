<script>
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import Animate from '$lib/components/Animate.svelte';

	import 'swiper/css';
	import 'swiper/css/effect-cards';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';

	// Active tab state for career process section
	let activeTab = $state('employer');

	// Active tab state for career journey section
	let careerTab = $state('student');

	// FAQ section state
	let faqTab = $state('employer');
	let openAccordion = $state(null); // Track which accordion item is open

	// Process steps data for Employer and Jobseeker tabs
	const processSteps = {
		employer: [
			{
				number: '01',
				title: 'Registration',
				description: 'Create a free account and get access to our resources and opportunities..'
			},
			{
				number: '02',
				title: 'Profile Completion',
				description:
					'Complete your profile to showcase your organization and what culture you represent.'
			},
			{
				number: '03',
				title: 'Job Vacancy',
				description:
					"Post all Your Job  Openings on your dashboard and let's get you the best talent."
			},
			{
				number: '04',
				title: 'Hire Qualified  Persons & Match Candidates',
				description: 'Connect with qualified candidates and hire the perfect person for the job.'
			}
		],
		jobseeker: [
			{
				number: '01',
				title: 'Create Account',
				description:
					'Sign up for free and unlock access to thousands of job opportunities tailored to your skills.'
			},
			{
				number: '02',
				title: 'Build Your Profile',
				description:
					'Upload your resume, showcase your skills, experience, and qualifications to stand out to employers.'
			},
			{
				number: '03',
				title: 'Browse & Apply',
				description:
					'Search through curated job listings, filter by your preferences, and apply to positions that match your career goals.'
			},
			{
				number: '04',
				title: 'Get Hired',
				description:
					'Connect with top employers, ace your interviews, and land your dream job with JobBeta.'
			}
		]
	};

	// Testimonials data
	const testimonials = [
		{
			name: 'Mr Ade',
			role: 'Business Owner',
			company: 'JobBeta',
			logo: '/icons/Logo.svg.svg',
			avatar: '/images/Ellipse178.png',
			rating: 5,
			categories: ['Business Owner', 'Startup', 'Small Business'],
			testimonial:
				"We found skilled interns through JobBeta who fit perfectly with our team and culture. The platform made it easy to identify candidates whose values, work ethic, and enthusiasm aligned with our company's goals. They've added real value from day one."
		},
		{
			name: 'Sarah Johnson',
			role: 'HR Manager',
			company: 'JobBeta',
			logo: '/icons/Logo.svg.svg',
			avatar: '/images/Ellipse179.png',
			rating: 5,
			categories: ['Enterprise', 'Tech Company', 'Remote Team'],
			testimonial:
				'JobBeta transformed our hiring process completely. We were able to find talented professionals across multiple departments in record time. The quality of candidates and the ease of communication through the platform exceeded our expectations.'
		},
		{
			name: 'David Chen',
			role: 'Startup Founder',
			company: 'JobBeta',
			logo: '/icons/Logo.svg.svg',
			avatar: '/images/Ellipse180.png',
			rating: 5,
			categories: ['Startup', 'Tech Industry', 'Growth Stage'],
			testimonial:
				'As a fast-growing startup, we needed to scale our team quickly without compromising on quality. JobBeta delivered exceptional talent that helped us meet our aggressive growth targets. The platform is intuitive and the support team is always responsive.'
		}
	];

	// FAQ data for each category
	const faqData = {
		employer: [
			{
				id: 1,
				question: 'How do I post a job on JobBeta?',
				answer:
					"After creating your employer account, navigate to your dashboard and click 'Post a Job'. Fill in the job details including title, description, requirements, and compensation. Your listing will be reviewed and go live within 24 hours, reaching thousands of qualified candidates."
			},
			{
				id: 2,
				question: 'What is the cost of hiring through JobBeta?',
				answer:
					'We offer flexible pricing plans to suit businesses of all sizes. You can post jobs for free with basic features, or upgrade to premium plans for enhanced visibility, advanced candidate filtering, and priority support. Contact our sales team for custom enterprise solutions.'
			},
			{
				id: 3,
				question: 'How do I find the right candidates?',
				answer:
					'JobBeta provides advanced filtering tools to help you find candidates that match your specific requirements. You can search by skills, experience level, education, location, and more. Our AI-powered matching system also recommends top candidates based on your job posting.'
			},
			{
				id: 4,
				question: 'Can I hire interns and entry-level talent?',
				answer:
					'Absolutely! JobBeta connects you with students and recent graduates looking for internships, apprenticeships, and entry-level positions. Our platform specializes in bridging the gap between companies and emerging talent, making it easy to find motivated individuals ready to grow with your organization.'
			},
			{
				id: 5,
				question: 'How long does the hiring process take?',
				answer:
					'The timeline varies based on your needs. Many employers start receiving qualified applications within 48 hours of posting. Our streamlined platform allows you to review applications, schedule interviews, and communicate with candidates efficiently, often completing hires within 2-4 weeks.'
			},
			{
				id: 6,
				question: 'Do you provide support for bulk hiring?',
				answer:
					'Yes! We have dedicated solutions for companies looking to hire multiple positions simultaneously. Our bulk hiring features include dedicated account management, customized workflows, and tools to manage high-volume applications efficiently. Contact us to discuss your specific hiring needs.'
			}
		],
		student: [
			{
				id: 1,
				question: 'How do I create a student account?',
				answer:
					"Creating a student account is easy! Simply click on the 'Create a Free Account as a Student' button and fill in your details. You'll get instant access to thousands of job opportunities and career resources."
			},
			{
				id: 2,
				question: 'Is the platform free for students?',
				answer:
					'Yes! JobBeta is completely free for students. We believe in empowering the next generation of professionals without any financial barriers.'
			},
			{
				id: 3,
				question: 'Can I apply for internships?',
				answer:
					'Absolutely! Our platform features a wide range of internship opportunities across various industries. You can filter jobs by type to find internships that match your interests.'
			},
			{
				id: 4,
				question: 'How do I build my profile?',
				answer:
					'After creating your account, navigate to your profile section. Upload your resume, add your skills, education, and any relevant experience. A complete profile increases your visibility to employers.'
			},
			{
				id: 5,
				question: 'What happens after I apply?',
				answer:
					"Once you apply, employers will review your application. If they're interested, they'll reach out to you directly through the platform. Make sure to check your notifications regularly!"
			},
			{
				id: 6,
				question: 'Can I save jobs for later?',
				answer:
					"Yes! You can save interesting job postings to review later. This helps you organize your job search and apply when you're ready."
			}
		],
		career: [
			{
				id: 1,
				question: 'What resources are available at the Career Center?',
				answer:
					'Our Career Center offers resume builders, interview preparation guides, career coaching resources, and industry insights to help you advance your professional journey.'
			},
			{
				id: 2,
				question: 'Do you offer career counseling?',
				answer:
					'Yes, we provide access to career counseling services to help you make informed decisions about your career path and professional development.'
			},
			{
				id: 3,
				question: 'Are there networking opportunities?',
				answer:
					'Absolutely! We host virtual networking events, industry meetups, and connect you with professionals in your field of interest.'
			},
			{
				id: 4,
				question: 'How can I improve my resume?',
				answer:
					'Use our resume builder tool with professional templates and expert tips. We also offer resume review services to help you stand out to employers.'
			},
			{
				id: 5,
				question: 'What industries do you cover?',
				answer:
					'We cover a wide range of industries including technology, healthcare, finance, education, marketing, and many more. Browse our job listings to explore opportunities.'
			},
			{
				id: 6,
				question: 'How do I prepare for interviews?',
				answer:
					'Check out our interview preparation guides, common interview questions, and tips from industry professionals. Practice makes perfect!'
			}
		]
	};

	const jobCards = [
		// Row 1
		{
			id: 1,
			title: '21st Century Health shop',
			category: 'Healthcare',
			jobType: 'Full Time',
			location: 'Abuja',
			salary: 'NGN 250,000 - 400,000'
		},
		{
			id: 2,
			title: 'Alpha-Plus Apartments 91',
			category: 'Engineering & Technology',
			jobType: 'Full Time',
			location: 'Benue',
			salary: 'NGN 250,000 - 400,000'
		},
		{
			id: 3,
			title: 'Alpha-Plus Apartments 91',
			category: 'Engineering & Technology',
			jobType: 'Full Time',
			location: 'Benue',
			salary: 'NGN 250,000 - 400,000'
		},
		{
			id: 4,
			title: 'Alpha-Plus Apartments 91',
			category: 'Engineering & Technology',
			jobType: 'Full Time',
			location: 'Benue',
			salary: 'NGN 250,000 - 400,000'
		},
		{
			id: 5,
			title: 'New Frontier Developments Limited',
			category: 'Banking, Finance & Insurance',
			jobType: 'Internship',
			location: 'Oyo',
			salary: 'NGN 250,000 - 400,000'
		},
		// Row 2
		{
			id: 6,
			title: 'New Frontier Developments Limited',
			category: 'Banking, Finance & Insurance',
			jobType: 'Internship',
			location: 'Abuja',
			salary: 'NGN 250,000 - 400,000'
		},
		{
			id: 7,
			title: 'AFARI Travels & Tours Limited',
			category: 'Tourism & Travel',
			jobType: 'Full Time',
			location: 'Abuja',
			salary: 'NGN 250,000 - 400,000'
		},
		{
			id: 8,
			title: 'AFG Partnership Ltd.',
			category: 'Banking, Finance & Insurance',
			jobType: 'Part-time',
			location: 'Abuja',
			salary: 'NGN 250,000 - 400,000'
		},
		{
			id: 9,
			title: 'Afrikings Homes Limited',
			category: 'Banking, Finance & Insurance',
			jobType: 'Full Time',
			location: 'Abuja',
			salary: 'NGN 250,000 - 400,000'
		},
		{
			id: 10,
			title: 'AFG Partnership Ltd.',
			category: 'Banking, Finance & Insurance',
			jobType: 'Part-time',
			location: 'Abuja',
			salary: 'NGN 250,000 - 400,000'
		},
		// Row 3
		{
			id: 11,
			title: 'New Frontier Developments Limited',
			category: 'Banking, Finance & Insurance',
			jobType: 'Full Time',
			location: 'Abuja',
			salary: 'NGN 250,000 - 400,000'
		},
		{
			id: 12,
			title: 'Afrocentric Global',
			category: 'Entertainment, Events & Sport',
			jobType: 'Full Time',
			location: 'Abuja',
			salary: 'NGN 250,000 - 400,000'
		},
		{
			id: 13,
			title: 'Agrifa International Limited',
			category: 'Agriculture, Fishing & Forestry',
			jobType: 'Full Time',
			location: 'Abuja',
			salary: 'NGN 250,000 - 400,000'
		},
		{
			id: 14,
			title: 'Air conditioning technologies(AC-TECH',
			category: 'Construction',
			jobType: 'Full Time',
			location: 'Abuja',
			salary: 'NGN 250,000 - 400,000'
		},
		{
			id: 15,
			title: 'AllFlavors Supreme Foods Limited',
			category: 'Banking, Finance & Insurance',
			jobType: 'Full Time',
			location: 'Abuja',
			salary: 'NGN 250,000 - 400,000'
		}
	];

	onMount(() => {
		// Register Swiper custom elements
		register();

		// Initialize events swiper with a small delay to ensure DOM is ready
		setTimeout(() => {
			const eventsSwiper = document.querySelector('.events-swiper');
			if (eventsSwiper) {
				Object.assign(eventsSwiper, {
					direction: 'vertical',
					slidesPerView: 1,
					spaceBetween: 30,
					mousewheel: false,
					grabCursor: true,
					pagination: {
						clickable: true
					}
				});
				eventsSwiper.initialize();
			}
		}, 100);

		const handleScroll = () => {
			const scrollY = window.scrollY;
			const jobSection = document.querySelector('.job-section');

			if (!jobSection) return;

			const sectionTop = jobSection.offsetTop;
			const sectionHeight = jobSection.offsetHeight;
			const windowHeight = window.innerHeight;

			// Calculate scroll progress within section
			const scrollProgress = (scrollY - sectionTop + windowHeight) / (sectionHeight + windowHeight);

			// Apply transform to rows
			const leftRows = document.querySelectorAll('.job-row-left');
			const rightRows = document.querySelectorAll('.job-row-right');

			leftRows.forEach((row) => {
				const translateX = -scrollProgress * 300;
				row.style.transform = `translateX(${translateX}px)`;
			});

			rightRows.forEach((row) => {
				const translateX = scrollProgress * 300 - 300;
				row.style.transform = `translateX(${translateX}px)`;
			});
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial call

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<svelte:head>
	<link rel="preload" as="image" href="/images/2148190729 1.png" />
</svelte:head>

<!-- Hero Section -->

<section
	class="relative w-full overflow-hidden py-12 md:py-20 lg:h-[1024px]"
	style="background: linear-gradient(237.007deg, rgba(238, 236, 252, 0.04) 15.896%, rgba(117, 2, 255, 0.04) 29.374%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)"
>
	<!-- Background Grid Pattern - Hidden on mobile -->
	<div class="absolute top-[132px] left-[54px] hidden lg:block">
		<div
			class="absolute top-[40px] left-[170px] h-[782px] w-px border-l border-[rgba(117,2,255,0.08)]"
		></div>
		<div
			class="absolute top-[40px] left-[338px] h-[782px] w-px border-l border-[rgba(117,2,255,0.08)]"
		></div>
		<div
			class="absolute top-[40px] left-[528px] h-[782px] w-px border-l border-[rgba(117,2,255,0.08)]"
		></div>
		<div
			class="absolute top-0 left-[696px] h-[822px] w-px border-l border-[rgba(117,2,255,0.08)]"
		></div>
		<div
			class="absolute top-[110px] left-[864px] h-[712px] w-px border-l border-[rgba(117,2,255,0.08)]"
		></div>
		<div
			class="absolute top-[110px] left-[1032px] h-[712px] w-px border-l border-[rgba(117,2,255,0.08)]"
		></div>
	</div>

	<div class="page-container relative">
		<div class="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:pt-24">
			<!-- Hero Content -->
			<Animate variant="left" duration={0.8}>
				<div class="flex flex-col gap-6 lg:max-w-[640px]">
					<div class="flex w-fit items-center gap-2 rounded-[20px] bg-white px-4 py-2 shadow-sm">
						<img src="/icons/School.svg" alt="School" class="h-6 w-6" />
						<p
							class="font-geist text-sm leading-[21px] font-normal tracking-[-0.07px] text-[#110d21]"
						>
							Level up your career.
						</p>
					</div>

					<div class="flex flex-col gap-6">
						<h1
							class="font-geist text-[32px] leading-[1.2] font-semibold tracking-[-0.02em] text-[#110d21] md:text-[40px] lg:text-[48px]"
						>
							Discover your next career opportunity and find the perfect candidate today.
						</h1>
						<p
							class="font-geist text-base leading-[1.6] font-normal tracking-[-0.01em] text-[rgba(17,13,33,0.6)] md:text-lg"
						>
							We're revolutionizing the way companies hire and how early-career talents find
							meaningful opportunities — from first internships to full-time roles.
						</p>
					</div>

					<div class="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
						<a
							href="/waitlist"
							class="flex items-center justify-center rounded-[20px] bg-[#7502ff] px-8 py-4 transition-colors hover:bg-[#6502dd]"
						>
							<p class="font-lato text-base leading-6 font-bold tracking-[-0.08px] text-white">
								Join Our waiting List
							</p>
						</a>
						<a
							href="/features"
							class="flex items-center justify-center rounded-[20px] border border-[#110d21] bg-white px-8 py-4 transition-colors hover:bg-gray-50"
						>
							<p
								class="font-lato text-base leading-6 font-extrabold tracking-[-0.08px] text-[#110d21]"
							>
								View Features
							</p>
						</a>
					</div>
				</div>
			</Animate>

			<!-- Hero Image -->
			<Animate variant="right" duration={0.8}>
				<div
					class="mt-8 h-[400px] w-full overflow-hidden rounded-[16px] md:h-[500px] lg:mt-0 lg:h-[580px] lg:w-[480px] lg:flex-shrink-0"
				>
					<img
						src="/images/2148190729 1.png"
						alt="Career professionals"
						class="h-full w-full object-cover"
					/>
				</div>
			</Animate>
		</div>
	</div>
</section>

<!-- Trusted Companies Section -->
<section class="w-full overflow-hidden bg-white py-12 md:py-16 lg:h-[256px]">
	<div class="page-container flex flex-col items-center gap-8 md:gap-12 lg:pt-[50px]">
		<Animate variant="fade" duration={0.6} delay={0.2}>
			<p
				class="max-w-4xl text-center font-geist text-lg leading-relaxed font-semibold tracking-[-0.12px] text-black md:text-xl md:leading-9 lg:text-2xl"
			>
				Trusted by over 5,000 Employers and thousands of students around the world
			</p>
		</Animate>

		<!-- Scrolling Logo Carousel -->
		<div class="relative w-full overflow-hidden">
			<div class="animate-scroll flex items-center gap-8 md:gap-12 lg:gap-16">
				<!-- First set of logos -->
				<img
					src="/icons/Logo.svg.svg"
					alt="Company logo"
					loading="lazy"
					class="h-[36px] w-auto flex-shrink-0 md:h-[40px] lg:h-[46px]"
				/>
				<img
					src="/icons/prodigy_education_logo.svg.svg"
					alt="Prodigy Education"
					loading="lazy"
					class="h-[40px] w-auto flex-shrink-0 md:h-[48px] lg:h-[56px]"
				/>
				<img
					src="/icons/missouri_higher_education_loan_authority_logo.svg.svg"
					alt="Missouri Higher Education"
					loading="lazy"
					class="h-[36px] w-auto flex-shrink-0 md:h-[40px] lg:h-[46px]"
				/>
				<img
					src="/images/image-1.png"
					alt="Company logo"
					loading="lazy"
					class="h-[36px] w-auto flex-shrink-0 md:h-[40px] lg:h-[46px]"
				/>
				<img
					src="/images/image-2.png"
					alt="Company logo"
					loading="lazy"
					class="h-[40px] w-auto flex-shrink-0 md:h-[48px] lg:h-[56px]"
				/>
				<img
					src="/images/image-3.png"
					alt="Company logo"
					loading="lazy"
					class="h-[36px] w-auto flex-shrink-0 md:h-[40px] lg:h-[46px]"
				/>
				<img
					src="/images/image-4.png"
					alt="Company logo"
					loading="lazy"
					class="h-[36px] w-auto flex-shrink-0 md:h-[40px] lg:h-[46px]"
				/>
				<img
					src="/images/image-5.png"
					alt="Company logo"
					loading="lazy"
					class="h-[50px] w-auto flex-shrink-0 md:h-[60px] lg:h-[72px]"
				/>

				<!-- Duplicate set for seamless loop -->
				<img
					src="/icons/Logo.svg.svg"
					alt="Company logo"
					loading="lazy"
					class="h-[36px] w-auto flex-shrink-0 md:h-[40px] lg:h-[46px]"
				/>
				<img
					src="/icons/prodigy_education_logo.svg.svg"
					alt="Prodigy Education"
					loading="lazy"
					class="h-[40px] w-auto flex-shrink-0 md:h-[48px] lg:h-[56px]"
				/>
				<img
					src="/icons/missouri_higher_education_loan_authority_logo.svg.svg"
					alt="Missouri Higher Education"
					loading="lazy"
					class="h-[36px] w-auto flex-shrink-0 md:h-[40px] lg:h-[46px]"
				/>
				<img
					src="/images/image-1.png"
					alt="Company logo"
					loading="lazy"
					class="h-[36px] w-auto flex-shrink-0 md:h-[40px] lg:h-[46px]"
				/>
				<img
					src="/images/image-2.png"
					alt="Company logo"
					loading="lazy"
					class="h-[40px] w-auto flex-shrink-0 md:h-[48px] lg:h-[56px]"
				/>
				<img
					src="/images/image-3.png"
					alt="Company logo"
					loading="lazy"
					class="h-[36px] w-auto flex-shrink-0 md:h-[40px] lg:h-[46px]"
				/>
				<img
					src="/images/image-4.png"
					alt="Company logo"
					loading="lazy"
					class="h-[36px] w-auto flex-shrink-0 md:h-[40px] lg:h-[46px]"
				/>
				<img
					src="/images/image-5.png"
					alt="Company logo"
					loading="lazy"
					class="h-[50px] w-auto flex-shrink-0 md:h-[60px] lg:h-[72px]"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Stats Section - #1 Recruitment -->
<section class="relative w-full overflow-hidden bg-white py-12 md:py-16 lg:h-[526px]">
	<div
		class="relative mx-auto overflow-hidden rounded-[30px] px-6 sm:px-10 md:rounded-[40px] md:px-16 lg:absolute lg:top-12 lg:left-1/2 lg:h-[434px] lg:w-[1255px] lg:-translate-x-1/2 lg:rounded-[50px] lg:px-0"
		style="background: linear-gradient(180deg, #110D21 0%, #1A1530 100%)"
	>
		<!-- Background Pattern -->
		<div class="absolute inset-0 opacity-[0.04]">
			<img
				src="/images/outline_flat_seamless_arabic_geometric_ornament_pattern 2.png"
				alt=""
				loading="lazy"
				class="h-full w-full object-cover"
			/>
		</div>

		<!-- Decorative Circles - Hidden on mobile/tablet -->
		<div class="absolute top-[-30px] right-[-20px] hidden xl:block">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="136"
				height="136"
				viewBox="0 0 136 136"
				fill="none"
				class="absolute top-0 right-[180px] flex-shrink-0"
			>
				<circle cx="68" cy="68" r="66.5" stroke="white" stroke-width="3" />
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="136"
				height="136"
				viewBox="0 0 136 136"
				fill="none"
				class="absolute top-0 right-[120px] flex-shrink-0"
			>
				<circle cx="68" cy="68" r="66.5" stroke="white" stroke-width="3" />
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="136"
				height="136"
				viewBox="0 0 136 136"
				fill="none"
				class="absolute top-0 right-[60px] flex-shrink-0"
			>
				<circle cx="68" cy="68" r="66.5" stroke="white" stroke-width="3" />
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="136"
				height="136"
				viewBox="0 0 136 136"
				fill="none"
				class="absolute top-0 right-0 flex-shrink-0"
			>
				<circle cx="68" cy="68" r="66.5" stroke="white" stroke-width="3" />
			</svg>
		</div>

		<div class="relative flex flex-col gap-8 py-8 md:py-10 lg:flex-row lg:gap-0 lg:py-0">
			<!-- Purple Card -->
			<div
				class="relative h-auto overflow-hidden rounded-[30px] bg-[#7502ff] p-6 text-white md:rounded-[40px] md:p-8 lg:absolute lg:top-[46px] lg:left-10 lg:h-[336px] lg:w-[339px] lg:rounded-[50px] lg:p-0"
			>
				<p
					class="font-geist text-[40px] leading-tight font-bold tracking-[-0.32px] md:text-[50px] lg:absolute lg:top-[50px] lg:left-[33px] lg:text-[64px] lg:leading-[96px]"
				>
					#1
				</p>
				<p
					class="mt-2 font-geist text-[28px] leading-tight font-bold tracking-[-0.2px] md:text-[32px] lg:absolute lg:top-[146px] lg:left-[33px] lg:mt-0 lg:text-[40px] lg:leading-[30px]"
				>
					Recruitment
				</p>
				<p
					class="mt-4 font-geist text-base leading-relaxed font-normal tracking-[-0.1px] md:text-lg lg:absolute lg:top-[204px] lg:left-[33px] lg:mt-0 lg:w-[269px] lg:text-xl lg:leading-[30px]"
				>
					We are one of the best Career builders for any type of job seeker and more.
				</p>
			</div>

			<!-- Stats -->
			<div
				class="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center lg:absolute lg:top-[146px] lg:left-[418px] lg:flex-nowrap lg:items-start lg:gap-10"
			>
				<!-- Stat 1 - Students -->
				<div
					class="flex flex-col gap-[6px] text-center text-white md:flex-1 md:text-left lg:w-[239px] lg:flex-initial"
				>
					<p
						class="font-geist text-[40px] leading-tight font-bold tracking-[-0.275px] md:text-[48px] lg:text-[55px] lg:leading-[82px]"
					>
						500k+
					</p>
					<p
						class="font-geist text-base leading-relaxed font-normal tracking-[-0.09px] md:text-lg lg:leading-[27px]"
					>
						Fresh Gradute and student trust on JobBeta
					</p>
				</div>

				<!-- Vertical Divider -->
				<div class="hidden bg-white/20 md:block md:h-auto md:w-px lg:h-[140px]"></div>

				<!-- Stat 2 - Hired -->
				<div
					class="flex flex-col gap-[6px] text-center text-white md:flex-1 md:text-left lg:w-[225px] lg:flex-initial"
				>
					<p
						class="font-geist text-[40px] leading-tight font-bold tracking-[-0.25px] md:text-[48px] lg:text-[50px] lg:leading-[82px]"
					>
						3,000+
					</p>
					<div
						class="font-geist text-base leading-relaxed font-normal tracking-[-0.09px] md:text-lg lg:leading-[27px]"
					>
						<p class="mb-0">Hired yearly on</p>
						<p>Jobbeta</p>
					</div>
				</div>

				<!-- Vertical Divider -->
				<div class="hidden bg-white/20 md:block md:h-auto md:w-px lg:h-[140px]"></div>

				<!-- Stat 3 - Employers -->
				<div
					class="flex flex-col gap-[6px] text-center text-white md:flex-1 md:text-left lg:w-[190px] lg:flex-initial"
				>
					<p
						class="font-geist text-[40px] leading-tight font-bold tracking-[-0.25px] md:text-[48px] lg:text-[50px] lg:leading-[82px]"
					>
						80k
					</p>
					<div
						class="font-geist text-base leading-relaxed font-normal tracking-[-0.09px] md:text-lg lg:leading-[27px]"
					>
						<p class="mb-0">Employers hire</p>
						<p>Talent onJobbeta</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Connecting Education Section -->
<section class="w-full overflow-hidden bg-white py-12 md:py-16 lg:h-[2115px] lg:py-0">
	<div
		class="page-container flex w-full flex-col items-center gap-6 pt-8 text-center md:gap-8 md:pt-12 lg:gap-[37px] lg:pt-[114px]"
	>
		<Animate variant="bottom" duration={0.8} delay={0.3}>
			<div
				class="font-geist text-2xl leading-tight font-semibold tracking-[-0.24px] text-black md:text-3xl md:leading-[1.3] lg:text-[48px] lg:leading-[60px]"
			>
				<p class="mb-0">Connecting Education with</p>
				<p>
					<span class="text-[#7502ff]">Real-World</span>
					<span class="text-[#110d21]"> Career Opportunities</span>
				</p>
			</div>
		</Animate>
		<Animate variant="fade" duration={0.6} delay={0.4}>
			<p
				class="max-w-[900px] font-geist text-base leading-relaxed font-normal tracking-[-0.1px] text-[#62717a] md:text-lg lg:text-xl lg:leading-[30px]"
			>
				JobBeta helps students grow their careers by easily connecting them to jobs, internships,
				and useful industry information all in one place.
			</p>
		</Animate>
	</div>

	<!-- Feature Cards -->
	<div class="page-container mt-8 flex w-full flex-col gap-4 md:mt-12 md:gap-6 lg:mt-[77px]">
		<!-- Row 1 -->
		<Animate variant="bottom" duration={0.6} delay={0.5}>
			<div class="flex flex-col justify-between gap-4 md:gap-6 lg:flex-row">
				<!-- Smart Job Matching -->
				<div
					class="relative min-h-[400px] w-full overflow-hidden rounded-[16px] bg-[#eaecf0] p-6 md:min-h-[480px] md:p-8 lg:h-[538px] lg:w-[545px] lg:p-0"
				>
					<div class="flex flex-col gap-4 md:gap-5 lg:absolute lg:top-[60px] lg:left-[37px]">
						<p
							class="font-geist text-sm leading-relaxed font-normal tracking-[-0.1px] text-[#62717a] md:text-base lg:text-xl lg:leading-[30px]"
						>
							RESOURCES FOR CONTINUOUS GROWTH
						</p>
						<p
							class="w-full font-geist text-2xl leading-tight font-medium tracking-[-0.16px] text-black md:text-3xl md:leading-[1.4] lg:w-[470px] lg:text-[32px] lg:leading-[48px]"
						>
							Smart Job Matching
						</p>
						<div
							class="w-full font-geist text-base leading-relaxed font-normal tracking-[-0.1px] text-[#62717a] md:text-lg lg:w-[422px] lg:text-xl lg:leading-[30px]"
						>
							<p class="mb-0">Find roles tailored to your skills & goals.</p>
							<p>Get automatically connected with relevant roles as they go live</p>
						</div>
					</div>
					<div
						class="absolute right-0 bottom-0 flex h-[220px] w-[320px] items-end justify-end md:h-[280px] md:w-[380px] lg:top-[242px] lg:left-[242px] lg:h-[296px] lg:w-[409px] lg:items-start lg:justify-start"
					>
						<img
							src="/education-illustration.svg"
							alt="Education"
							loading="lazy"
							class="h-full w-auto object-contain lg:h-full lg:w-full"
						/>
					</div>
				</div>

				<!-- Career Readiness -->
				<div
					class="relative min-h-[450px] w-full overflow-hidden rounded-[16px] bg-[#eaecf0] p-6 md:min-h-[500px] md:p-8 lg:h-[538px] lg:w-[617px] lg:p-0"
				>
					<!-- Decorative Icons on Left Side - Scaled for mobile -->
					<div
						class="absolute top-[40px] left-[10px] md:top-[70px] md:left-[20px] lg:top-[109px] lg:left-[25px]"
					>
						<img
							src="/icons/Group1321314375.svg"
							alt=""
							loading="lazy"
							class="h-[25px] w-[120px] md:h-[35px] md:w-[160px] lg:h-[45px] lg:w-[209px]"
						/>
					</div>
					<div
						class="absolute top-[10px] left-[10px] md:top-[30px] md:left-[20px] lg:top-[49px] lg:left-[25px]"
					>
						<img
							src="/icons/Group1321314375.svg"
							alt=""
							loading="lazy"
							class="h-[25px] w-[120px] md:h-[35px] md:w-[160px] lg:h-[45px] lg:w-[209px]"
						/>
					</div>
					<div
						class="absolute top-[70px] left-[10px] md:top-[110px] md:left-[20px] lg:top-[168px] lg:left-[25px]"
					>
						<img
							src="/icons/Group1321314375.svg"
							alt=""
							loading="lazy"
							class="h-[25px] w-[120px] md:h-[35px] md:w-[160px] lg:h-[45px] lg:w-[209px]"
						/>
					</div>
					<div
						class="absolute top-[15px] left-[140px] md:top-[35px] md:left-[200px] lg:top-[56px] lg:left-[268px]"
					>
						<img
							src="/icons/Group.svg"
							alt=""
							loading="lazy"
							class="h-[20px] w-[20px] md:h-[26px] md:w-[26px] lg:h-[32px] lg:w-[32px]"
						/>
					</div>

					<!-- Profile Cards - Scaled for mobile -->
					<div
						class="absolute top-[10px] right-[30px] h-[140px] w-[160px] overflow-hidden rounded-[8px] bg-[#7502ff] md:top-[20px] md:right-[50px] md:h-[170px] md:w-[190px] lg:top-[30px] lg:right-[63px] lg:h-[203px] lg:w-[230px]"
					>
						<img
							src="/images/pattern-bg.png"
							alt=""
							loading="lazy"
							class="absolute top-[-20px] left-[-30px] h-[130px] w-[200px] object-cover opacity-30 md:top-[-28px] md:left-[-45px] md:h-[160px] md:w-[240px] lg:top-[-34px] lg:left-[-55px] lg:h-[191px] lg:w-[286.57px]"
						/>
						<!-- Scrollbar indicator -->
						<div
							class="absolute top-[40px] right-[4px] h-[50px] w-[5px] rounded-[16px] bg-[#d9d9d9] md:top-[52px] md:right-[5px] md:h-[65px] md:w-[6px] lg:top-[62px] lg:right-[6px] lg:h-[80px] lg:w-[8px]"
						></div>
					</div>
					<div
						class="absolute top-[30px] right-[10px] h-[140px] w-[160px] overflow-hidden rounded-[8px] bg-white md:top-[40px] md:right-[30px] md:h-[170px] md:w-[190px] lg:top-[55px] lg:right-[41px] lg:h-[203px] lg:w-[230px]"
					>
						<p
							class="absolute top-[5px] left-[30px] font-geist text-sm leading-tight font-normal tracking-[-0.1px] text-[#62717a] md:top-[6px] md:left-[40px] md:text-base lg:top-[8px] lg:left-[50px] lg:text-xl lg:leading-[30px]"
						>
							Ready for Hire
						</p>
						<div
							class="absolute top-[35px] left-[10px] flex gap-1.5 md:top-[48px] md:left-[14px] md:gap-2 lg:top-[62px] lg:left-[17px] lg:gap-3"
						>
							<img
								src="/images/Ellipse178.png"
								alt="Profile"
								loading="lazy"
								class="h-[35px] w-[35px] rounded-full object-cover md:h-[42px] md:w-[42px] lg:h-[52px] lg:w-[52px]"
							/>
							<img
								src="/images/Ellipse175.png"
								alt="Profile"
								loading="lazy"
								class="h-[35px] w-[35px] rounded-full object-cover md:h-[42px] md:w-[42px] lg:h-[52px] lg:w-[52px]"
							/>
							<img
								src="/images/Ellipse177.png"
								alt="Profile"
								loading="lazy"
								class="h-[35px] w-[35px] rounded-full object-cover md:h-[42px] md:w-[42px] lg:h-[52px] lg:w-[52px]"
							/>
						</div>
						<div
							class="absolute top-[75px] left-[10px] flex gap-1.5 md:top-[98px] md:left-[14px] md:gap-2 lg:top-[126px] lg:left-[17px] lg:gap-3"
						>
							<img
								src="/images/Ellipse179.png"
								alt="Profile"
								loading="lazy"
								class="h-[35px] w-[35px] rounded-full object-cover md:h-[42px] md:w-[42px] lg:h-[52px] lg:w-[52px]"
							/>
							<img
								src="/images/Ellipse180.png"
								alt="Profile"
								loading="lazy"
								class="h-[35px] w-[35px] rounded-full object-cover md:h-[42px] md:w-[42px] lg:h-[52px] lg:w-[52px]"
							/>
							<img
								src="/images/Ellipse176.png"
								alt="Profile"
								loading="lazy"
								class="h-[35px] w-[35px] rounded-full object-cover md:h-[42px] md:w-[42px] lg:h-[52px] lg:w-[52px]"
							/>
						</div>
						<!-- Bottom right icon -->
						<div
							class="absolute right-[12px] bottom-[8px] md:right-[16px] md:bottom-[10px] lg:right-[21px] lg:bottom-[15px]"
						>
							<img
								src="/icons/Group1.svg"
								alt=""
								loading="lazy"
								class="h-[20px] w-[20px] md:h-[25px] md:w-[25px] lg:h-[31px] lg:w-[31px]"
							/>
						</div>
						<!-- Scrollbar indicator -->
						<div
							class="absolute top-[40px] right-[4px] h-[50px] w-[5px] rounded-[16px] bg-[#d9d9d9] md:top-[52px] md:right-[5px] md:h-[65px] md:w-[6px] lg:top-[62px] lg:right-[6px] lg:h-[80px] lg:w-[8px]"
						></div>
					</div>

					<!-- Text content - Positioned at bottom on mobile, absolute on desktop -->
					<div
						class="absolute right-6 bottom-6 left-6 flex flex-col gap-3 md:right-8 md:bottom-8 md:left-8 md:gap-4 lg:top-[314px] lg:right-auto lg:bottom-auto lg:left-[156px] lg:gap-5"
					>
						<p
							class="font-geist text-xs leading-relaxed font-normal tracking-[-0.1px] text-[#62717a] md:text-sm lg:text-xl lg:leading-[30px]"
						>
							SKILL DEVELOPMENT PROGRAMS
						</p>
						<p
							class="w-full font-geist text-xl leading-tight font-medium tracking-[-0.16px] text-black md:text-2xl md:leading-[1.4] lg:text-[32px] lg:leading-[48px]"
						>
							Career Readiness
						</p>
						<p
							class="w-full font-geist text-sm leading-relaxed font-normal tracking-[-0.1px] text-[#62717a] md:text-base lg:w-[422px] lg:text-xl lg:leading-[30px]"
						>
							Resources like resume-building tools, career counseling, and skill development
							programs.
						</p>
					</div>
				</div>
			</div>
		</Animate>

		<!-- Row 2: Industry Insights -->
		<Animate variant="left" duration={0.6} delay={0.6}>
			<div
				class="relative min-h-[500px] w-full overflow-hidden rounded-[16px] bg-[#eaecf0] p-6 md:min-h-[450px] md:p-8 lg:h-[466px] lg:p-0"
			>
				<!-- Checklist Icon - Responsive: centered on mobile, absolute on desktop -->
				<div
					class="mb-4 flex justify-center md:mb-5 lg:absolute lg:top-[96px] lg:left-[170px] lg:mb-0"
				>
					<img
						src="/icons/checklist-icon.svg"
						alt="Checklist"
						loading="lazy"
						class="h-[71px] w-[35px] md:h-[87px] md:w-[43px] lg:h-[103px] lg:w-[51px]"
					/>
				</div>
				<!-- Factory Illustration - Responsive: centered and scaled on mobile, absolute on desktop -->
				<div
					class="mb-6 flex justify-center md:mb-8 lg:absolute lg:bottom-0 lg:left-[82px] lg:mb-0"
				>
					<img
						src="/factory-illustration.svg"
						alt="Factory"
						loading="lazy"
						class="h-auto w-full max-w-[320px] md:max-w-[400px] lg:h-[248px] lg:w-[568px] lg:max-w-none"
					/>
				</div>
				<div class="flex flex-col gap-4 md:gap-5 lg:absolute lg:top-[31px] lg:right-[120px]">
					<p
						class="font-geist text-sm leading-relaxed font-normal tracking-[-0.1px] text-[#62717a] md:text-base lg:text-xl lg:leading-[30px]"
					>
						INFORMED DECISIONS
					</p>
					<p
						class="w-full font-geist text-2xl leading-tight font-medium tracking-[-0.16px] text-black md:text-3xl md:leading-[1.4] lg:w-[470px] lg:text-[32px] lg:leading-[48px]"
					>
						Industry Insights and Exposure For Students
					</p>
					<p
						class="w-full font-geist text-base leading-relaxed font-normal tracking-[-0.1px] text-[#62717a] md:text-lg lg:w-[422px] lg:text-xl lg:leading-[30px]"
					>
						Through partnership with top companies and industry leaders, JobBeta offers insights and
						exposure to various career path, helping students make informed decisions about their
						future aspirations.
					</p>
				</div>
				<a
					href="/student-signup"
					class="mt-6 flex w-full items-center justify-center gap-[10px] rounded-[20px] bg-white px-[10px] py-4 md:w-[280px] lg:absolute lg:right-[120px] lg:bottom-[15px] lg:mt-0 lg:w-[240px]"
				>
					<p class="font-lato text-base leading-6 font-bold tracking-[-0.08px] text-[#110d21]">
						Sign Up as a Student
					</p>
					<img src="/icons/Group1321314373.svg" alt="Arrow" loading="lazy" class="h-6 w-6" />
				</a>
			</div>
		</Animate>

		<!-- Row 3 -->
		<Animate variant="right" duration={0.6} delay={0.7}>
			<div class="flex flex-col justify-between gap-4 md:gap-6 lg:flex-row">
				<!-- Dynamic Profiles -->
				<div
					class="relative min-h-[500px] w-full overflow-hidden rounded-[16px] bg-[#eaecf0] p-6 md:min-h-[520px] md:p-8 lg:h-[538px] lg:w-[545px] lg:p-0"
				>
					<div class="flex flex-col gap-4 md:gap-5 lg:absolute lg:top-[60px] lg:left-[37px]">
						<p
							class="font-geist text-sm leading-relaxed font-normal tracking-[-0.1px] text-[#62717a] md:text-base lg:text-xl lg:leading-[30px]"
						>
							TALENT SHOWCASE AND ASSESSMENT
						</p>
						<p
							class="w-full font-geist text-2xl leading-tight font-semibold tracking-[-0.16px] text-black md:text-3xl md:leading-[1.4] lg:w-[470px] lg:text-[32px] lg:leading-[48px]"
						>
							Dynamic Profiles & Portfolios
						</p>
						<p
							class="w-full font-geist text-base leading-relaxed font-normal tracking-[-0.1px] text-[#62717a] md:text-lg lg:w-[422px] lg:text-xl lg:leading-[30px]"
						>
							JobBeta offers a platform to showcase your coursework, projects, extracurricular
							activities, and other relevant experiences to highlight your skills and potential.
						</p>
					</div>
					<!-- Document Icons - Responsive -->
					<div
						class="relative mx-auto mt-8 h-[170px] w-[280px] md:mt-10 md:h-[180px] md:w-[300px] lg:absolute lg:top-[322px] lg:left-[184px] lg:mx-0 lg:mt-0 lg:h-[197px] lg:w-[323px]"
					>
						<div class="absolute bottom-0 left-0 h-[95%] w-[45%] md:h-[96%] md:w-[48%]">
							<img src="/icons/Group200.svg" alt="Document" loading="lazy" class="h-full w-full" />
						</div>
						<div
							class="absolute right-0 bottom-0 h-[95%] w-[45%] md:h-[96%] md:w-[48%]"
							style="transform: rotate(10deg) translateY(-5%);"
						>
							<img src="/icons/Group198.svg" alt="Document" loading="lazy" class="h-full w-full" />
						</div>
						<div
							class="absolute top-1/2 left-1/2 h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 md:h-[70px] md:w-[70px]"
						>
							<img
								src="/icons/Group1321314396.svg"
								alt="Checkmark"
								loading="lazy"
								class="h-full w-full"
							/>
						</div>
					</div>
				</div>

				<!-- Verified Opportunities -->
				<div
					class="relative min-h-[500px] w-full overflow-hidden rounded-[16px] bg-[#eaecf0] p-6 md:min-h-[520px] md:p-8 lg:h-[538px] lg:w-[617px] lg:p-0"
				>
					<!-- Complete illustration with world map, profiles, building and arrows - Responsive -->
					<div
						class="mb-6 flex justify-center md:mb-8 lg:absolute lg:top-[20px] lg:left-[105px] lg:mb-0"
					>
						<img
							src="/icons/undraw_global-team_8jok 1.svg"
							alt="Global Team Verified"
							loading="lazy"
							class="h-auto w-full max-w-[300px] md:max-w-[350px] lg:h-[266px] lg:w-[407px] lg:max-w-none"
						/>
					</div>

					<div class="flex flex-col gap-4 md:gap-5 lg:absolute lg:top-[314px] lg:left-[156px]">
						<p
							class="font-geist text-sm leading-relaxed font-normal tracking-[-0.1px] text-[#62717a] md:text-base lg:text-xl lg:leading-[30px]"
						>
							NO SCAMS, NO GHOSTING
						</p>
						<p
							class="w-full font-geist text-2xl leading-tight font-medium tracking-[-0.16px] text-black md:text-3xl md:leading-[1.4] lg:text-[32px] lg:leading-[48px]"
						>
							Verified Opportunities
						</p>
						<p
							class="w-full font-geist text-base leading-relaxed font-normal tracking-[-0.1px] text-[#62717a] md:text-lg lg:w-[422px] lg:text-xl lg:leading-[30px]"
						>
							Genuine opportunities from verified employers — no scams, no missed responses, just
							real jobs you can trust
						</p>
					</div>
				</div>
			</div>
		</Animate>
	</div>
</section>

<!-- Connect with Top Talent Section (Purple with Cards) -->
<section class="relative w-full overflow-hidden bg-[#7502ff] py-16 md:py-20 lg:py-24">
	<!-- Decorative Circle Pattern -->
	<div
		class="pointer-events-none absolute top-0 left-0 h-[80px] w-full"
		style="background-image: url('/icons/decorative-circles-pattern.svg'); background-repeat: repeat-x; background-size: auto 100%; background-position: top left; transform: translateY(-15%); opacity: 0.2;"
	></div>

	<div class="page-container relative">
		<!-- Hero Text -->
		<Animate variant="bottom" duration={0.8}>
			<div class="mx-auto mb-8 max-w-[939px] text-center text-white md:mb-12">
				<h2
					class="mb-6 font-geist text-3xl leading-tight font-semibold tracking-[-0.24px] md:mb-[37px] md:text-4xl md:leading-[1.3] lg:text-[48px] lg:leading-[60px]"
				>
					Connect with top talent and opportunities—all in one place.
				</h2>
				<p
					class="font-geist text-base leading-relaxed font-normal tracking-[-0.1px] md:text-lg lg:text-xl lg:leading-[30px]"
				>
					Tap into a growing network of nearly 1 million employers actively seeking early-career
					talent students grow their careers by easily connecting them to jobs, internships, and
					useful industry information all in one place.
				</p>
			</div>
		</Animate>

		<!-- CTA Button -->
		<Animate variant="scale" duration={0.5} delay={0.2}>
			<div class="mb-12 flex justify-center md:mb-16 lg:mb-20">
				<a
					href="/waitlist"
					class="flex w-full max-w-[299px] items-center justify-center gap-[10px] rounded-[20px] bg-white px-[10px] py-4"
				>
					<p class="font-lato text-base leading-6 font-bold tracking-[-0.08px] text-[#110d21]">
						Join Waiting list
					</p>
					<img src="/icons/arrow-right-alt.svg" alt="" loading="lazy" class="h-6 w-6" />
				</a>
			</div>
		</Animate>

		<!-- Cards Grid -->
		<div class="flex flex-col items-start justify-evenly gap-4 md:gap-[18px] lg:flex-row">
			<!-- Left Card - Customised Job Matching -->
			<div
				class="relative h-auto w-full overflow-hidden rounded-[16px] bg-[#eaecf0] p-6 md:p-8 lg:h-[579px] lg:w-[730px] lg:p-0"
			>
				<div
					class="flex flex-col gap-4 md:gap-5 lg:absolute lg:top-[24px] lg:left-[47px] lg:w-[515px]"
				>
					<p
						class="font-geist text-sm leading-relaxed font-normal tracking-[-0.1px] text-[#62717a] md:text-base lg:text-xl lg:leading-[30px]"
					>
						CUSTOMISED JOB MATCHING
					</p>
					<h3
						class="font-geist text-2xl leading-tight font-medium tracking-[-0.16px] text-black md:text-3xl md:leading-[1.4] lg:text-[32px] lg:leading-[48px]"
					>
						Facilitate Talent Matching with<br />Partner companies
					</h3>
					<p
						class="w-full font-geist text-base leading-relaxed font-normal tracking-[-0.1px] text-[#62717a] md:text-lg lg:w-[503px] lg:text-xl lg:leading-[30px]"
					>
						Match talent with employers who align with their skills, passions, and potential—helping
						both individuals and companies grow together.
					</p>
				</div>

				<!-- Join Waiting List Button -->
				<a
					href="/waitlist"
					class="mt-6 flex w-full items-center justify-center gap-[10px] rounded-[20px] bg-white px-[10px] py-4 md:mt-8 md:w-[240px] lg:absolute lg:top-[499px] lg:left-[47px] lg:mt-0"
				>
					<p class="font-lato text-base leading-6 font-bold tracking-[-0.08px] text-[#110d21]">
						Join Waiting list
					</p>
					<img src="/icons/arrow-right-alt.svg" alt="" loading="lazy" class="h-6 w-6" />
				</a>

				<!-- Email Mockup Card (Visible only on desktop) -->
				<div
					class="absolute top-[54px] left-[581px] hidden h-[522px] w-[452px] overflow-hidden rounded-[16px] bg-white lg:block"
				>
					<!-- Window dots -->
					<img
						src="/icons/window-dots.svg"
						alt=""
						loading="lazy"
						class="absolute top-[24px] left-[24px] h-[20px] w-[76px]"
					/>

					<!-- Congratulations Header -->
					<div class="absolute top-[86px] left-[24px] flex items-end gap-2">
						<img
							src="/images/Ellipse177.png"
							alt="Profile"
							class="h-[52px] w-[52px] rounded-full"
							loading="lazy"
						/>
						<div class="flex flex-col gap-[6px]">
							<p class="font-geist text-xl leading-[30px] font-bold tracking-[-0.1px] text-black">
								Congratulations!
							</p>
							<div class="flex items-center gap-[6px]">
								<p
									class="font-geist text-base leading-6 font-normal tracking-[-0.08px] text-[#110d21]"
								>
									to me
								</p>
								<img src="/icons/arrow-dropdown.svg" alt="" loading="lazy" class="h-6 w-6" />
							</div>
						</div>
					</div>

					<!-- Email Body -->
					<p
						class="absolute top-[194px] left-[28px] w-[384px] font-geist text-base leading-6 font-normal tracking-[-0.08px] text-[#110d21]"
					>
						Your profile has been selected for the 1 year internship program with <span
							class="font-bold">Innoham</span
						>. We look forward to having you on board.
					</p>

					<!-- Job Title -->
					<div class="absolute top-[315px] left-[28px] flex w-[245px] flex-col gap-[9px]">
						<p
							class="font-geist text-base leading-6 font-semibold tracking-[-0.08px] text-[#110d21]"
						>
							Job Title (Internship at Innoham)
						</p>
						<p
							class="font-geist text-sm leading-[21px] font-normal tracking-[-0.07px] text-[#110d21]"
						>
							Engineer III
						</p>
					</div>

					<!-- Signature -->
					<div class="absolute top-[444px] left-[304px] flex flex-col gap-[9px]">
						<p
							class="font-geist text-base leading-6 font-semibold tracking-[-0.08px] text-[#110d21]"
						>
							Anthony Olajire
						</p>
						<p
							class="font-geist text-sm leading-[21px] font-normal tracking-[-0.07px] text-[#110d21]"
						>
							CTO
						</p>
					</div>
				</div>
			</div>

			<!-- Right Cards Column -->
			<div class="flex w-full flex-col gap-4 lg:w-[487px]">
				<!-- Smart Job Tracker Card -->
				<div
					class="relative h-auto w-full overflow-hidden rounded-[16px] bg-white p-6 md:p-8 lg:h-[235px] lg:p-0"
				>
					<p
						class="font-geist text-base leading-[30px] font-normal tracking-[-0.1px] text-[#110d21] uppercase md:text-lg lg:absolute lg:top-[23px] lg:left-[36px] lg:text-xl"
					>
						Smart Job Tracker
					</p>
					<p
						class="my-4 font-geist text-3xl leading-tight font-bold tracking-[-0.24px] text-[#110d21] md:text-4xl lg:absolute lg:top-[79px] lg:left-[36px] lg:my-0 lg:text-[48px] lg:leading-[30px]"
					>
						10,000+
					</p>

					<!-- Recommendation badges (desktop only) -->
					<div class="absolute top-[30px] left-[302px] hidden lg:block">
						<p
							class="font-geist text-sm leading-[21px] font-normal tracking-[-0.07px] text-[#110d21]"
						>
							Recommendations
						</p>
						<div class="mt-2 flex gap-2">
							<div class="h-[12px] w-[70px] rounded-[12px] bg-[rgba(234,236,240,0.82)]"></div>
							<div class="h-[12px] w-[70px] rounded-[12px] bg-[rgba(234,236,240,0.82)]"></div>
						</div>
						<div class="mt-2 h-[12px] w-[110px] rounded-[12px] bg-[rgba(234,236,240,0.82)]"></div>
					</div>

					<!-- Progress Bar -->
					<div class="relative mt-6 lg:mt-0">
						<!-- Progress bar background and fill -->
						<div class="relative w-full lg:absolute lg:top-[155px] lg:left-[36px] lg:w-[425px]">
							<div class="relative h-[12px] w-full rounded-[12px] bg-[#7502ff]">
								<!-- White circle slider at 81% position -->
								<div class="absolute top-1/2 -translate-y-1/2" style="left: 81%;">
									<div
										class="-ml-[15px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#7502ff]"
									>
										<div class="h-[16px] w-[16px] rounded-full bg-white"></div>
									</div>
									<!-- Tooltip -->
									<div class="absolute bottom-[40px] left-1/2 hidden -translate-x-1/2 lg:block">
										<div class="relative rounded-[4px] bg-[#110d21] px-[10px] py-[3px]">
											<p
												class="font-geist text-sm leading-[21px] font-normal tracking-[-0.07px] text-white"
											>
												81
											</p>
											<!-- Tooltip arrow -->
											<div
												class="absolute -bottom-[6px] left-1/2 h-0 w-0 -translate-x-1/2 border-t-[6px] border-r-[6px] border-l-[6px] border-t-[#110d21] border-r-transparent border-l-transparent"
											></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							class="mt-2 flex justify-between lg:absolute lg:top-[182px] lg:left-[36px] lg:w-[425px]"
						>
							<p
								class="font-geist text-base leading-6 font-normal tracking-[-0.08px] text-[#110d21]"
							>
								0%
							</p>
							<p
								class="font-geist text-base leading-6 font-normal tracking-[-0.08px] text-[#110d21]"
							>
								100%
							</p>
						</div>
					</div>
				</div>

				<!-- Bottom Row - Left Column (2 cards stacked) + Right Card -->
				<div class="flex flex-col gap-4 lg:flex-row">
					<!-- Left Column - Profile Avatars + Placement Growth stacked -->
					<div class="flex w-full flex-col gap-4 lg:w-[260px]">
						<!-- Profile Avatars Card -->
						<div
							class="relative flex h-auto w-full items-center gap-[13px] overflow-hidden rounded-[16px] bg-white p-5 md:p-[21px] lg:h-[86px]"
						>
							<div class="flex items-center">
								<img
									src="/images/Ellipse179.png"
									alt=""
									loading="lazy"
									class="-mr-[9px] h-10 w-10 rounded-full"
								/>
								<img
									src="/images/Ellipse178.png"
									alt=""
									loading="lazy"
									class="-mr-[9px] h-10 w-10 rounded-full"
								/>
								<img
									src="/images/Ellipse179.png"
									alt=""
									loading="lazy"
									class="-mr-[9px] h-10 w-10 rounded-full"
								/>
								<img
									src="/images/Ellipse180.png"
									alt=""
									loading="lazy"
									class="-mr-[9px] h-10 w-10 rounded-full"
								/>
								<div
									class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#7502ff] bg-white"
								>
									<p
										class="font-geist text-sm leading-[21px] font-semibold tracking-[-0.07px] text-[#7502ff]"
									>
										+20
									</p>
								</div>
							</div>
							<div class="flex items-center gap-[6px]">
								<img src="/icons/message-icon.svg" alt="" loading="lazy" class="h-6 w-6" />
								<p
									class="font-geist text-sm leading-[21px] font-semibold tracking-[-0.07px] text-[#62717a]"
								>
									5
								</p>
							</div>
						</div>

						<!-- Placement Growth Chart Card -->
						<div
							class="relative h-auto w-full overflow-hidden rounded-[16px] bg-white p-6 lg:h-[226px] lg:p-0"
						>
							<div class="mb-3 lg:absolute lg:top-[17px] lg:left-[17px] lg:mb-0">
								<p
									class="font-geist text-base leading-6 font-medium tracking-[-0.08px] text-[#110d21] uppercase"
								>
									Placement Growth<br />2024
								</p>
							</div>

							<!-- Chart and Month Labels Container -->
							<div
								class="flex w-full flex-col items-center gap-[6px] lg:absolute lg:top-[23px] lg:left-[23px] lg:w-[283px]"
							>
								<!-- Bar Chart - Using Grid for exact positioning (Desktop) / Flex for Mobile -->
								<div
									class="hidden grid-cols-[max-content] grid-rows-[max-content] leading-[0] lg:grid"
								>
									<div
										class="h-[77px] w-[40px] rounded-[8px] bg-[#110d21]"
										style="grid-area: 1 / 1; margin-left: 0; margin-top: 80px;"
									></div>
									<div
										class="h-[97px] w-[40px] rounded-[8px] bg-[#7502ff]"
										style="grid-area: 1 / 1; margin-left: 60px; margin-top: 60px;"
									></div>
									<div
										class="h-[115px] w-[40px] rounded-[8px] bg-[#110d21]"
										style="grid-area: 1 / 1; margin-left: 121px; margin-top: 42px;"
									></div>
									<div
										class="h-[141px] w-[40px] rounded-[8px] bg-[#7502ff]"
										style="grid-area: 1 / 1; margin-left: 173px; margin-top: 16px;"
									></div>
									<div
										class="h-[157px] w-[40px] rounded-[8px] bg-[#7502ff]"
										style="grid-area: 1 / 1; margin-left: 243px; margin-top: 0;"
									></div>
								</div>

								<!-- Mobile/Tablet Chart - Flex layout -->
								<div class="mb-1 flex h-[100px] items-end gap-3 md:h-[110px] lg:hidden">
									<div class="h-[55px] w-[30px] rounded-[8px] bg-[#110d21] md:h-[60px]"></div>
									<div class="h-[65px] w-[30px] rounded-[8px] bg-[#7502ff] md:h-[70px]"></div>
									<div class="h-[75px] w-[30px] rounded-[8px] bg-[#110d21] md:h-[80px]"></div>
									<div class="h-[90px] w-[30px] rounded-[8px] bg-[#7502ff] md:h-[95px]"></div>
									<div class="h-[100px] w-[30px] rounded-[8px] bg-[#7502ff] md:h-[110px]"></div>
								</div>

								<!-- Month labels -->
								<div
									class="flex items-center gap-[37px] font-geist text-sm leading-[21px] font-normal tracking-[-0.07px] text-[#110d21]"
								>
									<p>Jan</p>
									<p>Feb</p>
									<p>Mar</p>
									<p>Apr</p>
									<p>May</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Right Card - Talent Features (Full height) -->
					<div
						class="relative h-auto w-full flex-1 overflow-hidden rounded-[16px] bg-white p-6 lg:h-[328px] lg:w-[210px] lg:p-0"
					>
						<div class="mb-4 flex gap-[10px] lg:absolute lg:top-[20px] lg:left-[24px] lg:mb-0">
							<div class="h-4 w-4 rounded-[20px] bg-[#eaecf0]"></div>
							<div class="h-4 w-4 rounded-[50px] bg-[#eaecf0]"></div>
							<div class="h-4 w-4 rounded-[50px] bg-[#eaecf0]"></div>
						</div>

						<div class="flex flex-col gap-3 lg:absolute lg:top-[65px] lg:left-[24px]">
							<p
								class="font-geist text-sm leading-[21px] font-normal tracking-[-0.07px] text-black"
							>
								Talent Assessment
							</p>
							<p
								class="font-geist text-sm leading-[21px] font-semibold tracking-[-0.07px] text-black"
							>
								Talent Certification
							</p>
							<p
								class="font-geist text-sm leading-[21px] font-normal tracking-[-0.07px] text-black"
							>
								Interview scheduling
							</p>
						</div>

						<div class="mt-4 space-y-2 lg:absolute lg:top-[165px] lg:left-[22px] lg:mt-0">
							<div class="h-[12px] w-[108px] rounded-[12px] bg-[rgba(234,236,240,0.82)]"></div>
							<div class="flex gap-2">
								<div class="h-[12px] w-[96px] rounded-[12px] bg-[rgba(234,236,240,0.82)]"></div>
								<div class="h-[12px] w-[60px] rounded-[12px] bg-[rgba(234,236,240,0.82)]"></div>
							</div>
						</div>

						<!-- Calendar icon -->
						<div
							class="mt-6 flex justify-center lg:absolute lg:bottom-[24px] lg:left-[45px] lg:mt-0 lg:justify-start"
						>
							<img
								src="/icons/calendar-checkmarks.svg"
								alt=""
								class="h-[75px] w-[100px] lg:h-[87px] lg:w-[117px]"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Join Career Events Section -->
<section class="relative w-full overflow-hidden bg-white py-12 md:py-16 lg:py-24">
	<!-- Decorative Background (Top Right) -->
	<div
		class="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] opacity-40 md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px]"
	>
		<img src="/icons/Join-careers.svg" alt="" loading="lazy" class="h-full w-full object-contain" />
	</div>

	<div class="page-container w-full">
		<!-- Header Content -->
		<div class="relative z-10 mb-12 flex flex-col gap-6 text-center md:mb-16 md:gap-8 lg:mb-20">
			<h2
				class="mx-auto max-w-[900px] font-geist text-3xl leading-tight font-bold tracking-[-0.24px] text-black md:text-4xl md:leading-[1.3] lg:text-[48px] lg:leading-[60px]"
			>
				Join Career Events that connect you to opportunities.
			</h2>
			<p
				class="mx-auto max-w-[850px] font-geist text-base leading-relaxed font-normal tracking-[-0.1px] text-[#62717a] md:text-lg lg:text-xl lg:leading-[30px]"
			>
				Discover meaningful opportunities tailored to your goals, build valuable professional
				connections with industry leaders and peers, and gain the tools and insights you need to
				accelerate your career journey with confidence and purpose.
			</p>
			<div class="flex justify-center">
				<a
					href="/events"
					class="flex w-full items-center justify-center rounded-[20px] bg-[#110d21] px-6 py-4 md:w-auto"
				>
					<p class="font-lato text-base leading-6 font-bold tracking-[-0.08px] text-white">
						Learn More about JobBeta
					</p>
				</a>
			</div>
		</div>

		<!-- Event Cards Slider -->
		<div class="relative z-10 mx-auto w-full max-w-[1200px]">
			<swiper-container init="false" class="events-swiper" style="height: 694px; width: 100%;">
				<!-- Event Card 1 - Resume Workshop -->
				<swiper-slide>
					<div
						class="w-full overflow-hidden rounded-[32px] border-[6px] border-[#4169E1] bg-white shadow-lg"
					>
						<div class="grid h-full grid-cols-1 lg:grid-cols-2">
							<!-- Left Content -->
							<div
								class="order-2 flex flex-col justify-center p-6 md:p-8 lg:order-1 lg:py-12 lg:pr-6 lg:pl-14 xl:py-16 xl:pr-8 xl:pl-16"
							>
								<!-- Workshop Badge -->
								<div class="mb-4">
									<p class="font-geist text-sm font-semibold tracking-wide text-black uppercase">
										WORKSHOP
									</p>
								</div>

								<!-- Event Title -->
								<h3
									class="mb-4 font-geist text-xl leading-tight font-bold text-black md:text-xl lg:text-2xl lg:leading-[1.2]"
								>
									Resume Workshop: Land Your Dream Job
								</h3>

								<!-- Event Description -->
								<p class="mb-6 font-geist text-base leading-relaxed font-normal text-[#4a4a4a]">
									Land Your Dream Job is a hands-on session where you'll learn how to craft a
									powerful, results-driven resume that highlights your strengths, aligns with
									employer expectations, and gets past automated screening systems—giving you a
									competitive edge in today's job market.
								</p>

								<!-- Event Details -->
								<div class="mb-6 flex flex-row flex-wrap gap-x-4 gap-y-2 lg:flex-col lg:gap-3">
									<!-- Location -->
									<div class="flex items-center gap-3">
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
												fill="black"
											/>
										</svg>
										<p class="font-geist text-base leading-6 font-normal text-black">
											Virtual Event
										</p>
									</div>

									<!-- Attendees -->
									<div class="flex items-center gap-3">
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
												stroke="black"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<p class="font-geist text-base leading-6 font-normal text-black">
											85 attendees
										</p>
									</div>

									<!-- Time -->
									<div class="flex items-center gap-3">
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
												stroke="black"
												stroke-width="2"
											/>
											<path
												d="M12 6V12L16 14"
												stroke="black"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<p class="font-geist text-base leading-6 font-normal text-black">
											9:00 Am - 3:00 Pm
										</p>
									</div>

									<!-- Date -->
									<div class="flex items-center gap-3">
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="3"
												y="4"
												width="18"
												height="18"
												rx="2"
												stroke="black"
												stroke-width="2"
											/>
											<path
												d="M3 10H21M8 2V6M16 2V6"
												stroke="black"
												stroke-width="2"
												stroke-linecap="round"
											/>
										</svg>
										<p class="font-geist text-base leading-6 font-normal text-black">
											April 2,2025
										</p>
									</div>
								</div>

								<!-- Featured Companies -->
								<div class="flex flex-col gap-3">
									<div class="flex items-center gap-3">
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
												stroke="black"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<p class="font-geist text-base leading-6 font-semibold text-black">
											Featured Companies:
										</p>
									</div>
									<div class="flex flex-wrap gap-2">
										<span
											class="rounded-lg bg-[#f5f5f5] px-5 py-2 font-geist text-sm font-medium text-black"
											>Google</span
										>
										<span
											class="rounded-lg bg-[#f5f5f5] px-5 py-2 font-geist text-sm font-medium text-black"
											>IBM</span
										>
										<span
											class="rounded-lg bg-[#f5f5f5] px-5 py-2 font-geist text-sm font-medium text-black"
											>Salesforce</span
										>
										<span
											class="rounded-lg bg-[#f5f5f5] px-5 py-2 font-geist text-sm font-medium text-black"
											>Adobe</span
										>
										<span
											class="rounded-lg bg-[#f5f5f5] px-5 py-2 font-geist text-sm font-medium text-black"
											>+1 More</span
										>
									</div>
								</div>
							</div>

							<!-- Right Image -->
							<div class="order-1 h-[300px] md:h-[400px] lg:order-2 lg:h-full">
								<img
									src="/images/event-image%2060.png"
									alt="Workshop participants"
									class="h-full w-full rounded-r-[26px] object-cover"
								/>
							</div>
						</div>
					</div>
				</swiper-slide>

				<!-- Event Card 2 - Interview Mastery Bootcamp -->
				<swiper-slide>
					<div
						class="w-full overflow-hidden rounded-[60px] border-[8px] border-[#3296F8] shadow-lg"
					>
						<div class="grid h-full grid-cols-1 lg:grid-cols-2">
							<!-- Left Content -->
							<div
								class="relative order-2 flex-1 p-8 md:p-10 lg:order-1 lg:p-12"
								style="background-image: url('/images/outline_flat_seamless_arabic_geometric_ornament_pattern 2.png'); background-size: cover; background-position: 50%; background-repeat: no-repeat; background-color: #3F018A;"
							>
								<!-- Workshop Badge -->
								<div
									class="mb-6 inline-flex items-center rounded-full border border-white/30 px-4 py-2"
								>
									<p class="font-geist text-sm font-medium tracking-wide text-white uppercase">
										WORKSHOP
									</p>
								</div>

								<!-- Event Title -->
								<h3
									class="mb-6 font-geist text-xl leading-tight font-bold text-white md:text-xl lg:text-2xl lg:leading-[1.2]"
								>
									Interview Mastery Bootcamp
								</h3>

								<!-- Event Description -->
								<p
									class="mb-8 max-w-[500px] font-geist text-base leading-relaxed font-normal tracking-[-0.09px] text-white/80 md:text-lg lg:leading-[27px]"
								>
									The Interview Mastery Bootcamp is designed to equip you with practical techniques,
									expert insights, and personalized guidance to help you navigate every stage of the
									interview process—from preparation and mindset to answering tough questions with
									confidence—so you can make a lasting impression and secure your dream role.
								</p>

								<!-- Event Details -->
								<div class="mb-8 flex flex-row flex-wrap gap-x-4 gap-y-2 lg:flex-col lg:gap-4">
									<!-- Location -->
									<div class="flex items-center gap-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
												fill="white"
											/>
										</svg>
										<p
											class="font-geist text-base leading-6 font-normal tracking-[-0.08px] text-white"
										>
											learning center, lead city campus
										</p>
									</div>

									<!-- Registered -->
									<div class="flex items-center gap-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7 11.5L9.5 14L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
												stroke="white"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<p
											class="font-geist text-base leading-6 font-normal tracking-[-0.08px] text-white"
										>
											1085 Registered
										</p>
									</div>

									<!-- Time -->
									<div class="flex items-center gap-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
												stroke="white"
												stroke-width="1.5"
											/>
											<path
												d="M10 5V10L13 13"
												stroke="white"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<p
											class="font-geist text-base leading-6 font-normal tracking-[-0.08px] text-white"
										>
											9:00 Am - 3:00 Pm
										</p>
									</div>

									<!-- Date -->
									<div class="flex items-center gap-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M16 3H4C2.89543 3 2 3.89543 2 5V17C2 18.1046 2.89543 19 4 19H16C17.1046 19 18 18.1046 18 17V5C18 3.89543 17.1046 3 16 3Z"
												stroke="white"
												stroke-width="1.5"
											/>
											<path
												d="M2 8H18M6 1V5M14 1V5"
												stroke="white"
												stroke-width="1.5"
												stroke-linecap="round"
											/>
										</svg>
										<p
											class="font-geist text-base leading-6 font-normal tracking-[-0.08px] text-white"
										>
											Jan 12,2025
										</p>
									</div>
								</div>

								<!-- Featured Companies -->
								<div class="flex flex-col gap-4">
									<div class="flex items-center gap-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M3 9L10 2L17 9V17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V9Z"
												stroke="white"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<p
											class="font-geist text-base leading-6 font-normal tracking-[-0.08px] text-white"
										>
											Featured Companies:
										</p>
									</div>
									<div class="flex flex-wrap gap-2">
										<span
											class="rounded-full bg-white px-4 py-2 font-geist text-sm font-medium text-[#110d21]"
											>Google</span
										>
										<span
											class="rounded-full bg-white px-4 py-2 font-geist text-sm font-medium text-[#110d21]"
											>Apple</span
										>
										<span
											class="rounded-full bg-white px-4 py-2 font-geist text-sm font-medium text-[#110d21]"
											>Paystack</span
										>
										<span
											class="rounded-full bg-white px-4 py-2 font-geist text-sm font-medium text-[#110d21]"
											>Adobe</span
										>
										<span
											class="rounded-full bg-white px-4 py-2 font-geist text-sm font-medium text-[#110d21]"
											>+5 More</span
										>
									</div>
								</div>
							</div>

							<!-- Right Image -->
							<div class="order-1 h-[300px] md:h-[400px] lg:order-2 lg:h-full">
								<img
									src="/images/image 61.png"
									alt="Interview bootcamp participants"
									class="h-full w-full rounded-r-[52px] object-cover"
								/>
							</div>
						</div>
					</div>
				</swiper-slide>

				<!-- Event Card 3 - Tech Career Fair 2025 -->
				<swiper-slide>
					<div
						class="w-full overflow-hidden rounded-[60px] border-[8px] border-[#3296F8] shadow-lg"
					>
						<div class="grid h-full grid-cols-1 lg:grid-cols-2">
							<!-- Left Image -->
							<div class="h-[300px] md:h-[400px] lg:h-full">
								<img
									src="/images/third-slide.png"
									alt="Tech career fair"
									class="h-full w-full rounded-l-[52px] object-cover"
								/>
							</div>

							<!-- Right Content -->
							<div class="flex-1 bg-[#7502FF] p-8 md:p-10 lg:p-12">
								<!-- Career Fair Badge -->
								<div
									class="mb-6 inline-flex items-center rounded-full border border-white/30 px-4 py-2"
								>
									<p class="font-geist text-sm font-medium tracking-wide text-white uppercase">
										CAREER FAIR
									</p>
								</div>

								<!-- Event Title -->
								<h3
									class="mb-6 font-geist text-xl leading-tight font-bold text-white md:text-xl lg:text-2xl lg:leading-[1.2]"
								>
									Tech Career Fair 2025
								</h3>

								<!-- Event Description -->
								<p
									class="mb-8 max-w-[500px] font-geist text-base leading-relaxed font-normal tracking-[-0.09px] text-white/80 md:text-lg lg:leading-[27px]"
								>
									Connect with top tech employers, discover exciting job and internship
									opportunities, and gain insights from industry leaders—all in one dynamic event
									designed to launch and accelerate your career in tech.
								</p>

								<!-- Event Details -->
								<div class="mb-8 flex flex-row flex-wrap gap-x-4 gap-y-2 lg:flex-col lg:gap-4">
									<!-- Location -->
									<div class="flex items-center gap-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
												fill="white"
											/>
										</svg>
										<p
											class="font-geist text-base leading-6 font-normal tracking-[-0.08px] text-white"
										>
											Virtual Event
										</p>
									</div>

									<!-- Registered -->
									<div class="flex items-center gap-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7 11.5L9.5 14L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
												stroke="white"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<p
											class="font-geist text-base leading-6 font-normal tracking-[-0.08px] text-white"
										>
											2005 attendees
										</p>
									</div>

									<!-- Time -->
									<div class="flex items-center gap-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
												stroke="white"
												stroke-width="1.5"
											/>
											<path
												d="M10 5V10L13 13"
												stroke="white"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<p
											class="font-geist text-base leading-6 font-normal tracking-[-0.08px] text-white"
										>
											9:00 Am - 3:00 Pm
										</p>
									</div>

									<!-- Date -->
									<div class="flex items-center gap-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M16 3H4C2.89543 3 2 3.89543 2 5V17C2 18.1046 2.89543 19 4 19H16C17.1046 19 18 18.1046 18 17V5C18 3.89543 17.1046 3 16 3Z"
												stroke="white"
												stroke-width="1.5"
											/>
											<path
												d="M2 8H18M6 1V5M14 1V5"
												stroke="white"
												stroke-width="1.5"
												stroke-linecap="round"
											/>
										</svg>
										<p
											class="font-geist text-base leading-6 font-normal tracking-[-0.08px] text-white"
										>
											April 2,2025
										</p>
									</div>
								</div>

								<!-- Featured Companies -->
								<div class="flex flex-col gap-4">
									<div class="flex items-center gap-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M3 9L10 2L17 9V17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V9Z"
												stroke="white"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<p
											class="font-geist text-base leading-6 font-normal tracking-[-0.08px] text-white"
										>
											Featured Companies:
										</p>
									</div>
									<div class="flex flex-wrap gap-2">
										<span
											class="rounded-full bg-white px-4 py-2 font-geist text-sm font-medium text-[#110d21]"
											>Google</span
										>
										<span
											class="rounded-full bg-white px-4 py-2 font-geist text-sm font-medium text-[#110d21]"
											>IBM</span
										>
										<span
											class="rounded-full bg-white px-4 py-2 font-geist text-sm font-medium text-[#110d21]"
											>Salesforce</span
										>
										<span
											class="rounded-full bg-white px-4 py-2 font-geist text-sm font-medium text-[#110d21]"
											>Adobe</span
										>
										<span
											class="rounded-full bg-white px-4 py-2 font-geist text-sm font-medium text-[#110d21]"
											>+15 More</span
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</swiper-slide>
			</swiper-container>
		</div>
	</div>
</section>

<!-- Kick Start Your Career Section (Purple with Cards) -->
<section
	class="relative w-full overflow-hidden bg-[#7502ff] py-12 md:py-16 lg:py-24"
	style="background-image: url('/images/kick-start-your-career-bg.svg'); background-size: cover; background-position: center; background-repeat: no-repeat;"
>
	<div class="relative z-10 mx-auto w-full px-4 md:px-6">
		<!-- Header Content -->
		<div class="mb-8 flex flex-col gap-6 text-center md:mb-12 md:gap-8 lg:mb-16">
			<!-- Icon -->
			<div class="mb-4 flex justify-center">
				<img src="/icons/check.svg" alt="" class="h-12 w-12 md:h-16 md:w-16" />
			</div>

			<h2
				class="font-geist text-3xl leading-tight font-bold tracking-[-0.24px] text-white md:text-4xl md:leading-[1.3] lg:text-[48px] lg:leading-[60px]"
			>
				Kick start your career!
			</h2>
			<p
				class="mx-auto max-w-[800px] font-geist text-base leading-relaxed font-normal tracking-[-0.1px] text-white/90 md:text-lg lg:text-xl lg:leading-[30px]"
			>
				Stand out to top employers, access curated opportunities, and showcase your skills on a
				platform built to help you get noticed and hired faster.
			</p>

			<!-- Email Sign Up Form -->
			<div
				class="mx-auto mt-4 flex w-full max-w-[600px] flex-col items-center justify-center gap-4 sm:flex-row"
			>
				<input
					type="email"
					placeholder="Enter your email"
					class="w-full rounded-[12px] border-none px-6 py-4 font-geist text-base text-[#110d21] placeholder:text-[#62717a] sm:flex-1"
				/>
				<button
					class="w-full rounded-[12px] bg-white px-8 py-4 font-lato text-base font-bold text-[#110d21] sm:w-auto"
				>
					Sign Up
				</button>
			</div>
		</div>

		<!-- Three Cards Grid - Middle column is smaller -->
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-[1fr_0.85fr_1fr]">
			<!-- Card 1 - Platform Illustration -->
			<div class="flex flex-col gap-6 rounded-[24px] bg-white p-8 md:p-10">
				<!-- Illustration -->
				<div class="mb-4 flex items-center justify-center">
					<img src="/images/tree-1.svg" alt="" class="h-auto w-full max-w-[280px]" />
				</div>

				<p
					class="text-center font-geist text-sm leading-relaxed font-normal text-[#110d21] md:text-base"
				>
					JobBeta empowers students by providing a comprehensive platform that seamlessly connects
					students with employment opportunities, valuable internships, and insightful industry
					knowledge, fostering professional growth and career exploration.
				</p>

				<button
					class="mt-auto flex items-center justify-center gap-2 rounded-[16px] bg-[#7502ff] px-8 py-4 font-lato text-base font-bold text-white"
				>
					Learn More
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7.5 15L12.5 10L7.5 5"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>

			<!-- Card 2 - Event Recommendations -->
			<div class="flex flex-col gap-5 rounded-[24px] bg-white p-6 md:p-8">
				<!-- Notification Cards -->
				<div class="flex flex-col gap-3">
					<!-- Notification 1 -->
					<div class="flex gap-3 rounded-[12px] bg-[#F5F5F5] p-4">
						<div class="relative flex-shrink-0">
							<img src="/images/Ellipse177.png" alt="Jane Osteen" class="h-12 w-12 rounded-full" />
							<div
								class="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500"
							>
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 3L4.5 8.5L2 6"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
						<div class="flex-1">
							<div class="mb-2 flex items-start justify-between">
								<div>
									<p class="font-geist text-base leading-tight font-semibold text-[#110d21]">
										Jane Osteen
									</p>
									<p class="font-geist text-sm leading-tight text-[#62717a]">Fresh Graduate</p>
								</div>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="flex-shrink-0"
								>
									<path
										d="M12 22C10.9 22 10 21.1 10 20H14C14 21.1 13.1 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
										fill="#FF0000"
									/>
								</svg>
							</div>
							<p class="font-geist text-sm leading-snug text-[#110d21]">
								You have got a new Recommendation for Internship at <span class="font-semibold"
									>Bloom</span
								>
							</p>
						</div>
					</div>

					<!-- Notification 2 -->
					<div class="flex gap-3 rounded-[12px] bg-[#F5F5F5] p-4">
						<div class="relative flex-shrink-0">
							<img src="/images/Ellipse178.png" alt="Abraham Jude" class="h-12 w-12 rounded-full" />
							<div
								class="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500"
							>
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 3L4.5 8.5L2 6"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
						<div class="flex-1">
							<div class="mb-2 flex items-start justify-between">
								<div>
									<p class="font-geist text-base leading-tight font-semibold text-[#110d21]">
										Abraham Jude
									</p>
									<p class="font-geist text-sm leading-tight text-[#62717a]">
										Year 3 student at Bella
									</p>
								</div>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="flex-shrink-0"
								>
									<path
										d="M12 22C10.9 22 10 21.1 10 20H14C14 21.1 13.1 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
										fill="#FF0000"
									/>
								</svg>
							</div>
							<p class="font-geist text-sm leading-snug text-[#110d21]">
								You have got a new Recommendation for a full-time placement at <span
									class="font-semibold">Amazon</span
								>.
							</p>
						</div>
					</div>

					<!-- Notification 3 -->
					<div class="flex gap-3 rounded-[12px] bg-[#F5F5F5] p-4">
						<div class="relative flex-shrink-0">
							<img
								src="/images/Ellipse179.png"
								alt="Rachel obaloluwa"
								class="h-12 w-12 rounded-full"
							/>
							<div
								class="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500"
							>
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 3L4.5 8.5L2 6"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
						<div class="flex-1">
							<div class="mb-2 flex items-start justify-between">
								<div>
									<p class="font-geist text-base leading-tight font-semibold text-[#110d21]">
										Rachel obaloluwa
									</p>
									<p class="font-geist text-sm leading-tight text-[#62717a]">
										Year 1 student at LASU
									</p>
								</div>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="flex-shrink-0"
								>
									<path
										d="M12 22C10.9 22 10 21.1 10 20H14C14 21.1 13.1 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
										fill="#FF0000"
									/>
								</svg>
							</div>
							<p class="font-geist text-sm leading-snug text-[#110d21]">
								You have got a new Recommendation for Internship at <span class="font-semibold"
									>Bloom</span
								>
							</p>
						</div>
					</div>
				</div>

				<!-- Event Button -->
				<button
					class="rounded-[12px] bg-[#7502ff] px-6 py-3 font-geist text-sm font-semibold text-white"
				>
					Ongoing Events
				</button>

				<div class="flex flex-col gap-1">
					<p class="font-geist text-sm text-[#110d21]">
						<span class="font-normal">Gate Fee:</span> <span class="font-bold">free</span>
					</p>
					<p class="font-geist text-xl font-bold text-[#110d21]">Event for Cv optimization</p>
				</div>
			</div>

			<!-- Card 3 - Employment Success Rate (Two stacked cards) -->
			<div class="flex h-full flex-col gap-6">
				<!-- Top Card - Text Content -->
				<div class="flex flex-col gap-5 rounded-[24px] bg-white p-6 md:p-8" style="flex: 1 1 50%;">
					<!-- Title -->
					<h3 class="font-geist text-xl font-bold text-[#110d21]">Employment Success rate</h3>

					<!-- Stats Line -->
					<div class="flex items-baseline gap-2">
						<span class="font-geist text-6xl leading-none font-bold text-[#110d21]">5000+</span>
						<span class="font-geist text-base font-normal text-[#110d21]"
							>Students and fresh Graduates</span
						>
					</div>

					<!-- Description -->
					<p class="font-geist text-base leading-[1.6] font-normal text-[#110d21]">
						We connect skilled individuals with the right employers by understanding their
						strengths, aspirations, and career goals—ensuring a perfect match for long-term success.
					</p>
				</div>

				<!-- Bottom Card - Image Only (Same structure as top card) -->
				<div class="overflow-hidden rounded-[24px] bg-white" style="flex: 1 1 50%;">
					<img
						src="/images/Frame 2085663329.png"
						alt="Success handshake"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Curated Job Opportunities Section -->
<section class="job-section relative w-full overflow-hidden bg-[#1a1a2e] py-12 md:py-16 lg:py-24">
	<!-- Decorative SVG - Upper Left Corner -->
	<div
		class="pointer-events-none absolute top-0 left-0 h-[150px] w-[150px] scale-x-[-1] opacity-40 md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px]"
	>
		<img src="/icons/Group 1321314400.svg" alt="" class="h-full w-full object-contain" />
	</div>

	<!-- Decorative SVG - Upper Right Corner -->
	<div
		class="pointer-events-none absolute top-0 right-0 h-[150px] w-[150px] opacity-40 md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px]"
	>
		<img src="/icons/Group 1321314400.svg" alt="" class="h-full w-full object-contain" />
	</div>

	<div class=" relative z-10 w-full">
		<!-- Header -->
		<h2
			class="mb-12 text-center font-geist text-3xl leading-tight font-bold text-white md:mb-16 md:text-4xl lg:text-5xl"
		>
			Curated job and internship<br class="hidden md:block" /> opportunities tailored to your goals.
		</h2>

		<!-- Job Cards Grid - 3 rows with alternating scroll directions -->
		<div class="flex flex-col gap-4 overflow-hidden md:gap-5">
			<!-- Row 1 - Scrolls left -->
			<div class="job-row job-row-left flex gap-4 will-change-transform md:gap-5">
				{#each [...jobCards.slice(0, 5), ...jobCards.slice(0, 5)] as card}
					<div
						class="flex min-w-[240px] flex-shrink-0 flex-col gap-3 rounded-[16px] bg-white p-4 md:min-w-[260px] md:p-5"
					>
						<div class="flex items-start gap-2">
							<div class="h-9 w-9 flex-shrink-0 rounded-full bg-gray-200"></div>
							<div class="min-w-0 flex-1">
								<h3 class="line-clamp-2 font-geist text-sm leading-tight font-bold text-[#110d21]">
									{card.title}
								</h3>
								<p class="mt-1 font-geist text-xs text-[#62717a]">{card.category}</p>
							</div>
						</div>
						<div class="flex flex-wrap gap-2">
							<span class="rounded-full bg-[#F5F5F5] px-2 py-1 font-geist text-xs text-[#110d21]"
								>{card.jobType}</span
							>
							<span class="rounded-full bg-[#F5F5F5] px-2 py-1 font-geist text-xs text-[#110d21]"
								>{card.location}</span
							>
						</div>
						<p class="font-geist text-xs font-semibold text-[#110d21]">{card.salary}</p>
					</div>
				{/each}
			</div>

			<!-- Row 2 - Scrolls right -->
			<div class="job-row job-row-right flex gap-4 will-change-transform md:gap-5">
				{#each [...jobCards.slice(5, 10), ...jobCards.slice(5, 10)] as card}
					<div
						class="flex min-w-[240px] flex-shrink-0 flex-col gap-3 rounded-[16px] bg-white p-4 md:min-w-[260px] md:p-5"
					>
						<div class="flex items-start gap-2">
							<div class="h-9 w-9 flex-shrink-0 rounded-full bg-gray-200"></div>
							<div class="min-w-0 flex-1">
								<h3 class="line-clamp-2 font-geist text-sm leading-tight font-bold text-[#110d21]">
									{card.title}
								</h3>
								<p class="mt-1 font-geist text-xs text-[#62717a]">{card.category}</p>
							</div>
						</div>
						<div class="flex flex-wrap gap-2">
							<span class="rounded-full bg-[#F5F5F5] px-2 py-1 font-geist text-xs text-[#110d21]"
								>{card.jobType}</span
							>
							<span class="rounded-full bg-[#F5F5F5] px-2 py-1 font-geist text-xs text-[#110d21]"
								>{card.location}</span
							>
						</div>
						<p class="font-geist text-xs font-semibold text-[#110d21]">{card.salary}</p>
					</div>
				{/each}
			</div>

			<!-- Row 3 - Scrolls left -->
			<div class="job-row job-row-left flex gap-4 will-change-transform md:gap-5">
				{#each [...jobCards.slice(10, 15), ...jobCards.slice(10, 15)] as card}
					<div
						class="flex min-w-[240px] flex-shrink-0 flex-col gap-3 rounded-[16px] bg-white p-4 md:min-w-[260px] md:p-5"
					>
						<div class="flex items-start gap-2">
							<div class="h-9 w-9 flex-shrink-0 rounded-full bg-gray-200"></div>
							<div class="min-w-0 flex-1">
								<h3 class="line-clamp-2 font-geist text-sm leading-tight font-bold text-[#110d21]">
									{card.title}
								</h3>
								<p class="mt-1 font-geist text-xs text-[#62717a]">{card.category}</p>
							</div>
						</div>
						<div class="flex flex-wrap gap-2">
							<span class="rounded-full bg-[#F5F5F5] px-2 py-1 font-geist text-xs text-[#110d21]"
								>{card.jobType}</span
							>
							<span class="rounded-full bg-[#F5F5F5] px-2 py-1 font-geist text-xs text-[#110d21]"
								>{card.location}</span
							>
						</div>
						<p class="font-geist text-xs font-semibold text-[#110d21]">{card.salary}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Empower your Career Section -->
<section class="relative bg-white py-16 md:py-20 lg:py-32">
	<div class="page-container">
		<!-- Heading and Tab Switcher Row -->
		<div
			class="mb-5 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center lg:gap-8"
		>
			<!-- Heading -->
			<h2
				class="max-w-3xl flex-1 font-geist text-3xl leading-tight font-semibold tracking-[-0.24px] text-black md:text-4xl md:leading-[61px] lg:text-[48px]"
			>
				Empower your Career with cutting-edge Process.
			</h2>

			<!-- Tab Switcher -->
			<div
				class="flex w-full flex-shrink-0 overflow-hidden rounded-sm bg-[rgba(241,233,252,0.75)] md:w-auto"
			>
				<button
					onclick={() => (activeTab = 'employer')}
					class="{activeTab === 'employer'
						? 'bg-[#7502ff] font-lato font-bold text-white'
						: 'font-geist text-[#110d21]'} flex-1 cursor-pointer px-4 py-3 text-sm transition-colors md:w-[180px] md:flex-none md:px-10 md:py-4 md:text-base"
				>
					Employer
				</button>
				<button
					onclick={() => (activeTab = 'jobseeker')}
					class="{activeTab === 'jobseeker'
						? 'bg-[#7502ff] font-lato font-bold text-white'
						: 'font-geist text-[#110d21]'} flex-1 cursor-pointer px-4 py-3 text-sm transition-colors md:w-[180px] md:flex-none md:px-10 md:py-4 md:text-base"
				>
					Jobseeker
				</button>
			</div>
		</div>

		<!-- Description -->
		<div class="mb-16 max-w-3xl md:mb-20 lg:mb-24">
			<p
				class="font-geist text-base leading-relaxed tracking-[-0.1px] text-[#62717a] md:text-lg lg:text-xl"
			>
				Take your career to the next level with JobBeta. Whether you're just starting out or looking
				to grow professionally, JobBeta connects you with the tools, employers, and insights you
				need to succeed.
			</p>
		</div>

		<!-- Process Steps -->
		<div class="relative min-h-[400px] md:min-h-[350px]">
			{#key activeTab}
				<div
					class="tab-content relative flex flex-col items-start gap-8 md:flex-row md:gap-6 lg:gap-8"
				>
					<!-- Connecting Lines - Absolutely positioned, hidden on mobile -->
					<div class="pointer-events-none absolute top-[35px] right-0 left-0 z-0 hidden md:block">
						<!-- Line 1-2 -->
						<svg
							class="absolute left-[18%] h-auto w-[14%]"
							viewBox="0 0 150 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 10h140M140 10l-10-7M140 10l-10 7"
								stroke="#7502ff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<!-- Line 2-3 -->
						<svg
							class="absolute left-[43%] h-auto w-[14%]"
							viewBox="0 0 150 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 10h140M140 10l-10-7M140 10l-10 7"
								stroke="#7502ff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<!-- Line 3-4 -->
						<svg
							class="absolute left-[68%] h-auto w-[14%]"
							viewBox="0 0 150 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 10h140M140 10l-10-7M140 10l-10 7"
								stroke="#7502ff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>

					<!-- Process Step Cards -->
					{#each processSteps[activeTab] as step, index}
						<div
							class="step-card relative z-10 flex w-full flex-col gap-5 md:flex-1"
							style="animation-delay: {index * 0.1}s"
						>
							<div
								class="flex h-[70px] w-[70px] flex-shrink-0 items-center justify-center rounded-[20px] bg-[#7502ff]"
							>
								<span class="font-geist text-2xl font-semibold text-white">{step.number}</span>
							</div>
							<div class="flex flex-col gap-4">
								<h3
									class="font-geist text-xl leading-[30px] font-semibold tracking-[-0.1px] text-black"
								>
									{step.title}
								</h3>
								<p class="font-geist text-base leading-6 tracking-[-0.08px] text-[#505d65]">
									{step.description}
								</p>
							</div>
						</div>
					{/each}
				</div>
			{/key}
		</div>
	</div>
</section>

<!-- Testimonials Section - Don't Just Take Our Word -->
<section class="relative w-full overflow-hidden bg-[#7502ff] py-16 md:py-20 lg:py-24">
	<!-- Background Pattern -->
	<div class="pointer-events-none absolute inset-0">
		<img
			src="/images/pattern-bg.png"
			alt=""
			class="absolute inset-0 h-full w-full object-cover opacity-5"
		/>
	</div>

	<div class="page-container relative">
		<!-- Heading -->
		<Animate variant="bottom" duration={0.8}>
			<h2
				class="mx-auto mb-8 max-w-[760px] text-center font-geist text-3xl leading-tight font-bold tracking-[-0.24px] text-white md:mb-10 md:text-4xl md:leading-[54px] lg:text-[48px]"
			>
				Don't Just Take Our Word — Take Theirs
			</h2>
		</Animate>

		<!-- Subheading -->
		<Animate variant="fade" duration={0.6} delay={0.2}>
			<p
				class="mb-8 text-center font-geist text-lg leading-[30px] tracking-[-0.1px] text-[rgba(255,255,255,0.9)] md:mb-10 md:text-xl"
			>
				See how our client's success proves the value we deliver.
			</p>
		</Animate>

		<!-- Avatar Row with Join Text -->
		<Animate variant="scale" duration={0.5} delay={0.3}>
			<div class="mb-12 flex items-center justify-center gap-3 md:mb-16">
				<!-- Overlapping Avatars -->
				<div class="relative flex items-center" style="width: 231px; height: 50px;">
					<img
						src="/images/Ellipse177.png"
						alt=""
						class="absolute left-0 h-[50px] w-[50px] rounded-full object-cover"
					/>
					<img
						src="/images/Ellipse178.png"
						alt=""
						class="absolute left-[36px] h-[50px] w-[50px] rounded-full object-cover"
					/>
					<img
						src="/images/Ellipse179.png"
						alt=""
						class="absolute left-[75px] h-[50px] w-[50px] rounded-full object-cover"
					/>
					<img
						src="/images/Ellipse180.png"
						alt=""
						class="absolute left-[106px] h-[50px] w-[50px] rounded-full object-cover"
					/>
					<img
						src="/images/Ellipse176.png"
						alt=""
						class="absolute left-[146px] h-[50px] w-[50px] rounded-full object-cover"
					/>
					<img
						src="/images/Ellipse175.png"
						alt=""
						class="absolute left-[181px] h-[50px] w-[50px] rounded-full object-cover"
					/>
				</div>
				<p
					class="text-center font-geist text-base leading-6 font-medium tracking-[-0.08px] text-white"
				>
					Join 10,000+ other loving customers
				</p>
			</div>
		</Animate>

		<!-- Testimonial Cards Container -->
		<div class="relative mx-auto max-w-5xl">
			<!-- Custom Navigation -->
			<div
				class="pointer-events-none absolute top-1/2 right-0 left-0 z-20 hidden -translate-y-1/2 justify-between lg:flex"
				style="width: calc(100% + 296px); left: -148px;"
			>
				<button
					class="swiper-button-prev pointer-events-auto flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-50"
				>
					<img src="/icons/arrow-right-alt.svg" alt="Previous" class="h-10 w-10 rotate-180" />
				</button>
				<button
					class="swiper-button-next pointer-events-auto flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-50"
				>
					<img src="/icons/arrow-right-alt.svg" alt="Next" class="h-10 w-10" />
				</button>
			</div>

			<!-- Swiper Element -->
			<swiper-container
				effect="cards"
				grab-cursor="true"
				navigation="true"
				cards-effect-per-slide-offset="8"
				cards-effect-per-slide-rotate="2"
				cards-effect-rotate="true"
				modules="effect-cards,navigation"
				class="testimonial-swiper"
			>
				{#each testimonials as t}
					<swiper-slide>
						<!-- Testimonial Card -->
						<div
							class="relative min-h-[320px] w-full max-w-[878px] overflow-hidden rounded-2xl border border-[#eaecf0] bg-white md:min-h-[380px] lg:min-h-[446px]"
						>
							<!-- Mobile Layout: User info left, categories right, testimonial below -->
							<div class="flex flex-col p-5 lg:hidden">
								<!-- Top row: User info + Categories -->
								<div class="flex items-start justify-between gap-3">
									<!-- User Info (left) -->
									<div class="flex items-center gap-2">
										<img
											src={t.avatar}
											alt={t.name}
											class="h-[36px] w-[36px] rounded-full object-cover"
										/>
										<div>
											<p
												class="font-geist text-sm leading-5 font-bold tracking-[-0.1px] text-[#110d21]"
											>
												{t.name}
											</p>
											<p class="font-geist text-xs leading-4 tracking-[-0.07px] text-black">
												{t.role}
											</p>
										</div>
									</div>

									<!-- Categories (right) -->
									<div class="flex flex-wrap justify-end gap-1.5">
										{#each t.categories.slice(0, 2) as category}
											<div class="rounded-full bg-[#f8f3ff] px-2.5 py-1">
												<p class="font-geist text-xs tracking-[-0.08px] text-[#110d21]">
													{category}
												</p>
											</div>
										{/each}
									</div>
								</div>

								<!-- Rating -->
								<div class="mt-3 flex items-center gap-1">
									{#each Array(t.rating) as _}
										<img src="/icons/star-4.svg" alt="Star" class="h-4 w-4" />
									{/each}
								</div>

								<!-- Testimonial (full width below) -->
								<p class="mt-4 font-geist text-sm leading-6 tracking-[-0.1px] text-[#434d52]">
									{t.testimonial}
								</p>

								<!-- Company logo -->
								<div class="mt-4 h-5 w-24">
									<img src={t.logo} alt={t.company} class="h-full w-full object-contain" />
								</div>
							</div>

							<!-- Desktop Layout: Original two-column -->
							<div class="hidden h-full lg:flex lg:flex-row">
								<!-- Left Side -->
								<div class="flex flex-col gap-5 p-12 lg:w-[322px]">
									<div class="h-7 w-32">
										<img src={t.logo} alt={t.company} class="h-full w-full object-contain" />
									</div>

									<div class="mt-16 flex flex-col gap-5">
										{#each t.categories as category}
											<div class="rounded-[20px] bg-[#f8f3ff] px-6 py-3 text-center">
												<p class="font-geist text-base leading-6 tracking-[-0.08px] text-[#110d21]">
													{category}
												</p>
											</div>
										{/each}
									</div>
								</div>

								<!-- Right Side -->
								<div class="flex-1 border-l border-[#eaecf0] p-12">
									<div class="flex flex-col gap-7">
										<div class="flex flex-row items-start justify-start gap-[107px]">
											<!-- User Info -->
											<div class="flex items-center gap-3">
												<img
													src={t.avatar}
													alt={t.name}
													class="h-[50px] w-[50px] rounded-full object-cover"
												/>
												<div>
													<p
														class="font-geist text-xl leading-[30px] font-bold tracking-[-0.1px] text-[#110d21]"
													>
														{t.name}
													</p>
													<p
														class="font-geist text-sm leading-[21px] tracking-[-0.07px] text-black"
													>
														{t.role}
													</p>
												</div>
											</div>

											<!-- Rating -->
											<div class="flex items-center gap-1.5">
												{#each Array(t.rating) as _}
													<img src="/icons/star-4.svg" alt="Star" class="h-[30px] w-[30px]" />
												{/each}
											</div>
										</div>

										<p class="font-geist text-xl leading-[30px] tracking-[-0.1px] text-[#434d52]">
											{t.testimonial}
										</p>
									</div>
								</div>
							</div>
						</div>
					</swiper-slide>
				{/each}
			</swiper-container>

			<!-- Mobile Navigation -->
			<div class="mt-8 flex items-center justify-center gap-4 lg:hidden">
				<button
					class="swiper-button-prev flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-50"
				>
					<img src="/icons/arrow-right-alt.svg" alt="Previous" class="h-8 w-8 rotate-180" />
				</button>
				<button
					class="swiper-button-next flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-50"
				>
					<img src="/icons/arrow-right-alt.svg" alt="Next" class="h-8 w-8" />
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Career Journey Section -->
<section class="relative w-full overflow-hidden bg-white py-16 md:py-20 lg:py-24">
	<!-- Decorative circles pattern in background -->
	<div class="pointer-events-none absolute top-0 right-0 h-full w-full overflow-hidden">
		<!-- Top right nested circles -->
		<div class="absolute -top-32 -right-40 opacity-40">
			<svg
				width="558"
				height="558"
				viewBox="0 0 558 558"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="279" cy="279" r="278" stroke="rgba(117, 2, 255, 0.4)" stroke-dasharray="5,5" />
				<circle cx="279" cy="279" r="249" stroke="rgba(117, 2, 255, 0.4)" stroke-dasharray="5,5" />
				<circle cx="279" cy="279" r="204" stroke="rgba(117, 2, 255, 0.4)" stroke-dasharray="5,5" />
				<circle cx="279" cy="279" r="177" stroke="rgba(117, 2, 255, 0.4)" stroke-dasharray="5,5" />
				<circle cx="279" cy="279" r="131" stroke="rgba(117, 2, 255, 0.4)" stroke-dasharray="5,5" />
				<circle cx="279" cy="279" r="101" stroke="rgba(117, 2, 255, 0.4)" stroke-dasharray="5,5" />
			</svg>
		</div>
		<!-- Bottom left nested circles -->
		<div class="absolute -bottom-32 -left-40 opacity-40">
			<svg
				width="558"
				height="558"
				viewBox="0 0 558 558"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="279" cy="279" r="278" stroke="rgba(117, 2, 255, 0.4)" stroke-dasharray="5,5" />
				<circle cx="279" cy="279" r="249" stroke="rgba(117, 2, 255, 0.4)" stroke-dasharray="5,5" />
				<circle cx="279" cy="279" r="204" stroke="rgba(117, 2, 255, 0.4)" stroke-dasharray="5,5" />
				<circle cx="279" cy="279" r="177" stroke="rgba(117, 2, 255, 0.4)" stroke-dasharray="5,5" />
				<circle cx="279" cy="279" r="131" stroke="rgba(117, 2, 255, 0.4)" stroke-dasharray="5,5" />
				<circle cx="279" cy="279" r="101" stroke="rgba(117, 2, 255, 0.4)" stroke-dasharray="5,5" />
			</svg>
		</div>
	</div>

	<div class="page-container md-auto relative">
		<!-- Heading -->
		<div class="mb-12 max-w-3xl md:mb-16">
			<h2
				class="mb-4 font-geist text-3xl leading-tight font-semibold text-black md:mb-6 md:text-4xl lg:text-5xl"
			>
				Your Career Journey Begins,<br />
				Let's create magic together
			</h2>
			<p class="font-geist text-base leading-relaxed text-[#62717a] md:text-lg">
				Be the first to access our latest features, Stay ahead with early updates and improvements.
				Unlock exclusive opportunities designed just for you.
			</p>
		</div>

		<!-- Tabs -->
		<div class="mb-12 flex flex-wrap gap-4 md:mb-16">
			<button
				onclick={() => (careerTab = 'student')}
				class="rounded-full px-6 py-3 font-geist text-sm font-medium transition-all duration-300 md:px-8 md:py-4 md:text-base {careerTab ===
				'student'
					? 'bg-[#7502ff] text-white shadow-lg'
					: 'bg-gray-100 text-[#110d21] hover:bg-gray-200'}"
			>
				Create a Free Account as a Student
			</button>
			<button
				onclick={() => (careerTab = 'career')}
				class="rounded-full px-6 py-3 font-geist text-sm font-medium transition-all duration-300 md:px-8 md:py-4 md:text-base {careerTab ===
				'career'
					? 'bg-[#7502ff] text-white shadow-lg'
					: 'bg-gray-100 text-[#110d21] hover:bg-gray-200'}"
			>
				Career Center
			</button>
			<button
				onclick={() => (careerTab = 'employer')}
				class="rounded-full px-6 py-3 font-geist text-sm font-medium transition-all duration-300 md:px-8 md:py-4 md:text-base {careerTab ===
				'employer'
					? 'bg-[#7502ff] text-white shadow-lg'
					: 'bg-gray-100 text-[#110d21] hover:bg-gray-200'}"
			>
				Create a Free Account as an Employer
			</button>
		</div>

		<!-- Tab Content -->
		<div class="relative min-h-[600px]">
			{#key careerTab}
				<div class="career-tab-content">
					{#if careerTab === 'student'}
						<!-- Student Signup Content -->
						<div
							class="relative mx-auto w-full max-w-[939px] overflow-visible rounded-2xl border border-[#eaecf0] bg-white"
							style="min-height: 595px;"
						>
							<!-- Decorative elements (behind) -->
							<!-- Purple box at top right -->
							<div
								class="absolute top-[37px] right-[30px] z-0 h-[60px] w-[102px] rounded-lg bg-[#7502ff] md:right-[58px]"
							></div>
							<!-- Black box at bottom left of form area -->
							<div
								class="absolute top-[510px] left-[30px] z-0 h-[60px] w-[102px] rounded-lg bg-[#110d21] md:left-[466px]"
							></div>

							<!-- Content wrapper -->
							<div class="relative z-10 flex flex-col gap-8 p-6 md:p-8 lg:flex-row lg:p-0">
								<!-- Left: Image -->
								<div class="relative w-full lg:absolute lg:top-[26px] lg:left-[52px] lg:w-[380px]">
									<div
										class="relative h-[400px] w-full overflow-hidden rounded-2xl md:h-[500px] lg:h-[544px]"
									>
										<img
											src="/images/hero-3.jpg"
											alt="Student"
											class="absolute inset-0 mx-auto h-full w-auto object-cover"
											style="object-position: center center;"
										/>
										<!-- Name tag overlay -->
										<div
											class="absolute bottom-8 left-1/2 w-72 -translate-x-1/2 rounded-xl bg-white px-4 py-3 text-center shadow-lg"
										>
											<p class="mb-1 font-geist text-sm text-[#2a2c2c]">Cloud Engineer</p>
											<p class="font-geist text-base font-bold text-black">Afolasade Williams</p>
										</div>
									</div>
								</div>

								<!-- Right: Signup Form -->
								<div class="relative w-full lg:absolute lg:top-[53px] lg:left-[495px] lg:w-[360px]">
									<div
										class="overflow-hidden rounded-2xl border border-[#eaecf0] bg-white shadow-xl"
										style="height: 502px;"
									>
										<div class="p-6 lg:p-[26px_19px]">
											<h3 class="mb-6 px-2 font-geist text-2xl font-bold text-black lg:mb-8">
												Sign Up for Free
											</h3>

											<form class="pointer-events-none space-y-[10px] px-2 opacity-50">
												<!-- Full Name -->
												<div class="relative">
													<input
														type="text"
														placeholder="Enter Full name"
														class="w-full rounded-2xl border border-[#eaecf0] bg-white px-3 py-3 font-geist text-base font-semibold text-[#110d21] transition-all placeholder:text-[#110d21] focus:border-transparent focus:ring-2 focus:ring-[#7502ff] focus:outline-none"
													/>
													<svg
														class="absolute top-1/2 right-3 h-6 w-6 -translate-y-1/2"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
														/>
													</svg>
												</div>

												<!-- Email -->
												<div class="relative">
													<input
														type="email"
														placeholder="Enter Email Address"
														class="w-full rounded-2xl border border-[#eaecf0] bg-white px-3 py-3 font-geist text-base font-semibold text-[#110d21] transition-all placeholder:text-[#110d21] focus:border-transparent focus:ring-2 focus:ring-[#7502ff] focus:outline-none"
													/>
													<svg
														class="absolute top-1/2 right-3 h-6 w-6 -translate-y-1/2"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
														/>
													</svg>
												</div>

												<!-- Career Interest -->
												<div class="relative">
													<select
														class="w-full appearance-none rounded-2xl border border-[#eaecf0] bg-white px-3 py-3 font-geist text-base font-semibold text-[#110d21] transition-all focus:border-transparent focus:ring-2 focus:ring-[#7502ff] focus:outline-none"
													>
														<option>Enter Career interest</option>
														<option>Technology</option>
														<option>Healthcare</option>
														<option>Finance</option>
														<option>Education</option>
														<option>Marketing</option>
													</select>
													<svg
														class="pointer-events-none absolute top-1/2 right-3 h-6 w-6 -translate-y-1/2"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
														/>
													</svg>
												</div>

												<!-- Create Account Button -->
												<button
													type="submit"
													class="w-full rounded-[20px] bg-[#7502ff] py-4 font-lato text-base font-bold text-white transition-all hover:bg-[#6502dd]"
												>
													Create Account
												</button>

												<!-- Social Login Buttons -->
												<button
													type="button"
													class="flex w-full items-center justify-center gap-3 rounded-[20px] bg-[rgba(234,236,240,0.62)] py-4 font-lato text-base font-bold text-[#62717a] transition-all hover:bg-[rgba(234,236,240,0.8)]"
												>
													<svg class="h-6 w-6" viewBox="0 0 24 24">
														<path
															fill="#4285F4"
															d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
														/>
														<path
															fill="#34A853"
															d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
														/>
														<path
															fill="#FBBC05"
															d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
														/>
														<path
															fill="#EA4335"
															d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
														/>
													</svg>
													Continue with Google
												</button>

												<button
													type="button"
													class="flex w-full items-center justify-center gap-3 rounded-[20px] bg-[rgba(234,236,240,0.62)] py-4 font-lato text-base font-bold text-[#62717a] transition-all hover:bg-[rgba(234,236,240,0.8)]"
												>
													<svg class="h-6 w-6" viewBox="0 0 24 24" fill="#0077B5">
														<path
															d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
														/>
													</svg>
													Continue with linkedin
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					{:else if careerTab === 'career'}
						<!-- Career Center Content -->
						<div class="grid gap-6 lg:grid-cols-3 lg:gap-8">
							<!-- Career Resources Cards -->
							<div
								class="group cursor-pointer rounded-2xl border border-[#eaecf0] bg-white p-6 shadow-xl transition-all hover:shadow-2xl md:p-8"
							>
								<div
									class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f8f3ff] transition-all group-hover:bg-[#7502ff]"
								>
									<svg
										class="h-7 w-7 text-[#7502ff] transition-all group-hover:text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
								</div>
								<h3 class="mb-3 font-geist text-xl font-bold text-black">Resume Builder</h3>
								<p class="mb-4 font-geist text-base text-[#62717a]">
									Create a professional resume with our easy-to-use templates and expert tips.
								</p>
								<button class="font-geist text-sm font-semibold text-[#7502ff] hover:underline"
									>Get Started →</button
								>
							</div>

							<div
								class="group cursor-pointer rounded-2xl border border-[#eaecf0] bg-white p-6 shadow-xl transition-all hover:shadow-2xl md:p-8"
							>
								<div
									class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f8f3ff] transition-all group-hover:bg-[#7502ff]"
								>
									<svg
										class="h-7 w-7 text-[#7502ff] transition-all group-hover:text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
										/>
									</svg>
								</div>
								<h3 class="mb-3 font-geist text-xl font-bold text-black">Career Guides</h3>
								<p class="mb-4 font-geist text-base text-[#62717a]">
									Access comprehensive guides on job search, interviews, and career development.
								</p>
								<button class="font-geist text-sm font-semibold text-[#7502ff] hover:underline"
									>Explore Guides →</button
								>
							</div>

							<div
								class="group cursor-pointer rounded-2xl border border-[#eaecf0] bg-white p-6 shadow-xl transition-all hover:shadow-2xl md:p-8"
							>
								<div
									class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f8f3ff] transition-all group-hover:bg-[#7502ff]"
								>
									<svg
										class="h-7 w-7 text-[#7502ff] transition-all group-hover:text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<h3 class="mb-3 font-geist text-xl font-bold text-black">Job Opportunities</h3>
								<p class="mb-4 font-geist text-base text-[#62717a]">
									Browse thousands of job openings across various industries and experience levels.
								</p>
								<button class="font-geist text-sm font-semibold text-[#7502ff] hover:underline"
									>View Jobs →</button
								>
							</div>
						</div>
					{:else if careerTab === 'employer'}
						<!-- Employer Signup Content -->
						<div class="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
							<!-- Left: Image -->
							<div class="relative order-2 lg:order-1">
								<div
									class="relative overflow-hidden rounded-2xl border border-[#eaecf0] bg-white p-8 shadow-xl md:p-10"
								>
									<!-- Purple decorative corner -->
									<div
										class="absolute top-0 right-0 h-16 w-24 rounded-bl-[36px] bg-[#110d21]"
									></div>
									<h3
										class="relative z-10 mb-8 font-geist text-2xl font-bold text-black md:text-3xl"
									>
										Register Your Company
									</h3>

									<form class="pointer-events-none space-y-6 opacity-50">
										<!-- Company Name -->
										<div class="relative">
											<input
												type="text"
												placeholder="Company Name"
												class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 font-geist text-base transition-all focus:border-transparent focus:ring-2 focus:ring-[#110d21] focus:outline-none"
											/>
											<svg
												class="absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
												/>
											</svg>
										</div>

										<!-- Email -->
										<div class="relative">
											<input
												type="email"
												placeholder="Company Email Address"
												class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 font-geist text-base transition-all focus:border-transparent focus:ring-2 focus:ring-[#110d21] focus:outline-none"
											/>
											<svg
												class="absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
										</div>

										<!-- Industry -->
										<div class="relative">
											<select
												class="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 font-geist text-base text-gray-700 transition-all focus:border-transparent focus:ring-2 focus:ring-[#110d21] focus:outline-none"
											>
												<option>Select Industry</option>
												<option>Technology</option>
												<option>Healthcare</option>
												<option>Finance</option>
												<option>Education</option>
												<option>Manufacturing</option>
												<option>Retail</option>
												<option>Other</option>
											</select>
											<svg
												class="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-400"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M19 9l-7 7-7-7"
												/>
											</svg>
										</div>

										<!-- Create Account Button -->
										<button
											type="submit"
											class="w-full rounded-xl bg-[#110d21] py-4 font-geist text-base font-bold text-white shadow-lg transition-all hover:bg-black hover:shadow-xl"
										>
											Register Company
										</button>

										<!-- Divider -->
										<div class="my-6 flex items-center gap-4">
											<div class="h-px flex-1 bg-gray-200"></div>
											<span class="font-geist text-sm text-gray-400">Or</span>
											<div class="h-px flex-1 bg-gray-200"></div>
										</div>

										<!-- Social Login Buttons -->
										<button
											type="button"
											class="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-4 font-geist text-base font-medium text-gray-700 transition-all hover:bg-gray-50"
										>
											<svg class="h-5 w-5" viewBox="0 0 24 24">
												<path
													fill="#4285F4"
													d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
												/>
												<path
													fill="#34A853"
													d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
												/>
												<path
													fill="#FBBC05"
													d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
												/>
												<path
													fill="#EA4335"
													d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
												/>
											</svg>
											Continue with Google
										</button>

										<button
											type="button"
											class="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-4 font-geist text-base font-medium text-gray-700 transition-all hover:bg-gray-50"
										>
											<svg class="h-5 w-5" fill="#0A66C2" viewBox="0 0 24 24">
												<path
													d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
												/>
											</svg>
											Continue with LinkedIn
										</button>
									</form>
								</div>
							</div>

							<!-- Right: Info/Benefits -->
							<div class="relative order-1 lg:order-2">
								<div class="space-y-6">
									<h3 class="font-geist text-3xl font-bold text-black md:text-4xl">
										Find Your Perfect Candidates
									</h3>
									<p class="font-geist text-lg leading-relaxed text-[#62717a]">
										Join thousands of employers who trust JobBeta to connect with top talent.
									</p>

									<div class="mt-8 space-y-4">
										<div class="flex gap-4">
											<div
												class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#f8f3ff]"
											>
												<svg class="h-6 w-6 text-[#7502ff]" fill="currentColor" viewBox="0 0 20 20">
													<path
														fill-rule="evenodd"
														d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
														clip-rule="evenodd"
													/>
												</svg>
											</div>
											<div>
												<h4 class="mb-1 font-geist text-lg font-semibold text-black">
													Access Qualified Talent
												</h4>
												<p class="font-geist text-base text-[#62717a]">
													Connect with pre-screened candidates who match your requirements.
												</p>
											</div>
										</div>

										<div class="flex gap-4">
											<div
												class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#f8f3ff]"
											>
												<svg class="h-6 w-6 text-[#7502ff]" fill="currentColor" viewBox="0 0 20 20">
													<path
														fill-rule="evenodd"
														d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
														clip-rule="evenodd"
													/>
												</svg>
											</div>
											<div>
												<h4 class="mb-1 font-geist text-lg font-semibold text-black">
													Streamlined Hiring Process
												</h4>
												<p class="font-geist text-base text-[#62717a]">
													Save time with our intuitive platform and automated workflows.
												</p>
											</div>
										</div>

										<div class="flex gap-4">
											<div
												class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#f8f3ff]"
											>
												<svg class="h-6 w-6 text-[#7502ff]" fill="currentColor" viewBox="0 0 20 20">
													<path
														fill-rule="evenodd"
														d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
														clip-rule="evenodd"
													/>
												</svg>
											</div>
											<div>
												<h4 class="mb-1 font-geist text-lg font-semibold text-black">
													Dedicated Support
												</h4>
												<p class="font-geist text-base text-[#62717a]">
													Get expert assistance throughout your hiring journey.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					{/if}
				</div>
			{/key}
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="relative w-full overflow-hidden bg-[#7502ff] py-16 md:py-20 lg:py-24">
	<div class="page-container relative">
		<!-- Heading -->
		<div class="mb-8 text-center md:mb-12">
			<h2 class="mb-4 font-geist text-3xl font-bold text-white md:mb-6 md:text-4xl lg:text-5xl">
				A few things you may want to ask us
			</h2>
			<p class="mx-auto max-w-3xl font-geist text-base text-white md:text-lg lg:text-xl">
				Need more clarification?. Pleases reach dont hesitate to reach out.
			</p>
		</div>

		<!-- Tab Buttons -->
		<div class="mb-12 flex items-center justify-center md:mb-16">
			<div
				class="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white p-3 md:gap-[18px] md:p-4"
			>
				<button
					onclick={() => {
						faqTab = 'employer';
						openAccordion = null;
					}}
					class="flex w-auto min-w-[100px] items-center justify-center gap-2 rounded-lg px-4 py-3 font-geist text-sm font-bold transition-all duration-300 md:w-52 md:gap-[10px] md:px-[10px] md:py-[16px] md:text-base {faqTab ===
					'employer'
						? 'bg-[#eaecf0] text-[#110d21]'
						: 'border border-[rgba(255,255,255,0.2)] text-white hover:bg-[rgba(255,255,255,0.1)]'}"
				>
					<img
						src="/icons/employers/home-work1.svg"
						alt="Employer"
						class="h-6 w-6 {faqTab === 'employer' ? 'brightness-0' : 'brightness-0 invert'}"
					/>
					Employer
				</button>
				<button
					onclick={() => {
						faqTab = 'student';
						openAccordion = null;
					}}
					class="flex w-auto min-w-[100px] items-center justify-center gap-2 rounded-lg px-4 py-3 font-geist text-sm font-bold transition-all duration-300 md:w-52 md:gap-[10px] md:px-[10px] md:py-[16px] md:text-base {faqTab ===
					'student'
						? 'bg-[#eaecf0] text-[#110d21]'
						: 'border border-[rgba(255,255,255,0.2)] text-white hover:bg-[rgba(255,255,255,0.1)]'}"
				>
					<img
						src="/icons/Accessibility.svg"
						alt="Student"
						class="h-6 w-6 {faqTab === 'student' ? 'brightness-0' : 'brightness-0 invert'}"
					/>
					Student
				</button>
				<button
					onclick={() => {
						faqTab = 'career';
						openAccordion = null;
					}}
					class="flex w-auto min-w-[100px] items-center justify-center gap-2 rounded-lg px-4 py-3 font-geist text-sm font-bold transition-all duration-300 md:w-52 md:gap-[10px] md:px-[10px] md:py-[16px] md:text-base {faqTab ===
					'career'
						? 'bg-[#eaecf0] text-[#110d21]'
						: 'border border-[rgba(255,255,255,0.2)] text-white hover:bg-[rgba(255,255,255,0.1)]'}"
				>
					<img
						src="/icons/Business center.svg"
						alt="Career Center"
						class="h-6 w-6 {faqTab === 'career' ? 'brightness-0' : 'brightness-0 invert'}"
					/>
					Career Center
				</button>
			</div>
		</div>

		<!-- FAQ Content -->
		{#key faqTab}
			<div class="faq-slide-content">
				<div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
					{#each faqData[faqTab] as faq, index}
						<div class="faq-item">
							<div class="w-full overflow-hidden rounded-2xl bg-white">
								<!-- Question Header Button -->
								<button
									onclick={() => (openAccordion = openAccordion === faq.id ? null : faq.id)}
									class="flex w-full items-center justify-between px-8 py-9 transition-colors duration-200 hover:bg-gray-50"
								>
									<h3 class="text-left font-geist text-lg font-bold text-[#62717a] md:text-xl">
										{faq.question}
									</h3>
									<svg
										class="h-7 w-7 flex-shrink-0 transition-transform duration-500 ease-in-out {openAccordion ===
										faq.id
											? 'rotate-180'
											: ''}"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path d="M7 10l5 5 5-5z" fill="#62717a" />
									</svg>
								</button>

								<!-- Answer Content with smooth transition -->
								<div
									class="accordion-answer-wrapper overflow-hidden transition-all duration-500 ease-in-out {openAccordion ===
									faq.id
										? 'max-h-[500px] opacity-100'
										: 'max-h-0 opacity-0'}"
								>
									<div class="px-8 pb-6">
										<div
											class="rounded-2xl border border-[#c9d1e2] bg-[rgba(234,236,240,0.65)] p-6"
										>
											<p class="font-geist text-base leading-relaxed text-[#1c172b]">
												{faq.answer}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/key}
	</div>
</section>

<style>
	.testimonial-swiper {
		width: 100%;
		max-width: 900px;
		height: 480px;
		margin: 0 auto;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.animate-scroll {
		animation: scroll 30s linear infinite;
	}

	.animate-scroll:hover {
		animation-play-state: paused;
	}

	.job-row {
		transition: transform 0.1s ease-out;
	}

	/* Tab transition animation */
	.tab-content {
		animation: fadeIn 0.4s ease-in-out;
	}

	/* Staggered slide-in animation for step cards */
	.step-card {
		animation: slideIn 0.6s ease-out both;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: translateY(10px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slideIn {
		0% {
			opacity: 0;
			transform: translateX(-30px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	/* Swiper testimonial styles */
	.testimonial-swiper {
		width: 100%;
		max-width: 878px;
		padding-top: 50px;
		padding-bottom: 50px;
	}

	swiper-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 18px;
		background: transparent;
	}

	/* Custom navigation buttons styling */
	.swiper-button-prev,
	.swiper-button-next {
		outline: none;
	}

	/* Career tab transition animation */
	.career-tab-content {
		animation: tabFadeIn 0.4s ease-in-out;
	}

	@keyframes tabFadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* FAQ section animations */
	.faq-content {
		animation: faqFadeIn 0.5s ease-in-out;
	}

	.faq-slide-content {
		animation: faqSlideIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	@keyframes faqFadeIn {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes faqSlideIn {
		from {
			opacity: 0;
			transform: translateX(50px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.faq-item {
		animation: faqItemSlideIn 0.6s ease-out both;
	}

	.faq-item:nth-child(1) {
		animation-delay: 0.1s;
	}
	.faq-item:nth-child(2) {
		animation-delay: 0.15s;
	}
	.faq-item:nth-child(3) {
		animation-delay: 0.2s;
	}
	.faq-item:nth-child(4) {
		animation-delay: 0.25s;
	}
	.faq-item:nth-child(5) {
		animation-delay: 0.3s;
	}
	.faq-item:nth-child(6) {
		animation-delay: 0.35s;
	}

	@keyframes faqItemSlideIn {
		from {
			opacity: 0;
			transform: translateX(-20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	/* Smooth accordion expansion */
	.accordion-answer-wrapper {
		transition:
			max-height 0.5s ease-in-out,
			opacity 0.5s ease-in-out;
	}

	/* Events Swiper Styles */
	.events-swiper {
		width: 100%;
		padding: 20px 0;
		overflow: visible;
	}

	.events-swiper swiper-slide {
		display: flex;
		align-items: stretch;
		justify-content: center;
		height: 100%;
		overflow: visible;
	}

	.events-swiper swiper-slide > div {
		width: 100%;
		height: 100%;
	}

	/* Customize pagination */
	.events-swiper::part(pagination) {
		right: 20px;
		left: auto;
		width: auto;
	}

	.events-swiper::part(bullet) {
		background: #7502ff;
		opacity: 0.4;
		width: 8px;
		height: 8px;
		margin: 6px 0 !important;
	}

	.events-swiper::part(bullet-active) {
		opacity: 1;
		width: 10px;
		height: 10px;
	}
</style>
