import PropFraxNavbar from "../../components/propfrax/PropFraxNavbar";

export default function PropFraxHero() {
  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden font-sans bg-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src="/propfraxhero.jpg"
          alt="PropFrax Hero Background"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient overlays for top nav and bottom content readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#11215a]/10 via-transparent to-transparent " />
      </div>

      {/* Navigation */}
      <PropFraxNavbar />

      {/* Main Bottom Content */}
      <main className="z-10 mt-auto -mb-8 flex w-full flex-col justify-between px-10 pb-16 tracking-tight text-white md:flex-row md:items-end">
        {/* Left Heading */}
        <h1 className="max-w-5xl text-4xl font-serif sm:text-5xl md:text-6xl tracking-tight leading-[1.1] [text-shadow:_0_0px_20px_rgba(0,0,0,0.1)]">
          Building Wealth Through <br />
          Smarter Property Investments.
        </h1>
      </main>
    </section>
  );
}
