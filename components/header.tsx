'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import { li } from 'framer-motion/client'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 px-10">
      <nav className="container-custom py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo Harmonie & Autonomie" width={50} height={40} />
            <span className="font-bold text-[#0959a1]">Harmonie & <br /> Autonomie</span>
          </Link>

          {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`font-medium transition-colors hover:text-[#0959a1] ${pathname === item.path
                      ? 'text-[#0959a1] border-b-2 border-[#fdc81e]'
                      : 'text-gray-600'
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            </ul>
          </div>

          {/* Call to Action & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
           <Link href="/contact" className="">
            <button className="hidden md:inline-flex items-center px-6 py-2 rounded-full bg-[#0959a1] text-white hover:bg-[#074a85] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95">
              Demandez un devis
            </button>
           </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke='#0959a1' viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="#0959a1" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-medium transition-colors hover:text-[#0959a1] ${pathname === item.path ? 'text-[#0959a1]' : 'text-gray-600'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-[#0959a1] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all w-full">
                Prenez rendez-vous
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}