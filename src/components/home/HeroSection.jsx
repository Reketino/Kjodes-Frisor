import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";

export default function HeroSection() {
    return (
           <section className="relative flex items-center justify-center text-center h-[80vh] sm:h-[90vh] overflow-hidden">
        <Image
          src="/assets/hero.jpg"
          alt="Hero"
          fill
          className="object-cover object-center object-position sm:object-[center_40%]"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-[90%] sm:max-w-2xl px-2 sm:px-4">
          <h1 className="text-5xl sm:text-6xl font-serif text-white tracking-tight leading-tight drop-shadow-md mb-2">
            Kjødes Frisørsalong
          </h1>

          <p className=" text-2xl text-neutral-200 mb-6 sm:mb-8">
            Din frisør i hjertet av Sykkylven
          </p>
          <Link
            href="/booking"
            className="
              inline-block bg-white/20  text-shadow-gray-400 
            px-5 py-2 rounded-full font-semibold 
           transition-transform hover:-translate-y-1
            transition-color hover:bg-stone-900
            hover:scale-105 active:scale-90 min-w-50
          "
          >
            <div className="flex flex-row gap-2 items-center justify-center">
              <FaScissors size={36} />
              <p className="text-2xl"> Bestill time</p>
            </div>
          </Link>
          <p className="text-2xl text-neutral-200 mt-4 mb-4">eller ring</p>
          <a
            href="tel:70254680"
            className="inline-block bg-white/20 text-shadow-gray-400 
        px-5 py-2 rounded-full font-semibold transition-transform hover hover:-translate-y-1
         transition-color hover:bg-stone-900 hover:scale-105 active:scale-90 min-w-50"
          >
            <div className="flex flex-row gap-2 items-center justify-center">
              <FaPhoneSquareAlt size={36} />
              <p className="text-2xl"> 70 25 46 80</p>
            </div>
          </a>
        </div>
      </section>   
    )
}