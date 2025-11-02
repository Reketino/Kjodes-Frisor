"use client";
import React, { useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex flex-col h-fit bg-stone-900">
      <footer className="flex flex-wrap items-center justify-between w-full px-6 py-4 gap-6 border-t border-stone-700">
        <div className="flex items-center gap-3">
          <Image
            src="/Logo.png"
            alt="Logo til Kjødes"
            width={50}
            height={50}
            className="mb-2"
          ></Image>
          <p className="text-white font-serif">
            &copy; {new Date().getFullYear()} Kjødes Frisørsalong AS.
          </p>
        </div>

        <div className="text-s flex items-center justify-center sm:justify-start ml-[-90px]">
          <p style={{ fontFamily: "'Great Vibes', cursive" }}>
            Utviklet av{" "}
            <a
              href="https://github.com/Reketino"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 hover:underline"
            >
              Reketino
            </a>
          </p>
        </div>

        <div className=" sm:items-end text-sm">
          <p className="font-serif font-semibold mb-1">
            Følg oss på sosiale medier
          </p>

          <div className="flex flex-row items-center justify-center gap-4 mt-2">
            <Link
              href="https://www.instagram.com/kjodesfrisorsalongas/"
              alt="Kjødes Frisørsalong Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={40}
                className="hover:scale-110 active:scale-90 hover:opacity-85 transition-opacity"
              ></FaInstagram>
            </Link>

            <Link
              href="https://www.facebook.com/profile.php?id=100058599266291"
              alt="Kjødes Frisørsalong Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={40}
                className="hover:scale-110 active:scale-90 hover:opacity-85 transition-opacity"
              ></FaFacebook>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
