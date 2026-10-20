import Navbar from "./components/Navbar";
import Hero from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {" "}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}
