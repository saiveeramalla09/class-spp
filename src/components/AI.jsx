import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COLORS } from '../data/mockData';
import { Send, X, Sparkles, Bot } from 'lucide-react';

const GENIE_RESPONSES = [
  {
    test: /(placement|resume|interview|job)/i,
    answer: "For first year, optimize for fundamentals first: DSA, one build stack, one solid project, and visible consistency on GitHub. If you want, ask for a 90-day placement prep plan. 🚀",
  },
  {
    test: /(cgpa|grades|marks|study)/i,
    answer: "Keep CGPA stable by treating internals like free score. Weekly revision, one shared notes system, and solving previous papers will beat last-night panic most of the time. 📚",
  },
  {
    test: /(hackathon|build|project)/i,
    answer: "Best hackathon path: pick a team of 3 to 4, use a stack you already know, and ship one crisp demo with a simple story. Judges reward clarity more than overengineering. ⚡",
  },
  {
    test: /(ai|ml|data)/i,
    answer: "For AI/ML, start with Python, NumPy, pandas, scikit-learn, then one real mini-project before touching heavier model stacks. Build depth slowly and publicly. 🤖",
  },
];

const getGenieReply = (question) => {
  const match = GENIE_RESPONSES.find(({ test }) => test.test(question));
  if (match) return match.answer;
  return "I can help with placement prep, CGPA strategy, projects, hackathons, and skill-roadmaps for CSE-G. Ask me something specific and I’ll keep it practical. ✨";
};

