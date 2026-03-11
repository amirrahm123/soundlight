import useScrollReveal from '../hooks/useScrollReveal'

const products = [
  {
    name: 'JBL VTX A12',
    category: 'רמקול ליין אריי',
    img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&q=80',
    specs: ['2000W RMS', '136dB SPL', 'תדר: 42Hz–20kHz'],
  },
  {
    name: 'Clay Paky Sharpy Plus',
    category: 'ראש נע - Beam',
    img: 'https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=400&q=80',
    specs: ['330W', 'זום 1°–4°', 'CMY + CTO'],
  },
  {
    name: 'Yamaha CL5',
    category: 'מיקסר דיגיטלי',
    img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&q=80',
    specs: ['72 ערוצי כניסה', 'מסך מגע', 'Dante Network'],
  },
  {
    name: 'ROE Visual BP2',
    category: 'מסך LED',
    img: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=400&q=80',
    specs: ['2.8mm פיקסל', 'בהירות 1200nit', 'מודולרי'],
  },
  {
    name: 'Shure Axient Digital',
    category: 'מיקרופון אלחוטי',
    img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&q=80',
    specs: ['טווח 100m+', 'הצפנה AES-256', 'ShowLink'],
  },
  {
    name: 'MDG ATMe',
    category: 'מכונת ערפל',
    img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80',
    specs: ['ערפל עדין במיוחד', 'CO2 / N2', 'DMX 512'],
  },
]

export default function Products() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="products" id="products">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-tag">מוצרים מובילים</span>
        <h2>הציוד <span className="accent">הטוב ביותר</span> בשוק</h2>
        <p>אנו עובדים עם המותגים המובילים בעולם להפקת אירועים</p>
      </div>
      <div className="products-grid reveal-stagger" ref={gridRef}>
        {products.map((p, i) => (
          <div className="product-card" key={i}>
            <div className="product-img">
              <img src={p.img} alt={p.name} loading="lazy" />
              <span className="product-badge">{p.category}</span>
            </div>
            <div className="product-body">
              <h3>{p.name}</h3>
              <ul className="product-specs">
                {p.specs.map((s, j) => <li key={j}>{s}</li>)}
              </ul>
              <a href="#contact" className="product-cta">בקשו הצעת מחיר</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
