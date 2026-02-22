import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * useLenis
 * Initialises Lenis smooth scrolling once the intro is done.
 * Higher duration + lower wheelMultiplier = noticeably smoother, more cinematic scroll.
 * @param {boolean} showContent - true when SVG intro has finished
 */
export function useLenis(showContent) {
    useEffect(() => {
        if (!showContent) return;

        const lenis = new Lenis({
            duration: 2.2,          // Longer glide — feels luxurious, not snappy
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease-out
            smoothWheel: true,
            wheelMultiplier: 0.65,         // Lower = slower response per scroll tick (smoother)
            smoothTouch: false,        // Let native touch handle itself
            touchMultiplier: 1.2,
        });

        // Keep GSAP ScrollTrigger perfectly in sync with Lenis scroll position
        lenis.on("scroll", ScrollTrigger.update);

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, [showContent]);
}
