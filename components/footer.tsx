import Link from "next/link";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
  Clock,
  Shield,
  Users,
  Award,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/a-propos" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    {
      name: "Politique de confidentialité",
      path: "/politique-de-confidentialite",
    },
  ];

  const services = [
    { name: "Accompagnement à domicile", path: "/services#domicile" },
    { name: "Habiletés sociales", path: "/services#social" },
    { name: "Hygiène & quotidien", path: "/services#hygiene" },
    { name: "Guidance parentale", path: "/services#guidance" },
    { name: "Lien école & partenaires", path: "/services#ecole" },
  ];

  const certifications = [
    { icon: <Shield className="w-5 h-5" />, text: "Agréé qualité" },
    {
      icon: <Award className="w-5 h-5" />,
      text: "Certifié service à la personne",
    },
    { icon: <Users className="w-5 h-5" />, text: "Équipe qualifiée" },
  ];

  return (
    <footer className="relative bg-[#0959a1] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fdc81e] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Main Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16">
          {/* Company Info - 4 colonnes */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#fdc81e] bg-white">
                <Image
                  src="/logo.png"
                  alt="Harmonie & Autonomie"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-2xl font-bold">Harmonie &</span>
                <br />
                <span className="text-2xl font-bold">Autonomie</span>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed">
              Des services à la personne professionnels et bienveillants pour
              votre quotidien. Plus de 10 ans d&apos;expérience au service des
              familles.
            </p>

            {/* Certifications */}
            <div className="space-y-2">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-white/70"
                >
                  {cert.icon}
                  <span className="text-sm">{cert.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                {
                  icon: <Facebook className="w-5 h-5" />,
                  href: "#",
                  label: "Facebook",
                },
                {
                  icon: <Twitter className="w-5 h-5" />,
                  href: "#",
                  label: "Twitter",
                },
                {
                  icon: <Instagram className="w-5 h-5" />,
                  href: "#",
                  label: "Instagram",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#fdc81e] hover:text-[#0959a1] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - 2 colonnes */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Liens rapides
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#fdc81e]"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="flex items-center gap-2 text-white/70 hover:text-[#fdc81e] transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - 3 colonnes */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Nos services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#fdc81e]"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.path}
                    className="flex items-center gap-2 text-white/70 hover:text-[#fdc81e] transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - 3 colonnes */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#fdc81e]"></span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Téléphone</div>
                  <a
                    href="tel:0743587281"
                    className="hover:text-[#fdc81e] transition-colors"
                  >
                    07 43 58 72 81
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Email</div>
                  <a
                    href="mailto:contact@harmonie-autonomie.fr"
                    className="hover:text-[#fdc81e] transition-colors break-all"
                  >
                    contact@harmonie-autonomie.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Adresse</div>
                  <p>
                    123 Rue des Services
                    {/* <br />
                    75001 Paris */}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Horaires</div>
                  <p>
                    7j/7, 12h/24
                    {/* <br />
                    Service d&apos;urgence disponible */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-white/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Restez informé</h4>
              <p className="text-white/70">
                Recevez nos actualités et conseils pour le bien-être de vos
                proches
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-[#fdc81e] transition-colors"
              />
              <button className="px-6 py-3 bg-[#fdc81e] text-[#0959a1] rounded-full font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap">
                S&apos;inscrire
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-white/20 text-center text-white/60 text-sm">
          <p>
            © {new Date().getFullYear()} Harmonie & Autonomie. Tous droits
            réservés.
          </p>
          <p className="mt-2">
            Site conçu avec{" "}
            <Heart className="w-4 h-4 inline-block text-red-400" /> pour le
            bien-être de vos proches
          </p>
        </div>
      </div>
    </footer>
  );
}
