import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let currentSection = "home";

      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= 150) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (id) => {
    setActiveSection(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-violet-500/20 bg-black/80 shadow-[0_8px_40px_rgba(139,92,246,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[76px] max-w-full items-center justify-between px-5 sm:px-8 lg:px-12 bg-black">
        {/* Logo */}

        <button
          onClick={() => handleNavigation("home")}
          className="group relative flex items-center gap-2 cursor-pointer"
          aria-label="Go to Home"
        >
          <motion.span
            whileHover={{ rotate: 8, scale: 1.08 }}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-lg font-bold text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
          >
            P
          </motion.span>

          <span className="text-xl font-bold tracking-tight text-pink-100">
            Pari
            <span className="text-violet-400">Rastogi</span>
          </span>

          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-fuchsia-400 transition-all duration-300 group-hover:w-full" />
        </button>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className={`relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-300 xl:px-4 ${
                activeSection === link.id
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              } cursor-pointer`}
            >
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNavbar"
                  className="absolute inset-0 rounded-full border border-violet-400/20 bg-violet-500/10"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10 ">{link.name}</span>

              <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-violet-400 transition-all duration-300 hover:w-1/2" />
            </button>
          ))}
        </div>

        {/* Social Links */}

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://github.com/PariRastogi18"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-2.5 text-zinc-400 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
          >
            <i className="fa-brands fa-github" aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/pari-rastogi-907336309/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-2.5 text-zinc-400 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
          >
            <i className="fa-brands fa-linkedin" aria-hidden="true" />
          </a>

          <button
            onClick={() => handleNavigation("contact")}
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
          >
            Let's Talk
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-violet-400/20 bg-violet-500/10 p-2.5 text-violet-300 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Navigation */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-violet-500/15 bg-black/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5 sm:px-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavigation(link.id)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "border border-violet-500/20 bg-violet-500/10 text-violet-300"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}

                  {activeSection === link.id && (
                    <motion.span
                      layoutId="mobileActive"
                      className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]"
                    />
                  )}
                </motion.button>
              ))}

              <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-5">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm text-zinc-300 transition hover:border-violet-400/40 hover:text-violet-300"
                >
                  <i className="fa-brands fa-github" aria-hidden="true" />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm text-zinc-300 transition hover:border-violet-400/40 hover:text-violet-300"
                >
                  <i className="fa-brands fa-linkedin" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>

              <button
                onClick={() => handleNavigation("contact")}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-purple-600 py-3.5 text-sm font-semibold text-white cursor-pointer"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
