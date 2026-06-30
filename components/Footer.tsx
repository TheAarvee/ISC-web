"use client";

import Image from "next/image";
import Link from "next/link";
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-950 px-8 py-10 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-5">
            <Image src="/logo.svg" alt="Logo" width={180} height={72} className="h-[60px] w-auto" />
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-4 text-md font-regular tracking-tight text-white/85 md:justify-end">
            <Link href="#products" className="transition-opacity hover:opacity-70">Products</Link>
            <Link href="#services" className="transition-opacity hover:opacity-70">Services</Link>
            <Link href="#experts" className="transition-opacity hover:opacity-70">Experts</Link>
            <Link href="#about" className="transition-opacity hover:opacity-70">About Us</Link>
          </nav>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:items-start">
          <p className="max-w-xl text-md leading-7 text-white/85">
            ISC Realtors is a trusted real estate company focused on property buying,
            selling, and advisory services, delivering reliable and value-driven
            realty solutions.
          </p>

          <div className="flex flex-col items-start gap-3 text-right md:items-end">
            <p className="text-md text-white/85">Coimbatore, Tamilnadu</p>
            <p className="text-md text-white/85">+91 99444 02400</p>
            <a
              href="mailto:iscpadmanabhan@gmail.com"
              className="text-md text-white/85 transition-opacity hover:opacity-70"
            >
              iscpadmanabhan@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <p className="text-md text-white/85">Copyright © 2026 ISC Realtors</p>

          <div className="flex items-center gap-6 text-white/85">
            <Link href="https://www.linkedin.com/company/reachisc/posts/?feedView=all" aria-label="LinkedIn" target="_blank" className="transition-opacity hover:opacity-70">
              <LinkedinLogoIcon size={28} weight="regular" />
            </Link>
            <Link href="#" aria-label="Facebook" className="transition-opacity hover:opacity-70">
              <FacebookLogoIcon size={28} weight="regular" />
            </Link>
            <Link href="#" aria-label="Instagram" className="transition-opacity hover:opacity-70">
              <InstagramLogoIcon size={28} weight="regular" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
