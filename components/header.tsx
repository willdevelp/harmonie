"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Calendar } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Accueil", path: "/" },
    {
      name: "À propos",
      path: "/a-propos",
      dropdown: [
        { name: "Notre histoire", path: "/a-propos#histoire" },
        { name: "Nos valeurs", path: "/a-propos#valeurs" },
        { name: "Notre équipe", path: "/a-propos#equipe" },
      ],
    },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Accompagnement à domicile", path: "/services#domicile" },
        { name: "Habiletés sociales", path: "/services#social" },
        { name: "Hygiène & quotidien", path: "/services#hygiene" },
        { name: "Guidance parentale", path: "/services#guidance" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#fdc81e]">
                <Image
                  src="/logo.png"
                  alt="Harmonie & Autonomie"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={`font-bold text-xl transition-colors ${
                  isScrolled ? "text-[#0959a1]" : "text-white"
                }`}
              >
                Harmonie &<br />
                Autonomie
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-xl">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && setActiveDropdown(item.path)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.path}
                  className={`font-medium transition-colors hover:text-[#fdc81e] flex items-center gap-1 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  } ${pathname === item.path ? "text-[#fdc81e]" : ""}`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.path ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.path && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-2 border border-gray-100"
                  >
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.path}
                        href={dropItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-[#fef7f1] hover:text-[#0959a1] transition-colors"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0743587281"
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                isScrolled
                  ? "text-[#0959a1] hover:bg-[#0959a1]/10"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>07 43 58 72 81</span>
            </a>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all ${
                  isScrolled
                    ? "bg-[#0959a1] text-white hover:bg-[#074a85]"
                    : "bg-[#fdc81e] text-[#0959a1] hover:bg-[#e5b51b]"
                }`}
              >
                <Calendar className="w-4 h-4" />
                Devis gratuit
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-[#0959a1]" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.path}>
                    <Link
                      href={item.path}
                      className={`block py-2 font-medium transition-colors ${
                        pathname === item.path
                          ? "text-[#0959a1] border-l-4 border-[#fdc81e] pl-3"
                          : "text-gray-600 hover:text-[#0959a1] pl-4"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-6 mt-2 space-y-2">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.path}
                            href={dropItem.path}
                            className="block py-1 text-sm text-gray-500 hover:text-[#0959a1]"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-200">
                  <a
                    href="tel:0743587281"
                    className="flex items-center gap-2 py-2 text-gray-600 hover:text-[#0959a1]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>07 43 58 72 81</span>
                  </a>

                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full mt-4 bg-[#0959a1] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                      Demander un devis
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
