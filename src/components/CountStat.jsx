import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const CountStat = ({ val, label, icon, col, delay = 0 }) => {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    const end = parseFloat(val);
    let cur = 0;
    const step = end / 60; // 60 frames
    const t = setInterval(() => {
      cur += step;
      if (cur >= end) {
        setN(end);
        clearInterval(t);
      } else {
        setN(cur);
      }
    }, 16);
    return () => clearInterval(t);
  }, [val, isInView]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="glass card-lift" 
      style={{ 
        borderRadius: 20, 
        padding: "20px 14px", 
        textAlign: "center", 
        border: `1px solid ${col}33`, 
        boxShadow: `0 6px 28px ${col}12` 
      }}
    >
      <div style={{ fontSize: 24, marginBottom: 5 }}>{icon}</div>
      <div style={{ fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 22, color: col, lineHeight: 1 }}>
        {typeof val === "string" && val.includes(".") ? n.toFixed(1) : Math.floor(n)}
      </div>
      <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "rgba(200,180,255,.45)", marginTop: 3 }}>
        {label}
      </div>
    </motion.div>
  );
};
