import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#0959a1] to-[#0959a1]/80 text-white px-10">
      <div className="py-10 space-y-8 md:py-10 md:flex items-center justify-between gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-bold mb-6">
            Accompagner chaque enfant vers plus d’autonomie
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Nous accompagnons à domicile les enfants présentant des TSA, des troubles DYS et des handicaps moteurs afin de soutenir leur autonomie, leur développement et leur inclusion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/services"
                className="bg-[#fdc81e] text-[#0959a1] font-semibold px-8 py-3 rounded-md text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Nos services <FaArrowRight />
              </Link>

              <Link
                href="/contact"
                className="border-2 border-white text-white text-center font-semibold px-8 py-3 rounded-md text-lg hover:bg-white hover:text-[#0959a1] transition-all"
              >
                Contactez-nous
              </Link>
            </div>
        </div>
        <div className='md:w-1/2 w-full'>
          <Image src="/popo.jpeg" alt="Hero image" width={200} height={200} className="w-full md:h-110 rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}

