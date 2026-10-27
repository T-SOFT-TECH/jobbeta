<script lang="ts" generics="K extends string">
	import { morph, vtName } from '$lib/motion/transitions';

	/**
	 * Accessible segmented tab list. The parent renders the panel with
	 * id="{idPrefix}-panel-{key}", role="tabpanel" and aria-labelledby="{idPrefix}-tab-{key}".
	 * Switching runs as a View Transition: the pill slides to the new tab and the panel slides in
	 * from that side (instant where unsupported or with reduced motion).
	 */
	let {
		options,
		value = $bindable(),
		idPrefix,
		label,
		tone = 'light',
		class: className = ''
	}: {
		options: { key: K; label: string }[];
		value: K;
		idPrefix: string;
		label: string;
		/** `light` for light backgrounds, `dark` for purple/dark ones */
		tone?: 'light' | 'dark';
		class?: string;
	} = $props();

	let list: HTMLDivElement;
	let buttons: HTMLButtonElement[] = $state([]);

	// Names exist only while this widget's own transition runs (see morph)
	function arm(on: boolean) {
		const pill = list.querySelector<HTMLElement>('[data-tab-pill]');
		if (pill) vtName(pill, on ? `${idPrefix}-pill` : null, 'tab-pill');
		for (const el of list.querySelectorAll<HTMLElement>('[data-tab-label]')) {
			vtName(el, on ? `${idPrefix}-label-${el.dataset.tabLabel}` : null, 'tab-label');
		}
		const panel = document.querySelector<HTMLElement>(
			`[role="tabpanel"][aria-labelledby^="${idPrefix}-tab-"]`
		);
		if (panel) vtName(panel, on ? `${idPrefix}-panel` : null, 'tab-panel');
	}

	function select(key: K) {
		if (key === value) return;
		const from = options.findIndex((o) => o.key === value);
		const to = options.findIndex((o) => o.key === key);
		morph(() => (value = key), { arm, direction: to > from ? 'next' : 'prev' });
	}

	// Arrow keys move between tabs, per the WAI-ARIA tabs pattern
	function onKeydown(e: KeyboardEvent, index: number) {
		const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
		if (!step) return;
		e.preventDefault();
		const next = (index + step + options.length) % options.length;
		select(options[next].key);
		buttons[next]?.focus();
	}
</script>

<div
	bind:this={list}
	role="tablist"
	aria-label={label}
	class="inline-flex max-w-full gap-1 overflow-x-auto rounded-2xl p-1 {tone === 'light'
		? 'bg-primary/8'
		: 'bg-white/10'} {className}"
>
	{#each options as option, i (option.key)}
		{@const selected = option.key === value}
		<button
			bind:this={buttons[i]}
			type="button"
			role="tab"
			id="{idPrefix}-tab-{option.key}"
			aria-controls="{idPrefix}-panel-{option.key}"
			aria-selected={selected}
			tabindex={selected ? 0 : -1}
			onclick={() => select(option.key)}
			onkeydown={(e) => onKeydown(e, i)}
			class="relative isolate rounded-xl px-4 py-2.5 font-geist text-sm font-semibold whitespace-nowrap transition-colors duration-300 md:px-5 md:text-base {selected
				? tone === 'light'
					? 'text-primary'
					: 'text-secondary'
				: tone === 'light'
					? 'text-secondary/70 hover:text-secondary'
					: 'text-white/80 hover:text-white'}"
		>
			{#if selected}
				<span
					data-tab-pill
					aria-hidden="true"
					class="absolute inset-0 -z-10 rounded-xl bg-white {tone === 'light' ? 'shadow-sm' : ''}"
				></span>
			{/if}
			<span data-tab-label={option.key}>{option.label}</span>
		</button>
	{/each}
</div>
