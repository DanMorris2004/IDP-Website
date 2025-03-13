
// src/AdminLoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from './api';
import './App.css';

const AdminLoginPage = () => {
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
      const { token, user } = await adminLogin(formData.username, formData.password);
      
      if (!user.isAdmin) {
        setError('You must be an admin to access this page');
        setIsLoading(false);
        return;
      }
      
      // Save token and user data to localStorage
      localStorage.setItem('adminToken', token);
      localStorage.setItem('admin', JSON.stringify(user));
      
      // Redirect to admin events page
      navigate('/admin/events');
    } catch (error) {
      console.error('Admin login submission error:', error);
      setError(error.message || 'Failed to login as admin. Please check your credentials.');
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
          {isLoading ? 'Logging in...' : 'Admin Login'}
        </button>
        <div style={{marginTop: '1rem', textAlign: 'center'}}>
          <p>Default admin credentials:</p>
          <p>Username: admin</p>
          <p>Password: admin123</p>
        </div>
      </form>
    </section>
  );
};

export default AdminLoginPage;
