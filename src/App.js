import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from "./Home/index";
import About from "./Home/Aboutus/Index";
import Service from "./Home/Services/index";
import Consulting from "./Cryptocul/Index"
import Contact from "./Home/Contact";
import Preloader from "./Home/Preload";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic content loading
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the delay as needed

    // You can replace the above setTimeout with your actual data fetching logic.
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about-us" element={ <About/> } />
          <Route path="/services" element={ <Service/> } />
          <Route path="/contact-us" element={ <Contact/> } />
          <Route path="/online-consulting" element={ <Consulting/> } />
        </Routes>
      )}
    </>

  )
}

export default App
                  