<script>
    import {viewport} from '$lib/utils/Viewport.js'

    let hasAnimated = $state(false);
    let inView = $state(false);
    let {variant = 'fade', duration = 1, delay = 0, children} = $props()

    function handleEnterViewport() {
        if (!hasAnimated) {
            inView = true;
            hasAnimated = true;
        }
    }
    function handleExitViewport() {
        // Don't reset inView - keep the animated state
    }
</script>
<div
        use:viewport
        onenterViewport={handleEnterViewport}
        onexitViewport={handleExitViewport}
        style="--duration: {duration}s; --delay: {delay}s"
>
    <div
            class={inView ? `enter-${variant}` : `exit-${variant}`}
            class:enter-animation={inView}
            class:exit-animation={!inView}
    >
        {@render children?.()}
    </div>
</div>

<style>
    .enter-animation {
        opacity: 1;
        transition-duration: var(--duration);
        transition-delay: var(--delay);
        transform: scale(1) translateX(0) translateY(0);
    }
    .exit-animation {
        opacity: 0;
        transition-duration: 0.5s;
        transition-delay: 0.2s;
        pointer-events: none;
    }
    .exit-top {
        transform: translateY(-200px)
    }
    .exit-bottom {
        transform: translateY(100px)
    }
    .exit-left {
        transform: translateX(-200px)
    }
    .exit-right {
        transform: translateX(200px)
    }
    .exit-scale {
        transform: scale(0)
    }
</style>
