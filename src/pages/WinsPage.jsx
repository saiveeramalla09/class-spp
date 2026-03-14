import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WINS, STUDENTS, COLORS } from '../data/mockData';
import { Pill, Avi } from '../components/ui';
import { pageVariants, itemVariants } from './HomePage';

export const WinsPage = () => {
  const [tab, setTab] = useState("All");
  const [liked, setLiked] = useState({});
  const [data, setData] = useState(WINS);
  const [addOpen, setAddOpen] = useState(false);
  const [form, setForm] = useState({ student: "", title: "", org: "", type: "Hackathon", date: "" });
  
  const types = ["All", "Hackathon", "Certification", "Competition"];
  const tCol = { Hackathon: COLORS.y, Certification: COLORS.c, Competition: COLORS.v };
  const fil = tab === "All" ? data : data.filter((a) => a.type === tab);
  
  // Only include the requested specific students in the top achievers list
  const specificNames = [
    "Perni Kiran Kumar", "Deena Dayal Reddy Danapana", "Racharla Abhinav Teja", "Prattipati Sandeep", "Miryala Navtej", "Dabbeta Harshavardhan Reddy", "Chakilam Naman", 
    "M Varun", "Neela Vishal", "M Sai Charan", "Akula Sumana", "Chindam Mounisha", "Belli Sravani", "Mohammad Abdul Rauf", 
    "Mohammad Safoorabathul", "Fatima Tanzeem"
  ];
  const top = [...STUDENTS]
    .filter(s => specificNames.includes(s.name))
    .sort((a, b) => b.achievements - a.achievements)
    .slice(0, 5);
    
  const podCol = [COLORS.y, COLORS.c, COLORS.o, COLORS.v, COLORS.v];

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Modal matching standard app aesthetics but with framer-motion popIn */}
      <AnimatePresence>
        {addOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,.8)", backdropFilter: "blur(10px)" }} 
            onClick={() => setAddOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} 
              style={{ width: "min(460px,95vw)", background: "rgba(10,5,28,.99)", border: "1px solid rgba(139,92,246,.5)", borderRadius: 22, padding: 28 }}
            >
              <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: 20, color: "#f0e8ff", marginBottom: 20 }}>🏆 Post Achievement</div>
              {[["Your Name", "student"], ["Achievement Title", "title"], ["Organisation", "org"], ["Date", "date"]].map(([p, k]) => (
                <div key={k} style={{ marginBottom: 11 }}>
                  <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "rgba(200,180,255,.4)", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: 4 }}>{p}</label>
                  <input className="inp" placeholder={p} value={form[k]} onChange={(e) => setForm((f) => ({ ...f, [k]: e.target.value }))} />
                </div>
              ))}
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "rgba(200,180,255,.4)", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: 7 }}>Type</label>
                <div style={{ display: "flex", gap: 7 }}>
                  {["Hackathon", "Certification", "Competition"].map((t) => (
                    <button 
                      key={t} 
                      onClick={() => setForm((f) => ({ ...f, type: t }))} 
                      style={{ 
                        flex: 1, 
                        padding: "8px 4px", 
                        borderRadius: 9, 
                        fontFamily: "'Outfit',sans-serif", 
                        fontSize: 11, 
                        fontWeight: 700, 
                        cursor: "pointer", 
                        transition: "all .2s", 
                        background: form.type === t ? `${tCol[t]}22` : "rgba(255,255,255,.04)", 
                        border: `1px solid ${form.type === t ? tCol[t] + "55" : "rgba(255,255,255,.09)"}`, 
                        color: form.type === t ? tCol[t] : "rgba(200,180,255,.45)" 
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: 9 }}>
                <button 
                  className="btn-p" 
                  onClick={() => { 
                    if (!form.student || !form.title) return; 
                    setData((d) => [{ id: Date.now(), ...form, av: form.student.slice(0, 2).toUpperCase(), color: tCol[form.type] || COLORS.v, starred: false, likes: 0 }, ...d]); 
                    setForm({ student: "", title: "", org: "", type: "Hackathon", date: "" }); 
                    setAddOpen(false); 
                  }} 
                  style={{ flex: 1 }}
                >
                  Post ✦
                </button>
                <button className="btn-g" onClick={() => setAddOpen(false)}>Cancel</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div variants={itemVariants} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
        <div>
          <h1 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: 30, color: "#f0e8ff" }}>
            Hall of Wins <span style={{ background: `linear-gradient(135deg,${COLORS.y},${COLORS.o})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>🏆</span>
          </h1>
          <p style={{ fontFamily: "'Outfit',sans-serif", color: "rgba(200,180,255,.4)", fontSize: 12, marginTop: 2 }}>Every cert & win counts during placements.</p>
        </div>
        <button className="btn-p" onClick={() => setAddOpen(true)} style={{ fontSize: 13, padding: "10px 20px" }}>+ Post Win</button>
      </motion.div>

      <motion.div variants={itemVariants} className="glass" style={{ borderRadius: 18, padding: 20, marginBottom: 18, border: "1px solid rgba(139,92,246,.18)" }}>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: 16, color: "#f0e8ff", marginBottom: 12 }}>⚡ Top Achievers</div>
        {top.map((s, i) => (
          <div key={s.id} style={{ display: "flex", alignItems: "center", gap: 11, padding: "9px 0", borderBottom: i < 4 ? "1px solid rgba(139,92,246,.08)" : "none" }}>
            <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${podCol[i]}20`, border: `1.5px solid ${podCol[i]}55`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 11, color: podCol[i], flexShrink: 0 }}>{i + 1}</div>
            <Avi init={s.avatar} size={30} col={podCol[i]} />
            <div style={{ flex: 1, fontFamily: "'Outfit',sans-serif", fontWeight: 600, color: "#d4c5ff", fontSize: 13 }}>{s.name}</div>
            <div style={{ fontFamily: "'Space Mono',monospace", fontWeight: 700, color: podCol[i], fontSize: 14 }}>{s.achievements} <span style={{ fontSize: 9, color: "rgba(200,180,255,.3)" }}>pts</span></div>
          </div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} style={{ display: "flex", gap: 7, marginBottom: 14, flexWrap: "wrap" }}>
        {types.map((t) => (
          <button 
            key={t} 
            onClick={() => setTab(t)} 
            style={{ 
              padding: "6px 14px", 
              borderRadius: 30, 
              fontFamily: "'Outfit',sans-serif", 
              fontWeight: 700, 
              fontSize: 12, 
              cursor: "pointer", 
              transition: "all .2s", 
              background: tab === t ? `linear-gradient(135deg,${COLORS.v},${COLORS.c})` : "rgba(255,255,255,.04)", 
              color: tab === t ? "#03020a" : "rgba(200,180,255,.5)", 
              border: tab === t ? "none" : "1px solid rgba(139,92,246,.14)" 
            }}
          >
            {t}
          </button>
        ))}
      </motion.div>

      <motion.div layout style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <AnimatePresence>
          {fil.map((a) => {
            const c = a.color || tCol[a.type] || COLORS.v;
            return (
              <motion.div 
                key={a.id} 
                layoutId={`win-${a.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="glass card-lift" 
                style={{ borderRadius: 14, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, border: a.starred ? `1px solid ${c}44` : "1px solid rgba(139,92,246,.11)", position: "relative" }}
              >
                {a.starred && <div style={{ position: "absolute", right: 14, top: 12, fontSize: 13 }}>⭐</div>}
                <Avi init={a.av} size={40} col={c} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 13, color: "#f0e8ff", marginBottom: 2 }}>{a.title}</div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "rgba(200,180,255,.42)" }}>{a.student} · {a.org} · {a.date}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                  <Pill label={a.type} col={c} />
                  <button 
                    onClick={() => setLiked((l) => ({ ...l, [a.id]: !l[a.id] }))} 
                    style={{ 
                      background: liked[a.id] ? `${COLORS.p}18` : "rgba(255,255,255,.04)", 
                      border: `1px solid ${liked[a.id] ? COLORS.p + "44" : "rgba(255,255,255,.08)"}`, 
                      borderRadius: 20, 
                      padding: "3px 10px", 
                      cursor: "pointer", 
                      color: liked[a.id] ? COLORS.p : "rgba(200,180,255,.4)", 
                      fontFamily: "'Outfit',sans-serif", 
                      fontSize: 11, 
                      fontWeight: 600 
                    }}
                  >
                    ♥ {a.likes + (liked[a.id] ? 1 : 0)}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
