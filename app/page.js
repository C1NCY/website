import Link from "next/link";
import { CLUB, IMAGES, TEAM, STATS, DISCIPLINES, STACK, OUTREACH } from "@/lib/site-config";
import StatBlock from "@/components/StatBlock";
import Demographics from "@/components/Demographics";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">{CLUB.school} · VEX U Robotics</p>

            <h1>{CLUB.tagline}</h1>

            <p className="hero-description">{CLUB.description}</p>

            <div className="hero-actions">
              <Link href="/team" className="button button-primary">
                Explore the team
              </Link>

              <Link href="/contact" className="button button-secondary">
                Join us
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            {IMAGES.hero ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={IMAGES.hero} alt={`${CLUB.shortName} team`} className="cover-image" />
            ) : (
              <PhotoPlaceholder label="Add team or workshop photo" ratio="1 / 1" />
            )}
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="numbers-section">
        <div className="section-container">
          <div className="section-heading">
            <p className="eyebrow">By the numbers</p>
            <h2>Built by students, from the ground up.</h2>
          </div>

          <div className="stats-grid">
            {STATS.map((stat) => (
              <StatBlock key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* WHO MAKES UP THE TEAM */}
      <Demographics />

      {/* THE ENGINEERING */}
      <section className="about-section" id="engineering">
        <div className="section-container about-grid">
          <div>
            <p className="eyebrow">The engineering</p>
            <h2>Every discipline it takes to build a competitive robot.</h2>
          </div>

          <div className="about-copy">
            <p>
              {CLUB.shortName} is the University of Cincinnati&apos;s
              competitive VEX U robotics team. We design, build, program, and
              compete with a robot built entirely by students — from the
              first CAD sketch to the final match.
            </p>

            <p>
              Members work across mechanical design, electrical systems,
              embedded software, and competition strategy, gaining hands-on
              engineering experience across the full stack of what it takes
              to build something that has to work under pressure.
            </p>
          </div>
        </div>

        <div className="section-container discipline-grid">
          {DISCIPLINES.map((item) => (
            <article className="discipline-card" key={item.title}>
              <span className="discipline-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className="section-container stack-inline">
          <span className="stack-inline-label">Our stack</span>
          <div className="stack-inline-list">
            {STACK.map((column, i) => (
              <span key={column.category}>
                <strong>{column.category}:</strong> {column.tools.join(", ")}
                {i < STACK.length - 1 && <span className="stack-inline-sep" aria-hidden="true">/</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING BEYOND THE FIELD */}
      <section className="outreach-section">
        <div className="section-container">

          <div className="outreach-intro">
            <div className="section-heading">
              <p className="eyebrow">Engineering beyond the field</p>
              <h2>We believe robotics is bigger than competition.</h2>
              <p className="section-description">
                {CLUB.shortName} works to expand access to STEM education,
                support our community, and introduce students to engineering
                through hands-on experiences.
              </p>
            </div>

            <div className="outreach-photo">
              {IMAGES.outreach ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={IMAGES.outreach}
                  alt="Outreach event"
                  className="cover-image"
                />
              ) : (
                <PhotoPlaceholder
                  label="Add outreach or volunteering photo"
                  ratio="21 / 9"
                />
              )}
            </div>
          </div>

          <div className="outreach-grid">
            {OUTREACH.map((item) => (
              <article className="outreach-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* TEAM / COMPETITION LINK */}
      <section className="teams-section">
        <div className="section-container">
          <div className="teams-header">
            <div>
              <p className="eyebrow">Competition</p>
              <h2>Our team</h2>
            </div>

            <p>
              We develop our own robot, strategy, software, and engineering
              solutions throughout the season.
            </p>
          </div>

          <div className="team-list">
            <a href={TEAM.eventsUrl} target="_blank" rel="noreferrer" className="team-row">
              <div>
                <span className="team-number">{TEAM.number}</span>
                <span className="team-name">{CLUB.shortName}</span>
              </div>

              <span className="team-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-container cta-content">
          <p className="eyebrow">Get involved</p>

          <h2>Build something that competes.</h2>

          <p>
            Whether you want to design mechanisms, write autonomous software,
            work on electronics, or learn something completely new, there is
            a place for you on the team.
          </p>

          <Link href="/contact" className="button button-primary">
            Join {CLUB.shortName}
          </Link>
        </div>
      </section>
    </>
  );
}
