import { projects } from '@/app/data/project'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-gray-400 mt-2">
            A selection of my most impactful work
          </p>
        </div>

        <a
          href="https://github.com/lisovenko02"
          target="_blank"
          className="text-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
        >
          View all on GitHub →
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  )
}
