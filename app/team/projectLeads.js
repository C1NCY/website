/*
    Edit this array to update the project Leads. Add/remove members freely —
    the grid reflows automatically. 
*/
function ProjectLeads() {

    const PROJECTLEADS = [
        { name: "Cameron Molina", role: "Team Captain", year: "3rd year", photo: IMAGES.CameronM, major: "Mechanical Engineering", href: "https://www.linkedin.com/in/cameron-molina-3b0ab234b/" },
        { name: "Christopher Howell", role: "CAD Lead", year: "3rd year", photo: IMAGES.ChristopherH, major: "Aerospace Engineering", href: "https://www.linkedin.com/in/cvhowell" },
        { name: "Mason Pyle", role: "Controls Lead", year: "3rd year", photo: IMAGES.MasonP, major: "Computer Engineering", href: "https://www.linkedin.com/in/mason-pyle/" },
        { name: "Eric Bowler", role: "Notebook Lead", year: "3rd year", photo: IMAGES.EricB, major: "Mechanical Engineering Technology", href: "https://www.linkedin.com/in/ericbowler201186/" },
        { name: "Nicholas Lewis", role: "Build/Manufacuring Lead", year: "2nd year", photo: IMAGES.NicholasL, major: "Aerospace Engineering", href: "https://www.linkedin.com/in/nicholas-lewis-34876538b/" },
    ];

    return (
        <div>
            <p className="project-leads">
                Project Leads:
            </p>
            <div className="roster-grid">
                {PROJECTLEADS.map((m, i) => (
                    <div className="roster-card" key={i}>
                        {m.photo ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={m.photo} alt={m.name} style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }} />
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
}

export default ProjectLeads;
