<script>
	/** @type {{}} */
	let { ...props } = $props();

	const features = [
		{
			label: 'Virtual Career Fairs',
			filled: true,
			icon: 'career-fairs'
		},
		{
			label: 'AI Smart Job Matching',
			filled: false,
			icon: 'ai-matching'
		},
		{
			label: 'No spam, real Jobs',
			filled: true,
			icon: 'no-spam'
		},
		{
			label: 'Internships',
			filled: false,
			icon: 'internships'
		},
		{
			label: 'Community',
			filled: true,
			icon: 'community'
		}
	];
</script>

<section class="relative w-full overflow-hidden bg-[rgba(230,210,255,0.02)] py-20 md:py-28">
	<div
		class="mx-auto flex w-full max-w-[1369px] flex-col items-center gap-10 px-4 md:flex-row md:items-start md:justify-between md:px-[58px]"
	>
		<!-- Left Content -->
		<div class="flex flex-col gap-6 text-center md:max-w-[439px] md:text-left">
			<h2
				class="font-['Geist-Bold',_sans-serif] text-3xl leading-tight font-bold text-[#2a2c2c] md:text-[40px] md:leading-[60px]"
				style="letter-spacing: -0.005em"
			>
				Join JobBeta Today<br />– It's Free!
			</h2>
			<p
				class="font-['Geist-Medium',_sans-serif] text-lg leading-[30px] font-medium text-[rgba(42,44,44,0.70)] md:text-xl"
				style="letter-spacing: -0.005em; opacity: 0.85"
			>
				Start your job search today! Create your free account and explore opportunities tailored to
				your skills.
			</p>
			<a
				href="/signup"
				class="inline-flex w-full items-center justify-center rounded-[20px] bg-[#7502ff] px-6 py-4 font-['Geist-Bold',_sans-serif] text-base leading-6 font-bold text-white transition-colors hover:bg-[#6002dd] md:w-[306px]"
				style="letter-spacing: -0.005em"
			>
				Sign Up - It's Free
			</a>
		</div>

		<!-- Right Content - Floating Feature Tags -->
		<div class="relative hidden h-[420px] w-full max-w-[500px] md:block">
			<!-- Decorative Background Elements -->
			<div
				class="absolute -top-10 -right-20 h-[420px] w-[420px] rounded-full border border-[#7502ff]/20"
			></div>
			<img
				class="absolute top-0 right-0 h-auto w-[300px]"
				src="/icons/students/group-13213144470.svg"
				alt=""
			/>

			<!-- Virtual Career Fairs (Purple filled) -->
			<div
				class="absolute top-0 left-0 flex w-[342px] flex-row items-center justify-start gap-[18px] rounded-[20px] border border-white bg-[#7502ff] p-2.5"
				style="transform: rotate(0.2deg)"
			>
				<div
					class="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[50px] bg-white"
				>
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#7502FF" />
						<path
							d="M2 17L12 22L22 17"
							stroke="#7502FF"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M2 12L12 17L22 12"
							stroke="#7502FF"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<div
					class="font-['Geist-Bold',_sans-serif] text-base leading-6 font-bold text-white"
					style="letter-spacing: -0.005em"
				>
					Virtual Career Fairs
				</div>
			</div>

			<!-- AI Smart Job Matching (White with purple border) -->
			<div
				class="absolute top-[90px] left-[60px] flex w-[342px] flex-row items-center justify-start gap-[18px] rounded-[20px] border border-[#7502ff] bg-white p-2.5"
				style="transform: rotate(1.6deg)"
			>
				<div
					class="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[50px] border border-[#7502ff] bg-white"
				>
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
							fill="#7502FF"
						/>
						<path
							d="M12 6L9 12H15L12 18"
							stroke="#7502FF"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<div
					class="font-['Geist-Bold',_sans-serif] text-base leading-6 font-bold text-[#7502ff]"
					style="letter-spacing: -0.005em"
				>
					AI Smart Job Matching
				</div>
			</div>

			<!-- No spam, real Jobs (Purple filled) -->
			<div
				class="absolute top-[175px] left-0 flex w-[342px] flex-row items-center justify-start gap-[18px] rounded-[20px] border border-white bg-[#7502ff] p-2.5"
				style="transform: rotate(0.67deg)"
			>
				<div
					class="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[50px] bg-white"
				>
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#7502FF" />
					</svg>
				</div>
				<div
					class="font-['Geist-Bold',_sans-serif] text-base leading-6 font-bold text-white"
					style="letter-spacing: -0.005em"
				>
					No spam, real Jobs
				</div>
			</div>

			<!-- Internships (White with purple border) -->
			<div
				class="absolute top-[270px] left-[40px] flex w-[342px] flex-row items-center justify-start gap-[18px] rounded-[20px] border border-[#7502ff] bg-white p-2.5"
				style="transform: rotate(-0.45deg)"
			>
				<div
					class="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[50px] border border-[#7502ff] bg-white"
				>
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2 6.89 2 8V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z"
							fill="#7502FF"
						/>
					</svg>
				</div>
				<div
					class="font-['Geist-Bold',_sans-serif] text-base leading-6 font-bold text-[#7502ff]"
					style="letter-spacing: -0.005em"
				>
					Internships
				</div>
			</div>

			<!-- Community (Purple filled) -->
			<div
				class="absolute top-[355px] left-[0px] flex w-[342px] flex-row items-center justify-start gap-[18px] rounded-[20px] border border-white bg-[#7502ff] p-2.5"
				style="transform: rotate(-0.14deg)"
			>
				<div
					class="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[50px] bg-white"
				>
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
							fill="#7502FF"
						/>
					</svg>
				</div>
				<div
					class="font-['Geist-Bold',_sans-serif] text-base leading-6 font-bold text-white"
					style="letter-spacing: -0.005em"
				>
					Community
				</div>
			</div>
		</div>

		<!-- Mobile Feature List -->
		<div class="flex flex-col gap-4 md:hidden">
			{#each features as feature}
				<div
					class="flex w-full flex-row items-center justify-start gap-4 rounded-[20px] p-3 {feature.filled
						? 'border border-white bg-[#7502ff]'
						: 'border border-[#7502ff] bg-white'}"
				>
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full {feature.filled
							? 'bg-white'
							: 'border border-[#7502ff] bg-white'}"
					>
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#7502FF" />
						</svg>
					</div>
					<span
						class="font-['Geist-Bold',_sans-serif] text-sm font-bold {feature.filled
							? 'text-white'
							: 'text-[#7502ff]'}"
					>
						{feature.label}
					</span>
				</div>
			{/each}
		</div>
	</div>
</section>
