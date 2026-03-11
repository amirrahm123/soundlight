import useScrollReveal from '../hooks/useScrollReveal'

const stats = [
  { num: '15+', label: 'שנות ניסיון' },
  { num: '500+', label: 'אירועים בשנה' },
  { num: '1000+', label: 'לקוחות מרוצים' },
  { num: '50+', label: 'אנשי צוות' },
]

const brands = [
  'JBL Professional', 'Clay Paky', 'Yamaha', 'Shure',
  'Martin by Harman', 'ROE Visual', 'Sennheiser', 'Allen & Heath',
  'Robe Lighting', 'QSC', 'L-Acoustics', 'ETC',
]

export default function About() {
  const contentRef = useScrollReveal()

  return (
    <section className="about" id="about">
      <div className="about-content reveal" ref={contentRef}>
        <div className="about-text">
          <span className="section-tag">אודות</span>
          <h2>למה <span className="accent">SoundLight Pro</span>?</h2>
          <p>
            כבר למעלה מ-15 שנה אנחנו מספקים פתרונות הגברה, תאורה והפקת אירועים
            ברמה הגבוהה ביותר. הצוות שלנו כולל מהנדסי סאונד, מעצבי תאורה וטכנאים
            מנוסים שעובדים עם הציוד המתקדם ביותר בשוק.
          </p>
          <p>
            אנחנו מאמינים שכל אירוע הוא ייחודי, ולכן אנו מתאימים את הציוד
            והשירות לצרכים המדויקים של כל לקוח. מחתונות אינטימיות ועד פסטיבלים
            של עשרות אלפי משתתפים — אנחנו כאן כדי להפוך את החזון למציאות.
          </p>
          <div className="about-stats">
            {stats.map((s, i) => (
              <div className="about-stat" key={i}>
                <span className="about-stat-num">{s.num}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-brands">
          <h3>המותגים שלנו</h3>
          <div className="brands-grid">
            {brands.map((b, i) => (
              <div className="brand-tag" key={i}>{b}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
