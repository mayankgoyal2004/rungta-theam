import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function RegistrationSection({ onOpenRegister }) {
  const [showInlineForm, setShowInlineForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [regId, setRegId] = useState('');

  const [form, setForm] = useState({
    schoolName: '',
    city: '',
    coachName: '',
    coachPhone: '',
    captainName: '',
    captainPhone: '',
    jerseyColor: '',
    agreeRules: false,
    players: [
      { name: '', role: 'Batsman' },
      { name: '', role: 'Batsman' },
      { name: '', role: 'All-Rounder' },
      { name: '', role: 'All-Rounder' },
      { name: '', role: 'Wicket-Keeper' },
      { name: '', role: 'Bowler' },
      { name: '', role: 'Bowler' },
      { name: '', role: 'Bowler' },
      { name: '', role: 'All-Rounder' },
      { name: '', role: 'Batsman' },
      { name: '', role: 'Bowler' },
    ]
  });

  const handleAddPlayer = () => {
    if (form.players.length < 15) {
      setForm({
        ...form,
        players: [...form.players, { name: '', role: 'All-Rounder' }]
      });
    }
  };

  const handlePlayerChange = (idx, field, val) => {
    const updated = [...form.players];
    updated[idx][field] = val;
    setForm({ ...form, players: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = `RPL5-${Math.floor(100000 + Math.random() * 900000)}`;
    setRegId(token);
    setIsSubmitted(true);

    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch (err) {}
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `🏏 *RPL 5.0 TEAM REGISTRATION*\n` +
      `*Token ID:* ${regId}\n` +
      `*School:* ${form.schoolName}\n` +
      `*City:* ${form.city}\n` +
      `*Coach:* ${form.coachName} (${form.coachPhone})\n` +
      `*Captain:* ${form.captainName} (${form.captainPhone})\n` +
      `*Total Players:* ${form.players.length}\n` +
      `We have submitted our team entry for Rungta Premier League 5.0.`
    );
    window.open(`https://wa.me/919229111555?text=${text}`, '_blank');
  };

  return (
    <>
      {/* =========================================================
           REGISTRATION CTA (EXACT HTML TEMPLATE)
      ========================================================= */}
      <section className="registration-section" id="register">
        <div className="registration-overlay"></div>

        <div className="container-custom registration-inner">
          <div>
            <span>DON'T JUST WATCH.</span>
            <strong>BE A PART OF IT.</strong>
          </div>

          <div className="registration-center">
            <h2>
              READY TO <span>PLAY?</span>
            </h2>

            <p>
              Register your team now and be a part of Rungta Premier League 5.0. Total prizes ₹83,000+ & Scholarships.
            </p>

            <button
              onClick={() => setShowInlineForm(!showInlineForm)}
              className="btn btn-primary btn-large"
              style={{ cursor: 'pointer' }}
            >
              {showInlineForm ? 'Hide Form ▲' : 'Register Your Team →'}
            </button>
          </div>

          <div className="registration-ball">
            🏏
          </div>
        </div>
      </section>

      {/* =========================================================
           TEAM REGISTRATION FORM (COLLAPSIBLE / ACCORDION)
      ========================================================= */}
      {showInlineForm && (
        <section style={{ background: '#f5f8fb', padding: '60px 0', borderBottom: '1px solid #dce3ea' }}>
          <div className="container-custom" style={{ maxWidth: '850px' }}>
            
            <div style={{ background: 'white', borderRadius: '10px', padding: '35px', boxShadow: '0 10px 30px rgba(4, 24, 50, 0.08)', border: '1px solid #dce3ea' }}>
              
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ fontSize: '50px', marginBottom: '10px' }}>🎉</div>
                  <span style={{ color: 'var(--gold-dark)', fontWeight: '800', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    REGISTRATION SUCCESSFUL
                  </span>
                  <h3 style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '38px', color: 'var(--navy)', textTransform: 'uppercase', margin: '8px 0' }}>
                    YOUR TEAM IS ENROLLED IN RPL 5.0!
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '20px' }}>
                    School: <strong>{form.schoolName}</strong> ({form.city})
                  </p>

                  <div style={{ background: '#f5f8fb', padding: '15px', borderRadius: '8px', maxWidth: '320px', margin: '0 auto 25px', border: '1px solid #dce3ea' }}>
                    <small style={{ color: 'var(--muted)', fontSize: '11px', display: 'block', fontWeight: '700' }}>REGISTRATION TOKEN</small>
                    <strong style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '32px', color: 'var(--red)' }}>{regId}</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                    <button
                      onClick={handleWhatsAppSend}
                      className="btn btn-primary"
                      style={{ background: '#25D366' }}
                    >
                      Share on WhatsApp ➔
                    </button>
                    <button
                      onClick={() => { setIsSubmitted(false); setShowInlineForm(false); }}
                      className="btn btn-outline"
                      style={{ background: 'var(--navy)', color: 'white', borderColor: 'var(--navy)' }}
                    >
                      Close Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '25px' }}>
                    <span style={{ color: 'var(--red)', fontWeight: '800', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                      OFFICIAL SQUAD ENROLLMENT (ENTRY FEE: ₹500 / SQUAD)
                    </span>
                    <h3 style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '32px', color: 'var(--navy)', textTransform: 'uppercase', margin: '4px 0' }}>
                      SCHOOL TEAM REGISTRATION FORM
                    </h3>
                    <p style={{ color: 'var(--muted)', fontSize: '13px' }}>
                      Please provide accurate school, coach, and squad information. Under 18 school boys only.
                    </p>
                  </div>

                  {/* SCHOOL & COACH INFO */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--navy)', marginBottom: '5px' }}>
                        SCHOOL / INSTITUTION NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. DPS Bhilai"
                        value={form.schoolName}
                        onChange={(e) => setForm({ ...form, schoolName: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--navy)', marginBottom: '5px' }}>
                        CITY / DISTRICT *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bhilai / Durg / Raipur"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--navy)', marginBottom: '5px' }}>
                        COACH / PTI TEACHER NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={form.coachName}
                        onChange={(e) => setForm({ ...form, coachName: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--navy)', marginBottom: '5px' }}>
                        COACH PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile"
                        value={form.coachPhone}
                        onChange={(e) => setForm({ ...form, coachPhone: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--navy)', marginBottom: '5px' }}>
                        STUDENT CAPTAIN NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Captain Name"
                        value={form.captainName}
                        onChange={(e) => setForm({ ...form, captainName: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--navy)', marginBottom: '5px' }}>
                        CAPTAIN PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Captain Mobile"
                        value={form.captainPhone}
                        onChange={(e) => setForm({ ...form, captainPhone: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--navy)', marginBottom: '5px' }}>
                        TEAM UNIFORM / JERSEY COLOUR *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Royal Blue / White"
                        value={form.jerseyColor}
                        onChange={(e) => setForm({ ...form, jerseyColor: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                      />
                    </div>
                  </div>

                  {/* SQUAD PLAYERS ROSTER */}
                  <div style={{ marginTop: '25px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <strong style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '20px', color: 'var(--navy)', textTransform: 'uppercase' }}>
                        SQUAD PLAYERS ({form.players.length} / 15)
                      </strong>

                      {form.players.length < 15 && (
                        <button
                          type="button"
                          onClick={handleAddPlayer}
                          style={{
                            background: '#eef4fa',
                            color: 'var(--navy)',
                            border: '1px solid #cbd5e1',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontWeight: '700',
                            cursor: 'pointer'
                          }}
                        >
                          + Add Substitute Player
                        </button>
                      )}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                      {form.players.map((p, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: '6px', alignItems: 'center', background: '#f8fafc', padding: '6px 10px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                          <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--red)', width: '20px' }}>
                            {idx + 1}.
                          </span>
                          <input
                            type="text"
                            placeholder={idx === 0 ? 'Captain Name' : `Player ${idx + 1}`}
                            value={p.name}
                            onChange={(e) => handlePlayerChange(idx, 'name', e.target.value)}
                            style={{ flex: 1, padding: '6px 8px', fontSize: '12px', border: '1px solid #cbd5e1', borderRadius: '4px' }}
                          />
                          <select
                            value={p.role}
                            onChange={(e) => handlePlayerChange(idx, 'role', e.target.value)}
                            style={{ fontSize: '11px', padding: '6px 4px', border: '1px solid #cbd5e1', borderRadius: '4px', background: 'white' }}
                          >
                            <option value="Batsman">Bat</option>
                            <option value="Bowler">Bowl</option>
                            <option value="All-Rounder">All-R</option>
                            <option value="Wicket-Keeper">WK</option>
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* DECLARATION & SUBMIT */}
                  <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
                    <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '12px', color: '#555', cursor: 'pointer', marginBottom: '20px' }}>
                      <input
                        type="checkbox"
                        required
                        checked={form.agreeRules}
                        onChange={(e) => setForm({ ...form, agreeRules: e.target.checked })}
                        style={{ marginTop: '3px' }}
                      />
                      <span>
                        I declare that all players are enrolled school students under 18 years of age and agree to produce original <strong>School ID</strong> and <strong>Aadhaar Cards</strong> during verification at RSR RCET Ground.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="btn btn-primary btn-large"
                      style={{ width: '100%', fontSize: '16px' }}
                    >
                      Submit Team Registration (₹500 Entry) ➔
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        </section>
      )}
    </>
  );
}
