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
            <a className="text-link" href="#programs">
              Learn more
            </a>
            <a className="text-link" href="#connect">
              Get involved
            </a>
          </div>
        </div>
        <figure className="who__media">
          <img src="/images/programs/mentorship.jpg" alt="CIAA mentorship and training" />
        </figure>
      </div>
    </section>
  )
}
