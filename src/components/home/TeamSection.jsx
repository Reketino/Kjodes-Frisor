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
            <div className="max-w-6xl mx-auto text-center">
              <h2
              id="team-heading" 
              className=" text-4xl  font-serif font-semibold mb-8"
              >
                Våre Frisører
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-25 justify-items-center">
                <div className="flex flex-col items-center">
                  <div className="w-96 aspect-square overflow-hidden rounded-3xl shadow-lg">
                    <Image
                      src="/elise/elisekjode.jpeg"
                      alt="Bilde av Elise"
                      width={250}
                      height={350}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mt-4">
                    {" "}
                    Elise Klokkehaug Kjøde
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">Eier & Frisør</p>
                </div>
    
                <div className="flex flex-col items-center">
                  <div className="w-96 aspect-square overflow-hidden rounded-3xl shadow-lg ">
                    <Image
                      src="/marte/martehoel.jpg"
                      alt="Bilde av Marte"
                      width={250}
                      height={350}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mt-4">Marte Berge Hoel</h3>
                  <p className="text-neutral-400 leading-relaxed">Eier & Frisør</p>
                </div>
              </div>
            </div>
          </section>    
    )
}