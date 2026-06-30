"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import type { ServiceItem } from "@/lib/sanity";
import { cn } from "@/lib/utils";

type ServicesAccordionProps = {
  services: ServiceItem[];
};

export default function ServicesAccordion({ services }: ServicesAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const activeImage = activeService.image;

  const scrollToConsultation = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (!services.length || !activeService) {
    return null;
  }

  return (
    <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-[minmax(260px,360px)_minmax(0,1fr)] md:gap-20 lg:gap-24">
      <div className="flex w-full flex-col font-sans">
        {services.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={service.id}
              type="button"
              aria-expanded={isActive}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "min-h-14 w-full 5 px-6 py-2 text-left text-lg text-black transition-colors duration-300 md:min-h-14 md:text-lg rounded-sm",
                isActive ? "bg-gradient-to-b from-brand-100 via-brand-300 to-brand-500 transition-colors duration-300 text-brand-900 font-medium" : "bg-transparent text-black/30 hover:bg-neutral-100"
              )}
            >
              {service.heading}
            </button>
          );
        })}
      </div>

      <div className="flex min-h-[340px] items-start pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h3 className="font-bold tracking-tight text-3xl font-normal leading-tight text-black md:text-4xl">
              {activeService.heading}
            </h3>
            {activeImage?.url && (
              <div className="mt-8 overflow-hidden rounded-2xl border border-black/10 bg-neutral-100 md:max-w-[480px]">
                <div className="relative aspect-[4/3] w-full max-h-[240px]">
                  <Image
                    src={activeImage.url}
                    alt={activeImage.alt ?? activeService.heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 480px"
                    priority={activeIndex === 0}
                  />
                </div>
              </div>
            )}
            <p className="mt-6 font-sans text-sm leading-7 text-neutral-600">
              {activeService.description}
            </p>
            <button
              type="button"
              onClick={scrollToConsultation}
              className="mt-10 items-center justify-center rounded-full border border-black bg-transparent px-6 py-2.5 text-sm font-regular text-black transition-colors duration-300 hover:bg-black/90 hover:text-white cursor-pointer"
            >
              View Details →
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
