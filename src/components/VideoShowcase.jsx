import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function VideoShowcase() {
  const [playing, setPlaying] = useState(false)
  const ref = useScrollReveal()

  return (
    <section className="video-showcase">
      <div className="video-showcase-inner reveal" ref={ref}>
        <div className="section-header">
          <span className="section-tag">צפו באירועים שלנו</span>
          <h2>תנו <span className="accent">לתמונות לדבר</span></h2>
          <p>צפו בקליפ מהאירועים האחרונים שלנו וגלו את הרמה המקצועית</p>
        </div>

        <div className="video-container">
          {!playing ? (
            <div className="video-poster" onClick={() => setPlaying(true)}>
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80"
                alt="סרטון אירועים"
                loading="lazy"
              />
              <div className="video-poster-overlay">
                <button className="video-play-btn" aria-label="הפעל סרטון">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="31" stroke="white" strokeWidth="2" opacity="0.6"/>
                    <path d="M26 20L46 32L26 44V20Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="video-player">
              {/* Replace src with your actual video URL or YouTube embed */}
              <video
                autoPlay
                controls
                playsInline
                poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80"
              >
                <source src="/event-highlight.mp4" type="video/mp4" />
                הדפדפן שלך לא תומך בהפעלת וידאו.
              </video>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
