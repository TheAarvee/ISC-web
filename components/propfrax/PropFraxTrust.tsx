"use client"

import Link from "next/link";
import { FileMagnifyingGlassIcon, ClockUserIcon, WarningIcon, ChartLineUpIcon, CoinsIcon } from "@phosphor-icons/react";

export default function PropFraxTrust() {
    return (
        <section className="relative flex h-auto w-full gap-15 flex-col overflow-hidden font-sans bg-white">
            <div className="flex flex-col gap-15 px-15 py-16">
                {/* Right Heading */}
                <div className="flex flex-col gap-6 justify-start mr-20 md:flex-row md:items-end md:justify-between">
                    <div className="flex max-w-3xl flex-col gap-1">
                        <p className="text-sm text-gray-500 mb-3 font-sans font-semibold">
                            WHY INVEST WITH ISC-PROPFRAX?
                        </p>
                        <h2 className="text-4xl font-serif font-bold mb-6 text-black md:text-5xl">
                            Our Core Principles<br />
                            Behind Every Investment
                        </h2>
                        <p className="text-md text-gray-500 font-sans font-regular">
                            Every investment is guided by research, market understanding, and a disciplined approach<br />
                            to help you make informed real estate decisions.
                        </p>
                    </div>

                    <Link
                        href="#contact"
                        className="inline-flex w-fit gap-2 items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#009cc7] transition-colors duration-300 hover:bg-[#009cc7]/90 hover:scale-105 transition-transform duration-600"
                    >
                        <CoinsIcon size={24} color="#ffffff" weight="fill" />
                        Find the Right Investment
                    </Link>
                </div>

                {/* Main Pillars */}
                <div className="grid gap-5 font-sans font-extralight tracking-wide xl:grid-cols-4 items-stretch">
                    {/* Research-Driven Decisions */}
                    <div className="group flex h-full min-h-[320px] w-full flex-col justify-between p-6 border border-black/20 hover:bg-gradient-to-b from-brand-100 via-brand-300 to-brand-500 transition-colors duration-300 hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl text-black font-medium group-hover:text-brand-700 transition-colors duration-100 tracking-tight">
                                Research-Driven<br/>Decisions
                            </h2>
                            <FileMagnifyingGlassIcon className="text-black group-hover:text-brand-700 transition-colors duration-300" size={32} />
                        </div>
                        <p className="mt-auto font-regular text-md text-gray-500 group-hover:text-brand-800 transition-colors duration-300">
                            Every recommendation is backed by in-depth market research, 
                            location analysis, and property evaluation rather than assumptions.
                        </p>
                    </div>
                    {/* Market Intelligence */}
                    <div className="group flex h-full min-h-[320px] w-full flex-col justify-between p-6 border border-black/20 hover:bg-gradient-to-b from-brand-100 via-brand-300 to-brand-500 transition-colors duration-300 hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl text-black font-medium group-hover:text-brand-700 transition-colors duration-100 tracking-tight">
                                Market<br/>Intelligence
                            </h2>
                            <ChartLineUpIcon className="text-black group-hover:text-brand-700 transition-colors duration-300" size={32} />
                        </div>
                        <p className="mt-auto font-regular text-md text-gray-500 group-hover:text-brand-800 transition-colors duration-300">
                            Stay ahead with insights into market trends, infrastructure growth, 
                            pricing movements, and emerging investment opportunities.
                        </p>
                    </div>
                    {/* Risk-Aware Approach */}
                    <div className="group flex h-full min-h-[320px] w-full flex-col justify-between p-6 border border-black/20 hover:bg-gradient-to-b from-brand-100 via-brand-300 to-brand-500 transition-colors duration-300 hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl text-black font-medium group-hover:text-brand-700 transition-colors duration-100 tracking-tight">
                                Risk-Aware Approach
                            </h2>
                            <WarningIcon className="text-black group-hover:text-brand-700 transition-colors duration-300" size={32} />
                        </div>
                        <p className="mt-auto font-regular text-md text-gray-500 group-hover:text-brand-800 transition-colors duration-300">
                            We carefully assess potential risks, helping you make balanced investment 
                            decisions with greater clarity and confidence..
                        </p>
                    </div>
                    {/* Long-Term Value Focus */}
                    <div className="group flex h-full min-h-[320px] w-full flex-col justify-between p-6 border border-black/20 hover:bg-gradient-to-b from-brand-100 via-brand-300 to-brand-500 transition-colors duration-300 hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl text-black font-medium group-hover:text-brand-700 transition-colors duration-100 tracking-tight">
                                Long-Term<br/>Value Focus
                            </h2>
                            <ClockUserIcon className="text-black group-hover:text-brand-700 transition-colors duration-300" size={32} />
                        </div>
                        <p className="mt-auto font-regular text-md text-gray-500 group-hover:text-brand-800 transition-colors duration-300">
                            Our approach prioritizes sustainable capital appreciation and 
                            portfolio growth instead of short-term market speculation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
