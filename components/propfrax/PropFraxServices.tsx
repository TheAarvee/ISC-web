import { getPropFraxServices } from "@/lib/sanity";
import ServicesAccordion from "@/components/ui/services-accordion";

export default async function PropFraxServices() {
  const services = await getPropFraxServices();

  if (!services.length) {
    return null;
  }

  return (
    <section
      id="services"
      className="relative flex h-auto w-full flex-col items-center justify-center gap-8 overflow-hidden bg-white px-10 py-16 font-sans"
    >
      <div className="relative flex flex-col items-center justify-center gap-5">
        <p className="font-sans text-sm font-medium text-gray-500">
          OUR SERVICES
        </p>
        <h2 className="mb-8 font-serif text-4xl font-bold text-black">
          What We Do For You
        </h2>
      </div>

      <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-10 py-5">
        <ServicesAccordion services={services} />
      </div>
    </section>
  );
}
