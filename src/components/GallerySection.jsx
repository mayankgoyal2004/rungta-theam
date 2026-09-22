import React from 'react';

export default function GallerySection() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=85",
      title: "Power Shot Under Lights"
    },
    {
      url: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=600&q=85",
      title: "Team Huddle & Strategy"
    },
    {
      url: "https://images.unsplash.com/photo-1589801258579-18e091f4ca26?auto=format&fit=crop&w=600&q=85",
      title: "Match Cricket Ball"
    },
    {
      url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=85",
      title: "Championship Trophy"
    },
    {
      url: "/images/match-action.jpg",
      title: "Team Lineup & Fair Play"
    },
    {
      url: "/images/ground-facility.jpg",
      title: "Rungta Stadium Facility"
    }
  ];

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container-custom">
        
        {/* GALLERY HEADER (WITHOUT VIEW MORE BUTTON) */}
        <div className="gallery-header-clean">
          <div className="gallery-accent-bar"></div>
          <h2 className="gallery-title">GALLERY</h2>
          <p className="gallery-subtitle">MOMENTS THAT INSPIRE</p>
        </div>

        {/* 6-CARD ROW GRID */}
        <div className="gallery-grid-row">
          {galleryImages.map((img, idx) => (
            <div className="gallery-card-item group" key={idx}>
              <img
                src={img.url}
                alt={img.title}
                className="gallery-card-img"
                loading="lazy"
              />
              <div className="gallery-card-hover">
                <span className="gallery-hover-text">{img.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
