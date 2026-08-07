import { useState, type FormEvent } from 'react'
import { brand, connectChannels } from '../../data/content'

export default function Connect() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="connect" id="connect">
      <div className="connect__intro">
        <p className="connect__eyebrow">Get Connected</p>
        <h2 className="connect__title">Ready to get in the game?</h2>
        <p className="connect__copy">
          Tell us what you’re interested in — a team leader will follow up with you personally.
          Whether you compete or just love to play, there’s a place for you at {brand.name} in{' '}
          {brand.location}.
        </p>
      </div>

      <div className="connect__channels">
        {connectChannels.map((channel) => (
          <a className="connect__channel" key={channel.title} href={channel.href}>
            <h3>{channel.title}</h3>
            <p>{channel.detail}</p>
            <span className="text-link">{channel.action}</span>
          </a>
        ))}
      </div>

      <div className="connect__panel" id="connect-form">
        <div>
          <h3 className="connect__form-title">Contact form</h3>
          <p className="connect__copy">
            Drop your info and how you want to plug in. We’ll get back to you.
          </p>
        </div>
        {sent ? (
          <p className="connect__success">You’re in. We’ll reach out soon — keep showing up.</p>
        ) : (
          <form className="connect__form" onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Full name" required />
            <input name="email" type="email" placeholder="Email" required />
            <select name="interest" defaultValue="" required>
              <option value="" disabled>
                I’m interested in…
              </option>
              <option>Athlete mentorship</option>
              <option>Heavenly culture curriculum</option>
              <option>Bible studies / coaching</option>
              <option>Joining trainings / sports days</option>
              <option>Outreach & partnerships</option>
              <option>Serving on the team</option>
            </select>
            <textarea name="message" placeholder="Anything we should know?" />
            <button className="btn btn--dark" type="submit">
              Send it
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
