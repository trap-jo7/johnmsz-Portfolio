import type { ReactNode } from "react"

const profile = {
  name: "John Soliz",
  email: "johnmsz@outlook.com",
  linkedin: "https://www.linkedin.com/in/john-soliz-867421301",
  github: "https://github.com/trap-jo7",
  resume: "/john-soliz-resume.pdf",
}

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}<span className="external-mark" aria-hidden="true">↗</span>
    </a>
  )
}

const experience = [
  {
    role: "Senate Secretary",
    organization: "Student Government Association, Liberty University",
    date: "Present",
    description: "Maintain official Senate meeting minutes and organize motions, votes, and proceedings into accurate organizational records.",
  },
  {
    role: "Porter & Ambassador",
    organization: "Smarte Carte · Sterling, VA",
    date: "2024–2026",
    description: "Assisted travelers with rental equipment in a busy airport environment. Tracked equipment inventory and reported shortages, damage, and discrepancies.",
  },
  {
    role: "Online Order Associate & Stocker",
    organization: "Harris Teeter · Sterling, VA",
    date: "Jan 2022–Oct 2023",
    description: "Picked and packed online orders, prepared pickup receipts, and organized inventory to support timely order fulfillment.",
  },
  {
    role: "Cart Attendant",
    organization: "Sam’s Club · Sterling, VA",
    date: "Dec 2022–Jan 2023",
    description: "Helped customers load purchases, answered questions, and organized carts and merchandise to support daily store operations.",
  },
]

