import { p } from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

export default function Trust() {
    return (
        <section id="products" className="relative flex h-auto w-full flex-col overflow-hidden font-sans bg-white">
            <div className="flex flex-col gap-6 items-center justify-center px-6 py-15 md:px-15 md:py-15">
                <p className="text-sm text-gray-500 font-sans font-medium">
                    OUR PRODUCTS
                </p>
                <h2 className="text-4xl text-black font-serif font-bold mb-8">
                    The Real Estate Verticals
                </h2>
                
                {/* 1. Added max-width and w-full to the grid container to stretch it */}
                <div className="flex flex-col gap-10 py-5 w-full max-w-6xl">
                    
                    {/* 2. Added w-full to each card to fill its 1/3 column block */}
                    <Link href="/propx" className="relative w-full h-120 flex flex-col gap-2 items-start justify-start p-7 font-sans font-regular border border-black/20 overflow-hidden cursor-pointer group">
                        <h2 className="z-2 text-6xl text-white font-sans font-black">PROPX</h2>
                        <p className="z-2 text-md text-white/80 mt-2">Propx is a dedicated property buying and selling platform powered by ISC Realtors,<br></br>designed to simplify real estate transactions.</p>
                        <div className="absolute inset-0 z-1 h-1/2 w-full bg-gradient-to-b from-black via-brack/40 to-transparent"/>
                        <Image
                            src="/propx/propx.jpg"
                            alt="Propx"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            loading="eager"
                            className="object-cover group-hover:scale-105 transition-transform duration-600"
                        />
                        <button className="absolute bottom-5 right-5 z-2 bg-white px-4 py-2 text-md font-normal text-black cursor-pointer hover:scale-105 transition-transform duration-400">
                            Learn More →
                        </button>
                    </Link>

                    <Link href="/propcare" className="relative w-full h-120 flex flex-col gap-2 items-start justify-start p-7 font-sans font-regular border border-black/20 overflow-hidden cursor-pointer group">
                        <h2 className="z-2 text-6xl text-white font-sans font-black">PROPCARE</h2>
                        <p className="z-2 text-md text-white/80 mt-2">Propcare is a dedicated property care platform managed by ISC Realtors,<br></br>offering complete end-to-end property management solutions.</p>
                        <div className="absolute inset-0 z-1 h-1/2 w-full bg-gradient-to-b from-black via-black/40 to-transparent"/>
                        <Image
                            src="/propcare/propcare.jpg"
                            alt="Propcare"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            loading="eager"
                            className="object-cover group-hover:scale-105 transition-transform duration-600"
                        />
                        <button className="absolute bottom-5 right-5 z-2 bg-white px-4 py-2 text-md font-normal text-black cursor-pointer hover:scale-105 transition-transform duration-400">
                            Learn More →
                        </button>
                    </Link>

                    <Link href="/propfrax" className="relative w-full h-120 flex flex-col gap-2 items-start justify-start p-7 font-sans font-regular border border-black/20 overflow-hidden cursor-pointer group">
                        <h2 className="z-2 text-6xl text-white font-sans font-black">PROPFRAX</h2>
                        <p className="z-2 text-md text-white/80 mt-2">Propfrax is a dedicated property financing platform powered by ISC Realtors,<br></br>designed to simplify real estate transactions.</p>
                        <div className="absolute inset-0 z-1 h-1/2 w-full bg-gradient-to-b from-black via-black/40 to-transparent"/>
                        <Image
                            src="/propfrax/propfrax.jpg"
                            alt="Propfrax"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            loading="eager"
                            className="object-cover group-hover:scale-105 transition-transform duration-600"
                        />
                        <button className="absolute bottom-5 right-5 z-2 bg-white px-4 py-2 text-md font-normal text-black cursor-pointer hover:scale-105 transition-transform duration-400">
                            Learn More →
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
