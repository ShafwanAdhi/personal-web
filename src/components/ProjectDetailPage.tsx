import { portfolio, type Project } from '../data/portfolio'
import { motion } from 'motion/react'
import { ArrowIcon } from './Icons'
import { Reveal } from './MotionUI'
import ProjectGallery from './ProjectGallery'
import { useMotionPreference } from '../lib/useMotionPreference'

export default function ProjectDetailPage({ project }: { project: Project }) {
  const copy = portfolio.projectDetail
  const params = new URLSearchParams(window.location.search)
  const fromCollection = params.get('from') === 'projects'
  const requestedCategory = params.get('category')
  const collectionCategory = fromCollection && requestedCategory === project.category && portfolio.work.categories.some(item => item.id === requestedCategory) && requestedCategory !== portfolio.work.allCategoryId ? requestedCategory : null
  const categoryQuery = collectionCategory ? `category=${encodeURIComponent(collectionCategory)}` : ''
  const backHref = fromCollection ? `/projects${categoryQuery ? `?${categoryQuery}` : ''}` : '/#portfolio'
  const category = portfolio.work.categories.find(item => item.id === project.category)?.label
  const reduced = useMotionPreference()
  const filteredSequence = collectionCategory ? portfolio.work.projects.filter(item => item.category === collectionCategory) : portfolio.work.projects
  const exploreOtherCategories = Boolean(collectionCategory && filteredSequence.length < 2)
  const sequence = exploreOtherCategories ? portfolio.work.projects : filteredSequence
  const currentIndex = sequence.findIndex(item => item.id === project.id)
  const nextProject = sequence.length > 1 ? sequence[(currentIndex + 1) % sequence.length] : undefined
  const nextContext = fromCollection ? `?from=projects${categoryQuery && !exploreOtherCategories ? `&${categoryQuery}` : ''}` : ''
  const nextCategory = portfolio.work.categories.find(item => item.id === nextProject?.category)?.label
  return <article className="container detail-page">
    <a className="back-link" href={backHref}><ArrowIcon />{copy.backLabel}</a>
    <Reveal className="detail-heading"><p className="page-eyebrow">{copy.eyebrow}</p>
      <h1>{project.title}</h1><p className="detail-intro">{project.description}</p>
      <p className="detail-category">{category}<span aria-hidden="true"> / </span>{project.year}</p>
      {project.websiteUrl && <a className="button detail-website" href={project.websiteUrl} target="_blank" rel="noopener noreferrer">{copy.websiteLabel}<ArrowIcon /></a>}
    </Reveal>
    <ProjectGallery images={project.gallery.length ? project.gallery : [{ src: project.image, alt: project.imageAlt, caption: project.description }]} />
    <div className="case-study-layout">
      <aside className="case-study-aside">
        <dl className="case-study-facts"><div><dt>{copy.roleLabel}</dt><dd>{project.role}</dd></div><div><dt>{copy.yearLabel}</dt><dd>{project.year}</dd></div><div><dt>{copy.durationLabel}</dt><dd>{project.duration}</dd></div></dl>
        <h2>{copy.stackTitle}</h2><ul className="tech-stack">{project.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
      </aside>
      <div className="case-study-body">
        <Reveal><section aria-labelledby="overview-title"><p className="section-number" aria-hidden="true">{copy.sectionNumbers[0]}</p><h2 id="overview-title">{copy.overviewTitle}</h2><p>{project.overview}</p></section></Reveal>
        <Reveal><section aria-labelledby="contributions-title"><p className="section-number" aria-hidden="true">{copy.sectionNumbers[1]}</p><h2 id="contributions-title">{copy.contributionsTitle}</h2><ol className="contribution-list">{project.contributions.map(item => <li key={item.title}><h3>{item.title}</h3><p>{item.description}</p></li>)}</ol></section></Reveal>
        <Reveal><section aria-labelledby="achievements-title"><p className="section-number" aria-hidden="true">{copy.sectionNumbers[2]}</p><h2 id="achievements-title">{copy.achievementsTitle}</h2><div className="achievement-grid">{project.achievements.map(item => <div key={item.label}><strong>{item.value}</strong><h3>{item.label}</h3><p>{item.description}</p></div>)}</div></section></Reveal>
      </div>
    </div>
    <Reveal className="detail-end">
      <section aria-labelledby="more-work-title">
        <div className="more-work-heading"><h2 id="more-work-title">{copy.relatedTitle}</h2><a className="all-projects-link" href={backHref}>{copy.backLabel}<ArrowIcon /></a></div>
        {nextProject && <motion.a className="next-project" href={`/projects/${nextProject.id}${nextContext}`} aria-labelledby="next-project-title"
          whileHover={reduced ? undefined : { y: -4 }} whileTap={reduced ? undefined : { scale: 0.99 }} transition={{ type: 'spring', stiffness: 260, damping: 24 }}>
          <div className="next-project-image"><img src={nextProject.image} alt={nextProject.imageAlt} loading="lazy" width="800" height="520" /></div>
          <div className="next-project-content"><p className="page-eyebrow">{exploreOtherCategories ? copy.moreCategoriesLabel : copy.nextLabel}</p>
            <p className="next-project-category">{nextCategory}<span aria-hidden="true"> / </span>{nextProject.year}</p>
            <h3 id="next-project-title">{nextProject.title}</h3><p className="next-project-description">{nextProject.description}</p>
            <span className="next-project-action">{copy.nextAction}<span><ArrowIcon /></span></span>
          </div>
        </motion.a>}
      </section>
    </Reveal>
  </article>
}
