import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PrizePool from './components/PrizePool';
import TournamentDetails from './components/TournamentDetails';
import AboutSection from './components/AboutSection';
import TournamentFormat from './components/TournamentFormat';
import RulesSection from './components/RulesSection';
import GallerySection from './components/GallerySection';
import RegistrationSection from './components/RegistrationSection';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* HEADER & TOPBAR */}
      <Header onOpenRegister={() => setIsModalOpen(true)} />

      <main>
        {/* HERO SECTION */}
        <Hero onOpenRegister={() => setIsModalOpen(true)} />

        {/* PRIZES SECTION */}
        <PrizePool />

        {/* TOURNAMENT DETAILS */}
        <TournamentDetails />

        {/* ABOUT */}
        <AboutSection />

        {/* SCHEDULE / FORMAT */}
        <TournamentFormat />

        {/* RULES */}
        <RulesSection />

        {/* GALLERY */}
        <GallerySection />

        {/* REGISTRATION CTA & FORM */}
        <RegistrationSection onOpenRegister={() => setIsModalOpen(true)} />

        {/* FOOTER */}
        <Footer />
      </main>

      {/* QUICK REGISTRATION MODAL */}
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
