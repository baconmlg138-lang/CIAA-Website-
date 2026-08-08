import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { events } from '../../data/content'

export default function Events() {
  const eventsTrackRef = useRef<HTMLDivElement>(null)

  function scrollEvents(direction: -1 | 1) {
    const track = eventsTrackRef.current
    if (!track) return
    const amount = Math.min(track.clientWidth * 0.78, 360)
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section className="connect connect--events-page" id="events">
      <div className="connect__inner">
        <div className="connect__intro">
          <p className="connect__eyebrow">Events</p>
          <h2 className="connect__title">Upcoming events</h2>
          <p className="connect__copy">
            Sports days, trainings, and fellowships — show up once and you’ll feel the energy.
          </p>
        </div>

        <div className="connect__events">
          <div className="connect__events-head">
            <div>
              <h3 className="connect__events-title">On the calendar</h3>
              <p className="connect__events-subtitle">
                Competition, camps, clinics, and nights of fellowship across Atlanta.
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
