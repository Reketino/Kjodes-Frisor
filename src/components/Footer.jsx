"use client";
import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { greatVibes } from "@/font/fonts";

export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-700">
      <section
        className="
      flex flex-wrap items-center 
      justify-between 
      px-6 gap-6 py-4
      "
      >
        <section className="flex items-center gap-3">
          <Link href="/">
          <Image
            src="/assets/Logo.png"
            alt="Logo til Kjødes Frisørsalong"
            width={50}
            height={50}
          />
          </Link>
          <small className="font-serif">
            © {new Date().getFullYear()} Kjødes Frisørsalong AS.
          </small>
        </section>

        <address className="not-italic">
          <p className={greatVibes.className}>
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

        <nav aria-label="Sosiale medier">
          <h2 className="text-sm font-serif font-semibold mb-2">
            Følg oss på sosiale medier
          </h2>

          <ul className="flex items-center justify-center gap-4">
            <li>
              <a
                href="https://www.instagram.com/kjodesfrisorsalongas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram
                  size={40}
                  className="hover:scale-110 active:scale-90 hover:opacity-85 transition"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100058599266291"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook
                  size={40}
                  className="hover:scale-110 active:scale-90 hover:opacity-85 transition"
                />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
