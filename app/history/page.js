import { CLUB } from "@/lib/site-config";

// Edit this array to add seasons/achievements. Newest first.
const SEASONS = [
  {
    year: "2026–27",
    game: "Game TBD",
    highlights: ["Club founded", "First season competing"],
  },
];

export default function HistoryPage() {
  return (
    <section className="season-section">
      <div className="section-container">
        <div className="page-header">
          <p className="eyebrow">Season log</p>
          <h1>History &amp; Achievements</h1>
          <p>A record of every season {CLUB.shortName} has competed, game by game.</p>
        </div>

        <div className="season-list">
          {SEASONS.map((s, i) => (
            <div className="season-row" key={i}>
              <div>
                <p className="season-year">{s.year}</p>
                <p className="season-game">{s.game}</p>
              </div>
              <ul className="season-highlights">
                {s.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
