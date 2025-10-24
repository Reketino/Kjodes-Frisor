import React from 'react'

export default function OmPage() {
  return (
    <main className='relative flex items-center justify-center text-center h-[80vh] sm:h-[90vh] overflow-hidden'>
      <div className="relative z-10 max-w-[90%] sm:max-w-2xl px-2 sm:px-4">
        <h1 className=" text-center text-4xl sm:text-6xl font-serif text-white tracking-tight leading-tight drop-shadow-md">
          Om oss
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-200 mb-6 sm:mb-8">
          Kjødes Frisørsalong har lange tradisjoner i Sykkylven.
          Frisørmester Jonar Kjøde startet salongen i 1953 etter fullført læretid og utdanning.
          Han bygget raskt opp et godt rykte og en trofast kundekrets gjennom solid håndverk og ekte omtanke.

          I dag drives salongen videre av barnebarnet hans, Elise Kjøde Klokkehaug, som tilbyr klipp og stell for både damer og herrer.
          Hos Kjødes møter du den samme kvaliteten, roen og personlige servicen som alltid har vært salongens varemerke.
        </p>
        </div>
    </main>
  )
}
