import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { StrictMode } from 'react'
import App from './App'
import { portfolio } from './data/portfolio'

beforeEach(() => window.history.replaceState(null, '', '/'))
afterEach(() => vi.unstubAllGlobals())

function mobileViewport() {
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches: query === '(max-width: 599px)' || query === '(prefers-reduced-motion: reduce)',
    addEventListener: () => {}, removeEventListener: () => {},
  }))
}

describe('portfolio visitor journeys', () => {
  it.each([
    ['waspadai', 'https://waspadai.shafwan.digital/'],
    ['sisdas-rag-assistant', 'https://ragcampus.shafwan.digital/'],
    ['bonjermgu', 'https://bonjermgu.com/'],
    ['numora-question-variants', null],
    ['siparih', null],
  ])('offers the configured website only on eligible case studies: %s', (id, url) => {
    window.history.replaceState(null, '', `/projects/${id}`)
    render(<App />)
    if (!url) {
      expect(screen.queryByRole('link', { name: 'Visit Website' })).not.toBeInTheDocument()
      return
    }
    const link = screen.getByRole('link', { name: 'Visit Website' })
    expect(link).toHaveAttribute('href', url)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
  it('introduces Shafwan and links the hero action to his work', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Shafwanadhi' })).toHaveAttribute('href', '/')
    expect(document.title).toBe('Shafwan Adhi - AI, Machine Learning & Data Science')
    expect(screen.getByRole('link', { name: 'Get in Touch' })).toHaveAttribute('href', 'mailto:shafwan.adhi.dwi@gmail.com')
    expect(screen.getByText("Hi, I'm Shafwan Adhi.")).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Building Intelligent Systems with AI & Data.' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore My Work' })).toHaveAttribute('href', '#portfolio')
    expect(screen.getByRole('heading', { name: 'A Little About Me' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Experience & Involvement' })).toBeInTheDocument()
  })

  it('moves hero icons without animated layout coordinates and fades the full artwork', () => {
    const { container } = render(<App />)
    for (const badge of container.querySelectorAll<HTMLElement>('.tech-badge')) {
      expect(badge.style.left).toBe('')
      expect(badge.style.top).toBe('')
    }
    expect(container.querySelector('.hero-portrait-fade')).toHaveAttribute('aria-hidden', 'true')
  })
  it('makes each featured-project image a single accessible case-study link', () => {
    render(<App />)
    const section = screen.getByRole('region', { name: 'Selected Projects' })
    for (const link of within(section).getAllByRole('link', { name: 'View Case Study' })) {
      expect(link.closest('.project-image-button')).not.toBeNull()
      expect(link).toHaveClass('project-preview-link')
      expect(link.querySelector('.project-detail-icon')).not.toBeNull()
      expect(link).toHaveTextContent('')
      expect(link.querySelector('svg')).not.toBeNull()
    }
    expect(section.querySelector('.project-actions')).toBeNull()
  })
  it('offers only Gmail, LinkedIn, and GitHub in each social group', () => {
    const { container } = render(<App />)
    for (const group of container.querySelectorAll('.social-links')) {
      const links = within(group as HTMLElement).getAllByRole('link')
      expect(links.map(link => link.getAttribute('aria-label'))).toEqual(['Gmail', 'LinkedIn', 'GitHub'])
      expect(links[0]).toHaveAttribute('href', 'mailto:shafwan.adhi.dwi@gmail.com')
      expect(links[0]).not.toHaveAttribute('target')
      expect(links[1]).toHaveAttribute('href', 'https://www.linkedin.com/in/shafwan-adhi-dwi-nugraha-b90943321/')
      expect(links[2]).toHaveAttribute('href', 'https://github.com/ShafwanAdhi')
    }
  })
  it('starts at the landing page when an old section URL is reopened', () => {
    window.history.replaceState(null, '', '/#certifications')
    render(<App />)
    expect(window.location.hash).toBe('')
    expect(within(screen.getByRole('navigation', { name: 'Main navigation' })).queryByRole('link', { name: 'Home' })).not.toBeInTheDocument()
  })
  it('shows all projects by default and restores them after filtering', async () => {
    window.history.replaceState(null, '', '/projects')
    const user = userEvent.setup()
    render(<StrictMode><App /></StrictMode>)
    expect(screen.queryByRole('link', { name: 'Blog' })).not.toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'All' })).toHaveAttribute('aria-selected', 'true')
    const allCount = screen.getAllByRole('link', { name: 'View Case Study' }).length
    expect(screen.getAllByRole('tab').map(tab => tab.textContent)).toEqual(['All', 'AI / ML', 'Software Engineering', 'Others'])
    await user.click(screen.getByRole('tab', { name: 'Software Engineering' }))
    expect(screen.getAllByRole('link', { name: 'View Case Study' })).toHaveLength(4)
    expect(screen.queryByRole('heading', { name: 'WaspadAI' })).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Numora Assessment & Question Variants' })).toBeInTheDocument()
    await user.click(screen.getByRole('tab', { name: 'All' }))
    expect(screen.getAllByRole('link', { name: 'View Case Study' })).toHaveLength(allCount)
  })
  it('gives each project a distinct page link instead of external buttons', () => {
    render(<App />)
    const links = screen.getAllByRole('link', { name: 'View Case Study' })
    expect(new Set(links.map(link => link.getAttribute('href'))).size).toBe(links.length)
    expect(links[0]).toHaveAttribute('href', expect.stringMatching(/^\/projects\/[^/]+$/))
    expect(screen.queryByRole('link', { name: 'View Dribbble' })).not.toBeInTheDocument()
  })
  it('renders a direct case study with a controllable, wrapping gallery', async () => {
    window.history.replaceState(null, '', '/projects/waspadai')
    const user = userEvent.setup()
    render(<App />)
    for (const name of ['Tech Stack', 'Overview', 'What I Did', 'Impact & Achievements']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    const gallery = screen.getByRole('region', { name: 'Project gallery' })
    const firstImage = within(gallery).getByRole('img').getAttribute('src')
    await user.click(within(gallery).getByRole('button', { name: 'Next image' }))
    expect(within(gallery).getByRole('img')).not.toHaveAttribute('src', firstImage)
    await user.click(within(gallery).getByRole('button', { name: 'Previous image' }))
    expect(within(gallery).getByRole('img')).toHaveAttribute('src', firstImage)
    await user.click(within(gallery).getByRole('button', { name: 'Previous image' }))
    expect(within(gallery).getByRole('img')).not.toHaveAttribute('src', firstImage)
    for (const link of screen.getAllByRole('link', { name: 'Back to projects' })) {
      expect(link).toHaveAttribute('href', '/#portfolio')
    }
  })
  it('previews only professional certificates and links to the complete collection', () => {
    render(<App />)
    const section = screen.getByRole('region', { name: 'Certifications' })
    expect(within(section).getAllByRole('article')).toHaveLength(2)
    expect(within(section).getByRole('heading', { name: 'Machine Learning' })).toBeInTheDocument()
    expect(within(section).getByRole('heading', { name: 'IBM Data Science' })).toBeInTheDocument()
    expect(within(section).getByRole('link', { name: 'View All Courses' })).toHaveAttribute('href', '/certifications')
  })
  it('opens the complete certification collection directly', () => {
    window.history.replaceState(null, '', '/certifications')
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Certifications' })).toBeInTheDocument()
    expect(screen.getAllByRole('article').length).toBeGreaterThan(3)
    expect(screen.getByRole('link', { name: 'Back to home' })).toHaveAttribute('href', '/#certifications')
  })
  it('lists the uploaded certificates and courses with real previews and document links', () => {
    window.history.replaceState(null, '', '/certifications')
    render(<App />)
    expect(screen.getAllByRole('article')).toHaveLength(19)
    expect(screen.getByRole('heading', { name: 'IBM Data Science' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Intro to Machine Learning' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Open Document' })).toHaveLength(19)
    expect(screen.getAllByRole('link', { name: 'View Credential' })).toHaveLength(18)
    expect(document.querySelectorAll('img.certificate-document')).toHaveLength(19)
    expect(document.querySelectorAll('.credential-group .certification-grid')).toHaveLength(2)
    for (const image of document.querySelectorAll('img.certificate-document')) {
      expect(image.closest('details')).toBeNull()
      expect(image).toBeVisible()
    }
    expect(screen.queryByText('Sample certifications for this portfolio demo.')).not.toBeInTheDocument()
  })
  it.each(['/projects', '/projects/waspadai', '/certifications'])('marks the current navigation destination on %s', path => {
    window.history.replaceState(null, '', path)
    render(<App />)
    const nav = within(screen.getByRole('navigation', { name: 'Main navigation' }))
    const label = path === '/certifications' ? 'Certifications' : 'Projects'
    expect(nav.getByRole('link', { name: label })).toHaveAttribute('aria-current', path === '/projects/waspadai' ? 'location' : 'page')
  })
  it('separates organization and location from experience descriptions', () => {
    const { container } = render(<App />)
    expect(container.querySelector('.experience-company')).toHaveTextContent('Dewantara Research Team UM')
    expect(container.querySelector('.experience-company')).not.toHaveTextContent('Malang')
    expect(container.querySelector('.experience-location')).toHaveTextContent('Malang, Indonesia')
    expect([...container.querySelectorAll('.experience h4')].map(item => item.textContent)).toEqual(['Head of Programming \u2014 SAR Robot Division', 'Computer Mathematics Practicum Assistant', 'Web Developer Intern'])
  })
  it('recovers from an empty category using the All filter', async () => {
    const original = portfolio.work.projects
    portfolio.work.projects = original.filter(item => item.category !== 'ai-ml')
    try {
      window.history.replaceState(null, '', '/projects?category=ai-ml')
      const user = userEvent.setup()
      render(<App />)
      expect(screen.getByRole('heading', { name: portfolio.work.emptyTitle })).toBeInTheDocument()
      await user.click(screen.getByRole('button', { name: portfolio.work.allLabel }))
      expect(screen.getByRole('tab', { name: 'All' })).toHaveAttribute('aria-selected', 'true')
      expect(screen.getByRole('tab', { name: 'All' })).toHaveFocus()
      expect(window.location.search).toBe('')
      expect(screen.getAllByRole('link', { name: 'View Case Study' })).toHaveLength(original.filter(item => item.category !== 'ai-ml').length)
    } finally {
      portfolio.work.projects = original
    }
  })
  it('provides recovery for an unknown project URL', () => {
    window.history.replaceState(null, '', '/projects/missing')
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Back to home' })).toHaveAttribute('href', '/')
  })
  it('closes the mobile menu after choosing a section', async () => {
    const user = userEvent.setup()
    render(<StrictMode><App /></StrictMode>)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(within(screen.getByRole('navigation', { name: 'Main navigation' })).getByRole('link', { name: 'About' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false')
  })
  it('shows three featured projects without filters on the mobile home page', () => {
    mobileViewport()
    render(<StrictMode><App /></StrictMode>)
    expect(screen.getAllByRole('link', { name: 'View Case Study' })).toHaveLength(3)
    expect(screen.getByRole('link', { name: 'Explore All Projects' })).toHaveAttribute('href', '/projects')
    expect(screen.queryByRole('tablist')).not.toBeInTheDocument()
  })
  it('shows only the three featured projects without filters on desktop', () => {
    render(<App />)
    const section = screen.getByRole('region', { name: 'Selected Projects' })
    expect(within(section).getAllByRole('heading', { level: 3 }).map(item => item.textContent)).toEqual(['WaspadAI', 'Numora Assessment & Question Variants', 'SIPARIH'])
    expect(within(section).queryByRole('tablist')).not.toBeInTheDocument()
  })
  it.each(['/', '/projects/waspadai', '/certifications'])('links navbar collections correctly from %s', path => {
    window.history.replaceState(null, '', path)
    render(<App />)
    const nav = within(screen.getByRole('navigation', { name: 'Main navigation' }))
    expect(nav.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects')
    expect(nav.getByRole('link', { name: 'Certifications' })).toHaveAttribute('href', '/certifications')
    expect(nav.queryByRole('link', { name: 'Portofolio' })).not.toBeInTheDocument()
  })
  it('shows the full collection on mobile and restores its category from the URL', async () => {
    mobileViewport()
    window.history.replaceState(null, '', '/projects?category=software')
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Projects & Experiments', level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Software Engineering' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getAllByRole('link', { name: 'View Case Study' })).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'View Case Study' })[0]).toHaveAttribute('href', '/projects/numora-question-variants?from=projects&category=software')
    await user.click(screen.getByRole('tab', { name: 'AI / ML' }))
    expect(new URLSearchParams(location.search).get('category')).toBe('ai-ml')
    expect(screen.getAllByRole('link', { name: 'View Case Study' })).toHaveLength(2)
  })
  it('falls back to all projects for an unknown collection category', () => {
    window.history.replaceState(null, '', '/projects?category=unknown')
    render(<App />)
    expect(screen.getAllByRole('link', { name: 'View Case Study' })).toHaveLength(6)
    expect(screen.getByRole('tab', { name: 'All' })).toHaveAttribute('aria-selected', 'true')
  })
  it('returns a case study to the filtered collection it came from', () => {
    window.history.replaceState(null, '', '/projects/waspadai?from=projects&category=ai-ml')
    render(<App />)
    for (const link of screen.getAllByRole('link', { name: 'Back to projects' })) {
      expect(link).toHaveAttribute('href', '/projects?category=ai-ml')
    }
  })
  it('wraps the next case study within the selected collection category', () => {
    window.history.replaceState(null, '', '/projects/sidika?from=projects&category=software')
    render(<App />)
    expect(screen.getByRole('link', { name: 'Numora Assessment & Question Variants' })).toHaveAttribute('href', '/projects/numora-question-variants?from=projects&category=software')
  })
  it('offers another category without carrying an incompatible filter when only one case exists', () => {
    const original = portfolio.work.projects
    portfolio.work.projects = original.filter(item => item.id !== 'sisdas-rag-assistant')
    try {
      window.history.replaceState(null, '', '/projects/waspadai?from=projects&category=ai-ml')
      render(<App />)
      expect(screen.getByRole('link', { name: 'Numora Assessment & Question Variants' })).toHaveAttribute('href', '/projects/numora-question-variants?from=projects')
    } finally {
      portfolio.work.projects = original
    }
  })
})
