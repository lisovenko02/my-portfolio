import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard'

const projects: ProjectCardProps[] = [
  {
    name: 'Blog',
    aboutProject:
      'The Blog application is a full-stack project with a rich set of features, allowing users to read, create, comment on, and manage blog posts in an engaging environment.',
    technologies: 'React, Redux & Toolkit, Node.js, Express, ',
    features:
      'Like functionality on posts with a list of popular posts; Authentication with session management; Home page with post feed, popular posts, and post creation; Full-screen post view with commenting and comment management; Profile page displaying user info and posts with options to edit or delete posts;',
    type: 'FullStack',
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
