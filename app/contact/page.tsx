"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  Sparkles,
  User,
  Calendar,
  MessageSquare,
  Home,
  Heart,
  Shield,
  Users,
  ChevronRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
    consentement: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Formulaire soumis:", formData);
    setIsSubmitted(true);
    setIsLoading(false);

    // Reset form
    setFormData({
      nom: "",
      email: "",
      telephone: "",
      sujet: "",
      message: "",
      consentement: false,
    });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "07 43 58 72 81",
      description: "Lun-Ven : 9h-19h | Sam : 9h-17h",
      action: "tel:0743587281",
      bg: "bg-blue-50",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "laetitia@harmonie-autonomie.fr",
      description: "Réponse sous 24h ouvrées",
      action: "mailto:laetitia@harmonie-autonomie.fr",
      bg: "bg-yellow-50",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      value: "123 Rue des Services",
      description: "68170 Rixheim",
      action: "https://maps.google.com/?q=68170+Rixheim",
      bg: "bg-green-50",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      value: "7j/7, 24h/24",
      description: "Service d'urgence disponible",
      action: null,
      bg: "bg-purple-50",
    },
  ];

  const urgences = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Urgence médicale",
      description: "En cas d'urgence médicale, contactez le 15",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Soutien psychologique",
      description: "Besoin de parler ? Nous sommes là 24h/24",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Intervention immédiate",
      description: "Une situation imprévue ? Contactez-nous",
    },
  ];

  const team = [
    {
      name: "Laetitia Lomami",
      role: "Fondatrice & Directrice",
      phone: "06 12 34 56 78",
      email: "laetitia@harmonie-autonomie.fr",
      disponibilite: "Lun-Ven 9h-18h",
    },
    {
      name: "Marie Dupont",
      role: "Coordinatrice",
      phone: "06 23 45 67 89",
      email: "marie@harmonie-autonomie.fr",
      disponibilite: "Lun-Sam 8h-20h",
    },
    {
      name: "Thomas Martin",
      role: "Responsable des interventions",
      phone: "06 34 56 78 90",
      email: "thomas@harmonie-autonomie.fr",
      disponibilite: "7j/7 24h/24",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-[#0959a1] py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fdc81e] rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Contactez-nous
            </span>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Prenons soin ensemble
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Une question ? Un projet ? Notre équipe est là pour vous écouter
              et vous accompagner dans vos démarches.
            </p>
          </motion.div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" className="w-full h-24 fill-white">
            <path d="M0,64 C240,96 480,32 720,32 C960,32 1200,96 1440,64 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`${info.bg} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="w-12 h-12 bg-[#0959a1] rounded-xl flex items-center justify-center text-white mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0959a1] mb-2">
                  {info.title}
                </h3>
                {info.action ? (
                  <a
                    href={info.action}
                    className="text-gray-800 font-semibold hover:text-[#0959a1] transition-colors block mb-1"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-800 font-semibold mb-1">
                    {info.value}
                  </p>
                )}
                <p className="text-sm text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM & MAP */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
                Écrivez-nous
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-[#0959a1] mb-4">
                Envoyez-nous un message
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans
                les plus brefs délais.
              </p>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-6 flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-700" />
                  <span>
                    Merci pour votre message ! Nous vous répondrons rapidement.
                  </span>
                </motion.div>
              )}

              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0959a1] focus:border-transparent transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0959a1] focus:border-transparent transition-all"
                      placeholder="jean@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0959a1] focus:border-transparent transition-all"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sujet"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Sujet *
                    </label>
                    <select
                      id="sujet"
                      name="sujet"
                      required
                      value={formData.sujet}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0959a1] focus:border-transparent transition-all"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="devis">Demande de devis</option>
                      <option value="information">
                        Demande d&apos;information
                      </option>
                      <option value="rendez-vous">Prise de rendez-vous</option>
                      <option value="urgence">Situation d&apos;urgence</option>
                      <option value="reclamation">Réclamation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0959a1] focus:border-transparent transition-all"
                    placeholder="Décrivez votre besoin..."
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consentement"
                      checked={formData.consentement}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-600">
                      J&apos;accepte que mes données soient traitées pour
                      répondre à ma demande.
                      <Link
                        href="/politique-de-confidentialite"
                        className="text-[#0959a1] hover:underline ml-1"
                      >
                        En savoir plus
                      </Link>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#0959a1] text-white font-semibold py-4 rounded-xl hover:bg-opacity-90 transition-all text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  * Champs obligatoires. Vos données sont confidentielles et ne
                  seront jamais partagées.
                </p>
              </form>
            </motion.div>

            {/* Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-[#0959a1] mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-[#fdc81e]" />
                  Notre localisation
                </h3>

                <div className="relative h-[300px] rounded-xl overflow-hidden mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.123456789!2d7.123456!3d47.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x123456789!2sRixheim!5e0!3m2!1sfr!2sfr!4v123456789"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0"
                  ></iframe>
                </div>

                <div className="space-y-3">
                  <p className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-[#fdc81e]" />
                    123 Rue des Services, 68170 Rixheim
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5 text-[#fdc81e]" />
                    Accueil sur rendez-vous du lundi au vendredi
                  </p>
                </div>
              </div>

              {/* Urgences */}
              <div className="bg-[#0959a1] p-8 rounded-2xl shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-[#fdc81e]" />
                  Besoin d&apos;aide en urgence ?
                </h3>

                <div className="space-y-4">
                  {urgences.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-[#fdc81e] flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-white/80">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <a
                    href="tel:0743587281"
                    className="flex items-center justify-between bg-[#fdc81e] text-[#0959a1] px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Appelez-nous
                    </span>
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEAM CONTACTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
              Contact direct
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-4">
              Une équipe à votre écoute
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vous pouvez également contacter directement nos responsables
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-[#0959a1] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {member.name[0]}
                </div>

                <h3 className="text-xl font-bold text-[#0959a1] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#fdc81e] font-semibold mb-4">
                  {member.role}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4 text-[#fdc81e]" />
                    <a
                      href={`tel:${member.phone}`}
                      className="hover:text-[#0959a1]"
                    >
                      {member.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4 text-[#fdc81e]" />
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-[#0959a1] break-all"
                    >
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-[#fdc81e]" />
                    <span className="text-sm">{member.disponibilite}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HORAIRES DÉTAILLÉS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#0959a1] mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-[#fdc81e]" />
                  Horaires d&apos;ouverture
                </h3>

                <div className="space-y-4">
                  {[
                    { day: "Lundi - Vendredi", hours: "9h00 - 19h00" },
                    { day: "Samedi", hours: "9h00 - 17h00" },
                    { day: "Dimanche", hours: "Fermé (urgences uniquement)" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center pb-2 border-b border-gray-100"
                    >
                      <span className="font-medium text-gray-700">
                        {item.day}
                      </span>
                      <span className="text-[#0959a1] font-semibold">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#0959a1] p-8 rounded-2xl shadow-lg text-white"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-[#fdc81e]" />
                  Service d&apos;urgence
                </h3>

                <p className="mb-6 text-white/90">
                  Notre service d&apos;urgence est disponible 24h/24 et 7j/7
                  pour toute situation nécessitant une intervention rapide.
                </p>

                <a
                  href="tel:0743587281"
                  className="inline-flex items-center gap-2 bg-[#fdc81e] text-[#0959a1] px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Urgences : 07 43 58 72 81
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
              Prêt à commencer ?
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-4">
              Prenons rendez-vous
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              La première rencontre est gratuite et sans engagement. Venez nous
              rencontrer pour discuter de vos besoins.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="tel:0743587281"
                className="inline-flex items-center gap-2 bg-[#0959a1] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </Link>

              <Link
                href="mailto:laetitia@harmonie-autonomie.fr"
                className="inline-flex items-center gap-2 bg-[#fdc81e] text-[#0959a1] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Mail className="w-5 h-5" />
                Envoyer un email
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
