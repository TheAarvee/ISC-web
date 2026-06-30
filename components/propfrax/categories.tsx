import Image from "next/image";

const categories = [
  {
    label: "Residential",
    image: "/propertytypes/residential.jpg",
  },
  {
    label: "Commercial",
    image: "/propertytypes/commercial.jpg",
  },
  {
    label: "Villas",
    image: "/propertytypes/villas.jpg",
  },
  {
    label: "Industrial/Agricultural Land",
    image: "/propertytypes/land.jpg",
  },
];

export default function Categories() {
  return (
    <section
      aria-labelledby="property-categories-heading"
      className="w-full bg-white px-6 py-16 font-sans md:px-15"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="font-sans text-sm font-medium text-gray-500">
            EXPLORE OPPORTUNITIES
          </p>
          <h2
            id="property-categories-heading"
            className="mb-8 font-serif text-4xl font-bold text-black"
          >
            Property Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-5">
          {categories.map((category) => (
            <article
              key={category.label}
              className="group relative aspect-[4/3] overflow-hidden bg-neutral-200 md:aspect-[16/10]"
            >
              <Image
                src={category.image}
                alt={`${category.label} property`}
                fill
                sizes="(max-width: 768px) 50vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <h3 className="absolute bottom-4 left-4 font-sans text-2xl text-white md:bottom-7 md:left-7 md:text-4xl">
                {category.label}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
