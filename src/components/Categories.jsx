import useScrollReveal from '../hooks/useScrollReveal'

const categories = [
  {
    icon: '🎤',
    title: 'מערכות הגברה',
    desc: 'רמקולים, מיקסרים, מגברים ומיקרופונים מקצועיים.',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
  },
  {
    icon: '💡',
    title: 'תאורת אירועים',
    desc: 'ראשים נעים, פנסים, סטרובים ואפקטים מרהיבים.',
    img: 'https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=600&q=80',
  },
  {
    icon: '📺',
    title: 'מסכי LED ומולטימדיה',
    desc: 'מסכי ענק, מקרנים ופתרונות ויזואליים לכל אירוע.',
    img: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=600&q=80',
  },
]

export default function Categories() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="categories" id="categories">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-tag">קטלוג מוצרים</span>
        <h2>הציוד המקצועי <span className="accent">שלנו</span></h2>
        <p>מגוון רחב של ציוד הגברה, תאורה ואפקטים מהמותגים המובילים בעולם</p>
      </div>
      <div className="categories-grid reveal-stagger" ref={gridRef}>
        {categories.map((cat, i) => (
          <div className="cat-card" key={i}>
            <div className="cat-card-img">
              <img src={cat.img} alt={cat.title} loading="lazy" />
              <div className="cat-card-overlay">
                <span className="cat-icon">{cat.icon}</span>
              </div>
            </div>
            <div className="cat-card-body">
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <a href="#contact" className="cat-link">לפרטים נוספים →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
