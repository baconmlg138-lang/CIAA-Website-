import { events } from '../../data/content'
import Rail from '../ui/Rail'

export default function Events() {
  return (
    <Rail
      id="events"
      title="Upcoming events"
      subtitle="Sports days, trainings, and fellowships — show up once and you’ll feel the energy."
      learnMoreHref="#connect"
      viewAllHref="#connect"
    >
      {events.map((event) => (
        <article className="event-card" key={event.title}>
          <img src={event.image} alt="" />
          <div className="event-card__body">
            <div className="event-card__meta">
              <span className="event-card__date">{event.date}</span>
              <span className="event-card__tag">{event.tag}</span>
            </div>
            <h3>{event.title}</h3>
            <p>{event.detail}</p>
            <a className="text-link" href="#connect">
              Register interest
            </a>
          </div>
        </article>
      ))}
    </Rail>
  )
}
