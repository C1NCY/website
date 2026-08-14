// ---------------------------------------------------------------------------
// EDIT THIS FILE to update the site's content. Nothing else needs to change
// for basic text/link updates — the pages just read from here.
// ---------------------------------------------------------------------------

export const CLUB = {
  name: "UC VEX U Robotics",
  shortName: "C1NCY",
  school: "University of Cincinnati",
  tagline: "Engineered to compete.",
  description:
    "The University of Cincinnati's competitive VEX U robotics team. We design, build, program, and compete with a robot built entirely by students.",
};

// Every image on the site is set here. Point a key at a real file in
// /public/foobar and it renders; leave it null and the page falls back to
// a dashed placeholder automatically
export const IMAGES = {
  logo: "/vexupage-main/logos/UC_Red_notext.png", // used in the nav (on light background)
  logoAlt: "/vexupage-main/logos/UC_White.png", // used in the footer (on dark background)
  hero: "/vexupage-main/images/teamplaceholder.png", 
  outreach: "/vexupage-main/images/milford_volunteering.jpg", 
};

// Single competing team. If we ever make a second team, turn this back
// into an array and update app/page.js + app/team/page.js to map over it.
export const TEAM = {
  number: "CINCY",
  eventsUrl: "https://www.robotevents.com/teams/VURC/CINCY",
};

// "By the numbers" 
// (nothing here should need touching until something structural
// changes, like the team's founding stats or discipline count).
export const STATS = [
  { value: "2025", label: "Founded" },
  { value: "5", label: "Engineering Disciplines" },
  { value: "100%", label: "Student-Built" },
  { value: "1", label: "VEX U Team" },
];

// "The Engineering" section on the homepage — what the team is capable of,
// discipline by discipline.
export const DISCIPLINES = [
  {
    tag: "01",
    title: "Design",
    body: "CAD, simulation, and prototyping that turn strategy into a buildable system.",
  },
  {
    tag: "02",
    title: "Build",
    body: "Fabrication, machining, 3D printing, and hands-on assembly in our shop.",
  },
  {
    tag: "03",
    title: "Electrical",
    body: "Wiring, sensors, and system integration that keep every subsystem talking to each other.",
  },
  {
    tag: "04",
    title: "Software",
    body: "C++ development, autonomous routines, and driver controls, built and tested in-house.",
  },
  {
    tag: "05",
    title: "Strategy",
    body: "Scouting, match strategy, and driver practice that turn a good robot into a winning one.",
  },
];

// Shown as a compact line under the discipline grid — swap tools as 
// actual stack changes. 
export const STACK = [
  { category: "Mechanical", tools: ["Fusion", "VEX V5", "CNC", "3D Printing"] },
  { category: "Electrical", tools: ["V5 Electronics", "Sensors", "Custom Wiring"] },
  { category: "Software", tools: ["C++", "PROS", "Git"] },
];

// "Engineering Beyond the Field" — outreach & community section.
export const OUTREACH = [
  {
    title: "STEM Outreach",
    body: "Workshops and demonstrations that introduce local students to robotics and engineering.",
  },
  {
    title: "Community Service",
    body: "Volunteering and service projects throughout the Cincinnati community.",
  },
  {
    title: "Mentorship",
    body: "Helping younger students build confidence and interest in engineering.",
  },
  {
    title: "Outreach Events",
    body: "Bringing robotics to schools, community events, and prospective students.",
  },
];

// "Who makes up the team" — homepage demographics section.
// Percentages should each group sum to 100.
export const MAJORS = [
  { label: "Mechanical Engineering", pct: 45 },
  { label: "Computer Science", pct: 30 },
  { label: "Electrical Engineering", pct: 15 },
  { label: "Other", pct: 10 },
];

export const CLASS_YEARS = [
  { label: "1st year", pct: 5 },
  { label: "2nd year", pct: 40 },
  { label: "3rd year", pct: 50 },
  { label: "4th year", pct: 0 },
  { label: "5th year", pct: 0 },
  { label: "Grad", pct: 5 },
];

export const SOCIALS = [
  { label: "Discord", type: "discord", href: "https://discord.com/" },
  { label: "Instagram", type: "instagram", href: "https://www.instagram.com/uc.vex.robotics/" },
  { label: "GitHub", type: "github", href: "https://github.com/C1NCY" },
  { label: "YouTube", type: "youtube", href: "https://youtube.com/" },
  { label: "GetInvolved", type: "getinvolveduc", href: "https://getinvolved.uc.edu/organization/uc-vurc" },
];

export const CONTACT = {
  email: "ucvurc@gmail.com",
  meetingInfo: "Meeting time and location TBD. Join the discord and GetInvolved for the latest updates!",
  location: "University of Cincinnati, Cincinnati, OH",
};

export const NAV_LINKS = [
  { label: "Engineering", href: "/#engineering" },
  { label: "Team", href: "/team" },
  { label: "History", href: "/history" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

// Shows up in the footer.
export const SITE_CREDIT = {
  name: "Mason Pyle",
  href: "https://www.linkedin.com/in/mason-pyle/", 
};
