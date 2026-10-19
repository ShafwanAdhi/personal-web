import { portfolio } from '../data/portfolio'
import { ArrowIcon } from './Icons'
import { Reveal } from './MotionUI'
import ProjectBrowser from './ProjectBrowser'

export default function ProjectsPage() {
  const copy = portfolio.work
  return <div className="container projects-page">
    <a className="back-link" href="/#portfolio"><ArrowIcon />{copy.backLabel}</a>
    <Reveal className="detail-heading"><p className="page-eyebrow">{copy.pageEyebrow}</p><h1>{copy.pageTitle}</h1><p className="detail-intro">{copy.pageDescription}</p></Reveal>
    <ProjectBrowser />
  </div>
}
