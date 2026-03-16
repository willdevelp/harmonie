"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HandHeart,
  Brain,
  Droplets,
  Handshake,
  School,
  FileCheck,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Home,
  Heart,
  Smile,
  Sparkles,
  Calendar,
  Phone,
  Mail,
  ChevronRight,
  Target,
  Star,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Accompagnement à domicile",
      description:
        "Routines éducatives, organisation du temps, soutien au quotidien, stimulation cognitive.",
      longDescription:
        "Nos accompagnements personnalisés aident l'enfant à structurer son quotidien, à développer son autonomie dans les gestes de la vie courante et à maintenir une stimulation cognitive adaptée.",
      features: [
        "Mise en place de routines éducatives",
        "Aide à l'organisation temporelle",
        "Stimulation cognitive personnalisée",
        "Soutien dans les activités quotidiennes",
      ],
      image: "/mum.jpeg",
      color: "bg-blue-50",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Habiletés sociales & émotions",
      description:
        "Gestion des émotions, comportements, scénarios sociaux, interactions et communication.",
      longDescription:
        "Développer les compétences sociales et émotionnelles est essentiel pour l'intégration et l'épanouissement de l'enfant dans son environnement.",
      features: [
        "Apprentissage de la gestion des émotions",
        "Jeux de rôles et scénarios sociaux",
        "Développement de la communication",
        "Adaptation des comportements en société",
      ],
      image: "/popo.jpeg",
      color: "bg-yellow-50",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Hygiène & gestes du quotidien",
      description:
        "Apprentissage des routines d'hygiène (faire avec, respecter le rythme et l'intimité).",
      longDescription:
        "Nous accompagnons l'enfant dans l'apprentissage des gestes d'hygiène en respectant son rythme, son intimité et en favorisant son autonomie progressive.",
      features: [
        "Apprentissage des routines d'hygiène",
        "Respect de l'intimité et du rythme",
        "Développement de l'autonomie",
        "Approche bienveillante et adaptée",
      ],
      image: "/children.jpeg",
      color: "bg-green-50",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Guidance parentale",
      description:
        "Outils concrets, prévention des crises, soutien à l'organisation familiale.",
      longDescription:
        "Nous soutenons les parents en leur fournissant des outils concrets et des stratégies adaptées pour faire face aux défis quotidiens.",
      features: [
        "Outils pratiques pour le quotidien",
        "Stratégies de prévention des crises",
        "Soutien à l'organisation familiale",
        "Écoute et conseils personnalisés",
      ],
      image: "/baby.jpeg",
      color: "bg-purple-50",
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "Lien école & partenaires",
      description:
        "Coordination possible avec l'école et les professionnels (ergothérapeute, orthophoniste…).",
      longDescription:
        "Nous assurons une coordination optimale entre tous les intervenants pour garantir une prise en charge cohérente et efficace.",
      features: [
        "Coordination avec l'équipe pédagogique",
        "Échanges avec les professionnels de santé",
        "Suivi personnalisé des objectifs",
        "Réunions de synthèse régulières",
      ],
      image: "/nose.jpeg",
      color: "bg-red-50",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Démarches & parcours",
      description:
        "Aide à la compréhension des démarches et orientations (ex. MDPH) — selon besoins.",
      longDescription:
        "Nous vous accompagnons dans vos démarches administratives et vous aidons à comprendre les différentes orientations possibles.",
      features: [
        "Aide aux dossiers MDPH",
        "Information sur les orientations",
        "Accompagnement dans les démarches",
        "Suivi personnalisé du parcours",
      ],
      image: "/listen.jpg",
      color: "bg-orange-50",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Évaluation initiale",
      description:
        "Analyse approfondie des besoins, des attentes et de l'environnement de vie.",
      icon: <Target className="w-8 h-8" />,
      details: [
        "Rencontre avec la famille",
        "Observation du quotidien",
        "Identification des priorités",
        "Proposition personnalisée",
      ],
    },
    {
      step: 2,
      title: "Mise en place",
      description:
        "Interventions régulières avec des outils adaptés et un suivi personnalisé.",
      icon: <Calendar className="w-8 h-8" />,
      details: [
        "Planning personnalisé",
        "Outils visuels adaptés",
        "Mise en place des routines",
        "Communication continue",
      ],
    },
    {
      step: 3,
      title: "Suivi & ajustements",
      description:
        "Points réguliers avec la famille et adaptation continue des interventions.",
      icon: <Star className="w-8 h-8" />,
      details: [
        "Bilans réguliers",
        "Ajustements personnalisés",
        "Coordination partenaires",
        "Évolution des objectifs",
      ],
    },
  ];

  const faq = [
    {
      question: "Comment se déroule la première rencontre ?",
      answer:
        "La première rencontre est gratuite et sans engagement. Nous échangeons avec vous et votre proche pour comprendre vos besoins, vos attentes et votre quotidien. C'est aussi l'occasion de nous connaître et de voir si notre approche vous correspond.",
    },
    {
      question: "Quels sont les tarifs et les modalités de paiement ?",
      answer:
        "Nos tarifs sont adaptés à chaque situation et varient selon les besoins et la fréquence des interventions. Nous acceptons les CESU et vous informons sur les aides financières disponibles (crédit d'impôt de 50%, aides de l'APA, MDPH...).",
    },
    {
      question: "Comment sont recrutés vos intervenants ?",
      answer:
        "Nos intervenants sont rigoureusement sélectionnés pour leurs compétences professionnelles et leurs qualités humaines. Ils bénéficient d'une formation continue et sont régulièrement évalués pour garantir la qualité de nos services.",
    },
    {
      question: "Proposez-vous des interventions d'urgence ?",
      answer:
        "Oui, nous disposons d'un service d'urgence disponible 7j/7 pour répondre aux situations imprévues. Contactez-nous par téléphone pour une intervention rapide.",
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
              Nos prestations
            </span>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Des services sur mesure
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Des accompagnements adaptés à chaque situation, pour favoriser
              l&apos;autonomie et le bien-être de vos proches à domicile.
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

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-4">
              Tous nos services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de prestations pour répondre à tous les besoins
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 bg-[#fdc81e] w-16 h-16 rounded-2xl flex items-center justify-center text-[#0959a1]">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
                    Service {index + 1}/{services.length}
                  </span>

                  <h2 className="text-3xl lg:text-4xl font-bold text-[#0959a1] mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-gray-600 mb-6">
                    {service.longDescription}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-[#fdc81e] w-6 h-6 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#0959a1] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
                  >
                    Demander un devis
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
              Comment ça marche ?
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-4">
              Un accompagnement en 3 étapes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un processus simple et transparent pour vous accompagner pas à pas
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#0959a1] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-[#fdc81e] rounded-full flex items-center justify-center text-[#0959a1]">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0959a1] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <ChevronRight className="w-4 h-4 text-[#fdc81e]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-[#fdc81e]" />
                  </div>
                )} */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
                Pourquoi nous choisir ?
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-6">
                L&apos;excellence à votre service
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Équipe qualifiée",
                    description:
                      "Des intervenants formés et régulièrement évalués",
                  },
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: "Disponibilité 7j/7",
                    description: "Un service d'urgence et des horaires adaptés",
                  },
                  {
                    icon: <Heart className="w-6 h-6" />,
                    title: "Approche personnalisée",
                    description:
                      "Des programmes sur mesure pour chaque situation",
                  },
                  {
                    icon: <Home className="w-6 h-6" />,
                    title: "Maintien à domicile",
                    description: "Favoriser l'autonomie dans un cadre familier",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-[#fdc81e]/20 rounded-xl flex items-center justify-center text-[#0959a1] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0959a1] text-lg">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
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
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hand.jpeg"
                  alt="Pourquoi nous choisir"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#0959a1] p-6 rounded-2xl shadow-xl">
                <Smile className="text-[#fdc81e] w-12 h-12" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
              Questions fréquentes
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-4">
              Vos questions, nos réponses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur nos services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-[#0959a1]">
                      {item.question}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-[#fdc81e] group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#0959a1] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fdc81e] rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Prêt à commencer ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une première évaluation gratuite et sans
              engagement
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#fdc81e] text-[#0959a1] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Demander un devis
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Nous écrire
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
