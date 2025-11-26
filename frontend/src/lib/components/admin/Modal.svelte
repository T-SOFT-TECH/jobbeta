<script lang="ts">
	let { title, show, onClose, size = 'md', children } = $props<{
		title: string;
		show: boolean;
		onClose: () => void;
		size?: 'sm' | 'md' | 'lg' | 'xl';
		children?: any;
	}>();

	const sizeClasses = {
		sm: 'max-w-md',
		md: 'max-w-lg',
		lg: 'max-w-2xl',
		xl: 'max-w-4xl'
	};

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}
</script>

{#if show}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
		onclick={handleBackdropClick}
	>
		<div class="w-full {sizeClasses[size]} rounded-lg bg-white p-6 shadow-xl">
			<div class="mb-6 flex items-center justify-between">
				<h2 class="text-xl font-bold text-gray-900">{title}</h2>
				<button
					onclick={onClose}
					class="text-gray-400 transition-colors hover:text-gray-600"
					aria-label="Close"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<div class="max-h-[70vh] overflow-y-auto">
				{@render children()}
			</div>
		</div>
	</div>
{/if}
