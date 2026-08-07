import { useEffect, useState } from 'react'
import { brand, navLinks } from '../../data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-nav__inner">
        <a className="site-nav__brand" href="#top" aria-label={`${brand.name} home`}>
          <img
            className="site-nav__mark"
            src="/images/brand/ciaa-nav.png"
            alt={`${brand.name} logo`}
          />
        </a>

        <nav className="site-nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-nav__end">
          <a className="site-nav__cta" href="#connect">
            Join
          </a>
          <button
            type="button"
            className="site-nav__menu"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open ? (
        <div className="site-nav__drawer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="site-nav__cta" href="#connect" onClick={() => setOpen(false)}>
            Join the movement
          </a>
        </div>
      ) : null}
    </header>
  )
}
