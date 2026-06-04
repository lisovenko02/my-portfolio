import { FaTelegram, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-gray-400 mb-10 max-w-xl">
        Feel free to reach out for collaboration, jobs or just a chat.
      </p>

      <div className="grid md:grid-cols-2 gap-4 max-w-xl">
        <a
          href="mailto:vanyalisovenkoo@gmail.com"
          className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
        >
          <div className="flex items-center gap-2">
            <MdOutlineEmail />
            Email
          </div>
          <div className="text-sm text-gray-400">vanyalisovenkoo@gmail.com</div>
        </a>

        <a
          href="https://t.me/vanyalisovenko"
          className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
        >
          <div className="flex items-center gap-2">
            <FaTelegram />
            Telegram
          </div>
          <div className="text-sm text-gray-400">vanyalisovenko</div>
        </a>

        <a
          href="https://www.linkedin.com/in/ivan-lisovenko02/"
          className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
        >
          <div className="flex items-center gap-2">
            <FaLinkedin />
            LinkedIn
          </div>
          <div className="text-sm text-gray-400">Ivan Lisovenko</div>
        </a>

        <a
          href="https://github.com/lisovenko02"
          className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
        >
          <div className="flex items-center gap-2">
            <FaGithub />
            GitHub
          </div>
          <div className="text-sm text-gray-400">lisovenko02</div>
        </a>

        <a
          href="tel:+38-096-805-59-34"
          className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
        >
          <div className="flex items-center gap-2">
            <FaPhone />
            Phone
          </div>
          <div className="text-sm text-gray-400">+38 (096) 805-59-34</div>
        </a>
      </div>
    </section>
  )
}
