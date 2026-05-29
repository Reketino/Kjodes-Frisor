import React from "react";

export default function IntroSection() {
    return (
          <section 
          className="bg-background text-foreground py-15 px-4 sm:px-8"
          aria-labelledby="intro-heading"
          >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2
          id="intro-heading"
          className="text-3xl sm:text-4xl font-serif font-semibold"
          >
            Velkommen til Kjødes Frisørsalong
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Vi er en liten salong med stort hjerte for faget og menneskene som
            sitter i stolen. Hos oss får du tid, trygghet og en klipp som passer
            deg – ikke bare trenden.
          </p>
        </div>
      </section>
    )
}