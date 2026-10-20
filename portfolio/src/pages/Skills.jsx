import { motion } from "framer-motion";
import { Code2, Globe, Database, Wrench, Brain, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "JavaScript", "Python", "C"],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend Development",
    icon: Terminal,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Mongoose"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"],
  },
  {
    title: "Core Computer Science",
    icon: Brain,
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Problem Solving"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080611] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            What I Work With
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My <span className="text-violet-400">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and tools I use to build applications, solve problems,
            and continuously improve my development skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors duration-300 hover:border-violet-400/40 hover:bg-violet-500/[0.05]"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-400 transition-colors group-hover:bg-violet-500/20">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-sm text-gray-300 transition-all duration-200 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
