<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import Animate from '$lib/components/Animate.svelte';
	import Icon from '$lib/components/ui/Icon.svelte';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let loading = $state(false);
	let submitted = $state(false);
	let error = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!name.trim() || !email.trim() || !message.trim()) {
			error = 'Please fill in your name, email address and message.';
			return;
		}
		loading = true;
		error = '';
		try {
			await pb.collection('contact_messages').create({
				name: name.trim(),
				email: email.trim(),
				message: message.trim()
			});
			submitted = true;
		} catch (err) {
			console.error(err);
			error =
				'We could not send your message right now. Please try again in a moment, or email us at hello@jobbeta.com.';
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Contact Us - JobBeta</title>
	<meta
		name="description"
		content="Get in touch with the JobBeta team — questions, support, partnerships or just to say hello."
	/>
</svelte:head>

<section class="w-full bg-white py-12 md:py-20">
	<div class="page-container">
		<div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
			<!-- Left Content -->
			<Animate variant="left" duration={0.7}>
				<div class="flex flex-col gap-6 lg:pt-6">
					<h1
						class="font-geist text-4xl leading-tight font-bold text-[#110d21] sm:text-5xl md:text-[56px]"
					>
						Get in touch<br />with us
					</h1>
					<p class="max-w-md font-geist text-base leading-relaxed text-[#62717a] sm:text-lg">
						Do you have a question about JobBeta, need support with your account, want to partner
						with us or simply want to say hello? We'd love to hear from you.
					</p>

					<div class="mt-4 flex flex-col gap-5">
						<a
							href="mailto:hello@jobbeta.com"
							class="flex items-center gap-4 font-geist text-base text-[#110d21] transition-colors hover:text-[#7502ff]"
						>
							<span class="flex h-11 w-11 items-center justify-center rounded-full bg-[#7502ff]/10">
								<img src="/icons/Email.svg" alt="" class="h-5 w-5" />
							</span>
							<span>
								<span class="block text-sm text-[#62717a]">Email us</span>
								<span class="font-semibold">hello@jobbeta.com</span>
							</span>
						</a>
						<div class="flex items-center gap-4 font-geist text-base text-[#110d21]">
							<span class="flex h-11 w-11 items-center justify-center rounded-full bg-[#7502ff]/10">
								<Icon name="message" size={20} class="text-primary" />
							</span>
							<span>
								<span class="block text-sm text-[#62717a]">Partnerships &amp; demos</span>
								<span class="font-semibold">Use the form and select "Partnership"</span>
							</span>
						</div>
					</div>

					<div class="mt-6 flex gap-6 font-geist text-base text-[#62717a]">
						<a href="https://linkedin.com" class="transition-colors hover:text-[#7502ff]"
							>LinkedIn</a
						>
						<a href="https://twitter.com" class="transition-colors hover:text-[#7502ff]">Twitter</a>
						<a href="https://facebook.com" class="transition-colors hover:text-[#7502ff]"
							>Facebook</a
						>
						<a href="https://instagram.com" class="transition-colors hover:text-[#7502ff]"
							>Instagram</a
						>
					</div>
				</div>
			</Animate>

			<!-- Form Card -->
			<Animate variant="right" duration={0.7}>
				<div class="rounded-[24px] bg-[#f8f3ff] p-6 md:p-10">
					{#if submitted}
						<div class="flex flex-col items-center py-10 text-center">
							<div
								class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
							>
								<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
									<path
										d="M20 6L9 17L4 12"
										stroke="#16a34a"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<h2 class="font-geist text-2xl font-bold text-[#110d21]">Message sent!</h2>
							<p class="mt-3 max-w-sm font-geist text-base text-[#62717a]">
								Thanks for reaching out. Our team will get back to you within 1–2 business days.
							</p>
						</div>
					{:else}
						<h2 class="font-geist text-xl font-bold tracking-wide text-[#110d21] md:text-2xl">
							SEND US A MESSAGE
						</h2>

						{#if error}
							<div
								class="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 font-geist text-sm text-red-700"
							>
								{error}
							</div>
						{/if}

						<form class="mt-8 flex flex-col gap-6" onsubmit={handleSubmit}>
							<div class="flex flex-col gap-2">
								<label for="contact-name" class="font-geist text-sm font-semibold text-[#2a2c2c]">
									Name
								</label>
								<input
									id="contact-name"
									type="text"
									required
									bind:value={name}
									placeholder="Enter your name"
									class="h-14 rounded-2xl border border-[#d0d5dd] bg-white px-4 font-geist text-base text-[#110d21] placeholder:text-[#98a2b3] focus:border-[#7502ff] focus:ring-2 focus:ring-[#7502ff]/20 focus:outline-none"
								/>
							</div>

							<div class="flex flex-col gap-2">
								<label for="contact-email" class="font-geist text-sm font-semibold text-[#2a2c2c]">
									Email Address
								</label>
								<input
									id="contact-email"
									type="email"
									required
									bind:value={email}
									placeholder="Enter your email address"
									class="h-14 rounded-2xl border border-[#d0d5dd] bg-white px-4 font-geist text-base text-[#110d21] placeholder:text-[#98a2b3] focus:border-[#7502ff] focus:ring-2 focus:ring-[#7502ff]/20 focus:outline-none"
								/>
							</div>

							<div class="flex flex-col gap-2">
								<label
									for="contact-message"
									class="font-geist text-sm font-semibold text-[#2a2c2c]"
								>
									How Can We Help You?
								</label>
								<textarea
									id="contact-message"
									required
									bind:value={message}
									rows="5"
									placeholder="Drop a message"
									class="resize-none rounded-2xl border border-[#d0d5dd] bg-white px-4 py-4 font-geist text-base text-[#110d21] placeholder:text-[#98a2b3] focus:border-[#7502ff] focus:ring-2 focus:ring-[#7502ff]/20 focus:outline-none"
								></textarea>
							</div>

							<button
								type="submit"
								disabled={loading}
								class="flex h-14 items-center justify-center rounded-[20px] bg-[#110d21] font-geist text-base font-bold text-white transition-colors hover:bg-[#2a2440] disabled:cursor-not-allowed disabled:opacity-60"
							>
								{loading ? 'Sending...' : 'Send Message'}
							</button>
						</form>
					{/if}
				</div>
			</Animate>
		</div>
	</div>
</section>
