import React from "react";
import Image from "next/image";

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
    { day: "Mandag", time: "09-16:30", dateTime: "09:00-16:30" },
    { day: "Tirsdag", time: "09-16:30", dateTime: "09:00-16:30" },
    { day: "Onsdag", time: "09-16:30", dateTime: "09:00-16:30" },
    { day: "Torsdag", time: "09-16:30", dateTime: "09:00-16:30" },
    { day: "Fredag", time: "09-16", dateTime: "09:00-16:00" },
    { day: "Lørdag", time: "Stengt", dateTime: "" },
    { day: "Søndag", time: "Stengt", dateTime: "" },
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
          className=" text-6xl mb-8 font-semibold text-stone-500"
        >
          Åpningstider
        </h1>
        <ul className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
          {openingHours.map((service) => {
            const isHelg = ["Lørdag", "Søndag"].includes(service.day);
            const isToday = service.day === days[today];

            return (
              <li key={service.day}>
                <article
                  className={`group p-6 rounded-4xl bg-white/10 backdrop-blur-md shadow-md transition-all duration-300
           hover:bg-neutral-900  hover:-translate-y-1

           ${
             isToday ? "bg-green-500/15 border border-green-500" : "bg-white/10"
           }

           ${isHelg ? "hover:shadow-red-500/30" : "hover:shadow-green-500/30"}`}
                >
                  <p className=" text-4xl font-semibold mb-2 text-stone-400">
                    {service.day}
                  </p>
                  <time
                    className={`text-2xl leading-relaxed transition-colors duration-300  
          ${
            isHelg
              ? "text-stone-200 group-hover:text-red-600"
              : "text-stone-200 group-hover:text-green-500"
          }`}
                  >
                    {service.time}
                  </time>

                  {isToday && (
                    <span
                      className="
                    block mt-1.5
                    text-sm
                    font-semibold
                    text-green-400
                    "
                    >
                      Åpent i dag
                    </span>
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
