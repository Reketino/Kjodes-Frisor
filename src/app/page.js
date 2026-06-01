import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneSquareAlt, FaMapPin } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServiceSection";
import GallerySection from "@/components/home/GallerySection";
import TeamSection from "@/components/home/TeamSection";

export const metadata = {
  title: "Kjødes Frisørsalong",

  description:
    "Velkommen til Kjødes Frisørsalong i Sykkylven. Klipp, styling, farge, bryn og enkel timebestilling.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Kjødes Frisørsalong | Frisør i Sykkylven",

    description: "Velkommen til Kjødes Frisørsalong i Sykkylven.",

    url: "/",

    images: [
      {
        url: "/assets/Logo.png",
        width: 1200,
        height: 630,
        alt: "Kjødes Frisørsalong",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      
      <HeroSection />

      <IntroSection />

      <ServicesSection />

      <GallerySection />

      <TeamSection />


      <section className="bg-stone-200 text-neutral-900 py-12 px-6 lg:px-12 text-center">
        <div className=" flex flex-col items-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-semibold mb-4">
            Vi holder til i
          </h2>
          <div className="flex flex-row items-center justify-center mb-4">
            <FaMapPin size={28} />
            <p className="text-2xl font-semibold">Storgata 5, 6230 Sykkylven</p>
          </div>

          <aside className="group relative grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg
        transform transition-transform duration-200 group-hover:scale-102 group-hover:shadow-yellow-200"
            >
              <iframe
                title="Kart over Kjødes Frtisørsalong"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1137.5755979821693!2d6.578945757154498!3d62.39117212283398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616b8b29d9b0869%3A0x8371ab46b8d9392e!2sStorgata%205%2C%206230%20Sykkylven!5e1!3m2!1sno!2sno!4v1761674085785!5m2!1sno!2sno"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <div
              className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg
        transform transition-transform duration-200 group-hover:scale-102 group-hover:shadow-yellow-200"
            >
              <iframe
                title="Street View ved Kjødes Frisørsalong"
                src="https://www.google.com/maps/embed?pb=!4v1761676614110!6m8!1m7!1sGb0LP3lef9N46rhRyLlKcg!2m2!1d62.39130171178657!2d6.580364966548465!3f203.89036889478575!4f-4.236061306655444!5f1.57054899574096"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </aside>

          <h2 className="text-4xl font-serif font-semibold mt-6">Velkommen!</h2>
        </div>
      </section>
    </main>
  );
}
