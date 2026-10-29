import { useEffect, useRef } from 'react'
import { portfolio, type Certification } from '../data/portfolio'

export default function CertificateLightbox({ certification, onClose }: { certification: Certification; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const element = dialog.current
    if (!element) return
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    const previousPadding = document.body.style.paddingRight
    const gap = window.innerWidth - document.documentElement.clientWidth
    // Preserve page alignment while locking background scrolling.
    if (gap > 0) document.body.style.paddingRight = `${parseFloat(getComputedStyle(document.body).paddingRight || '0') + gap}px`
    document.body.style.overflow = 'hidden'
    element.showModal()
    closeButton.current?.focus()
    return () => {
      if (element.open) element.close()
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPadding
      opener?.focus({ preventScroll: true })
    }
  }, [])

  return <dialog ref={dialog} className="certificate-lightbox" aria-label={certification.title}
    onCancel={event => { event.preventDefault(); onClose() }}
    onKeyDown={event => {
      // The close button is this image viewer's only interactive control.
      if (event.key === 'Tab') { event.preventDefault(); closeButton.current?.focus() }
    }}
    onClick={event => { if (event.target === event.currentTarget) onClose() }}>
    <div className="certificate-lightbox-content">
      <button ref={closeButton} className="certificate-lightbox-close" type="button" aria-label={portfolio.certifications.closePreviewLabel} onClick={onClose}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
      </button>
      <img src={certification.image} alt={certification.title} className="certificate-lightbox-image" />
    </div>
  </dialog>
}
