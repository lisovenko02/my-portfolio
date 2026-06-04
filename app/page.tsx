import Contact from '@/components/Contact'
import FeaturedProjects from '@/components/FeaturedProjects'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </main>
  )
}
