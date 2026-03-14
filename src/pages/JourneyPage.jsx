import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE, COLORS } from '../data/mockData';
import { Pill } from '../components/ui';
import { pageVariants, itemVariants } from './HomePage';

export const JourneyPage = () => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <motion.h1 variants={itemVariants} style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: 30, color: "#f0e8ff", marginBottom: 4 }}>
      Our Journey <span style={{ background: `linear-gradient(135deg,${COLORS.v},${COLORS.p})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>📅</span>
    </motion.h1>
    <motion.p variants={itemVariants} style={{ fontFamily: "'Outfit',sans-serif", color: "rgba(200,180,255,.45)", marginBottom: 32, fontSize: 12 }}>
      4 years · 8 semesters · One legendary class.
    </motion.p>
    
    <div style={{ position: "relative" }}>
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="timeline-line" 
        style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, transform: "translateX(-50%)", background: `linear-gradient(180deg,${COLORS.v},${COLORS.c},${COLORS.p},${COLORS.y})`, opacity: 0.4, borderRadius: 2 }} 
      />
      
      {TIMELINE.map((t, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="timeline-row" 
          style={{ display: "flex", justifyContent: i % 2 === 0 ? "flex-start" : "flex-end", marginBottom: 32 }}
        >
          <div className="glass timeline-card" style={{ width: "45%", borderRadius: 18, padding: 20, position: "relative", border: `1px solid ${t.col}35`, boxShadow: `0 6px 28px ${t.col}0d` }}>
            <div className={i % 2 === 0 ? "timeline-dot-left" : "timeline-dot-right"} style={{ position: "absolute", top: 20, [i % 2 === 0 ? "right" : "left"]: -8, width: 14, height: 14, borderRadius: "50%", background: t.col, border: "3px solid #03020a", boxShadow: `0 0 12px ${t.col}66`, zIndex: 2 }} />
            <div style={{ display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
              <Pill label={t.sem} col={t.col} />
              <Pill label={t.period} col={t.col} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 11 }}>
              <span style={{ fontSize: 22 }}>{t.icon}</span>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: 16, color: "#f0e8ff" }}>{t.title}</span>
            </div>
            {t.events.map((e, j) => (
              <div key={j} style={{ display: "flex", gap: 6, marginBottom: 7, alignItems: "flex-start" }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: t.col, marginTop: 5, flexShrink: 0, boxShadow: `0 0 4px ${t.col}` }} />
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "rgba(200,180,255,.6)", lineHeight: 1.5 }}>{e}</div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
      
      {["Sems 5 & 6 — 2027", "Sems 7 & 8 — 2028–29"].map((s, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="timeline-row" 
          style={{ display: "flex", justifyContent: i % 2 === 0 ? "flex-start" : "flex-end", marginBottom: 20 }}
        >
          <div className="timeline-card" style={{ width: "45%", borderRadius: 18, padding: 20, background: "rgba(255,255,255,.02)", border: "2px dashed rgba(139,92,246,.15)", textAlign: "center" }}>
            <div style={{ fontSize: 28, marginBottom: 6 }}>🔮</div>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 13, color: "rgba(200,180,255,.4)" }}>{s}</div>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "rgba(200,180,255,.25)", marginTop: 2 }}>Being written now...</div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);
