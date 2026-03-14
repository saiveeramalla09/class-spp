import React from 'react';
import { COLORS } from '../data/mockData';

export const Avi = ({ init, size = 48, col = COLORS.v }) => (
  <div 
    style={{ 
      width: size, 
      height: size, 
      borderRadius: "50%", 
      background: `conic-gradient(from 180deg,${col}55,${col}11,${col}55)`, 
      border: `2px solid ${col}66`, 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      fontSize: size * 0.32, 
      fontWeight: 800, 
      color: col, 
      fontFamily: "'Space Mono',monospace", 
      flexShrink: 0, 
      boxShadow: `0 0 14px ${col}33` 
    }}
  >
    {init}
  </div>
);

export const Pill = ({ label, col = COLORS.v, onX }) => (
  <span className="tag" style={{ background: `${col}18`, color: col, border: `1px solid ${col}44` }}>
    {label}
    {onX && (
      <span onClick={onX} style={{ cursor: "pointer", opacity: 0.7, fontSize: 11, marginLeft: 4 }}>
        ×
      </span>
    )}
  </span>
);
