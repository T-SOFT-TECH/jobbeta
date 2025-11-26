<script lang="ts">
	let {
		variant = 'default',
		children
	} = $props<{
		variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'purple';
		children?: any;
	}>();

	const variantClasses = {
		default: 'bg-gray-100 text-gray-800',
		success: 'bg-green-100 text-green-800',
		warning: 'bg-yellow-100 text-yellow-800',
		danger: 'bg-red-100 text-red-800',
		info: 'bg-blue-100 text-blue-800',
		purple: 'bg-purple-100 text-purple-800'
	};
</script>

<span class="inline-flex rounded-full px-2 text-xs font-semibold leading-5 {variantClasses[variant]}">
	{@render children()}
</span>
