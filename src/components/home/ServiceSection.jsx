import React from "react";
import Link from "next/link";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";

export default function ServicesSection() {
  const services = [
    {
      title: "Klipp & styling",
      desc: "Fra klassisk klipp til moderne uttrykk – vi finner stilen som passer deg.",
    },
    {
      title: "Farge & striper",
      desc: "Naturlige toner eller litt ekstra glød – vi bruker skånsomme produkter.",
    },
    {
      title: "Skjegg & herreklipp",
      desc: "Presis klipp og stell med fokus på detaljer og komfort.",
    },
    {
      title: "Barneklipp",
      desc: "Tålmodig og trygg klipp for barn i alle aldre – med fokus på trivsel.",
    },
    {
      title: "Forming, bryn & vipper",
      desc: "Løft blikket med stell av bryn og vipper, formet etter dine ønsker.",
    },
    {
      title: "Drop-in & timebestilling",
      desc: "Velkommen innom når det passer deg, eller bestill time på forhånd for garantert plass.",
    },
  ];
  return (
    <section
      className="py-8 px-6 bg-background text-foreground text-center"
      aria-labelledby="services-heading"
    >
      <header>
        <h2
          id="services-heading"
          className="text-3xl sm:text-4xl font-serif font-semibold mb-8"
        >
          Våre tjenester
        </h2>
      </header>

      <ul className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8">
        {services.map((service) => (
          <li key={service.title}>
            <article className="p-6 rounded-2xl bg-white/10 hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

              <p className="text-neutral-400 text-base leading-relaxed">
                {service.desc}
              </p>
            </article>
          </li>
        ))}
      </ul>

      <nav 
      className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 w-full max-w-xl mx-auto"
      aria-label="Bestilling og kontakt"
      >
          <Link
            href="/booking"
            className="flex items-center justify-center  font-semibold   
          rounded-full gap-2 px-6 py-4 
           bg-white/10 text-shadow-gray-400
           transition-colors hover:-translate-y-1 hover:bg-stone-900 
           hover:scale-105 active:scale-90 w-64"
          >
            <span className="flex flex-row gap-2 items-center justify-center text-2xl">
              <FaScissors size={25} />
              Bestill time
            </span>
          </Link>

          <a
            href="tel:70254680"
            className="flex items-center justify-center font-semibold   
          rounded-full gap-2 px-6 py-4
           bg-white/10 text-shadow-gray-400
           transition-colors hover:-translate-y-1 hover:bg-stone-900 
           hover:scale-105 active:scale-90 w-64"
          >
            <div className="flex flex-row gap-2 items-center justify-center text-2xl">
              <FaPhoneSquareAlt size={25} />
              <p>70 25 46 80</p>
            </div>
          </a>
        </nav>
    </section>
  );
}
