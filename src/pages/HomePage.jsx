import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pill } from '../components/ui';
import { CountStat } from '../components/CountStat';
import { COLORS } from '../data/mockData';

// Animation variants for Framer Motion
export const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.2 } }
};

export const itemVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const STATS = [
  [63, "Students", "👨‍💻", COLORS.v, 0],
  [8, "Semesters", "📚", COLORS.c, 70],
  [15, "Achievements", "🏆", COLORS.y, 140],
  [12, "Hackathons", "⚡", COLORS.p, 210],
  ["8.9", "Avg CGPA", "📈", COLORS.g, 280],
  [100, "Skills", "🛠", COLORS.o, 350]
];

const RECENT_ACTIVITY = [
  { icon: "🏆", text: "Perni Kiran Kumar posted SIH Finalist certificate", t: "2h ago", col: COLORS.y },
  { icon: "📸", text: "5 new memories added to Hackathon Gallery", t: "4h ago", col: COLORS.c },
  { icon: "⭐", text: "Deena Dayal attended CVR hackathon starred by HOD", t: "1d ago", col: COLORS.v },
  { icon: "💬", text: "New: \"CGPA tracker hits different 😭\"", t: "1d ago", col: COLORS.p },
  { icon: "🎯", text: "Racharla Abhinav Teja added AWS Certification", t: "2d ago", col: COLORS.g },
];

