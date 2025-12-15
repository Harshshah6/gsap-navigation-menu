"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const sections = sectionsRef.current;
        if (!sections) return;

        const totalWidth = sections.scrollWidth;
        const viewportWidth = window.innerWidth;

        const ctx = gsap.context(() => {
            gsap.to(sections, {
                x: () => -(totalWidth - viewportWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: () => `+=${totalWidth}`,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} style={{ height: "100vh", overflow: "hidden" }}>
            <div
                ref={sectionsRef}
                style={{
                    display: "flex",
                    width: "max-content",
                }}
                className="bg-black"
            >
                <Panel />
                <Panel />
            </div>
        </section>
    );
}

function Panel() {
    return (
        <div className="min-w-screen h-screen bg-black flex items-center justify-center">
            <div className="container m-auto max-w-7xl h-full flex items-center justify-center gap-6">
                <div>
                    <p className="text-white uppercase">PROJECT 01</p>
                    <h2 className="text-6xl text-pretty text-white font-medium">Halo Masterpiece</h2>
                </div>
                <div className="bg-gray-400/30 rounded-xl w-[60vw] aspect-square! min-h-[40vh]">
                    .
                </div>
                <div className="flex flex-col justify-end h-[45vh] text-white text-2xl">
                    <div className="flex flex-col uppercase [&>span]:underline [&>span]:cursor-pointer">
                        <span>production</span>
                        <span>london</span>
                        <span>edelman</span>
                        <span>xbox</span>
                    </div>
                    <div className="mt-8">
                        <p>A 6X3 metre renaissance-style oil painting to support the launch of Xbox’s flagship video game, Halo Infinite.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
