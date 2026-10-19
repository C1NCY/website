import { CLUB, TEAM, } from "@/lib/site-config";

import { ProjectLeads } from "./projectLeads";
import { ExecutiveBoard } from "./executiveBoard";
import { MemberTable } from "./Members";


// Edit this array to update your roster. Add/remove members freely —
// the grid reflows automatically. Give each member a `photo` path once you
// have real headshots (e.g. "/images/roster/full-name.jpg"); leave it null
// to keep the placeholder.


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
        <ProjectLeads />
        <ExecutiveBoard />
        <MemberTable />
      </div>
    </section>
  );
}
