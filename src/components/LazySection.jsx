import { useEffect, useRef, useState } from 'react'

// Mounts children (and so downloads their chunk) only when near the viewport.
export default function LazySection({ children }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return setShow(true)
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShow(true); io.disconnect() }
    }, { rootMargin: '400px' })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return <div ref={ref} style={show ? undefined : { minHeight: '60vh' }}>{show && children}</div>
}
