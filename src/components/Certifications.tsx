import { useState } from 'react'
import { motion, useTransform, type MotionStyle } from 'motion/react'
import { portfolio, type Certification } from '../data/portfolio'
import { usePointerMotion } from '../lib/usePointerMotion'
import { ArrowIcon } from './Icons'
import { MagneticLink, Reveal } from './MotionUI'

function CertificateSeal() {
  return <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="m24 3 5 5 7-1 2 7 7 3-3 7 3 7-7 3-2 7-7-1-5 5-5-5-7 1-2-7-7-3 3-7-3-7 7-3 2-7 7 1Z" stroke="currentColor" /><path d="m17 24 5 5 10-11" stroke="currentColor" strokeWidth="2" /></svg>
}

function CertificationCard({ certification }: { certification: Certification }) {
  const copy = portfolio.certifications
  const { x, y, reduced, move, reset } = usePointerMotion(1)
  const [hovered, setHovered] = useState(false)
  const active = hovered && !reduced
  const rotateX = useTransform(y, value => value * -6)
  const rotateY = useTransform(x, value => value * 6)
  const shineX = useTransform(x, value => `${(value + 1) * 50}%`)
  const shineY = useTransform(y, value => `${(value + 1) * 50}%`)

  return <motion.article className="certification-card" data-hovered={active}
    animate={{ y: active ? -6 : 0 }} transition={{ type: 'spring', stiffness: 260, damping: 24 }}
    onPointerEnter={event => setHovered(event.pointerType === 'mouse' && Boolean(window.matchMedia?.('(hover: hover) and (pointer: fine)').matches))}
    onPointerMove={move} onPointerLeave={() => { setHovered(false); reset() }}
    onBlur={() => { setHovered(false); reset() }}>
    <motion.div className="certificate-preview" animate={{ scale: active ? 1.025 : 1 }}
      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
      style={{ rotateX, rotateY, transformPerspective: 1000, '--shine-x': shineX, '--shine-y': shineY } as MotionStyle}>
    {certification.image ? <img className="certificate-document" src={certification.image} alt={certification.title} width="800" height="560" loading="lazy" /> :
      <div className="certificate-document certificate-placeholder" aria-hidden="true">
        <span className="certificate-mark"><CertificateSeal /></span>
        <span className="certificate-kicker">{copy.documentLabel}</span>
        <strong>{certification.title}</strong>
        <span className="certificate-awarded">{copy.awardedLabel}</span>
        <span className="certificate-name">{portfolio.identity.name}</span>
        <span className="certificate-bottom">{certification.issuer}<span>{certification.issued}</span></span>
      </div>}
      {!certification.image && <span className="certificate-thumbnail" aria-hidden="true"><CertificateSeal /></span>}
      <span className="certificate-shine" aria-hidden="true" />
    </motion.div>
    <div className="certification-copy"><div className="certification-meta"><span>{certification.issuer}</span><span>{certification.issued}</span></div>
    <h3>{certification.title}</h3>
    {certification.skills.length > 0 && <p className="certification-skills">{certification.skills.join(' · ')}</p>}
    {certification.credentialId && <p className="credential-id">{copy.credentialLabel}: {certification.credentialId}</p>}
    {certification.fileUrl && <a className="credential-link document-link" href={certification.fileUrl} target="_blank" rel="noreferrer">{copy.openDocumentLabel}<ArrowIcon /></a>}
    {certification.credentialUrl && <a className="credential-link" href={certification.credentialUrl} target="_blank" rel="noreferrer">{copy.verifyLabel}<ArrowIcon /></a>}
    </div>
  </motion.article>
}

function CertificationGrid({ items }: { items: Certification[] }) {
  return <div className="certification-grid">{items.map((certification, index) => <Reveal key={certification.id} delay={(index % 3) * 0.08}><CertificationCard certification={certification} /></Reveal>)}</div>
}

export function CertificationsSection() {
  const copy = portfolio.certifications
  return <section className="certifications-section" aria-labelledby="certifications-title"><div className="container">
    <div id="certifications"><Reveal><h2 id="certifications-title">{copy.title}</h2><p className="section-description">{copy.description}</p></Reveal></div>
    <CertificationGrid items={copy.items.filter(item => item.kind === 'certificate')} />
    <Reveal className="certifications-action"><MagneticLink className="button" href="/certifications">{copy.allLabel}<ArrowIcon /></MagneticLink></Reveal>
  </div></section>
}

export function CertificationsPage() {
  const copy = portfolio.certifications
  return <div className="container certifications-page">
    <a className="back-link" href="/#certifications"><ArrowIcon />{copy.backLabel}</a>
    <Reveal className="detail-heading"><p className="page-eyebrow">{copy.pageEyebrow}</p><h1>{copy.title}</h1><p className="detail-intro">{copy.pageDescription}</p><p className="demo-note">{copy.demoNote}</p></Reveal>
    <section className="credential-group" aria-labelledby="professional-certificates-title">
      <h2 id="professional-certificates-title">{copy.certificatesTitle} <span className="collection-count">{copy.items.filter(item => item.kind === 'certificate').length}</span></h2>
      <CertificationGrid items={copy.items.filter(item => item.kind === 'certificate')} />
    </section>
    <section className="credential-group" aria-labelledby="courses-title">
      <h2 id="courses-title">{copy.coursesTitle} <span className="collection-count">{copy.items.filter(item => item.kind !== 'certificate').length}</span></h2>
      <CertificationGrid items={copy.items.filter(item => item.kind !== 'certificate')} />
    </section>
  </div>
}
