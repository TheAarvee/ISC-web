import ServicesAccordion from "@/components/ui/services-accordion";
import { getHomeServices } from "@/lib/sanity";

export default async function Services() {
  const services = await getHomeServices();

  return (
    <section
      id="services"
      className="relative flex h-auto w-full items-center justify-center py-15 px-10 gap-8 flex-col overflow-hidden bg-white font-sans"
    >
      <div className="relative flex flex-col gap-5 items-center justify-center">
        <p className="text-sm text-gray-500 font-sans font-medium">
          OUR SERVICES
        </p>
        <h2 className="text-4xl text-black font-serif font-bold mb-8">
          What We Do For You
        </h2>
      </div>

      <div className="w-full items-center justify-center flex flex-col gap-10 py-5 w-full max-w-6xl">
        <ServicesAccordion services={services} />
      </div>
    </section>
  );
}
