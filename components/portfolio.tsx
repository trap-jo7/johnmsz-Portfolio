"use client"

import { useEffect, useState } from "react"
import type { ReactNode } from "react"

const profile = {
  email: "johnmsz@outlook.com",
  linkedin: "https://www.linkedin.com/in/john-soliz-867421301",
  github: "https://github.com/trap-jo7",
  resume: "/john-soliz-resume.pdf",
}

function Arrow({ down = false }: { down?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" style={down ? { transform: "rotate(135deg)" } : undefined}><path d="M5 19 19 5M5 5h14v14" /></svg>
}
function Icon({ type }: { type: "github" | "linkedin" | "mail" | "download" }) {
  const paths = {
    github: <><path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.7-1.6 6.7-7.3a5.7 5.7 0 0 0-1.5-4 5.3 5.3 0 0 0-.1-4s-1.3-.4-4.1 1.5a14 14 0 0 0-7.5 0C4.7-.4 3.4 0 3.4 0a5.3 5.3 0 0 0-.1 4A5.7 5.7 0 0 0 1.8 8c0 5.7 3.4 6.9 6.7 7.3A3.5 3.5 0 0 0 7.5 18v4" transform="translate(1 1) scale(.91)" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7m0-10v.2M11 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></>,
  }
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>
}
function External({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
}

type Category = "All work" | "Infrastructure" | "Data & ML" | "Interactive"
type Project = { id: string; title: string; subtitle: string; category: Category; description: string; tags: string[]; repo: string; demo?: string; notes: string; status: string }
const projects: Project[] = [
  { id: "netscope", title: "NetScope", subtitle: "FIND THE FAILURE. FOLLOW THE EVIDENCE.", category: "Infrastructure", description: "A Go diagnostic CLI and isolated network lab that trace application failures through DNS, TCP, and HTTP—one layer at a time.", tags: ["Go", "Docker Compose", "CoreDNS"], repo: "netscope", notes: "Reproduced incorrect DNS, stopped applications, disconnected networks, and HTTP 503 failures. Across 15 controlled lab trials, the CLI matched expected symptoms and verified recovery in every trial. These are lab results, not production resolution metrics.", status: "Verified lab" },
  { id: "pitchside", title: "Pitchside / EPL Predictor", subtitle: "FOOTBALL, THROUGH A DIFFERENT LENS.", category: "Data & ML", description: "Premier League outcome probabilities with a Python ML pipeline, plus an interactive space for exploring formations, tactics, and squads.", tags: ["Python", "XGBoost", "Random Forest"], repo: "epl-predictor", notes: "Uses Elo and rolling-form features, chronological holdouts, and time-series validation to reduce data leakage. The tactics website is separate from the trained model and includes illustrative sample data; no benchmark accuracy is claimed.", status: "ML + tactics" },
  { id: "resonant", title: "Resonant", subtitle: "FIND MORE MUSIC LIKE THIS MOMENT.", category: "Data & ML", description: "Music discovery by sound. Select a passage and retrieve similar sections using audio embeddings, vector search, and musical feature reranking.", tags: ["Next.js", "FastAPI", "pgvector", "CLAP"], repo: "resonant", notes: "An experimental full-stack prototype: FFmpeg and librosa processing, CLAP embeddings, Celery background jobs, and Postgres vector retrieval. Analysis uses permission-cleared audio. Similarity scores are experimental and have not been benchmarked.", status: "Experimental" },
  { id: "cage", title: "Cage Atlas", subtitle: "SCOUT THE STYLE BEHIND THE STATS.", category: "Data & ML", description: "An exploratory fighter scouting tool that groups fighting styles, finds statistical similarities, and compares historical UFC performance.", tags: ["Python", "FastAPI", "Clustering"], repo: "cage-atlas", notes: "Builds fighter profiles from strike volume, accuracy, defense, takedowns, and control time. Uses a historical UFCStats dataset snapshot. Style groups are exploratory; statistical resemblance is not a fight prediction.", status: "Exploratory tool" },
  { id: "gridiron", title: "Saturday Gridiron", subtitle: "A SMALL WORLD. A FULL FOOTBALL GAME.", category: "Interactive", description: "An original pixel football game with 11-on-11 play, offensive and defensive controls, and a local head-coach career with recruiting and progression.", tags: ["TypeScript", "Canvas", "Game systems"], repo: "saturday-gridiron", notes: "Combines a football simulation, original pixel art, play selection, team management, and browser-local career saves. Touch controls are implemented; physical iPhone acceptance and performance verification remain pending. Available as source for local play.", status: "In development" },
  { id: "gallery", title: "JMS Photo Gallery", subtitle: "A LITTLE MORE ROOM FOR THE VISUAL.", category: "Interactive", description: "A tactile, swipeable photo deck with albums, fullscreen viewing, captions, and drag-and-drop uploads that stay saved in your browser.", tags: ["React", "TypeScript", "IndexedDB"], repo: "JMSPhotoGallery", demo: "https://trap-jo7.github.io/JMSPhotoGallery/", notes: "Keyboard navigation, image-driven background colors, and system light/dark modes complement the card deck. Uploaded photos persist in IndexedDB on the visitor’s own device; they are not shared with other visitors.", status: "Live website" },
]
const categories: Category[] = ["All work", "Infrastructure", "Data & ML", "Interactive"]

function NetworkArt({ hero = false }: { hero?: boolean }) {
  return <div className={`network-art${hero ? " network-art--hero" : ""}`}>
    <div className="terminal-top"><span><i /><i /><i /></span><span>netscope / diagnostic trace</span><span>GO</span></div>
    <div className="trace-command"><span>❯</span> netscope -hostname app.lab.test</div>
    <div className="trace-flow"><div><span className="trace-node">01</span><strong>DNS</strong><small>Resolve</small></div><span className="trace-connector" /><div><span className="trace-node">02</span><strong>TCP</strong><small>Connect</small></div><span className="trace-connector" /><div><span className="trace-node">03</span><strong>HTTP</strong><small>Verify</small></div></div>
    <div className="trace-result"><span className="dot" /><span>Evidence first. Diagnosis next.</span><span>200 OK</span></div>
    {hero && <div className="terminal-footer"><span>ISOLATED DOCKER LAB</span><span>ILLUSTRATIVE HEALTHY TRACE</span></div>}
  </div>
}
function ProjectArt({ id }: { id: string }) {
  if (id === "netscope") return <NetworkArt />
  if (id === "pitchside") return <div className="pitch-art" aria-hidden="true"><div className="pitch-lines"><div className="pitch-circle" />{[[18,50],[35,22],[35,78],[54,36],[54,64],[77,50]].map(([x,y],i)=><span className="pitch-player" key={i} style={{left:`${x}%`,top:`${y}%`}} />)}</div><div className="art-overlay"><span>THE TACTICS LAB</span><strong>Read the game.</strong><small>Formations · Features · Probabilities</small></div><span className="art-corner">4—3—3</span></div>
  if (id === "resonant") return <div className="sound-art" aria-hidden="true"><div className="wave-bars">{Array.from({ length: 64 }, (_,i)=><i key={i} style={{height:`${18+Math.abs(Math.sin(i*.51)*Math.cos(i*.17))*105}px`}} />)}</div><div className="audio-region"><span>SELECT A MOMENT</span></div><div className="sound-caption"><span>resonant</span><span>sound → similarity</span></div></div>
  if (id === "cage") return <div className="cage-art" aria-hidden="true"><svg viewBox="0 0 400 240"><g transform="translate(200 115)" fill="none" stroke="currentColor">{[85,60,35].map(r=><polygon key={r} points={Array.from({length:6},(_,i)=>`${Math.sin(i*Math.PI/3)*r},${Math.cos(i*Math.PI/3)*r}`).join(" ")} opacity=".2"/>)}<polygon points="0,76 65,38 47,-27 0,-79 -62,-36 -36,21" fill="currentColor" fillOpacity=".12" strokeWidth="2"/><polygon points="0,48 39,23 69,-40 0,-59 -40,-23 -62,36" stroke="#e9e6de" opacity=".65" strokeDasharray="4 4"/></g></svg><span className="radar-label radar-label--a">STRIKING</span><span className="radar-label radar-label--b">CONTROL</span><span className="radar-label radar-label--c">DEFENSE</span><div className="cage-caption">STYLE IS A SIGNATURE.</div></div>
  if (id === "gridiron") return <div className="game-art" aria-hidden="true"><div className="game-score">SATURDAY <span>07 : 14</span> GRIDIRON</div><div className="game-field">{[10,30,50,70,90].map(x=><span className="yard-line" key={x} style={{left:`${x}%`}}><i>{x===50?50: x>50?100-x:x}</i></span>)}{Array.from({length:12},(_,i)=><span className={`pixel-player ${i>5?"pixel-player--away":""}`} key={i} style={{left:`${25+(i%6)*9}%`,top:`${i>5?55+(i%3)*8:22+(i%3)*8}%`}} />)}<span className="ball-route" /></div><div className="game-bottom">11 ON 11 <span>BUILD YOUR DYNASTY</span></div></div>
  return <div className="gallery-art" aria-hidden="true"><div className="photo-card photo-card--one"><div className="photo-landscape landscape-one" /></div><div className="photo-card photo-card--two"><div className="photo-landscape landscape-two" /></div><div className="photo-card photo-card--three"><div className="photo-landscape landscape-three" /><span>A different perspective.</span></div><span className="gallery-caption">COLLECT THE MOMENTS.</span></div>
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project-card project-card--${project.id}`}>
    <div className="project-art" role="img" aria-label={`${project.title} conceptual illustration`}><ProjectArt id={project.id} /><span className="project-index">0{index+1}</span></div>
    <div className="project-body"><div className="project-meta"><span>{project.category}</span><span className="project-status"><i />{project.status}</span></div>
      <h3><External href={`${profile.github}/${project.repo}`}>{project.title}<Arrow /></External></h3><p>{project.description}</p>
      <div className="project-tags">{project.tags.map(t=><span key={t}>{t}</span>)}</div>
      <div className="project-links"><External href={`${profile.github}/${project.repo}`}><Icon type="github" /> View source <Arrow /></External>{project.demo && <External href={project.demo}>Visit live site <Arrow /></External>}</div>
      <details><summary>Behind the build <span>+</span></summary><p>{project.notes}</p></details>
    </div>
  </article>
}

export function Portfolio() {
  const [filter,setFilter] = useState<Category>("All work")
  const [menuOpen,setMenuOpen] = useState(false)
  useEffect(()=>{
    if(!menuOpen) return
    const close=(e:KeyboardEvent)=>{if(e.key==="Escape")setMenuOpen(false)}
    window.addEventListener("keydown",close)
    return ()=>window.removeEventListener("keydown",close)
  },[menuOpen])
  const visible = projects.filter(p=>filter==="All work" || p.category===filter)
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><nav className="wrap nav" aria-label="Main navigation"><a className="wordmark" href="#home" aria-label="John Soliz home">js<span>.</span></a><div className={`nav-links ${menuOpen?"is-open":""}`} id="navigation">{[["Work","work"],["About","about"],["Experience","experience"]].map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setMenuOpen(false)}>{label}</a>)}<External href={profile.linkedin}>LinkedIn <Arrow /></External><a href="#resume" className="nav-resume" onClick={()=>setMenuOpen(false)}>Resume <Arrow /></a></div><button className="menu-toggle" type="button" aria-label={menuOpen?"Close navigation":"Open navigation"} aria-controls="navigation" aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?"Close −":"Menu +"}</button></nav></header>
    <main id="main"><section id="home" className="wrap hero" aria-labelledby="hero-title"><div className="hero-intro"><span className="eyebrow"><span className="dot" /> JOHN SOLIZ / IT STUDENT & BUILDER</span><span className="hero-location">BASED IN VIRGINIA ↗</span></div>
      <div className="hero-grid"><div className="hero-copy"><h1 id="hero-title">Curiosity.<br />Built into<br /><span>something real.</span></h1><p>I’m John, an IT student turning questions into working systems—from network diagnostics to machine learning and interactive experiences.</p><div className="hero-actions"><a href="#work" className="button button-primary">Explore my work <Arrow down /></a><a href={profile.resume} className="button button-text" target="_blank" rel="noopener noreferrer">View resume <Arrow /></a></div></div>
      <div className="hero-feature"><div className="feature-label"><span>IN FOCUS / 01</span><span>INFRASTRUCTURE</span></div><NetworkArt hero /><div className="hero-feature-bottom"><div><span>A RECENT BUILD</span><strong>Making the invisible diagnosable.</strong></div><a href="#project-netscope" aria-label="Explore NetScope"><Arrow /></a></div></div></div>
      <div className="hero-footer"><span>DATA. NETWORKS. CODE. A LITTLE CREATIVITY.</span><div><External href={profile.github}><Icon type="github" /> GitHub</External><External href={profile.linkedin}><Icon type="linkedin" /> LinkedIn</External><a href={`mailto:${profile.email}`}><Icon type="mail" /> Email</a></div></div>
    </section>

    <section id="work" className="wrap work-section" aria-labelledby="work-title"><div className="section-head"><div><span className="eyebrow">01 / SELECTED WORK</span><h2 id="work-title">Ideas, made tangible<span>.</span></h2></div><p>Six builds. Different disciplines.<br />The same drive to figure things out.</p></div><div className="filter-row"><div className="filters" role="group" aria-label="Filter projects by category">{categories.map(c=><button key={c} type="button" aria-pressed={filter===c} onClick={()=>setFilter(c)}>{c}{c==="All work" && <span>06</span>}</button>)}</div><span className="filter-count" aria-live="polite">{String(visible.length).padStart(2,"0")} PROJECTS</span></div><div className="project-grid">{visible.map(p=><div key={p.id} id={`project-${p.id}`}><ProjectCard project={p} index={projects.indexOf(p)} /></div>)}</div><div className="work-footer"><p>Each project has a story. The code has the details.</p><External href={profile.github} className="text-link">More on GitHub <Arrow /></External></div></section>

    <section id="about" className="about-section" aria-labelledby="about-title"><div className="wrap about-grid"><div><span className="eyebrow">02 / THE PERSON BEHIND THE PROJECTS</span><h2 id="about-title">I like to know<br />how things<br /><em>actually work.</em></h2><div className="about-coordinate"><span className="crosshair">⌖</span><span>VIRGINIA, USA<br /><small>ALWAYS EXPLORING</small></span></div></div><div className="about-copy"><p className="about-lead">The best way I know to understand a system is to build something with it.</p><p>I’m studying Information Technology at Liberty University, focused on Data Networking & Security, with graduation expected in 2027. My projects connect that foundation to the things I’m curious about: infrastructure, sports, music, and visual experiences.</p><p>I’m building practical experience in troubleshooting, data pipelines, and web development. I enjoy following the evidence, understanding the tradeoffs, and making complicated ideas easier to explore.</p><div className="education-note"><span>LIBERTY UNIVERSITY</span><strong>B.S. Information Technology</strong><p>Data Networking & Security <span>·</span> Expected 2027</p></div><a href={`mailto:${profile.email}`} className="text-link">Let’s talk about what’s next <Arrow /></a></div></div>
      <div className="wrap toolkit"><span className="eyebrow">MY WORKING TOOLKIT</span><div className="toolkit-grid">{[
        ["01","Networks & infrastructure","TCP/IP · DNS · Docker Compose · CoreDNS · Wireshark · Cisco Packet Tracer"],
        ["02","Programming & data","Go · Python · Java · TypeScript · SQL · PostgreSQL · Machine learning"],
        ["03","Web & systems","React · Next.js · FastAPI · Git · Windows · System configuration"],
      ].map(([n,t,s])=><div key={n}><span>{n}</span><h3>{t}</h3><p>{s}</p></div>)}</div></div>
    </section>

    <section id="experience" className="wrap experience-section" aria-labelledby="experience-title"><div className="section-head"><div><span className="eyebrow">03 / EXPERIENCE</span><h2 id="experience-title">A foundation beyond code<span>.</span></h2></div><p>Clear communication. Reliable follow-through.<br />Care for the details.</p></div><div className="experience-list">{[
      {role:"Senate Secretary",org:"Student Government Association · Liberty University",date:"PRESENT",description:"Maintain official Senate meeting minutes and organize motions, votes, and proceedings into accurate records."},
      {role:"Porter & Ambassador",org:"Smarte Carte · Sterling, VA",date:"2024 — 2026",description:"Supported travelers in a busy airport, tracked equipment inventory, and reported shortages, damage, and discrepancies."},
      {role:"Online Order Associate & Stocker",org:"Harris Teeter · Sterling, VA",date:"JAN 2022 — OCT 2023",description:"Picked and packed online orders, prepared pickup receipts, and organized inventory to support timely fulfillment."},
      {role:"Cart Attendant",org:"Sam’s Club · Sterling, VA",date:"DEC 2022 — JAN 2023",description:"Helped customers load purchases and organized carts and merchandise to support daily store operations."},
    ].map((e,i)=><article className="experience-row" key={e.org}><span className="experience-number">0{i+1}</span><div><h3>{e.role}</h3><span className="experience-org">{e.org}</span><p>{e.description}</p></div><span className="experience-date">{e.date}</span></article>)}</div></section>

    <section id="resume" className="wrap resume-section" aria-labelledby="resume-title"><div className="resume-panel"><div className="resume-copy"><span className="eyebrow">04 / THE FULL PICTURE</span><h2 id="resume-title">The person.<br />The projects.<br /><span>The one-pager.</span></h2><p>My education, experience, technical skills, and selected projects—all in one place.</p><div className="hero-actions"><External href={profile.resume} className="button button-primary">Open resume <Arrow /></External><a href={profile.resume} download="John-Soliz-Resume.pdf" className="button button-outline"><Icon type="download" /> Download PDF</a></div><span className="resume-format">PDF DOCUMENT / UPDATED NOVEMBER 2026</span></div><External href={profile.resume} className="resume-preview"><span className="paper-top">JOHN SOLIZ<span>RESUME / 2026</span></span><span className="paper-contact">johnmsz@outlook.com · github.com/trap-jo7</span><span className="paper-label">EDUCATION</span><strong>Liberty University</strong><p>B.S. Information Technology<br />Data Networking & Security · 2027</p><span className="paper-label">SELECTED PROJECTS</span><strong>NetScope</strong><p>Go diagnostics · DNS / TCP / HTTP</p><strong>EPL Predictor</strong><p>Python · Machine learning · Match probabilities</p><strong>JMS Photo Gallery</strong><p>TypeScript · Interactive experiences</p><span className="paper-label">EXPERIENCE</span><strong>Senate Secretary</strong><p>Student Government Association</p><span className="paper-bottom">VIEW FULL RESUME <Arrow /></span></External></div></section>

    <section id="contact" className="wrap contact-section" aria-labelledby="contact-title"><span className="eyebrow"><span className="dot" /> LET’S CONNECT</span><div className="contact-heading"><h2 id="contact-title">What’s next?<br /><span>Let’s find out.</span></h2><a href={`mailto:${profile.email}`} className="contact-arrow" aria-label="Email John Soliz"><Arrow /></a></div><div className="contact-bottom"><p>Interested in internships, technology opportunities,<br />and a good conversation about building things.</p><a href={`mailto:${profile.email}`} className="contact-email">{profile.email} <Arrow /></a></div></section>
    </main>
    <footer className="wrap footer"><a className="wordmark" href="#home" aria-label="Back to top">js<span>.</span></a><span>© {new Date().getFullYear()} John Soliz</span><div><External href={profile.github}>GitHub <Arrow /></External><External href={profile.linkedin}>LinkedIn <Arrow /></External><a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume <Arrow /></a></div><a href="#home" className="back-top">Back to top ↑</a></footer>
  </>
}
