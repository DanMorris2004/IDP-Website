
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from './api/index.js';

export default function AdminLoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      console.log('Attempting login with:', formData.username);
      const { token, user } = await adminLogin(formData.username, formData.password);
      
      // Save token and user data to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      // Redirect to admin events page
      navigate('/admin/events');
    } catch (error) {
      console.error('Login error:', error);
      setError(typeof error === 'string' ? error : 
               error.message || 'Login failed. Check server connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="admin-login">
      <h2>Admin Login</h2>
      {error && <p className="error-message">{error}</p>}
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Log In as Admin'}
        </button>
      </form>
    </section>
  );
}
