import { portfolio } from '../data/portfolio'
import { ArrowIcon, SocialIconGraphic } from './Icons'
import { MagneticLink } from './MotionUI'

export function SocialLinks() {
  return <div className="social-links" aria-label={portfolio.ui.socialNavigation}>
    {portfolio.socials.map(social => <MagneticLink key={social.icon} href={social.href} aria-label={social.label} target={social.href.startsWith('mailto:') ? undefined : '_blank'} rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}><SocialIconGraphic name={social.icon} /></MagneticLink>)}
  </div>
}

export function HireButton({ large = false }: { large?: boolean }) {
  return <MagneticLink className={`hire-button${large ? ' hire-button-large' : ''}`} href={large ? `mailto:${portfolio.identity.email}` : portfolio.hero.workHref}>
    {large ? portfolio.cta.hireLabel : portfolio.hero.hireLabel}<span><ArrowIcon /></span>
  </MagneticLink>
}
