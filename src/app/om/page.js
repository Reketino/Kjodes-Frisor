import React from 'react'

export default function OmPage() {
  return (
   <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 max-w-6xl mx-auto">
      
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/jonarkjode.jpg"
          alt="Jonar Kjøde – grunnlegger av Kjødes Frisørsalong"
          className="w-full max-w-sm rounded-2xl shadow-lg object-cover"
        />
      </div>

     
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-serif mb-6 text-neutral-600">Om oss</h1>
        <p className="text-lg leading-relaxed text-neutral-500">
          <strong>Kjødes Frisørsalong</strong> har lange tradisjoner i Sykkylven. Frisørmester <strong>Jonar Kjøde</strong> startet salongen i 1953 etter fullført læretid og utdanning, og bygget raskt opp et godt rykte og en trofast kundekrets gjennom solid håndverk og ekte omtanke.
        </p>
        <p className="text-lg leading-relaxed text-neutral-500 mt-4">
          I dag drives salongen videre av barnebarnet hans, <strong>Elise Kjøde Klokkehaug</strong>, som tilbyr klipp og stell for både damer og herrer. Hos Kjødes møter du den samme kvaliteten, roen og personlige servicen som alltid har vært salongens varemerke.
        </p>
      </div>
    </section>
  );
}
