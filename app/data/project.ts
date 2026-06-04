import { ProjectCardProps } from '@/components/ProjectCard'

export const projects: ProjectCardProps[] = [
  {
    name: 'Evently (In Progress)',
    description:
      'Event management platform with chat, tasks and applications system.',
    technologies: [
      'Next.js',
      'ReactHook Form',
      'Nest.js',
      'Postgresql',
      'Prisma',
      'Websocket',
      'AWS S3',
      'Vercel',
      'Render.',
    ],
    urlImg:
      'https://dswavsxrqndeyzdkrxgq.supabase.co/storage/v1/object/public/event-images/portfolio/evently.jpg',
    urlGit: 'https://github.com/lisovenko02/evently_front',
    urlBack: 'https://github.com/lisovenko02/evently_back',
    urlSite: 'https://evently-front-taupe.vercel.app/',
  },
  {
    name: 'DinoWorld',
    description: 'Card trading platform with secure exchange system.',
    technologies: [
      'Next.js',
      'React',
      'Redux Toolkit',
      'Tailwind CSS',
      'ReactHook Form',
      'Yup',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
      'bcrypt',
      'AWS S3',
      'Vercel',
      'Render.',
    ],
    urlImg:
      'https://dswavsxrqndeyzdkrxgq.supabase.co/storage/v1/object/public/event-images/portfolio/dinoworld.jpg',
    urlGit: 'https://github.com/lisovenko02/dinoworld-frontend',
    urlBack: 'https://github.com/lisovenko02/dinoworld-backend',
    urlSite: 'https://dinoworld-frontend.vercel.app/',
  },
]
