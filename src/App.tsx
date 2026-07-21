import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Background from "./components/ui/Background";
import Documents from "./components/sections/Documents";

function App() {
  return (
    <div className="relative overflow-x-hidden bg-slate-950 text-white">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#3b82f620,transparent_40%),radial-gradient(circle_at_bottom_left,#8b5cf620,transparent_40%)]" />
   <Background />
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Documents />
  <Experience />
  <Contact />
  <Footer />
</div>
  );
}

export default App;