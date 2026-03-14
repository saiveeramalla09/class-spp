const V = { v: "#8B5CF6", c: "#06FFF4", p: "#FF006E", y: "#FFE500", g: "#39FF14", o: "#FF6B35" };
const VL = Object.values(V);
export const SKILL_LIST = ["React", "Python", "Java", "C++", "DSA", "ML/AI", "Node.js", "Flutter", "SQL", "MongoDB", "Docker", "Cybersecurity", "TypeScript", "Kotlin", "Swift", "AWS", "Git", "Linux", "TensorFlow", "Figma", "Rust", "Go"];

const mkStudents = () => {
  const CLASS_LIST = [
    ["Aditya Pandey", "25BD1A05C1"],
    ["Advith Puppala", "25BD1A05C2"],
    ["Afreen Sultana", "25BD1A05C3"],
    ["Akula Sumana", "25BD1A05C4"],
    ["Alli Anusha", "25BD1A05C5"],
    ["Amgothu Anjali", "25BD1A05C6"],
    ["Muktha Datta A", "25BD1A05C7"],
    ["B Rithvik Prasad", "25BD1A05C8"],
    ["Badamoni Sahithi", "25BD1A05C9"],
    ["Banoth Srija", "25BD1A05CA"],
    ["Banothu Pallavi", "25BD1A05CB"],
    ["Belli Sravani", "25BD1A05CC"],
    ["Boya Vedashreela", "25BD1A05CD"],
    ["Budidha Rehaan", "25BD1A05CE"],
    ["Chakilam Naman", "25BD1A05CF"],
    ["Chandragiri Manoj", "25BD1A05CG"],
    ["Ch Ramakrishna", "25BD1A05CH"],
    ["Chindam Mounisha", "25BD1A05CJ"],
    ["Ciripangi Sai Litish", "25BD1A05CK"],
    ["Dabbeta Harshavardhan Reddy", "25BD1A05CL"],
    ["Deena Dayal Reddy Danapana", "25BD1A05CM"],
    ["Desapaka Santhosh", "25BD1A05CN"],
    ["Edurugatla Srinu", "25BD1A05CP"],
    ["Fatima Tanzeem", "25BD1A05CQ"],
    ["G Jagadeshwar Reddy", "25BD1A05CR"],
    ["Ganji Sathvika", "25BD1A05CT"],
    ["G Sai Rohith", "25BD1A05CU"],
    ["Gone Avinash", "25BD1A05CV"],
    ["Gundagani Kavish Vardhan", "25BD1A05CW"],
    ["Jambi Bharath", "25BD1A05CX"],
    ["Jatothu Vijay", "25BD1A05CY"],
    ["K P Amulya Khyathi", "25BD1A05CZ"],
    ["K V Hasini", "25BD1A05D1"],
    ["Kundeti Sai Vamshi", "25BD1A05D2"],
    ["Kurakula Lakshita", "25BD1A05D3"],
    ["Laalasa Namya Mendu", "25BD1A05D4"],
    ["Malothu Thirupathi", "25BD1A05D5"],
    ["Mane Vidvesh", "25BD1A05D6"],
    ["Medamoni Hasini Yadav", "25BD1A05D7"],
    ["Miryala Navtej", "25BD1A05D8"],
    ["Mohammad Abdul Rauf", "25BD1A05D9"],
    ["Mohammad Safoorabathul", "25BD1A05DA"],
    ["M Sai Charan", "25BD1A05DB"],
    ["Mudavath Sai Charan", "25BD1A05DC"],
    ["M Varun", "25BD1A05DD"],
    ["Nagalla Dhana Sri", "25BD1A05DE"],
    ["N Jashwanth", "25BD1A05DF"],
    ["Neela Vishal", "25BD1A05DG"],
    ["Pawar Ushasri", "25BD1A05DH"],
    ["Perni Kiran Kumar", "25BD1A05DJ"],
    ["Podila Sai Gouthami", "25BD1A05DK"],
    ["Prattipati Sandeep", "25BD1A05DL"],
    ["Punnapuraju Shivamani", "25BD1A05DM"],
    ["Putta Nandini", "25BD1A05DN"],
    ["Racharla Abhinav Teja", "25BD1A05DP"],
    ["Ravalkol Goutham", "25BD1A05DQ"],
    ["Sai Sanjana Devaki", "25BD1A05DR"],
    ["Sai Sushruth Vadlakonda", "25BD1A05DT"],
    ["Sannapuri Bharath", "25BD1A05DU"],
    ["Tammuluri Sreya", "25BD1A05DV"],
    ["Tejavath Gana Naik", "25BD1A05DW"],
    ["Veeramalla Sai Charan", "25BD1A05DX"],
    ["Vollala Sai Swasthik", "25BD1A05DY"]
  ];

  const bios = ["Full-stack dev | Building cool stuff", "CP grinder | 4⭐ CodeChef", "Mobile dev | Design thinker", "ML nerd | Research enthusiast", "Backend wizard | DevOps explorer", "Security first | CTF player", "Data nerd | Kaggle contributor", "Open source contributor | Tech blogger"];
  
  return CLASS_LIST.map(([name, roll], i) => {
    // Proper capitalization helper
    const capitalize = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";
    const formattedName = name.split(" ").map(capitalize).join(" ");
    
    const parts = formattedName.split(" ");
    const fName = parts[0] || "";
    const lName = parts[parts.length - 1] || "";
    
    return {
      id: i + 1,
      name: formattedName,
      roll,
      cgpa: (7.5 + Math.random() * 2.4).toFixed(1),
      skills: SKILL_LIST.slice().sort(() => Math.random() - 0.5).slice(0, Math.floor(2 + Math.random() * 4)),
      github: "#",
      linkedin: "#",
      leetcode: "#",
      bio: bios[i % bios.length],
      color: VL[i % VL.length],
      achievements: Math.floor(2 + Math.random() * 14),
      avatar: `${fName?.[0] || ""}${lName?.[0] || ""}`.toUpperCase(),
    };
  });
};

