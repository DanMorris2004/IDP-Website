// src/LoginPage.jsx
import './App.css'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function LoginPage() {
  return (
    <>
      <Header />
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
          <Link to="/create-account">Create Account</Link>
        </form>
      </section>
    </>
  )
}