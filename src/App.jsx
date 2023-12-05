import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return <div>

    <section id="Home">
      <Navbar />
      <Hero />
    </section>

    <section id="About">
      <Parallax type="About Us" />
    </section>
    <section>About</section>
    <section id="Skills">
      <Parallax type="Skills" />
    </section>
    <section>Skills</section>
    <section id="Projects">
      <Parallax type="Projects" />
    </section>
    <section>Project1</section>
    <section>Project2</section>
    <section>Project3</section>
    <section id="Contact">
      <Parallax type="Contact Me" />
    </section>
    <section>Contact</section>
  </div>;
};

export default App;
