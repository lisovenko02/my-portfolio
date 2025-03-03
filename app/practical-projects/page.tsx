import ProjectCard, {
  MainTechnologiesEnum,
  ProjectCardProps,
} from '@/components/ProjectCard'

const projects: ProjectCardProps[] = [
  {
    name: 'Trello Clone',
    aboutProject:
      'Trello Clone is a powerful tool for organizing and managing tasks. Users can create boards for projects, add task cards, assign responsibilities, and track progress. Unlike the original Trello, this clone uses Prisma for database management, providing seamless data handling and improved performance.',
    features:
      'User authentication; Board and task card creation, editing, and deletion; Commenting system for cards and boards; Ability to add participants to projects; Task status management (To Do, In Progress, Done); Responsive design for mobile and desktop devices.',
    technologies:
      'Frontend: Next.js, TypeScript, React, TailwindCSS; Backend: Nest.js, PostgreSQL, Prisma, JWT; Additional: CORS, cookie-parser',
    mainTechnologies: [
      MainTechnologiesEnum.Next,
      MainTechnologiesEnum.Nest,
      MainTechnologiesEnum.PostgreSQL,
    ],
    type: 'FullStack',
    urlImg:
      'https://events2025.s3.eu-north-1.amazonaws.com/1/f9e980bd-35db-4635-93a2-6e5c761376a6',
    urlGit: 'https://github.com/lisovenko02/trello_front',
    urlBack: 'https://github.com/lisovenko02/trello_back',
    urlSite: 'https://trello-front-ebon.vercel.app/',
  },
  {
    name: 'Banking App',
    aboutProject:
      'Horizon is a modern banking platform for everyone. You can log in using the following credentials Email: asd@gmail.com; Password: 123456789',
    features:
      'Authentication; Connect Banks(Plaid); Shows general overview of user account with total balance from all connected banks, recent transactions; Show Bank Cards; Transaction History, Real-time Updates, Funds Transfer, Responsiveness',
    technologies:
      'Next.js, TypeScript, Appwrite, Plaid, Dwolla, React Hook Form, Zod, TailwindCSS, Chart.js, ShadCN',
    mainTechnologies: [MainTechnologiesEnum.Next],
    type: 'FrontEnd',
    urlImg:
      'https://events2025.s3.eu-north-1.amazonaws.com/1/8000ba20-2e69-4159-8f58-c8aca1805db7',
    urlGit: 'https://github.com/lisovenko02/banking_app',
    urlSite: 'https://bankingapp-ivory.vercel.app/',
  },
  {
    name: 'Mazon',
    aboutProject:
      'Mazon is an e-commerce web application similar to Amazon, designed for a seamless online shopping experience. The main goal of the site is to facilitate the purchase of products, allowing users to easily add items to their cart and proceed through a structured checkout process.',
    features:
      'Product listing and detail pages, add products to the cart, four-step checkout process (Sign In, Shipping Address, Payment, Place Order), product availability status, view order history, light and dark theme toggle.',
    technologies:
      'React, Express, MongoDB, Typegoose, Bootstrap, Paypal, Google Map, Node.js, TypeScript',
    mainTechnologies: [MainTechnologiesEnum.React, MainTechnologiesEnum.Node],
    type: 'FullStack',
    urlImg:
      'https://events2025.s3.eu-north-1.amazonaws.com/1/41842ad7-d41e-4356-ac0b-e12368bdc247',
    urlGit: 'https://github.com/lisovenko02/amazon',
    urlSite: 'https://tsmazon.onrender.com/',
  },
  {
    name: 'Realtime Chat',
    aboutProject:
      'A performant and reliable realtime-chat-app built with NextJS 13',
    features:
      'Instant real-time messaging using Upstash Redis, Full friendship system to add, accept or deny friends, Super fast database queries with Redis, Responsive UI built with TailwindCSS, Protection of sensitive routes, Google Authentication',
    technologies:
      'Next.js, Google Cloud Console, Redis Upstash, react-hook-form, next-auth, class-variance-authority, pusher',
    mainTechnologies: [MainTechnologiesEnum.Next],
    type: 'FrontEnd',
    urlImg:
      'https://events2025.s3.eu-north-1.amazonaws.com/1/f8de5619-7c2d-483e-b094-3b52ab11fea9',
    urlGit: 'https://github.com/lisovenko02/realtime-chat',
    urlSite: 'https://realtime-chat-iota-ashen.vercel.app/',
  },
  {
    name: 'Management Dashboard',
    aboutProject:
      'The Inventory Management Dashboard is a comprehensive web application designed to streamline and visualize inventory and sales data for businesses. This application offers a detailed view of various metrics and enables efficient management of products, users, and expenses through its user-friendly interface.',
    features:
      'Dashboard with product list, sales and purchase summaries, expense diagrams, and order tracking; Inventory page with product details (ID, name, price, rating, stock); Products page with search, product creation, and detailed listings; Users page with user management (ID, name, email); Settings for profile customization; Expenses page with visual expense tracking over time.',
    technologies:
      'Next.js, Tailwind, Redux Toolkit, Redux Toolkit Query, Material UI Data Grid, Node.js, Prisma, Postgres, AWS EC2, AWS RDS, AWS API Gateway, AWS Amplify, AWS S3',

    mainTechnologies: [
      MainTechnologiesEnum.Next,
      MainTechnologiesEnum.Node,
      MainTechnologiesEnum.PostgreSQL,
    ],
    type: 'FullStack',
    urlImg:
      'https://events2025.s3.eu-north-1.amazonaws.com/1/0c646a4a-b163-4748-91f9-f46859a9d051',
    urlGit: 'https://github.com/lisovenko02/inventory-management',
    urlSite: 'https://main.d2x3quyg4kkqmr.amplifyapp.com/',
  },
  {
    name: 'CRM for vendors',
    aboutProject:
      'A comprehensive CRM-like web application designed to streamline vendor information management. This project focuses on enhancing both technical development skills and practical experience in interacting with design mockups and managing business processes.',
    features:
      'Dashboard displaying key metrics like promotions, categories, and company details; Companies page with search functionality, company creation via modal, and a detailed company list; Company detail page showing company information and promotions, with options to add new promotions.',
    technologies:
      'Next.js, JavaScript, TypeScript, React, Figma, Formik, Tailwindcss',
    mainTechnologies: [MainTechnologiesEnum.Next],
    type: 'FrontEnd',
    urlImg:
      'https://events2025.s3.eu-north-1.amazonaws.com/1/ccd543f3-02cf-47c5-9fb9-9ca60c54127a',
    urlGit: 'https://github.com/lisovenko02/CRM-for-vendors',
    urlSite: 'https://crm-for-vendors-beryl.vercel.app/dashboard',
  },
]

export default function PracticeProjects() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Practical Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
