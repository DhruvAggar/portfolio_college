import './App.css';
import NavbarComponent from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero';
import Skillset from './Components/Skillset';
import CardContainer from './Components/CardContainer';
import Hobbies from './Components/Hobbies';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App" style={{background: "linear-gradient(to top right, #5A189A , #240046)"}}>
      <NavbarComponent/>
      <Hero/>
      <Skillset/>
      <CardContainer/>
      {/* <Hobbies/> */}
      <Contact/>
    </div>
  );
}

export default App;
