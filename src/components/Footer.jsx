import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <main className="flex flex-col h-fit  bg-stone-900">
      <footer className="flex flex-wrap items-start justify-between w-full px-2 py-2 gap-6 ">
        <div className="flex items-center gap-3">
        <Image
          src="/Logo.png"
          alt="Logo til Kjødes"
          width={40}
          height={40}
          className="mb-2"
        ></Image>
        <p className="text-white font-serif">
          &copy; {new Date().getFullYear()} Kjødes Frisørsalong AS.
        </p>
      </div>

      <ul className="flex flex-col text-center gap-1">
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

      <div className="flex flex-col items-center justify-center  mb-2">
        <p className="font-serif text-sm">Følg oss på sosiale medier</p>

      <div className="flex flex-row gap-6 mt-2">
        <Link
          href="https://www.instagram.com/kjodesfrisorsalongas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Instagram.png"
            alt="Instagram"
            width={60}
            height={60}
            className="object-center"
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
            width={60}
            height={60}
          ></Image>
        </Link>
      </div>
      </div>
      </footer>
    </main>
  );
}
