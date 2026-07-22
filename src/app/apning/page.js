import React from "react";
import Image from "next/image";
import { closedPeriods } from "@/data/closedPeriod";

export const metadata = {
  title: "Åpningstider",

  description: "Se åpningstidene til Kjødes Frisørsalong i Sykkylven.",

  alternates: {
    canonical: "/apning",
  },

  openGraph: {
    title: "Åpningstider | Kjødes Frisørsalong",

    description: "Se åpningstidene til Kjødes Frisørsalong i Sykkylven.",

    url: "/apning",

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

export default function AapningPage() {
  const today = new Date().getDay();

  const now = new Date();

  const activePeriod = closedPeriods.find(
    (period) => now >= period.start && now <= period.end
  );

  const isClosedPeriod = Boolean(activePeriod)
  

  const days = [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
  ];

  const openingHours = [
    { day: "Mandag", time: "09-16:30", dateTime: "09:00/16:30" },
    { day: "Tirsdag", time: "09-16:30", dateTime: "09:00/16:30" },
    { day: "Onsdag", time: "09-16:30", dateTime: "09:00/16:30" },
    { day: "Torsdag", time: "09-16:30", dateTime: "09:00/16:30" },
    { day: "Fredag", time: "09-16", dateTime: "09:00/16:00" },
    { day: "Lørdag", time: "Stengt", dateTime: undefined },
    { day: "Søndag", time: "Stengt", dateTime: undefined },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <Image
        src="/assets/kalender.webp"
        alt="Klokke"
        fill
        priority
        fetchPriority="high"
        quality={75}
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none" />

      <section
        className="relative z-10 w-full max-w-4xl px-4 py-10 text-center "
        aria-labelledby="opening-hours-heading"
      >
        <h1
          id="opening-hours-heading"
          className=" text-5xl md:text-6xl font-serif font-semibold text-stone-400 mb-8"
        >
          Åpningstider
        </h1>
        {isVacation && (
          <div className="
          mb-8 
          rounded-3xl
          border border-amber-400
          bg-amber-500/15
          backdrop-blur-md
          p-6
          text-center
          shadow-lg
          "
          >
            <h2 className="text-3xl font-serif font-semibold text-amber-300">
              🌴 Sommerferie
            </h2>

            <p className="mt-3 text-lg text-stone-100">
              Kjødes Frisørsalong holder stengt fra {" "}
              <strong>15. Juli</strong> til{" "}
              <strong>10. August</strong>
            </p>

            <p className="mt-2 text-stone-300">
              Vi ønsker alle våre kunder en riktig god sommer!
            </p>
          </div>
        )}
        <ul className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
          {openingHours.map((service) => {
            const isHelg = ["Lørdag", "Søndag"].includes(service.day);
            const isToday = service.day === days[today];
            const isClosedToday = isToday && service.time === "Stengt";

            return (
              <li key={service.day}>
                <article
                  className={`
                    relative
                    group p-6 rounded-4xl 
                    bg-white/10 border-2 
                    backdrop-blur-md shadow-md 
                    transition-all duration-300
                  hover:bg-neutral-900  
                    hover:-translate-y-1

           ${
            isClosedPeriod
            ? "bg-amber-500/10 border-2 border-amber-400"
             : isToday
               ? "bg-green-500/20 border-2 border-green-500"
               : "bg-white/10 border-2 border-stone-500"
           }

           ${isHelg ? "hover:shadow-red-500/30" : "hover:shadow-green-500/30"}`}
                >
                  <h2 className=" text-4xl font-semibold mb-2 text-stone-400">
                    {service.day}
                  </h2>
                  <time
                    dateTime={service.dateTime}
                    className={`text-2xl leading-relaxed transition-colors duration-300  
          ${
            isClosedPeriod
            ? "text-amber-300"
            : isHelg
              ? "text-stone-200 group-hover:text-red-600"
              : "text-stone-200 group-hover:text-green-500"
          }`}
                  >
                    {service.time}
                  </time>

                  {isClosedPeriod ? (
                    <span className="
                    absolute
                    top-4
                    right-4
                    rounded-full
                    bg-amber-500/90
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-white
                    "
                    >
                      Sommerferie
                    </span>
                  ) : (
                  isToday && (
                    <span
                      className={`
                      absolute
                      top-4
                      right-4
                      rounded-full
                    bg-green-600
                    px-3 py-1
                    text-sm
                    font-semibold
                    text-white
                    ${isClosedToday ? "bg-red-600" : "bg-green-600"}
                    `}
                    >
                      {isClosedToday ? "Stengt i dag" : "Åpent i dag"}
                    </span>
                    )
                  )}
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
