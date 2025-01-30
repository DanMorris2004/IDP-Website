
import './App.css'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const featuredEvents = [
    {
      title: "Camden Rock Festival",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
      date: "July 15-16, 2024"
    },
    {
      title: "Street Food Market",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
      date: "August 5, 2024"
    },
    {
      title: "Art Walk Camden",
      image: "https://images.unsplash.com/photo-1561839561-b13979c7f3fa",
      date: "September 1, 2024"
    }
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Create Unforgettable Events in Camden</h1>
        <p>Your premier event planning partner in London's most vibrant borough</p>
        <Link to="/create-event" className="cta-button">Start Planning Your Event</Link>
      </section>

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🎵</span>
            <h3>Iconic Venues</h3>
            <p>Access to Camden's most prestigious and unique event spaces</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎨</span>
            <h3>Local Expertise</h3>
            <p>Deep connections with local artists, vendors, and suppliers</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎉</span>
            <h3>Full Service</h3>
            <p>From concept to execution, we handle every detail</p>
          </div>
        </div>
      </section>

      <section className="featured-events">
        <h2>Upcoming Featured Events</h2>
        <div className="featured-events-grid">
          {featuredEvents.map((event, index) => (
            <div key={index} className="featured-event-card">
              <img src={event.image} alt={event.title} />
              <div className="event-overlay">
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <Link to="/events" className="event-link">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"The team made our music festival a huge success. Their knowledge of Camden's scene is unmatched!"</p>
            <cite>- Sarah Johnson, Festival Organizer</cite>
          </div>
          <div className="testimonial-card">
            <p>"Perfect venue suggestions and flawless execution for our corporate event. Highly recommended!"</p>
            <cite>- Mark Thompson, Tech Startup CEO</cite>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <h2>Ready to Create Your Event?</h2>
        <p>Let's bring your vision to life in Camden</p>
        <Link to="/create-event" className="cta-button">Get Started Now</Link>
      </section>
    </div>
  )
}
