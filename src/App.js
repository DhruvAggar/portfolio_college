import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <About />
        <Skills />
        <Projects />
        {/* <Contact /> */}
        <Footer />
      </header>
    </div>
  );
}

export default App;
