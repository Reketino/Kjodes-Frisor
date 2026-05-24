"use client";

import { useState } from "react";
import { FaScissors } from "react-icons/fa6";

export default function BookingPage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="fixed top-20 left-0 right-0 bottom-0">

      {!loaded && (
        <aside
        aria-live="polite"
        className=" 
        absolute inset-0 z-10
        flex items-center justify-center
        bg-background
        "
        >
          <section
          className="
          flex flex-col
          items-center gap-8
          text-center
          "
          >
            <figure>
              <FaScissors
              aria-hidden="true"
              className="
              text-6xl
              rotate-[-20deg]
              animate-pulse
              "
              />
            </figure>
            <header className="space-y-2">
              <h1 className="text-3xl font-serif">
                Åpner booking
              </h1>

              <p className="text-neutral-400">
                Gjør saksen klar...
              </p>
            </header>
          </section>
        </aside>
      )}
      <iframe
        src="https://booking.easysalon.no/5e80c0b6-24ab-4f8d-a88e-015ef5fdee34"
        title="Bestill time hos Kjødes Frisørsalong"
        onLoad={() => setLoaded (true)}
        aria-hidden={!loaded}
        className="
        w-full h-screen border-0
        transition-opacity
        duration-700
        "
      />
    </main>
  );
}
