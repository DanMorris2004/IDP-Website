
import './App.css'
import { useState, useEffect } from 'react';

export default function EventsPage() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Summer Music Festival",
      date: "2024-07-15",
      image: "https://picsum.photos/id/240/300/200",
      description: "Annual music festival featuring local artists"
    },
    {
      id: 2,
      title: "Food & Wine Tasting",
      date: "2024-08-20",
      image: "https://picsum.photos/id/241/300/200",
      description: "Experience Camden's finest cuisines"
    },
    {
      id: 3,
      title: "Art Exhibition",
      date: "2024-09-10",
      image: "https://picsum.photos/id/242/300/200",
      description: "Showcasing local artists' work"
    }
  ]);

  const [rsvpEvents, setRsvpEvents] = useState([]);

  useEffect(() => {
    const savedRsvps = localStorage.getItem('rsvpEvents');
    if (savedRsvps) {
      setRsvpEvents(JSON.parse(savedRsvps));
    }
  }, []);

  const handleRSVP = (eventId) => {
    const updatedRsvps = rsvpEvents.includes(eventId)
      ? rsvpEvents.filter(id => id !== eventId)
      : [...rsvpEvents, eventId];
    
    setRsvpEvents(updatedRsvps);
    localStorage.setItem('rsvpEvents', JSON.stringify(updatedRsvps));
  };

  return (
    <section id="events">
      <h2>Upcoming Events</h2>
      <div className='event-grid'>
        {events.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p>{event.description}</p>
              <button 
                className={`event-button ${rsvpEvents.includes(event.id) ? 'rsvp-active' : ''}`}
                onClick={() => handleRSVP(event.id)}
              >
                {rsvpEvents.includes(event.id) ? 'Cancel RSVP' : 'RSVP'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
