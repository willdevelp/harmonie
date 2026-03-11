"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Clock,
  UserCheck,
  Shield,
  Star,
  ArrowRight,
  Hand,
  Smile,
  User,
  Phone,
  Quote,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  Calendar,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Bienveillance",
      description: "Une approche humaine et respectueuse de chaque enfant",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Disponibilité",
      description: "Service 7j/7 avec des horaires adaptés à vos besoins",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Professionnalisme",
      description: "Intervenants qualifiés et formés régulièrement",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité",
      description: "Personnel agréé et assuré pour votre tranquillité",
    },
  ];

  const services = [
    {
      image: "/mum.jpeg",
      title: "Accompagnement à domicile",
      description:
        "Routines éducatives, organisation du temps, soutien au quotidien, stimulation cognitive.",
      icon: <Hand className="w-6 h-6" />,
    },
    {
      image: "/popo.jpeg",
      title: "Habiletés sociales & émotions",
      description:
        "Gestion des émotions, comportements, scénarios sociaux, interactions et communication.",
      icon: <Smile className="w-6 h-6" />,
    },
    {
      image: "/ladies.jpeg",
      title: "Hygiène & gestes du quotidien",
      description:
        "Apprentissage des routines d'hygiène (faire avec, respecter le rythme et l'intimité).",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      name: "Marie Dupont",
      role: "Fille de Mme Dupont, 82 ans",
      feedback:
        "Grâce à Harmonie & Autonomie, ma mère peut rester chez elle en toute sécurité. Le personnel est formidable et toujours à l'écoute.",
      rating: 5,
      image: "/boy.jpeg",
    },
    {
      name: "Jean Martin",
      role: "Fils de M. Martin, 78 ans",
      feedback:
        "Service impeccable et très professionnel. Les intervenants sont ponctuels, compétents et d'une grande gentillesse. Je recommande vivement.",
      rating: 5,
      image: "/popo.jpeg",
    },
    {
      name: "Sophie Bernard",
      role: "Fille de Mme Bernard, 75 ans",
      feedback:
        "Une équipe à l'écoute et très compétente. Ils ont vraiment amélioré la qualité de vie de mon père. Un grand merci à toute l'équipe.",
      rating: 5,
      image: "/ladies.jpeg",
    },
  ];

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
      icon: <User className="w-8 h-8" />,
      value: "50+",
      label: "Intervenants qualifiés",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "98%",
      label: "Clients satisfaits",
    },
  ];

  const articles = [
    {
      title: "Comment préparer l'arrivée d'un aidant à domicile",
      excerpt:
        "Découvrez nos conseils pour une transition en douceur et une collaboration réussie avec votre aidant.",
      date: "12 mars 2026",
      readTime: "5 min",
    },
    {
      title: "Les bienfaits de la stimulation cognitive pour les seniors",
      excerpt:
        "Des exercices simples pour maintenir les capacités cognitives et favoriser le bien-être à domicile.",
      date: "8 mars 2026",
      readTime: "4 min",
    },
    {
      title: "Accompagner un enfant avec TSA : conseils aux parents",
      excerpt:
        "Des ressources et des stratégies pour soutenir le développement de votre enfant au quotidien.",
      date: "3 mars 2026",
      readTime: "7 min",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0959a1]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fdc81e] rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Bienvenue chez Harmonie & Autonomie
              </span>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                L&apos;aide à domicile qui <br />
                <span className="text-[#fdc81e]">prend soin de vous</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-lg">
                Services professionnels pour personnes âgées et en situation de
                handicap. Une équipe dédiée à votre bien-être 7j/7.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#fdc81e] text-[#0959a1] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Demander un devis
                    <ArrowRight className="w-5 h-5" />
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
                    Nos services
                  </Link>
                </motion.div>
              </div>

              {/* Stats Mini */}
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-white/70">Familles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-white/70">Années d&apos;exp</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-white/70">Intervenants</div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px]">
                <Image
                  src="/hand.jpeg"
                  alt="Aide à domicile"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                />
                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#fdc81e] rounded-full flex items-center justify-center">
                      <Heart className="text-[#0959a1] w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0959a1]">+15 ans</div>
                      <div className="text-gray-600">d&apos;expérience</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
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

      {/* FEATURES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
              Pourquoi nous choisir ?
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-4">
              Des services de qualité
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une équipe dédiée à votre bien-être avec des valeurs fortes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className="w-16 h-16 bg-[#0959a1] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0959a1] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
                À propos
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-6">
                Une expertise au service de votre bien-être
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fondée par{" "}
                <span className="font-bold text-[#0959a1]">
                  Laetitia Lomami
                </span>
                , professionnelle du secteur médico-social avec plus de dix ans
                d&apos;expérience en coordination et accompagnement de publics
                vulnérables.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Harmonie & Autonomie accompagne les enfants présentant des
                troubles du neurodéveloppement dans le développement de leur
                autonomie.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Respect et dignité de chaque personne",
                  "Écoute et adaptation aux besoins",
                  "Confidentialité et discrétion",
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

              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 bg-[#0959a1] text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
              >
                En savoir plus
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/ladies.jpeg"
                  alt="Équipe Harmonie & Autonomie"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-[#fdc81e] p-6 rounded-2xl shadow-xl"
              >
                <p className="text-[#0959a1] font-bold text-lg">10+ ans</p>
                <p className="text-[#0959a1]">d&apos;expérience</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
              Nos prestations
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-4">
              Des services sur mesure
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des accompagnements adaptés à chaque situation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-[#fdc81e] w-12 h-12 rounded-full flex items-center justify-center text-[#0959a1]">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#0959a1] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-[#0959a1] font-semibold group-hover:gap-3 transition-all"
                    >
                      En savoir plus
                      <ChevronRight className="w-4 h-4" />
                    </Link>
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
              href="/services"
              className="inline-flex items-center gap-2 bg-[#0959a1] text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Voir tous nos services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
              Témoignages
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La satisfaction de nos familles est notre plus belle récompense
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
                  <Quote className="absolute top-6 right-6 text-[#fdc81e] w-12 h-12 opacity-20" />

                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0959a1]">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-[#fdc81e] fill-[#fdc81e] w-5 h-5"
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 italic">{testimonial.feedback}</p>
                </div>
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
              Besoin d&apos;aide au quotidien ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une consultation personnalisée et découvrez
              comment nous pouvons vous accompagner
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
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  Découvrir nos services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ARTICLES SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#fdc81e]/20 text-[#0959a1] rounded-full text-sm font-semibold mb-4">
              Actualités
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0959a1] mb-4">
              Derniers articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conseils et informations pour le bien-être de vos proches
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#0959a1] to-[#063d6e]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar className="text-white/20 w-16 h-16" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-[#fdc81e] font-semibold mb-2">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>
                  <h3 className="text-xl font-bold text-[#0959a1] mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {article.date}
                    </span>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1 text-[#0959a1] font-semibold hover:gap-2 transition-all"
                    >
                      Lire
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
