import Link from 'next/link'
import { FaHandSparkles, FaUtensils, FaBroom, FaShoppingCart, FaCar, FaHeartbeat } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: <FaHandSparkles className="text-4xl" />,
      title: "Aide à la personne",
      description: "Toilette, habillage, déplacement, aide aux gestes quotidiens",
      price: "À partir de 22€/h"
    },
    {
      icon: <FaUtensils className="text-4xl" />,
      title: "Préparation des repas",
      description: "Repas équilibrés adaptés à vos besoins et régimes alimentaires",
      price: "À partir de 20€/h"
    },
    {
      icon: <FaBroom className="text-4xl" />,
      title: "Entretien du logement",
      description: "Ménage, repassage, rangement pour un intérieur propre et sain",
      price: "À partir de 18€/h"
    },
    {
      icon: <FaShoppingCart className="text-4xl" />,
      title: "Courses et accompagnement",
      description: "Accompagnement aux courses ou courses livrées à domicile",
      price: "À partir de 18€/h"
    },
    {
      icon: <FaCar className="text-4xl" />,
      title: "Transport et sorties",
      description: "Accompagnement aux rendez-vous, promenades, activités",
      price: "À partir de 22€/h"
    },
    {
      icon: <FaHeartbeat className="text-4xl" />,
      title: "Garde de nuit",
      description: "Présence rassurante et assistance pendant la nuit",
      price: "Sur devis"
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0959a1] text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Des prestations adaptées à vos besoins pour un accompagnement sur mesure
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#fef7f1] px-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="text-[#0959a1] mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#0959a1] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-[#fdc81e] font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations complémentaires */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Services sur mesure</h2>
            <p className="text-gray-600 mb-8">
              Chaque personne est unique. Nous adaptons nos interventions à vos besoins spécifiques 
              et à votre rythme de vie. Nos intervenants sont formés pour répondre à toutes les situations.
            </p>
            
            <div className="bg-[#fef7f1] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[#0959a1] mb-4">Avantages fiscaux</h3>
              <p className="text-gray-600 mb-4">
                Bénéficiez d&apos;un crédit d&apos;impôt de 50% sur le montant de vos prestations 
                (dans la limite légale).
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#0959a1] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all"
              >
                Demander un devis personnalisé
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}