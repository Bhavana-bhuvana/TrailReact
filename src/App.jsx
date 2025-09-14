// import { Routes, Route,useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Donate from './Components/Donate';
// import Home from './Components/Home';
// import NavBar from './Components/NavBar';
// import Projects from './Components/Projects';
// import './index.css';
// import Footer from "./Components/Footer";

// function App() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleShortcut = (e) => {
//       if (e.ctrlKey && e.shiftKey && e.key === "A") {
//         navigate("/admin"); // navigate to admin login
//       }
//     };

//     window.addEventListener("keydown", handleShortcut);
//     return () => window.removeEventListener("keydown", handleShortcut);
//   }, [navigate]);
//   return (
//     <div className="app">
//       <NavBar />
//       <div className="page">
//          <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/donate" element={<Donate />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/admin" element={<AdminLogin />} />
//         </Routes>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default App;
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import About from './Components/About';
import Contact from './Components/Contact';
import Donate from './Components/Donate';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import AdminLogin from './Components/AdminLogin';
import Footer from "./Components/Footer";
import './index.css';
import AdminDashBoard from "./Components/AdminDashBoard";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleShortcut = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "N") {
        navigate("/admin"); // navigate to admin login
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [navigate]);

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
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashBoard />} /> 
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
