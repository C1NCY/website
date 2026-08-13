// Drop-in placeholder for anywhere a real photo should go.
export default function PhotoPlaceholder({ label = "Add Photo", ratio = "4 / 3", dark = false }) {
  return (
    <div
      className={`photo-placeholder${dark ? " on-dark" : ""}`}
      style={{ "--ratio": ratio }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2.5" y="5.5" width="19" height="14" rx="1.5" />
        <circle cx="12" cy="12.5" r="3.4" />
        <path d="M8 5.5l1.2-2h5.6l1.2 2" />
      </svg>
      <span>{label}</span>
    </div>
  );
}
