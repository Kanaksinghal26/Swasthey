import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="app">
          <video autoPlay muted>
            <source src="/Videos/swasthey_video.mp4" type="video/mp4" />
          </video>
        </div>
      ) : (
        <>
        <Navbar />
        <Section />
        <Footer />
        </>

      )}
    </div>
  );
}

export default App;
