import './App.css';
import React, { useRef } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  const projectSectionRef = useRef(null); // Ref for the project section

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar projectSectionRef={projectSectionRef} /> {/* Pass the ref to Navbar */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home ref={projectSectionRef} />} /> {/* Pass the ref to Home */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
