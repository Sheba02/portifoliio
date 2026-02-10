import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-close" onClick={onClose}>×</button>
      <div className="sidebar-content">
        <div className="profile-image-wrapper">
          <img src="/shb.jpg" alt="Sheba Mugisha" className="profile-image" />
        </div>
        <h1 className="sidebar-name">Sheba Mugisha</h1>
        <p className="sidebar-title">Business Computing Professional | Versatile Business-Technology Specialist</p>

        <div className="sidebar-info">
          <div className="info-item">
            <span className="info-icon">📧</span>
            <div>
              <span className="info-label">EMAIL:</span>
              <span className="info-value">shebamugisha9@gmail.com</span>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <span className="info-label">PHONE:</span>
              <span className="info-value">+250736083584</span>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <span className="info-label">LOCATION:</span>
              <span className="info-value">Kigali, Rwanda</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;