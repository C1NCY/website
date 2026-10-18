import { CLUB, TEAM, IMAGES } from "@/lib/site-config";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

// Edit this array to update your roster. Add/remove members freely —
// the grid reflows automatically. Give each member a `photo` path once you
// have real headshots (e.g. "/images/roster/full-name.jpg"); leave it null
// to keep the placeholder.
const PROJECTLEADS = [
  { name: "Cameron Molina", role: "Team Captain", year: "3rd year", photo: IMAGES.CameronM, major: "Mechanical Engineering", href: "https://www.linkedin.com/in/cameron-molina-3b0ab234b/" },
  { name: "Christopher Howell", role: "CAD Lead", year: "3rd year", photo: IMAGES.ChristopherH, major: "Aerospace Engineering", href: "https://www.linkedin.com/in/cvhowell" },
  { name: "Mason Pyle", role: "Controls Lead", year: "3rd year", photo: IMAGES.MasonP, major: "Computer Engineering", href: "https://www.linkedin.com/in/mason-pyle/" },
  { name: "Eric Bowler", role: "Notebook Lead", year: "3rd year", photo: IMAGES.EricB, major: "Mechanical Engineering Technology", href: "https://www.linkedin.com/in/ericbowler201186/" },
  { name: "Nicholas Lewis", role: "Build/Manufacuring Lead", year: "2nd year", photo: IMAGES.NicholasL, major: "Aerospace Engineering", href: "https://www.linkedin.com/in/nicholas-lewis-34876538b/" },
];
const EXECUTIVE = [
  { name: "Chester Parker", role: "President", year: "3rd year", photo: IMAGES.ChesterP, major: "Mechanical Engineering", href: "https://www.linkedin.com/in/chesterparker" },
  { name: "Cameron Molina", role: "Vice-President", year: "3rd year", photo: IMAGES.CameronM, major: "Mechanical Engineering", href: "https://www.linkedin.com/in/cameron-molina-3b0ab234b/" },
  { name: "Mason Pyle", role: "Treasurer", year: "3rd year", photo: IMAGES.MasonP, major: "Computer Engineering", href: "https://www.linkedin.com/in/mason-pyle/" },
  { name: "Lucy McCormick", role: "Secretary and Communications Chair", year: "3rd year", photo: IMAGES.LucyM, major: "Mechanical Engineering", href: "https://www.linkedin.com/in/lucybmccormick/" },
  {name: "Braden Resseguie", role: "Sponsorship Lead", year: "2nd year", photo: IMAGES.BradenR, major: "Computer Engineering", href: "https://www.linkedin.com/in/braden-resseguie/" },
  {name: "Evelyn Green", role: "Communications Chair", year: "2nd year", photo: IMAGES.EvelynG, major: "Computer Science", href: "https://www.linkedin.com/in/evelyn-green-41b22228a/" },
];

const 

export default function TeamPage() {
  return (
    <section className="team-section">
      <div className="section-container">
        <div className="page-header">
          <p className="eyebrow">Roster</p>
          <h1>{CLUB.shortName}</h1>
          <p>
            Team {TEAM.number} — every member works across mechanical design,
            programming, and strategy throughout the season.
          </p>
        </div>
        <p className="project-leads">
          Project Leads:
        </p>
        <div className="roster-grid">
          {PROJECTLEADS.map((m, i) => (
            <div className="roster-card" key={i}>
              {m.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={m.photo} alt={m.name} style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }} />
              ) : (
                <PhotoPlaceholder label="Add headshot" />
              )}
              <p className="roster-name">
                <a href={m.href} target="_blank" rel="noopener noreferrer">
                  {m.name}
                </a>
              </p>
              <p className="roster-role">{m.role}</p>
              <p className="roster-year">{m.year} </p>
              <p className="roster-major">{m.major}</p>
            </div>
          ))}
        </div>
        <div>
        </div>
        <p className="executive-board-title">
          Executive Board:
        </p>
        <div className="executive-grid">
          {EXECUTIVE.map((m, i) => (
            <div className="roster-card" key={i}>
              {m.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={m.photo} alt={m.name} style={{ width: "100%", aspectRatio: " 4 / 3 ", objectFit: "cover"}} />
              ) : (
                <PhotoPlaceholder label="Add headshot" />
              )}
              <p className="roster-name">
                <a href={m.href} target="_blank" rel="noopener noreferrer">
                  {m.name}
                </a>
              </p>
              <p className="roster-role">{m.role}</p>
              <p className="roster-year">{m.year} </p>
              <p className="roster-major">{m.major}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
