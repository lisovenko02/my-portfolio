import React from 'react'
import { MainTechnologiesEnum } from './ProjectCard'
import {
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
} from 'react-icons/si'

const TechnologyIcons = ({
  mainTechnologies,
}: {
  mainTechnologies: MainTechnologiesEnum[]
}) => {
  return (
    <div className="flex gap-2">
      {mainTechnologies.map((tech) => {
        switch (tech) {
          case MainTechnologiesEnum.React:
            return <SiReact key={tech} size={30} color="cyan" />
          case MainTechnologiesEnum.JavaScript:
            return <SiJavascript key={tech} size={30} color="yellow" />
          case MainTechnologiesEnum.MongoDB:
            return <SiMongodb key={tech} size={30} color="green" />
          case MainTechnologiesEnum.PostgreSQL:
            return <SiPostgresql key={tech} size={30} color="blue" />
          case MainTechnologiesEnum.Node:
            return <SiNodedotjs key={tech} size={30} color="green" />
          case MainTechnologiesEnum.Next:
            return <SiNextdotjs key={tech} size={30} color="black" />
          case MainTechnologiesEnum.Nest:
            return <SiNestjs key={tech} size={30} color="red" />
          default:
            return null
        }
      })}
    </div>
  )
}

export default TechnologyIcons
