import { portfolio } from '../data/portfolio'
import { MagneticLink, Reveal } from './MotionUI'
import { ArrowIcon } from './Icons'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  const projects = portfolio.work.featuredProjectIds.slice(0, 3).flatMap(id => {
    const project = portfolio.work.projects.find(item => item.id === id)
    return project ? [project] : []
  })
  return <section className="projects-section" aria-labelledby="projects-title"><div className="container">
    <div id="portfolio"><Reveal><h2 id="projects-title">{portfolio.work.title}</h2><p className="projects-description">{portfolio.work.description}</p></Reveal></div>
    <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} imageDetail />)}</div>
    <Reveal className="projects-collection-action"><MagneticLink className="button" href="/projects">{portfolio.work.allLabel}<ArrowIcon /></MagneticLink></Reveal>
  </div></section>
}
