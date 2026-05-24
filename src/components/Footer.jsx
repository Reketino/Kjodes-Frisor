"use client";
import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {

  return (
    <footer className="flex flex-col h-fit bg-stone-900">
      <section className="flex flex-wrap items-center justify-between w-full px-6 py-4 gap-6 border-t border-stone-700">
        <section className="flex items-center gap-3">
          <Image
            src="/assets/Logo.png"
            alt="Logo til Kjødes Frisørsalong"
            width={50}
            height={50}
            className="mb-2"
          />
          <p className="text-white font-serif">
            &copy; {new Date().getFullYear()} Kjødes Frisørsalong AS.
          </p>
        </section>

        <address className="flex items-center justify-center sm:justify-start -ml-22.5">
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
        </address>

        <nav className=" sm:items-end text-sm">
          <p className="font-serif font-semibold mb-1">
            Følg oss på sosiale medier
          </p>

          <ul className="flex flex-row items-center justify-center gap-4 mt-2">
            <Link
              href="https://www.instagram.com/kjodesfrisorsalongas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram
                size={40}
                className="hover:scale-110 active:scale-90 hover:opacity-85 transition-opacity"
              />
            </Link>

            <Link
              href="https://www.facebook.com/profile.php?id=100058599266291"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook
                size={40}
                className="hover:scale-110 active:scale-90 hover:opacity-85 transition-opacity"
              />
            </Link>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
