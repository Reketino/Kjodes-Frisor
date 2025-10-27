"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between  px-6 py-4">
       
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Logo.png" 
            alt="Kjødes Frisørsalong logo"
            width={50}
            height={50}
          />
          <span className="text-lg font-serif tracking-wide">
            Kjødes Frisørsalong
          </span>
        </Link>

        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
          <Link href="/om" className="hover:text-gray-300 transition">
            Om oss
          </Link>
          <Link href="/kontakt" className="hover:text-gray-300 transition">
            Kontakt oss
          </Link>
          <Link href="/apning" className="hover:text-gray-300 transition">
           Åpningstider
          </Link>
        </div>

      
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-black text-center pb-4">
          <Link
            href="/om"
            className="block py-2 hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Om oss
          </Link>
          <Link
            href="/kontakt"
            className="block py-2 hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Kontakt oss
          </Link>
          <Link
            href="/apning"
            className="block py-2 hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Åpningstider 
          </Link>
        </div>
      )}
    </nav>
  );
}
