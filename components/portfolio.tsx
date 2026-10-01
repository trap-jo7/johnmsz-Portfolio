"use client"

import { useEffect, useState } from "react"
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Download,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Network,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react"

const profile = {
  name: "John Soliz",
  email: "johnmsz@outlook.com",
  linkedin: "https://www.linkedin.com/in/john-soliz-867421301",
  github: "",
  resume: "/john-soliz-resume.pdf",
  graduation: "2027",
}

const navigation = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Resume", "resume"],
  ["Contact", "contact"],
] as const

const skillGroups = [
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    description: "Building a strong security foundation.",
    skills: ["Security fundamentals", "Threat awareness", "Encryption", "Access control", "Security labs"],
  },
  {
    title: "Networking",
    icon: Network,
    description: "Understanding how systems connect.",
    skills: ["TCP/IP", "LAN / WAN", "DNS", "DHCP", "Routing concepts", "Troubleshooting"],
  },
  {
    title: "Systems",
    icon: Terminal,
    description: "Practical operating system knowledge.",
    skills: ["Windows", "Linux fundamentals", "User accounts", "System configuration", "Hardware"],
  },
  {
    title: "Programming & data",
    icon: Database,
    description: "Learning by building and organizing.",
    skills: ["Java", "C++", "SQL", "Relational databases", "Data systems"],
  },
  {
    title: "Tools & infrastructure",
    icon: Cloud,
    description: "Curious about the technology underneath.",
    skills: ["Git", "GitHub", "VS Code", "Microsoft Office", "Virtualization", "Cloud concepts"],
  },
]

const projects = [
  {
    number: "01",
    title: "Cybersecurity labs",
    category: "SECURITY · LEARNING TRACK",
    icon: ShieldCheck,
    description:
      "Hands-on exploration of security fundamentals, encryption, password safety, network security, and threat awareness.",
    tags: ["Security", "Networking", "Linux"],
    style: "project-art--security",
  },
  {
    number: "02",
    title: "Programming practice",
    category: "SOFTWARE · COURSEWORK",
    icon: Code2,
    description:
      "Java and C++ coursework focused on object-oriented programming, data processing, problem solving, and input validation.",
    tags: ["Java", "C++", "OOP"],
    style: "project-art--code",
  },
  {
    number: "03",
    title: "Networking & systems labs",
    category: "INFRASTRUCTURE · COURSEWORK",
    icon: Network,
    description:
      "Practical work with networking commands, operating systems, hardware, system administration, and technical troubleshooting.",
    tags: ["TCP/IP", "Windows", "Systems"],
    style: "project-art--network",
  },
  {
    number: "04",
    title: "More in progress",
    category: "PERSONAL PROJECTS · COMING UP",
    icon: Database,
    description:
      "I’m continuing to build small, practical projects as I explore data systems, cloud technologies, and infrastructure.",
    tags: ["Data", "Cloud", "Infrastructure"],
    style: "project-art--data",
  },
]

const experience = [
  {
    role: "Porter & Ambassador",
    company: "Smarte Carte",
    date: "Dec 2023 — Present",
    place: "Sterling, VA",
    description:
      "Deliver customer support in a high-traffic travel environment. Maintain equipment inventory, report discrepancies, and keep rental equipment organized and ready during busy periods.",
    skills: ["Customer service", "Inventory accuracy", "Operations"],
    current: true,
  },
  {
    role: "Cart Attendant",
    company: "Sam’s Club",
    date: "Dec 2022 — Jan 2023",
    place: "Sterling, VA",
    description:
      "Supported customers with purchases, retrieved and organized carts, stocked displays, and helped maintain clean, efficient warehouse areas.",
    skills: ["Customer support", "Organization", "Teamwork"],
  },
  {
    role: "Online Order Associate & Stocker",
    company: "Harris Teeter",
    date: "Jan 2022",
    place: "Sterling, VA",
    description:
      "Selected, organized, and packaged online orders for pickup while assisting with stocking and inventory organization.",
    skills: ["Order fulfillment", "Accuracy", "Inventory"],
  },
]

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const updateProgress = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
      })
    }
    updateProgress()
    window.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", updateProgress)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
    }
  }, [])

  return <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
}

