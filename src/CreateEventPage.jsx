
import './App.css'
import { useState } from 'react'

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event data:', formData);
    // Here you would typically send the data to your backend
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

        <button type="submit">Create Event</button>
      </form>
    </section>
  )
}
