"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Heart,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Target,
  Shield,
  Lock,
  Briefcase,
  Calendar,
  Mail,
  Phone,
  Star,
  HandHeart,
  Smile,
  Sparkles,
  GraduationCap,
  Clock,
  ChevronRight,
} from "lucide-react";

export default function APropos() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "500+",
      label: "Familles accompagnées",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "10+",
      label: "Années d'expérience",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      value: "50+",
      label: "Intervenants qualifiés",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "98%",
      label: "Clients satisfaits",
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Bienveillance et Respect",
      description:
        "Nous plaçons la bienveillance et le respect au cœur de notre approche, en valorisant la dignité et les besoins individuels de chaque personne accompagnée.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Individualisation de l'accompagnement",
      description:
        "Chaque enfant est unique. Nous adaptons nos interventions à ses besoins spécifiques, en tenant compte de son développement personnel et de son environnement.",
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Collaboration avec les familles",
      description:
        "Nous travaillons en étroite collaboration avec les familles pour garantir un accompagnement cohérent et respectueux de leurs besoins.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Continuité et cohérence",
      description:
        "Nous assurons une continuité dans l'accompagnement, en veillant à ce que les interventions soient cohérentes et adaptées à l'évolution de l'enfant.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Respect du cadre légal et éthique",
      description:
        "Nous respectons les normes légales et éthiques en vigueur, en garantissant la confidentialité et la sécurité des personnes accompagnées.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Confidentialité",
      description:
        "Nous assurons la confidentialité de toutes les informations relatives aux personnes accompagnées, conformément aux dispositions légales en vigueur.",
    },
  ];

  const team = [
    {
      name: "Marie Dupont",
      role: "Directrice",
      description:
        "Infirmière de formation, 15 ans d'expérience dans le secteur médico-social",
      expertise: ["Management", "Soins infirmiers", "Coordination"],
      email: "marie@harmonie-autonomie.fr",
      phone: "01 23 45 67 89",
    },
    {
      name: "Thomas Martin",
      role: "Coordinateur",
      description:
        "Expert en organisation des soins à domicile et en gestion d'équipe",
      expertise: ["Organisation", "Planning", "Relation client"],
      email: "thomas@harmonie-autonomie.fr",
      phone: "01 23 45 67 90",
    },
    {
      name: "Sophie Bernard",
      role: "Responsable RH",
      description:
        "Recrute et forme nos intervenants avec exigence et bienveillance",
      expertise: ["Recrutement", "Formation", "Qualité"],
      email: "sophie@harmonie-autonomie.fr",
      phone: "01 23 45 67 91",
    },
    {
      name: "Dr. Laurent Petit",
      role: "Conseiller médical",
      description: "Médecin coordinateur, garant de la qualité des soins",
      expertise: ["Médecine gériatrique", "Neurologie", "Évaluation"],
      email: "laurent@harmonie-autonomie.fr",
      phone: "01 23 45 67 92",
    },
  ];

  const timeline = [
    {
      year: "2016",
      title: "Fondation d'Harmonie & Autonomie",
      description:
        "Création de l'agence par Laetitia Lomami, forte de son expérience dans le secteur médico-social.",
    },
    {
      year: "2018",
      title: "Développement des services",
      description:
        "Lancement des programmes spécialisés pour les enfants avec TSA et troubles du neurodéveloppement.",
    },
    {
      year: "2020",
      title: "Certification Qualité",
      description:
        "Obtention de la certification Qualité et agrément service à la personne.",
    },
    {
      year: "2022",
      title: "Équipe renforcée",
      description:
        "Passage à 50 intervenants qualifiés pour répondre à la demande croissante.",
    },
    {
      year: "2024",
      title: "Innovation et suivi",
      description:
        "Mise en place d'outils numériques pour le suivi personnalisé des familles.",
    },
    {
      year: "2026",
      title: "Aujourd'hui",
      description:
        "Plus de 500 familles accompagnées et une équipe dédiée à votre bien-être.",
    },
  ];

  const engagements = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Qualité des soins",
      description: "Intervenants qualifiés et formés en continu",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Disponibilité 7j/7",
      description: "Une équipe joignable à tout moment",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Formation continue",
      description: "Nos intervenants se forment régulièrement",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Équipe stable",
      description: "Des professionnels investis sur la durée",
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
              Notre histoire, nos valeurs
            </span>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              À propos de nous
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Découvrez l&apos;histoire et les valeurs d&apos;Harmonie &
              Autonomie, une équipe passionnée au service des familles depuis
              plus de 10 ans.
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

      {/* STATS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-[#fdc81e] mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-[#0959a1] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
                Notre mission
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-6">
                Accompagner, soutenir,
                <br />
                épanouir
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Accompagner les enfants présentant des troubles du spectre de
                l&apos;autisme (TSA), des troubles DYS et des handicaps moteurs,
                directement à domicile, afin de favoriser leur autonomie, leur
                développement et leur inclusion.
              </p>
              <div className="space-y-4">
                {[
                  "Favoriser le développement de l'autonomie des enfants accompagnés",
                  "Soutenir les familles dans l'organisation du quotidien",
                  "Contribuer au bien-être, à la sécurité et à l'épanouissement de l'enfant",
                  "Assurer un accompagnement individualisé, cohérent et respectueux",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-[#fdc81e] w-6 h-6 flex-shrink-0 mt-1" />
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
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hand.jpeg"
                  alt="Accompagnement personnalisé"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#fdc81e] rounded-full flex items-center justify-center">
                    <Heart className="text-[#0959a1] w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0959a1]">
                      Laetitia Lomami
                    </div>
                    <div className="text-gray-600">Fondatrice</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
              Notre histoire
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-4">
              Un parcours dédié aux familles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De la création à aujourd&apos;hui, une aventure humaine au service
              des autres
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#fdc81e]/30 hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  } items-center gap-8`}
                >
                  <div className="lg:w-1/2">
                    <div
                      className={`bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all ${
                        index % 2 === 0 ? "lg:text-right" : ""
                      }`}
                    >
                      <div className="text-[#fdc81e] font-bold text-2xl mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold text-[#0959a1] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="w-8 h-8 bg-[#fdc81e] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
              Nos valeurs
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-4">
              Des principes qui nous guident
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des valeurs fortes qui façonnent notre approche au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#0959a1] rounded-2xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0959a1] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
                Nos engagements
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-6">
                Une promesse de qualité
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nous nous engageons à offrir un service d&apos;excellence,
                respectueux de chaque personne et de ses proches.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {engagements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 bg-[#fdc81e]/20 rounded-lg flex items-center justify-center text-[#0959a1] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0959a1]">{item.title}</h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
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
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/ladies.jpeg"
                  alt="Notre équipe"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -top-6 -right-6 bg-[#fdc81e] p-6 rounded-2xl shadow-xl">
                <Award className="text-[#0959a1] w-12 h-12" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
              Notre équipe
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-4">
              Des professionnels passionnés
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une équipe pluridisciplinaire dédiée à votre bien-être
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="relative h-64 bg-gradient-to-br from-[#0959a1] to-[#063d6e]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-20">
                      {member.name[0]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0959a1] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#fdc81e] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {member.expertise.map((exp, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mr-2"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4 text-[#fdc81e]" />
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-[#0959a1]"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4 text-[#fdc81e]" />
                      <a
                        href={`tel:${member.phone}`}
                        className="hover:text-[#0959a1]"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0959a1] text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Rejoindre notre équipe
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
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
              Prêt à nous confier vos proches ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une première rencontre et découvrez comment
              nous pouvons vous accompagner
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
                  <Mail className="w-5 h-5" />
                  Nous contacter
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all"
                >
                  <Briefcase className="w-5 h-5" />
                  Découvrir nos services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
