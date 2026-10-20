import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const projects = [
  {
    title: "Livista",
    category: "Full Stack Development",
    description:
      "An Airbnb-inspired web application designed to explore, create, and manage travel accommodation listings.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/PariRastogi18/Livista",
    demo: "https://major-project-1-1zr2.onrender.com/listings",
    featured: false,
  },
  {
    title: "HaloMeet",
    category: "Full Stack Development",
    description:
      "A video meeting application focused on user authentication and creating a seamless online meeting experience.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/PariRastogi18/HaloMeet",
    demo: "https://halo-meet-3-gs9xiz1f7-pari-rastogis-projects.vercel.app",
    featured: true,
  },
  {
    title: "StockSphere",
    category: "Full Stack Development",
    description:
      "A stock market dashboard featuring portfolio holdings, positions, order management, authentication, and interactive market data visualization.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    github: "https://github.com/PariRastogi18/StockSphere-Project",
    demo: "https://stock-sphere-project-mtil.vercel.app",
    featured: true,
  },

  {
    title: "GitNexus",
    category: "Full Stack Development",
    description:
      "A GitHub-inspired repository management platform with user profiles, repository creation, editing, and visibility management.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/PariRastogi18/GitNexus",
    demo: "",
    featured: true,
  },

  {
    title: "Food Website",
    category: "Frontend Development",
    description:
      "A responsive food website featuring a structured layout, attractive styling, and adaptive designs for different screen sizes.",
    tech: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/PariRastogi18/Food-Website-Clone",
    demo: "https://food-website-clone-nu.vercel.app",
    featured: false,
  },
  {
    title: "Simon Says Game",
    category: "Frontend Development",
    description:
      "An interactive memory game that challenges players to remember and repeat an increasingly complex sequence.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/PariRastogi18/SimonGame",
    demo: "https://simon-game-sable-seven.vercel.app",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080611] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Featured <span className="text-violet-400">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A collection of projects where I turn ideas into practical
            applications using modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition-colors duration-300 hover:border-violet-400/40 hover:bg-white/[0.05]"
            >
              <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-violet-500/15 via-[#100a1b] to-fuchsia-500/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.13),transparent_70%)]" />

                <FolderGit2
                  size={58}
                  strokeWidth={1.1}
                  className="relative text-violet-300/80 transition-transform duration-500 group-hover:scale-110 group-hover:text-violet-300"
                />

                {project.featured && (
                  <span className="absolute right-4 top-4 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                    Featured
                  </span>
                )}

                <span className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-wider text-gray-400">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold transition-colors group-hover:text-violet-300">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:border-violet-400/40 hover:text-white"
                    >
                      <i class="fa-brands fa-github"></i>
                      GitHub
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-white/[0.06] px-4 py-2.5 text-sm text-gray-500"
                      title="Add your GitHub repository URL"
                    >
                      <i class="fa-brands fa-github"></i>
                      GitHub
                    </span>
                  )}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400"
                    >
                      Live Demo
                      <ExternalLink size={15} />
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-white/[0.05] px-4 py-2.5 text-sm text-gray-500"
                      title="Add your live deployment URL"
                    >
                      Live Demo
                      <ExternalLink size={15} />
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/PariRastogi18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-violet-400/30 px-6 py-3 text-sm font-semibold text-violet-300 transition hover:bg-violet-500/10 hover:text-white"
          >
            <i class="fa-brands fa-github"></i>
            Explore More on GitHub
            <ExternalLink size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
