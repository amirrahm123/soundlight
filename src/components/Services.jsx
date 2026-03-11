import useScrollReveal from '../hooks/useScrollReveal'

const services = [
  {
    icon: '🎪',
    title: 'הפקת אירועים',
    desc: 'הפקה מלאה מא\' ועד ת\' — תכנון, התקנה, הפעלה ופירוק. חתונות, כנסים, פסטיבלים ואירועי חברה.',
    features: ['תכנון טכני מלא', 'צוות מקצועי באתר', 'גיבוי ציוד 100%'],
  },
  {
    icon: '🔊',
    title: 'השכרת ציוד',
    desc: 'מגוון רחב של ציוד הגברה, תאורה ואפקטים להשכרה יומית, שבועית או לפרויקט.',
    features: ['ציוד מתוחזק ומעודכן', 'משלוח והתקנה', 'תמיכה טכנית 24/7'],
  },
  {
    icon: '🛠️',
    title: 'תמיכה טכנית',
    desc: 'טכנאי סאונד ותאורה מנוסים ללוות את האירוע שלכם מרגע ההכנה ועד הסוף.',
    features: ['טכנאי סאונד מוסמכים', 'מפעילי תאורה מקצועיים', 'זמינות מלאה'],
  },
  {
    icon: '📐',
    title: 'תכנון ועיצוב',
    desc: 'עיצוב תאורה ייחודי, תכנון אקוסטי ופתרונות מולטימדיה מותאמים אישית.',
    features: ['הדמיות 3D', 'תכנון אקוסטי', 'עיצוב תאורה ייחודי'],
  },
]

export default function Services() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="services" id="services">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-tag">השירותים שלנו</span>
        <h2>פתרונות <span className="accent">מקצועיים</span> לכל אירוע</h2>
        <p>מהשכרת ציוד בודד ועד הפקה מלאה — הכל תחת קורת גג אחת</p>
      </div>
      <div className="services-grid reveal-stagger" ref={gridRef}>
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <ul className="service-features">
              {s.features.map((f, j) => (
                <li key={j}><span className="check">✓</span> {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
