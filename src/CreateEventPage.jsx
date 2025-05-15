
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: '',
    status: 'pending'
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const isAdmin = user.isAdmin;
      
      // For demo purposes, just storing in localStorage
      const events = JSON.parse(localStorage.getItem('events') || '[]');
      const newEvent = {
        ...formData,
        id: Date.now(),
        status: isAdmin ? 'approved' : 'pending',
        createdBy: user.username || 'anonymous'
      };
      
      events.push(newEvent);
      localStorage.setItem('events', JSON.stringify(events));
      
      navigate(isAdmin ? '/admin/events' : '/events');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="create-event">
      <h2>Create an Event</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="event-form">
        <div>
          <label htmlFor="title">Event Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="date">Event Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="time">Event Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating Event...' : 'Create Event'}
        </button>
      </form>
    </section>
  );
}
