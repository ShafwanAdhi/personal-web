import { forwardRef } from 'react'
import { motion, useIsPresent, useTransform, type MotionStyle } from 'motion/react'
import { portfolio, type Project } from '../data/portfolio'
import { usePointerMotion } from '../lib/usePointerMotion'
import { ArrowIcon } from './Icons'
import { MagneticLink, revealProps } from './MotionUI'

const ProjectCard = forwardRef<HTMLElement, { project: Project; index: number; detailHref?: string; imageDetail?: boolean }>(
  function ProjectCard({ project, index, detailHref, imageDetail = false }, ref) {
    const isPresent = useIsPresent()
    const { x, y, reduced, move, reset } = usePointerMotion(1)
    const rotateX = useTransform(y, value => value * -4)
    const rotateY = useTransform(x, value => value * 4)
    const shineX = useTransform(x, value => `${(value + 1) * 50}%`)
    const shineY = useTransform(y, value => `${(value + 1) * 50}%`)
    const href = detailHref ?? `/projects/${project.id}`

    return <motion.article ref={ref} className="project" layout={reduced ? false : 'position'}
      aria-hidden={isPresent ? undefined : true} inert={!isPresent} data-exiting={!isPresent}
      {...revealProps(reduced, (index % 3) * 0.08)}
      exit={{ opacity: 0, y: reduced ? 0 : -12, transition: { duration: reduced ? 0 : 0.18 } }}>
      <motion.div className="project-image-button" onPointerMove={move} onPointerLeave={reset}
        style={{ rotateX, rotateY, transformPerspective: 900, '--shine-x': shineX, '--shine-y': shineY } as MotionStyle}
        >
        <img src={project.image} alt={project.imageAlt} loading="lazy" width="800" height="520" />
        {imageDetail && <a className="project-preview-link" href={href} aria-label={portfolio.work.viewLabel} aria-describedby={`project-title-${project.id}`} title={portfolio.work.viewLabel}><span className="project-detail-icon" aria-hidden="true"><ArrowIcon /></span></a>}
      </motion.div>
      <h3 id={`project-title-${project.id}`}>{project.title}</h3><p>{project.description}</p>
      {!imageDetail && <div className="project-actions">
        <MagneticLink className="button" href={href}>{portfolio.work.viewLabel}<ArrowIcon /></MagneticLink>
      </div>}
    </motion.article>
  },
)

export default ProjectCard
