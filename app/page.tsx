import Hero from '@/components/Hero'
// import ServicesSection from '@/components/ServicesSection'
import  Link from 'next/link'
import { FaHandHoldingHeart, FaClock, FaUserCheck, FaShieldAlt } from 'react-icons/fa'

export default function Home() {
  const features = [
    {
      icon: <FaHandHoldingHeart className="text-4xl text-[#0959a1]" />,
      title: "Bienveillance",
      description: "Une approche humaine et respectueuse de chaque personne"
    },
    {
      icon: <FaClock className="text-4xl text-[#0959a1]" />,
      title: "Disponibilité",
      description: "Service 7j/7 avec des horaires adaptés à vos besoins"
    },
    {
      icon: <FaUserCheck className="text-4xl text-[#0959a1]" />,
      title: "Professionnalisme",
      description: "Intervenants qualifiés et formés régulièrement"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#0959a1]" />,
      title: "Sécurité",
      description: "Personnel agréé et assuré pour votre tranquillité"
    }
  ]

  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center text-5xl font-bold text-[#0959a1]">Pourquoi nous choisir ?</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Des services de qualité avec une équipe dédiée à votre bien-être
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-all">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#0959a1] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 bg-[#fef7f1]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className='space-y-5'>
              <h2 className="section-title text-3xl">À propos de nous</h2>
              <p className="text-gray-600">
                Depuis plus de 10 ans, Aide & Bien-être accompagne les personnes âgées, 
                handicapées ou dépendantes dans leur quotidien. Notre mission : leur 
                permettre de rester chez elles dans les meilleures conditions.
              </p>
              <p className="text-gray-600">
                Notre équipe d&apos;auxiliaires de vie qualifiées intervient avec bienveillance 
                et professionnalisme pour faciliter votre vie quotidienne.
              </p>
              <Link 
                href="/a-propos" 
                className="inline-block bg-[#fdc81e] text-[#0959a1] font-semibold px-8 py-3 rounded-md hover:bg-opacity-90 transition-all"
              >
                En savoir plus
              </Link>
            </div>
            <div className="bg-[#0959a1] bg-opacity-10 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Nos valeurs</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[#fdc81e] text-xl">✓</span>
                  <span>Respect et dignité de chaque personne</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#fdc81e] text-xl">✓</span>
                  <span>Écoute et adaptation aux besoins</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#fdc81e] text-xl">✓</span>
                  <span>Confidentialité et discrétion</span>
                </li>
              </ul>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0959a1]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Besoin d&apos;aide au quotidien ?
          </h2>
          <p className="text-white text-opacity-90 text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un devis personnalisé et gratuit
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#fdc81e] text-[#0959a1] font-semibold px-10 py-4 rounded-md text-lg hover:bg-opacity-90 transition-all"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  )
}