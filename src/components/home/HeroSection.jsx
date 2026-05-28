import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center text-center h-[80vh] sm:h-[90vh] overflow-hidden"
      aria-label="Hero seksjon"
    >
      <Image
        src="/assets/hero.jpg"
        alt="Hero"
        fill
        className="object-cover object-center sm:object-[center_40%]"
        priority
      />

      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <header className="relative z-10 max-w-[90%] sm:max-w-2xl px-2 sm:px-4">
        <h1 className="text-5xl sm:text-6xl font-serif text-white tracking-tight leading-tight drop-shadow-md mb-2">
          Kjødes Frisørsalong
        </h1>

        <p className=" text-2xl text-neutral-200 mb-8">
          Din frisør i hjertet av Sykkylven
        </p>
        <nav
          className="flex flex-col gap-4 items-center"
          aria-label="Handlinger"
        >
          <Link
            href="/booking"
            className="
              inline-flex items-center justify-center gap-2
               bg-white/20  text-shadow-gray-400 
            px-5 py-2 rounded-full font-semibold
            transition-all 
            hover:-translate-y-1
             hover:bg-stone-900
            hover:scale-105 
            active:scale-90 min-w-50
          "
          >
            <FaScissors size={36} />
            <span className="text-2xl"> Bestill time</span>
          </Link>
          <p className="text-2xl text-neutral-200">eller ring</p>
          <a
            href="tel:70254680"
            className="
            inline-flex items-center justify-center gap-2
             bg-white/20 text-shadow-gray-400 
        px-5 py-2 rounded-full font-semibold  
        transition-all
       hover:-translate-y-1
          hover:bg-stone-900 
          hover:scale-105 
          active:scale-90 min-w-50
          "
          >
            <FaPhoneSquareAlt size={36} />
            <span className="text-2xl"> 70 25 46 80</span>
          </a>
        </nav>
      </header>
    </section>
  );
}
