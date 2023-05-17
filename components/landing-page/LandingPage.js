import Hero from "./components/hero";
import Features from "./components/features";
import FeaturesBlocks from "./components/features-blocks";
import Testimonials from "./components/testimonials";
import Newsletter from "./components/newsletter";
import Header from "./components/ui/header";
import Banner from "./components/banner";
import Footer from "./components/ui/footer";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <div
        className={`font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className="Simpleflex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <main className="grow">
            <Hero />
            <Features />
            <FeaturesBlocks />
            <Testimonials />
            <Newsletter />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
