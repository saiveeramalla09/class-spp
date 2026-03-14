import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COLORS } from '../data/mockData';
import { Avi } from '../components/ui';
import { pageVariants, itemVariants } from './HomePage';

export const VibePage = () => {
  const [posts, setPosts] = useState([
    { id: 1, text: "This app feels like our class got its own premium social media 🔥", name: "Anonymous", time: "2h ago", likes: 24, em: "🔥" },
    { id: 2, text: "Achievements section will save us during placements. Big W!", name: "Harsha", time: "5h ago", likes: 31, em: "👏" },
    { id: 3, text: "Can we add a meme section?? Our classroom moments need memes 💀", name: "Anonymous", time: "1d ago", likes: 47, em: "😭" },
    { id: 4, text: "CGPA tracker made me open my notes. Peer pressure hits different 😭", name: "Anonymous", time: "1d ago", likes: 19, em: "😂" },
    { id: 5, text: "GENIE gives actually good placement advice for a demo assistant. 🤖", name: "Sumana", time: "2d ago", likes: 16, em: "🤖" },
  ]);
  
  const [txt, setTxt] = useState("");
  const [anon, setAnon] = useState(true);
  const [liked, setLiked] = useState({});
  const ems = ["🔥", "💯", "😂", "👏", "🤯", "😭", "⚡", "🎉"];
  const [em, setEm] = useState("🔥");

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <motion.h1 variants={itemVariants} style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: 30, color: "#f0e8ff", marginBottom: 4 }}>
        Class Vibe <span style={{ background: `linear-gradient(135deg,${COLORS.p},${COLORS.v})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>💬</span>
      </motion.h1>
      <motion.p variants={itemVariants} style={{ fontFamily: "'Outfit',sans-serif", color: "rgba(200,180,255,.45)", marginBottom: 18, fontSize: 12 }}>
        Your space to share, appreciate, and vibe.
      </motion.p>
      
      <motion.div variants={itemVariants} className="glass" style={{ borderRadius: 20, padding: 18, marginBottom: 18, border: "1px solid rgba(139,92,246,.18)" }}>
        <textarea 
          value={txt} 
          onChange={(e) => setTxt(e.target.value)} 
          rows={3} 
          placeholder="Feedback, shoutout, anything... 💭" 
          style={{ width: "100%", padding: "11px 13px", borderRadius: 11, background: "rgba(255,255,255,.04)", border: "1px solid rgba(139,92,246,.2)", color: "#d4c5ff", fontFamily: "'Outfit',sans-serif", fontSize: 13, outline: "none", resize: "none", lineHeight: 1.6 }} 
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10, flexWrap: "wrap", gap: 7 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ display: "flex", gap: 3 }}>
              {ems.map((e) => (
                <button 
                  key={e} 
                  onClick={() => setEm(e)} 
                  style={{ width: 26, height: 26, borderRadius: 6, background: em === e ? "rgba(139,92,246,.3)" : "transparent", border: em === e ? "1px solid rgba(139,92,246,.5)" : "1px solid transparent", cursor: "pointer", fontSize: 14 }}
                >
                  {e}
                </button>
              ))}
            </div>
            <div onClick={() => setAnon(!anon)} style={{ display: "flex", alignItems: "center", gap: 5, cursor: "pointer" }}>
              <div style={{ width: 34, height: 18, borderRadius: 9, background: anon ? COLORS.v : "rgba(255,255,255,.1)", position: "relative", transition: "background .3s" }}>
                <div style={{ position: "absolute", top: 2, left: anon ? 16 : 2, width: 13, height: 13, borderRadius: "50%", background: "white", transition: "left .3s" }} />
              </div>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "rgba(200,180,255,.4)" }}>anon</span>
            </div>
          </div>
          <button 
            onClick={() => { 
              if (!txt.trim()) return; 
              setPosts((p) => [{ id: Date.now(), text: txt, name: anon ? "Anonymous" : "You", time: "just now", likes: 0, em }, ...p]); 
              setTxt(""); 
            }} 
            className="btn-p" 
            style={{ padding: "8px 20px", fontSize: 13 }}
          >
            Post ✦
          </button>
        </div>
      </motion.div>
      
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <AnimatePresence>
          {posts.map((p) => (
            <motion.div 
              key={p.id} 
              layoutId={`post-${p.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="glass card-lift" 
              style={{ borderRadius: 14, padding: "14px 16px", border: "1px solid rgba(139,92,246,.1)" }}
            >
              <div style={{ fontSize: 24, marginBottom: 8 }}>{p.em}</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "#d4c5ff", lineHeight: 1.7, marginBottom: 10 }}>{p.text}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Avi init={p.name === "Anonymous" ? "??" : p.name.slice(0, 2).toUpperCase()} size={24} col={COLORS.v} />
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "rgba(200,180,255,.35)" }}>{p.name} · {p.time}</span>
                </div>
                <button 
                  onClick={() => setLiked((l) => ({ ...l, [p.id]: !l[p.id] }))} 
                  style={{ background: liked[p.id] ? `${COLORS.p}18` : "rgba(255,255,255,.04)", border: `1px solid ${liked[p.id] ? COLORS.p + "44" : "rgba(255,255,255,.08)"}`, borderRadius: 18, padding: "3px 10px", cursor: "pointer", color: liked[p.id] ? COLORS.p : "rgba(200,180,255,.4)", fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 600 }}
                >
                  ♥ {p.likes + (liked[p.id] ? 1 : 0)}
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
