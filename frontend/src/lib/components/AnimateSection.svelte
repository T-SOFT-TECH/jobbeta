<script lang="ts">
	import Animate from '$lib/components/Animate.svelte';

	let {
		variant = 'bottom',
		duration = 0.8,
		delay = 0,
		stagger = 0.1,
		class: className = '',
		children
	} = $props<{
		variant?: 'top' | 'bottom' | 'left' | 'right' | 'fade' | 'scale';
		duration?: number;
		delay?: number;
		stagger?: number;
		class?: string;
		children?: any;
	}>();
</script>

<Animate {variant} {duration} {delay}>
	<div class={className}>
		{@render children()}
	</div>
</Animate>
