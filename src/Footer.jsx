
import { Link } from 'react-router-dom'
import './App.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="social-icon">📱</i> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="social-icon">📱</i> Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="social-icon">📱</i> Instagram
          </a>
        </div>
        <p className="copyright">© 2024 Camden Event Planner. All rights reserved.</p>
      </div>
    </footer>
  )
}
