import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
                <Link className="navbar-brand" to="/">Portfolio</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="container">
                <ThemeSwitcher />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;

