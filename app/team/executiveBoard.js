function ExecutiveBoard() {
    const EXECUTIVE = [
        { name: "Chester Parker", role: "President", year: "3rd year", photo: IMAGES.ChesterP, major: "Mechanical Engineering", href: "https://www.linkedin.com/in/chesterparker" },
        { name: "Cameron Molina", role: "Vice-President", year: "3rd year", photo: IMAGES.CameronM, major: "Mechanical Engineering", href: "https://www.linkedin.com/in/cameron-molina-3b0ab234b/" },
        { name: "Mason Pyle", role: "Treasurer", year: "3rd year", photo: IMAGES.MasonP, major: "Computer Engineering", href: "https://www.linkedin.com/in/mason-pyle/" },
        { name: "Lucy McCormick", role: "Secretary and Communications Chair", year: "3rd year", photo: IMAGES.LucyM, major: "Mechanical Engineering", href: "https://www.linkedin.com/in/lucybmccormick/" },
        { name: "Braden Resseguie", role: "Sponsorship Lead", year: "2nd year", photo: IMAGES.BradenR, major: "Computer Engineering", href: "https://www.linkedin.com/in/braden-resseguie/" },
        { name: "Evelyn Green", role: "Communications Chair", year: "2nd year", photo: IMAGES.EvelynG, major: "Computer Science", href: "https://www.linkedin.com/in/evelyn-green-41b22228a/" },
    ];

    return (
        <div>
            <p className="executive-board-title">
                Executive Board:
            </p>
            <div className="executive-grid">
                {EXECUTIVE.map((m, i) => (
                    <div className="roster-card" key={i}>
                        {m.photo ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={m.photo} alt={m.name} style={{ width: "100%", aspectRatio: " 4 / 3 ", objectFit: "cover" }} />
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
    )