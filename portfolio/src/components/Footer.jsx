import { motion } from "framer-motion";
import { Mail, ArrowUp, Heart, Code2 } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#080611] px-5 text-white sm:px-8 lg:px-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-52 w-96 -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="Back to home"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <Code2 size={23} />
              </div>

              <span className="text-xl font-bold tracking-tight">
                Pari<span className="text-violet-400">.</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Software developer passionate about building modern web
              applications, solving problems, and continuously learning new
              technologies.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rastogipari225@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-violet-300"
            >
              <Mail size={16} className="text-violet-400" />
              rastogipari225@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <nav
              aria-label="Footer navigation"
              className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-gray-400 transition hover:translate-x-1 hover:text-violet-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Let's Connect
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Have a project idea or an exciting opportunity? Feel free to
              connect with me.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com/PariRastogi18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
              >
                <i class="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/pari-rastogi-907336309/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rastogipari225@gmail.com"
                aria-label="Send an email"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
              >
                <Mail size={20} />
              </a>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-violet-400/30 px-4 py-2.5 text-sm font-medium text-violet-300 transition hover:bg-violet-500/10 hover:text-white"
            >
              Get in Touch
              <Mail size={16} />
            </a>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] py-6 sm:flex-row">
          <p className="text-center text-xs leading-6 text-gray-500 sm:text-left sm:text-sm">
            © {currentYear} Pari Rastogi. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-gray-500 sm:text-sm">
            Built with
            <Heart size={14} className="fill-violet-400 text-violet-400" />
            and React
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
          >
            <ArrowUp size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}
