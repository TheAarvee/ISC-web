import Contact from "@/components/Contact";
import Categories from "@/components/propfrax/categories";
import Process from "@/components/propfrax/Process";
import PropFraxHero from "../../components/propfrax/PropFraxHero";
import PropFraxServices from "@/components/propfrax/PropFraxServices";
import PropFraxTrust from "@/components/propfrax/PropFraxTrust";
import Footer from "@/components/Footer";

export default function Propfrax() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-white font-sans">
      <PropFraxHero />
      <PropFraxTrust />
      <PropFraxServices />
      <Process />
      <Categories />
      <Contact />
      <Footer />
    </div>
  );
}
