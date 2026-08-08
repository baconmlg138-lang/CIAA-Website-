import { useEffect, useLayoutEffect, useRef, useState, type AnimationEvent } from 'react'
import { verses } from '../../data/content'

function VerseCopy({ text, refLabel }: { text: string; refLabel: string }) {
  return (
    <>
      <p className="verse__label">Word for the athlete</p>
      <blockquote className="verse__text">“{text}”</blockquote>
      <p className="verse__ref">{refLabel}</p>
    </>
  )
}

export default function Verse() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<'in' | 'out'>('in')
  const [stageHeight, setStageHeight] = useState<number>()
  const sizerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const sizer = sizerRef.current
    if (!sizer) return

    const updateHeight = () => {
      const measures = sizer.querySelectorAll<HTMLElement>('.verse__measure')
      let tallest = 0
      measures.forEach((node) => {
        tallest = Math.max(tallest, node.offsetHeight)
      })
      setStageHeight(tallest)
    }

    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(sizer)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setIndex((current) => (current + 1) % verses.length)
        return
      }
      setPhase('out')
    }, 7000)
    return () => window.clearInterval(id)
  }, [])

  function handleAnimationEnd(event: AnimationEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return
    if (phase !== 'out') return
    setIndex((current) => (current + 1) % verses.length)
    setPhase('in')
  }

  return (
    <section className="verse" aria-label="Encouraging scripture" aria-live="polite">
      <div className="verse__stage" style={stageHeight ? { height: stageHeight } : undefined}>
        <div className="verse__sizer" ref={sizerRef} aria-hidden="true">
          {verses.map((verse) => (
            <div className="verse__measure" key={verse.ref}>
              <VerseCopy text={verse.text} refLabel={verse.ref} />
            </div>
          ))}
        </div>

        <div className="verse__play">
          {verses.map((verse, i) => {
            const isActive = i === index
            return (
              <div
                key={verse.ref}
                className={[
                  'verse__inner',
                  isActive ? `is-${phase}` : 'is-idle',
                  isActive ? 'is-active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-hidden={!isActive}
                onAnimationEnd={isActive ? handleAnimationEnd : undefined}
              >
                <VerseCopy text={verse.text} refLabel={verse.ref} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
