import { FaUsers, FaAward, FaHandHoldingHeart, FaChartLine } from 'react-icons/fa'

export default function APropos() {
  const stats = [
    { icon: <FaUsers />, value: "500+", label: "Familles accompagnées" },
    { icon: <FaAward />, value: "10+", label: "Années d'expérience" },
    { icon: <FaHandHoldingHeart />, value: "50+", label: "Intervenants qualifiés" },
    { icon: <FaChartLine />, value: "98%", label: "Clients satisfaits" },
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
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-[#0959a1] text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de nous</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez l&apos;histoire et les valeurs d&apos;Aide & Bien-être
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
      <section className="py-16 bg-[#fef7f1]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Notre histoire</h2>
              <p className="text-gray-600 mb-4">
                Fondée en 2014, Aide & Bien-être est née de la volonté de proposer 
                des services à la personne de qualité, accessibles à tous.
              </p>
              <p className="text-gray-600 mb-4">
                Notre fondatrice, Marie Dupont, a commencé avec une petite équipe 
                de 3 auxiliaires de vie. Aujourd&apos;hui, nous sommes fiers d&apos;employer 
                plus de 50 intervenants qualifiés.
              </p>
              <p className="text-gray-600">
                Notre développement s&apos;est toujours fait dans le respect de nos 
                valeurs : bienveillance, professionnalisme et proximité.
              </p>
            </div>
            <div className="bg-[#0959a1] p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Notre mission</h3>
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

      {/* Équipe */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Notre équipe</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Des professionnels passionnés à votre service
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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