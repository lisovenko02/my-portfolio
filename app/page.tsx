import Image from 'next/image'
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaTelegram,
  FaLinkedin,
} from 'react-icons/fa'
import {
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
} from 'react-icons/si'

export default function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to My Portfolio
      </h1>
      <hr />
      <div className="flex flex-col md:flex-row gap-8 mb-8 mt-4">
        <div className="md:w-1/3">
          <Image
            src="/images/myphoto.png"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-2">Ivan Lisovenko</h2>
          <h3 className="text-xl mb-4">Full Stack Developer</h3>
          <p className="mb-4">
            <strong className="text-gray-100">Summary:</strong> I am a
            passionate Full Stack Developer with experience in building
            responsive web applications using modern JavaScript frameworks and
            libraries. I enjoy solving complex problems and learning new
            technologies. I always strive for the best. I am looking for a
            company where I can grow and develop professionally, as this is very
            important to me.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://t.me/vanyalisovenko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-400 hover:text-blue-300"
            >
              <FaTelegram size={36} />
            </a>
            <a
              href="https://www.linkedin.com/in/ivan-lisovenko02/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-600 hover:text-blue-500"
            >
              <FaLinkedin size={36} />
            </a>
            <a
              href="https://djinni.co/q/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image
                src="/images/djinni.png"
                alt="Djinni"
                width={36}
                height={36}
              />
            </a>
          </div>
        </div>
      </div>
      <hr />

      <h3 className="text-2xl font-bold mb-4 text-gray-100 mt-4">
        Tech Skills
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Skill icon={<FaJs className="text-yellow-400" />} name="JavaScript" />
        <Skill icon={<FaReact className="text-blue-400" />} name="React" />
        <Skill
          icon={<SiRedux className="text-purple-400" />}
          name="Redux & Toolkit"
        />
        <Skill
          icon={<FaReact className="text-blue-400" />}
          name="React Native"
        />
        <Skill icon={<SiNextdotjs className="text-white" />} name="Next.js" />
        <Skill icon={<FaGitAlt className="text-orange-400" />} name="Git" />
        <Skill icon={<FaNodeJs className="text-green-400" />} name="Node.js" />
        <Skill icon={<SiExpress className="text-gray-400" />} name="Express" />
        <Skill icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
        <Skill
          icon={<SiTypescript className="text-blue-500" />}
          name="TypeScript"
        />
      </div>
    </div>
  )
}

function Skill({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center gap-2 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors h-20">
      <div className="text-2xl flex-shrink-0">{icon}</div>
      <span className="text-gray-200 text-sm leading-tight">{name}</span>
    </div>
  )
}
