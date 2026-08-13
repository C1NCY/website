import { MAJORS, CLASS_YEARS } from "@/lib/site-config";

export default function Demographics() {
  return (
    <section className="demographics-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="eyebrow">Who makes up the team</p>
          <h2>Students first, engineers by choice.</h2>
          <p className="section-description">
            Our team brings together students from different engineering
            disciplines and every stage of the college experience.
          </p>
        </div>

        <div className="demographics-content">
          {/* Majors */}
          <div className="demographics-block majors-block">
            <div className="demo-block-header">
              <span className="demo-number">01</span>
              <div>
                <p className="demo-panel-title">Our disciplines</p>
                <h3>Different majors. One team.</h3>
              </div>
            </div>

            <div className="major-cards">
              {MAJORS.map((major, index) => (
                <div
                  className={`major-card major-card-${index + 1}`}
                  key={major.label}
                >
                  <span className="major-percentage">{major.pct}%</span>

                  <div className="major-card-bottom">
                    <span className="major-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="major-name">{major.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Class Year */}
          <div className="demographics-block class-block">
            <div className="demo-block-header">
              <span className="demo-number">02</span>
              <div>
                <p className="demo-panel-title">Experience</p>
                <h3>Every year of the journey.</h3>
              </div>
            </div>

            <div className="class-year-grid">
              {CLASS_YEARS.map((year, index) => (
                <div className="class-year-card" key={year.label}>
                  <div className="class-year-top">
                    <span className="class-year-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="class-year-percentage">
                      {year.pct}%
                    </span>
                  </div>

                  <div className="class-year-line">
                    <span />
                  </div>

                  <div className="class-year-label">
                    {year.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}