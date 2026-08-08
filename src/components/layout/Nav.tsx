import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
        <Link className="site-nav__brand" to="/" aria-label={`${brand.name} home`}>
          <img
            className="site-nav__mark"
            src="/images/brand/ciaa-nav.png"
            alt={`${brand.name} logo`}
          />
        </Link>

        <nav className="site-nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-nav__end">
          <Link className="site-nav__cta" to="/connect">
            Join
          </Link>
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
            <NavLink key={link.href} to={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <Link className="site-nav__cta" to="/connect" onClick={() => setOpen(false)}>
            Join the movement
          </Link>
        </div>
      ) : null}
    </header>
  )
}
