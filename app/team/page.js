import { CLUB, TEAM, IMAGES } from "@/lib/site-config";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import ExecutiveBoard from "@/app/team/ExecutiveBoard";
import ProjectLeads from "@/app/team/ProjectLeads";
import Members from "@/app/team/Members";

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
            programming, and strategy throughout the season. Feel free to click
            our names to go to our LinkedIn pages!
          </p>
        </div>
        <ProjectLeads />
        <ExecutiveBoard />
        <Members />
      </div>
    </section>
  )
}
