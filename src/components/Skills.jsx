import { skills } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="section narrow">
      <h2>Skills</h2>
      <dl className="skills">
        {skills.map(g => (
          <div key={g.group}>
            <dt>{g.group}</dt>
            <dd>{g.items.map(i => <span key={i}>{i}</span>)}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
