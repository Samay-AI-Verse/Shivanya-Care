import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useWhatsAppSectionGsap(showContent) {
    useGSAP(() => {
        if (!showContent) return;

        // Make the previous BlackSection stick visually in place
        // so that WhatsAppSection slides over it seamlessly.
        gsap.to("#black-medical-section", {
            yPercent: 100, // Move it down matching the scroll speed
            ease: "none",
            scrollTrigger: {
                trigger: "#whatsapp-section",
                start: "top bottom", // Triggers as soon as WhatsAppSection begins to appear
                end: "top top",      // Ends when WhatsAppSection fully covers the screen
                scrub: true,
            }
        });

        // Set initial states
        gsap.set(".wa-content-box", { xPercent: 100 });

        // Start the video as a full screen box (no curve, full size)
        gsap.set(".wa-video-box", {
            width: "100%",
            height: "100%",
            left: "0%",
            top: "0%"
        });

        // Add a slight zoom effect to the video itself
        gsap.set(".wa-video-box video", { scale: 1.2 });

        // Create the animation sequence for the WhatsApp section
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#whatsapp-section",
                start: "top 75%", // Starts animating when it's partially into view
                end: "top 10%",   // Finishes when it's almost at the top
                scrub: 1.5,       // Links the animation smoothly to the scroll perfectly
                once: true        // VERY IMPORTANT: Plays exactly once. Kills the trigger after it hits the end, so it never reverses.
            }
        });

        // Animate the video box to the left, taking up 50% width
        tl.to(".wa-video-box", {
            width: "50%",
            ease: "none"
        }, 0);

        // Reset the video scale, zooming it out gently
        tl.to(".wa-video-box video", {
            scale: 1,
            ease: "none"
        }, 0);

        // Subtly animate the content box coming in from the right, perfectly synchronized
        tl.to(".wa-content-box", {
            xPercent: 0,
            ease: "none"
        }, 0);

        // Pin the WhatsApp section to give the user time to read it
        ScrollTrigger.create({
            trigger: "#whatsapp-section",
            start: "top top",
            end: "+=100%", // Keep it pinned for 1 viewport height of scroll
            pin: true,
        });

    }, [showContent]);
}
