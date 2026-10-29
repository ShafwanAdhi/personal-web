import type { ExperienceIconName, SocialIcon } from '../data/portfolio'

type IconProps = { className?: string }

export function ExperienceIconGraphic({ name }: { name: ExperienceIconName }) {
  const paths = name === 'robot'
    ? <><rect x="5" y="7" width="14" height="12" rx="3" /><path d="M12 3v4M2 11v4m20-4v4M9 15h6" /><circle cx="9" cy="11" r=".6" /><circle cx="15" cy="11" r=".6" /></>
    : name === 'teaching'
      ? <><path d="m2 9 10-5 10 5-10 5L2 9Zm4 3v5c4 3 8 3 12 0v-5m4-3v7" /></>
      : <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="m9 9-3 3 3 3m6-6 3 3-3 3m-2-7-2 8" /></>
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths}</svg>
}

export function ExpandIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 4h6v6M10 20H4v-6m16-10-7 7M4 20l7-7" /></svg>
}

export function ArrowIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export function LinkIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m10 13 4-4m-6 2-2 2a4 4 0 0 0 6 6l3-3m-6-5 3-3a4 4 0 0 1 6 6l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
}

export function StarIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 32 32" aria-hidden="true"><path d="M16 0c1.9 11.3 4.7 14.1 16 16-11.3 1.9-14.1 4.7-16 16C14.1 20.7 11.3 17.9 0 16 11.3 14.1 14.1 11.3 16 0Z" fill="currentColor" /></svg>
}

export function SocialIconGraphic({ name, className }: IconProps & { name: SocialIcon }) {
  if (name === 'gmail') return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 18V7.5L12 14l8-6.5V18M4 18h16M4 7.5V6l8 6 8-6v1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  if (name === 'linkedin') return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="6.6" cy="6" r="1.4" /><path d="M5.4 9h2.4v9H5.4zm5 0h2.3v1.2c1-1.7 5.9-2.1 5.9 3.2V18h-2.4v-4.6c0-2.7-3.5-2.8-3.5 0V18h-2.3z" /></svg>
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.82c.85 0 1.71.12 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.76c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10Z" /></svg>
}

export function TechIcon({ name }: { name: 'python' | 'pytorch' | 'fastapi' }) {
  return <img src={`/assets/${name}.svg`} alt="" aria-hidden="true" width="24" height="24" />
}
