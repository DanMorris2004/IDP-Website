
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function AdminEventsPage() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/admin/login');
        return;
      }
      
      const response = await fetch('/api/events', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    // Check if user is admin
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user.isAdmin) {
      navigate('/admin/login');
      return;
    }
    
    fetchEvents();
  }, [navigate]);
  
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this event?')) {
      return;
    }
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete event');
      }
      
      // Refresh events list
      fetchEvents();
    } catch (error) {
      setError(error.message);
    }
  };
  
  const handleAddEvent = () => {
    navigate('/create-event');
  };
  
  if (isLoading) {
    return <div>Loading events...</div>;
  }
  
  return (
    <section id="admin-events">
      <h2>Admin Events Management</h2>
      {error && <p className="error-message">{error}</p>}
      
      <button onClick={handleAddEvent} className="admin-button">Add New Event</button>
      
      <div className="admin-event-list">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Created By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event._id}>
                <td>{event.title}</td>
                <td>{new Date(event.date).toLocaleDateString()}</td>
                <td>{event.location}</td>
                <td>{event.createdBy?.username || 'Unknown'}</td>
                <td>
                  <button 
                    className="admin-button edit"
                    onClick={() => navigate(`/edit-event/${event._id}`)}
                  >
                    Edit
                  </button>
                  <button 
                    className="admin-button delete"
                    onClick={() => handleDelete(event._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
