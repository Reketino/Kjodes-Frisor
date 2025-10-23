import React from 'react'

export default function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 w-screen h-10 flex items-center justify-center  text-white z-50'>
      <p>&copy; {new Date().getFullYear()} Kjødes Frisørsalong AS.</p>
    </footer>
  )
}
