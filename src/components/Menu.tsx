'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const menuLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/process', label: 'Process' },
    { path: '/news', label: 'Latest News' },
    { path: '/contact', label: 'Contact' },
];

export default function Menu() {
    const containerRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useGSAP(() => {
        gsap.set('.menu-link-item-holder', { y: 75 });

        tl.current = gsap
            .timeline({ paused: true })
            .to('.menu-overlay', {
                duration: 1.25,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease: 'power4.inOut',
            })
            .to('.menu-link-item-holder', {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power4.inOut',
                delay: -0.75,
            });
    }, { scope: containerRef });

    useEffect(() => {
        if (isMenuOpen)
            tl.current?.play();
        else
            tl.current?.reverse();
    }, [isMenuOpen]);

    return (
        <div ref={containerRef} className='relative w-full z-999 text-white'>
            {/* Top Bar */}
            <div className="fixed h-fit inset-0 flex items-center justify-between p-8 text-black">
                <Link href="/" className="uppercase border bg-black p-5 size-10 text-white text-center flex items-center justify-center rounded-full text-sm font-medium">
                    C
                </Link>
                <button
                    onClick={toggleMenu}
                    className="uppercase text-sm font-medium border bg-black rounded-full px-7 py-4 cursor-pointer text-white"
                >
                    Menu
                </button>
            </div>
            <div className="fixed inset-0 h-fit">
            </div>


            {/* Overlay */}
            <div className="menu-overlay fixed inset-0 z-20 flex bg-black p-8 [clip-path:polygon(0_0,100%_0,100%_0,0_0)]">
                {/* Overlay Bar */}
                <div className="fixed inset-x-0 top-0 flex items-center justify-between p-8">
                    <Link href="/" className="uppercase text-sm font-medium text-white">
                        CreativeGiants
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className="uppercase text-sm font-medium text-white border cursor-pointer border-white rounded-full px-7 py-4"
                    >
                        Close
                    </button>
                </div>

                {/* Close Icon */}
                <div className="hidden flex-2 items-end md:flex">
                    <div className="flex flex-col justify-center uppercase text-sm font-medium">
                        @{new Date().getFullYear()}
                    </div>
                </div>

                {/* Menu Content */}
                <div className="flex flex-4 flex-col justify-between pt-32">
                    {/* Links */}
                    <div className='space-y-5 group'>
                        {menuLinks.map((link, index) => (
                            <div key={index} className="w-max overflow-hidden">
                                <div className="menu-link-item-holder relative">
                                    <Link
                                        href={link.path}
                                        onClick={toggleMenu}
                                        className="block uppercase transition-colors duration-500 text-white group-hover:text-neutral-500 hover:text-white font-normal tracking-[-0.02em] leading-[85%] text-4xl md:text-[80px]"
                                    >
                                        {link.label}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Info */}
                    <div className="flex gap-12">

                        <div className="flex flex-col justify-end uppercase text-sm font-medium">
                            <p>info@example.com</p>
                            <p>2342 232 343</p>
                        </div>
                    </div>
                </div>

                {/* Preview */}
                <div className="flex flex-4 items-end justify-end uppercase text-sm font-medium">
                    <p>View Preview Here</p>
                </div>
            </div>
        </div >
    );
}
