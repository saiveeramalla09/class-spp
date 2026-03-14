import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COLORS } from '../data/mockData';
import { Pill } from '../components/ui';
import { pageVariants, itemVariants } from './HomePage';

export const PlacementsPage = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", textAlign: "center", padding: "30px 16px" }}>
      <motion.div variants={itemVariants} style={{ position: "relative", marginBottom: 24 }}>
        <div className="float" style={{ fontSize: 80 }}>🚧</div>
        <div style={{ position: "absolute", inset: -24, borderRadius: "50%", background: `radial-gradient(circle,${COLORS.y}15,transparent 70%)`, animation: "pulse 2.5s ease-in-out infinite" }} />
      </motion.div>
      
      <motion.div variants={itemVariants} style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
        <Pill label="LOCKED 🔒" col={COLORS.p} />
        <Pill label="UNLOCKS YEAR 3" col={COLORS.y} />
        <Pill label="2027–28" col={COLORS.c} />
      </motion.div>
      
      <motion.h1 variants={itemVariants} style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "clamp(24px,4vw,42px)", color: "#f0e8ff", marginBottom: 8, lineHeight: 1.1 }}>
        Placement Tracker
      </motion.h1>
      
      <motion.p variants={itemVariants} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 17, color: COLORS.y, fontWeight: 700, marginBottom: 6 }}>
        Building something massive... 🚀
      </motion.p>
      
      <motion.p variants={itemVariants} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "rgba(200,180,255,.55)", maxWidth: 440, lineHeight: 1.8, marginBottom: 28 }}>
        Goes live in <strong style={{ color: "#f0e8ff" }}>3rd Year</strong> with company dashboards, offer letters & placement stats.<br />
        <strong style={{ color: COLORS.c }}>For now: Stack skills. Build projects. Collect certs. 😤</strong>
      </motion.p>
      
      <motion.div variants={itemVariants} className="glass" style={{ borderRadius: 18, padding: 22, maxWidth: 380, width: "100%", border: `1px solid ${COLORS.y}25` }}>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 15, color: "#f0e8ff", marginBottom: 3 }}>
          🔔 Notify Me When It Launches
        </div>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "rgba(200,180,255,.4)", marginBottom: 12 }}>
          We'll ping you when placements kick off in Year 3.
        </div>
        
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div 
              key="done"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ padding: "11px 16px", background: `${COLORS.g}14`, border: `1px solid ${COLORS.g}33`, borderRadius: 10, color: COLORS.g, fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 13 }}
            >
              ✅ You're on the list! See you in Year 3 😄
            </motion.div>
          ) : (
            <motion.div 
              key="form"
              exit={{ scale: 0.9, opacity: 0 }}
              style={{ display: "flex", gap: 7 }}
            >
              <input 
                className="inp" 
                style={{ flex: 1, fontSize: 13, padding: "9px 13px" }} 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="your@kmit.in" 
              />
              <button 
                onClick={() => email && setDone(true)} 
                className="btn-p" 
                style={{ padding: "10px 14px", whiteSpace: "nowrap", fontSize: 12 }}
              >
                Notify
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