export function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <nav className="container navigation" aria-label="Main navigation">
          <a className="site-name" href="#home">John Soliz</a>
          <div className="navigation-links">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <ExternalLink href={profile.resume} className="navigation-resume">Resume PDF</ExternalLink>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="container introduction" id="home" aria-labelledby="name">
          <div className="introduction-copy">
            <p className="professional-title">Information Technology · Data Networking & Security</p>
            <h1 id="name">John Soliz</h1>
            <p className="introduction-summary">
              IT student at Liberty University, graduating in 2027. My projects include
              a network diagnosis lab, a Premier League prediction pipeline, and an
              interactive photo gallery.
            </p>
            <div className="introduction-actions">
              <ExternalLink href={profile.resume} className="button button-primary">View resume</ExternalLink>
              <a href={`mailto:${profile.email}`} className="button button-secondary">Email me</a>
            </div>
            <div className="profile-links" aria-label="Professional profiles">
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
              <ExternalLink href={profile.github}>GitHub</ExternalLink>
              <a href={profile.resume} download="John-Soliz-Resume.pdf">Download resume <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <aside className="education-summary" aria-labelledby="education-title">
            <h2 id="education-title">Education</h2>
            <p className="institution">Liberty University</p>
            <p>B.S. Information Technology</p>
            <p>Data Networking & Security</p>
            <dl>
              <div><dt>Expected graduation</dt><dd>2027</dd></div>
              <div><dt>Location</dt><dd>Lynchburg, VA</dd></div>
            </dl>
            <p className="coursework-label">Relevant coursework</p>
            <p className="coursework">Networking Fundamentals, Systems Administration,
              Database Management, Cloud Computing</p>
          </aside>
        </section>

        <section className="container section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <h2 id="projects-title">Selected projects</h2>
            <p>Projects from my resume, with code and supporting documentation.</p>
          </div>

          <article className="project" aria-labelledby="netscope-title">
            <div className="project-description">
              <p className="project-category">Network troubleshooting</p>
              <h3 id="netscope-title">NetScope</h3>
              <p>A Go command-line diagnostic tool and isolated Docker lab for investigating
                application access failures across DNS, TCP, and HTTP.</p>
              <ul className="project-contributions">
                <li>Ran controlled DNS, application, network-disconnection, and HTTP 503 failure scenarios.</li>
                <li>Interpreted diagnostic evidence and verified recovery after each scenario.</li>
              </ul>
              <p className="project-technology"><strong>Technologies</strong> Go, Docker Compose, CoreDNS</p>
              <div className="project-links">
                <ExternalLink href={`${profile.github}/netscope`}>Repository</ExternalLink>
                <ExternalLink href={`${profile.github}/netscope/blob/main/docs/results.md`}>Lab results</ExternalLink>
                <ExternalLink href={`${profile.github}/netscope/blob/main/docs/interview.md#authorship-and-personal-skills`}>Contribution notes</ExternalLink>
              </div>
            </div>
            <aside className="project-evidence" aria-label="NetScope evidence">
              <h4>Lab validation</h4>
              <p>Expected symptoms matched and recovery verified in all <strong>15 controlled trials.</strong></p>
              <p className="evidence-context">Results are from an isolated local lab.</p>
              <p className="contribution-note">AI-assisted implementation; my work included operating the lab,
                testing faults, interpreting evidence, and validating recovery.</p>
            </aside>
          </article>

          <article className="project" aria-labelledby="epl-title">
            <div className="project-description">
              <p className="project-category">Machine learning & football analysis</p>
              <h3 id="epl-title">EPL Predictor</h3>
              <p>A Python pipeline that estimates the probabilities of a home win, draw, or away win
                in Premier League matches, alongside a website for exploring tactics and squads.</p>
              <ul className="project-contributions">
                <li>The pipeline includes Elo and rolling-form features, Random Forest, and XGBoost.</li>
                <li>Chronological holdouts and time-series validation keep evaluation separate from future matches.</li>
              </ul>
              <p className="project-technology"><strong>Technologies</strong> Python, Random Forest, XGBoost</p>
              <div className="project-links">
                <ExternalLink href={`${profile.github}/epl-predictor`}>Repository</ExternalLink>
                <ExternalLink href={`${profile.github}/epl-predictor#method-notes-read-before-quoting-numbers`}>Method notes</ExternalLink>
              </div>
            </div>
            <aside className="project-evidence" aria-label="EPL Predictor scope">
              <h4>Project scope</h4>
              <p>Match-outcome modeling and a separate interactive tactics website.</p>
              <p className="evidence-context">The website includes sample data and is not yet connected
                to the trained model. No prediction-accuracy figure is claimed.</p>
            </aside>
          </article>

          <article className="project" aria-labelledby="gallery-title">
            <div className="project-description">
              <p className="project-category">Web development & interaction design</p>
              <h3 id="gallery-title">JMS Photo Gallery</h3>
              <p>An interactive photo gallery with a swipeable card deck, separate albums,
                full-screen viewing, and photo uploads.</p>
              <ul className="project-contributions">
                <li>Designed the gallery’s interactions in Figma.</li>
                <li>Published browsing, adding, and deleting features with browser-local photo storage.</li>
              </ul>
              <p className="project-technology"><strong>Technologies</strong> React, TypeScript, Vite, IndexedDB</p>
              <div className="project-links">
                <ExternalLink href="https://trap-jo7.github.io/JMSPhotoGallery/">Open gallery</ExternalLink>
                <ExternalLink href={`${profile.github}/JMSPhotoGallery`}>Repository</ExternalLink>
              </div>
            </div>
            <aside className="project-evidence" aria-label="Photo gallery features">
              <h4>Available to explore</h4>
              <p>Browse the published gallery or add photos in your own browser.</p>
              <p className="evidence-context">Uploaded photos are saved on the visitor’s device using
                IndexedDB. They are not shared with other visitors.</p>
            </aside>
          </article>

          <div className="additional-projects">
            <h3>More on GitHub</h3>
            <p>Additional repositories and ongoing projects.</p>
            <ul>
              <li><ExternalLink href={`${profile.github}/resonant`}>Resonant</ExternalLink><span>Experimental music similarity search</span></li>
              <li><ExternalLink href={`${profile.github}/cage-atlas`}>Cage Atlas</ExternalLink><span>Exploratory fighter style comparisons</span></li>
              <li><ExternalLink href={`${profile.github}/saturday-gridiron`}>Saturday Gridiron</ExternalLink><span>Pixel football game with local career saves</span></li>
            </ul>
          </div>
        </section>

        <section className="experience-background" id="experience" aria-labelledby="experience-title">
          <div className="container section experience-layout">
            <div className="section-heading">
              <h2 id="experience-title">Experience</h2>
              <p>Student leadership, customer service, and operations.</p>
              <ExternalLink href={profile.resume} className="inline-link">Full resume</ExternalLink>
            </div>
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-entry" key={item.organization}>
                  <div className="experience-heading"><h3>{item.role}</h3><span>{item.date}</span></div>
                  <p className="experience-organization">{item.organization}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container section skills-layout" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <h2 id="skills-title">Technical foundation</h2>
            <p>Skills and coursework listed on my resume.</p>
          </div>
          <div className="skills-list">
            <div><h3>Networking</h3><p>TCP/IP, DNS troubleshooting, LAN/WAN fundamentals,
              basic routing and switching, Cisco Packet Tracer, Wireshark</p></div>
            <div><h3>Systems & tools</h3><p>Docker Compose, Windows, user account management,
              system configuration fundamentals, Git, GitHub, Microsoft Office</p></div>
            <div><h3>Programming & web</h3><p>Go, Java, HTML, CSS, Python, MySQL</p></div>
            <div><h3>Languages</h3><p>English — fluent<br />Spanish — professional proficiency</p></div>
          </div>
        </section>

        <section className="container contact-section" id="contact" aria-labelledby="contact-title">
          <div><h2 id="contact-title">Contact</h2><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div className="contact-links">
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <a className="button button-primary" href={profile.resume} download="John-Soliz-Resume.pdf">Download resume <span aria-hidden="true">↓</span></a>
          </div>
        </section>
      </main>
      <footer className="container footer"><span>John Soliz</span><a href="#home">Back to top <span aria-hidden="true">↑</span></a></footer>
    </>
  )
}
