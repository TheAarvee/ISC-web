import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProductDeliverable from "@/components/ProductDeliverable";
import PropCareServices from "@/components/propcareServices";
import Image from "next/image";
import Link from "next/link";

export default function PropCare() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-hidden gap-10 font-sans bg-white">
            <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-14 md:px-15 md:py-20">
                <Link
                    href="/"
                    className="absolute right-15 top-15 rounded-full items-center justify-center w-auto border border-black bg-transparent px-6 py-2.5 text-sm font-regular text-black transition-colors duration-300 hover:bg-black/90 hover:text-white cursor-pointer"
                    >
                        ← Back to Home
                </Link>
                <div className="flex flex-col gap-4">
                    <p className="text-sm font-medium uppercase text-black/50">
                        ISC VERTICAL 02
                    </p>
                    <h1 className="text-5xl font-serif font-bold leading-tight text-black md:text-6xl">
                        PropCare
                    </h1>
                    <p className="text-base leading-8 text-gray-600 md:text-lg">
                        PropCare is our comprehensive property management solution designed to simplify and streamline the management of your properties. With PropCare, you can easily oversee all aspects of property management, from tenant communication and maintenance requests to financial tracking and reporting.
                    </p>
                </div>

                <div className="relative w-full overflow-hidden border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                    <div className="relative aspect-[18/9] w-full">
                        <Image
                            src="/propcare/propcareHero.png"
                            alt="PropCare Hero Image"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 760px"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
            <PropCareServices />
            <ProductDeliverable product="propcare" />
            <Link href="/propx" className="inline-flex flex-col px-10 -mt-5 items-start justify-start gap-1 text-black/60 font-sans font-medium cursor-pointer ">
                <p className="text-xs">ISC VERTICAL 01</p>
                <h3 className="text-2xl font-bold">← PROPX</h3>
            </Link>
            <Contact />
            <Footer/>
        </div>
    );
}
