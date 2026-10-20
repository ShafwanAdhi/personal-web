import { forwardRef, useState } from 'react'
import { AnimatePresence, motion, useIsPresent, type HTMLMotionProps } from 'motion/react'
import { portfolio, type ProjectImage } from '../data/portfolio'
import { ArrowIcon } from './Icons'
import { smoothEase } from './MotionUI'
import { useMotionPreference } from '../lib/useMotionPreference'

const GalleryImage = forwardRef<HTMLImageElement, HTMLMotionProps<'img'>>(function GalleryImage(props, ref) {
  const isPresent = useIsPresent()
  return <motion.img {...props} ref={ref} aria-hidden={isPresent ? undefined : true} data-exiting={!isPresent} />
})

export default function ProjectGallery({ images, layout }: { images: ProjectImage[]; layout?: 'portrait' }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const reduced = useMotionPreference()
  if (!images.length) return null
  const copy = portfolio.projectDetail
  const active = images[index]
  function goTo(next: number, travel: number) {
    setDirection(travel)
    setIndex((next + images.length) % images.length)
  }
  return <section className={`project-gallery${layout === 'portrait' ? ' project-gallery--portrait' : ''}`} aria-label={copy.galleryLabel}>
    <div className="gallery-stage" role="group" aria-label={copy.galleryInstructions} tabIndex={0} onKeyDown={event => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
      event.preventDefault()
      const travel = event.key === 'ArrowRight' ? 1 : -1
      goTo(index + travel, travel)
    }}>
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <GalleryImage key={index} src={active.src} alt={active.alt} width={layout === 'portrait' ? 720 : 1200} height={layout === 'portrait' ? 1600 : 675}
          custom={direction} variants={{ enter: (travel: number) => ({ opacity: 0, x: reduced ? 0 : travel * 45 }), center: { opacity: 1, x: 0 }, exit: (travel: number) => ({ opacity: 0, x: reduced ? 0 : travel * -45 }) }}
          initial="enter" animate="center" exit="exit" transition={{ duration: reduced ? 0 : 0.35, ease: smoothEase }}
          drag={images.length > 1 ? 'x' : false} dragConstraints={{ left: 0, right: 0 }} dragElastic={0.12}
          onDragEnd={(_, info) => { if (Math.abs(info.offset.x) > 40) goTo(index + (info.offset.x < 0 ? 1 : -1), info.offset.x < 0 ? 1 : -1) }}
          draggable={false} style={{ touchAction: 'pan-y' }} />
      </AnimatePresence>
      {images.length > 1 && <div className="gallery-arrows">
        <button type="button" className="gallery-arrow previous" aria-label={copy.previousImage} onClick={() => goTo(index - 1, -1)}><ArrowIcon /></button>
        <button type="button" className="gallery-arrow" aria-label={copy.nextImage} onClick={() => goTo(index + 1, 1)}><ArrowIcon /></button>
      </div>}
    </div>
    <div className="gallery-caption">
      <p>{active.caption}</p>
      <div className="gallery-pagination">
        {images.length > 1 && <div className="gallery-dots">{images.map((item, number) => <button type="button" key={`${item.src}-${number}`} aria-label={`${copy.slideLabel} ${number + 1}`} aria-pressed={number === index} onClick={() => goTo(number, number > index ? 1 : -1)}><span /></button>)}</div>}
        <span className="gallery-count" aria-live="polite" aria-atomic="true">{String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
      </div>
    </div>
  </section>
}
