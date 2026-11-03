<script lang="ts">
	import { goto } from '$app/navigation';
	import { links } from '$lib/config/site';
	import { joinWaitlist, type WaitlistRole } from '$lib/waitlist';
	import Icon from './Icon.svelte';

	let {
		role,
		source,
		buttonLabel = 'Join Waitlist',
		placeholder = 'Enter your email address',
		successMessage = "You're on the list. We'll be in touch soon.",
		tone = 'dark',
		class: className = ''
	}: {
		/**
		 * Audience to save under. Leave unset where the audience is unknown (the
		 * footer): the email is then carried to the full waitlist form, which asks
		 * for name and audience, instead of being saved under a guessed role.
		 */
		role?: WaitlistRole;
		/** Recorded with the sign-up to show which form it came from */
		source: string;
		buttonLabel?: string;
		placeholder?: string;
		successMessage?: string;
		/** Background the form sits on — sets the status text colour */
		tone?: 'dark' | 'light';
		class?: string;
	} = $props();

	const inputId = $props.id();
	let email = $state('');
	let status = $state<'idle' | 'sending' | 'done' | 'already' | 'error'>('idle');

	async function submit(e: SubmitEvent) {
		e.preventDefault();
		if (!role) {
			await goto(`${links.waitlist}?email=${encodeURIComponent(email.trim())}&source=${source}`);
			return;
		}
		status = 'sending';
		try {
			status = (await joinWaitlist({ email, role, source })) === 'already' ? 'already' : 'done';
			email = '';
		} catch (err) {
			console.error(err);
			status = 'error';
		}
	}
</script>

<form class="w-full {className}" onsubmit={submit}>
	<label for={inputId} class="sr-only">Email address</label>
	<div class="flex flex-col gap-2 rounded-2xl bg-white p-1.5 shadow-sm sm:flex-row">
		<input
			id={inputId}
			type="email"
			required
			autocomplete="email"
			bind:value={email}
			{placeholder}
			class="min-w-0 flex-1 rounded-xl border-0 bg-transparent px-4 py-3 font-geist text-base text-secondary placeholder:text-text-secondary focus:ring-2 focus:ring-primary/40"
		/>
		<button type="submit" class="btn btn-primary py-3" disabled={status === 'sending'}>
			{status === 'sending' ? 'Sending…' : buttonLabel}
			<Icon name="send" size={16} />
		</button>
	</div>
	<p class="mt-2 min-h-5 font-geist text-sm" aria-live="polite">
		{#if status === 'done'}
			<span class={tone === 'dark' ? 'text-emerald-300' : 'text-emerald-700'}>{successMessage}</span>
		{:else if status === 'already'}
			<span class={tone === 'dark' ? 'text-emerald-300' : 'text-emerald-700'}>
				You're already on the waitlist. We'll be in touch soon.
			</span>
		{:else if status === 'error'}
			<span class={tone === 'dark' ? 'text-red-300' : 'text-red-600'}>
				We couldn't save that just now. Please try again in a moment.
			</span>
		{/if}
	</p>
</form>
