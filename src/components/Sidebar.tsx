import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-close" onClick={onClose} aria-label="Close navigation">×</button>
      <div className="sidebar-content">
        <img src="/shb.jpg" alt="Sheba Mugisha" className="profile-image" />
        <h1 className="sidebar-name">Sheba Mugisha</h1>
        <p className="sidebar-title">Business Computing Professional | Versatile Business-Technology Specialist</p>

        <div className="sidebar-info">
          <div className="info-item">
            <span className="info-icon">📧</span>
            <div className="info-text">
              <span className="info-label">EMAIL</span>
              <a className="info-value" href="mailto:shebamugisha9@gmail.com">shebamugisha9@gmail.com</a>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">📞</span>
            <div className="info-text">
              <span className="info-label">PHONE</span>
              <a className="info-value" href="tel:+256708331489">+256 708 331 489</a>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div className="info-text">
              <span className="info-label">LOCATION</span>
              <span className="info-value">Kampala, Uganda</span>
            </div>
          </div>
        </div>

        <div className="sidebar-social">
          <a href="https://www.linkedin.com/in/sheba-mugisha-aa798b2b0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Sheba02" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://x.com/sheba_mugisha" target="_blank" rel="noopener noreferrer">X</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
