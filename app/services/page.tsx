import Link from 'next/link'
import { FaHandSparkles, FaUtensils, FaBroom, FaShoppingCart, FaCar, FaHeartbeat } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: <FaHandSparkles className="text-4xl" />,
      title: "Accompagnement à domicile",
      description: "Routines éducatives, organisation du temps, soutien au quotidien, stimulation cognitive.",
    },
    {
      icon: <FaUtensils className="text-4xl" />,
      title: "Habiletés sociales & émotions",
      description: "Gestion des émotions, comportements, scénarios sociaux, interactions et communication."
    },
    {
      icon: <FaBroom className="text-4xl" />,
      title: "Hygiène & gestes du quotidien",
      description: "Apprentissage des routines d’hygiène (faire avec, respecter le rythme et l’intimité)."
    },
    {
      icon: <FaShoppingCart className="text-4xl" />,
      title: " Guidance parentale",
      description: "Outils concrets, prévention des crises, soutien à l’organisation familiale.",
    },
    {
      icon: <FaCar className="text-4xl" />,
      title: "Lien école & partenaires",
      description: "Coordination possible avec l’école et les professionnels (ergothérapeute, orthophoniste…).",
    },
    {
      icon: <FaHeartbeat className="text-4xl" />,
      title: "Démarches & parcours",
      description: "Aide à la compréhension des démarches et orientations (ex. MDPH) — selon besoins.",
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0959a1] text-white py-16">
        <div className="container-custom text-center px-10">
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
                {/* <p className="text-[#fdc81e] font-semibold">{service.price}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Déroulement du service */}
      <section className="py-16 bg-white px-10">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">Comment ça marche ?</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Un processus simple et transparent pour vous accompagner pas à pas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 rounded-lg shadow-lg transition-all">
              <div className="text-[#0959a1] font-bold border border-[#0959a1] rounded-full mb-4 flex justify-center w-12 h-12 items-center mx-auto">1</div>
              <h3 className="text-xl font-semibold text-[#0959a1] mb-2">Évaluation initiale</h3>
              <p className="text-gray-600">Analyse du quotidien, des besoins, des priorités. Proposition personnalisée et objectifs concrets.</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg transition-all">
              <div className="text-[#0959a1] font-bold border border-[#0959a1] rounded-full mb-4 flex justify-center w-12 h-12 items-center mx-auto">2</div>
              <h3 className="text-xl font-semibold text-[#0959a1] mb-2">Mise en place</h3>
              <p className="text-gray-600">Interventions régulières, outils adaptés (supports visuels, séquençage, routines)..</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg transition-all">
              <div className="text-[#0959a1] font-bold border border-[#0959a1] rounded-full mb-4 flex justify-center w-12 h-12 items-center mx-auto">3</div>
              <h3 className="text-xl font-semibold text-[#0959a1] mb-2">Suivi & ajustements</h3>
              <p className="text-gray-600">Points réguliers avec la famille, coordination si nécessaire, adaptation continue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Informations complémentaires */}
      <section className="py-16 bg-white">
        <div className="container-custom px-10">
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