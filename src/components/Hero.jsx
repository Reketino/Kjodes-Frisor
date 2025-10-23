import React from 'react'
import Image from "next/image";

export default function Hero() {
   return (
    <section className='relative flex items-center justify-center text-center h-[80vh] sm:h-[90vh] overflow-hidden'>
        <Image 
        src="/hero.png"
        alt="Frisyre"
        fill
        className="object-cover object-center"
        priority
        />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-[90%] sm:max-w-2xl px-2 sm:px-4">
        <h1 className="text-base sm:text-lg md:text-xl text-neutral-200 mb-6 sm:mb-8">
          Kjødes Frisørsalong
        </h1>

        <p className="text-lg md:text-xl text-neutral-200 mb-8">
          Din frisør i hjertet av Sykkylven
        </p>
        <a
          href="https://www.ledigtime.no/kjodes/step1"
          target='_blank'
          className="
            inline-block bg-(--accent-terracotta) text-white px-6 py-3 
            rounded-full font-semibold transition-transform hover:-translate-y-1
          "
        >
          Bestill time
        </a>
      </div>
    </section>
  );
}