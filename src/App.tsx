import { useEffect, useRef, useState } from 'react'
import { MotionConfig, motion } from 'motion/react'
import { portfolio } from './data/portfolio'
import HomePage from './components/HomePage'
import ProjectDetailPage from './components/ProjectDetailPage'
import ProjectsPage from './components/ProjectsPage'
import { CertificationsPage } from './components/Certifications'
import { SocialLinks } from './components/ActionLinks'
import { ArrowIcon } from './components/Icons'
import { Reveal, ScrollProgress } from './components/MotionUI'
import { useMotionPreference } from './lib/useMotionPreference'
import { useSectionNavigation } from './lib/useSectionNavigation'

export default function App() {
  const reduced = useMotionPreference()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggle = useRef<HTMLButtonElement>(null)
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const isHome = pathname === '/'
  useSectionNavigation(isHome)
  const project = portfolio.work.projects.find(item => pathname === `/projects/${item.id}`)
  const isCertifications = pathname === '/certifications'
  const isProjects = pathname === '/projects'
  const title = isHome ? portfolio.meta.title : `${project?.title ?? (isCertifications ? portfolio.certifications.title : isProjects ? portfolio.work.pageTitle : portfolio.notFound.title)}${portfolio.meta.titleSeparator}${portfolio.identity.name}`

  useEffect(() => {
    document.title = title
    document.documentElement.lang = portfolio.meta.language
    document.querySelector('meta[name="description"]')?.setAttribute('content', project?.description ?? (isCertifications ? portfolio.certifications.pageDescription : isProjects ? portfolio.work.pageDescription : portfolio.meta.description))
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', portfolio.meta.themeColor)
  }, [title, project, isCertifications, isProjects])

  useEffect(() => {
    if (!menuOpen) return
    function onEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuToggle.current?.focus()
      }
    }
    document.addEventListener('keydown', onEscape)
    return () => document.removeEventListener('keydown', onEscape)
  }, [menuOpen])

  return <MotionConfig reducedMotion={reduced ? 'always' : 'never'}>
    <ScrollProgress />
    <div id="site-shell" data-motion={reduced ? 'reduced' : 'full'}>
      <a className="skip-link" href="#main">{portfolio.ui.skipLink}</a>
      <motion.header className="site-header container" initial={reduced ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.5 }}>
        <a className="brand" href="/" onClick={() => setMenuOpen(false)}>{portfolio.identity.brand}</a>
        <button className="menu-toggle" ref={menuToggle} aria-label={menuOpen ? portfolio.ui.closeMenu : portfolio.ui.openMenu} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? 'is-open' : ''} aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="main-navigation" className={menuOpen ? 'main-navigation is-open' : 'main-navigation'} aria-label={portfolio.ui.navigation}>
          {portfolio.navigation.map(item => <a key={item.label} aria-current={item.href === pathname ? 'page' : project && item.href === '/projects' ? 'location' : undefined} href={item.href.startsWith('#') && !isHome ? `/${item.href}` : item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        </nav>
      </motion.header>
      <main id="main">
        {isHome ? <HomePage /> : project ? <ProjectDetailPage project={project} /> : isCertifications ? <CertificationsPage /> : isProjects ? <ProjectsPage /> : <div className="container not-found"><p className="page-eyebrow">{portfolio.notFound.code}</p><h1>{portfolio.notFound.title}</h1><p>{portfolio.notFound.description}</p><a className="button" href="/">{portfolio.notFound.backLabel}<ArrowIcon /></a></div>}
      </main>
      <footer className="contact-section container">
        <div id="contact" className="contact-anchor"><Reveal><h2>{portfolio.contact.title}</h2>
          <p className="contact-description">{portfolio.contact.description}</p>
          <a className="email-link" href={`mailto:${portfolio.identity.email}`}>{portfolio.contact.emailLabel}</a>
          <SocialLinks />
        </Reveal></div>
      </footer>
    </div>
  </MotionConfig>
}
