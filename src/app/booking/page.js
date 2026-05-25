"use client";

import { useState } from "react";
import BookingLoader from "@/components/booking/BookingLoader";

export default function BookingPage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="fixed top-20 left-0 right-0 bottom-0">
      {!loaded && (
        <BookingLoader />
      )}

      <iframe
        src="https://booking.easysalon.no/5e80c0b6-24ab-4f8d-a88e-015ef5fdee34"
        title="Bestill time hos Kjødes Frisørsalong"
        onLoad={() => setLoaded(true)}
        aria-hidden={!loaded}
        className={`
        w-full h-full border-0
        transition-opacity
        duration-700
        ${loaded ? "opacity-100" : "opacity-0"}
        `}
      />
    </main>
  );
}
