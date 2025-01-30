// src/Header.jsx
import './App.css'
import { Link } from 'react-router-dom'
import HomePage from './HomePage'
import EventsPage from './EventsPage'
import CreateEventPage from './CreateEventPage'
import AboutUsPage from './AboutUsPage'

export default function Header() {
  const increaseFontSize = () => {
    const root = document.documentElement;
    const currentSize = parseFloat(getComputedStyle(root).fontSize);
    root.style.fontSize = (currentSize + 2) + 'px';
  };

  const decreaseFontSize = () => {
    const root = document.documentElement;
    const currentSize = parseFloat(getComputedStyle(root).fontSize);
    root.style.fontSize = (currentSize - 2) + 'px';
  };

  return (
    <header className='header'>
      <h1>Camden Event Planner</h1> 
      <div className="zoom-controls" role="group" aria-label="Text zoom controls">
        <button onClick={decreaseFontSize} aria-label="Decrease text size">
          <span aria-hidden="true">🔍-</span>
        </button>
        <button onClick={increaseFontSize} aria-label="Increase text size">
          <span aria-hidden="true">🔍+</span>
        </button>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/create-event">Create Event</Link></li>
          <li><Link to="/login" id="login-button">Log In</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}