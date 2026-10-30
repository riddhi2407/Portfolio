import { useState } from 'react'
import { profile } from '../data.js'

export default function Hero() {
  const [noPhoto, setNoPhoto] = useState(false)
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <p className="hello">Hi, I'm</p>
        <h1>{profile.name}</h1>
        <p className="lead">
          A BSc IT graduate building responsive web apps with HTML, CSS, JavaScript, PHP and MySQL.
          I'm looking for an entry-level Full Stack or Web Developer role.
        </p>
        <div className="actions">
          <a className="btn primary" href="#projects">View projects</a>
          <a className="btn" href={profile.resume} download>Download resume</a>
        </div>
      </div>
      {/* Add your photo at public/images/profile.jpg; initials show until then */}
      {noPhoto ? (
        <div className="avatar monogram" role="img" aria-label="Riddhi Dhanawade">RD</div>
      ) : (
        <img className="avatar" src="./images/profile.jpg" alt="Riddhi Dhanawade" width="380" height="380" onError={() => setNoPhoto(true)} />
      )}
    </section>
  )
}
