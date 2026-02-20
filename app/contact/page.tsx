'use client'

import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici vous ajouteriez la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Téléphone",
      content: "01 23 45 67 89",
      description: "Lun-Ven : 9h-18h"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      content: "contact@aide-bienetre.fr",
      description: "Réponse sous 24h"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Adresse",
      content: "123 Rue des Services",
      description: "75001 Paris"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Horaires",
      content: "7j/7, 24h/24",
      description: "Service d'urgence disponible"
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0959a1] text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Une question ? Un projet ? Notre équipe est là pour vous répondre
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#fef7f1]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center shadow-md">
                <div className="text-[#0959a1] mb-3 flex justify-center">{info.icon}</div>
                <h3 className="font-semibold text-gray-700">{info.title}</h3>
                <p className="text-[#0959a1] font-bold">{info.content}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Envoyez-nous un message</h2>
            <p className="section-subtitle text-center">
              Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
            </p>

            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Merci pour votre message ! Nous vous répondrons rapidement.
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-[#fef7f1] p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nom" className="block text-gray-700 font-medium mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0959a1]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0959a1]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="telephone" className="block text-gray-700 font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0959a1]"
                  />
                </div>
                <div>
                  <label htmlFor="sujet" className="block text-gray-700 font-medium mb-2">
                    Sujet *
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    required
                    value={formData.sujet}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0959a1]"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="information">Demande d&apos;information</option>
                    <option value="rendez-vous">Prise de rendez-vous</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0959a1]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0959a1] text-white font-semibold py-3 rounded-md hover:bg-opacity-90 transition-all text-lg"
              >
                Envoyer le message
              </button>

              <p className="text-sm text-gray-500 mt-4 text-center">
                * Champs obligatoires. Vos données sont confidentielles.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615674331!3d48.85837360866168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647852345678!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
        //   allowFullScreen=""
          loading="lazy"
          className="grayscale opacity-70"
        ></iframe>
      </section>
    </div>
  )
}