import React from 'react'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer className="text-white">
        <div className="container flex items-center justify-between mx-auto p-10 lg:p-6">
            <span>&copy; 2024</span>
            <Socials />
        </div>
    </footer>
  )
}

export default Footer