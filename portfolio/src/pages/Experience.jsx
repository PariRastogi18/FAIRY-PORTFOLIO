import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Code2,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    role: "Intern - Software Engineer Developer",
    company: "Softpro India Computer Technologies Pvt. Ltd.",
    location: "Lucknow, Uttar Pradesh, India",
    duration: "June 2026 - Present",
    type: "Internship",
    description:
      "Working on full-stack web development and strengthening practical software engineering skills through hands-on development and project-based learning.",
    responsibilities: [
      "Developing web applications using the MERN stack.",
      "Building responsive user interfaces with React.js and Tailwind CSS.",
      "Working with Node.js, Express.js, and MongoDB for backend development.",
      "Practicing REST API integration, authentication, and application debugging.",
      "Using Git and GitHub for version control and project management.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#080611] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      <div className="pointer-events-none absolute left-0 top-40 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Work <span className="text-violet-400">Experience</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            My professional journey, hands-on development experience, and
            continuous growth as a software engineer.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-5 left-[19px] top-5 w-px bg-gradient-to-b from-violet-500 via-violet-500/40 to-transparent sm:left-7" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pb-8 pl-12 sm:pl-16"
            >
              <div className="absolute left-[8px] top-7 z-10 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#080611] bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.5)] sm:left-4">
                <span className="h-2 w-2 rounded-full bg-white" />
              </div>

              <article className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition-all duration-300 hover:border-violet-400/40 hover:bg-white/[0.05]">
                <div className="border-b border-white/[0.08] p-5 sm:p-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-400">
                        <BriefcaseBusiness size={24} />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold leading-snug sm:text-2xl">
                          {experience.role}
                        </h3>

                        <p className="mt-2 font-medium text-violet-300">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    <span className="w-fit shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                      ● Present
                    </span>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400 sm:flex-row sm:flex-wrap sm:gap-x-6">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} className="text-violet-400" />
                      <span>{experience.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-violet-400" />
                      <span>{experience.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Code2 size={16} className="text-violet-400" />
                      <span>{experience.type}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  <p className="text-sm leading-7 text-gray-400 sm:text-base">
                    {experience.description}
                  </p>

                  <h4 className="mb-4 mt-7 text-sm font-semibold uppercase tracking-wider text-gray-200">
                    Key Responsibilities
                  </h4>

                  <ul className="space-y-3">
                    {experience.responsibilities.map(
                      (responsibility, responsibilityIndex) => (
                        <li
                          key={responsibilityIndex}
                          className="flex items-start gap-3 text-sm leading-6 text-gray-400"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-1 shrink-0 text-violet-400"
                          />

                          <span>{responsibility}</span>
                        </li>
                      ),
                    )}
                  </ul>

                  <div className="mt-7 border-t border-white/[0.08] pt-6">
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200">
                      Technologies & Tools
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-violet-400/15 bg-violet-500/[0.07] px-3 py-2 text-xs font-medium text-violet-200 transition-colors hover:border-violet-400/40 hover:bg-violet-500/15"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
