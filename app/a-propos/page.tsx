import { describe } from 'node:test'
import { FaUsers, FaAward, FaHandHoldingHeart, FaChartLine } from 'react-icons/fa'

export default function APropos() {
  const stats = [
    { icon: <FaUsers />, value: "500+", label: "Familles accompagnées" },
    { icon: <FaAward />, value: "10+", label: "Années d'expérience" },
    { icon: <FaHandHoldingHeart />, value: "50+", label: "Intervenants qualifiés" },
    { icon: <FaChartLine />, value: "98%", label: "Clients satisfaits" },
  ]

  const values = [
    {
      title: "Bienveillance et Respect",
      description: "Nous plaçons la bienveillance et le respect au cœur de notre approche, en valorisant la dignité et les besoins individuels de chaque personne accompagnée."
    },
    {
      title : "Individualisation de l’accompagnement",
      description: "Chaque enfant est unique. Nous adaptons nos interventions à ses besoins spécifiques, en tenant compte de son développement personnel et de son environnement."
    },
    {
      title: "Collaboration avec les familles",
      description: "Nous travaillons en étroite collaboration avec les familles pour garantir un accompagnement cohérent et respectueux de leurs besoins."
    },
    {
      title: "Continuité et cohérence",
      description: "Nous assurons une continuité dans l’accompagnement, en veillant à ce que les interventions soient cohérentes et adaptées à l’évolution de l’enfant."
    },
    {
      title: "Respect du cadre légal et éthique",
      description: "Nous respectons les normes légales et éthiques en vigueur, en garantissant la confidentialité et la sécurité des personnes accompagnées."
    },
    {
      title: "Confidentialité",
      description: "Nous assurons la confidentialité de toutes les informations relatives aux personnes accompagnées, conformément aux dispositions légales en vigueur."
    }
  ]

  const team = [
    {
      name: "Marie Dupont",
      role: "Directrice",
      description: "Infirmière de formation, 15 ans d'expérience dans le secteur"
    },
    {
      name: "Thomas Martin",
      role: "Coordinateur",
      description: "Expert en organisation des soins à domicile"
    },
    {
      name: "Sophie Bernard",
      role: "Responsable RH",
      description: "Recrute et forme nos intervenants avec exigence"
    }
  ]

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-[#0959a1] text-white py-16">
        <div className="container-custom text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">À propos de nous</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez l&apos;histoire et les valeurs d&apos;Aide & Bien-être
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl text-[#fdc81e] mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#0959a1]">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-16 bg-[#fef7f1] px-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className='space-y-4'>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-3xl">Notre Mission</h2>
              <p className="text-gray-600">
                Accompagner les enfants présentant des troubles du spectre de l’autisme (TSA), 
                des troubles du DYS et des handicaps moteurs, directement à domicile, afin de favoriser leur autonomie, 
                leur développement et leur inclusion, en étroite collaboration avec les familles et les professionnels.
              </p>
              <ul className='space-y-2'>
                <li className="">Favoriser le développement de l’autonomie des enfants accompagnés</li>
                <li className="">Soutenir les familles dans l’organisation du quotidien </li>
                <li className="">Contribuer au bien-être, à la sécurité et à l’épanouissement de l’enfant </li>
                <li className="">Assurer un accompagnement individualisé, cohérent et respectueux</li>
              </ul>
            </div>
            <div className="bg-[#0959a1] p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Notre histoire</h3>
              <p className="mb-4">
                Permettre à chacun de vivre chez soi dans les meilleures conditions, 
                en préservant son autonomie et sa dignité.
              </p>
              <p>
                Nous croyons que le maintien à domicile est essentiel au bien-être 
                et à l&apos;épanouissement des personnes âgées ou dépendantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-white">
        <div>
          <h2 className="lg:text-5xl md:text-4xl mb-4 text-center font-bold text-[#0959a1]">Nos Valeurs</h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Des principes fondamentaux qui guident notre action au quotidien
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 rounded">
            {values.map((value, index) => (
              <div key={index} className="bg-[#fef7f1] p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-[#0959a1] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="lg:text-5xl md:text-4xl mb-4 text-center font-bold text-[#0959a1]">Notre équipe</h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Des professionnels passionnés à votre service
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-10">
            {team.map((member, index) => (
              <div key={index} className="bg-[#fef7f1] p-6 rounded-lg text-center hover:shadow-lg transition-all">
                <div className="w-24 h-24 bg-[#0959a1] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-white">{member.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0959a1]">{member.name}</h3>
                <p className="text-[#fdc81e] font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}