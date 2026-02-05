import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DraggableID from "./components/DraggableID";
import ScrollProgress from "./components/ScrollProgress";
import About from "./components/About";
import CustomCursor from "./components/CustomCursor";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

function App() {
  return (
    <>
      <DraggableID />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </>
  );
}

export default App;

{/* <section id="home">...</section>
<section id="projects">...</section>
<section id="about">...</section>
<section id="contact">...</section> */}
