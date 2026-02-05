import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DraggableID from "./components/DraggableID";
import ScrollProgress from "./components/ScrollProgress";
import About from "./components/About";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Background />
      <DraggableID />
      <ScrollProgress />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

{/* <section id="home">...</section>
<section id="projects">...</section>
<section id="about">...</section>
<section id="contact">...</section> */}
