import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { brand, events, involve } from '../../data/content'

export default function Connect() {
  const eventsTrackRef = useRef<HTMLDivElement>(null)

  function scrollEvents(direction: -1 | 1) {
    const track = eventsTrackRef.current
    if (!track) return
    const amount = Math.min(track.clientWidth * 0.78, 360)
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section className="connect" id="connect">
      <div className="connect__inner">
        <div className="connect__intro">
          <p className="connect__eyebrow">Get Connected</p>
          <h2 className="connect__title">Ready to get in the game?</h2>
          <p className="connect__copy">
            Train with us, shadow the ministry, or serve on the team — a leader will follow up
            personally. Whether you compete or just love to play, there’s a place for you at{' '}
            {brand.name} in {brand.location}.
          </p>
        </div>

        <div className="connect__paths">
          {involve.map((item, index) => (
            <Link className="connect__path" to={item.href} key={item.title}>
              <span className="connect__path-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="connect__path-copy">
                <span className="connect__path-title">{item.title}</span>
                <span className="connect__path-body">{item.body}</span>
              </span>
              <span className="connect__path-cta">{item.action}</span>
            </Link>
          ))}
        </div>

        <div className="connect__events" id="events">
          <div className="connect__events-head">
            <div>
              <h3 className="connect__events-title">Upcoming events</h3>
              <p className="connect__events-subtitle">
                Sports days, trainings, and fellowships — show up once and you’ll feel the energy.
              </p>
            </div>
            <div className="rail__arrows">
              <button
                type="button"
                className="rail__arrow"
                aria-label="Previous events"
                onClick={() => scrollEvents(-1)}
              >
                ‹
              </button>
              <button
                type="button"
                className="rail__arrow"
                aria-label="Next events"
                onClick={() => scrollEvents(1)}
              >
                ›
              </button>
            </div>
          </div>
          <div className="connect__events-track" ref={eventsTrackRef}>
            {events.map((event) => (
              <article className="event-card" key={event.title}>
                <div className="event-card__meta">
                  <span className="event-card__date">{event.date}</span>
                  <span className="event-card__tag">{event.tag}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.detail}</p>
                <Link className="text-link" to="/connect#connect-form">
                  Register interest
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
