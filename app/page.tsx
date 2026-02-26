import Hero from '@/components/Hero'
// import ServicesSection from '@/components/ServicesSection'
import  Link from 'next/link'
import { FaHandHoldingHeart, FaClock, FaUserCheck, FaShieldAlt } from 'react-icons/fa'

export default function Home() {
  const features = [
    {
      icon: <FaHandHoldingHeart className="text-4xl text-[#fdc81e]" />,
      title: "Bienveillance",
      description: "Une approche humaine et respectueuse de chaque personne"
    },
    {
      icon: <FaClock className="text-4xl text-[#fdc81e]" />,
      title: "Disponibilité",
      description: "Service 7j/7 avec des horaires adaptés à vos besoins"
    },
    {
      icon: <FaUserCheck className="text-4xl text-[#fdc81e]" />,
      title: "Professionnalisme",
      description: "Intervenants qualifiés et formés régulièrement"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#fdc81e]" />,
      title: "Sécurité",
      description: "Personnel agréé et assuré pour votre tranquillité"
    }
  ]

  const testimonials = [
    {
      name: "Marie Dupont",
      feedback: "Grâce à Aide & Bien-être, ma mère peut rester chez elle en toute sécurité. Le personnel est formidable !"
    },
    {
      name: "Jean Martin",
      feedback: "Service impeccable et très professionnel. Je recommande vivement pour tous ceux qui ont besoin d'aide à domicile."
    },
    {
      name: "Sophie Bernard",
      feedback: "Une équipe à l'écoute et très compétente. Ils ont vraiment amélioré la qualité de vie de mon père."
    }
  ]
  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-white px-10">
        <div className="container-custom">
          <h2 className="lg:text-5xl md:text-4xl mb-4 text-center font-bold text-[#0959a1]">Pourquoi nous choisir ?</h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
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
      <section className="py-12 bg-[#fef7f1] px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className='space-y-5'>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-3xl">À propos de nous</h2>
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
      <section className="py-16 bg-[#fdc81e] px-10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0959a1] mb-4">
            Besoin d&apos;aide au quotidien ?
          </h2>
          <p className="text-[#0959a1] text-opacity-90 text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un devis personnalisé et gratuit
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0959a1] text-white font-semibold px-10 py-4 rounded-md text-lg hover:bg-opacity-90 transition-all"
          >
            Demander un devis
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white px-10">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0959a1] mb-4 text-center">Témoignages</h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Ce que nos clients disent de nous
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#fef7f1] p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4 h-20">&quot;{testimonial.feedback}&quot;</p>
                <h3 className="text-lg font-semibold text-[#0959a1]">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}