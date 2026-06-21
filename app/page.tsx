import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden font-sans bg-white">
      <Hero />
      <Trust />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
