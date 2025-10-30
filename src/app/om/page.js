import React from 'react'
import Image from 'next/image';

export default function OmPage() {
  return (
    <main>
   <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 max-w-6xl mx-auto mt-6">
      
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/jonarkjode.jpg"
          alt="Jonar Kjøde – grunnlegger av Kjødes Frisørsalong"
          className="w-full max-w-sm rounded-2xl shadow-lg object-cover 
          transition-all duration-700 hover:scale-101"
          width={500}
          height={500}
          loading='lazy'
          fetchPriority='high'
        />
      </div>

     
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-serif mb-6 text-neutral-500">Om oss</h1>
        <p className="text-lg leading-relaxed text-neutral-400">
          <strong>Kjødes Frisørsalong</strong> har lange tradisjoner i Sykkylven. Frisørmester <strong>Jonar Kjøde</strong> startet salongen i 1953 etter fullført læretid og utdanning, og bygget raskt opp et godt rykte og en trofast kundekrets gjennom solid håndverk og ekte omtanke.
        </p>
      </div>
    </section>

    <section className='flex flex-col md:flex-row-reverse items-center justify-center gap-10 px-6 py-10 max-w-6xl mx-auto '>
      <div className="relative md:w-1/2 flex justify-center group">
      <Image
      src="/elisetest.jpg"
      alt="Elise Kjøde Klokkehaug – nåværende eier av Kjødes Frisørsalong"
      className="w-full max-w-sm rounded-2xl shadow-lg object-cover
      grayscale hover:scale-101 hover:grayscale-0  
      transition-all duration-700"
      width={500}
      height={500}
      />
      </div>
    

      <div className="md:w-1/2 text-center md:text-right">
      <p className="text-lg leading-relaxed text-neutral-400 mt-2">
        I dag drives salongen videre av barnebarnet hans, <strong>Elise Kjøde Klokkehaug</strong>, som tilbyr klipp og stell for både damer og herrer. Hos Kjødes møter du den samme kvaliteten, roen og personlige servicen som alltid har vært salongens varemerke.
      </p>
      </div>
    </section>

    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-10 max-w-6xl mx-auto">
      <div className="relative md:w-1/2 flex justify-center group">
      <Image
      src="/glimt1.jpg"
      alt="Marte Berge Hoel – Eier av Kjødes Frisørsalong"
      className="w-full max-w-sm rounded-2xl shadow-lg object-cover
      grayscale hover:scale-101 hover:grayscale-0  
      transition-all duration-700"
      width={500}
      height={500}
      />
      </div>

<div className="md:w-1/2 text-center md:text-left">
        <p className="text-lg leading-relaxed text-neutral-400 mt-2">
          <strong>Marte Berge Hoel</strong> startet frisørkarrieren hos Cancam og ble lærling hos Elise i 2019. I 2022 kjøpte hun seg inn i <strong>Kjødes Frisørsalong</strong> og driver nå salongen sammen med Elise. Marte kombinerer kreativitet og presisjon, og setter alltid kunden i fokus for en personlig og profesjonell opplevelse.
        </p>
      </div>
    </section>

<section className="flex flex-col items-center justify-center gap-5 px-6 py-16 max-w-6xl mx-auto mt-2">
  <Image
  src="/salong.jpeg"
  alt='Bilde av salongen'
  className='w-full max-w-3xl rounded-4xl shadow-lg object-cover
      grayscale hover:scale-101 hover:grayscale-0  
      transition-all duration-700"'
  width={1920}
  height={1080}
  />
      <div className="md:w-1/2 text-center">
        <p className="font-semibold leading-relaxed text-neutral-400 text-xl">
          Velkommen til Kjødes Frisørsalong – hvor tradisjon møter moderne stil i hjertet av Sykkylven!
        </p>
      </div>
    </section>

       </main>
  );
}
