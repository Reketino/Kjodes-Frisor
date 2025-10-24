import React from 'react'
import Image from 'next/image';


export default function Home() {
  return (

<main>
  
 <section className='relative flex items-center justify-center text-center h-[80vh] sm:h-[90vh] overflow-hidden'>
        <Image 
        src="/hero2perf.jpg"
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
          target='_blank'
          className="
              inline-block bg-accent text-white 
            px-5 sm:px-8 py-2 sm:py-3 rounded-full font-semibold 
            text-sm sm:text-base
            transition-transform hover:-translate-y-1
          "
        >
          Bestill time
        </a>
      </div>
    </section>

<section className="bg-background text-foreground py-20 px-4 sm:px-8">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <h2 className="text-3xl sm:text-4xl font-serif font-semibold">
      Velkommen til Kjødes Frisørsalong
    </h2>
    <p className="text-lg text-neutral-600 leading-relaxed">
      Vi er en liten salong med stort hjerte for faget og menneskene som sitter i stolen.  
      Hos oss får du tid, trygghet og en klipp som passer deg – ikke bare trenden.
    </p>
  </div>
</section>

  <section className="py-20 px-6 bg-background text-foreground text-center">
  <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-8">
    Våre tjenester
  </h2>
  <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8">
    {[
      { title: "Klipp & styling", desc: "Fra klassisk klipp til moderne uttrykk – vi finner stilen som passer deg." },
      { title: "Farge & striper", desc: "Naturlige toner eller litt ekstra glød – vi bruker skånsomme produkter." },
      { title: "Skjegg & herreklipp", desc: "Presis klipp og stell med fokus på detaljer og komfort." },
    ].map((service) => (
      <div
        key={service.title}
        className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm shadow-sm hover:shadow-md transition"
      >
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-neutral-400 text-base leading-relaxed">
          {service.desc}
        </p>
      </div>
    ))}
  </div>
</section>

  <section className="py-20 bg-neutral-100 text-neutral-800 mt-6">
  <h2 className="text-3xl text-center font-serif mb-8">Et glimt fra salongen</h2>
  <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-4 px-6">
    <img src="/glimt1.jpg" className="rounded-lg object-cover h-64 w-full" />
    <img src="/glimt2.jpg" className="rounded-lg object-cover h-64 w-full" />
    <img src="/glimt3.jpg" className="rounded-lg object-cover h-64 w-full" />
  </div>
</section>

</main>


  );
}


