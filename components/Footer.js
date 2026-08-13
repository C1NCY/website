import { CLUB, IMAGES, SOCIALS, CONTACT, SITE_CREDIT } from "@/lib/site-config";

function SocialIcon({ type }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.35-3.87-1.35-.53-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
        />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z"
        />
      </svg>
    );
  }

  if (type === "discord") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M19.5 4.5A16.7 16.7 0 0 0 15.4 3l-.5 1a15.2 15.2 0 0 0-5.8 0l-.5-1a16.7 16.7 0 0 0-4.1 1.5C2 8.2 1.3 11.8 1.6 15.3a16.7 16.7 0 0 0 5.1 2.6l1.2-1.6a10.4 10.4 0 0 1-1.9-.9l.5-.4c3.7 1.7 7.7 1.7 11.4 0l.5.4c-.6.4-1.2.7-1.9.9l1.2 1.6a16.7 16.7 0 0 0 5.1-2.6c.4-4.1-.7-7.7-3.3-10.8ZM8.5 13.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm7 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"
        />
      </svg>
    );
  }

  return null;
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div>
            <div className="footer-brand">
              <img src={IMAGES.logoAlt} alt={`${CLUB.shortName} logo`} className="brand-mark" />

              <div>
                <strong>{CLUB.name}</strong>
                <span>{CLUB.school}</span>
              </div>
            </div>

            <p className="footer-description">
              Competitive VEX U robotics at the University of Cincinnati
            </p>
          </div>

          <div>
            <p className="footer-label">Contact</p>
            <p>{CONTACT.email}</p>
            <p>{CONTACT.meetingInfo}</p>
          </div>

          <div>
            <p className="footer-label">Follow the team</p>

            <div className="social-links">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  <SocialIcon type={social.type} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {CLUB.name}
          </span>

          <span className="footer-credit">
            Site built &amp; maintained by{" "}
            {SITE_CREDIT.href ? (
              <a href={SITE_CREDIT.href} target="_blank" rel="noreferrer">
                {SITE_CREDIT.name}
              </a>
            ) : (
              SITE_CREDIT.name
            )}
          </span>
        </div>
      </div>
    </footer>
  );
}
