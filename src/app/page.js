import React from "react";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServiceSection";
import GallerySection from "@/components/home/GallerySection";
import TeamSection from "@/components/home/TeamSection";
import LocationSection from "@/components/home/LocationSection";

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

      <LocationSection />
    </main>
  );
}
