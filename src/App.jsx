import { Routes, Route } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Donate from './Components/Donate';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import './index.css';
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="page">
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
