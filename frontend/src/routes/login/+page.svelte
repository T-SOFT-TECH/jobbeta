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
		class="relative flex w-full max-w-[1171px] flex-col overflow-hidden rounded-[32px] bg-white shadow-2xl lg:min-h-[800px] lg:flex-row"
	>
		<!-- Left Side: Form -->
		<div
			class="flex w-full flex-col justify-center px-6 py-12 sm:px-12 lg:w-1/2 lg:px-[60px] xl:px-[120px]"
		>
			<div class="mx-auto w-full max-w-[450px] lg:mx-0">
				<!-- Header -->
				<div class="mb-8 lg:mb-10">
					<h1 class="mb-1 text-2xl leading-tight font-bold text-black sm:text-[32px] sm:leading-9">
						{isSignUp ? 'Create Account' : 'Welcome Back'}
					</h1>
					<p
						class="text-sm leading-[21px] font-normal tracking-[-0.005em] text-[rgba(42,44,44,0.70)]"
					>
						{isSignUp
							? "welcome to JobBeta - let's Create your account"
							: "welcome to JobBeta - let's kick start from where we stopped"}
					</p>
				</div>

				<!-- Social Login -->
				<div class="mb-8 flex flex-col gap-3 sm:flex-row sm:justify-between sm:gap-5 lg:mb-[62px]">
					<button
						class="flex h-[54px] flex-1 items-center justify-center gap-3 rounded-[20px] border border-[rgba(42,44,44,0.25)] px-3 py-1.5 transition-colors hover:bg-gray-50"
					>
						<div class="flex h-10 w-10 items-center justify-center">
							<img src="/images/login/group0.svg" alt="Apple" class="h-[22px] w-6" />
						</div>
						<span
							class="text-sm leading-[21px] font-bold tracking-[-0.005em] text-[rgba(42,44,44,0.80)]"
							>Sign In with Apple</span
						>
					</button>
					<button
						class="flex h-[54px] flex-1 items-center justify-center gap-3 rounded-[20px] border border-[rgba(42,44,44,0.25)] px-3 py-1.5 transition-colors hover:bg-gray-50"
					>
						<div class="flex h-10 w-10 items-center justify-center">
							<img src="/images/login/group1.svg" alt="Google" class="h-6 w-5" />
						</div>
						<span
							class="text-sm leading-[21px] font-bold tracking-[-0.005em] text-[rgba(42,44,44,0.80)]"
							>Sign In with Google</span
						>
					</button>
				</div>

				<!-- Divider -->
				<div class="mb-8 flex w-full items-center justify-between gap-4 lg:mb-[62px]">
					<div class="flex-1 border-t border-[rgba(42,44,44,0.16)]"></div>
					<span
						class="text-base leading-6 font-normal tracking-[-0.005em] text-[rgba(42,44,44,0.60)]"
						>OR</span
					>
					<div class="flex-1 border-t border-[rgba(42,44,44,0.16)]"></div>
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
					class="flex flex-col gap-6 lg:gap-[62px]"
				>
					<div class="flex flex-col gap-4 lg:gap-2.5">
						{#if isSignUp}
							<div class="flex flex-col gap-2 lg:gap-5">
								<label
									for="name"
									class="text-base leading-6 font-semibold tracking-[-0.005em] text-[#2a2c2c]"
									>Full Name</label
								>
								<div class="flex h-14 items-center rounded-2xl border border-[#7502ff] px-4">
									<input
										type="text"
										id="name"
										bind:value={name}
										required
										placeholder="Enter full name"
										class="h-full w-full border-none bg-white text-base leading-6 font-normal tracking-[-0.005em] text-[rgba(42,44,44,0.65)] outline-none focus:ring-0"
									/>
								</div>
							</div>

							<div class="flex flex-col gap-2 lg:gap-5">
								<label
									for="role"
									class="text-base leading-6 font-semibold tracking-[-0.005em] text-[#2a2c2c]"
									>I am a...</label
								>
								<div
									class="flex h-14 items-center rounded-2xl border border-[rgba(42,44,44,0.10)] px-4"
								>
									<select
										id="role"
										bind:value={role}
										required
										class="h-full w-full border-none bg-white text-base leading-6 font-normal tracking-[-0.005em] text-[rgba(42,44,44,0.65)] outline-none focus:ring-0"
									>
										<option value="student">Student</option>
										<option value="jobseeker">Job Seeker</option>
										<option value="employer">Employer</option>
										<option value="admin">Administrator</option>
									</select>
								</div>
							</div>
						{/if}

						<div class="flex flex-col gap-2 lg:gap-5">
							<label
								for="email"
								class="text-base leading-6 font-semibold tracking-[-0.005em] text-[#2a2c2c]"
								>Username</label
							>
							<div class="flex h-14 items-center rounded-2xl border border-[#7502ff] px-4">
								<input
									type="email"
									id="email"
									bind:value={email}
									required
									placeholder="Enter username"
									class="h-full w-full border-none bg-white text-base leading-6 font-normal tracking-[-0.005em] text-[rgba(42,44,44,0.65)] outline-none focus:ring-0"
								/>
							</div>
						</div>

						<div class="flex flex-col gap-2 lg:gap-5">
							<label
								for="password"
								class="text-base leading-6 font-semibold tracking-[-0.005em] text-[#2a2c2c]"
								>Password</label
							>
							<div class="flex flex-col gap-2.5">
								<div
									class="flex h-14 items-center gap-2.5 rounded-2xl border border-[rgba(42,44,44,0.10)] px-4"
								>
									<input
										type={showPassword ? 'text' : 'password'}
										id="password"
										bind:value={password}
										required
										placeholder="Enter password"
										class="h-full flex-1 border-none bg-white text-base leading-6 font-normal tracking-[-0.005em] text-[rgba(42,44,44,0.65)] outline-none focus:ring-0"
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
										class="text-right text-base leading-6 font-bold tracking-[-0.005em] text-[#3f018a] hover:underline"
										>Forgot password?</a
									>
								{/if}
							</div>
						</div>
					</div>

					<div class="flex flex-col items-center gap-3">
						<button
							type="submit"
							disabled={loading}
							class="w-full rounded-[20px] bg-[#7502ff] px-2.5 py-4 font-['Geist-Bold',_sans-serif] text-base leading-6 font-bold tracking-[-0.005em] text-white transition-colors hover:bg-[#6002d1] disabled:cursor-not-allowed disabled:opacity-50"
						>
							{loading ? 'Please wait...' : isSignUp ? 'Sign Up' : 'Sign In'}
						</button>

						<div class="text-center text-base leading-6 font-normal tracking-[-0.005em]">
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

		<!-- Right Side: Purple Card (Hidden on mobile) -->
		<div
			class="relative hidden items-center justify-center overflow-hidden bg-[#7502ff] p-8 lg:flex lg:w-1/2"
		>
			<!-- Background Decoration -->
			<img
				src="/images/login/layer-20.svg"
				class="absolute top-16 left-[72px] h-auto opacity-50"
				alt=""
			/>

			<!-- Content -->
			<div class="relative z-10 flex flex-col items-center gap-8">
				<div class="max-w-[450px] text-center">
					<h2
						class="font-['Raleway-Bold',_sans-serif] text-2xl leading-tight font-bold text-white xl:text-[32px] xl:leading-[48px]"
					>
						Kick Start your Career
					</h2>
					<p class="mt-2 text-sm leading-[21px] font-semibold tracking-[-0.005em] text-white/90">
						welcome to JobBeta - let's Create your account
					</p>
				</div>

				<!-- Main Image -->
				<img
					src="/images/login/frame-20856643060.png"
					alt="JobBeta Dashboard Preview"
					class="w-full max-w-[500px] rounded-[20px] border-[10px] border-white object-cover shadow-2xl"
				/>

				<!-- Decorative Elements -->
				<div class="flex w-full max-w-[450px] items-center justify-between gap-4 opacity-60">
					<div class="h-[13px] w-[84px] shrink-0 overflow-hidden">
						<img src="/images/login/page-10.svg" class="h-auto" alt="" />
					</div>
					<img src="/images/login/page-11.svg" class="h-[37px] w-[45px] shrink-0" alt="" />
					<div class="h-[13px] w-[84px] shrink-0 overflow-hidden">
						<img src="/images/login/page-12.svg" class="h-auto" alt="" />
					</div>
					<div class="h-[22px] w-[71px] shrink-0 overflow-hidden">
						<img src="/images/login/clip-path-group0.svg" class="h-auto" alt="" />
					</div>
					<img src="/images/login/page-13.svg" class="h-[37px] w-[45px] shrink-0" alt="" />
				</div>
			</div>
		</div>

		<!-- Footer -->
		<div
			class="absolute bottom-4 left-0 w-full py-3 text-center text-sm leading-[21px] font-normal tracking-[-0.005em] text-[rgba(42,44,44,0.75)] lg:bottom-6 lg:w-1/2"
		>
			Copyright@2025. All rights Reserved
		</div>
	</div>
</div>
