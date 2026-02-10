import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import './styles/index.css';
import Sidebar from './components/Sidebar';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="app">
      <Sidebar currentPath={currentPath} />
      <main className="main-content">
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