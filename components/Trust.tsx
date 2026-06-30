"use client"

import Link from "next/link";
import { CurrencyInrIcon, TagIcon, HandshakeIcon, ChartLineUpIcon, SealCheckIcon } from "@phosphor-icons/react";

export default function Trust() {
    return (
        <section className="relative flex h-auto w-full gap-15 flex-col py-15 overflow-hidden font-sans bg-white">
            <div className="flex flex-col gap-15 px-15 py-15">
                {/* Right Heading */}
                <div className="flex flex-col gap-6 justify-start mr-20 md:flex-row md:items-end md:justify-between">
                    <div className="flex max-w-3xl flex-col gap-1">
                        <p className="text-sm text-gray-500 mb-3 font-sans font-semibold">
                            WHY CHOOSE ISC?
                        </p>
                        <h2 className="text-4xl font-serif font-bold mb-6 text-black md:text-5xl">
                            Your Trusted Real<br />
                            Estate Partner
                        </h2>
                        <p className="text-md text-gray-500 font-sans font-regular">
                            Trusted guidance for every property decision, empowering individuals and businesses<br />
                            to buy, sell, manage, and invest with clarity and confidence.
                        </p>
                    </div>

                    <Link
                        href="#contact"
                        className="inline-flex w-fit gap-2 items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#009cc7] transition-colors duration-300 hover:bg-[#009cc7]/90 hover:scale-105 transition-transform duration-600"
                    >
                        <SealCheckIcon size={24} color="#ffffff" weight="fill" />
                        Get Trusted Advice
                    </Link>
                </div>

                {/* Main Pillars */}
                <div className="grid gap-5 font-sans font-extralight tracking-wide xl:grid-cols-4 items-stretch">
                    {/* Buy */}
                    <div className="group flex h-full min-h-[320px] w-full flex-col justify-between p-6 border border-black/20 hover:bg-gradient-to-b from-brand-100 via-brand-300 to-brand-500 transition-colors duration-300 hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl text-black font-medium group-hover:text-brand-700 transition-colors duration-100 tracking-tight">
                                Buy
                            </h2>
                            <CurrencyInrIcon className="text-black group-hover:text-brand-700 transition-colors duration-300" size={32} />
                        </div>
                        <p className="mt-auto font-regular text-md text-gray-500 group-hover:text-brand-800 transition-colors duration-300">
                            Navigate the market with confidence and find opportunities
                            that align with your objectives.
                        </p>
                    </div>
                    {/* Sell */}
                    <div className="group flex h-full min-h-[320px] w-full flex-col justify-between p-6 border border-black/20 hover:bg-gradient-to-b from-brand-100 via-brand-300 to-brand-500 transition-colors duration-300 hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl text-black font-medium group-hover:text-brand-700 transition-colors duration-100 tracking-tight">
                                Sell
                            </h2>
                            <TagIcon className="text-black group-hover:text-brand-700 transition-colors duration-300" size={32} />
                        </div>
                        <p className="mt-auto font-regular text-md text-gray-500 group-hover:text-brand-800 transition-colors duration-300">
                            Make informed selling decisions with market intelligence
                            and expert advisory support.
                        </p>
                    </div>
                    {/* Manage */}
                    <div className="group flex h-full min-h-[320px] w-full flex-col justify-between p-6 border border-black/20 hover:bg-gradient-to-b from-brand-100 via-brand-300 to-brand-500 transition-colors duration-300 hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl text-black font-medium group-hover:text-brand-700 transition-colors duration-100 tracking-tight">
                                Manage
                            </h2>
                            <HandshakeIcon className="text-black group-hover:text-brand-700 transition-colors duration-300" size={32} />
                        </div>
                        <p className="mt-auto font-regular text-md text-gray-500 group-hover:text-brand-800 transition-colors duration-300">
                            Protect and enhance the value of your property
                            through professional asset management.
                        </p>
                    </div>
                    {/* Invest */}
                    <div className="group flex h-full min-h-[320px] w-full flex-col justify-between p-6 border border-black/20 hover:bg-gradient-to-b from-brand-100 via-brand-300 to-brand-500 transition-colors duration-300 hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl text-black font-medium group-hover:text-brand-700 transition-colors duration-100 tracking-tight">
                                Invest
                            </h2>
                            <ChartLineUpIcon className="text-black group-hover:text-brand-700 transition-colors duration-300" size={32} />
                        </div>
                        <p className="mt-auto font-regular text-md text-gray-500 group-hover:text-brand-800 transition-colors duration-300">
                            Unlock opportunities that support long-term growth, wealth creation
                            and sustainable returns through informed real estate decisions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Overview Metrics */}
            <div className="relative items-center justify-center grid grid-cols-1 gap-5 bg-brand-600 px-15 py-10 md:grid-cols-4">
                {/* Years of Experience */}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-7xl text-white font-serif font-normal tracking-tight">
                        25+
                    </h2>
                    <p className="text-lg text-white font-sans font-regular tracking-wide">Years of Experience</p>
                </div>
                {/* No of Services */}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-7xl text-white font-serif font-normal tracking-tight">
                        30
                    </h2>
                    <p className="text-lg text-white font-sans font-regular tracking-wide">Property Services</p>
                </div>

                {/* client satisfaction */}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-7xl text-white font-serif font-normal tracking-tight">
                        1000+
                    </h2>
                        <p className="text-lg text-white font-sans font-regular tracking-wide">Happy Clients</p>
                </div>

                {/* No of props */}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-7xl text-white font-serif font-normal tracking-tight">
                        1500+
                    </h2>
                        <p className="text-lg text-white font-sans font-regular tracking-wide">Properties</p>
                </div>
            </div>
        </section>
    );
}
