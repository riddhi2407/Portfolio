import { education, profile } from '../data.js'

export default function Resume() {
  return (
    <section id="resume" className="section narrow">
      <h2>Resume</h2>
      <ol className="timeline">
        {education.map(e => (
          <li key={e.degree}>
            <strong>{e.degree}</strong>
            <span>{e.school} | {e.years}{e.note ? ` | ${e.note}` : ''}</span>
          </li>
        ))}
      </ol>
      <a className="btn primary" href={profile.resume} download>Download resume (PDF)</a>
    </section>
  )
}
