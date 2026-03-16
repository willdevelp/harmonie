"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ChevronRight,
  FileCheck,
  UserCheck,
  Database,
  Cookie,
  Mail,
  Phone,
  Clock,
  Scale,
  Gavel,
  HardDrive,
  Users,
  Heart,
} from "lucide-react";

export default function PolitiqueDeConfidentialite() {
  const sections = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Notre engagement",
      content:
        "Chez Harmonie & Autonomie, la protection de vos données personnelles est une priorité. Nous nous engageons à traiter vos informations avec la plus grande confidentialité et dans le respect absolu du Règlement Général sur la Protection des Données (RGPD) et de la loi Informatique et Libertés.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Données collectées",
      content:
        "Nous collectons uniquement les informations nécessaires à la fourniture de nos services : nom, prénom, coordonnées (email, téléphone), adresse, et informations relatives à la santé dans le cadre strict de notre accompagnement. Ces données sont recueillies avec votre consentement explicite.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Utilisation des données",
      content:
        "Vos données sont utilisées pour : la gestion des demandes de devis, le suivi des accompagnements, la facturation, et l'amélioration de nos services. Elles ne sont jamais utilisées à des fins commerciales sans votre accord préalable.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Sécurité",
      content:
        "Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données. L'accès à vos informations est strictement limité aux personnes habilitées dans le cadre de leur mission.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partage des données",
      content:
        "Vos données ne sont pas vendues ni louées à des tiers. Elles peuvent être partagées avec nos intervenants dans le strict cadre de l'accompagnement, et avec les autorités compétentes si la loi l'exige.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Durée de conservation",
      content:
        "Nous conservons vos données pendant la durée nécessaire à la fourniture de nos services, puis pendant les délais légaux de conservation (5 ans pour les données contractuelles, 10 ans pour les données comptables).",
    },
  ];

  const droits = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Droit d'accès",
      description:
        "Vous pouvez demander à consulter toutes les données que nous détenons vous concernant.",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Droit de rectification",
      description:
        "Vous pouvez demander la modification de vos données si elles sont inexactes.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Droit à l'effacement",
      description:
        "Vous pouvez demander la suppression de vos données, sous réserve des obligations légales.",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Droit d'opposition",
      description:
        "Vous pouvez vous opposer au traitement de vos données pour des motifs légitimes.",
    },
  ];

  const cookies = [
    {
      title: "Cookies essentiels",
      description:
        "Nécessaires au fonctionnement du site, ils ne peuvent être désactivés.",
      duration: "Session",
    },
    {
      title: "Cookies analytiques",
      description:
        "Nous aident à comprendre comment vous utilisez le site pour l'améliorer.",
      duration: "13 mois",
    },
    {
      title: "Cookies de préférences",
      description:
        "Permettent de mémoriser vos choix pour personnaliser votre expérience.",
      duration: "6 mois",
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
              Protection des données
            </span>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Politique de Confidentialité
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Votre confiance est notre priorité. Découvrez comment nous
              protégeons et traitons vos données personnelles dans le respect de
              la réglementation.
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

      {/* INTRODUCTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#fdc81e]/20 rounded-3xl mb-6">
              <Shield className="w-10 h-10 text-[#0959a1]" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-[#0959a1] mb-6">
              Une protection renforcée de vos données
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Dernière mise à jour :{" "}
              <span className="font-semibold text-[#0959a1]">11 mars 2026</span>
            </p>

            <div className="h-1 w-20 bg-[#fdc81e] mx-auto mt-8"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTIONS GRID */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-[#0959a1] rounded-2xl flex items-center justify-center text-white mb-6">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0959a1] mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VOS DROITS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
              Vos droits
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-4">
              Vous avez le contrôle
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En tant qu&apos;utilisateur, vous disposez de droits sur vos
              données personnelles
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {droits.map((droit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-[#fdc81e]/20 rounded-xl flex items-center justify-center text-[#0959a1] flex-shrink-0">
                    {droit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0959a1] text-lg mb-1">
                      {droit.title}
                    </h3>
                    <p className="text-gray-600">{droit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0959a1] p-8 rounded-3xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6 text-[#fdc81e]" />
                Comment exercer vos droits ?
              </h3>

              <p className="text-white/90 mb-6">
                Pour exercer vos droits ou pour toute question concernant vos
                données personnelles, vous pouvez nous contacter :
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#fdc81e] mt-1" />
                  <div>
                    <div className="font-semibold">Par email</div>
                    <a
                      href="mailto:rgpd@harmonie-autonomie.fr"
                      className="text-white/80 hover:text-white"
                    >
                      contact@harmonie-autonomie.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#fdc81e] mt-1" />
                  <div>
                    <div className="font-semibold">Par téléphone</div>
                    <a
                      href="tel:0743587281"
                      className="text-white/80 hover:text-white"
                    >
                      07 43 58 72 81
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#fdc81e] mt-1" />
                  <div>
                    <div className="font-semibold">Par courrier</div>
                    <p className="text-white/80">
                      Harmonie & Autonomie
                      <br />
                      123 Rue des Services
                      <br />
                      68170 Rixheim
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-white/70">
                Nous nous engageons à vous répondre dans un délai maximum
                d&apos;un mois.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COOKIES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
              Gestion des cookies
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-4">
              Notre politique cookies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pour améliorer votre expérience, nous utilisons différents types
              de cookies
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Cookie className="w-8 h-8 text-[#fdc81e]" />
                  <h3 className="text-2xl font-bold text-[#0959a1]">
                    Que sont les cookies ?
                  </h3>
                </div>
                <p className="text-gray-600">
                  Les cookies sont de petits fichiers texte déposés sur votre
                  appareil lors de votre visite sur notre site. Ils nous
                  permettent d&apos;améliorer votre expérience de navigation et
                  de comprendre comment vous utilisez notre site.
                </p>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  {cookies.map((cookie, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    >
                      <div>
                        <h4 className="font-bold text-[#0959a1]">
                          {cookie.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {cookie.description}
                        </p>
                      </div>
                      <span className="text-sm bg-[#fdc81e] text-[#0959a1] px-3 py-1 rounded-full font-semibold">
                        {cookie.duration}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-[#0959a1]">
                      Bon à savoir :
                    </span>{" "}
                    Vous pouvez à tout moment paramétrer vos préférences sur les
                    cookies via les paramètres de votre navigateur ou via notre
                    bandeau cookies lors de votre prochaine visite.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SÉCURITÉ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
                Sécurité renforcée
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-6">
                Vos données en sécurité
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                Nous mettons en œuvre toutes les mesures techniques et
                organisationnelles nécessaires pour garantir la sécurité de vos
                données personnelles.
              </p>

              <div className="space-y-4">
                {[
                  "Cryptage des données sensibles",
                  "Accès restreint et authentifié",
                  "Sauvegardes régulières",
                  "Surveillance continue",
                  "Personnel formé à la confidentialité",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-[#fdc81e] w-6 h-6" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0959a1] to-[#063d6e]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lock className="text-white/20 w-32 h-32" />
                  </div>
                </div>
              </div>

              {/* Badges de sécurité */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <Shield className="w-8 h-8 text-[#0959a1]" />
                <div>
                  <div className="font-bold text-[#0959a1]">RGPD</div>
                  <div className="text-sm text-gray-600">Conforme</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-[#fdc81e] p-4 rounded-2xl shadow-xl">
                <Gavel className="w-8 h-8 text-[#0959a1]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INFORMATIONS LÉGALES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#0959a1] mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#fdc81e]" />
              Informations légales
            </h3>

            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold text-[#0959a1]">
                  Raison sociale :
                </span>{" "}
                Harmonie & Autonomie
              </p>
              <p>
                <span className="font-semibold text-[#0959a1]">
                  Forme juridique :
                </span>{" "}
                SAS
              </p>
              <p>
                <span className="font-semibold text-[#0959a1]">
                  Capital social :
                </span>{" "}
                10 000 €
              </p>
              <p>
                <span className="font-semibold text-[#0959a1]">RCS :</span> 123
                456 789 RCS Mulhouse
              </p>
              <p>
                <span className="font-semibold text-[#0959a1]">
                  N° TVA intracommunautaire :
                </span>{" "}
                FR 12 345678901
              </p>
              <p>
                <span className="font-semibold text-[#0959a1]">SIRET :</span>{" "}
                10020568100016
              </p>
              <p>
                <span className="font-semibold text-[#0959a1]">Code APE :</span>{" "}
                8810A (Aide à domicile)
              </p>
              <p>
                <span className="font-semibold text-[#0959a1]">
                  Responsable de publication :
                </span>{" "}
                Laetitia Lomami
              </p>
              <p>
                <span className="font-semibold text-[#0959a1]">
                  Hébergeur :
                </span>{" "}
                Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT DPO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0959a1] to-[#063d6e] rounded-3xl p-12 text-white text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fdc81e] rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <Heart className="w-16 h-16 text-[#fdc81e] mx-auto mb-6" />

              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Une question sur vos données ?
              </h2>

              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Notre Délégué à la Protection des Données est à votre
                disposition pour répondre à toutes vos questions.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="mailto:dpo@harmonie-autonomie.fr"
                  className="inline-flex items-center gap-2 bg-[#fdc81e] text-[#0959a1] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Mail className="w-5 h-5" />
                  dpo@harmonie-autonomie.fr
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Nous contacter
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
