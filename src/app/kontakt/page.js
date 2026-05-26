import React from "react";
import { FaPhoneSquareAlt, FaMapPin, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "Kontakt",

  description: "Kontakt Kjødes Frisørsalong eller bestill time.",

  alternates: {
    cannonical: "/kontakt",
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
      <section className="bg-stone-400 text-neutral-900 py-10 px-6 min-h-[calc(100vh-180px)]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-serif font-semibold mb-4">
            Kontakt oss
          </h1>
          <p className="text-xl mb-10">
            Har du spørsmål eller vil bestille time? Vi hører gjerne fra deg!
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <address className="bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-lg transition hover:shadow-xl hover:-translate-y-1">
              <a
                href="https://maps.google.com/?q=Storgata+5+6230+Sykkylven"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-red-500 flex items-center justify-center mb-2 gap-1"
              >
                <FaMapPin size={25} />
                Storgata 5, 6230 Sykkylven
              </a>

              <a
                href="tel:70254680"
                className="text-xl  hover:text-green-700 transition flex flex-row items-center justify-center mb-2 gap-1"
              >
                <FaPhoneSquareAlt size={25} />
                70 25 46 80
              </a>

              <a
                href="mailto:kjodesfrisorsalong@gmail.com"
                className="text-xl hover:text-green-700 transition flex flex-row  items-center justify-center gap-1"
              >
                <FaEnvelope size={25} />
                kjodesfrisorsalong@gmail.com
              </a>
            </address>
            <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-200 hover:scale-102">
              <iframe
                title="Kart over Kjødes Frisørsalong"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1137.5755979821693!2d6.578945757154498!3d62.39117212283398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616b8b29d9b0869%3A0x8371ab46b8d9392e!2sStorgata%205%2C%206230%20Sykkylven!5e1!3m2!1sno!2sno!4v1761674085785!5m2!1sno!2sno"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 md:h-80"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
