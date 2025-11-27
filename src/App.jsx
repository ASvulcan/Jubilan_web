import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/vision";
import ContactPage from "./pages/Contact";

import Loader from "./components/Loader/Loader";
import "./components/Loader/Loader.css";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 1 second
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Initialize AOS animations
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once
      easing: "ease-in-out",
    });

    // Refresh AOS on route change or content load
    AOS.refresh();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
