<script lang="ts">
	import Animate from '$lib/components/Animate.svelte';
	import Icon from '$lib/components/ui/Icon.svelte';
	import { page } from '$app/state';
	import { contact, socials } from '$lib/config/site';
	import { enquiryTypes, sendEnquiry, type EnquiryType } from '$lib/waitlist';

	// "Request a Demo" / "Partner with us" CTAs arrive with ?topic= (links.demo,
	// links.partner) so the right enquiry type is already chosen.
	const topicParam = page.url.searchParams.get('topic');
	const initialType: EnquiryType =
		topicParam === 'demo' ? 'demo' : topicParam === 'partnership' ? 'partnership' : 'general';

	let name = $state('');
	let email = $state('');
	let enquiryType = $state<EnquiryType>(initialType);
	let organisation = $state('');
	let message = $state('');
	let loading = $state(false);
	let submitted = $state(false);
	let error = $state('');

	// A demo gives employers access to the prototype, so it is its own journey
	// (client review v2): its own heading, copy and a company field.
	const isDemo = $derived(enquiryType === 'demo');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!name.trim() || !email.trim() || !message.trim()) {
			error = 'Please fill in your name, email address and message.';
			return;
		}
		loading = true;
		error = '';
		try {
			await sendEnquiry({ name, email, enquiry_type: enquiryType, organisation, message });
			submitted = true;
		} catch (err) {
			console.error(err);
			error = `We could not send your message right now. Please try again in a moment, or email us at ${contact.email}.`;
		} finally {
			loading = false;
		}
	}

	const field =
		'h-14 rounded-2xl border border-[#d0d5dd] bg-white px-4 font-geist text-base text-[#110d21] placeholder:text-[#98a2b3] focus:border-[#7502ff] focus:ring-2 focus:ring-[#7502ff]/20 focus:outline-none';
	const label = 'font-geist text-sm font-semibold text-[#2a2c2c]';
</script>

<svelte:head>
	<title>Contact Us - JobBeta</title>
	<meta
		name="description"
		content="Have a question, feedback, or partnership enquiry? Get in touch with the JobBeta team."
	/>
</svelte:head>

