import React from 'react';

export default function PrizePool() {
  return (
    <section className="section prizes-section" id="prizes">
      <div className="container-custom">
        
        {/* SECTION HEADING */}
        <div className="section-heading center">
          <h2 className="prizes-main-title">
            PRIZES & <span>RECOGNITION</span>
          </h2>
          <p className="prizes-subtitle">
            EXCITING REWARDS FOR CHAMPIONS
          </p>
        </div>

        {/* PRIZE GRID (4 CHAMPIONSHIP CARDS) */}
        <div className="prize-grid-ref">
          
          {/* 1. WINNER */}
          <div className="prize-card-ref winner-card">
            <div className="trophy-img-wrap">
              <img
                src="/images/gold-trophy.png"
                alt="Winner Gold Trophy"
                className="trophy-img trophy-gold"
              />
            </div>

            <div className="prize-info">
              <span className="prize-badge-title">WINNER</span>
              <h3 className="prize-amount">₹51,000</h3>

              <div className="scholarship-pill">
                <span className="sch-label">SCHOLARSHIP WORTH</span>
                <strong className="sch-val">₹5,100</strong>
                <span className="sch-unit">PER PLAYER</span>
              </div>
            </div>
          </div>

          {/* 2. RUNNER UP */}
          <div className="prize-card-ref runner-card">
            <div className="trophy-img-wrap">
              <img
                src="/images/silver-trophy.png"
                alt="Runner Up Silver Trophy"
                className="trophy-img trophy-silver"
              />
            </div>

            <div className="prize-info">
              <span className="prize-badge-title">RUNNER UP</span>
              <h3 className="prize-amount">₹21,000</h3>

              <div className="scholarship-pill">
                <span className="sch-label">SCHOLARSHIP WORTH</span>
                <strong className="sch-val">₹3,100</strong>
                <span className="sch-unit">PER PLAYER</span>
              </div>
            </div>
          </div>

          {/* 3. SECOND RUNNER UP / MAN OF SERIES */}
          <div className="prize-card-ref bronze-card">
            <div className="trophy-img-wrap">
              <img
                src="/images/bronze-trophy.png"
                alt="Second Runner Up Trophy"
                className="trophy-img trophy-bronze"
              />
            </div>

            <div className="prize-info">
              <span className="prize-badge-title">2ND RUNNER UP</span>
              <h3 className="prize-amount">₹11,000</h3>

              <div className="scholarship-pill">
                <span className="sch-label">SCHOLARSHIP WORTH</span>
                <strong className="sch-val">₹2,100</strong>
                <span className="sch-unit">PER PLAYER</span>
              </div>
            </div>
          </div>

          {/* 4. ENTRY FEES */}
          <div className="prize-card-ref entry-card-ref">
            <div className="trophy-img-wrap entry-ball-wrap">
              <img
                src="/images/cricket-ball.png"
                alt="Tournament Cricket Ball"
                className="trophy-img ball-img"
              />
            </div>

            <div className="prize-info entry-info">
              <span className="prize-badge-title">ENTRY FEES</span>
              <h3 className="prize-amount">₹500</h3>
              <span className="entry-unit-text">PER TEAM</span>
            </div>
          </div>

        </div>

        {/* SCHOLARSHIP SUMMARY STRIP */}
        <div style={{
          marginTop: '25px',
          background: 'var(--navy)',
          color: 'white',
          borderRadius: '8px',
          padding: '16px 22px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '15px'
        }}>
          <div>
            <span style={{ color: 'var(--gold)', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block' }}>
              SANJAY RUNGTA GROUP OF INSTITUTIONS
            </span>
            <strong style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '20px', textTransform: 'uppercase' }}>
              PLAYER SCHOLARSHIP PROGRAM
            </strong>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '12px' }}>
            <div>
              <span style={{ color: '#b7c2d0', fontSize: '10px', display: 'block' }}>Winner Squad</span>
              <strong style={{ color: 'var(--gold)', fontFamily: '"Barlow Condensed", sans-serif', fontSize: '17px' }}>₹5,100 / player</strong>
            </div>
            <div>
              <span style={{ color: '#b7c2d0', fontSize: '10px', display: 'block' }}>Runner Squad</span>
              <strong style={{ color: 'white', fontFamily: '"Barlow Condensed", sans-serif', fontSize: '17px' }}>₹3,100 / player</strong>
            </div>
            <div>
              <span style={{ color: '#b7c2d0', fontSize: '10px', display: 'block' }}>Semifinalist</span>
              <strong style={{ color: 'white', fontFamily: '"Barlow Condensed", sans-serif', fontSize: '17px' }}>₹2,100 / player</strong>
            </div>
            <div>
              <span style={{ color: '#b7c2d0', fontSize: '10px', display: 'block' }}>Participant</span>
              <strong style={{ color: 'white', fontFamily: '"Barlow Condensed", sans-serif', fontSize: '17px' }}>₹1,100 / player</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
