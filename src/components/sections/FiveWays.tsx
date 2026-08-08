import { Link } from 'react-router-dom'
import { fiveWays } from '../../data/content'

export default function FiveWays() {
  return (
    <section className="five-ways" id="what-we-do">
      <div className="five-ways__inner">
        <div className="five-ways__head">
          <p className="five-ways__eyebrow">What We Do</p>
          <h2 className="five-ways__title">Five ways we build athletes.</h2>
          <p className="five-ways__subtitle">
            Mentorship, culture, media, the Word, and outreach — every path points athletes toward
            faith, purpose, and character.
          </p>
        </div>
        <ol className="five-ways__list">
          {fiveWays.map((item) => (
            <li className="five-ways__item" key={item.number}>
              <span className="five-ways__number" aria-hidden="true">
                {item.number}
              </span>
              <div className="five-ways__copy">
                <h3>{item.title}</h3>
                <p>{item.blurb}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link className="text-link five-ways__cta" to="/connect">
          Get connected
        </Link>
      </div>
    </section>
  )
}
