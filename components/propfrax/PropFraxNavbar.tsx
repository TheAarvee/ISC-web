 "use client";

import Image from "next/image";
import Link from "next/link";

export default function PropFraxNavbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    const offset = 96;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav className="absolute top-0 z-50 w-full bg-transparent px-4 py-4 text-white md:px-8 md:py-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6">
        <Link href="/" className="flex items-center justify-center gap-4">
          <Image src="/propfraxlogo.svg" alt="Logo" width={140} height={20} className="h-[60px] w-auto" />
        </Link>

        <div className="flex h-10 items-center justify-between py-7 pl-4 gap-6">
          <div className="hidden items-center gap-10 text-sm font-sans font-regular md:flex lg:gap-6">
            <button type="button" onClick={() => scrollToSection("how-it-works")} className="transition-colors hover:text-white/80 cursor-pointer">
              How it works
            </button>
            <button type="button" onClick={() => scrollToSection("services")} className="transition-colors hover:text-white/80 cursor-pointer">
              Services
            </button>
            <button type="button" onClick={() => scrollToSection("experts")} className="transition-colors hover:text-white/80 cursor-pointer">
              Experts
            </button>
            <button type="button" onClick={() => scrollToSection("about")} className="transition-colors hover:text-white/80 cursor-pointer">
              About Us
            </button>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-white px-6 py-2.5 text-xs font-medium tracking-wider text-black cursor-pointer hover:scale-105 transition-transform duration-400"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </nav>
  );
}
