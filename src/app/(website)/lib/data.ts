// Dummy data (frontend only). Baad mein MongoDB se aayega.
export const teams = [
  { id: 1, name: "Web Development", members: 5, projects: 3, lead: "Ali Raza" },
  { id: 2, name: "Mobile Apps", members: 4, projects: 2, lead: "Sara Khan" },
  { id: 3, name: "UI/UX Design", members: 3, projects: 2, lead: "Hina Noor" },
  { id: 4, name: "Quality Testing", members: 4, projects: 4, lead: "Usman Tariq" },
];
export const projects = [
  { id: 1, name: "E-Commerce Portal", team: "Web Development", progress: 72, due: "30 Oct 2026" },
  { id: 2, name: "Fitness Tracker App", team: "Mobile Apps", progress: 45, due: "12 Nov 2026" },
  { id: 3, name: "Brand Redesign", team: "UI/UX Design", progress: 90, due: "22 Oct 2026" },
  { id: 4, name: "Regression Suite", team: "Quality Testing", progress: 30, due: "05 Dec 2026" },
];
export const members = [
  { id: 1, name: "Ali Raza", role: "Team Lead", team: "Web Development", tasks: 6 },
  { id: 2, name: "Sara Khan", role: "Flutter Developer", team: "Mobile Apps", tasks: 4 },
  { id: 3, name: "Hina Noor", role: "UI Designer", team: "UI/UX Design", tasks: 5 },
  { id: 4, name: "Usman Tariq", role: "QA Engineer", team: "Quality Testing", tasks: 3 },
  { id: 5, name: "Bilal Ahmed", role: "Backend Developer", team: "Web Development", tasks: 7 },
  { id: 6, name: "Ayesha Malik", role: "Frontend Developer", team: "Web Development", tasks: 5 },
];
export const tasks = [
  { id: 1, title: "Build login page", member: "Ali Raza", status: "Accepted", due: "20 Oct 2026" },
  { id: 2, title: "Create product API", member: "Bilal Ahmed", status: "Needs Changes", due: "23 Oct 2026" },
  { id: 3, title: "Design dashboard", member: "Hina Noor", status: "Submitted", due: "25 Oct 2026" },
  { id: 4, title: "Write test cases", member: "Usman Tariq", status: "Pending", due: "28 Oct 2026" },
  { id: 5, title: "Mobile home screen", member: "Sara Khan", status: "Pending", due: "02 Nov 2026" },
];
