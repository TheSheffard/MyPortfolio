// Home.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowRight, FaArrowUp, FaBars, FaEnvelope, FaTimes,
  FaGithub, FaLinkedin, FaWhatsapp,
} from 'react-icons/fa';

export const projects = [
  { slug:'ellas-collection', title:"Ella's Collection", duration:'6 Weeks', type:'Full-stack E-commerce', image:'/E_commerce.png', description:'A modern fashion marketplace designed around effortless discovery, secure checkout, and a smooth shopping experience.', tags:['Next.js','Redux','Tailwind','MongoDB'] },
  { slug:'agefest-2025', title:'AgeFest 2025', duration:'4 Weeks', type:'Event Platform', image:'/Work1.png', description:'The digital home of one of Nigeria’s largest entrepreneur conferences, supporting discovery, registration, and payments.', tags:['React','Express.js','Tailwind','MongoDB'], external:'https://preneursafricaintl.com' },
  { slug:'alpha-hunter', title:'Alpha Hunter', duration:'5 Weeks', type:'Telegram Automation', image:'/TelegramBotImage.jpg', description:'A smart crypto companion delivering real-time market alerts based on each trader’s personal watchlist.', tags:['Node.js','Express.js','MongoDB'] },
  { slug:'rich-dot-com', title:'Rich Dot Com', duration:'3 Weeks', type:'Digital Platform', image:'/richdotcom.jpg', description:'A polished digital experience built to connect people, products, and ideas through a clean and responsive interface.', tags:['React','TypeScript','Tailwind'] },
];

const skillGroups = [
  ['Languages','JavaScript · TypeScript · Python · Java'],
  ['Frontend & Mobile','React · Next.js · React Native · Tailwind CSS · Redux · Zustand'],
  ['Backend & Frameworks','NestJS · Node.js · Express.js · Spring'],
  ['Databases & ORMs','Prisma · TypeORM · PostgreSQL · MongoDB'],
  ['Tools & Platforms','GitHub · Puppeteer'],
];

const heroSocials = [
  { icon: FaGithub,   href: 'https://github.com/TheSheffard', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/emmanuel-enemaku-b3893435a', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/2340000000000', label: 'WhatsApp' },
];

const heroStats = [
  { value: '4+', label: 'Years building' },
  { value: '20+', label: 'Projects shipped' },
  { value: '10+', label: 'Happy clients' },
];

const reveal = { initial:{opacity:0,y:30}, whileInView:{opacity:1,y:0}, viewport:{once:true,amount:.14}, transition:{duration:.65,ease:[.22,1,.36,1] as const} };

export function Navigation(){
  const [open,setOpen]=useState(false);
  return <header className="floating-nav">
    <div className="nav-left-pill">
      <Link to="/" className="nav-avatar"><img src="/MyImage.png" alt="Emmanuel Enemaku" /></Link>
      <div className={`nav-menu ${open?'open':''}`}>
        <Link to="/#about" onClick={()=>setOpen(false)}>About</Link>
        <Link to="/all-projects" onClick={()=>setOpen(false)}>All Projects</Link>
        <Link to="/#contact" onClick={()=>setOpen(false)}>Contact</Link>
        <Link to="/#skills" onClick={()=>setOpen(false)}>Skills</Link>
      </div>
      <button className="mobile-menu" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<FaTimes/>:<FaBars/>}</button>
    </div>
    <div className="nav-right-pills">
      <a className="call-pill" href="mailto:Emmanueltokyo24@gmail.com?subject=Project%20Enquiry">Book a 30 min call</a>
      <a className="mail-pill" href="mailto:Emmanueltokyo24@gmail.com" aria-label="Email Emmanuel"><FaEnvelope/></a>
    </div>
  </header>;
}

function ProjectCard({project}:{project:typeof projects[number]}){
  return <Link className="reference-project" to={`/project/${project.slug}`}>
    <img src={project.image} alt={`${project.title} project`} />
    <div className="project-chip"><span>{project.title}</span><i>/</i><span>{project.duration}</span></div>
    <span className="project-arrow"><FaArrowRight/></span>
  </Link>;
}

export function ProjectGrid({limit}:{limit?:number}){
  return <div className="reference-grid">{projects.slice(0,limit).map(project=><ProjectCard project={project} key={project.slug}/>)}</div>;
}

function Footer(){
  return <footer className="reference-footer page-width"><div><p className="spaced-label">Socials</p><div className="footer-profile"><img src="/MyImage.png" alt=""/><div><a href="https://github.com/TheSheffard" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/emmanuel-enemaku-b3893435a" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:Emmanueltokyo24@gmail.com">Email</a></div></div></div><div><p className="spaced-label">Links</p><Link to="/all-projects">All Projects</Link><a href="/#contact">Contact</a><a href="/#about">About</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Emmanuel Enemaku</span><a href="#top">Back to top <FaArrowUp/></a></div></footer>;
}

