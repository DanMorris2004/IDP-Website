// src/Header.jsx
import './App.css'
import { Link } from 'react-router-dom'
import HomePage from './HomePage'
import EventsPage from './EventsPage'
import CreateEventPage from './CreateEventPage'
import AboutUsPage from './AboutUsPage'

export default function Header() {
  return (
    <header className='header'>
      <h1>Camden Event Planner</h1> 
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/create-event">Create Event</Link></li>
          <li><Link to="/login" id="login-button">Log In</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>
    </header>
  )
}