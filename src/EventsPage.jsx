// src/EventsPage.jsx
import './App.css'

export default function EventsPage() {
  return (
    <section id="events">
      <h2>Our Events</h2>
      <div className='event-grid'>
        <img src='https://picsum.photos/id/240/300/200' alt='Event 1'/>
        <img src='https://picsum.photos/id/241/300/200' alt='Event 2'/>
        <img src='https://picsum.photos/id/242/300/200' alt='Event 3'/>
      </div>
    </section>
  )
}