<script>
	/** @type {{}} */
	let { ...props } = $props();
</script>

<section class="relative w-full bg-white py-20">
	<div class="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center gap-10 px-4">
		<!-- Header -->
		<div class="flex flex-col items-center justify-center gap-0 text-center">
			<div
				class="relative font-['Geist-Medium',_sans-serif] text-xl leading-[30px] font-medium text-[rgba(42,44,44,0.80)]"
				style="letter-spacing: -0.005em"
			>
				How it works
			</div>
			<div
				class="relative self-stretch font-['Geist-Bold',_sans-serif] text-3xl leading-tight font-bold text-[#7502ff] md:text-[40px] md:leading-[60px]"
				style="letter-spacing: -0.005em"
			>
				Finding a Job has never been easier
			</div>
		</div>

		<!-- Grid Content -->
		<div class="relative grid w-full grid-cols-1 gap-11 lg:grid-cols-2">
			<!-- Card 1: Sign Up & Create Your Free Account -->
			<div
				class="relative flex h-auto w-full flex-col overflow-hidden rounded-[20px] bg-[#f3f3f3] lg:h-[691px]"
			>
				<div
					class="flex w-full flex-col items-start justify-start gap-4 px-6 pt-10 lg:w-[510px] lg:px-[30px] lg:pt-10"
				>
					<div class="flex flex-col items-start justify-start gap-[17px] self-stretch">
						<div
							class="self-stretch text-left font-['Geist-Bold',_sans-serif] text-2xl leading-9 font-bold text-[#000000]"
							style="letter-spacing: -0.005em"
						>
							Sign Up & Create Your Free Account
						</div>
						<div
							class="text-left font-['Geist-Regular',_sans-serif] text-base leading-6 font-normal text-[rgba(42,44,44,0.80)] lg:w-[510px]"
							style="letter-spacing: -0.005em"
						>
							Sign up in minutes and build your profile to showcase your skills and career interests
							for personalized openings.
						</div>
					</div>
					<a href="/signup" class="flex flex-row items-center justify-start gap-2.5">
						<div
							class="text-left font-['Geist-Bold',_sans-serif] text-base leading-6 font-bold text-[#7502ff]"
							style="letter-spacing: -0.005em"
						>
							Build your Profile
						</div>
						<svg
							class="h-6 w-6 shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
								fill="#7502FF"
							/>
						</svg>
					</a>
				</div>
				<!-- Phone Mockup Image -->
				<div class="flex flex-1 items-end justify-center overflow-hidden pt-8">
					<img
						class="h-auto max-h-[499px] w-[280px] object-contain lg:w-[316px]"
						src="/images/students/group-1321314401-1-10.png"
						alt="Sign Up Mockup"
					/>
				</div>
			</div>

			<!-- Card 2: Use BetaMatch to Find Jobs That Fit You -->
			<div
				class="relative flex h-auto w-full flex-col overflow-hidden rounded-[20px] bg-[#f3f3f3] lg:h-[691px]"
			>
				<!-- Text Content Centered -->
				<div
					class="flex w-full flex-col items-start justify-start gap-4 px-6 pt-10 lg:w-auto lg:px-[81px] lg:pt-[47px]"
				>
					<div class="flex flex-col items-start justify-start gap-[17px] lg:w-[449px]">
						<div
							class="self-stretch text-left font-['Geist-Bold',_sans-serif] text-2xl leading-9 font-bold text-[#000000]"
							style="letter-spacing: -0.005em"
						>
							Use BetaMatch to<br />Find Jobs That Fit You
						</div>
						<div
							class="text-left font-['Geist-Regular',_sans-serif] text-base leading-6 font-normal text-[rgba(42,44,44,0.80)] lg:w-[427px]"
							style="letter-spacing: -0.005em"
						>
							Use our AI tool to match you with internships, part-time jobs, and full-time gigs that
							match your goals.
						</div>
					</div>
					<a href="/signup" class="flex flex-row items-center justify-start gap-2.5">
						<div
							class="text-left font-['Geist-Bold',_sans-serif] text-base leading-6 font-bold text-[#7502ff]"
							style="letter-spacing: -0.005em"
						>
							Build your Profile
						</div>
						<svg
							class="h-6 w-6 shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
								fill="#7502FF"
							/>
						</svg>
					</a>
				</div>
				<!-- Phone Mockup Image -->
				<div class="flex flex-1 items-start justify-center overflow-hidden pt-8">
					<img
						class="h-auto w-[280px] object-contain object-top lg:w-[316px]"
						src="/images/students/group-1321314406-10.png"
						alt="BetaMatch Mockup"
					/>
				</div>
			</div>

			<!-- Card 3: Apply & Connect with Employers -->
			<div
				class="relative flex h-auto w-full flex-col overflow-hidden rounded-[20px] bg-[#f3f3f3] lg:h-[619px]"
			>
				<div
					class="flex w-full flex-col items-start justify-start gap-4 px-6 pt-10 lg:w-[510px] lg:px-[30px] lg:pt-[57px]"
				>
					<div class="flex flex-col items-start justify-start gap-[17px] self-stretch">
						<div
							class="self-stretch text-left font-['Geist-Bold',_sans-serif] text-2xl leading-9 font-bold text-[#000000]"
							style="letter-spacing: -0.005em"
						>
							Apply & Connect with Employers
						</div>
						<div
							class="text-left font-['Geist-Regular',_sans-serif] text-base leading-6 font-normal text-[rgba(42,44,44,0.80)] lg:w-[510px]"
							style="letter-spacing: -0.005em"
						>
							Send your applications and chat directly with recruiters on the platform.
						</div>
					</div>
					<a href="/signup" class="flex flex-row items-center justify-start gap-2.5">
						<div
							class="text-left font-['Geist-Bold',_sans-serif] text-base leading-6 font-bold text-[#7502ff]"
							style="letter-spacing: -0.005em"
						>
							Get Started For free Today
						</div>
						<svg
							class="h-6 w-6 shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
								fill="#7502FF"
							/>
						</svg>
					</a>
				</div>
				<!-- Image with Orange Border -->
				<div class="flex flex-1 items-end justify-center overflow-hidden pt-8 pb-0">
					<img
						class="h-auto max-h-[412px] w-[280px] object-cover lg:w-[375px]"
						src="/images/students/employers-20.png"
						alt="Employers"
					/>
				</div>
			</div>

			<!-- Card 4: Land Your Dream Job! -->
			<div
				class="relative flex h-auto w-full flex-col overflow-hidden rounded-[20px] bg-[#f3f3f3] lg:h-[619px]"
			>
				<div
					class="flex w-full flex-col items-start justify-start gap-4 px-6 pt-10 lg:w-[510px] lg:px-[30px] lg:pt-[63px]"
				>
					<div class="flex flex-col items-start justify-start gap-[17px] self-stretch">
						<div
							class="self-stretch text-left font-['Geist-Bold',_sans-serif] text-2xl leading-9 font-bold text-[#000000]"
							style="letter-spacing: -0.005em"
						>
							Land Your Dream Job!
						</div>
						<div
							class="text-left font-['Geist-Regular',_sans-serif] text-base leading-6 font-normal text-[rgba(42,44,44,0.80)] lg:w-[510px]"
							style="letter-spacing: -0.005em"
						>
							Nail your interviews, get that offer, and start building your future! Don't
							wait—opportunities are passing you by! Sign up now
						</div>
					</div>
					<a href="/signup" class="flex flex-row items-center justify-start gap-2.5">
						<div
							class="text-left font-['Geist-Bold',_sans-serif] text-base leading-6 font-bold text-[#7502ff]"
							style="letter-spacing: -0.005em"
						>
							Sign Up Free
						</div>
						<svg
							class="h-6 w-6 shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
								fill="#7502FF"
							/>
						</svg>
					</a>
				</div>
				<!-- Image with Purple Border -->
				<div class="flex flex-1 items-end justify-center overflow-hidden pt-8 pb-0">
					<img
						class="h-auto max-h-[400px] w-[280px] object-cover lg:w-[375px]"
						src="/images/students/notification-10.png"
						alt="Notifications"
					/>
				</div>
			</div>

			<!-- Floating Complete Profile Card - Only visible on desktop (lg and above) -->
		</div>
	</div>
</section>
