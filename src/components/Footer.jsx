import React from 'react'
import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
  return (

    <main className='flex flex-col h-fit  bg-stone-900'>
      
    <footer className='flex items-center justify-start gap-4 '>
       <Image
      src="/Logo.png"
      alt="Logo til Kjødes"
      width={40}
      height={40}
      className=' mb-2 mt-2'
      >
      </Image>
      <p className='text-white'>
        &copy; {new Date().getFullYear()} Kjødes Frisørsalong AS.</p>
    </footer>


      <ul className='flex flex-col absolute right-8'>
      <Link href="/om" className=" mt-2 text-shadow-stone-400 transition-discrete  hover:text-gray-100  hover:underline">
      Om oss
      </Link>
      <Link href="/kontakt" className=" mt-2 text-shadow-stone-400 transition-discrete  hover:text-gray-100 hover:underline">
      Kontakt oss
      </Link>
      <Link href="/apning" className=" mt-2 text-shadow-stone-600 transition-discrete hover:text-gray-100 hover:underline">
      Åpningstider
      </Link>
      </ul>
     
     <div className='flex items-center justify-center'>
    <p className='font-sans text-center'>
      Følg oss på sosiale medier
    </p>
    </div>

    <div className='flex items-center justify-center mt-2 mb-2 gap-6'>
    <Link 
    href="https://www.instagram.com/kjodesfrisorsalongas/"
    target='_blank'
    rel='noopener noreferrer'
    
    >
    <Image 
    src="/Instagram.png"
    alt="Instagram"
    width={60}
    height={60}
    className='object-center'
    >
    </Image>
    </Link>

    <Link 
    href="https://www.facebook.com/profile.php?id=100058599266291"
    target='_blank'
    rel='noopener noreferrer'
    >
    <Image
    src="/facebook.png"
    alt="facebook"
    width={60}
    height={60}
    >
    </Image>
    </Link>
     </div>

    </main>
  )
}
