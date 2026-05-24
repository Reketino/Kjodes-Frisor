"use client";

import { useState } from "react";
import { FaScissors } from "react-icons/fa6";

export default function BookingPage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="fixed top-20 left-0 right-0 bottom-0">
      <iframe
        src="https://booking.easysalon.no/5e80c0b6-24ab-4f8d-a88e-015ef5fdee34"
        className="w-full h-screen border-0"
        title="Bestill time"
      />
    </main>
  );
}
