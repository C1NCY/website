import { CLUB, CONTACT, SOCIALS } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <section className="contact-section">
      <div className="section-container">
        <div className="page-header">
          <p className="eyebrow">Say hello</p>
          <h1>Contact</h1>
          <p>
            Are you a student at the University of Cincinnati and interested in joining {CLUB.shortName}? 
            No experience required - come to a meeting and see what we're building. 
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <p className="contact-card-label">Meetings</p>
            <p>{CONTACT.meetingInfo}</p>
          </div>
          <div className="contact-card">
            <p className="contact-card-label">Location</p>
            <p>{CONTACT.location}</p>
          </div>
          <div className="contact-card">
            <p className="contact-card-label">Email</p>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
          <div className="contact-card">
            <p className="contact-card-label">Elsewhere</p>
            <div className="contact-social-list">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
