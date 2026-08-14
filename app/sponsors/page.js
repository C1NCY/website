import { CONTACT } from "@/lib/site-config";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

// Edit this array to add sponsors. `tier` groups them visually.
// Give each sponsor a `logo` path once you have real logos
// (e.g. "/images/sponsors/company.png"); leave it null for a placeholder.
const SPONSORS = [
  // { name: "Sponsor Name", tier: "Title Sponsor", url: "https://example.com", logo: null },
];

export default function SponsorsPage() {
  return (
    <section className="sponsors-section">
      <div className="section-container">
        <div className="page-header">
          <p className="eyebrow">Our sponsors</p>
          <h1>Sponsors</h1>
          <p>Parts, funding, and shop access from these sponsors make every season possible.</p>
        </div>

        <div className="sponsor-grid">
          {SPONSORS.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noreferrer" className="sponsor-card">
              <p className="sponsor-tier">{s.tier}</p>
              <p className="sponsor-name">{s.name}</p>
              <div className="sponsor-logo-slot">
                {s.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={s.logo} alt={s.name} style={{ maxWidth: "100%", maxHeight: 60 }} />
                ) : (
                  <PhotoPlaceholder label="Add logo" ratio="16 / 9" />
                )}
              </div>
            </a>
          ))}
        </div>

        <div className="sponsor-cta">
          <h2>Interested in sponsoring us?</h2>
          <p>
            We put sponsor funding directly into robot parts, competition fees, and
            travel. Reach out for our sponsorship packet.
          </p>
          <a href={`mailto:${CONTACT.email}`} className="button button-primary">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
}
