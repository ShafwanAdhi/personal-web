import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { portfolio } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import { revealProps } from './MotionUI'
import { useMotionPreference } from '../lib/useMotionPreference'

export default function ProjectBrowser() {
  const reduced = useMotionPreference()
  const [category, setCategory] = useState(() => {
    const requested = new URLSearchParams(window.location.search).get('category')
    return portfolio.work.categories.some(item => item.id === requested) ? requested! : portfolio.work.defaultCategoryId
  })
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const projects = portfolio.work.projects.filter(project => category === portfolio.work.allCategoryId || project.category === category)
  function chooseCategory(next: string) {
    setCategory(next)
    const url = new URL(window.location.href)
    if (next === portfolio.work.allCategoryId) url.searchParams.delete('category')
    else url.searchParams.set('category', next)
    history.replaceState(history.state, '', url.pathname + url.search + url.hash)
  }
  return <>          <div className="project-tabs" role="tablist" aria-label={portfolio.ui.projectCategories}>
            {portfolio.work.categories.map((tab, index) => <button key={tab.id} ref={element => { tabRefs.current[index] = element }} id={`tab-${tab.id}`} role="tab" aria-selected={category === tab.id} aria-controls="project-results" tabIndex={category === tab.id ? 0 : -1} onClick={() => chooseCategory(tab.id)} onKeyDown={event => {
              let next = index
              if (event.key === 'ArrowRight') next = (index + 1) % portfolio.work.categories.length
              else if (event.key === 'ArrowLeft') next = (index - 1 + portfolio.work.categories.length) % portfolio.work.categories.length
              else if (event.key === 'Home') next = 0
              else if (event.key === 'End') next = portfolio.work.categories.length - 1
              else return
              event.preventDefault()
              chooseCategory(portfolio.work.categories[next].id)
              tabRefs.current[next]?.focus()
            }}>{tab.label}{category === tab.id && <motion.span className="project-tab-indicator" layoutId="active-project-category" transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 30 }} aria-hidden="true" />}</button>)}
          </div>
          <div id="project-results" role="tabpanel" aria-labelledby={`tab-${category}`} tabIndex={0}>
            <div className="project-grid"><AnimatePresence mode="popLayout">{projects.length ? projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} detailHref={`/projects/${project.id}?from=projects${category === portfolio.work.allCategoryId ? '' : `&category=${encodeURIComponent(category)}`}`} />) : <motion.div key="empty" className="empty-projects" {...revealProps(reduced)}><h3>{portfolio.work.emptyTitle}</h3><p>{portfolio.work.emptyDescription}</p><button type="button" className="button" onClick={() => { chooseCategory(portfolio.work.allCategoryId); tabRefs.current[portfolio.work.categories.findIndex(item => item.id === portfolio.work.allCategoryId)]?.focus() }}>{portfolio.work.allLabel}</button></motion.div>}</AnimatePresence></div>
          </div>
  </>
}
