export function viewport(node: HTMLElement) {
	let observer: IntersectionObserver;

	const handleIntersect = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				node.dispatchEvent(new CustomEvent('enterViewport'));
			} else {
				node.dispatchEvent(new CustomEvent('exitViewport'));
			}
		});
	};

	const createObserver = () => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1
		};

		observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(node);
	};

	createObserver();

	return {
		destroy() {
			if (observer) {
				observer.disconnect();
			}
		}
	};
}
