
import './App.css'

export default function AboutUsPage() {
  const camdenHighlights = [
    {
      image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be",
      title: "Camden Market",
      description: "Home to many of our food festivals and cultural events"
    },
    {
      image: "https://images.unsplash.com/photo-1626619640460-7c083429b02b",
      title: "Camden Lock",
      description: "Popular venue for outdoor music festivals and art shows"
    },
    {
      image: "https://images.unsplash.com/photo-1595841696146-47302725ee0e",
      title: "Street Art Scene",
      description: "Perfect backdrops for cultural and artistic gatherings"
    }
  ];

  return (
    <section id="about-us">
      <h2>About Camden Events</h2>
      <div className="about-intro">
        <p>We're passionate about bringing the vibrant spirit of Camden to life through carefully curated events. Our borough is known for its rich cultural heritage, diverse community, and iconic locations that serve as perfect venues for unforgettable experiences.</p>
      </div>

      <h3>Our Event Categories</h3>
      <div className="event-categories">
        <div className="category">
          <h4>Music Festivals</h4>
          <p>From punk rock to jazz, Camden's music scene is legendary. We host regular concerts and music festivals featuring both local talents and international artists.</p>
        </div>
        <div className="category">
          <h4>Food & Culture</h4>
          <p>Experience diverse cuisines at our food festivals, market events, and cultural celebrations that showcase Camden's multicultural community.</p>
        </div>
        <div className="category">
          <h4>Art Exhibitions</h4>
          <p>Regular art shows, street art festivals, and gallery events celebrating Camden's creative spirit.</p>
        </div>
      </div>

      <h3>Iconic Locations</h3>
      <div className="camden-highlights">
        {camdenHighlights.map((highlight, index) => (
          <div key={index} className="highlight-card">
            <img src={highlight.image} alt={highlight.title} />
            <h4>{highlight.title}</h4>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
