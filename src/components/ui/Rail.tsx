import { useRef, type ReactNode } from 'react'

type RailProps = {
  id?: string
  title: string
  subtitle?: string
  learnMoreHref?: string
  viewAllHref?: string
  tone?: 'default' | 'surface'
  children: ReactNode
}

export default function Rail({
  id,
  title,
  subtitle,
  learnMoreHref = '#programs',
  viewAllHref = '#programs',
  tone = 'default',
  children,
}: RailProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  function scrollBy(direction: -1 | 1) {
    const track = trackRef.current
    if (!track) return
    const amount = Math.min(track.clientWidth * 0.78, 420)
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section className={`rail${tone === 'surface' ? ' rail--surface' : ''}`} id={id}>
      <div className="rail__inner">
        <div className="rail__head">
          <div>
            <h2 className="rail__title">{title}</h2>
            {subtitle ? <p className="rail__subtitle">{subtitle}</p> : null}
          </div>
          <div className="rail__controls">
            <a className="text-link" href={learnMoreHref}>
              Learn more
            </a>
            <a className="text-link" href={viewAllHref}>
              View all
            </a>
            <div className="rail__arrows" aria-hidden="false">
              <button
                type="button"
                className="rail__arrow"
                aria-label="Previous"
                onClick={() => scrollBy(-1)}
              >
                ‹
              </button>
              <button
                type="button"
                className="rail__arrow"
                aria-label="Next"
                onClick={() => scrollBy(1)}
              >
                ›
              </button>
            </div>
          </div>
        </div>
        <div className="rail__track" ref={trackRef}>
          {children}
        </div>
      </div>
    </section>
  )
}
