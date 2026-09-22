import React from 'react';

export default function Hero({ onOpenRegister }) {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

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

        {/* HERO PLAYER & BADGE */}
        <div className="hero-player">
          <div className="hero-player-glow"></div>

          <img
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=85"
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
        </div>

        {/* HERO SLOGAN */}
        <div className="hero-slogan">
          <span>PLAY.</span>
          <span>COMPETE.</span>
          <span>GROW.</span>
        </div>

      </div>
    </section>
  );
}
