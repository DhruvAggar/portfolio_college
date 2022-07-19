import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import ThreeD from "./components/ThreeD";
import { BrowserRouter, Route ,Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <ThreeD/> */}
        <Navbar />
        <About />
        <Skills />
        {/* <Routes>
        <Route to="/skills">
        </Route>
         </Routes>  */}
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
