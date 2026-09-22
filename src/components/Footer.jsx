import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container-custom">
        
        <div className="footer-grid">
          
          {/* FOOTER BRAND WITH SRGI LOGO */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src="/SRGI LOGO.png"
                alt="Sanjay Rungta Group of Institutions"
                style={{ height: '48px', width: 'auto', objectFit: 'contain', background: 'white', padding: '4px 8px', borderRadius: '6px' }}
              />
            </div>

            <p style={{ marginTop: '10px' }}>
              Let the minds bloom • Maintaining the legacy for decades
            </p>

            <div className="footer-event">
              RUNGTA PREMIER LEAGUE<br />
              <strong>5.0</strong>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h3>QUICK LINKS</h3>
            <a href="#home">Home</a>
            <a href="#tournament">Tournament</a>
            <a href="#schedule">Schedule</a>
            <a href="#rules">Rules</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>

          {/* CONTACT */}
          <div className="footer-column">
            <h3>CONTACT FOR REGISTRATION</h3>
            <a href="tel:9229111555">
              ☎ 9229 111 555
            </a>
            <a href="tel:9229111666">
              ☎ 9229 111 666
            </a>
          </div>

          {/* VENUE */}
          <div className="footer-column">
            <h3>VENUE</h3>
            <p>
              Sanjay Rungta Group of Institutions,<br />
              RSR RCET Cricket Ground,<br />
              Bhilai, Chhattisgarh.
            </p>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <span>
            © 2026 Rungta Premier League. All Rights Reserved.
          </span>

          <span>
            A SANJAY RUNGTA GROUP OF INSTITUTIONS INITIATIVE
          </span>
        </div>

      </div>
    </footer>
  );
}