<section class="w-full bg-white py-12 md:py-20">
	<div class="page-container">
		<div class="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
			<!-- Left Content -->
			<Animate variant="left" duration={0.7}>
				<div class="flex flex-col gap-6 lg:pt-6">
					<h1
						class="font-geist text-4xl leading-tight font-bold text-[#110d21] sm:text-5xl md:text-[56px]"
					>
						Get in touch<br />with us
					</h1>
					<p class="max-w-md font-geist text-base leading-relaxed text-[#62717a] sm:text-lg">
						Have a question, feedback, or partnership enquiry? We'd love to hear from you.
					</p>

					<div class="mt-2 flex flex-col gap-5">
						<a
							href="mailto:{contact.email}"
							class="flex items-center gap-4 font-geist text-base text-[#110d21] transition-colors hover:text-[#7502ff]"
						>
							<span class="flex h-11 w-11 items-center justify-center rounded-full bg-[#7502ff]/10">
								<Icon name="mail" size={20} class="text-primary" />
							</span>
							<span>
								<span class="block text-sm text-[#62717a]">General enquiries</span>
								<span class="font-semibold">{contact.email}</span>
							</span>
						</a>
						<div class="flex items-center gap-4 font-geist text-base text-[#110d21]">
							<span class="flex h-11 w-11 items-center justify-center rounded-full bg-[#7502ff]/10">
								<Icon name="message" size={20} class="text-primary" />
							</span>
							<span>
								<span class="block text-sm text-[#62717a]">Partnerships &amp; demos</span>
								<span class="font-semibold">Select the relevant enquiry type in the form.</span>
							</span>
						</div>
					</div>

					<div class="flex gap-6 font-geist text-base text-[#62717a]">
						{#each socials as social (social.label)}
							<a
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								class="transition-colors hover:text-[#7502ff]">{social.label}</a
							>
						{/each}
					</div>
				</div>
			</Animate>

			<!-- Form Card -->
			<Animate variant="right" duration={0.7}>
				<div class="rounded-[24px] bg-[#f8f3ff] p-5 md:p-8">
					{#if submitted}
						<div class="flex flex-col items-center py-10 text-center" role="status">
							<div
								class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
							>
								<Icon name="check" size={32} class="text-green-600" />
							</div>
							<h2 class="font-geist text-2xl font-bold text-[#110d21]">
								Thanks for reaching out!
							</h2>
							<p class="mt-3 max-w-sm font-geist text-base text-[#62717a]">
								We'll get back to you soon.
							</p>
						</div>
					{:else}
						<h2 class="font-geist text-xl font-bold text-[#110d21] md:text-2xl">
							{isDemo ? 'Request a demo' : 'How can we help?'}
						</h2>
						{#if isDemo}
							<p class="mt-2 font-geist text-sm leading-relaxed text-[#62717a]">
								Tell us about your hiring needs and we'll arrange a walkthrough of the JobBeta
								prototype.
							</p>
						{/if}

						{#if error}
							<div
								class="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 font-geist text-sm text-red-700"
								role="alert"
							>
								{error}
							</div>
						{/if}

						<form class="mt-6 flex flex-col gap-5" onsubmit={handleSubmit}>
							<div class="flex flex-col gap-2">
								<label for="contact-type" class={label}>Enquiry Type</label>
								<div class="relative">
									<select
										id="contact-type"
										bind:value={enquiryType}
										class="{field} w-full appearance-none pr-12"
									>
										{#each enquiryTypes as type (type.value)}
											<option value={type.value}>{type.label}</option>
										{/each}
									</select>
									<Icon
										name="chevron-down"
										size={18}
										class="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#62717a]"
									/>
								</div>
							</div>

							<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
								<div class="flex flex-col gap-2">
									<label for="contact-name" class={label}>Name</label>
									<input
										id="contact-name"
										type="text"
										required
										maxlength="120"
										autocomplete="name"
										bind:value={name}
										placeholder="Enter your name"
										class={field}
									/>
								</div>
								<div class="flex flex-col gap-2">
									<label for="contact-email" class={label}>
										{isDemo ? 'Work Email' : 'Email Address'}
									</label>
									<input
										id="contact-email"
										type="email"
										required
										autocomplete="email"
										bind:value={email}
										placeholder="Enter your email address"
										class={field}
									/>
								</div>
							</div>

							{#if isDemo || enquiryType === 'partnership'}
								<div class="flex flex-col gap-2">
									<label for="contact-org" class={label}>Company or organisation</label>
									<input
										id="contact-org"
										type="text"
										maxlength="160"
										autocomplete="organization"
										bind:value={organisation}
										placeholder="Enter your company name"
										class={field}
									/>
								</div>
							{/if}

							<div class="flex flex-col gap-2">
								<label for="contact-message" class={label}>Message</label>
								<textarea
									id="contact-message"
									required
									maxlength="5000"
									bind:value={message}
									rows="4"
									placeholder={isDemo
										? 'What roles are you hiring for, and roughly how many?'
										: 'Drop a message'}
									class="resize-none rounded-2xl border border-[#d0d5dd] bg-white px-4 py-4 font-geist text-base text-[#110d21] placeholder:text-[#98a2b3] focus:border-[#7502ff] focus:ring-2 focus:ring-[#7502ff]/20 focus:outline-none"
								></textarea>
							</div>

							<button type="submit" disabled={loading} class="btn btn-dark h-14">
								{loading ? 'Sending…' : isDemo ? 'Request a Demo' : 'Send Message'}
							</button>
						</form>
					{/if}
				</div>
			</Animate>
		</div>
	</div>
</section>
