import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Download,
  Sparkles,
} from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const roles = [
  "MERN Stack Developer",
  "Software Developer",
  "Frontend Developer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setDisplayText(roles[0]);
      return;
    }

    const currentRole = roles[roleIndex];

    let delay = deleting ? 35 : 75;

    if (!deleting && displayText === currentRole) {
      delay = 1400;
    }

    if (deleting && displayText === "") {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!deleting && displayText === currentRole) {
        setDeleting(true);
      } else if (deleting && displayText === "") {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else if (deleting) {
        setDisplayText((prev) => prev.slice(0, -1));
      } else {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex, reduceMotion]);

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  const techBadges = [
    {
      name: "React.js",
      className: "left-0 top-12 sm:-left-8 sm:top-16",
      delay: 0.2,
    },
    {
      name: "Node.js",
      className: "right-0 top-32 sm:-right-10 sm:top-36",
      delay: 0.5,
    },
    {
      name: "MongoDB",
      className: "bottom-16 left-3 sm:-left-8 sm:bottom-20 ",
      delay: 0.8,
    },
    {
      name: "JavaScript",
      className: "bottom-4 right-0 sm:-right-8 sm:bottom-8",
      delay: 1.1,
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden bg-[#050505] px-5 pb-20 pt-32 text-white sm:px-8 lg:px-12"
    >
      {/* Background Effects */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.035)_1px,transparent_1px)] bg-[size:55px_55px]" />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, 35, -20, 0],
                  y: [0, -30, 20, 0],
                  scale: [1, 1.12, 0.95, 1],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-700/20 blur-[120px]"
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, -30, 25, 0],
                  y: [0, 30, -20, 0],
                  scale: [1, 0.9, 1.15, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-600/15 blur-[140px]"
        />

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/[0.07]" />

        <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/[0.08]" />
      </div>

      {/* Main Content */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Left Content */}

        <div className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>

            <span className="text-xs font-medium tracking-wide text-violet-200 sm:text-sm">
              Building ideas into reality
            </span>

            <Sparkles size={14} className="text-violet-300" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-sm font-medium tracking-[0.25em] text-zinc-400 uppercase"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl leading-[1.12] font-bold tracking-tight sm:text-6xl md:text-7xl xl:text-[82px]"
          >
            Pari
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
              Rastogi
            </span>
            <span className="text-violet-400">.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-7 flex min-h-10 items-center gap-2 text-xl font-medium sm:text-2xl"
          >
            <Code2 size={24} className="shrink-0 text-violet-400" />

            <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              {displayText}
            </span>

            <span className="h-6 w-[2px] animate-pulse bg-violet-400" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg"
          >
            I build modern web applications with{" "}
            <span className="text-zinc-200">React, Node.js and MongoDB.</span>{" "}
            Passionate about solving problems, writing clean code and turning
            creative ideas into meaningful digital experiences.
          </motion.p>

          {/* Buttons */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.button
              whileHover={reduceMotion ? {} : { scale: 1.04, y: -2 }}
              whileTap={reduceMotion ? {} : { scale: 0.97 }}
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
            >
              View My Projects
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>

            <motion.a
              whileHover={reduceMotion ? {} : { scale: 1.04, y: -2 }}
              whileTap={reduceMotion ? {} : { scale: 0.97 }}
              href="/resume.pdf"
              download
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/[0.08]"
            >
              <Download
                size={17}
                className="text-violet-300 transition-transform duration-300 group-hover:translate-y-0.5"
              />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <span className="text-xs tracking-wider text-zinc-500 uppercase">
              Find me on
            </span>

            <a
              href="https://github.com/PariRastogi18"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg border border-white/10 p-3 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
            >
              <i class="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/pari-rastogi-907336309/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-lg border border-white/10 p-3 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>

            <span className="h-px w-12 bg-linear-to-r from-violet-500/60 to-transparent" />
          </motion.div>
        </div>

        {/* Right Visual */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.9, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center py-8 lg:py-0"
        >
          <div className="relative flex aspect-square w-full max-w-[370px] items-center justify-center sm:max-w-[420px]">
            {/* Outer Ring */}

            <motion.div
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-dashed border-violet-400/20"
            >
              <span className="absolute left-[17%] top-[13%] h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.9)]" />

              <span className="absolute bottom-[17%] right-[12%] h-2.5 w-2.5 rounded-full bg-fuchsia-400 shadow-[0_0_20px_rgba(232,121,249,0.9)]" />
            </motion.div>

            {/* Middle Ring */}

            <motion.div
              animate={reduceMotion ? {} : { rotate: -360 }}
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-8 rounded-full border border-violet-500/15"
            >
              <span className="absolute right-[7%] top-[20%] h-2 w-2 rounded-full bg-purple-300" />
            </motion.div>

            {/* Glow */}

            <div className="absolute inset-14 rounded-full bg-violet-600/20 blur-[65px]" />

            {/* Central Card */}

            <motion.div
              animate={reduceMotion ? {} : { y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex h-56 w-56 flex-col items-center justify-center rounded-[32px] border border-violet-400/25 bg-gradient-to-br from-violet-500/15 via-[#100a1d]/90 to-fuchsia-500/[0.08] shadow-[0_0_80px_rgba(124,58,237,0.18)] backdrop-blur-2xl sm:h-64 sm:w-64"
            >
              <div className="absolute inset-3 rounded-[24px] border border-white/[0.05]" />

              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
                <Code2
                  size={42}
                  strokeWidth={1.4}
                  className="text-violet-300"
                />
              </div>

              <p className="text-3xl font-bold tracking-tight">
                <span className="text-white">{"<"}</span>
                <span className="text-violet-300">Code</span>
                <span className="text-fuchsia-300">{"/>"}</span>
              </p>

              <p className="mt-2 text-xs tracking-[0.22em] text-zinc-400 uppercase">
                Create · Build · Innovate
              </p>

              <div className="absolute -right-3 top-8 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/25 bg-[#100a1d] text-violet-300 shadow-lg">
                <Sparkles size={19} />
              </div>

              <div className="absolute -bottom-3 -left-3 flex h-10 w-10 items-center justify-center rounded-xl border border-fuchsia-400/25 bg-[#100a1d] text-fuchsia-300 shadow-lg">
                <Code2 size={19} />
              </div>
            </motion.div>

            {/* Floating Tech Badges */}

            {techBadges.map((badge) => (
              <motion.div
                key={badge.name}
                animate={
                  reduceMotion ? {} : { y: [0, -8, 0], rotate: [0, 1.5, 0] }
                }
                transition={{
                  duration: 4,
                  delay: badge.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute z-20 ${badge.className} rounded-xl border border-violet-400/20 bg-[#100a1d]/90 px-3 py-2.5 text-xs font-medium text-violet-200 shadow-[0_5px_25px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:px-4 sm:text-sm`}
              >
                <span className="mr-2 text-violet-400">✦</span>
                {badge.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.button
        initial={{ opacity: 0 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: [0, 7, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: {
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-violet-300 md:flex"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">
          Scroll to explore
        </span>

        <ArrowDown size={17} />
      </motion.button>

      {/* Decorative Corner Label */}

      <div className="absolute bottom-8 right-8 hidden items-center gap-2 text-xs text-zinc-600 xl:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
        Portfolio · 2026
        <ArrowUpRight size={13} />
      </div>
    </section>
  );
};

export default Hero;
