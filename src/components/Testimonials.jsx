import { useState, useEffect, useCallback } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const testimonials = [
  {
    name: 'מיכל לוי',
    role: 'מנהלת אירועים, חברת Hi-Tech',
    text: 'הצוות של SoundLight Pro פשוט מדהים. הם הפקו לנו אירוע חברה ל-500 עובדים ברמה שלא חווינו קודם. ההגברה הייתה מושלמת והתאורה יצרה אווירה בלתי נשכחת.',
    stars: 5,
  },
  {
    name: 'דוד כהן',
    role: 'זוג נשוי טרי',
    text: 'בחרנו ב-SoundLight Pro לחתונה שלנו וזו הייתה ההחלטה הכי טובה. התאורה הפכה את האולם למשהו קסום, וכל האורחים לא הפסיקו לרקוד בזכות הסאונד המטורף.',
    stars: 5,
  },
  {
    name: 'רונית אברהם',
    role: 'מפיקת פסטיבלים',
    text: 'עובדים עם SoundLight Pro כבר 5 שנים על כל הפסטיבלים שלנו. מקצוענים אמיתיים, ציוד ברמה הגבוהה ביותר, ושירות שלא מתפשר. ממליצה בחום!',
    stars: 5,
  },
  {
    name: 'יוסי מזרחי',
    role: 'בעלי אולם אירועים',
    text: 'מאז שהתחלנו לעבוד עם SoundLight Pro, קיבלנו המון מחמאות מזוגות על התאורה והסאונד באולם. הם פשוט יודעים מה הם עושים.',
    stars: 5,
  },
  {
    name: 'שירה גולדשטיין',
    role: 'מנהלת שיווק',
    text: 'הזמנו אותם להשקת מוצר חדש. ההפקה הייתה ברמה של אירוע בינלאומי — מסכי LED, תאורה דרמטית, וסאונד קריסטלי. כל המוזמנים היו בהלם.',
    stars: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const sectionRef = useScrollReveal()

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-inner reveal" ref={sectionRef}>
        <div className="section-header">
          <span className="section-tag">מה הלקוחות אומרים</span>
          <h2>המלצות <span className="accent">מלקוחות</span></h2>
          <p>אלפי לקוחות מרוצים לאורך השנים — הנה חלק מהסיפורים שלהם</p>
        </div>

        <div className="testimonial-carousel">
          <button className="testimonial-arrow" onClick={prev} aria-label="הקודם">
            ‹
          </button>

          <div className="testimonial-track">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`testimonial-card ${i === current ? 'active' : ''}`}
              >
                <div className="testimonial-stars">{'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="testimonial-arrow" onClick={next} aria-label="הבא">
            ›
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`המלצה ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
