import { Link } from 'react-router-dom'
import { brand, footerColumns, mission } from '../../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand-block">
            <img
              className="site-footer__logo"
              src="/images/brand/ciaa-logo-on-dark.png"
              alt={`${brand.name} logo`}
            />
            <p>{mission.purpose}</p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('mailto:') ? (
                      <a href={link.href}>{link.label}</a>
                    ) : (
                      <Link to={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="site-footer__bottom">
          <span>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
          <span>{brand.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
