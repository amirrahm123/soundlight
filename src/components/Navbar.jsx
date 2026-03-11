import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggle = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <span className="logo-icon">⚡</span>
            <span>Sound<span className="logo-accent">Light</span> Pro</span>
          </a>

          <ul className="nav-links">
            <li><a href="#categories">מוצרים</a></li>
            <li><a href="#services">שירותים</a></li>
            <li><a href="#portfolio">פרויקטים</a></li>
            <li><a href="#about">אודות</a></li>
            <li><a href="#contact" className="nav-cta">בקשת הצעת מחיר</a></li>
          </ul>

          <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={toggle} aria-label="תפריט">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#categories" onClick={close}>מוצרים</a>
        <a href="#services" onClick={close}>שירותים</a>
        <a href="#portfolio" onClick={close}>פרויקטים</a>
        <a href="#about" onClick={close}>אודות</a>
        <a href="#contact" className="mob-cta" onClick={close}>בקשת הצעת מחיר</a>
      </div>
    </>
  )
}
