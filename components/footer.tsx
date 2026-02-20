import Link from 'next/link'
import { FaHeart, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#0959a1] text-white mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#fdc81e] rounded-full flex items-center justify-center">
                <FaHeart className="text-[#0959a1] text-xl" />
              </div>
              <span className="text-xl font-bold">Aide & Bien-être</span>
            </div>
            <p className="text-white text-opacity-90">
              Des services à la personne professionnels et bienveillants pour votre quotidien.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#fdc81e] pb-2">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white text-opacity-90 hover:text-[#fdc81e] transition">Accueil</Link></li>
              <li><Link href="/a-propos" className="text-white text-opacity-90 hover:text-[#fdc81e] transition">À propos</Link></li>
              <li><Link href="/services" className="text-white text-opacity-90 hover:text-[#fdc81e] transition">Services</Link></li>
              <li><Link href="/contact" className="text-white text-opacity-90 hover:text-[#fdc81e] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#fdc81e] pb-2">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-[#fdc81e]" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#fdc81e]" />
                <span>contact@aide-bienetre.fr</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-[#fdc81e]" />
                <span>123 Rue des Services, 75001 Paris</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#fdc81e] pb-2">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#fdc81e] transition text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-[#fdc81e] transition text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-[#fdc81e] transition text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center text-white text-opacity-80">
          <p>&copy; 2024 Aide & Bien-être. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}