export const HomePage = ({ setPage }) => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 2800);
    return () => clearInterval(t);
  }, []);

  const words = ["Innovators.", "Builders.", "Dreamers.", "Coders.", "Champions."];

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ paddingBottom: 20 }}>
      {/* Ultra-Modern Hero Banner */}
      <motion.div variants={itemVariants} style={{ display: "flex", gap: 24, marginBottom: 32, flexWrap: "wrap", alignItems: "stretch" }}>
        {/* Main Hero Card */}
        <div style={{ flex: "2 1 600px", position: "relative", borderRadius: 32, padding: "60px 50px", background: "radial-gradient(circle at top left, rgba(139,92,246,0.15), rgba(6,255,244,0.02) 70%)", border: "1px solid rgba(139,92,246,0.2)", overflow: "hidden", boxShadow: "inset 0 0 40px rgba(0,0,0,0.5), 0 20px 40px rgba(0,0,0,0.4)" }}>
          {/* Abstract background grids inside hero */}
          <div style={{ position: "absolute", right: -100, top: -100, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${COLORS.v}40 0%, transparent 60%)`, filter: "blur(40px)" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "32px 32px", opacity: 0.5, pointerEvents: "none", maskImage: "radial-gradient(circle at center, black 10%, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at center, black 10%, transparent 80%)" }} />
          
          <div style={{ position: "relative", zIndex: 1 }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
              style={{ display: "inline-block", padding: "6px 14px", borderRadius: 30, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(139,92,246,0.4)", fontFamily: "'Space Mono',monospace", fontSize: 11, fontWeight: 700, color: COLORS.c, marginBottom: 24, boxShadow: "0 0 16px rgba(6,255,244,0.2)" }}
            >
              <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: COLORS.g, marginRight: 8, boxShadow: `0 0 10px ${COLORS.g}`, animation: "pulse 2s infinite" }} />
              BATCH 2025–2029 // KMIT
            </motion.div>
            
            <h1 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, lineHeight: 1.05, marginBottom: 18, fontSize: "clamp(48px, 6vw, 76px)", letterSpacing: "-1px" }}>
              <span style={{ color: "#FFF" }}>The Core Of </span>
              <span style={{ position: "relative", display: "inline-block" }}>
                <span style={{ background: `linear-gradient(135deg,${COLORS.v},${COLORS.c})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 4px 16px rgba(139,92,246,0.4))" }}>CSE-G.</span>
              </span>
              <br />
              <motion.span 
                key={tick}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{ background: `linear-gradient(135deg,${COLORS.p},${COLORS.y})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "0.8em", display: "inline-block" }}
              >
                {words[tick % words.length]}
              </motion.span>
            </h1>
            
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 18, color: "rgba(200,180,255,.7)", maxWidth: 540, lineHeight: 1.7, marginBottom: 36, fontWeight: 400 }}>
              63 unstoppable minds pushing the boundaries of technology. A unified hub for our achievements, memories, and projects.
            </p>
            
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <button 
                className="btn-p" 
                onClick={() => setPage("squad")}
                style={{ padding: "16px 36px", fontSize: 17, display: "flex", gap: 10, alignItems: "center", boxShadow: "0 10px 30px rgba(139,92,246,0.5)" }}
              >
                Meet the Squad 🚀
              </button>
              <button 
                className="btn-g" 
                onClick={() => setPage("wins")}
                style={{ padding: "15px 32px", fontSize: 16 }}
              >
                Hall of Fame 🏆
              </button>
            </div>
          </div>
        </div>

        {/* Side Graphic Card */}
        <div style={{ flex: "1 1 400px", minWidth: 280, borderRadius: 32, padding: "30px", background: "linear-gradient(180deg, rgba(20,15,35,0.6) 0%, rgba(10,5,20,0.8) 100%)", border: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          {/* Animated 3D Floating Elements */}
          <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 350, display: "flex", alignItems: "center", justifyContent: "center", perspective: 1000 }}>
            <motion.div 
              animate={{ rotateY: [0, 10, -10, 0], rotateX: [0, 5, -5, 0], y: [-10, 10, -10] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: 140, height: 180, borderRadius: 24, background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", border: `1px solid rgba(139,92,246,0.3)`, position: "absolute", zIndex: 2, display: "flex", flexDirection: "column", padding: 20, boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(139,92,246,0.2)" }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 12, background: `linear-gradient(135deg, ${COLORS.v}, ${COLORS.c})`, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🔥</div>
              <div style={{ width: "80%", height: 6, borderRadius: 4, background: "rgba(255,255,255,0.2)", marginBottom: 10 }} />
              <div style={{ width: "60%", height: 6, borderRadius: 4, background: "rgba(255,255,255,0.1)", marginBottom: 20 }} />
              <div style={{ marginTop: "auto", fontFamily: "'Outfit',sans-serif", fontSize: 28, fontWeight: 900, color: "#fff" }}>63<span style={{ fontSize: 14, color: COLORS.c, marginLeft: 4 }}>Devs</span></div>
            </motion.div>
            
            <motion.div 
              animate={{ rotateY: [0, -15, 15, 0], y: [10, -10, 10] }} 
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ width: 120, height: 120, borderRadius: 24, background: "rgba(6,255,244,0.05)", backdropFilter: "blur(10px)", border: `1px solid rgba(6,255,244,0.3)`, position: "absolute", right: 20, top: 20, zIndex: 1, padding: 16, display: "flex", alignItems: "flex-end" }}
            >
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 16, fontWeight: 700, color: COLORS.c, filter: "drop-shadow(0 0 8px rgba(6,255,244,0.8))" }}>build()</div>
            </motion.div>

            <motion.div 
              animate={{ rotateZ: [0, 360] }} 
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", border: "1px dashed rgba(255,0,110,0.2)" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))", gap: 10, marginBottom: 20 }}>
        {STATS.map(([v, l, i, c, d]) => (
          <CountStat key={l} val={String(v)} label={l} icon={i} col={c} delay={d} />
        ))}
      </motion.div>

      {/* Enhanced Live Feed Container */}
      <motion.div variants={itemVariants} className="glass" style={{ borderRadius: 24, padding: "28px 32px", border: "1px solid rgba(139,92,246,.2)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" }} />
        
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.g, boxShadow: `0 0 12px ${COLORS.g}`, animation: "pulse 1.5s infinite" }} />
            <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: 18, color: "#FFF", letterSpacing: 0.5 }}>Live Activity Feed</span>
          </div>
          <button style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "6px 12px", color: "rgba(200,180,255,0.6)", fontSize: 11, fontFamily: "'Inter',sans-serif", cursor: "pointer", transition: "all 0.2s" }} onMouseOver={(e) => { e.currentTarget.style.background = "rgba(139,92,246,0.2)"; e.currentTarget.style.color = "#FFF" }} onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(200,180,255,0.6)" }}>View All</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {RECENT_ACTIVITY.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: 6, scale: 1.01, backgroundColor: "rgba(255,255,255,0.04)" }}
              transition={{ delay: 0.4 + (i * 0.1), type: "spring", stiffness: 300, damping: 25 }}
              style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 18px", background: "rgba(0,0,0,0.2)", border: `1px solid rgba(255,255,255,0.03)`, borderRadius: 16, cursor: "pointer", position: "relative", overflow: "hidden" }}
            >
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: `linear-gradient(180deg, transparent, ${a.col}, transparent)`, opacity: 0.5 }} />
              
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, ${a.col}22, transparent)`, border: `1px solid ${a.col}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, boxShadow: `0 4px 12px ${a.col}15` }}>
                {a.icon}
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: "#FAFAFA", fontWeight: 600, letterSpacing: 0.2, marginBottom: 4 }}>{a.text}</div>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: "rgba(200,180,255,.4)" }}>{a.t}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* App Feedback Section */}
      <motion.div variants={itemVariants} style={{ marginTop: 24, borderRadius: 24, padding: "32px", background: "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(6,255,244,0.03) 100%)", border: "1px dashed rgba(139,92,246,0.3)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: -30, bottom: -30, width: 150, height: 150, borderRadius: "50%", background: `radial-gradient(circle, ${COLORS.v}20 0%, transparent 70%)`, filter: "blur(20px)" }} />
        
        <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative", zIndex: 1 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <div style={{ fontSize: 24 }}>💭</div>
              <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: 20, color: "#f0e8ff" }}>App Feedback</h2>
            </div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "rgba(200,180,255,0.6)", maxWidth: 500, lineHeight: 1.5 }}>
              Got an idea? Found a bug? Or just want to say this app looks cool? Drop your anonymous feedback below. We read everything.
            </p>
          </div>
          
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <textarea 
              placeholder="Type your feedback here..." 
              style={{ flex: "1 1 300px", minHeight: 48, maxHeight: 120, background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "14px 18px", color: "#FFF", fontFamily: "'Inter',sans-serif", fontSize: 14, resize: "vertical", outline: "none", transition: "all 0.3s", boxShadow: "inset 0 2px 6px rgba(0,0,0,0.2)" }}
              onFocus={(e) => { e.target.style.borderColor = "rgba(139,92,246,0.6)"; e.target.style.background = "rgba(10,5,25,0.6)" }}
              onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(0,0,0,0.3)" }}
            />
            <button 
              style={{ background: `linear-gradient(135deg, ${COLORS.v}, ${COLORS.p})`, color: "#FFF", border: "none", borderRadius: 16, padding: "0 24px", fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "all 0.3s", boxShadow: "0 4px 16px rgba(139,92,246,0.3)" }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
              onClick={(e) => {
                const ta = e.currentTarget.previousSibling;
                if(ta.value.trim()) {
                  ta.value = "";
                  alert("Feedback sent successfully! 🚀");
                }
              }}
            >
              Send <span style={{ fontSize: 18 }}>✨</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
