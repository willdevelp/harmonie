import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#0959a1] to-[#0959a1]/80 text-white text-center">
      <div className="py-20 md:py-28">
        <div className="">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Des services à la personne <span className="text-[#fdc81e]">professionnels</span> et bienveillants
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Aide à domicile, accompagnement, soins et bien plus encore pour votre confort au quotidien
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-[#fdc81e] text-[#0959a1] font-semibold px-8 py-3 rounded-md text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Nos services <FaArrowRight />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md text-lg hover:bg-white hover:text-[#0959a1] transition-all"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      {/* <div className="absolute bottom-0 left-0 right-0 mt-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fef7f1" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}
    </section>
  )
}

