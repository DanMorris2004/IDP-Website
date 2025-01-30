import './App.css'
import LoginPage from './LoginPage'
import { Link, Routes, Route } from 'react-router-dom'
import Header from './Header'
import CreateAccountPage from './CreateAccountPage'
import HomePage from './HomePage'
import EventsPage from './EventsPage'
import CreateEventPage from './CreateEventPage'
import AboutUsPage from './AboutUsPage'

export default function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </main>
  )
}