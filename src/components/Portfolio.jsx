import useScrollReveal from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'פסטיבל מוזיקה — תל אביב',
    type: 'הפקה מלאה',
    img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
  },
  {
    title: 'כנס הייטק שנתי',
    type: 'הגברה + מולטימדיה',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    title: 'חתונה — אולמי היכל',
    type: 'תאורה + אפקטים',
    img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
  },
  {
    title: 'השקת מוצר — אירוע VIP',
    type: 'הפקה מלאה',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
  },
  {
    title: 'מופע לייב — פארק הירקון',
    type: 'הגברה + תאורה',
    img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
  },
  {
    title: 'אירוע חברה — גוגל ישראל',
    type: 'מולטימדיה + תאורה',
    img: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80',
  },
]

export default function Portfolio() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="portfolio" id="portfolio">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-tag">הפרויקטים שלנו</span>
        <h2>אירועים <span className="accent">שהפקנו</span></h2>
        <p>מבחר מהאירועים האחרונים שלנו — כל אירוע הוא סיפור ייחודי</p>
      </div>
      <div className="portfolio-grid reveal-stagger" ref={gridRef}>
        {projects.map((p, i) => (
          <div className="portfolio-card" key={i}>
            <img src={p.img} alt={p.title} loading="lazy" />
            <div className="portfolio-overlay">
              <span className="portfolio-type">{p.type}</span>
              <h3>{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
