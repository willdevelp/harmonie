import Link from 'next/link'
import { FaArrowRight,  } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
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
                Favoriser <span className="text-[#fdc81e]">l&apos;autonomie</span>, <span className="text-[#fdc81e]">l&apos;épanouissement</span> et <span className="text-[#fdc81e]">l&apos;inclusion</span> des enfants <br />
                {/* <span className="text-[#fdc81e]">prend soin de vous</span> */}
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-lg">
                Services professionnels pour  vos enfants à travers un accompagnement éducatif humain et adapté. Une équipe dédiée à votre bien-être 7j/7.
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
                      <div className="font-bold text-[#0959a1]">+10 ans</div>
                      <div className="text-gray-600">d&apos;expérience</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div> */}
      </section>
  )
}

