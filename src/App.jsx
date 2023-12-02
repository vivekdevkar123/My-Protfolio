import "./app.scss";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return <div>
    
    <section id="Home">
      <Navbar/>
    </section>

    <section id="About">Paralax</section>
    <section>About</section>
    <section id="Skills">Paralax</section>
    <section>Skills</section>
    <section id="Projects">Paralax</section>
    <section>Project1</section>
    <section>Project2</section>
    <section>Project3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
