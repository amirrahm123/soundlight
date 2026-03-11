import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const wrapRef = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.cname.value
    const phone = form.cphone.value
    const email = form.cemail.value || 'לא צוין'
    const type = form.ctype.value
    const date = form.cdate.value || 'לא צוין'
    const service = form.cservice.value
    const message = form.cmessage.value || 'אין'

    const text = `📩 בקשה חדשה מהאתר!\n\n👤 שם: ${name}\n📞 טלפון: ${phone}\n📧 אימייל: ${email}\n🎉 סוג אירוע: ${type}\n📅 תאריך: ${date}\n🔧 שירות: ${service}\n💬 פרטים: ${message}`

    window.open(`https://wa.me/972548393202?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-wrap reveal" ref={wrapRef}>
        <div className="contact-info">
          <span className="section-tag">צרו קשר</span>
          <h2>בואו <span className="accent">נדבר</span></h2>
          <p>מלאו את הטופס ונחזור אליכם תוך שעות ספורות עם הצעת מחיר מותאמת.</p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>טלפון</strong>
                <p>054-1234567</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <strong>אימייל</strong>
                <p>info@soundlightpro.co.il</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>כתובת</strong>
                <p>אזור תעשייה, תל אביב</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <strong>שעות פעילות</strong>
                <p>א׳–ה׳ 08:00–18:00 | ו׳ 08:00–13:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          {!sent ? (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cname">שם מלא</label>
                  <input type="text" id="cname" name="cname" placeholder="ישראל ישראלי" required />
                </div>
                <div className="form-group">
                  <label htmlFor="cphone">טלפון</label>
                  <input type="tel" id="cphone" name="cphone" placeholder="054-1234567" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cemail">אימייל</label>
                <input type="email" id="cemail" name="cemail" placeholder="you@example.com" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="ctype">סוג אירוע</label>
                  <select id="ctype" name="ctype" required defaultValue="">
                    <option value="" disabled>בחרו סוג</option>
                    <option>חתונה</option>
                    <option>בר/בת מצווה</option>
                    <option>אירוע חברה</option>
                    <option>כנס / השקה</option>
                    <option>פסטיבל / מופע</option>
                    <option>אחר</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="cdate">תאריך משוער</label>
                  <input type="date" id="cdate" name="cdate" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cservice">שירותים נדרשים</label>
                <select id="cservice" name="cservice" required defaultValue="">
                  <option value="" disabled>בחרו שירות</option>
                  <option>הגברה בלבד</option>
                  <option>תאורה בלבד</option>
                  <option>הגברה + תאורה</option>
                  <option>הפקה מלאה</option>
                  <option>השכרת ציוד</option>
                  <option>תמיכה טכנית</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="cmessage">פרטים נוספים</label>
                <textarea id="cmessage" name="cmessage" rows="4" placeholder="ספרו לנו על האירוע — מיקום, מספר אורחים, דרישות מיוחדות..."></textarea>
              </div>
              <button type="submit" className="form-submit">שלחו בקשה ⚡</button>
            </form>
          ) : (
            <div className="contact-success">
              <div className="success-icon">✅</div>
              <h3>הבקשה נשלחה בהצלחה!</h3>
              <p>נחזור אליכם תוך שעות ספורות עם הצעת מחיר מותאמת.</p>
              <button className="btn-outline" onClick={() => setSent(false)}>שליחת בקשה נוספת</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
