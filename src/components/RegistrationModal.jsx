import React, { useState } from 'react';
import { X, Trophy, Sparkles, CheckCircle, Download, Share2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TOURNAMENT_INFO } from '../data/tournamentData';

export default function RegistrationModal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [regId, setRegId] = useState('');
  const [form, setForm] = useState({
    schoolName: '',
    city: '',
    coachName: '',
    coachPhone: '',
    captainName: '',
    captainPhone: '',
    totalPlayers: 15,
    jerseyColor: '',
  });

  if (!isOpen) return null;

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    const id = `RPL5-${Math.floor(100000 + Math.random() * 900000)}`;
    setRegId(id);
    setIsSubmitted(true);

    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch (err) {}
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `🏏 *RPL 5.0 TEAM REGISTRATION*\n` +
      `*Reg ID:* ${regId}\n` +
      `*School:* ${form.schoolName}\n` +
      `*City:* ${form.city}\n` +
      `*Coach:* ${form.coachName} (${form.coachPhone})\n` +
      `*Captain:* ${form.captainName} (${form.captainPhone})\n` +
      `Please confirm our school slot for Rungta Premier League 5.0.`
    );
    window.open(`https://wa.me/${TOURNAMENT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-slate-900 border-2 border-amber-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 text-white my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center space-y-5 py-4">
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500 text-green-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                REGISTRATION SUBMITTED
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
                YOUR TEAM IS REGISTERED!
              </h3>
              <p className="text-xs text-slate-300">
                School: <strong>{form.schoolName}</strong>
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 max-w-xs mx-auto">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Token ID</span>
              <div className="font-heading font-black text-2xl text-amber-400">{regId}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleWhatsAppSend}
                className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-sm uppercase tracking-wider transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-400 text-[10px] font-bold tracking-widest uppercase">
                <Trophy className="w-3 h-3 text-amber-400" /> Fast Registration
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
                REGISTER TEAM (RPL 5.0)
              </h3>
              <p className="text-xs text-slate-300">
                Fee: <strong className="text-amber-400">₹500 / Team</strong> (Under-18 School Cricket Championship)
              </p>
            </div>

            <form onSubmit={handleQuickSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-300 uppercase">School / Team Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. St. Xavier's Senior Secondary School"
                  value={form.schoolName}
                  onChange={(e) => setForm({ ...form, schoolName: e.target.value })}
                  className="w-full bg-slate-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300 uppercase">City / District *</label>
                  <input
                    type="text"
                    required
                    placeholder="Bhilai / Durg / Raipur"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300 uppercase">Uniform / Jersey Colour *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Navy Blue"
                    value={form.jerseyColor}
                    onChange={(e) => setForm({ ...form, jerseyColor: e.target.value })}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300 uppercase">Coach Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Coach / PTI Name"
                    value={form.coachName}
                    onChange={(e) => setForm({ ...form, coachName: e.target.value })}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300 uppercase">Coach Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile"
                    value={form.coachPhone}
                    onChange={(e) => setForm({ ...form, coachPhone: e.target.value })}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300 uppercase">Captain Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Captain Full Name"
                    value={form.captainName}
                    onChange={(e) => setForm({ ...form, captainName: e.target.value })}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300 uppercase">Captain Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Captain Contact"
                    value={form.captainPhone}
                    onChange={(e) => setForm({ ...form, captainPhone: e.target.value })}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 text-white font-heading font-black text-base uppercase tracking-wider shadow-lg shadow-red-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                Submit Team Entry (₹500)
              </button>

              <div className="text-center">
                <a
                  href="#register"
                  onClick={onClose}
                  className="text-[11px] text-amber-400 hover:underline"
                >
                  Need to input all 15 player names? Go to Full Roster Form ➔
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
