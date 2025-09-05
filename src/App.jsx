import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
