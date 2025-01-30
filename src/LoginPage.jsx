
// src/LoginPage.jsx
import './App.css'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <section id="login">
      <h2>Log In</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Log In</button>
        <p style={{marginTop: '1rem', textAlign: 'center'}}>
          Don't have an account? <Link to="/create-account">Create Account</Link>
        </p>
      </form>
    </section>
  )
}
