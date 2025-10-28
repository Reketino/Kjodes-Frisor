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
            px-5 py-2 rounded-full font-semibold 
            text-2xl transition-transform hover:-translate-y-1
            transition-color hover:bg-stone-900
            hover:scale-105 active:scale-90
          "
          >
            Bestill time
          </a>
          <p className="text-base md:text-xl text-neutral-200 mt-4 mb-2">
            Eller
          </p>
          <a
            href="tel:70254680"
            className="inline-block bg-white/20 text-shadow-gray-400 
        px-5 py-2 rounded-full font-semibold transition-transform hover hover:-translate-y-1
         transition-color hover:bg-stone-900 hover:scale-105"
          >
            <p className="text-2xl">📞70 25 46 80</p>
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

      <section className=" text-shadow-stone-300 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className=" text-3xl  font-serif font-semibold mb-10">
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
              <h3 className="text-xl font-semibold mt-4">
                {" "}
                Elise Klokkehaug Kjøde
              </h3>
              <p className="text-neutral-400 leading-relaxed">Eier & Frisør</p>
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
              <p className="text-neutral-400 leading-relaxed">Eier og Frisør</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-200 text-neutral-900 py-12 px-6 lg:px-12 text-center">
        <div className=" flex flex-col items-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold mb-4">
            Vi holder til i
          </h2>
          <p className="text-2xl font-semibold mb-2">
            📍Storgata 5, 6230 Sykkylven
          </p>

          <aside className="group relative grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg
        transform transition-transform duration-200 group-hover:scale-102 group-hover:shadow-yellow-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1137.5755979821693!2d6.578945757154498!3d62.39117212283398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616b8b29d9b0869%3A0x8371ab46b8d9392e!2sStorgata%205%2C%206230%20Sykkylven!5e1!3m2!1sno!2sno!4v1761674085785!5m2!1sno!2sno"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div
              className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg
        transform transition-transform duration-200 group-hover:scale-102 group-hover:shadow-yellow-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1761676614110!6m8!1m7!1sGb0LP3lef9N46rhRyLlKcg!2m2!1d62.39130171178657!2d6.580364966548465!3f203.89036889478575!4f-4.236061306655444!5f1.57054899574096"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </aside>

          <h2 className="text-3xl font-serif font-semibold mt-4">
            Velkommen!
          </h2>
        </div>
      </section>
    </main>
  );
}
