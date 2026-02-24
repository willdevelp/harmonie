'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'

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
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo Aide & Bien-être" width={60} height={50} />
            <span className="text-2xl font-bold text-[#0959a1]">Harmonie & Autonomie</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-medium transition-colors hover:text-[#0959a1] ${
                  pathname === item.path
                    ? 'text-[#0959a1] border-b-2 border-[#fdc81e]'
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* <button className="btn-[#0959a1] bg-[#0959a1] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all">
              Devis gratuit
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-[#0959a1]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-medium transition-colors hover:text-[#0959a1] ${
                    pathname === item.path ? 'text-[#0959a1]' : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* <button className="bg-[#0959a1] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all w-full">
                Devis gratuit
              </button> */}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}