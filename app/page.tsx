"use client";

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaHandHoldingHeart, FaClock, FaUserCheck, FaShieldAlt, FaStar } from 'react-icons/fa'

export default function Home() {

  const features = [
    {
      icon: <FaHandHoldingHeart className="text-4xl text-[#0959a1]" />,
      title: "Bienveillance",
      description: "Une approche humaine et respectueuse de chaque enfant"
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

  const services = [
    {
      image: "/mum.jpeg",
      title: "Accompagnement à domicile",
      description: "Routines éducatives, organisation du temps, soutien au quotidien, stimulation cognitive."
    },
    {
      image: "/popo.jpeg",
      title: "Habiletés sociales & émotions",
      description: "Gestion des émotions, comportements, scénarios sociaux, interactions et communication."
    },
    {
      image: "/ladies.jpeg",
      title: "Hygiène & gestes du quotidien",
      description: "Apprentissage des routines d’hygiène (faire avec, respecter le rythme et l’intimité)."
    }
  ]

  const testimonials = [
    {
      name: "Marie Dupont",
      feedback: "Grâce à Harmonie & Autonomie, ma mère peut rester chez elle en toute sécurité. Le personnel est formidable !"
    },
    {
      name: "Jean Martin",
      feedback: "Service impeccable et très professionnel. Je recommande vivement."
    },
    {
      name: "Sophie Bernard",
      feedback: "Une équipe à l'écoute et très compétente. Ils ont vraiment amélioré la qualité de vie de mon père."
    }
  ]

  return (
    <div>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#0959a1] text-white text-center py-24 px-10"
      >

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold mx-auto"
        >
          Agences d&apos;aide à domicile pour personnes âgées
          ou en situation de handicap
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-[#fdc81e] text-[#0959a1] px-6 py-4 rounded-full text-lg font-semibold"
        >
          Demander un devis personnalisé
        </motion.button>

        {/* vague */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 120" className="w-full h-[120px]" preserveAspectRatio="none">
            <path
              d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
              fill="white"
            ></path>
          </svg>
        </div>

      </motion.section>


      {/* FEATURES */}
      <section className="py-16 bg-white px-10">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="lg:text-5xl md:text-4xl mb-4 text-center font-bold text-[#0959a1]"
        >
          Pourquoi nous choisir ?
        </motion.h2>

        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Des services de qualité avec une équipe dédiée à votre bien-être
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg shadow-sm hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#0959a1] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}

        </div>
      </section>


      {/* ABOUT */}
      <section className="py-12 bg-[#fef7f1] px-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0959a1]">À propos de nous</h2>

          <p className="text-gray-600">
            Fondée par Laetitia Lomami, professionnelle du secteur médico-social
            avec plus de dix ans d’expérience en coordination et accompagnement
            de publics vulnérables.
          </p>

          <p className="text-gray-600">
            Harmonie & Autonomie accompagne les enfants présentant des troubles
            du neurodéveloppement dans le développement de leur autonomie.
          </p>

          <Link
            href="/a-propos"
            className="inline-block bg-[#fdc81e] text-[#0959a1] font-semibold px-8 py-3 rounded-md"
          >
            En savoir plus
          </Link>

        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#0959a1] p-8 rounded-lg text-white"
        >

          <h3 className="text-2xl font-bold mb-4">Nos valeurs</h3>

          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-[#fdc81e]">✓</span>
              <span>Respect et dignité de chaque personne</span>
            </li>

            <li className="flex items-start space-x-3">
              <span className="text-[#fdc81e]">✓</span>
              <span>Écoute et adaptation aux besoins</span>
            </li>

            <li className="flex items-start space-x-3">
              <span className="text-[#fdc81e]">✓</span>
              <span>Confidentialité et discrétion</span>
            </li>
          </ul>

        </motion.div>

      </section>


      {/* SERVICES */}
      <section className="py-16 bg-white px-10">

        <h2 className="text-3xl md:text-4xl font-bold text-[#0959a1] text-center">
          Nos services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl"
            >

              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-60 object-cover rounded-t-md transition-transform duration-300 hover:scale-110"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0959a1] mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600">{service.description}</p>
              </div>

            </motion.div>
          ))}

        </div>
      </section>


      {/* CTA */}
      <section className="py-16 bg-[#0959a1] text-center px-10">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Besoin d&apos;aide au quotidien ?
        </motion.h2>

        <p className="text-white mt-4">
          Contactez-nous pour une consultation personnalisée
        </p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-[#fdc81e] text-[#0959a1] font-semibold px-10 py-4 rounded-md"
          >
            Prenez rendez-vous
          </Link>
        </motion.div>

      </section>


      {/* TESTIMONIALS */}
      <section className="py-16 bg-white px-10">

        <h2 className="text-3xl md:text-4xl font-bold text-[#0959a1] text-center">
          Témoignages
        </h2>

        <div className="grid md:grid-cols-3 space-x-8 mt-12">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className=" px-3 py-5 bg-[#fef7f1] rounded-lg shadow-md items-center space-x-4 space-y-4 hover:shadow-lg transition-all"
            >
              <div className="flex">
                <FaStar className="text-[#fdc81e]" />
                <FaStar className="text-[#fdc81e]" />
                <FaStar className="text-[#fdc81e]" />
                <FaStar className="text-[#fdc81e]" />
                <FaStar className="text-[#fdc81e]" />
              </div>

                <p className="text-gray-600">
                  &quot;{testimonial.feedback}&quot;
                </p>

                <h3 className="text-lg font-semibold text-[#0959a1]">
                  &quot;{testimonial.name}&quot;
                </h3>

            </motion.div>
          ))}

        </div>

      </section>

    </div>
  )
}