import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * useLenis
 * Initialises Lenis smooth scrolling once the intro is done.
 * @param {boolean} showContent - true when SVG intro has finished
 */
export function useLenis(showContent) {
    useEffect(() => {
        if (!showContent) return;

        const lenis = new Lenis({
            duration: 1.5,
            smoothWheel: true,
            wheelMultiplier: 0.8,
            smoothTouch: true,
            touchMultiplier: 1.5,
        });

        lenis.on("scroll", ScrollTrigger.update);

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, [showContent]);
}
