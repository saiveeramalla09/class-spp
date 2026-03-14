import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STUDENTS, SKILL_LIST, COLORS } from '../data/mockData';
import { Pill, Avi } from '../components/ui';
import { pageVariants, itemVariants } from './HomePage';

export const SquadPage = () => {
  const [students, setStudents] = useState(STUDENTS);
  const [search, setSearch] = useState("");
  const [sel, setSel] = useState(null);
  
  const [editId, setEditId] = useState(null);
  const [ed, setEd] = useState({});
  const [ns, setNs] = useState("");
  
  const filtered = students.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()) || s.roll.toLowerCase().includes(search.toLowerCase()) || s.skills.some((sk) => sk.toLowerCase().includes(search.toLowerCase())));
  
  const openEdit = (s, e) => { 
    e.stopPropagation(); 
    setEditId(s.id); 
    setEd({ ...s }); 
    setSel(null); 
  };
  
  const save = () => { 
    setStudents((ss) => ss.map((s) => s.id === editId ? { ...s, ...ed } : s)); 
    setEditId(null); 
  };
  
  const addSk = () => { 
    if (ns.trim() && !ed.skills?.includes(ns.trim())) { 
      setEd((d) => ({ ...d, skills: [...(d.skills || []), ns.trim()] })); 
      setNs(""); 
    } 
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" layout>
      {/* Edit Profile Modal Container (Only render when active) */}
      <AnimatePresence>
        {editId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,.8)", backdropFilter: "blur(10px)" }} 
            onClick={() => setEditId(null)}
          >
            <motion.div 
               initial={{ scale: 0.9, opacity: 0, y: 20 }}
               animate={{ scale: 1, opacity: 1, y: 0 }}
               exit={{ scale: 0.9, opacity: 0, y: 20 }}
               transition={{ type: "spring", damping: 25, stiffness: 300 }}
               onClick={(e) => e.stopPropagation()} 
               style={{ width: "min(480px,95vw)", maxHeight: "85vh", overflowY: "auto", background: "rgba(10,5,28,.99)", border: "1px solid rgba(139,92,246,.5)", borderRadius: 22, padding: 28 }}
            >
              <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: 20, color: "#f0e8ff", marginBottom: 20 }}>✏️ Edit Your Profile</div>
              
              {/* Form Content */}
              {[["Name", "name"], ["Bio", "bio"], ["Roll No", "roll"]].map(([l, k]) => (
                <div key={k} style={{ marginBottom: 12 }}>
                  <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "rgba(200,180,255,.4)", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: 5 }}>{l}</label>
                  <input className="inp" value={ed[k] || ""} onChange={(e) => setEd((d) => ({ ...d, [k]: e.target.value }))} />
                </div>
              ))}
              
              <div style={{ marginBottom: 12 }}>
                <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "rgba(200,180,255,.4)", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: 5 }}>CGPA</label>
                <input className="inp" type="number" step=".1" min="0" max="10" value={ed.cgpa || ""} onChange={(e) => setEd((d) => ({ ...d, cgpa: e.target.value }))} />
              </div>
              
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "rgba(200,180,255,.4)", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Skills</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
                  {ed.skills?.map((sk) => <Pill key={sk} label={sk} col={ed.color || COLORS.v} onX={() => setEd((d) => ({ ...d, skills: d.skills.filter((x) => x !== sk) }))} />)}
                </div>
                
                <div style={{ display: "flex", gap: 7, marginBottom: 7 }}>
                  <input className="inp" style={{ flex: 1, fontSize: 13, padding: "9px 13px" }} placeholder="Add custom skill..." value={ns} onChange={(e) => setNs(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addSk()} />
                  <button onClick={addSk} style={{ padding: "0 15px", background: `${ed.color || COLORS.v}22`, border: `1px solid ${ed.color || COLORS.v}44`, borderRadius: 10, color: ed.color || COLORS.v, fontWeight: 800, cursor: "pointer", fontFamily: "'Outfit',sans-serif", fontSize: 16 }}>+</button>
                </div>
                
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {SKILL_LIST.filter((sk) => !ed.skills?.includes(sk)).slice(0, 10).map((sk) => (
                    <button key={sk} onClick={() => setEd((d) => ({ ...d, skills: [...(d.skills || []), sk] }))} style={{ padding: "3px 10px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.09)", borderRadius: 20, color: "rgba(200,180,255,.5)", fontSize: 11, cursor: "pointer", fontFamily: "'Outfit',sans-serif" }}>+ {sk}</button>
                  ))}
                </div>
              </div>
              
              <div style={{ display: "flex", gap: 9 }}>
                <button className="btn-p" onClick={save} style={{ flex: 1 }}>Save ✓</button>
                <button className="btn-g" onClick={() => setEditId(null)}>Cancel</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div variants={itemVariants} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
        <div>
          <h1 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: 30, color: "#f0e8ff" }}>The Squad <span style={{ background: `linear-gradient(135deg,${COLORS.v},${COLORS.c})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>👾</span></h1>
          <p style={{ fontFamily: "'Outfit',sans-serif", color: "rgba(200,180,255,.4)", fontSize: 12, marginTop: 2 }}>63 students · Click card to expand · ✏️ to edit</p>
        </div>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: COLORS.c, background: `${COLORS.c}10`, border: `1px solid ${COLORS.c}30`, borderRadius: 8, padding: "6px 11px" }}>{filtered.length}/63</div>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <input className="inp" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="🔍  Search by name, roll or skill..." style={{ marginBottom: 18 }} />
      </motion.div>
      
      <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr 1fr 1fr ))", gap: 12 }}>
        <AnimatePresence>
          {filtered.map((s, i) => (
            <motion.div 
              key={s.id} 
              layoutId={`card-${s.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass card-lift" 
              onClick={() => setSel(sel?.id === s.id ? null : s)} 
              style={{ borderRadius: 18, padding: 18, border: sel?.id === s.id ? `1px solid ${s.color}77` : "1px solid rgba(139,92,246,.13)", boxShadow: sel?.id === s.id ? `0 0 24px ${s.color}18` : "none" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 11 }}>
                <Avi init={s.avatar} size={44} col={s.color} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 13, color: "#f0e8ff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.name}</div>
                  <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: "rgba(200,180,255,.35)", marginTop: 1 }}>{s.roll}</div>
                </div>
                <button onClick={(e) => openEdit(s, e)} style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 7, padding: "4px 7px", color: "rgba(200,180,255,.4)", cursor: "pointer", fontSize: 11 }}>✏️</button>
              </div>
              
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "rgba(200,180,255,.5)", marginBottom: 10, lineHeight: 1.5 }}>{s.bio}</p>
              
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 11 }}>
                {s.skills.slice(0, 3).map((sk) => <Pill key={sk} label={sk} col={s.color} />)}
                {s.skills.length > 3 && <Pill label={`+${s.skills.length - 3}`} col={COLORS.c} />}
              </div>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: s.color, boxShadow: `0 0 7px ${s.color}` }} />
                  <span style={{ fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 17, color: s.color }}>{s.cgpa}</span>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "rgba(200,180,255,.35)" }}>CGPA</span>
                </div>
                <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "rgba(200,180,255,.35)" }}>🏆 {s.achievements}</span>
              </div>
              
              <AnimatePresence>
                {sel?.id === s.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(139,92,246,.12)", display: "flex", gap: 6 }}>
                      {["GitHub", "LinkedIn", "LeetCode"].map((l) => (
                        <button key={l} style={{ flex: 1, padding: "6px 2px", background: `${s.color}13`, border: `1px solid ${s.color}28`, borderRadius: 8, color: s.color, fontSize: 10, fontWeight: 700, cursor: "pointer", fontFamily: "'Outfit',sans-serif" }}>{l}</button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
