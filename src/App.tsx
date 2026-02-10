import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import './styles/index.css';
import Sidebar from './components/Sidebar';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

import { useState, useEffect } from 'react';

function AppContent() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className={`app ${theme}-theme`}>
      <button
        className="mobile-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle Navigation"
      >
        {isSidebarOpen ? '×' : '☰'}
      </button>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <main className={`main-content ${isSidebarOpen ? 'overlay-active' : ''}`} onClick={closeSidebar}>

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