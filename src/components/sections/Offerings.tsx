import { Link } from 'react-router-dom'
import { passionCards } from '../../data/content'
import Rail from '../ui/Rail'

export default function Offerings() {
  return (
    <Rail
      id="programs"
      title="Answering the call to compete"
      subtitle="Programs that train body and spirit — competition, coaching, camps, and fellowship."
      learnMoreHref="/connect"
      viewAllHref="/events"
      autoPlay
    >
      {passionCards.map((item) => (
        <article className="promo-card" key={item.title}>
          <img src={item.image} alt="" />
          <div className="promo-card__shade" />
          <div className="promo-card__body">
            <h3>{item.title}</h3>
            <p>{item.blurb}</p>
            <Link className="text-link text-link--on-dark" to={item.href}>
              {item.cta}
            </Link>
          </div>
        </article>
      ))}
    </Rail>
  )
}
