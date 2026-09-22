import React from 'react';

export default function Hero({ onOpenRegister }) {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      {/* HERO PLAYER, BADGE & SLOGAN - Attached to full section width to eliminate blank gaps */}
      <div className="hero-player">
        <div className="hero-player-glow"></div>

        <img
          src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=2000&q=90"
          alt="Cricket Stadium"
        />

        {/* 3D RPL 5.0 Crest Logo */}
        <div className="hero-badge-container">
          <img
            src="/rpl-crest-3d.png"
            alt="RPL 5.0 Tournament Crest"
            className="hero-crest-badge"
          />
        </div>

        {/* HERO SLOGAN */}
        <div className="hero-slogan">
          <span>PLAY.</span>
          <span>COMPETE.</span>
          <span>GROW.</span>
        </div>
      </div>

      <div className="container-custom hero-container">
        
        {/* HERO CONTENT */}
        <div className="hero-content">
          
          <div className="present-label">
            SANJAY RUNGTA GROUP OF INSTITUTIONS
            <span>PRESENTS</span>
          </div>

          <div className="hero-title-small">
            RUNGTA
          </div>

          <h1>
            PREMIER LEAGUE
            <span> 5.0</span>
          </h1>

          <div className="hero-subtitle">
            STATE LEVEL INTER SCHOOL
            <br />
            CRICKET TOURNAMENT FOR BOYS
          </div>

          <div className="hero-date">
            <svg
              className="hero-calendar-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2.5" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="9.5" x2="21" y2="9.5" />
              <circle cx="7.5" cy="13.5" r="1.1" fill="currentColor" />
              <circle cx="12" cy="13.5" r="1.1" fill="currentColor" />
              <circle cx="16.5" cy="13.5" r="1.1" fill="currentColor" />
              <circle cx="7.5" cy="17.5" r="1.1" fill="currentColor" />
              <circle cx="12" cy="17.5" r="1.1" fill="currentColor" />
              <circle cx="16.5" cy="17.5" r="1.1" fill="currentColor" />
            </svg>
            <span className="hero-date-text">
              21<sup>ST</sup> OCTOBER TO 04<sup>TH</sup> NOVEMBER 2026
            </span>
          </div>

          <div className="hero-actions">
            <button
              onClick={onOpenRegister}
              className="btn btn-hero-primary group"
            >
              <span>Register Your Team</span>
              <span className="btn-arrow">→</span>
            </button>

            <a href="#tournament" className="btn btn-hero-outline">
              <span>Explore Tournament</span>
            </a>
          </div>

        </div>

      </div>

      {/* HERO FEATURES STRIP (MATCHING REFERENCE IMAGE) */}
      <div className="hero-features">
        <div className="feature-grid">
          
          {/* 1. UPTO 32 TEAMS */}
          <div className="hero-feature">
            <div className="hero-feat-icon">
              <svg viewBox="0 0 48 48" className="hero-feat-svg" fill="#f8c51c">
                <circle cx="24" cy="14" r="5.5" />
                <path d="M 16 31 C 16 26 19.5 22.5 24 22.5 C 28.5 22.5 32 26 32 31 Z" />
                <circle cx="13" cy="18" r="4.2" opacity="0.9" />
                <path d="M 6.5 31 C 6.5 27 9.5 24.5 13 24.5 C 14.8 24.5 16.4 25.2 17.5 26.5 C 16.8 27.8 16.5 29.3 16.5 31 Z" opacity="0.9" />
                <circle cx="35" cy="18" r="4.2" opacity="0.9" />
                <path d="M 31.5 31 C 31.5 29.3 31.2 27.8 30.5 26.5 C 31.6 25.2 33.2 24.5 35 24.5 C 38.5 24.5 41.5 27 41.5 31 Z" opacity="0.9" />
              </svg>
            </div>
            <div className="hero-feat-text">
              <strong className="hero-feat-main">Upto 32 Teams</strong>
              <span className="hero-feat-sub">Expected</span>
            </div>
          </div>

          {/* 2. DAY MATCHES */}
          <div className="hero-feature">
            <div className="hero-feat-icon">
              <svg viewBox="0 0 48 48" className="hero-feat-svg" fill="#f8c51c">
                <circle cx="24" cy="24" r="7.5" />
                <rect x="22" y="6" width="4" height="6" rx="2" />
                <rect x="22" y="36" width="4" height="6" rx="2" />
                <rect x="6" y="22" width="6" height="4" rx="2" />
                <rect x="36" y="22" width="6" height="4" rx="2" />
                <rect x="11.3" y="11.3" width="4" height="6" rx="2" transform="rotate(-45 13.3 14.3)" />
                <rect x="32.7" y="32.7" width="4" height="6" rx="2" transform="rotate(-45 34.7 35.7)" />
                <rect x="32.7" y="11.3" width="4" height="6" rx="2" transform="rotate(45 34.7 14.3)" />
                <rect x="11.3" y="32.7" width="4" height="6" rx="2" transform="rotate(45 13.3 35.7)" />
              </svg>
            </div>
            <div className="hero-feat-text">
              <strong className="hero-feat-main">Day Matches</strong>
              <span className="hero-feat-sub">Only</span>
            </div>
          </div>

          {/* 3. UNDER 18 */}
          <div className="hero-feature">
            <div className="hero-feat-icon">
              <svg viewBox="0 0 48 48" className="hero-feat-svg" fill="#f8c51c">
                <circle cx="24" cy="13" r="5" />
                <path d="M 17 31 C 17 26.2 20.2 22.8 24 22.8 C 27.8 22.8 31 26.2 31 31 Z" />
                <circle cx="13.5" cy="18" r="3.8" opacity="0.88" />
                <path d="M 8 31 C 8 27.2 10.8 24.8 13.8 24.8 C 15.3 24.8 16.7 25.5 17.6 26.6 C 17.1 27.9 16.8 29.4 16.8 31 Z" opacity="0.88" />
                <circle cx="34.5" cy="18" r="3.8" opacity="0.88" />
                <path d="M 31.2 31 C 31.2 29.4 30.9 27.9 30.4 26.6 C 31.3 25.5 32.7 24.8 34.2 24.8 C 37.2 24.8 40 27.2 40 31 Z" opacity="0.88" />
              </svg>
            </div>
            <div className="hero-feat-text">
              <strong className="hero-feat-main">Under 18</strong>
              <span className="hero-feat-sub">Player Age Group</span>
            </div>
          </div>

          {/* 4. TENNIS BALL (CROSSED BATS) */}
          <div className="hero-feature">
            <div className="hero-feat-icon">
              <svg viewBox="0 0 48 48" className="hero-feat-svg" fill="none">
                <circle cx="24" cy="24" r="18" fill="#f8c51c" />
                <g transform="rotate(45 24 24)">
                  <rect x="22.3" y="10" width="3.4" height="8" rx="1" fill="#041838" />
                  <circle cx="24" cy="10" r="1.7" fill="#041838" />
                  <path d="M 21.6 17.5 L 26.4 17.5 L 26.6 35.5 C 26.6 37 25.5 38 24 38 C 22.5 38 21.4 37 21.4 35.5 Z" fill="#041838" />
                </g>
                <g transform="rotate(-45 24 24)">
                  <rect x="22.3" y="10" width="3.4" height="8" rx="1" fill="#041838" />
                  <circle cx="24" cy="10" r="1.7" fill="#041838" />
                  <path d="M 21.6 17.5 L 26.4 17.5 L 26.6 35.5 C 26.6 37 25.5 38 24 38 C 22.5 38 21.4 37 21.4 35.5 Z" fill="#041838" />
                </g>
                <circle cx="24" cy="24" r="2.2" fill="#f8c51c" />
              </svg>
            </div>
            <div className="hero-feat-text">
              <strong className="hero-feat-main">Tennis Ball</strong>
              <span className="hero-feat-sub">Tournament</span>
            </div>
          </div>

          {/* 5. RSR RCET CRICKET GROUND */}
          <div className="hero-feature">
            <div className="hero-feat-icon">
              <svg viewBox="0 0 48 48" className="hero-feat-svg" fill="#f8c51c">
                <path d="M 24 8 C 17.4 8 12 13.4 12 20 C 12 28.5 22.2 38.5 23.1 39.4 C 23.6 39.8 24.4 39.8 24.9 39.4 C 25.8 38.5 36 28.5 36 20 C 36 13.4 30.6 8 24 8 Z M 24 24 C 21.8 24 20 22.2 20 20 C 20 17.8 21.8 16 24 16 C 26.2 16 28 17.8 28 20 C 28 22.2 26.2 24 24 24 Z" />
              </svg>
            </div>
            <div className="hero-feat-text">
              <strong className="hero-feat-main">RSR RCET Cricket Ground</strong>
              <span className="hero-feat-sub">Bhilai</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
