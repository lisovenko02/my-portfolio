import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import { HiOutlineServer } from 'react-icons/hi'

export interface ProjectCardProps {
  name: string
  description: string
  technologies: string[]
  urlImg: string
  urlGit?: string
  urlBack?: string
  urlSite?: string
}

export default function ProjectCard({
  name,
  description,
  technologies,
  urlImg,
  urlGit,
  urlBack,
  urlSite,
}: ProjectCardProps) {
  return (
    <div className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
      {/* IMAGE */}
      <div className="overflow-hidden">
        <Image
          src={urlImg}
          alt={name}
          width={800}
          height={400}
          className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>

        <p className="text-gray-400 text-sm mt-2">{description}</p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap gap-3 mt-6 text-sm">
          {urlSite && (
            <a
              href={urlSite}
              target="_blank"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-black font-medium hover:opacity-80"
            >
              <MdWeb />
              Live
            </a>
          )}

          {urlGit && (
            <a
              href={urlGit}
              target="_blank"
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 hover:bg-white/10"
            >
              <FaGithub />
              Frontend
            </a>
          )}

          {urlBack && (
            <a
              href={urlBack}
              target="_blank"
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 hover:bg-white/10"
            >
              <HiOutlineServer />
              Backend
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
