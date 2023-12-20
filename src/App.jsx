import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className="divider" /> 
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Contact />
    </div>
  );
}

export default App;
