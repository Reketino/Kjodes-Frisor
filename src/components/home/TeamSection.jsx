import React from "react";
import Image from "next/image";

export default function TeamSection() {
    const stylists = [
        {
            name: "Elise Klokkehaug Kjøde",
            role: "Eier & Frisør",
            image: "/elise/elisekjode.jpeg",
            alt: "Elise Klokkehaug Kjøde",
        },

        {
            name: "Marte Berge Hoel",
            role: "Eier & Frisør",
            image: "/marte/martehoel.jpg",
            alt: "Marte Berge Hoel",
        },
    ]

    return (
          <section 
          className=" text-shadow-stone-300 py-16 px-6"
          aria-labelledby="team-heading"
          >
            <header className="max-w-6xl mx-auto text-center">
              <h2
              id="team-heading" 
              className=" text-4xl  font-serif font-semibold mb-8"
              >
                Våre Frisører
              </h2>
               </header>
              <ul className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-25 justify-items-center">

                {stylists.map((stylist) => (
                    <li key={stylist.name}>

                        <article className="flex flex-col items-center">

                            <figure className="w-96 aspect-square overflow-hidden rounded-3xl shadow-lg">

                                <Image
                                src={stylist.image}
                                alt={stylist.alt}
                                width={250}
                                height={350}
                                className="
                                w-full h-full object-cover
                                transition-transform duration-300
                                hover:scale-105
                                "
                                />
                                      
                            </figure>

                            <h3 className="text-xl font-semibold mt-4">
                                {stylist.name}
                            </h3>

                            <p className="text-neutral-400 leading-relaxed">
                                {stylist.role}
                            </p>

                        </article>

                    </li>
                ))}

              </ul>
          </section>    
    )
}