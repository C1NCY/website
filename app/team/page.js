import { CLUB, TEAM } from "@/lib/site-config";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

// Edit this array to update your roster. Add/remove members freely —
// the grid reflows automatically. Give each member a `photo` path once you
// have real headshots (e.g. "/images/roster/full-name.jpg"); leave it null
// to keep the placeholder.
const MEMBERS = [
  { name: "Full Name", role: "Team Captain", year: "3rd year", photo: null },
  { name: "Full Name", role: "Lead Programmer", year: "3rd year", photo: null },
  { name: "Full Name", role: "Mechanical Lead", year: "3rd year", photo: null },
  { name: "Full Name", role: "Member", year: "2nd year", photo: null },
];

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

        <div className="roster-grid">
          {MEMBERS.map((m, i) => (
            <div className="roster-card" key={i}>
              {m.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={m.photo} alt={m.name} style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }} />
              ) : (
                <PhotoPlaceholder label="Add headshot" />
              )}
              <p className="roster-name">{m.name}</p>
              <p className="roster-role">{m.role}</p>
              <p className="roster-year">{m.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
