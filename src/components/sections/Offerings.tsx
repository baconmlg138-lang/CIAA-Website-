import { passionCards } from '../../data/content'
import Rail from '../ui/Rail'

export default function Offerings() {
  return (
    <Rail
      id="programs"
      title="Answering the call to compete"
      subtitle="Programs that train body and spirit — competition, coaching, camps, and fellowship."
      learnMoreHref="#connect"
      viewAllHref="#events"
    >
      {passionCards.map((item) => (
        <article className="promo-card" key={item.title}>
          <img src={item.image} alt="" />
          <div className="promo-card__shade" />
          <div className="promo-card__body">
            <h3>{item.title}</h3>
            <p>{item.blurb}</p>
            <a className="text-link text-link--on-dark" href={item.href}>
              {item.cta}
            </a>
          </div>
        </article>
      ))}
    </Rail>
  )
}