export const STUDENTS = mkStudents();

export const WINS = [
  { id: 1, student: "Perni Kiran Kumar", av: "PK", title: "Smart India Hackathon — National Finalist", org: "Ministry of Education", type: "Hackathon", date: "Mar 2025", color: V.y, starred: true, likes: 28 },
  { id: 2, student: "Deena Dayal Reddy Danapana", av: "DD", title: "NPTEL Machine Learning — Elite + Silver", org: "IIT Madras", type: "Certification", date: "Apr 2025", color: V.c, starred: true, likes: 22 },
  { id: 3, student: "Racharla Abhinav Teja", av: "RA", title: "HackWithInfy 2025 — Top 50", org: "Infosys", type: "Hackathon", date: "Feb 2025", color: V.v, starred: false, likes: 17 },
  { id: 4, student: "Prattipati Sandeep", av: "PS", title: "Google Data Analytics Certificate", org: "Google / Coursera", type: "Certification", date: "Jan 2025", color: V.g, starred: false, likes: 14 },
  { id: 5, student: "Miryala Navtej", av: "MN", title: "CEH — Certified Ethical Hacker", org: "EC-Council", type: "Certification", date: "May 2025", color: V.p, starred: true, likes: 31 },
  { id: 6, student: "Dabbeta Harshavardhan Reddy", av: "DH", title: "AWS Solutions Architect — Associate", org: "Amazon Web Services", type: "Certification", date: "Jul 2025", color: V.c, starred: true, likes: 25 },
];

export const GALLERY = [
  { id: 1, cat: "Fests", title: "TechXcel 2025 Opening", em: "🎉", col: V.p, desc: "KMIT's flagship tech fest opening night" },
  { id: 2, cat: "Hackathons", title: "24hr Internal Hackathon", em: "⚡", col: V.y, desc: "3 CSE-G teams in the finals" },
  { id: 3, cat: "Classroom", title: "Mini Project Demo Day", em: "💻", col: V.c, desc: "Our first semester project presentations" },
  { id: 4, cat: "Workshops", title: "AWS Cloud Bootcamp", em: "☁️", col: V.v, desc: "Hands-on cloud computing session" },
  { id: 5, cat: "Fests", title: "Cultural Night Performance", em: "🎭", col: V.g, desc: "CSE-G on the big stage" },
  { id: 6, cat: "Visits", title: "Industrial Visit — Infosys", em: "🏢", col: V.o, desc: "Real-world tech exposure in Hyderabad" },
  { id: 7, cat: "Hackathons", title: "SIH Internal Qualifier", em: "🏆", col: V.c, desc: "Smart India Hackathon 2025 prep" },
  { id: 8, cat: "Classroom", title: "Guest Lecture: AI Trends", em: "🤖", col: V.v, desc: "Industry expert shares the future" },
  { id: 9, cat: "Sports", title: "Inter-department Cricket Finals", em: "🏏", col: V.g, desc: "CSE-G bringing the trophy home!" },
  { id: 10, cat: "Sports", title: "Annual Sports Meet Relay", em: "🏃‍♂️", col: V.o, desc: "Gold medal in 4x100m relay" },
];

export const TIMELINE = [
  { sem: "Sem 1", period: "Jul–Dec 2025", title: "The Genesis", icon: "🚀", col: V.v, events: ["First C programming class 😭", "Mini project demos — everyone's code broke", "Made lifelong friends over debug sessions", "First internals — we survived!"] },
  { sem: "Sem 2", period: "Jan–May 2026", title: "Finding Rhythm", icon: "⚡", col: V.c, events: ["Java & OOP finally clicked", "TechXcel — CSE-G represented hard", "First hackathon together", "CGPA anxiety intensifies 😂"] },
  { sem: "Sem 3", period: "Jul–Dec 2026", title: "Level Up", icon: "🔥", col: V.p, events: ["DSA becomes our religion", "Web dev bootcamp", "AWS workshop", "First open source PR merged!"] },
  { sem: "Sem 4", period: "Jan–May 2027", title: "Serious Mode", icon: "💎", col: V.y, events: ["DBMS & OS mastered", "SIH hackathon qualifiers", "Internship applications begin", "Certifications stacking up"] },
];

export const COLORS = V;
