<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { goto } from '$app/navigation';

	let email = $state('');
	let password = $state('');
	let name = $state('');
	let role = $state('student'); // Default role
	let error = $state('');
	let loading = $state(false);
	let isSignUp = $state(false);
	let showPassword = $state(false);

	async function handleSubmit() {
		loading = true;
		error = '';
		try {
			if (isSignUp) {
				// Sign up - create new user with role
				await pb.collection('users').create({
					email,
					password,
					passwordConfirm: password,
					name,
					role,
					status: 'active',
					emailVisibility: true
				});
				// Auto-login after signup
				await pb.collection('users').authWithPassword(email, password);
			} else {
				// Sign in
				await pb.collection('users').authWithPassword(email, password);
			}

			// Role-based redirect
			const userRole = pb.authStore.record?.role;

			if (userRole === 'admin') {
				goto('/admin');
			} else if (userRole === 'employer') {
				goto('/employer-dashboard');
			} else {
				goto('/'); // student, jobseeker, or default
			}
		} catch (e: any) {
			error = e?.message || (isSignUp ? 'Failed to create account' : 'Invalid email or password');
			console.error(e);
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>{isSignUp ? 'Sign Up' : 'Sign In'} - JobBeta</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="flex min-h-screen items-center justify-center bg-[#eaecf0] p-4 font-['Raleway',_sans-serif]"
>
	<div
		class="relative flex h-[971px] w-full max-w-[1171px] flex-col overflow-hidden rounded-[32px] bg-white shadow-2xl md:flex-row"
	>
		<!-- Left Side: Form -->
		<div class="absolute left-[120px] top-[186px] z-20 flex w-full flex-col md:w-[450px]">
			<div class="w-full">
				<div class="mb-10">
					<h1
						class="mb-1 font-['Raleway-Bold',_sans-serif] text-[32px] font-bold leading-9 text-[#000000]"
					>
						{isSignUp ? 'Create Account' : 'Welcome Back'}
					</h1>
					<p
						class="text-sm font-normal leading-[21px] tracking-[-0.005em] text-[rgba(42,44,44,0.70)]"
					>
						{isSignUp
							? 'welcome to JobBeta - let’s Create your account'
							: 'welcome to JobBeta - let’s kick start from where we stopped'}
					</p>
				</div>

				<!-- Social Login -->
				<div class="mb-[62px] flex flex-row justify-between gap-5">
					<button
						class="flex h-[54px] flex-row items-center justify-start gap-3 rounded-[20px] border border-[rgba(42,44,44,0.25)] pb-1.5 pl-3 pr-3 pt-1.5 transition-colors hover:bg-gray-50"
					>
						<div class="relative flex h-10 w-10 items-center justify-center">
							<img src="/images/login/group0.svg" alt="Apple" class="h-[22px] w-6" />
						</div>
						<span
							class="text-sm font-bold leading-[21px] tracking-[-0.005em] text-[rgba(42,44,44,0.80)]"
							>Sign In with Apple</span
						>
					</button>
					<button
						class="flex h-[54px] flex-row items-center justify-start gap-3 rounded-[20px] border border-[rgba(42,44,44,0.25)] pb-1.5 pl-3 pr-3 pt-1.5 transition-colors hover:bg-gray-50"
					>
						<div class="relative flex h-10 w-10 items-center justify-center">
							<img src="/images/login/group1.svg" alt="Google" class="h-6 w-5" />
						</div>
						<span
							class="text-sm font-bold leading-[21px] tracking-[-0.005em] text-[rgba(42,44,44,0.80)]"
							>Sign In with Google</span
						>
					</button>
				</div>

				<div class="mb-[62px] flex w-full items-center justify-between">
					<div class="w-[200px] border-t border-[rgba(42,44,44,0.16)]"></div>
					<span
						class="text-base font-normal leading-6 tracking-[-0.005em] text-[rgba(42,44,44,0.60)]"
						>OR</span
					>
					<div class="w-[200px] border-t border-[rgba(42,44,44,0.16)]"></div>
				</div>

				<!-- Error Message -->
				{#if error}
					<div class="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
						{error}
					</div>
				{/if}

				<!-- Form -->
				<form
					onsubmit={(e) => {
						e.preventDefault();
						handleSubmit();
					}}
					class="flex flex-col gap-[62px]"
				>
					<div class="flex flex-col gap-2.5">
						{#if isSignUp}
							<div class="flex flex-col gap-5">
								<label
									for="name"
									class="text-base font-semibold leading-6 tracking-[-0.005em] text-[#2a2c2c]"
									>Full Name</label
								>
								<div class="flex h-14 items-center rounded-2xl border border-[#7502ff] p-2.5">
									<input
										type="text"
										id="name"
										bind:value={name}
										required
										placeholder="Enter full name"
										class="h-full w-full border-none bg-white text-base font-normal leading-6 tracking-[-0.005em] text-[rgba(42,44,44,0.65)] outline-none focus:ring-0"
									/>
								</div>
							</div>

							<div class="flex flex-col gap-5">
								<label
									for="role"
									class="text-base font-semibold leading-6 tracking-[-0.005em] text-[#2a2c2c]"
									>I am a...</label
								>
								<div
									class="flex h-14 items-center rounded-2xl border border-[rgba(42,44,44,0.10)] p-2.5"
								>
									<select
										id="role"
										bind:value={role}
										required
										class="h-full w-full border-none bg-white text-base font-normal leading-6 tracking-[-0.005em] text-[rgba(42,44,44,0.65)] outline-none focus:ring-0"
									>
										<option value="student">Student</option>
										<option value="jobseeker">Job Seeker</option>
										<option value="employer">Employer</option>
										<option value="admin">Administrator</option>
									</select>
								</div>
							</div>
						{/if}

						<div class="flex flex-col gap-5">
							<label
								for="email"
								class="text-base font-semibold leading-6 tracking-[-0.005em] text-[#2a2c2c]"
								>Username</label
							>
							<div class="flex h-14 items-center rounded-2xl border border-[#7502ff] p-2.5">
								<input
									type="email"
									id="email"
									bind:value={email}
									required
									placeholder="Enter username"
									class="h-full w-full border-none bg-white text-base font-normal leading-6 tracking-[-0.005em] text-[rgba(42,44,44,0.65)] outline-none focus:ring-0"
								/>
							</div>
						</div>

						<div class="flex flex-col gap-5">
							<label
								for="password"
								class="text-base font-semibold leading-6 tracking-[-0.005em] text-[#2a2c2c]"
								>Password</label
							>
							<div class="flex flex-col gap-2.5">
								<div
									class="flex h-14 items-center gap-2.5 rounded-2xl border border-[rgba(42,44,44,0.10)] p-2.5"
								>
									<input
										type={showPassword ? 'text' : 'password'}
										id="password"
										bind:value={password}
										required
										placeholder="Enter password"
										class="h-full flex-1 border-none bg-white text-base font-normal leading-6 tracking-[-0.005em] text-[rgba(42,44,44,0.65)] outline-none focus:ring-0"
									/>
									<button
										type="button"
										onclick={() => (showPassword = !showPassword)}
										class="h-6 w-6 shrink-0"
									>
										<img
											src={showPassword
												? '/images/login/visibility-off0.svg'
												: '/images/login/visibility-off0.svg'}
											alt="Toggle Password"
											class="h-full w-full"
										/>
									</button>
								</div>
								{#if !isSignUp}
									<a
										href="/forgot-password"
										class="text-right text-base font-bold leading-6 tracking-[-0.005em] text-[#3f018a] hover:underline"
										>Forgot password?</a
									>
								{/if}
							</div>
						</div>
					</div>

					<div class="flex h-24 flex-col items-center gap-3">
						<button
							type="submit"
							disabled={loading}
							class="w-full rounded-[20px] bg-[#7502ff] pb-4 pl-2.5 pr-2.5 pt-4 font-['Geist-Bold',_sans-serif] text-base font-bold leading-6 tracking-[-0.005em] text-white transition-colors hover:bg-[#6002d1] disabled:cursor-not-allowed disabled:opacity-50"
						>
							{loading ? 'Please wait...' : isSignUp ? 'Sign Up' : 'Sign In'}
						</button>

						<div class="text-center text-base font-normal leading-6 tracking-[-0.005em]">
							<span class="text-[rgba(42,44,44,0.65)]">
								{isSignUp ? 'Already have an account?' : 'Dont have an Account?'}
							</span>
							<button
								type="button"
								onclick={() => (isSignUp = !isSignUp)}
								class="ml-1 font-bold text-[#7502ff] hover:underline"
							>
								{isSignUp ? 'Sign In' : 'SignUp'}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>

		<!-- Right Side: Purple Card -->
		<div
			class="absolute left-[693px] top-6 hidden h-[971px] w-[721px] overflow-hidden rounded-2xl bg-[#7502ff] md:block"
		>
			<!-- Content -->
			<div class="absolute left-[86px] top-[123px] flex w-[450px] flex-col gap-1">
				<div
					class="font-['Raleway-Bold',_sans-serif] text-[32px] font-bold leading-[48px] text-white"
				>
					Kick Start your Career
				</div>
				<div
					class="text-center font-['Raleway-SemiBold',_sans-serif] text-sm font-semibold leading-[21px] tracking-[-0.005em] text-white"
				>
					welcome to JobBeta - let’s Create your account
				</div>
			</div>

			<!-- Main Image -->
			<img
				src="/images/login/frame-20856643060.png"
				class="absolute left-[calc(50%_-_274.5px)] top-[249px] h-[585px] w-[664px] rounded-[20px] border-[10px] border-white object-cover"
			/>

			<!-- Decorative Elements -->
			<div
				class="absolute left-[89px] top-[887px] flex w-[561px] flex-row items-center justify-between"
			>
				<div class="relative h-[13px] w-[84px] shrink-0 overflow-hidden">
					<img src="/images/login/page-10.svg" class="absolute left-[0.01px] top-[0.01px] h-auto" />
				</div>
				<img src="/images/login/page-11.svg" class="h-[37.56px] w-[45.14px] shrink-0" />
				<div class="relative h-[13px] w-[84px] shrink-0 overflow-hidden">
					<img src="/images/login/page-12.svg" class="absolute left-[0.01px] top-[0.01px] h-auto" />
				</div>
				<div class="relative h-[22px] w-[71px] shrink-0 overflow-hidden">
					<img
						src="/images/login/clip-path-group0.svg"
						class="absolute left-[0.27px] top-[0.27px] h-auto"
					/>
				</div>
				<img src="/images/login/page-13.svg" class="h-[37.56px] w-[45.14px] shrink-0" />
			</div>

			<!-- Background Decoration -->
			<img src="/images/login/layer-20.svg" class="absolute left-[72px] top-16 h-auto" />
		</div>

		<!-- Footer -->
		<div
			class="absolute left-[calc(50%_-_484px)] top-[943px] text-center text-sm font-normal leading-[21px] tracking-[-0.005em] text-[rgba(42,44,44,0.75)]"
		>
			Copyright@2025. All rights Reserved
		</div>
	</div>
</div>
