import ProjectCard, {
  MainTechnologiesEnum,
  ProjectCardProps,
} from '@/components/ProjectCard'

const projects: ProjectCardProps[] = [
  {
    name: 'Evently(In Progress)',
    aboutProject: 'Will be soon...',
    technologies:
      'Next.js, ReactHook Form, Nest.js, Postgresql, Prisma, AWS S3, Vercel, Render.',
    mainTechnologies: [
      MainTechnologiesEnum.Next,
      MainTechnologiesEnum.Nest,
      MainTechnologiesEnum.PostgreSQL,
    ],
    features: 'Will be soon...',
    type: 'FullStack',
    urlImg:
      'https://events2025.s3.eu-north-1.amazonaws.com/1/e0ad5e77-6aa7-4017-a624-efcd99645f96',
    urlGit: 'https://github.com/lisovenko02/evently_front',
    urlBack: 'https://github.com/lisovenko02/evently_back',
    // urlSite: 'https://dinoworld-frontend.vercel.app/',
  },
  {
    name: 'DinoWorld',
    aboutProject:
      'DinoWorld is a full-stack app where users can buy,collect, and trade dinosaur cards with friends. It features authentication, inventory browsing,secure trades with mutual confirmation, and balance management. The platform also supports light-dark mode for a better user experience.',
    technologies:
      'Next.js, React, Redux Toolkit, Tailwind CSS, ReactHook Form, Yup,Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, AWS S3, Vercel, Render.',
    mainTechnologies: [
      MainTechnologiesEnum.Next,
      MainTechnologiesEnum.Node,
      MainTechnologiesEnum.MongoDB,
    ],
    features:
      'Buying dinosaur cards with in-game balance; Secure trading system with mutual confirmation; Inventory browsing with filtering options; User authentication and balance management; Light and dark mode support for better user experience.',
    type: 'FullStack',
    urlImg:
      'https://events2025.s3.eu-north-1.amazonaws.com/1/d4548b0d-dff3-4847-9534-49eae250365a',
    urlGit: 'https://github.com/lisovenko02/dinoworld-frontend',
    urlBack: 'https://github.com/lisovenko02/dinoworld-backend',
    urlSite: 'https://dinoworld-frontend.vercel.app/',
  },
  {
    name: 'Blog',
    aboutProject:
      'The Blog application is a full-stack project with a rich set of features, allowing users to read, create, comment on, and manage blog posts in an engaging environment.',
    technologies:
      'React, Redux & Toolkit, Node.js, Express, Formik, Yup, React-Redux, Redux-Persist, Cloudinary, bcrypt',
    mainTechnologies: [
      MainTechnologiesEnum.React,
      MainTechnologiesEnum.Node,
      MainTechnologiesEnum.MongoDB,
    ],
    features:
      'Like functionality on posts with a list of popular posts; Authentication with session management; Home page with post feed, popular posts, and post creation; Full-screen post view with commenting and comment management; Profile page displaying user info and posts with options to edit or delete posts;',
    type: 'FullStack',
    urlImg:
      'https://events2025.s3.eu-north-1.amazonaws.com/1/2a0f70b9-d4a0-4a0a-8148-7281e1f8c678',
    urlGit: 'https://github.com/lisovenko02/blog_front',
    urlBack: 'https://github.com/lisovenko02/blog_back',
    urlSite: 'https://blog-six-henna-49.vercel.app/',
  },
]

export default function PetProjects() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Personal Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
