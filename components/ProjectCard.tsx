import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import TechnologyIcons from './TechnologyIcons'

type ProjectType = 'FullStack' | 'FrontEnd' | 'BackEnd'

export enum MainTechnologiesEnum {
  Next = 'Next',
  React = 'React',
  JavaScript = 'JavaScript',
  MongoDB = 'MongoDB',
  PostgreSQL = 'PostgreSQL',
  Node = 'Node',
  Nest = 'Nest',
}

export interface ProjectCardProps {
  name: string
  aboutProject: string
  features?: string
  myRole?: string
  mainTechnologies: MainTechnologiesEnum[]
  technologies: string
  type: ProjectType
  urlImg?: string
  urlGit: string
  urlBack?: string
  urlSite?: string
}

export default function ProjectCard({
  name,
  aboutProject,
  features,
  myRole,
  urlBack,
  mainTechnologies,
  technologies,
  type,
  urlImg,
  urlGit,
  urlSite,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-800 shadow-md rounded-lg p-6 relative">
      <div>
        <div className="absolute top-2 left-2 bg-gray-700 text-white px-2 py-1 rounded">
          {type}
        </div>
        <div className="absolute top-2 right-2">
          <TechnologyIcons mainTechnologies={mainTechnologies} />
        </div>
      </div>

      {urlImg && (
        <div className="mt-8 mb-4">
          <Image
            src={urlImg}
            alt={name}
            width={500}
            height={200}
            className="rounded-lg w-full h-40"
          />
        </div>
      )}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-100 mt-6">{name}</h3>
        <div className="flex gap-2">
          <a
            href={urlSite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <MdWeb size={28} color="white" />
          </a>
          <a
            href={urlGit}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={24} color="white" />
          </a>
          {urlBack && (
            <a
              href={urlBack}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={24} color="black" />
            </a>
          )}
        </div>
      </div>
      <p className="mb-2 text-gray-300 mt-4">{aboutProject}</p>
      <p className="text-gray-300 mt-4">
        <strong className="text-gray-100">Features:</strong> {features}
      </p>
      {myRole && (
        <p className="text-gray-300 mt-4">
          <strong className="text-gray-100">My Role:</strong> {myRole}
        </p>
      )}
      <p className="text-gray-300 mt-4">
        <strong className="text-gray-100">Technologies:</strong> {technologies}
      </p>
    </div>
  )
}
