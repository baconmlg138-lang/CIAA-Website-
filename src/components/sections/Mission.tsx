import { Link } from 'react-router-dom'
import { brand, mission } from '../../data/content'

export default function Mission() {
  return (
    <section className="who" id="who">
      <div className="who__inner">
        <div className="who__copy">
          <p className="who__eyebrow">
            {brand.ministry} · {brand.location}
          </p>
          <h2 className="who__title">Who we are</h2>
          <p className="who__lead">{mission.problem}</p>
          <p className="who__body">{mission.solution}</p>
          <div className="who__actions">
            <Link className="text-link" to="/programs">
              Learn more
            </Link>
            <Link className="text-link" to="/connect">
              Get involved
            </Link>
          </div>
        </div>
        <figure className="who__media who__media--logo">
          <img src="/images/brand/ciaa-logo.png" alt={`${brand.name} logo`} />
        </figure>
      </div>
    </section>
  )
}
