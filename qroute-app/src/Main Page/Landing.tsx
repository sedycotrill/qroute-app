import React from 'react';
import './Landing.css';
import qcMapImg from '/src/assets/qcmap.jpg';

interface LandingProps {
  onLogout?: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onLogout }) => {
  return (
    <div className="landing-container">
      {/* LEFT SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <h1 className="logo">LOGO</h1>
          
          <nav className="nav-menu">
            <button className="nav-item">
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9"/>
                <polyline points="12 7 12 12 15 15"/>
              </svg>
              <span>Recents</span>
            </button>

            <button className="nav-item">
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              <span>Saved</span>
            </button>

            <button className="nav-item">
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
              <span className="multiline-text">Your<br />Contribution</span>
            </button>

            <button className="nav-item">
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>Community</span>
            </button>
          </nav>
        </div>

        <div className="sidebar-bottom">
          <button className="logout-btn" onClick={onLogout}>
            {/* ITO ANG IDINAGDAG NA ICON SA LOGOUT BUTTON */}
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            <span>Log out</span>
          </button>
        </div>
      </aside> {/* <--- ITO ANG NAKALIMUTANG CLOSING TAG NG ASIDE ELEMENT */}

      {/* MAIN MAP AREA */}
      <main className="map-wrapper">
        {/* Floating Header Controls */}
        <div className="map-header-controls">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search your location here..." 
              className="search-input"
            />
          </div>

          <div className="filter-buttons">
            <button className="filter-chip">bus</button>
            <button className="filter-chip">jeep</button>
            <button className="filter-chip">train</button>
          </div>

          <button className="profile-btn" aria-label="Profile">
            <svg viewBox="0 0 24 24" className="profile-icon" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="10" r="3"/>
              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
            </svg>
          </button>
        </div>

        {/* Map Background Image */}
        <div className="map-image-container">
          <img src={qcMapImg} alt="Quezon City Map" className="map-image" />
        </div>
      </main>
    </div>
  );
};

export default Landing;