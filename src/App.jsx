import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import './index.css';

import { Mesh } from "./components/Mesh";
import { AI } from "./components/AI";
import { COLORS } from "./data/mockData";

import { HomePage } from "./pages/HomePage";
import { SquadPage } from "./pages/SquadPage";
import { GalleryPage } from "./pages/GalleryPage";
import { WinsPage } from "./pages/WinsPage";
import { SkillsPage } from "./pages/SkillsPage";
import { JourneyPage } from "./pages/JourneyPage";
import { PlacementsPage } from "./pages/PlacementsPage";
import { VibePage } from "./pages/VibePage";

export default function App() {
  const [page, setPage] = useState("home");
  const [dark, setDark] = useState(true);
  const [ai, setAi] = useState(false);
  const [ready, setReady] = useState(false);

  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setReady(true);
      setTimeout(() => setIntro(false), 3000); // 3s intro sequence
    }, 100);
    return () => clearTimeout(t);
  }, []);

  const NAV = [
    { id: "home", label: "Home", icon: "⬡" },
    { id: "squad", label: "Squad", icon: "👾" },
    { id: "gallery", label: "Gallery", icon: "📸" },
    { id: "wins", label: "Wins", icon: "🏆" },
    { id: "skills", label: "Skills", icon: "🛠" },
    { id: "journey", label: "Journey", icon: "📅" },
    { id: "placements", label: "🚧", icon: "🔒" },
    { id: "vibe", label: "Vibe", icon: "💬" },
  ];

  const PAGES = {
    home: <HomePage setPage={setPage} />,
    squad: <SquadPage />,
    gallery: <GalleryPage />,
    wins: <WinsPage />,
    skills: <SkillsPage />,
    journey: <JourneyPage />,
    placements: <PlacementsPage />,
    vibe: <VibePage />,
  };

  if (!ready || intro) {
    return (
      <AnimatePresence>
        {intro && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8, ease: "easeInOut" } }}
            style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#03020a", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", overflow: "hidden" }}
          >
            {/* Background Orbs */}
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${COLORS.v}22 0%, transparent 70%)`, filter: "blur(40px)" }} />
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 2 }}
            >
              <div style={{ position: "relative", marginBottom: 24 }}>
                <motion.div 
                  initial={{ scale: 0.5, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 12 }}
                  style={{ width: 72, height: 72, borderRadius: 20, background: "linear-gradient(135deg,#8B5CF6,#06FFF4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, boxShadow: "0 0 40px rgba(139,92,246,0.6)", border: "2px solid rgba(255,255,255,0.2)" }}
                >
                  🎓
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  style={{ position: "absolute", inset: -10, borderRadius: 28, border: "1px solid rgba(6,255,244,0.3)", animation: "spinSlow 4s linear infinite" }}
                />
              </div>

              <motion.div style={{ overflow: "hidden" }}>
                <motion.h1 
                  initial={{ y: 40 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "clamp(32px, 5vw, 48px)", color: "#FFF", textAlign: "center", letterSpacing: "-0.5px", marginBottom: 8 }}
                >
                  Welcome to <span style={{ background: "linear-gradient(135deg,#60A5FA,#A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>CSE-G</span>
                </motion.h1>
              </motion.div>

              <motion.div style={{ overflow: "hidden" }}>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, color: "rgba(200, 180, 255, 0.7)", fontWeight: 500 }}
                >
                  Innovators. Builders. Dreamers.
                </motion.p>
              </motion.div>
              
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 140 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
                style={{ height: 2, background: "linear-gradient(90deg, transparent, rgba(6,255,244,0.8), transparent)", marginTop: 32, borderRadius: 2 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: dark ? "#03020a" : "#f0edff", color: dark ? "#f0e8ff" : "#0d0520", fontFamily: "'Outfit',sans-serif", transition: "background .4s" }}>
      <Mesh />
      
      <nav style={{ position: "sticky", top: 0, zIndex: 90, minHeight: 54, display: "flex", alignItems: "center", padding: "0 16px", background: dark ? "rgba(3,2,10,.9)" : "rgba(240,237,255,.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(139,92,246,.13)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginRight: "auto" }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg,#8B5CF6,#06FFF4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, boxShadow: "0 3px 12px rgba(139,92,246,.4)" }}>🎓</div>
          <div>
            <span style={{ fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 14, color: dark ? "#f0e8ff" : "#0d0520" }}>CSE-G</span>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 9, color: "rgba(139,92,246,.7)", marginLeft: 6 }}>KMIT · 2025–29</span>
          </div>
        </div>
        
        <div className="top-nav-links" style={{ display: "flex", alignItems: "center", gap: 6, marginRight: 8, overflowX: "auto", padding: "4px", background: "rgba(255,255,255,0.03)", borderRadius: 14 }}>
          {NAV.map((n) => (
            <button 
              key={n.id} 
              onClick={() => setPage(n.id)} 
              style={{ 
                padding: "8px 16px", 
                borderRadius: 11, 
                cursor: "pointer", 
                background: page === n.id ? "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,255,244,0.1))" : "transparent", 
                color: page === n.id ? "#FFF" : "rgba(200,180,255,.55)", 
                fontFamily: "'Outfit',sans-serif", 
                fontWeight: page === n.id ? 700 : 500, 
                fontSize: 13, 
                border: "1px solid", 
                borderColor: page === n.id ? "rgba(139,92,246,0.4)" : "transparent", 
                transition: "all .3s cubic-bezier(0.2, 0.8, 0.2, 1)", 
                whiteSpace: "nowrap",
                boxShadow: page === n.id ? "0 4px 12px rgba(139,92,246,0.15)" : "none",
                display: "flex",
                alignItems: "center",
                gap: 7
              }}
              onMouseOver={(e) => { if(page !== n.id) e.currentTarget.style.color = "#FFF" }}
              onMouseOut={(e) => { if(page !== n.id) e.currentTarget.style.color = "rgba(200,180,255,.55)" }}
            >
              <span style={{ fontSize: 15, filter: page === n.id ? `drop-shadow(0 0 5px ${COLORS.v})` : "none" }}>{n.icon}</span> {n.label}
            </button>
          ))}
        </div>
        
        <button 
          onClick={() => setDark(!dark)} 
          style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,.05)", border: "1px solid rgba(139,92,246,.2)", cursor: "pointer", fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>

      <main style={{ maxWidth: 1440, margin: "0 auto", padding: "32px 24px 60px", position: "relative", zIndex: 1, minHeight: "calc(100vh - 140px)", display: "flex", flexDirection: "column" }} key={page}>
        <div style={{ flex: 1, width: "100%" }}>
          <AnimatePresence mode="wait">
            {PAGES[page] || PAGES.home}
          </AnimatePresence>
        </div>
        
        {/* Global App Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: 60, paddingTop: 30, paddingBottom: 60, borderTop: "1px solid rgba(139,92,246,0.15)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 30 }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 24, height: 24, borderRadius: 6, background: "linear-gradient(135deg,#8B5CF6,#06FFF4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#000" }}>🎓</div>
              <span style={{ fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 14, color: "#f0e8ff" }}>CSE-G Hub</span>
            </div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(200,180,255,0.4)", maxWidth: 280, lineHeight: 1.6 }}>
              The central portal for Batch 2025-2029. Track wins, squad skills, and journey.
            </p>
          </div>
          
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 12, color: "#c4b5fd", textTransform: "uppercase", letterSpacing: 1 }}>Support</span>
              <a href="#" style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(200,180,255,0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color="#06FFF4"} onMouseOut={(e) => e.target.style.color="rgba(200,180,255,0.6)"}>Contact Class Rep</a>
              <a href="#" style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(200,180,255,0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color="#06FFF4"} onMouseOut={(e) => e.target.style.color="rgba(200,180,255,0.6)"}>App Feedback</a>
              <a href="#" style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(200,180,255,0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color="#06FFF4"} onMouseOut={(e) => e.target.style.color="rgba(200,180,255,0.6)"}>Report an Issue</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 12, color: "#c4b5fd", textTransform: "uppercase", letterSpacing: 1 }}>Links</span>
              <a href="#" style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(200,180,255,0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color="#8B5CF6"} onMouseOut={(e) => e.target.style.color="rgba(200,180,255,0.6)"}>KMIT Portal</a>
              <a href="#" style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(200,180,255,0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color="#8B5CF6"} onMouseOut={(e) => e.target.style.color="rgba(200,180,255,0.6)"}>Placement Cell</a>
              <a href="#" style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(200,180,255,0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color="#8B5CF6"} onMouseOut={(e) => e.target.style.color="rgba(200,180,255,0.6)"}>Syllabus PDF</a>
            </div>
          </div>
        </motion.footer>
      </main>

      <div className="bottom-nav" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 90, display: "flex", justifyContent: "space-around", padding: "7px 2px 12px", background: dark ? "rgba(3,2,10,.94)" : "rgba(240,237,255,.94)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(139,92,246,.1)" }}>
        {NAV.map((n) => (
          <button 
            key={n.id} 
            onClick={() => setPage(n.id)} 
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, padding: "2px 8px", border: "none", background: "transparent", cursor: "pointer", color: page === n.id ? COLORS.v : (dark ? "rgba(200,180,255,.35)" : "rgba(100,70,180,.4)"), transition: "all .2s" }}
          >
            <div style={{ fontSize: 19, filter: page === n.id ? `drop-shadow(0 0 5px ${COLORS.v})` : "none" }}>{n.icon}</div>
            <div style={{ fontSize: 10, fontFamily: "'Outfit',sans-serif", fontWeight: page === n.id ? 800 : 400 }}>{n.label}</div>
          </button>
        ))}
      </div>

      <button 
        onClick={() => setAi(!ai)} 
        style={{ 
          position: "fixed", right: 16, bottom: 80, zIndex: 95, 
          width: 50, height: 50, borderRadius: "50%", 
          background: ai ? "linear-gradient(135deg,#FF006E,#8B5CF6)" : "linear-gradient(135deg,#8B5CF6,#06FFF4)", 
          border: "none", cursor: "pointer", fontSize: 20, 
          boxShadow: ai ? "0 6px 24px rgba(255,0,110,.4)" : "0 6px 24px rgba(139,92,246,.4)", 
          transition: "all .35s cubic-bezier(.34,1.56,.64,1)", 
          display: "flex", alignItems: "center", justifyContent: "center", 
          transform: ai ? "rotate(180deg)" : "scale(1)", 
          animation: ai ? "" : "neonPulse 2.5s ease-in-out infinite" 
        }}
      >
        {ai ? "✕" : "🧞"}
      </button>

      <AnimatePresence>
        {!ai && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            style={{ 
              position: "fixed", right: 74, bottom: 92, zIndex: 94, 
              background: "rgba(10,5,28,.96)", border: "1px solid rgba(139,92,246,.35)", 
              borderRadius: 10, padding: "6px 11px", pointerEvents: "none", 
              fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "#c4b5fd", fontWeight: 600, whiteSpace: "nowrap" 
            }}
          >
            Ask GENIE ✨
            <div style={{ position: "absolute", right: -5, top: "50%", transform: "translateY(-50%)", width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "5px solid rgba(139,92,246,.5)" }} />
          </motion.div>
        )}
      </AnimatePresence>

      <AI open={ai} onClose={() => setAi(false)} />
    </div>
  );
}
