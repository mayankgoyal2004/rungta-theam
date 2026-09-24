import React from 'react';

export default function PrizePool() {
  return (
    <div className="prizepool-master-wrapper" id="prizes">
      
      {/* =========================================================
          SECTION 1: PRIZES & RECOGNITION (3 CHAMPIONSHIP CASH PRIZES)
      ========================================================= */}
      <section className="prizes-section">
        <div className="container-custom">
          
          {/* SECTION HEADING */}
          <div className="section-heading center">
            <h2 className="prizes-main-title">
              PRIZES & <span>RECOGNITION</span>
            </h2>
            <p className="prizes-subtitle">
              TOTAL CASH PRIZES WORTH ₹83,000 & OFFICIAL CHAMPIONSHIP TROPHIES
            </p>
          </div>

          {/* 3 CHAMPIONSHIP CARDS (GOLD, SILVER, BRONZE) */}
          <div className="prize-grid-ref">
            
            {/* 1. WINNER */}
            <div className="prize-card-ref winner-card">
              <div className="trophy-img-wrap">
                <img
                  src="/images/gold-trophy.png"
                  alt="Winner Gold Trophy"
                  className="trophy-img trophy-gold"
                  loading="lazy"
                />
              </div>

              <div className="prize-info">
                <span className="prize-badge-title">CHAMPION / WINNER</span>
                <h3 className="prize-amount">₹51,000</h3>
                <span className="prize-perk-badge">Grand Trophy + Medals</span>
              </div>
            </div>

            {/* 2. RUNNER UP */}
            <div className="prize-card-ref runner-card">
              <div className="trophy-img-wrap">
                <img
                  src="/images/silver-trophy.png"
                  alt="Runner Up Silver Trophy"
                  className="trophy-img trophy-silver"
                  loading="lazy"
                />
              </div>

              <div className="prize-info">
                <span className="prize-badge-title">RUNNER UP</span>
                <h3 className="prize-amount">₹21,000</h3>
                <span className="prize-perk-badge">Silver Trophy + Medals</span>
              </div>
            </div>

            {/* 3. 2ND RUNNER UP */}
            <div className="prize-card-ref bronze-card">
              <div className="trophy-img-wrap">
                <img
                  src="/images/bronze-trophy.png"
                  alt="Second Runner Up Trophy"
                  className="trophy-img trophy-bronze"
                  loading="lazy"
                />
              </div>

              <div className="prize-info">
                <span className="prize-badge-title">2ND RUNNER UP</span>
                <h3 className="prize-amount">₹11,000</h3>
                <span className="prize-perk-badge">Bronze Trophy + Medals</span>
              </div>
            </div>

          </div>

          <div className="pp-podium-footer-slogan">
            <span>PLAY FOR GLORY</span>
            <span className="pp-dot">•</span>
            <span>WIN FOR A BRIGHTER TOMORROW</span>
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 2: SPECIAL AWARDS (EXACT REFERENCE DESIGN)
      ========================================================= */}
      <section className="pp-section pp-special-awards-section">
        <div className="container-custom">
          
          {/* HEADER */}
          <div className="pp-awards-header center">
            <span className="pp-awards-sub-label">
              RECOGNIZING INDIVIDUAL BRILLIANCE
            </span>
            <h2 className="pp-awards-main-title">
              SPECIAL AWARDS
            </h2>
          </div>

          {/* 6-CARD GRID MATCHING REFERENCE IMAGE */}
          <div className="pp-special-grid">
            
            {/* 1. MAN OF SERIES */}
            <div className="pp-special-card">
              <div className="pp-special-icon-box">
                <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
                  <defs>
                    <linearGradient id="saGoldBatsman" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="40%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                    <filter id="saGlowBatsman" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#f59e0b" floodOpacity="0.4" />
                    </filter>
                  </defs>
                  <g fill="url(#saGoldBatsman)" filter="url(#saGlowBatsman)">
                    <circle cx="33" cy="13" r="4.5" />
                    <path d="M 35 13 L 39 15 L 36 17 Z" />
                    <path d="M 29 17 C 27 20 25 24 24 28 L 29 35 L 34 32 L 34 21 Z" />
                    <path d="M 34 19 L 41 21 L 44 20 L 41 24 L 33 23 Z" />
                    <rect x="42" y="19" width="16" height="3.5" rx="1.2" transform="rotate(8 42 19)" />
                    <path d="M 28 20 L 23 23 L 24 25 L 29 22 Z" />
                    <path d="M 25 32 L 34 32 L 32 38 L 23 37 Z" />
                    <path d="M 32 37 L 41 46 L 44 54 L 40 55 L 35 48 L 29 40 Z" />
                    <path d="M 40 53 L 45 55 L 42 57 L 38 55 Z" />
                    <path d="M 25 37 L 19 43 L 15 47 L 14 45 L 18 41 L 23 36 Z" />
                    <path d="M 15 46 L 12 48 L 13 50 L 16 47 Z" />
                  </g>
                </svg>
              </div>
              <h4 className="pp-special-name">MAN OF SERIES</h4>
              <div className="pp-special-amount">₹ 5,100</div>
            </div>

            {/* 2. HIT ME */}
            <div className="pp-special-card">
              <div className="pp-special-icon-box">
                <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
                  <defs>
                    <linearGradient id="saBatFace" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="45%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                    <linearGradient id="saBatGrip" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="50%" stopColor="#fde047" />
                      <stop offset="100%" stopColor="#ca8a04" />
                    </linearGradient>
                  </defs>
                  <rect x="42" y="11" width="5.5" height="15" rx="2" transform="rotate(45 42 11)" fill="url(#saBatGrip)" stroke="#78350f" strokeWidth="0.5" />
                  <circle cx="51" cy="13" r="3" fill="#ca8a04" />
                  <line x1="43" y1="16" x2="47" y2="12" stroke="#78350f" strokeWidth="0.8" />
                  <line x1="40" y1="19" x2="44" y2="15" stroke="#78350f" strokeWidth="0.8" />
                  <path d="M 33 21 L 43 31 L 22 52 C 19.5 54.5 16 54.5 13.5 52 C 11 49.5 11 46 13.5 43.5 Z" fill="url(#saBatFace)" stroke="#b45309" strokeWidth="1" />
                  <path d="M 38 26 L 17.5 47" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                </svg>
              </div>
              <h4 className="pp-special-name">HIT ME</h4>
              <div className="pp-special-amount pp-special-celebration-text">CELEBRATION</div>
            </div>

            {/* 3. HALF CENTURY */}
            <div className="pp-special-card">
              <div className="pp-special-icon-box">
                <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
                  <defs>
                    <linearGradient id="saBadgeRim" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#b45309" />
                    </linearGradient>
                    <radialGradient id="saBadgeDisc" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#082348" />
                      <stop offset="100%" stopColor="#031227" />
                    </radialGradient>
                  </defs>
                  <circle cx="32" cy="32" r="27" fill="none" stroke="url(#saBadgeRim)" strokeWidth="4" />
                  <circle cx="32" cy="32" r="23" fill="url(#saBadgeDisc)" stroke="url(#saBadgeRim)" strokeWidth="1.2" />
                  <text x="32" y="40" textAnchor="middle" fill="url(#saBadgeRim)" fontFamily="'Barlow Condensed', sans-serif" fontWeight="900" fontSize="24" letterSpacing="-0.5">50</text>
                </svg>
              </div>
              <h4 className="pp-special-name">HALF CENTURY</h4>
              <div className="pp-special-amount">₹ 501</div>
            </div>

            {/* 4. HAT TRICK WICKETS */}
            <div className="pp-special-card">
              <div className="pp-special-icon-box">
                <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
                  <defs>
                    <linearGradient id="saStumpGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="35%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#b45309" />
                    </linearGradient>
                  </defs>
                  <rect x="15" y="11" width="16" height="3.5" rx="1.5" fill="url(#saStumpGrad)" />
                  <circle cx="15.5" cy="12.75" r="1.5" fill="#fef08a" />
                  <rect x="33" y="11" width="16" height="3.5" rx="1.5" fill="url(#saStumpGrad)" />
                  <circle cx="48.5" cy="12.75" r="1.5" fill="#fef08a" />
                  <rect x="18" y="14" width="5" height="38" rx="2" fill="url(#saStumpGrad)" />
                  <rect x="29.5" y="14" width="5" height="38" rx="2" fill="url(#saStumpGrad)" />
                  <rect x="41" y="14" width="5" height="38" rx="2" fill="url(#saStumpGrad)" />
                </svg>
              </div>
              <h4 className="pp-special-name pp-special-twoline">HAT TRICK<br />WICKETS</h4>
              <div className="pp-special-amount">₹ 501</div>
            </div>

            {/* 5. CENTURY */}
            <div className="pp-special-card">
              <div className="pp-special-icon-box">
                <svg viewBox="0 0 74 64" className="w-14 h-12" fill="none">
                  <defs>
                    <linearGradient id="saCentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="45%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#b45309" />
                    </linearGradient>
                  </defs>
                  <text x="37" y="44" textAnchor="middle" fill="url(#saCentGrad)" fontFamily="'Barlow Condensed', sans-serif" fontWeight="900" fontSize="38" letterSpacing="0.5">100</text>
                </svg>
              </div>
              <h4 className="pp-special-name">CENTURY</h4>
              <div className="pp-special-amount">₹ 1,100</div>
            </div>

            {/* 6. 5 WICKETS */}
            <div className="pp-special-card">
              <div className="pp-special-icon-box">
                <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
                  <defs>
                    <radialGradient id="saBallGrad" cx="35%" cy="32%" r="65%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="45%" stopColor="#f59e0b" />
                      <stop offset="85%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#92400e" />
                    </radialGradient>
                  </defs>
                  <circle cx="32" cy="32" r="26" fill="url(#saBallGrad)" />
                  <path d="M 21 8 C 30 20 30 44 21 56" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 30 6 C 41 20 41 44 30 58" stroke="#78350f" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M 39 8 C 50 20 50 44 39 56" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
                  <line x1="23" y1="16" x2="28" y2="18" stroke="#fef08a" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="25" y1="26" x2="31" y2="28" stroke="#fef08a" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="25" y1="36" x2="31" y2="38" stroke="#fef08a" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="23" y1="46" x2="28" y2="48" stroke="#fef08a" strokeWidth="1.2" strokeLinecap="round" />
                  <ellipse cx="25" cy="20" rx="9" ry="5" transform="rotate(-30 25 20)" fill="white" opacity="0.35" />
                </svg>
              </div>
              <h4 className="pp-special-name">5 WICKETS</h4>
              <div className="pp-special-amount">₹ 1,100</div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 3: SCHOLARSHIP DETAILS (PLACED AFTER SPECIAL AWARDS)
      ========================================================= */}
      <section className="pp-section pp-scholarship-section" id="scholarships">
        <div className="container-custom">
          
          {/* HEADER */}
          <div className="pp-awards-header center">
            <span className="pp-awards-sub-label">
              SUPPORTING TALENT, BUILDING FUTURES
            </span>
            <h2 className="pp-awards-main-title">
              SCHOLARSHIP DETAILS
            </h2>
            <p className="pp-sch-subheading">
              EDUCATIONAL SCHOLARSHIPS AWARDED TO EVERY DESERVING CRICKETER
            </p>
          </div>

          {/* 4-CARD SCHOLARSHIP GRID */}
          <div className="pp-sch-details-grid">
            
            {/* 1. WINNER PLAYER */}
            <div className="pp-sch-card pp-sch-card-winner">
              <div className="pp-sch-trophy-wrap">
                <img
                  src="/images/gold-trophy.png"
                  alt="Winner Gold Trophy"
                  className="pp-sch-trophy-img"
                  loading="lazy"
                />
              </div>
              <h4 className="pp-sch-title">WINNER PLAYER</h4>
              <div className="pp-sch-amount">₹ 5,100</div>
              <span className="pp-sch-scope-text">Per Player Scholarship</span>
            </div>

            {/* 2. RUNNER PLAYER */}
            <div className="pp-sch-card pp-sch-card-runner">
              <div className="pp-sch-trophy-wrap">
                <img
                  src="/images/silver-trophy.png"
                  alt="Runner Up Silver Trophy"
                  className="pp-sch-trophy-img"
                  loading="lazy"
                />
              </div>
              <h4 className="pp-sch-title">RUNNER PLAYER</h4>
              <div className="pp-sch-amount">₹ 3,100</div>
              <span className="pp-sch-scope-text">Per Player Scholarship</span>
            </div>

            {/* 3. SEMIFINALIST */}
            <div className="pp-sch-card pp-sch-card-semi">
              <div className="pp-sch-trophy-wrap">
                <img
                  src="/images/bronze-trophy.png"
                  alt="Semifinalist Bronze Trophy"
                  className="pp-sch-trophy-img"
                  loading="lazy"
                />
              </div>
              <h4 className="pp-sch-title">SEMIFINALIST</h4>
              <div className="pp-sch-amount">₹ 2,100</div>
              <span className="pp-sch-scope-text">Per Player Scholarship</span>
            </div>

            {/* 4. PARTICIPANT */}
            <div className="pp-sch-card pp-sch-card-participant">
              <div className="pp-sch-trophy-wrap">
                <img
                  src="/images/participant-trophy.png"
                  alt="Participant Star Trophy"
                  className="pp-sch-trophy-img"
                  loading="lazy"
                />
              </div>
              <h4 className="pp-sch-title">PARTICIPANT</h4>
              <div className="pp-sch-amount">₹ 1,100</div>
              <span className="pp-sch-scope-text">Per Player Scholarship</span>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 4: TOURNAMENT ENTRY FEE (DEDICATED SECTION)
      ========================================================= */}
      <section className="pp-section pp-entry-section" id="entry-fee">
        <div className="container-custom">
          
          {/* HEADER */}
          <div className="pp-entry-header center">
            <span className="pp-entry-sub-label">
              AFFORDABLE & ACCESSIBLE PARTICIPATION
            </span>
            <h2 className="pp-entry-main-title">
              TOURNAMENT <span>ENTRY FEE</span>
            </h2>
            <p className="pp-entry-desc-sub">
              Nominal registration fee covering official tournament ball, turf infrastructure, refreshments & player kits
            </p>
          </div>

          {/* DEDICATED ENTRY HERO CARD */}
          <div className="entry-hero-card">
            <div className="entry-hero-content">
              
              {/* LEFT / TOP: 3D BALL & PRICE BADGE */}
              <div className="entry-price-block">
                <div className="entry-3d-ball-wrap">
                  <img
                    src="/images/cricket-ball.png"
                    alt="Official Tournament Cricket Ball"
                    className="entry-3d-ball-img"
                    loading="lazy"
                  />
                  <span className="entry-ball-badge">HEAVY TENNIS BALL</span>
                </div>
                
                <div className="entry-pricing-tag">
                  <span className="entry-price-currency">₹</span>
                  <span className="entry-price-number">500</span>
                  <span className="entry-price-period">/ TEAM</span>
                </div>

                <div className="entry-squad-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span>Squad of 11 to 15 Players</span>
                </div>
              </div>

              {/* RIGHT / MAIN: PERKS & INCLUSIONS GRID */}
              <div className="entry-perks-block">
                <h3 className="entry-inclusions-heading">WHAT'S INCLUDED IN ENTRY FEE</h3>
                
                <div className="entry-perks-grid">
                  <div className="entry-perk-item">
                    <div className="entry-perk-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-4 h-4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="entry-perk-text">
                      <strong>Brand-New Match Ball Every Innings</strong>
                      <span>Official premium heavy-duty tennis ball provided by match officials</span>
                    </div>
                  </div>

                  <div className="entry-perk-item">
                    <div className="entry-perk-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-4 h-4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="entry-perk-text">
                      <strong>Professional Stadium Turf & Nets</strong>
                      <span>Exclusive match access to RSR RCET stadium pitch & warmup nets</span>
                    </div>
                  </div>

                  <div className="entry-perk-item">
                    <div className="entry-perk-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-4 h-4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="entry-perk-text">
                      <strong>Official Certificates of Athletic Honor</strong>
                      <span>Verified state-level tournament certificates for all players</span>
                    </div>
                  </div>

                  <div className="entry-perk-item">
                    <div className="entry-perk-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-4 h-4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="entry-perk-text">
                      <strong>Hydration, Medical & Commentary Support</strong>
                      <span>On-ground medical team, energy drinks, certified umpires & commentary</span>
                    </div>
                  </div>
                </div>

                {/* BOTTOM ACTION BAR */}
                <div className="entry-action-bar">
                  <div className="entry-payment-info">
                    <span className="entry-pay-label">PAYMENT MODES ACCEPTED:</span>
                    <span className="entry-pay-methods">UPI (GPay / PhonePe / Paytm / BHIM) • Cash at Campus Sports Desk</span>
                  </div>
                  <a href="#hero-register" className="btn btn-primary entry-cta-btn">
                    <span>REGISTER YOUR SCHOOL TEAM</span>
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 5: TOURNAMENT FORMAT (EXACT REFERENCE DESIGN)
      ========================================================= */}
      <section className="pp-section pp-format-section" id="tournament">
        <div className="container-custom">
          
          {/* HEADER */}
          <div className="pp-tf-header center">
            <span className="pp-tf-sub-label">
              ROAD TO THE CHAMPIONSHIP
            </span>
            <h2 className="pp-tf-main-title">
              TOURNAMENT FORMAT
            </h2>
          </div>

          {/* 3-CHEVRON STAGE FLOW MATCHING REFERENCE IMAGE */}
          <div className="pp-tf-flow-container">
            
            {/* STAGE 1: PRELIMS */}
            <div className="pp-tf-stage-col">
              <div className="pp-tf-card-unit">
                <div className="pp-tf-chevron-head">
                  <h3 className="pp-tf-stage-name">PRELIMS</h3>
                  <span className="pp-tf-overs-tag">6 OVERS</span>
                </div>
                <div className="pp-tf-card-body">
                  <div className="pp-tf-ball-wrap">
                    <svg viewBox="0 0 54 54" className="w-12 h-12" fill="none">
                      <defs>
                        <radialGradient id="tfBallRed1" cx="35%" cy="30%" r="68%">
                          <stop offset="0%" stopColor="#ff4d4d" />
                          <stop offset="35%" stopColor="#dc2626" />
                          <stop offset="80%" stopColor="#991b1b" />
                          <stop offset="100%" stopColor="#5c0606" />
                        </radialGradient>
                        <filter id="tfBallGlow1" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.35" />
                        </filter>
                      </defs>
                      <g filter="url(#tfBallGlow1)">
                        <circle cx="27" cy="27" r="21" fill="url(#tfBallRed1)" />
                        <path d="M 18 10 C 25 19 25 35 18 44" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
                        <path d="M 27 7 C 35 18 35 36 27 47" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" opacity="0.95" />
                        <path d="M 36 10 C 43 19 43 35 36 44" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
                        <line x1="20" y1="16" x2="24" y2="18" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                        <line x1="22" y1="23" x2="26" y2="24" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                        <line x1="22" y1="31" x2="26" y2="30" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                        <line x1="20" y1="38" x2="24" y2="36" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                        <ellipse cx="21" cy="18" rx="7" ry="4" transform="rotate(-30 21 18)" fill="#ffffff" opacity="0.45" />
                      </g>
                    </svg>
                    <div className="pp-tf-ball-line"></div>
                  </div>
                </div>
              </div>
              <p className="pp-tf-desc-text">
                Exciting league matches to find the best teams
              </p>
            </div>

            {/* CONNECTING ARROW 1 */}
            <div className="pp-tf-connector">
              <svg viewBox="0 0 36 36" className="pp-tf-double-arrow" fill="none" stroke="#d71920" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="8 6 20 18 8 30" />
                <polyline points="18 6 30 18 18 30" />
              </svg>
            </div>

            {/* STAGE 2: SEMI FINAL */}
            <div className="pp-tf-stage-col">
              <div className="pp-tf-card-unit">
                <div className="pp-tf-chevron-head">
                  <h3 className="pp-tf-stage-name">SEMI FINAL</h3>
                  <span className="pp-tf-overs-tag">8 OVERS</span>
                </div>
                <div className="pp-tf-card-body">
                  <div className="pp-tf-ball-wrap">
                    <svg viewBox="0 0 54 54" className="w-12 h-12" fill="none">
                      <defs>
                        <radialGradient id="tfBallRed2" cx="35%" cy="30%" r="68%">
                          <stop offset="0%" stopColor="#ff4d4d" />
                          <stop offset="35%" stopColor="#dc2626" />
                          <stop offset="80%" stopColor="#991b1b" />
                          <stop offset="100%" stopColor="#5c0606" />
                        </radialGradient>
                        <filter id="tfBallGlow2" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.35" />
                        </filter>
                      </defs>
                      <g filter="url(#tfBallGlow2)">
                        <circle cx="27" cy="27" r="21" fill="url(#tfBallRed2)" />
                        <path d="M 18 10 C 25 19 25 35 18 44" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
                        <path d="M 27 7 C 35 18 35 36 27 47" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" opacity="0.95" />
                        <path d="M 36 10 C 43 19 43 35 36 44" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
                        <line x1="20" y1="16" x2="24" y2="18" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                        <line x1="22" y1="23" x2="26" y2="24" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                        <line x1="22" y1="31" x2="26" y2="30" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                        <line x1="20" y1="38" x2="24" y2="36" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                        <ellipse cx="21" cy="18" rx="7" ry="4" transform="rotate(-30 21 18)" fill="#ffffff" opacity="0.45" />
                      </g>
                    </svg>
                    <div className="pp-tf-ball-line"></div>
                  </div>
                </div>
              </div>
              <p className="pp-tf-desc-text">
                Top teams advance to semi finals
              </p>
            </div>

            {/* CONNECTING ARROW 2 */}
            <div className="pp-tf-connector">
              <svg viewBox="0 0 36 36" className="pp-tf-double-arrow" fill="none" stroke="#d71920" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="8 6 20 18 8 30" />
                <polyline points="18 6 30 18 18 30" />
              </svg>
            </div>

            {/* STAGE 3: FINAL */}
            <div className="pp-tf-stage-col">
              <div className="pp-tf-card-unit">
                <div className="pp-tf-chevron-head">
                  <h3 className="pp-tf-stage-name">FINAL</h3>
                  <span className="pp-tf-overs-tag">10 OVERS</span>
                </div>
                <div className="pp-tf-card-body">
                  <div className="pp-tf-ball-wrap">
                    <svg viewBox="0 0 54 54" className="w-12 h-12" fill="none">
                      <defs>
                        <radialGradient id="tfBallRed3" cx="35%" cy="30%" r="68%">
                          <stop offset="0%" stopColor="#ff4d4d" />
                          <stop offset="35%" stopColor="#dc2626" />
                          <stop offset="80%" stopColor="#991b1b" />
                          <stop offset="100%" stopColor="#5c0606" />
                        </radialGradient>
                        <filter id="tfBallGlow3" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.35" />
                        </filter>
                      </defs>
                      <g filter="url(#tfBallGlow3)">
                        <circle cx="27" cy="27" r="21" fill="url(#tfBallRed3)" />
                        <path d="M 18 10 C 25 19 25 35 18 44" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
                        <path d="M 27 7 C 35 18 35 36 27 47" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" opacity="0.95" />
                        <path d="M 36 10 C 43 19 43 35 36 44" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" opacity="0.9" />
                        <line x1="20" y1="16" x2="24" y2="18" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                        <line x1="22" y1="23" x2="26" y2="24" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                        <line x1="22" y1="31" x2="26" y2="30" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                        <line x1="20" y1="38" x2="24" y2="36" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                        <ellipse cx="21" cy="18" rx="7" ry="4" transform="rotate(-30 21 18)" fill="#ffffff" opacity="0.45" />
                      </g>
                    </svg>
                    <div className="pp-tf-ball-line"></div>
                  </div>
                </div>
              </div>
              <p className="pp-tf-desc-text">
                The ultimate battle for the RPL 5.0 trophy
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
