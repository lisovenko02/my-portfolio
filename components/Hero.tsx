import Image from 'next/image'

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-24 gap-12">
      <div>
        <span className="text-yellow-400 text-sm font-medium">
          Open to work
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
          Full Stack Developer
          <br />
          building modern web apps.
        </h1>

        <p className="text-gray-400 mt-6 max-w-xl">
          I specialize in React, Next.js, NestJS and PostgreSQL. I build
          scalable and performant web applications from idea to production.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="px-5 py-2 bg-white text-black rounded-full font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2 border border-white/20 rounded-full"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="shrink-0">
        <Image
          src="/images/myphoto.png"
          alt="Ivan Lisovenko"
          width={320}
          height={320}
          className="rounded-3xl border border-white/10 object-cover"
        />
      </div>
    </section>
  )
}
