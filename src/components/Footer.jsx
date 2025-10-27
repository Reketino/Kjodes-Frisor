import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
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

      <ul className="flex flex-row gap-6 font-serif sm:text-base font-semibold">
        <Link
          href="/om"
          className=" mt-2 font-serif text-shadow-stone-400 transition-discrete  hover:text-gray-100  hover:underline"
        >
          Om oss
        </Link>
        <Link
          href="/kontakt"
          className=" mt-2 font-serif text-shadow-stone-400 transition-discrete  hover:text-gray-100 hover:underline"
        >
          Kontakt oss
        </Link>
        <Link
          href="/apning"
          className=" mt-2 font-serif text-shadow-stone-600 transition-discrete hover:text-gray-100 hover:underline"
        >
          Åpningstider
        </Link>
      </ul>

      <div className="flex flex-col items-center sm:items-end text-sm">
        <p className="font-serif font-semibold mb-1">Følg oss på sosiale medier</p>

      <div className="flex flex-row gap-4 mt-2">
        <Link
          href="https://www.instagram.com/kjodesfrisorsalongas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Instagram.png"
            alt="Instagram"
            width={36}
            height={36}
            className="hover:scale-110 active:scale-90 hover:opacity-85 transition-opacity"
          ></Image>
        </Link>

        <Link
          href="https://www.facebook.com/profile.php?id=100058599266291"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/facebook.png"
            alt="facebook"
            width={36}
            height={36}
            className="hover:scale-110 active:scale-90 hover:opacity-85 transition-opacity"
          ></Image>
        </Link>
      </div>
      </div>
      </footer>
    </main>
  );
}
