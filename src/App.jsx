import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Toaster } from "react-hot-toast";
import { Skills } from "./components/Skills";
import { ScrollToTop } from "./components/ScrollToTop";
import { useState, useEffect } from "react";
import { PreLoader } from "./components/PreLoader";
import { Experience } from "./components/Experience";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Matches Preloader timer
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute -top-56 -left-36 h-[28rem] w-[28rem] rounded-full bg-indigo-600/25 blur-3xl" />
      <div className="pointer-events-none absolute top-[36rem] -right-36 h-[24rem] w-[24rem] rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-violet-500/20 blur-3xl" />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#0f172a",
            color: "#e2e8f0",
            borderRadius: "10px",
            padding: "12px 16px",
            fontSize: "14px",
            border: "1px solid rgba(99, 102, 241, 0.35)",
          },
        }}
        containerStyle={{
          top: 80,
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
          <Skills />
          <Experience/>
          <Contact />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;