export const AI = ({ open, onClose }) => {
  const [msgs, setMsgs] = useState([{ role: "assistant", text: "Hey! 👋 I'm GENIE — your ultra-modern CSE-G AI assistant.\n\nAsk me about placements, skills, CGPA, hackathons, or projects. 🚀" }]);
  const [inp, setInp] = useState("");
  const [loading, setLoading] = useState(false);
  const bot = useRef(null);

  useEffect(() => {
    bot.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, loading]);

  const send = async () => {
    if (!inp.trim() || loading) return;
    const q = inp.trim();
    setInp("");
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800)); // slightly longer for modern "thinking" feel
    setMsgs((m) => [...m, { role: "assistant", text: getGenieReply(q) }]);
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop blur overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
          />

          {/* Sliding Drawer */}
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{ 
              position: "fixed", 
              top: 0,
              right: 0, 
              bottom: 0,
              width: "min(400px, 100vw)", 
              zIndex: 1000, 
              display: "flex", 
              flexDirection: "column", 
              background: "rgba(10, 10, 15, 0.85)", 
              backdropFilter: "blur(40px)",
              webkitBackdropFilter: "blur(40px)",
              borderLeft: "1px solid rgba(139, 92, 246, 0.3)", 
              boxShadow: "-20px 0 80px rgba(0,0,0,0.8), -5px 0 30px rgba(139,92,246,0.15)" 
            }}
          >
            {/* Header */}
            <div style={{ padding: "24px 20px", display: "flex", alignItems: "center", gap: 14, background: "linear-gradient(180deg, rgba(139,92,246,0.1), transparent)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ position: "relative" }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "linear-gradient(135deg,#8B5CF6,#06FFF4)", display: "flex", alignItems: "center", justifyContent: "center", color: '#000', boxShadow: '0 8px 20px rgba(139,92,246,0.4)' }}>
                  <Sparkles size={22} strokeWidth={2.5} />
                </div>
                <div style={{ position: "absolute", bottom: -4, right: -4, width: 14, height: 14, borderRadius: "50%", background: "#39FF14", border: "3px solid #000", boxShadow: "0 0 10px #39FF1466" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: 18, color: "#FFF", letterSpacing: 0.5 }}>GENIE AI</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: COLORS.c, fontWeight: 500 }}>Active · Neural interface</div>
              </div>
              <button 
                onClick={onClose} 
                style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: "50%", width: 36, height: 36, color: "rgba(255,255,255,.8)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Chat Area */}
            <div className="ai-drawer-scroll" style={{ flex: 1, overflowY: "auto", padding: "20px", display: "flex", flexDirection: "column", gap: 16 }}>
              <AnimatePresence>
                {msgs.map((m, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", gap: 10, alignItems: "flex-end" }}
                  >
                    {m.role === "assistant" && (
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: COLORS.v }}>
                        <Bot size={14} />
                      </div>
                    )}
                    <div style={{ 
                      maxWidth: "80%", 
                      padding: "14px 18px", 
                      borderRadius: m.role === "user" ? "20px 20px 4px 20px" : "20px 20px 20px 4px", 
                      background: m.role === "user" ? "linear-gradient(135deg,#8B5CF6,#06FFF4)" : "rgba(255,255,255,.03)", 
                      border: m.role === "user" ? "none" : "1px solid rgba(255,255,255,.08)", 
                      color: m.role === "user" ? "#000" : "#FAFAFA", 
                      fontSize: 14, 
                      fontWeight: m.role === "user" ? 600 : 400,
                      lineHeight: 1.6, 
                      fontFamily: "'Inter',sans-serif", 
                      whiteSpace: "pre-wrap",
                      boxShadow: m.role === "user" ? "0 10px 20px rgba(6, 255, 244, 0.2)" : "0 4px 12px rgba(0,0,0,0.1)"
                    }}>
                      {m.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {loading && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ display: "flex", alignItems: "flex-end", gap: 10 }}
                >
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: COLORS.v }}>
                    <Bot size={14} />
                  </div>
                  <div style={{ display: "flex", gap: 6, padding: "14px 18px", background: "rgba(255,255,255,.03)", borderRadius: "20px 20px 20px 4px", width: "fit-content", border: "1px solid rgba(255,255,255,.05)" }}>
                    {[0, 1, 2].map((d) => (
                       <motion.div 
                         key={d} 
                         animate={{ y: [0, -6, 0] }}
                         transition={{ repeat: Infinity, duration: 0.6, delay: d * 0.15, ease: "easeInOut" }}
                         style={{ width: 6, height: 6, borderRadius: "50%", background: "linear-gradient(to bottom, #8B5CF6, #06FFF4)" }} 
                       />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bot} />
            </div>
            
            {/* Input Area */}
            <div style={{ padding: "20px", borderTop: "1px solid rgba(255,255,255,.05)", background: "rgba(0,0,0,0.2)" }}>
              <div style={{ display: "flex", gap: 10 }}>
                <input 
                  className="inp" 
                  value={inp} 
                  onChange={(e) => setInp(e.target.value)} 
                  onKeyDown={(e) => e.key === "Enter" && send()} 
                  placeholder="Message Genie..." 
                  style={{ flex: 1, fontSize: 13, padding: "14px 18px", borderRadius: "99px", background: "rgba(255,255,255,0.05)" }} 
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={send} 
                  disabled={loading || !inp.trim()} 
                  style={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: "50%", 
                    background: inp.trim() ? "linear-gradient(135deg,#8B5CF6,#06FFF4)" : "rgba(255,255,255,.05)", 
                    border: "none", 
                    cursor: inp.trim() ? "pointer" : "default", 
                    color: inp.trim() ? "#000" : "rgba(255,255,255,0.3)",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    flexShrink: 0,
                    boxShadow: inp.trim() ? "0 8px 20px rgba(6, 255, 244, 0.3)" : "none",
                    transition: "background 0.3s"
                  }}
                >
                  <Send size={20} strokeWidth={2.5} style={{ marginLeft: -2 }} />
                </motion.button>
              </div>
              <div style={{ textAlign: "center", marginTop: 12, fontFamily: "'Inter',sans-serif", fontSize: 10, color: "rgba(255,255,255,.3)", fontWeight: 500 }}>
                Powered by Local Context
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
