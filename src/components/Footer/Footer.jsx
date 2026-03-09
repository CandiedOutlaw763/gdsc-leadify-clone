import React from 'react';

function Footer() {
    return (
        <footer className="flex flex-col bg-white text-[#222] font-sans">
            {/* Giant text scales with viewport, so it naturally handles mobile */}
            <div className="mt-8 mb-12 lg:mb-16 text-center select-none font-serif text-[20vw] leading-[0.8] tracking-[-2px] text-[#f2f2f2]">
                Leadify
            </div>

            {/* Changed to flex-col for mobile, lg:flex-row for desktop */}
            <div className="mx-auto flex flex-col lg:flex-row w-full max-w-[1200px] justify-between items-start px-6 lg:px-8 pb-16 lg:pb-24 gap-12 lg:gap-0">

                {/* Left: Heading and Socials */}
                <div className="flex-1 w-full">
                    <h2 className="mt-0 mb-6 lg:mb-8 font-serif text-4xl lg:text-[3rem] font-normal leading-[1.1] text-[#222]">
                        Consistent Leads<br />That Convert
                    </h2>
                    <div className="flex gap-[15px]">
                        {[1, 2, 3, 4].map((i) => (
                            <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222] text-white transition-colors duration-200 hover:bg-[#555]">
                                <div className="h-[18px] w-[18px] bg-white opacity-20 rounded-full"></div> {/* Placeholder for SVG icons */}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Middle: Links */}
                {/* Left aligned on mobile, center aligned on desktop */}
                <div className="flex-1 flex justify-start lg:justify-center w-full">
                    <ul className="m-0 list-none p-0">
                        {['Home', 'Services', 'How It Works', 'Case Studies', 'Pricing'].map((link) => (
                            <li key={link} className="mb-4 lg:mb-6">
                                <a href="#" className="text-[0.95rem] font-medium text-[#444] no-underline transition-color duration-200 hover:text-black">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Feature Image Card */}
                <div className="flex-1 flex justify-start lg:justify-end w-full">
                    <div className="relative flex h-[260px] w-full lg:w-[260px] max-w-[300px] flex-col justify-between bg-[#1a1a1a] bg-cover bg-center p-6 text-white">
                        <span className="self-end text-[0.8rem] font-medium tracking-[0.5px]">Free Resources</span>
                        <a href="#" className="flex items-center gap-2 self-start text-[0.85rem] font-semibold tracking-[1px] text-white no-underline">
                            <span className="text-[1.2rem] font-normal">↗</span> EXPLORE NOW
                        </a>
                    </div>
                </div>
            </div>

            {/* Very Bottom Strip */}
            {/* Stacked on mobile, side-by-side on desktop */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#2a2a2a] px-6 lg:px-16 py-6 text-[0.85rem] font-medium text-[#e0e0e0] text-center sm:text-left">
                <p className="m-0">Privacy Policy</p>
                <p className="m-0">© 2026 Leadify. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
