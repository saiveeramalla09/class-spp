import React from 'react';

export const Mesh = () => (
  <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none", background: "#050505" }}>
    {/* Base Gradients */}
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 10% 20%,rgba(139,92,246,.12) 0%,transparent 60%)" }} />
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 90% 80%,rgba(6,255,244,.08) 0%,transparent 60%)" }} />
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 40% at 50% 50%,rgba(255,0,110,.04) 0%,transparent 70%)" }} />
    
    {/* Floating Orbs */}
    {[0, 1, 2].map((i) => (
      <div 
        key={i} 
        style={{ 
          position: "absolute", 
          width: [500, 400, 450][i], 
          height: [500, 400, 450][i], 
          borderRadius: "50%", 
          background: [
            `radial-gradient(circle,rgba(139,92,246,.1) 0%,transparent 70%)`, 
            `radial-gradient(circle,rgba(6,255,244,.08) 0%,transparent 70%)`, 
            `radial-gradient(circle,rgba(255,0,110,.06) 0%,transparent 70%)`
          ][i], 
          top: ["-10%", "60%", "30%"][i], 
          left: ["-5%", "65%", "35%"][i], 
          animation: `blobFloat ${[15, 20, 18][i]}s ease-in-out infinite alternate`, 
          animationDelay: `${[0, -4, -8][i]}s`,
          filter: "blur(60px)",
          mixBlendMode: "screen"
        }} 
      />
    ))}
    
    {/* Subtle Grid Overlay */}
    <div style={{ 
      position: "absolute", 
      inset: 0, 
      backgroundImage: "linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px)", 
      backgroundSize: "64px 64px", 
      maskImage: "radial-gradient(ellipse at center, black 40%, transparent 100%)",
      WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 100%)"
    }} />
  </div>
);
