import Navbar from "../components/Navbar";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden font-sans bg-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src="/hero.png"
          alt="Hero Background"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient overlays for top nav and bottom content readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#11215a]/10 via-transparent to-[#0f57ff]/10" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Bottom Content */}
      <main className="z-10 mt-auto -mb-8 flex w-full flex-col justify-between px-10 pb-16 tracking-tight text-white md:flex-row md:items-end">
        {/* Left Heading */}
        <h1 className="max-w-2xl text-4xl font-serif sm:text-5xl md:text-6xl tracking-tight leading-[1.1] [text-shadow:_0_0px_20px_rgba(0,0,0,0.1)]">
          Everything Real Estate<br />
          Under One Trusted Roof.
        </h1>

        {/* Pillars */}
        <div className="md:mt-0 mt-8 flex flex-wrap gap-3">
          <div className="flex h-10 items-center justify-center rounded-full bg-transparent tracking-wide border-t border-l border-white/40 shadow-[inset_0_1px_4px_rgba(255,255,255,0.3)] px-6 backdrop-blur-sm text-md font-light transition-colors hover:bg-white/10">
            BUY / SELL
          </div>
          <div className="flex h-10 items-center justify-center rounded-full bg-transparent tracking-wide border-t border-l border-white/40 shadow-[inset_0_1px_4px_rgba(255,255,255,0.3)] px-6 backdrop-blur-sm text-md font-light transition-colors hover:bg-white/10">
            MANAGE
          </div>
          <div className="flex h-10 items-center justify-center rounded-full bg-transparent tracking-wide border-b border-r border-white/40 shadow-[inset_0_1px_4px_rgba(255,255,255,0.3)] px-6 backdrop-blur-sm text-md font-light transition-colors hover:bg-white/10">
            INVEST
          </div>
        </div>
      </main>
    </section>
  );
}
