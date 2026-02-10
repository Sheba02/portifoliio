import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import './styles/index.css';
import Sidebar from './components/Sidebar';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

import { useState } from 'react';

function AppContent() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="app">
      <button
        className="mobile-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle Navigation"
      >
        {isSidebarOpen ? '×' : '☰'}
      </button>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <main className="main-content" onClick={closeSidebar}>
        <nav className="content-nav">
          <Link to="/about" className={currentPath === '/about' || currentPath === '/' ? 'active' : ''}>
            About
          </Link>
          <Link to="/skills" className={currentPath === '/skills' ? 'active' : ''}>
            Skills
          </Link>
          <Link to="/contact" className={currentPath === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </nav>
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;