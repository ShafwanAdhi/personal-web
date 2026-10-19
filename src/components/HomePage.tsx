import { motion } from 'motion/react'
import { portfolio } from '../data/portfolio'
import { StarIcon } from './Icons'
import Hero from './Hero'
import ClosingSection from './ClosingSection'
import ProjectsSection from './ProjectsSection'
import { CertificationsSection } from './Certifications'
import { Reveal, revealProps } from './MotionUI'
import { useMotionPreference } from '../lib/useMotionPreference'

export default function HomePage() {
  const reduced = useMotionPreference()
  return <>          <div className="hero-section">
          <Hero />
          </div>

      <div className="skills-strip" tabIndex={0} title={portfolio.ui.skillsMotionHint} aria-label={portfolio.skills.join(', ')}>
        <div className="skills-track" aria-hidden="true">{[0, 1, 2, 3].map(repeat => <div className="skills-group" key={repeat}>{portfolio.skills.map(skill => <span key={skill}><b>{skill}</b><StarIcon /></span>)}</div>)}</div>
      </div>

      <section className="about-section" aria-labelledby="about-title">
        <div className="container">
          <div id="about"><Reveal><h2 id="about-title">{portfolio.about.title}</h2><p className="about-description">{portfolio.about.description}</p></Reveal></div>
          <Reveal><h3 className="experience-heading">{portfolio.about.experienceTitle}</h3></Reveal>
          <div className="experience-grid">{portfolio.about.experiences.map((experience, index) => <motion.article className="experience" key={experience.id} {...revealProps(reduced, index * 0.09)}>
            <p className="experience-date">{experience.period}</p>
            <div><h4>{experience.title}</h4><p className="experience-company">{experience.company}</p><p className="experience-location">{experience.location}</p><p className="experience-description">{experience.description}</p></div>
          </motion.article>)}</div>
        </div>
      </section>

<ProjectsSection /><CertificationsSection /><ClosingSection /></>
}
