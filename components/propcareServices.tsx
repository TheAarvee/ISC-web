import ServicesAccordion from "@/components/ui/services-accordion";
import { getProductServiceCategories } from "@/lib/sanity";

export default async function PropCareServices() {
  const categories = await getProductServiceCategories("propcare");

  if (!categories.length) {
    return null;
  }

  return (
    <section className="w-full px-6 pb-24 md:px-15">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-15">
        <p className="text-sm text-gray-500 font-sans font-medium">
          PROPCARE SERVICES
        </p>
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col gap-15">
            <div className="flex flex-col items-center justify-center gap-8">
              <p className="text-4xl text-black items-center justify-center font-serif font-bold pt-15 pb-6">
                {category.heading}
              </p>
            </div>
            <ServicesAccordion services={category.services} />
          </div>
        ))}
      </div>
    </section>
  );
}
