import { useState } from 'react'

const links = ['about', 'projects', 'skills', 'resume', 'contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <a href="#top" className="brand">RD</a>
      <button className="burger" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Menu'}
      </button>
      <nav className={open ? 'open' : ''}>
        {links.map(l => (
          <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>{l[0].toUpperCase() + l.slice(1)}</a>
        ))}
      </nav>
    </header>
  )
}
