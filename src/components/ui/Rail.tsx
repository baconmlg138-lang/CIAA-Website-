import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type ReactElement,
  type ReactNode,
} from 'react'
import { Link } from 'react-router-dom'

type RailProps = {
  id?: string
  title: string
  subtitle?: string
  learnMoreHref?: string
  viewAllHref?: string
  tone?: 'default' | 'surface'
  autoPlay?: boolean
  children: ReactNode
}

export default function Rail({
  id,
  title,
  subtitle,
  learnMoreHref = '/programs',
  viewAllHref = '/programs',
  tone = 'default',
  autoPlay = false,
  children,
}: RailProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)

  function scrollBy(direction: -1 | 1) {
    const track = trackRef.current
    if (!track) return
    const amount = Math.min(track.clientWidth * 0.78, 420)
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  useEffect(() => {
    if (!autoPlay) return

    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    let frame = 0
    let visible = false
    let last = 0

    function tick(now: number) {
      const scroller = trackRef.current
      if (visible && !pausedRef.current && scroller) {
        if (!last) last = now
        const delta = now - last
        last = now

        // Track contains two identical sets; wrap at the halfway point for a seamless loop.
        const loopWidth = scroller.scrollWidth / 2
        if (loopWidth > 0) {
          scroller.scrollLeft += Math.max(0.03, delta * 0.0028)
          if (scroller.scrollLeft >= loopWidth) {
            scroller.scrollLeft -= loopWidth
          }
        }
      } else {
        last = now
      }

      frame = window.requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (!visible) last = 0
      },
      { threshold: 0.25 },
    )

    observer.observe(section)
    frame = window.requestAnimationFrame(tick)

    function pause() {
      pausedRef.current = true
    }

    function resume() {
      pausedRef.current = false
    }

    track.addEventListener('pointerenter', pause)
    track.addEventListener('pointerleave', resume)
    track.addEventListener('focusin', pause)
    track.addEventListener('focusout', resume)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frame)
      track.removeEventListener('pointerenter', pause)
      track.removeEventListener('pointerleave', resume)
      track.removeEventListener('focusin', pause)
      track.removeEventListener('focusout', resume)
    }
  }, [autoPlay])

  const items = Children.toArray(children)
  const loopItems = autoPlay
    ? items.map((child, index) =>
        isValidElement(child)
          ? cloneElement(child as ReactElement<{ 'aria-hidden'?: boolean }>, {
              key: `loop-${child.key ?? index}`,
              'aria-hidden': true,
            })
          : child,
      )
    : null

  return (
    <section
      ref={sectionRef}
      className={`rail${tone === 'surface' ? ' rail--surface' : ''}${autoPlay ? ' rail--auto' : ''}`}
      id={id}
    >
      <div className="rail__inner">
        <div className="rail__head">
          <div>
            <h2 className="rail__title">{title}</h2>
            {subtitle ? <p className="rail__subtitle">{subtitle}</p> : null}
          </div>
          <div className="rail__controls">
            <Link className="text-link" to={learnMoreHref}>
              Learn more
            </Link>
            <Link className="text-link" to={viewAllHref}>
              View all
            </Link>
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
          {items}
          {loopItems}
        </div>
      </div>
    </section>
  )
}
