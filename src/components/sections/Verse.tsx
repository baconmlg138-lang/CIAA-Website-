import { useEffect, useState } from 'react'
import { verses } from '../../data/content'

export default function Verse() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % verses.length)
    }, 7000)
    return () => window.clearInterval(id)
  }, [])

  const verse = verses[index]

  return (
    <section className="verse" aria-label="Encouraging scripture">
      <div className="verse__inner" key={verse.ref}>
        <p className="verse__label">Word for the athlete</p>
        <blockquote className="verse__text">“{verse.text}”</blockquote>
        <p className="verse__ref">{verse.ref}</p>
      </div>
    </section>
  )
}
