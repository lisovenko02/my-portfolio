import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard'

const projects: ProjectCardProps[] = [
  {
    name: 'Task Pro',
    aboutProject:
      'TaskPro is a powerful web-based application designed for task management, helping users conveniently plan and track their progress. Whether you are organizing work projects, planning personal goals, or simply managing your daily to-do list, TaskPro helps you stay organized and productive.',
    features:
      'Add and edit tasks, Set deadlines and priorities, Track progress , Notifications for upcoming events, Seamless integration with calendars',
    myRole:
      'I was responsible for implementing the edit profile functionality, covering both backend and frontend development.',
    technologies:
      'React Redux Toolkit Axios React Router Formik Yup React Datepicker React Hot Toast & Node.js Express.js MongoDB Mongoose jsonwebtoken bcryptjs',
    type: 'FullStack',
    urlGit: 'https://github.com/AnnaNADVOR/taskPro_project-group-6',
    urlBack: 'https://github.com/artem-yaremchuk/task-pro-backend',
    urlSite: 'https://annanadvor.github.io/taskPro_project-group-6/',
  },
  {
    name: 'BookShelf',
    aboutProject:
      'BookShelf is a user-friendly web application designed to enhance your experience in finding and exploring books. It allows users to easily search for books, read detailed information, add books to the cart, and much more, providing a convenient way for book lovers to manage their reading choices.',
    features:
      'Search and browse a vast collection of books, view detailed information about each book including descriptions, author details, and reviews, add books to your cart ',
    myRole:
      'I was responsible for creating the modal feature, allowing users to view detailed information about each book in a convenient and accessible way.',
    technologies: 'HTML, CSS, and JavaScript ',
    type: 'FrontEnd',
    urlGit: 'https://github.com/Oleksander-Kozlov/project-Itside2.0',
    urlSite: 'https://oleksander-kozlov.github.io/project-Itside2.0/index.html',
  },
  {
    name: 'MIMINO',
    aboutProject:
      'MIMINO is a web application for a hotel and restaurant complex, designed to provide an intuitive and engaging user experience. The application allows users to view the menu, book a table, and explore the available rooms, all within a stylish and responsive interface.',
    features:
      'View the restaurant menu, book a table, explore available rooms, responsive layout for various devices.',
    myRole:
      'I was responsible for creating several pages related to the menu and hotel, enhancing the overall user experience.',
    technologies: 'SCSS HTML JAVASCRIPT',
    type: 'FrontEnd',
    urlGit: 'https://github.com/vbegunova/mimino-team',
    urlSite: 'https://vbegunova.github.io/mimino-team/',
  },
]

export default function TeamProjects() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Team Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
