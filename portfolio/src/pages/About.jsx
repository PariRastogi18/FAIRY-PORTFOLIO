import { motion, useReducedMotion } from "motion/react";
import {
  Code2,
  GraduationCap,
  Laptop,
  Target,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import professionalPic from "../assets/images/professionalPic.jpeg";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building responsive web applications using React, Node.js, Express and MongoDB.",
  },
  {
    icon: Target,
    title: "Problem Solving",
    description:
      "Strengthening programming fundamentals and DSA skills using Java.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Exploring new technologies and improving my software development skills.",
  },
  {
    icon: Laptop,
    title: "Project Based Learning",
    description:
      "Turning ideas into practical applications and learning through real projects.",
  },
];

const About = () => {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.2 : 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-[#08060d] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* Background Effects */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-700/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-fuchsia-700/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}

        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center sm:mb-20"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2">
            <Sparkles size={15} className="text-violet-300" />

            <span className="text-xs font-medium tracking-[0.2em] text-violet-200 uppercase">
              Get to know me
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            A little about my journey, my interests and what drives me to build
            meaningful digital experiences.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" />
        </motion.div>

        {/* Main Content */}

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left Side */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Decorative Frame */}

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [0, -8, 0],
                      rotate: [0, 1, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute right-5 top-5">
                <Sparkles size={20} className="text-violet-400/70" />
              </div>

              <div className="flex min-h-[280px] flex-col items-center justify-center text-center sm:min-h-[320px]">
                <motion.div
                  whileHover={reduceMotion ? {} : { scale: 1.05, rotate: 5 }}
                  className="mb-7 flex h-28 w-28 items-center justify-center overflow-hidden rounded-[30px] border border-violet-400/30 bg-violet-500/10 shadow-[0_0_50px_rgba(139,92,246,0.18)] sm:h-32 sm:w-32"
                >
                  <img
                    src={professionalPic}
                    alt="Pari Rastogi"
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Pari Rastogi
                </h3>

                <p className="mt-3 text-sm text-violet-300">
                  Software Developer
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {["React", "Node.js", "JavaScript", "MongoDB"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 border-t border-white/[0.08] pt-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-zinc-400">Current focus</span>

                  <span className="flex items-center gap-2 text-sm font-medium text-violet-300">
                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                    Development & DSA
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Education Cards */}
          </motion.div>

          {/* Right Side */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="pt-2 lg:pt-4"
          >
            <motion.p
              variants={itemVariants}
              className="mb-4 text-sm font-medium tracking-[0.2em] text-violet-400 uppercase"
            >
              Who I Am
            </motion.p>

            <motion.h3
              variants={itemVariants}
              className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl"
            >
              Passionate about building
              <span className="text-violet-300"> things that matter.</span>
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base leading-8 text-zinc-400"
            >
              I'm a Computer Science and Engineering student with a strong
              interest in software development and modern web technologies. I
              enjoy creating user-friendly applications and understanding how
              things work behind the scenes.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-base leading-8 text-zinc-400"
            >
              My current focus is on building full-stack applications with the
              MERN stack while strengthening my problem-solving skills through
              Data Structures and Algorithms in Java. I believe in learning by
              building projects, improving consistently and writing clean,
              maintainable code.
            </motion.p>

            {/* Explore Projects */}

            <motion.button
              variants={itemVariants}
              whileHover={reduceMotion ? {} : { x: 5 }}
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition-colors hover:text-fuchsia-300"
            >
              Explore my projects
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.button>
          </motion.div>
        </div>
        <div className="relative z-20 mx-auto mt-8 grid w-full max-w-md grid-cols-2 gap-3 sm:mt-10 sm:gap-4">
          {/* B.Tech Card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={reduceMotion ? {} : { y: [0, -5, 0] }}
            transition={{
              opacity: { duration: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="rounded-2xl border border-violet-400/25 bg-[#100a1b]/95 p-3 shadow-xl shadow-violet-950/30 backdrop-blur-xl sm:p-4"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 sm:h-10 sm:w-10">
              <GraduationCap size={20} />
            </div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-violet-300 sm:text-xs">
              Currently Pursuing
            </p>
            <h3 className="mt-1 text-sm font-bold text-white sm:text-base">
              B.Tech · CSE
            </h3>
            <p className="mt-1 text-[10px] leading-relaxed text-zinc-400 sm:text-xs">
              2nd Year
            </p>
          </motion.div>

          {/* Diploma Card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={reduceMotion ? {} : { y: [0, -5, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.2 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              },
            }}
            className="rounded-2xl border border-fuchsia-400/25 bg-[#100a1b]/95 p-3 shadow-xl shadow-fuchsia-950/30 backdrop-blur-xl sm:p-4"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-500/15 text-fuchsia-300 sm:h-10 sm:w-10">
              <Code2 size={20} />
            </div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-fuchsia-300 sm:text-xs">
              Completed
            </p>
            <h3 className="mt-1 text-sm font-bold text-white sm:text-base">
              Diploma · CSE
            </h3>
            <p className="mt-1 text-[10px] leading-relaxed text-zinc-400 sm:text-xs">
              Computer Science & Engineering
            </p>
          </motion.div>
        </div>
        {/* Highlight Cards */}
        <motion.div
          variants={containerVariants}
          className="mt-9 grid gap-4 sm:grid-cols-4"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        y: -5,
                        borderColor: "rgba(167,139,250,0.4)",
                      }
                }
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-colors duration-300 hover:bg-violet-500/[0.05]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition-all duration-300 group-hover:bg-violet-500/20">
                  <Icon size={21} />
                </div>

                <h4 className="text-sm font-semibold text-zinc-100">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
