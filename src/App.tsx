import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import './styles/index.css';
import Sidebar from './components/Sidebar';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

import { useState, useEffect } from 'react';

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const navClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '');

  return (
    <div className={`app ${theme}-theme`}>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      {isSidebarOpen && (
        <button className="sidebar-backdrop" onClick={closeSidebar} aria-label="Close navigation" />
      )}

      <main className="main-content">
        <nav className="content-nav">
          <button
            className="mobile-toggle"
            onClick={toggleSidebar}
            aria-label="Toggle Navigation"
          >
            ☰
          </button>

          <NavLink to="/" end className={navClass}>About</NavLink>
          <NavLink to="/skills" className={navClass}>Skills</NavLink>
          <NavLink to="/projects" className={navClass}>Projects</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>

        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
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
