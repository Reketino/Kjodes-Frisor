import React from "react";
import { FaPhoneSquareAlt, FaMapPin, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "Kontakt",

  description: "Kontakt Kjødes Frisørsalong eller bestill time.",

  alternates: {
    canonical: "/kontakt",
  },

  openGraph: {
    title: "Kontakt | Kjødes Frisørsalong",

    description: "Kontakt Kjødes Frisørsalong i Sykkylven eller bestill time.",

    url: "/kontakt",

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

export default function KontaktPage() {
  return (
    <main className="grow">
      <section
        className="bg-stone-400 text-neutral-900 py-10 px-6 min-h-[calc(100vh-180px)] overflow-hidden"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <header className="mb-10">
            <h1
              id="contact-heading"
              className="text-5xl font-serif font-semibold mb-4"
            >
              Kontakt oss
            </h1>
            <p className="text-xl">
              Har du spørsmål eller vil bestille time? Vi hører gjerne fra deg!
            </p>
          </header>

          <section
            className="grid md:grid-cols-2 gap-10 items-center"
            aria-label="Kontaktinformasjon & kart"
          >
            <address
              className="
            not-italic
            bg-white/20
            backdrop-blur-md 
            border border-white/20
            rounded-3xl 
            p-4 md:p-8 
            space-y-2
            shadow-lg 
            transition 
            hover:shadow-xl 
            hover:-translate-y-1
            "
            >
              <h2 className="text-2xl font-semibold mb-6">
                Kontaktinformasjon
              </h2>
              <a
                href="https://maps.google.com/?q=Storgata+5+6230+Sykkylven"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center 
                justify-center 
                md:justify-start
                gap-3 p-4
                rounded-xl
                bg-white/10
                transition-all
                hover:bg-white/25
                hover:-translate-y-1
                "
              >
                <FaMapPin
                  size={25}
                  aria-hidden="true"
                  className="text-red-500"
                />
                <span className="text-xl font-medium">
                  Storgata 5, 6230 Sykkylven
                </span>
              </a>

              <a
                href="tel:70254680"
                title="Ring Kjødes Frisørsalong"
                className="
                flex items-center
               justify-center 
               md:justify-start
                gap-3 p-4
                rounded-xl
               bg-white/10
                transition-all
                hover:bg-white/25
                hover:-translate-y-1
                "
              >
                <FaPhoneSquareAlt
                  size={25}
                  aria-hidden="true"
                  className="text-green-700"
                />

                <span className="text-xl font-medium">70 25 46 80</span>
              </a>

              <a
                href="mailto:kjodesfrisorsalong@gmail.com"
                title="Send e-post til Kjødes Frisørsalong"
                className="
                flex items-center 
                justify-center 
                md:justify-start
                gap-3 p-4
                rounded-xl
              bg-white/10
              min-w-0
                transition-all
                hover:bg-white/25
                hover:-translate-y-1
                "
              >
                <FaEnvelope
                  size={25}
                  aria-hidden="true"
                  className="text-blue-700"
                />

                <span className="text-lg md:text-xl font-medium break-all">
                  kjodesfrisorsalong@gmail.com
                </span>
              </a>
            </address>
            <div
              className="
             bg-white/20
            backdrop-blur-md 
            border border-white/20
            rounded-3xl 
            p-2
            shadow-lg 
            transition 
            hover:shadow-xl 
            hover:-translate-y-1
            "
            >
              <figure className="overflow-hidden rounded-2xl">
                <iframe
                  title="Kart over Kjødes Frisørsalong"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1137.5755979821693!2d6.578945757154498!3d62.39117212283398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616b8b29d9b0869%3A0x8371ab46b8d9392e!2sStorgata%205%2C%206230%20Sykkylven!5e1!3m2!1sno!2sno!4v1761674085785!5m2!1sno!2sno"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-80 md:h-105"
                />
                <figcaption className="sr-only">
                  Kart som viser plassering til Kjødes Frisørsalong i Sykkylven
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
