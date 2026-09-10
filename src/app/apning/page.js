import Image from "next/image";

import { closedPeriods } from "@/data/closedPeriod";
import { days, openingHours } from "@/data/openingHours";

export const dynamic = "force-dynamic";

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
  const now = new Date();

  const todayDate = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Oslo",
  }).format(now);

  const todayName = new Intl.DateTimeFormat("nb-NO", {
    timeZone: "Europe/Oslo",
    weekday: "long",
  }).format(now);

  const today = days.findIndex(
    (day) => day.toLowerCase() === todayName.toLowerCase(),
  );

  const activePeriod = closedPeriods.find(
    (period) => todayDate >= period.start && todayDate <= period.end,
  );

  const isClosedPeriod = Boolean(activePeriod);

  const currentWeekStart = new Date(`${todayDate}T12:00:00Z`);

  const daysSinceMonday = today === 0 ? 6 : today - 1;

  currentWeekStart.setUTCDate(currentWeekStart.getUTCDate() - daysSinceMonday);

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
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

      <div className="pointer-events-none absolute inset-0 z-0 bg-black/70" />

      <section
        className="relative z-10 w-full max-w-4xl px-4 py-10 text-center"
        aria-labelledby="opening-hours-heading"
      >
        <h1
          id="opening-hours-heading"
          className="mb-8 font-serif text-5xl font-semibold text-stone-400 md:text-6xl"
        >
          Åpningstider
        </h1>

        {isClosedPeriod && activePeriod && (
          <div
            className={`
              mb-8
              rounded-3xl
              border
              p-6
              text-center
              shadow-lg
              backdrop-blur-md
              ${activePeriod.theme.notice}
            `}
          >
            <h2
              className={`
                text-3xl
                font-serif
                font-semibold
                ${activePeriod.theme.heading}
              `}
            >
              {activePeriod.icon} {activePeriod.name}
            </h2>

            <p className="mt-3 text-lg text-stone-100">
              {activePeriod.message}
            </p>

            <p className="mt-2 text-stone-300">{activePeriod.greeting}</p>
          </div>
        )}

        <ul className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
          {openingHours.map((service) => {
            const isHelg = ["Lørdag", "Søndag"].includes(service.day);

            const isToday = service.day === days[today];

            const serviceDayIndex = days.indexOf(service.day);

            const serviceDate = new Date(currentWeekStart);

            const daysFromMonday =
              serviceDayIndex === 0 ? 6 : serviceDayIndex - 1;

            serviceDate.setUTCDate(serviceDate.getUTCDate() + daysFromMonday);

            const serviceDateString = serviceDate.toISOString().slice(0, 10);

            const isClosedByPeriod =
              Boolean(activePeriod) &&
              serviceDateString >= activePeriod.start &&
              serviceDateString <= activePeriod.end;

            const isClosedToday = isToday && service.time === "Stengt";

            return (
              <li key={service.day}>
                <article
                  className={`
                    relative
                    group
                    rounded-4xl
                    border-2
                    p-6
                    shadow-md
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1

                    ${
                      isClosedByPeriod && activePeriod
                        ? activePeriod.theme.card
                        : isToday
                          ? "border-green-500 bg-green-500/20"
                          : "border-stone-500 bg-white/10"
                    }

                    ${
                      isClosedByPeriod
                        ? ""
                        : isHelg
                          ? "hover:bg-neutral-900 hover:shadow-red-500/30"
                          : "hover:bg-neutral-900 hover:shadow-green-500/30"
                    }
                  `}
                >
                  <h2 className="mb-2 text-4xl font-semibold text-stone-400">
                    {service.day}
                  </h2>

                  <time
                    dateTime={isClosedByPeriod ? undefined : service.dateTime}
                    className={`
                      text-2xl
                      leading-relaxed
                      transition-colors
                      duration-300

                      ${
                        isClosedByPeriod && activePeriod
                          ? activePeriod.theme.time
                          : isHelg
                            ? "text-stone-200 group-hover:text-red-600"
                            : "text-stone-200 group-hover:text-green-500"
                      }
                    `}
                  >
                    {isClosedByPeriod ? "Stengt" : service.time}
                  </time>

                  {isClosedByPeriod && activePeriod && (
                    <>
                      <span
                        aria-hidden="true"
                        className="
                          absolute
                          right-5
                          bottom-4
                          text-4xl
                          opacity-70
                          transition-transform
                          duration-300
                          group-hover:rotate-6
                          group-hover:scale-110
                        "
                      >
                        {activePeriod.icon}
                      </span>

                      <span
                        className={`
                          absolute
                          top-4
                          right-4
                          rounded-full
                          px-3
                          py-1
                          text-xs
                          font-semibold
                          uppercase
                          tracking-wide
                          text-white
                          ${activePeriod.theme.badge}
                        `}
                      >
                        {activePeriod.name}
                      </span>
                    </>
                  )}

                  {!isClosedByPeriod && isToday && (
                    <span
                      className={`
                        absolute
                        top-4
                        right-4
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        font-semibold
                        text-white
                        ${isClosedToday ? "bg-red-600" : "bg-green-600"}
                      `}
                    >
                      {isClosedToday ? "Stengt i dag" : "Åpent i dag"}
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
