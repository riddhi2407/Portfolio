import { projects, profile } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(p => (
          <article key={p.title} className="project">
            <img src={p.image} alt={`${p.title} preview`} loading="lazy" decoding="async" width="600" height="340" />
            <div className="project-body">
              <h3>{p.title}</h3>
              <p className="muted">{p.type}</p>
              <ul>{p.points.map(pt => <li key={pt}>{pt}</li>)}</ul>
              <p className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</p>
              <a href={profile.github} target="_blank" rel="noreferrer">See code on GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