export default function Home(){
  useEffect(()=>{ if(location.hash) setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView(),60); },[]);
  return <main id="top"><Navigation/>

    {/* ─── HERO (redesigned) ───────────────────────────────── */}
    <section className="reference-hero page-width" id="home">
      <motion.div
        className="hero-eyebrow"
        initial={{ opacity:0, y:12 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:.5 }}
      >
        <span className="hero-dot" />
        <span>Available for new projects</span>
        <span className="hero-eyebrow-sep" />
        <span>Remote · Worldwide</span>
      </motion.div>

      <motion.h1
        className="hero-identity"
        initial={{ opacity:0, y:24 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:.7, delay:.05 }}
      >
        <span>Emmanuel</span>
        <span className="hero-photo"><img src="/MyImage.png" alt="Emmanuel Enemaku" /></span>
        <span>Enemaku</span>
      </motion.h1>

      <motion.div
        className="hero-bottom"
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:.7, delay:.18 }}
      >
        <div className="hero-left">
          <div className="hero-meta">
            <b><i />4+ YRS</b>
            <span>Full-Stack Software Developer</span>
          </div>

          <div className="hero-actions">
            <a className="blue-action" href="#contact">Start a Project <FaArrowRight /></a>
            <Link to="/all-projects" className="white-action">See Projects</Link>
          </div>

          <div className="hero-socials">
            {heroSocials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <p className="hero-blurb">
            I build products for web and mobile — from clear, considered interfaces to the
            scalable systems that sit behind them.
          </p>

          <div className="hero-stats">
            {heroStats.map((s) => (
              <div key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
    {/* ────────────────────────────────────────────────────── */}

    <section className="project-slider" aria-label="Featured projects">
      <div className="project-slider-track">
        <div className="project-slider-group">
          {projects.map((project) => (
            <Link to={`/project/${project.slug}`} className="rail-card" key={project.slug}>
              <img src={project.image} alt={`${project.title} project`} />
              <span>{project.title}</span>
            </Link>
          ))}
        </div>

        <div className="project-slider-group" aria-hidden="true">
          {projects.map((project) => (
            <Link
              to={`/project/${project.slug}`}
              className="rail-card"
              key={`${project.slug}-duplicate`}
              tabIndex={-1}
            >
              <img src={project.image} alt="" />
              <span>{project.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="reference-about page-width" id="about">
      <motion.div className="center-heading" {...reveal}><span className="section-pill">About me</span><h2>Thinking, Process<br/>& Experience</h2></motion.div>
      <div className="about-columns"><motion.div {...reveal}><span>What I do</span><p>I develop web and mobile products that are clear, responsive, and built to scale—from polished interfaces to dependable APIs.</p></motion.div><motion.div {...reveal}><span>My Journey</span><p>My path into software started with curiosity and grew into a passion for turning real problems into useful digital products.</p></motion.div><motion.div {...reveal}><span>My Approach</span><p>I understand the problem first, plan a maintainable solution, then build and refine every layer with care.</p></motion.div></div>
      <motion.div className="career-card" {...reveal}><p className="spaced-label">Career</p><div><span>Full-Stack Developer</span><b>2022 — Present</b></div><div><span>Frontend Developer</span><b>2021 — 2022</b></div></motion.div>
    </section>

    <section className="selected-work page-width" id="work"><motion.div className="center-heading" {...reveal}><span className="section-pill">Projects</span><h2>Selected Work</h2></motion.div><ProjectGrid/>
      <motion.div className="projects-outro" {...reveal}><p>Selected projects that reflect my approach to design, development, and execution.</p><Link className="white-action" to="/all-projects">View All Projects <FaArrowRight/></Link></motion.div>
    </section>

    <section className="toolkit page-width" id="skills"><motion.div className="center-heading" {...reveal}><span className="section-pill">Toolkit</span><h2>Technologies I Use</h2></motion.div><div className="skill-table">{skillGroups.map((row,i)=><motion.div className="skill-line" {...reveal} key={row[0]}><span>0{i+1}</span><h3>{row[0]}</h3><p>{row[1]}</p></motion.div>)}</div></section>

    <section className="contact-section page-width" id="contact"><motion.div className="center-heading" {...reveal}><span className="section-pill">Contact</span><h2>Got a project<br/>in mind?</h2></motion.div><form action={`mailto:Emmanueltokyo24@gmail.com`} method="post" encType="text/plain"><label>Name<input name="name" placeholder="Your name" required/></label><label>Email<input name="email" type="email" placeholder="you@example.com" required/></label><label>Project Information<textarea name="project" placeholder="Tell me about your next project" rows={5} required/></label><button type="submit">Submit <FaArrowRight/></button><small>I’ll respond as soon as possible.</small></form></section>
    <Footer/>
  </main>;
}

export function AllProjects(){return <main id="top"><Navigation/><section className="projects-page page-width"><motion.div className="center-heading" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.65}}><span className="section-pill">All Projects</span><h1>Projects &<br/>case studies</h1><p>A closer look at my work across different digital products and experiences.</p></motion.div><ProjectGrid/></section><Footer/></main>}

export function ProjectDetails({slug}:{slug:string}){
  const project=projects.find(p=>p.slug===slug) || projects[0];
  return <main id="top"><Navigation/><section className="detail-page page-width"><motion.div className="detail-title" initial={{opacity:0,y:25}} animate={{opacity:1,y:0}}><span className="section-pill">Project</span><h1>{project.title}</h1><p>{project.description}</p>{project.external&&<a className="blue-action" href={project.external} target="_blank" rel="noreferrer">Visit Website <FaArrowRight/></a>}</motion.div><div className="detail-hero"><img src={project.image} alt={project.title}/></div><div className="detail-meta"><div><span>Title</span><b>{project.title}</b></div><div><span>Role</span><b>{project.type}</b></div><div><span>Timeline</span><b>{project.duration}</b></div><div><span>Stack</span><b>{project.tags.join(' · ')}</b></div></div><div className="detail-summary"><h2>Built with clarity,<br/>performance, and scale.</h2><p>{project.description} The experience was planned around usability, responsive behavior, and a maintainable full-stack foundation.</p></div></section><Footer/></main>;
}
