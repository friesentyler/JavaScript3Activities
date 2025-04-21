import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Users from './components/Users';
import Listings from './components/Listings';
import Chats from './components/Chats';
import Register from './components/Register';
import Login from './components/Login';
import Ratings from './components/Ratings';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [title] = useState("Vinyl Trader");
  const version = 1.0;

  const displayVersion = (e) => {
    e.preventDefault();
    alert(`Version: ${version}`);
  };

  return (
    <Router>
      <div className="text-center py-4 bg-light">
        <h1>Welcome to {title}</h1>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Vinyl Record Marketplace</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/ratings">Ratings</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/listings">Listings</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/chats">Chats</Link></li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={displayVersion}>About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<div>Welcome to the Vinyl Record Marketplace</div>} />
          <Route path="/users" element={<Users />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ratings" element={<Ratings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

