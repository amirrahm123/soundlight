import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80',
    alt: 'אירוע מוזיקה עם תאורה צבעונית',
  },
  {
    url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80',
    alt: 'מופע לייב עם הגברה מקצועית',
  },
  {
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=80',
    alt: 'חתונה עם תאורה מעוצבת',
  },
  {
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80',
    alt: 'כנס עם ציוד מולטימדיה',
  },
  {
    url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1600&q=80',
    alt: 'אירוע חברה מקצועי',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide ${i === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.url})` }}
            aria-hidden={i !== current}
          />
        ))}
      </div>

      <div className="hero-slider-overlay"></div>

      <div className="hero-content">
        <span className="hero-badge">⚡ ציוד מקצועי לאירועים</span>
        <h1>הגברה. תאורה.<br /><span className="hero-accent">חוויה בלתי נשכחת.</span></h1>
        <p className="hero-sub">
          השכרת ציוד הגברה, תאורה והפקת אירועים ברמה הגבוהה ביותר.
          <br />מהפקות קטנות ועד אירועי ענק — אנחנו כאן בשבילכם.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-primary">קבלו הצעת מחיר</a>
          <a href="#categories" className="btn-outline">צפו בקטלוג</a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">500+</span>
            <span className="hero-stat-label">אירועים בשנה</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">15</span>
            <span className="hero-stat-label">שנות ניסיון</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">1000+</span>
            <span className="hero-stat-label">לקוחות מרוצים</span>
          </div>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`שקופית ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
