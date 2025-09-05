import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Toaster } from "react-hot-toast";
import { ScrollToTop } from "./components/ScrollToTop";
import { useState, useEffect } from "react";
import { PreLoader } from "./components/PreLoader";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Matches Preloader timer
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#1f2937", // dark gray
          color: "#fff",
          borderRadius: "10px",
          padding: "12px 16px",
          fontSize: "14px",
        },
      }}
      containerStyle={{
        top: 80, // leaves space below navbar
      }}
    />
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

export default App;
