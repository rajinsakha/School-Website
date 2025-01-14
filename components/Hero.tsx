import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-4rem)]  w-full overflow-hidden">
      <Image
        src="/hero.jpeg"
        alt="Shree Janak Secondary School"
        width={1920}
        height={1080}
        className="absolute inset-0 object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          Shree Janak Secondary School
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Empowering minds, shaping futures, and nurturing excellence in education since 1973 A.D.
        </p>
        <Link
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg"
        >
          Apply Now
        </Link>
      </div>
    </section>
  )
}

