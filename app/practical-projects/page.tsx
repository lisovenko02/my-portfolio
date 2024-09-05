import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard'

const projects: ProjectCardProps[] = [
  {
    name: 'Mazon',
    aboutProject:
      'Mazon is an e-commerce web application similar to Amazon, designed for a seamless online shopping experience. The main goal of the site is to facilitate the purchase of products, allowing users to easily add items to their cart and proceed through a structured checkout process.',
    features:
      'Product listing and detail pages, add products to the cart, four-step checkout process (Sign In, Shipping Address, Payment, Place Order), product availability status, view order history, light and dark theme toggle.',
    technologies:
      'React, Express, MongoDB, Typegoose, Bootstrap, Paypal, Google Map, Node.js, TypeScript',
    type: 'FullStack',
    urlGit: 'https://github.com/lisovenko02/amazon',
    urlSite: 'https://tsmazon.onrender.com/',
  },
  {
    name: 'Inventory Management Dashboard',
    aboutProject:
      'The Inventory Management Dashboard is a comprehensive web application designed to streamline and visualize inventory and sales data for businesses. This application offers a detailed view of various metrics and enables efficient management of products, users, and expenses through its user-friendly interface.',
    features:
      'Dashboard with product list, sales and purchase summaries, expense diagrams, and order tracking; Inventory page with product details (ID, name, price, rating, stock); Products page with search, product creation, and detailed listings; Users page with user management (ID, name, email); Settings for profile customization; Expenses page with visual expense tracking over time.',
    technologies:
      'Next.js, Tailwind, Redux Toolkit, Redux Toolkit Query, Material UI Data Grid, Node.js, Prisma, Postgres, AWS EC2, AWS RDS, AWS API Gateway, AWS Amplify, AWS S3.',
    type: 'FullStack',
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
    type: 'FrontEnd',
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
