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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  interface FormData {
    nom: string
    email: string
    telephone: string
    sujet: string
    message: string
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
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
      content: "0743587281",
      description: "Lun-Ven : 9h-17h"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      content: "laetitia@harmonie-autonomie.fr",
      description: "Réponse sous 24h"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Adresse",
      content: "Rixheim",
      description: "68170"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Horaires",
      content: "7j/7, 12h/24",
      description: "Service d'urgence disponible"
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0959a1] text-white py-16">
        <div className="container-custom text-center px-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Une question ? Un projet ? Notre équipe est là pour vous répondre
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#fef7f1] px-10">
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
      <section className="py-16 bg-white px-10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">Envoyez-nous un message</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
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
                    <option value="consultation">Demande de consultation</option>
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
                  rows={6}
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
        <div>

        </div>
      </section>
    </div>
  )
}