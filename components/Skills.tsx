import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
  SiExpress,
} from 'react-icons/si'

import { FaGitAlt, FaAws } from 'react-icons/fa'

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Redux Toolkit', icon: SiRedux },
      { name: 'Tailwind', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Express', icon: SiExpress },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Prisma', icon: SiPrisma },
    ],
  },
  {
    title: 'Other',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'AWS', icon: FaAws },
    ],
  },
]

export default function Skills() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-semibold mb-4 text-white/80">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
                  >
                    <Icon className="text-lg text-white/80" />
                    <span className="text-sm">{item.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
