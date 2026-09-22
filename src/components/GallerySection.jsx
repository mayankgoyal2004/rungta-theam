import React from 'react';

export default function GallerySection() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container-custom">
        
        <div className="gallery-header">
          <div>
            <span className="section-label">
              MOMENTS THAT INSPIRE
            </span>

            <h2>GALLERY</h2>
          </div>

          <a href="#gallery" className="gallery-more">
            View More →
          </a>
        </div>

        <div className="gallery-grid">
          
          <div className="gallery-item large">
            <img
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=85"
              alt="Cricket stadium"
            />
          </div>

          <div className="gallery-item">
            <img
              src="/images/ground-facility.jpg"
              alt="Rungta Cricket Grounds"
            />
          </div>

          <div className="gallery-item">
            <img
              src="/images/match-action.jpg"
              alt="Match Action Shot"
            />
          </div>

          <div className="gallery-item">
            <img
              src="/images/nets-batsman.jpg"
              alt="Cricket Nets Practice"
            />
          </div>

          <div className="gallery-item">
            <img
              src="/images/academy-coaching.jpg"
              alt="Academy Coaching"
            />
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=700&q=85"
              alt="Cricket Ground"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
