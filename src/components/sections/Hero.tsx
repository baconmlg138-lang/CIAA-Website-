import { useEffect, useState } from 'react'
import { heroSlides } from '../../data/content'

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, 7000)
    return () => window.clearInterval(id)
  }, [])

  function go(next: number) {
    setIndex((next + heroSlides.length) % heroSlides.length)
  }

  const slide = heroSlides[index]

  return (
    <section className="hero" id="top" aria-roledescription="carousel" aria-label="Featured">
      {heroSlides.map((item, i) => (
        <div
          key={item.id}
          className={`hero__slide${i === index ? ' is-active' : ''}`}
          aria-hidden={i !== index}
        >
          <img src={item.image} alt="" />
          <div className="hero__shade" />
        </div>
      ))}

      <div className="hero__content" key={slide.id}>
        {slide.title === 'CIAA' ? (
          <img
            className="hero__logo"
            src="/images/brand/ciaa-logo-hero.png"
            alt="CIAA"
          />
        ) : (
          <>
            {slide.eyebrow ? <p className="hero__eyebrow">{slide.eyebrow}</p> : null}
            <p className="hero__brand">{slide.title}</p>
          </>
        )}
        <h1 className="hero__headline">{slide.headline}</h1>
        <p className="hero__support">{slide.support}</p>
        <div className="hero__actions">
          <a className="btn btn--light" href={slide.primary.href}>
            {slide.primary.label}
          </a>
          <a className="btn btn--ghost" href={slide.secondary.href}>
            {slide.secondary.label}
          </a>
        </div>
      </div>

      <div className="hero__nav">
        <button type="button" className="hero__arrow" aria-label="Previous slide" onClick={() => go(index - 1)}>
          ‹
        </button>
        <div className="hero__dots" role="tablist" aria-label="Slides">
          {heroSlides.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`hero__dot${i === index ? ' is-active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button type="button" className="hero__arrow" aria-label="Next slide" onClick={() => go(index + 1)}>
          ›
        </button>
      </div>
    </section>
  )
}
