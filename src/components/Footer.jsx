export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">⚡ Sound<span>Light</span> Pro</div>
          <p>פתרונות הגברה, תאורה והפקת אירועים מקצועיים. 15+ שנות ניסיון, 500+ אירועים בשנה.</p>
        </div>
        <div className="footer-links">
          <h4>ניווט מהיר</h4>
          <a href="#categories">מוצרים</a>
          <a href="#services">שירותים</a>
          <a href="#portfolio">פרויקטים</a>
          <a href="#about">אודות</a>
          <a href="#contact">צרו קשר</a>
        </div>
        <div className="footer-links">
          <h4>שירותים</h4>
          <a href="#services">הפקת אירועים</a>
          <a href="#services">השכרת ציוד</a>
          <a href="#services">תמיכה טכנית</a>
          <a href="#services">תכנון ועיצוב</a>
        </div>
        <div className="footer-links">
          <h4>צרו קשר</h4>
          <a href="tel:0541234567">054-1234567</a>
          <a href="mailto:info@soundlightpro.co.il">info@soundlightpro.co.il</a>
          <p>אזור תעשייה, תל אביב</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} <strong>SoundLight Pro</strong> — כל הזכויות שמורות.</p>
      </div>
    </footer>
  )
}
