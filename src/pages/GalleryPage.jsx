import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY, COLORS } from '../data/mockData';
import { Pill } from '../components/ui';
import { pageVariants, itemVariants } from './HomePage';

export const GalleryPage = () => {
  const [cat, setCat] = useState("All");
  const cats = ["All", "Fests", "Hackathons", "Classroom", "Workshops", "Visits", "Sports"];
  const fil = cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <motion.h1 variants={itemVariants} style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: 30, color: "#f0e8ff", marginBottom: 4 }}>
        Memory Vault <span style={{ background: `linear-gradient(135deg,${COLORS.p},${COLORS.y})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>📸</span>
      </motion.h1>
      <motion.p variants={itemVariants} style={{ fontFamily: "'Outfit',sans-serif", color: "rgba(200,180,255,.45)", marginBottom: 18, fontSize: 12 }}>
        Every frame from 2025 to 2029.
      </motion.p>
      
      <motion.div variants={itemVariants} style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 20 }}>
        {cats.map((c) => (
          <button 
            key={c} 
            onClick={() => setCat(c)} 
            style={{ 
              padding: "6px 16px", 
              borderRadius: 30, 
              fontFamily: "'Outfit',sans-serif", 
              fontWeight: 700, 
              fontSize: 12, 
              cursor: "pointer", 
              transition: "all .25s", 
              background: cat === c ? `linear-gradient(135deg,${COLORS.v},${COLORS.c})` : "rgba(255,255,255,.04)", 
              color: cat === c ? "#03020a" : "rgba(200,180,255,.55)", 
              border: cat === c ? "none" : "1px solid rgba(139,92,246,.18)" 
            }}
          >
            {c}
          </button>
        ))}
      </motion.div>
      
      <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 12 }}>
        <AnimatePresence mode="popLayout">
          {fil.map((g) => (
            <motion.div 
              key={g.id} 
              layoutId={`gallery-${g.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="glass card-lift" 
              style={{ borderRadius: 14, overflow: "hidden", border: `1px solid ${g.col}28` }}
            >
              <div style={{ padding: "30px 16px", background: `linear-gradient(135deg,${g.col}16,${g.col}05)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 50, position: "relative", borderBottom: `1px solid ${g.col}18` }}>
                {g.em}
                <div style={{ position: "absolute", top: 7, left: 7 }}><Pill label={g.cat} col={g.col} /></div>
              </div>
              <div style={{ padding: "12px 14px" }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 13, color: "#f0e8ff", marginBottom: 3 }}>{g.title}</div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "rgba(200,180,255,.45)", lineHeight: 1.5 }}>{g.desc}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      <motion.div variants={itemVariants} style={{ marginTop: 16, borderRadius: 18, padding: 30, textAlign: "center", background: "rgba(139,92,246,.04)", border: "2px dashed rgba(139,92,246,.2)" }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>📤</div>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: 17, color: "#f0e8ff", marginBottom: 4 }}>Contribute a Memory</div>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(200,180,255,.4)", marginBottom: 16 }}>Upload pics & vids — needs class rep approval.</div>
        <button className="btn-p">📎 Upload</button>
      </motion.div>
    </motion.div>
  );
};
