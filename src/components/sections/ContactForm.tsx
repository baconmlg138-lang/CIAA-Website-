import { useState, type FormEvent } from 'react'

type SubmitState = 'idle' | 'submitting' | 'sent' | 'error'

const FORM_URL = import.meta.env.VITE_CONTACT_FORM_URL as string | undefined
const FORM_SECRET = import.meta.env.VITE_CONTACT_FORM_SECRET as string | undefined

const INTERESTS = [
  'Joining trainings / sports days',
  'Shadowing the ministry',
  'Serving on the team',
  'Athlete mentorship',
  'Heavenly culture curriculum',
  'Bible studies / coaching',
  'Outreach & partnerships',
] as const

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage('')

    if (!FORM_URL || !FORM_SECRET) {
      setStatus('error')
      setErrorMessage('Form is not connected yet. Please email us instead.')
      return
    }

    const form = event.currentTarget
    const data = new FormData(form)

    // Honeypot — leave empty; bots often fill it.
    if (String(data.get('company') || '').trim()) {
      setStatus('sent')
      return
    }

    const payload = {
      secret: FORM_SECRET,
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      interest: String(data.get('interest') || '').trim(),
      message: String(data.get('message') || '').trim(),
      company: '',
    }

    if (!payload.name || !payload.email || !payload.interest) {
      setStatus('error')
      setErrorMessage('Please fill in your name, email, and interest.')
      return
    }

    setStatus('submitting')

    try {
      // text/plain avoids a CORS preflight against Apps Script
      const response = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      })

      const result = (await response.json()) as { ok?: boolean; error?: string }

      if (!result.ok) {
        throw new Error(result.error || 'submit_failed')
      }

      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again or email us.')
    }
  }

  return (
    <section className="contact-form" id="connect-form">
      <div className="contact-form__panel">
        <div>
          <h2 className="contact-form__title">Contact form</h2>
          <p className="contact-form__copy">
            Drop your info and how you want to plug in. We’ll get back to you.
          </p>
          <p className="contact-form__privacy">
            Your info stays private — only the CIAA team can access submissions.
          </p>
          <div className="contact-form__alt">
            <a className="text-link" href="mailto:hello@ciaa.atlanta">
              Email us
            </a>
            <a
              className="text-link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        {status === 'sent' ? (
          <p className="contact-form__success">You’re in. We’ll reach out soon — keep showing up.</p>
        ) : (
          <form className="contact-form__fields" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Full name"
              autoComplete="name"
              maxLength={120}
              required
              disabled={status === 'submitting'}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              maxLength={254}
              required
              disabled={status === 'submitting'}
            />
            <select
              name="interest"
              defaultValue=""
              required
              disabled={status === 'submitting'}
            >
              <option value="" disabled>
                I’m interested in…
              </option>
              {INTERESTS.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder="Anything we should know?"
              maxLength={2000}
              disabled={status === 'submitting'}
            />
            {/* Honeypot — hidden from people, visible to simple bots */}
            <input
              className="contact-form__hp"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <button className="btn btn--dark" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send it'}
            </button>
            {status === 'error' ? <p className="contact-form__error">{errorMessage}</p> : null}
          </form>
        )}
      </div>
    </section>
  )
}
