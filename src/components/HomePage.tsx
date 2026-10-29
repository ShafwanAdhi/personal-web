import { motion } from 'motion/react'
import { portfolio } from '../data/portfolio'
import { ExperienceIconGraphic, StarIcon } from './Icons'
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
          <Reveal><h2 className="experience-heading" id="experience-title">{portfolio.about.experienceTitle}</h2></Reveal>
          <div className="experience-grid">{portfolio.about.experiences.map((experience, index) => <motion.article className="experience" key={experience.id} {...revealProps(reduced, index * 0.09)}>
            <div className="experience-topline" aria-hidden="true"><span className="experience-symbol"><ExperienceIconGraphic name={experience.icon} /></span><span className="experience-track" /><span className="experience-number">{String(index + 1).padStart(2, '0')}</span></div>
            <p className="experience-date">{experience.period}</p>
            <div><h3>{experience.title}</h3><p className="experience-company">{experience.company}</p><p className="experience-location">{experience.location}</p><p className="experience-description">{experience.description}</p></div>
          </motion.article>)}</div>
        </div>
      </section>

<ProjectsSection /><CertificationsSection /><ClosingSection /></>
}
