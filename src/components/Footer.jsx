import React from 'react'

export default function Footer() {
  return (
    <footer className='bottom-0 w-screen h-10 flex items-center z-50'>
      <p>&copy; {new Date().getFullYear()}Kjødes Frisørsalong AS.</p>
    </footer>
  )
}
