// src/CreateAccountPage.jsx
import './App.css'
import { Link } from 'react-router-dom'
export default function CreateAccountPage() {
  return (
    <>
      <section id="create-account">
        <h2>Create Account</h2>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Create Account</button>
          <Link to="/login">Log In</Link>
        </form>
      </section>
    </>
  )
}