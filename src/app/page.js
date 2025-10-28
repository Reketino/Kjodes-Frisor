import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative flex items-center justify-center text-center h-[80vh] sm:h-[90vh] overflow-hidden">
        <Image
          src="/test.jpg"
          alt="Modell"
          fill
          className="object-cover object-center object-position  sm:object-[center_40%] 
          
        "
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-[90%] sm:max-w-2xl px-2 sm:px-4">
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-tight drop-shadow-md">
            Kjødes Frisørsalong
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-200 mb-6 sm:mb-8">
            Din frisør i hjertet av Sykkylven
          </p>
          <a
            href="https://www.ledigtime.no/kjodes/step1"
            target="_blank"
            className="
              inline-block bg-white/20  text-shadow-gray-400 
            px-5 sm:px-8 py-2 sm:py-3 rounded-full font-semibold 
            text-sm sm:text-base
            transition-transform hover:-translate-y-1
            transition-color hover:bg-stone-900
            hover:scale-105 active:scale-90
          "
          >
            Bestill time
          </a>
        </div>
      </section>

      <section className="bg-background text-foreground py-15 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold">
            Velkommen til Kjødes Frisørsalong
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Vi er en liten salong med stort hjerte for faget og menneskene som
            sitter i stolen. Hos oss får du tid, trygghet og en klipp som passer
            deg – ikke bare trenden.
          </p>
        </div>
      </section>

      <section className="py-10 px-6 bg-background text-foreground text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-8">
          Våre tjenester
        </h2>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8">
          {[
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
          ].map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl bg-white/10 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-neutral-400 text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <a
          href="https://www.ledigtime.no/kjodes/step1"
          target="_blank"
          className="inline-block font-semibold  mb-2 mt-6  
          rounded-full px-5 sm:px-8 py-3 sm:py-3.5 
           bg-white/10 text-shadow-gray-400
           transition-colors hover:-translate-y-1 hover:bg-stone-900 
           hover:scale-105 active:scale-90"
        >
          Bestill time
        </a>
      </section>

      <section className="py-20 bg-stone-200 text-neutral-800 mt-6">
        <h2 className="text-3xl text-center font-serif mb-8">
          Et glimt fra salongen
        </h2>

        <div className="group relative max-w-5xl mx-auto grid sm:grid-cols-3 gap-4 px-6">
          <img
            src="/glimt1.jpg"
            className="rounded-2xl object-cover h-64 w-full transition-all duration-300
            group-hover:scale-101 group-hover:shadow-2xl"
          />
          <img
            src="/glimt2.jpg"
            className="rounded-2xl object-cover h-64 w-full transition-all duration-300
            group-hover:scale-101 group-hover:shadow-2xl"
          />
          <img
            src="/glimt.jpg"
            className="rounded-2xl object-cover h-64 w-full transition-all duration-300
            group-hover:scale-101 group-hover:shadow-2xl"
          />
        </div>
      </section>

      <section className="bg-stone-700 text-shadow-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className=" text-3xl sm:text-5xl font:serif font-semibold mb-10">
            Våre Frisører
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <Image
            src="/elise.jpeg"
            alt="Bilde av Elise"
            width={250}
            height={250}
            className="rounded-full shadow-lg object-cover"
            />
            <h3 className="text-xl font-semibold mt-4"> Elise Klokkehaug Kjøde</h3>
            <p className="text-neutral-400 leading-relaxed">
              Daglig leder og eier Elise Klokkehaug Kjøde
            </p>
            </div>

            <div className="flex flex-col items-center">
            <Image
            src="/Marte.jpg"
            alt="Bilde av Marte"
            width={250}
            height={250}
            className="rounded-full shadow-lg object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">Marte Berge Hoel</h3>
            <p className="text-neutral-400 leading-relaxed"> Medeier og Frisør Marte Berge Hoel</p>
            </div>
           </div>
        </div>
      </section>
    </main>
  );
}
