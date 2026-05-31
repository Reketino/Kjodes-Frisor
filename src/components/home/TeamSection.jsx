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
                            
                        </article>

                    </li>
                ))}

              </ul>
          </section>    
    )
}