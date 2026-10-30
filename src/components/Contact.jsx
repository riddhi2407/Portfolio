import { useState } from 'react'
import { profile } from '../data.js'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const set = k => e => setF({ ...f, [k]: e.target.value })

  // No backend needed: opens the visitor's email app with the message filled in
  const send = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${f.name}`)
    const body = encodeURIComponent(`${f.message}\n\nReply to: ${f.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section narrow">
      <h2>Contact</h2>
      <p>{profile.location} | {profile.phone} | <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
      <p><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> | <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></p>
      <form onSubmit={send}>
        <label>Your name<input required value={f.name} onChange={set('name')} /></label>
        <label>Your email<input required type="email" value={f.email} onChange={set('email')} /></label>
        <label>Message<textarea required rows="5" value={f.message} onChange={set('message')} /></label>
        <button className="btn primary" type="submit">Send message</button>
      </form>
    </section>
  )
}
