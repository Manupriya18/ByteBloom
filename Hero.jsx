import React, { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const text = "Artist • Dreamer • Writer • Tech Enthusiast";
  const [displayedText, setDisplayedText] = useState("");
  const [downloads, setDownloads] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(typing);
    }, 80);

    // Load previous count from localStorage
    const savedCount = localStorage.getItem("resumeDownloads");
    if (savedCount) setDownloads(Number(savedCount));

    return () => clearInterval(typing);
  }, []);

  const handleDownload = () => {
    const newCount = downloads + 1;
    setDownloads(newCount);
    localStorage.setItem("resumeDownloads", newCount);

    // Show confirmation
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Manupriya</h1>
        <p className="typing">{displayedText}</p>
        <a
          href="/resume.pdf"
          download="Manupriya_Resume.pdf"
          className="btn resume-btn"
          onClick={handleDownload}
        >
          📄 Download Resume
        </a>
        <p className="download-count">Downloaded {downloads} times</p>
      </div>

      {/* Toast Notification */}
      {showToast && <div className="toast">✅ Download Started</div>}
    </section>
  );
}

export default Hero;
