import './App.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login - just navigate to events page
    navigate('/events');
  };

  return (
    <section id="login">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Log In</button>
        <p style={{marginTop: '1rem', textAlign: 'center'}}>
          Don't have an account? <Link to="/create-account">Create Account</Link>
        </p>
      </form>
    </section>
  );
}