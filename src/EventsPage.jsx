
import './App.css'

export default function EventsPage() {
  const events = [
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
  ];

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
              <button className="event-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
