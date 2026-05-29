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
        </section> 
        )
}