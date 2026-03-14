import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { STUDENTS, SKILL_LIST, COLORS } from '../data/mockData';
import { pageVariants, itemVariants } from './HomePage';

export const SkillsPage = () => {
  const [skills, setSkills] = useState([
    { skill: "Python", count: 55, col: COLORS.c }, { skill: "C/C++", count: 63, col: COLORS.v }, { skill: "Java", count: 51, col: COLORS.o },
    { skill: "React/JS", count: 36, col: COLORS.c }, { skill: "DSA", count: 59, col: COLORS.p }, { skill: "ML/AI", count: 27, col: COLORS.y },
    { skill: "SQL/DB", count: 48, col: COLORS.g }, { skill: "Git", count: 58, col: COLORS.o },
  ].map((s) => ({ ...s, pct: Math.round(s.count / 63 * 100) })));

  const [anim, setAnim] = useState(false);
  const [editIdx, setEditIdx] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setAnim(true), 150);
    return () => clearTimeout(t);
  }, []);

  const matchingStudents = STUDENTS.filter((s) => s.skills.some((sk) => sk.toLowerCase().includes(search.toLowerCase())));

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <motion.h1 variants={itemVariants} style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: 30, color: "#f0e8ff", marginBottom: 4 }}>
        Skills Radar <span style={{ background: `linear-gradient(135deg,${COLORS.g},${COLORS.c})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>🛠</span>
      </motion.h1>
      <motion.p variants={itemVariants} style={{ fontFamily: "'Outfit',sans-serif", color: "rgba(200,180,255,.45)", marginBottom: 20, fontSize: 12 }}>
        What CSE-G knows — tap count to edit live.
      </motion.p>

      <motion.div variants={itemVariants} className="glass" style={{ borderRadius: 20, padding: 22, marginBottom: 18, border: "1px solid rgba(139,92,246,.18)" }}>
        {skills.map((sk, i) => (
          <motion.div
            key={sk.skill}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i, type: "spring", stiffness: 100 }}
            style={{ marginBottom: 15 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 13, color: "#d4c5ff" }}>{sk.skill}</span>
                {editIdx === i ? (
                  <input
                    type="number"
                    min="0" max="63"
                    value={sk.count}
                    autoFocus
                    onChange={(e) => setSkills((s) => s.map((x, j) => j === i ? { ...x, count: +e.target.value, pct: Math.round(+e.target.value / 63 * 100) } : x))}
                    onBlur={() => setEditIdx(null)}
                    style={{ width: 46, background: "rgba(255,255,255,.06)", border: `1px solid ${sk.col}44`, borderRadius: 6, padding: "2px 6px", color: sk.col, fontFamily: "'Space Mono',monospace", fontSize: 11, outline: "none" }}
                  />
                ) : (
                  <span onClick={() => setEditIdx(i)} title="Edit" style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: sk.col, cursor: "pointer", background: `${sk.col}14`, padding: "1px 6px", borderRadius: 5, border: `1px solid ${sk.col}28` }}>{sk.count}/63</span>
                )}
              </div>
              <span style={{ fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 13, color: sk.col }}>{sk.pct}%</span>
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,.05)", borderRadius: 10, overflow: "hidden" }}>
              <div style={{ height: "100%", borderRadius: 10, background: `linear-gradient(90deg,${sk.col},${sk.col}66)`, width: anim ? `${sk.pct}%` : "0%", transition: "width 1.3s cubic-bezier(.4,0,.2,1)", boxShadow: `0 0 10px ${sk.col}44` }} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="glass" style={{ borderRadius: 20, padding: 22, border: "1px solid rgba(139,92,246,.18)" }}>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: 16, color: "#f0e8ff", marginBottom: 12 }}>🔍 Who Knows X?</div>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <input className="inp" style={{ flex: 1, fontSize: 13, padding: "9px 13px" }} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search a skill..." />
          <button className="btn-p" style={{ padding: "10px 16px", whiteSpace: "nowrap", fontSize: 13 }}>Go</button>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: search ? 14 : 0 }}>
          {SKILL_LIST.slice(0, 12).map((sk) => (
            <button key={sk} onClick={() => setSearch(sk)} style={{ padding: "4px 12px", background: "rgba(139,92,246,.08)", border: "1px solid rgba(139,92,246,.18)", borderRadius: 30, color: "rgba(200,180,255,.6)", fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: "'Outfit',sans-serif", transition: "all 0.2s" }}>
              {sk}
            </button>
          ))}
        </div>

        {search && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ padding: 12, background: "rgba(139,92,246,.08)", borderRadius: 12, border: "1px solid rgba(139,92,246,.18)" }}
          >
            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: COLORS.c, fontWeight: 700, marginBottom: 8 }}>{matchingStudents.length} students know "{search}"</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {matchingStudents.slice(0, 12).map((s) => (
                <div key={s.id} style={{ display: "flex", alignItems: "center", gap: 4, background: "rgba(255,255,255,.04)", border: `1px solid ${s.color}28`, borderRadius: 18, padding: "3px 9px" }}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", background: `${s.color}33`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 700, color: s.color, fontFamily: "'Space Mono',monospace" }}>{s.avatar}</div>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "#d4c5ff" }}>{s.name.split(" ")[0]}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