function SiteNav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand-mark" href="#home" aria-label="John Soliz, home">
          <span>JS</span>
          <span className="brand-name">John Soliz</span>
        </a>
        <div className={`nav-links${open ? " nav-links--open" : ""}`}>
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-availability" href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
            <span className="availability-dot" /> Available
          </a>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
    </header>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function ActionLink({
  href,
  children,
  secondary = false,
  download = false,
  external = false,
}: {
  href: string
  children: React.ReactNode
  secondary?: boolean
  download?: boolean
  external?: boolean
}) {
  return (
    <a
      className={`action-link${secondary ? " action-link--secondary" : ""}`}
      href={href}
      {...(download ? { download: "John-Soliz-Resume.pdf" } : {})}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  )
}

export function Portfolio() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal")
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <main id="home" className="portfolio-shell">
      <ScrollProgress />
      <div className="ambient ambient--hero" aria-hidden="true" />
      <div className="ambient ambient--lower" aria-hidden="true" />
      <SiteNav />

      <section className="hero section-wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="status-pill reveal">
            <span className="availability-dot" /> Open to internship & technology opportunities
          </div>
          <p className="hero-pretitle reveal">INFORMATION TECHNOLOGY · LYNCHBURG, VA</p>
          <h1 id="hero-title" className="reveal">
            John <span>Soliz.</span>
          </h1>
          <p className="hero-specialty reveal">Data systems <span>·</span> Security <span>·</span> Infrastructure</p>
          <p className="hero-description reveal">
            Senior IT student graduating in 2027, building experience across cybersecurity, data systems,
            networking, software, and modern IT infrastructure.
          </p>
          <div className="hero-actions reveal">
            <ActionLink href="#projects">Explore my work <ArrowDownRight aria-hidden="true" /></ActionLink>
            <ActionLink href={profile.resume} secondary external>View resume <ArrowUpRight aria-hidden="true" /></ActionLink>
          </div>
          <div className="hero-socials reveal" aria-label="Social links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="John Soliz on LinkedIn">
              <span className="social-icon-text">in</span><span>LinkedIn</span><ArrowUpRight aria-hidden="true" />
            </a>
            {profile.github ? (
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="John Soliz on GitHub">
                <span className="github-glyph" aria-hidden="true">gh</span><span>GitHub</span><ArrowUpRight aria-hidden="true" />
              </a>
            ) : (
              <span className="social-pending"><span className="github-glyph" aria-hidden="true">gh</span><span>GitHub <small>link soon</small></span></span>
            )}
            <a href={`mailto:${profile.email}`} aria-label={`Email John Soliz at ${profile.email}`}>
              <Mail aria-hidden="true" /><span>Email</span><ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal" aria-label="A visual overview of John’s technology interests">
          <div className="visual-orbit visual-orbit--outer" />
          <div className="visual-orbit visual-orbit--inner" />
          <div className="visual-cross visual-cross--one" />
          <div className="visual-cross visual-cross--two" />
          <div className="visual-card">
            <div className="visual-card-top">
              <span className="window-dots"><i /><i /><i /></span>
              <span className="visual-label">SYSTEMS OVERVIEW</span>
              <span className="visual-live"><span className="availability-dot" /> ONLINE</span>
            </div>
            <div className="visual-center">
              <div className="core-ring"><div className="core-inner"><span>JS</span></div></div>
              <div className="orbit-node node-security"><ShieldCheck aria-hidden="true" /></div>
              <div className="orbit-node node-network"><Network aria-hidden="true" /></div>
              <div className="orbit-node node-data"><Database aria-hidden="true" /></div>
              <div className="orbit-node node-cloud"><Cloud aria-hidden="true" /></div>
            </div>
            <div className="visual-card-bottom">
              <div><span className="visual-stat-label">FOCUS AREA</span><strong>Data systems & security</strong></div>
              <span className="visual-status"><span /> LEARNING IN MOTION</span>
            </div>
          </div>
          <div className="floating-note note-top"><span className="note-icon"><GraduationCap aria-hidden="true" /></span><span><small>ON TRACK</small><strong>Class of ’27</strong></span></div>
          <div className="floating-note note-bottom"><span className="note-icon note-icon--violet"><Code2 aria-hidden="true" /></span><span><small>CURRENTLY EXPLORING</small><strong>Security + systems</strong></span></div>
          <span className="hero-visual-caption">CURIOUS BY DESIGN<span> / </span>BUILT TO LEARN</span>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-cue-line" />Scroll to explore</a>
      </section>

      <section id="about" className="section-wrap section-block about-section" aria-labelledby="about-title">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curiosity, meet capability." description="I like knowing what’s happening under the hood—and getting hands-on with the systems that keep things running." />
        <div className="about-grid">
          <div className="about-story glass-card reveal">
            <span className="story-mark" aria-hidden="true">01 / PROFILE</span>
            <h3>Technology makes more sense when you get your hands on it.</h3>
            <p>
              I’m an Information Technology student at Liberty University with a background in IT systems and a growing focus on data networking and security. I enjoy breaking down how systems work, troubleshooting real-world problems, and building confidence through practical projects, labs, and coursework.
            </p>
            <p>
              I’m preparing for a career in technology and especially interested in cybersecurity, networking, cloud technologies, software development, and IT infrastructure.
            </p>
            <a className="text-link" href="#experience">Get to know my background <ArrowRight aria-hidden="true" /></a>
          </div>
          <div className="about-facts">
            {[
              ["EDUCATION", "B.S. Information Technology", "Liberty University"],
              ["FOCUS", "Data Networking & Security", "Systems · Security · Networks"],
              ["GRADUATION", "Expected 2027", "Currently completing my degree"],
              ["LOCATION", "Virginia", "Open to internship opportunities"],
            ].map(([label, value, sub], index) => (
              <div className="fact-card glass-card reveal" key={label} style={{ "--reveal-index": index } as React.CSSProperties}>
                <span className="fact-index">0{index + 1}</span>
                <div><span className="fact-label">{label}</span><strong>{value}</strong><small>{sub}</small></div>
                {index === 0 ? <GraduationCap aria-hidden="true" /> : index === 1 ? <ShieldCheck aria-hidden="true" /> : index === 2 ? <Check aria-hidden="true" /> : <MapPin aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
        <div className="education-strip glass-card reveal">
          <div className="education-icon"><GraduationCap aria-hidden="true" /></div>
          <div className="education-main"><span className="fact-label">EDUCATION SNAPSHOT</span><strong>Information Technology</strong><span>Liberty University · Data Networking & Security</span></div>
          <div className="education-secondary"><strong>2026 — 2027</strong><span>Expected graduation</span></div>
          <a href={profile.resume} className="education-link" target="_blank" rel="noreferrer" aria-label="View education details in resume"><ArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>

      <section id="experience" className="section-wrap section-block experience-section" aria-labelledby="experience-title">
        <SectionHeading eyebrow="THE PATH SO FAR" title="Experience that travels." description="Customer-facing roles taught me to stay dependable, communicate clearly, and keep details in order—even when it gets busy." />
        <div className="experience-layout">
          <aside className="experience-aside reveal">
            <div className="aside-symbol"><BriefcaseBusiness aria-hidden="true" /></div>
            <span className="fact-label">WORK EXPERIENCE</span>
            <p>Every role has sharpened skills I’ll bring to a technology team: service, reliability, attention to detail, and a willingness to learn.</p>
            <div className="aside-note"><span className="availability-dot" /> CURRENTLY WORKING</div>
          </aside>
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item reveal" key={item.company} style={{ "--reveal-index": index } as React.CSSProperties}>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-card glass-card">
                  <div className="timeline-top"><span className="timeline-date">{item.date}</span>{item.current && <span className="current-badge"><span className="availability-dot" /> CURRENT</span>}</div>
                  <h3>{item.role}</h3>
                  <div className="timeline-company">{item.company}<span>·</span><span className="timeline-location">{item.place}</span></div>
                  <p>{item.description}</p>
                  <div className="tag-row">{item.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="education-history reveal">
          <span className="fact-label">EDUCATION</span>
          <div className="education-history-row"><span className="education-history-dot" /><div><strong>Liberty University</strong><p>B.S. Information Technology · Data Networking & Security</p></div><span className="education-history-date">2026 — Present</span></div>
          <div className="education-history-row"><span className="education-history-dot" /><div><strong>Northern Virginia Community College</strong><p>A.S. Information Technology Systems</p></div><span className="education-history-date">2023 — 2025</span></div>
          <div className="education-history-row"><span className="education-history-dot" /><div><strong>Dominion High School</strong><p>High School Diploma · Sterling, VA</p></div><span className="education-history-date">2023</span></div>
        </div>
      </section>

      <section id="skills" className="section-wrap section-block skills-section" aria-labelledby="skills-title">
        <SectionHeading eyebrow="TOOLS OF THE TRADE" title="A foundation to build on." description="A growing toolkit shaped by coursework, labs, and real-world problem solving. Always learning, always adding." />
        <div className="skills-grid">
          {skillGroups.map(({ title, icon: Icon, description, skills }, index) => (
            <article className={`skill-card glass-card reveal${index === 0 ? " skill-card--featured" : ""}`} key={title} style={{ "--reveal-index": index } as React.CSSProperties}>
              <div className="skill-card-head"><span className="skill-icon"><Icon aria-hidden="true" /></span><span className="skill-card-index">0{index + 1}</span></div>
              <h3>{title}</h3><p>{description}</p>
              <div className="tag-row">{skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
            </article>
          ))}
          <div className="skill-note reveal"><span className="note-line" /><p>Focused on learning the fundamentals deeply, then applying them to practical problems.</p></div>
        </div>
      </section>

      <section id="projects" className="section-wrap section-block projects-section" aria-labelledby="projects-title">
        <div className="projects-heading-row">
          <SectionHeading eyebrow="WORK IN PROGRESS" title="Featured projects." description="Hands-on learning across security, programming, and systems. These highlight the areas I’m actively building experience in." />
          <a className="text-link projects-link" href={`mailto:${profile.email}?subject=John%20Soliz%20projects`}>Ask me about my work <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="projects-grid">
          {projects.map(({ number, title, category, icon: Icon, description, tags, style }, index) => (
            <article className="project-card glass-card reveal" key={title} style={{ "--reveal-index": index } as React.CSSProperties}>
              <div className={`project-art ${style}`} aria-hidden="true">
                <div className="art-grid" /><div className="art-orb" /><div className="art-lines"><i /><i /><i /><i /></div>
                <div className="project-art-icon"><Icon aria-hidden="true" /></div>
                <span className="project-art-index">{number}<span> / 04</span></span>
                <span className="art-caption">{title.toUpperCase()}</span>
              </div>
              <div className="project-content"><span className="project-category">{category}</span><h3>{title}</h3><p>{description}</p><div className="tag-row">{tags.map((tag) => <span className="skill-tag" key={tag}>{tag}</span>)}</div><a className="project-contact-link" href={`mailto:${profile.email}?subject=${encodeURIComponent(`Ask John about ${title}`)}`}>Ask me about this work <ArrowUpRight aria-hidden="true" /></a></div>
            </article>
          ))}
        </div>
        <p className="projects-footnote"><span /> Project descriptions reflect coursework and learning areas; published repository links will be added as projects are ready to share.</p>
      </section>

      <section id="resume" className="section-wrap section-block resume-section" aria-labelledby="resume-title">
        <div className="resume-panel glass-card reveal">
          <div className="resume-glow" aria-hidden="true" />
          <div className="resume-copy"><span className="eyebrow"><span className="eyebrow-line" /> THE FULL PICTURE</span><h2 id="resume-title">Want the <span>full picture?</span></h2><p>Explore my education, technical foundation, experience, and the skills I’m bringing to my next opportunity.</p><div className="hero-actions"><ActionLink href={profile.resume} external>View my resume <ArrowUpRight aria-hidden="true" /></ActionLink><ActionLink href={profile.resume} secondary download>Download PDF <Download aria-hidden="true" /></ActionLink></div></div>
          <div className="resume-document" aria-hidden="true"><div className="document-sheet"><div className="document-mark"><FileText /></div><span className="document-name">JOHN SOLIZ</span><span className="document-role">INFORMATION TECHNOLOGY</span><div className="document-rule" /><span className="document-line document-line--long" /><span className="document-line" /><span className="document-line document-line--mid" /><span className="document-section-label">EDUCATION</span><span className="document-line document-line--long" /><span className="document-line document-line--mid" /><span className="document-section-label">SKILLS & EXPERIENCE</span><span className="document-line document-line--long" /><span className="document-line" /><span className="document-line document-line--mid" /><div className="document-seal"><Check /></div></div><span className="document-caption">RESUME · 2026</span></div>
        </div>
      </section>

      <section className="section-wrap section-block connect-section" aria-labelledby="connect-title">
        <SectionHeading eyebrow="ELSEWHERE ON THE WEB" title="Let’s connect." description="The best opportunities start with a conversation. Find me on LinkedIn or reach out directly." />
        <div className="connect-grid">
          <a className="connect-card glass-card reveal" href={profile.linkedin} target="_blank" rel="noreferrer"><span className="connect-icon connect-icon--linkedin"><span className="social-icon-text">in</span></span><span className="connect-text"><strong>LinkedIn</strong><small>Connect with me professionally.</small></span><ArrowUpRight className="connect-arrow" aria-hidden="true" /></a>
          <a className="connect-card glass-card reveal" href={`mailto:${profile.email}`}><span className="connect-icon"><Mail aria-hidden="true" /></span><span className="connect-text"><strong>Email</strong><small>Internships, projects, or opportunities.</small></span><ArrowUpRight className="connect-arrow" aria-hidden="true" /></a>
          <a className="connect-card glass-card reveal" href={profile.resume} target="_blank" rel="noreferrer"><span className="connect-icon"><FileText aria-hidden="true" /></span><span className="connect-text"><strong>Resume</strong><small>Education, experience, and skills.</small></span><ArrowUpRight className="connect-arrow" aria-hidden="true" /></a>
          {profile.github ? <a className="connect-card glass-card reveal" href={profile.github} target="_blank" rel="noreferrer"><span className="connect-icon"><span className="github-glyph" aria-hidden="true">gh</span></span><span className="connect-text"><strong>GitHub</strong><small>Code, labs, and technical projects.</small></span><ArrowUpRight className="connect-arrow" aria-hidden="true" /></a> : <div className="connect-card connect-card--pending glass-card reveal"><span className="connect-icon"><span className="github-glyph" aria-hidden="true">gh</span></span><span className="connect-text"><strong>GitHub</strong><small>Profile link to be added.</small></span><span className="connect-pending">COMING SOON</span></div>}
        </div>
      </section>

      <section id="contact" className="section-wrap section-block contact-section" aria-labelledby="contact-title">
        <div className="contact-panel glass-card reveal">
          <div className="contact-orb contact-orb--one" aria-hidden="true" /><div className="contact-orb contact-orb--two" aria-hidden="true" />
          <span className="eyebrow"><span className="eyebrow-line" /> OPEN TO WHAT’S NEXT</span>
          <h2 id="contact-title">Let’s build <span>something.</span></h2>
          <p>I’m open to internships, technology opportunities, collaborative projects, and conversations about IT, cybersecurity, and emerging technology.</p>
          <div className="contact-actions"><ActionLink href={`mailto:${profile.email}`}>Email me <Mail aria-hidden="true" /></ActionLink><ActionLink href={profile.linkedin} secondary external>Connect on LinkedIn <ArrowUpRight aria-hidden="true" /></ActionLink></div>
          <span className="contact-signoff">GOOD THINGS START WITH A HELLO.</span>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <div className="footer-main"><a className="brand-mark" href="#home"><span>JS</span><span className="brand-name">John Soliz</span></a><p>Information Technology <span>·</span> Data Systems & Security</p><span className="footer-note">Built with curiosity and technology.</span></div>
        <div className="footer-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a><a href={`mailto:${profile.email}`}>Email <ArrowUpRight aria-hidden="true" /></a><a href={profile.resume} target="_blank" rel="noreferrer">Resume <ArrowUpRight aria-hidden="true" /></a></div>
        <div className="footer-bottom"><span>© 2026 John Soliz</span><a href="#home">Back to top <ChevronDown aria-hidden="true" /></a><span className="footer-location"><MapPin aria-hidden="true" /> Virginia, USA</span></div>
      </footer>
    </main>
  )
}

