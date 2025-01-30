import './App.css'
import LoginPage from './LoginPage'
import { Link, Routes, Route } from 'react-router-dom'
import Header from './Header'
import CreateAccountPage from './CreateAccountPage'
import HomePage from './HomePage'
import EventsPage from './EventsPage'
import CreateEventPage from './CreateEventPage'
import AboutUsPage from './AboutUsPage'
import ContactPage from './ContactPage'
import Footer from './Footer'

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}