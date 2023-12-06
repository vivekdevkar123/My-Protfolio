import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Project from "./components/project/Project";

const App = () => {
  return <div>

    <section id="Home">
      <Navbar />
      <Hero />
    </section>

    <section id="Skills">
      <Parallax type="Skills" />
    </section>
    <section>Skills</section>
    <section id="Projects">
      <Parallax type="Projects" />
    </section>
    <Project />
    <section id="Contact">
      <Parallax type="Contact Me" />
    </section>
    <section>Contact</section>
  </div>;
};

export default App;
