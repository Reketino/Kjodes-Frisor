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

      <div className='absolute inset-0 rounded-2xl opacity-50 group-hover:opacity-0
      transition-all duration-700 ease-in-out pointer-events-none'
      style={{ backgroundImage:
        'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
      backgroundSize: 'cover',
      mixBlendMode: 'overlay',
    }}
    />
    

      <div className="md:w-1/2 text-center md:text-right">
      <p className="text-lg leading-relaxed text-neutral-400 mt-2">
        I dag drives salongen videre av barnebarnet hans, <strong>Elise Kjøde Klokkehaug</strong>, som tilbyr klipp og stell for både damer og herrer. Hos Kjødes møter du den samme kvaliteten, roen og personlige servicen som alltid har vært salongens varemerke.
      </p>
      </div>
    </section>
       </main>
  );
}
