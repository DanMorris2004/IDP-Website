
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import EventsPage from './EventsPage';
import AboutUsPage from './AboutUsPage';
import ContactPage from './ContactPage';
import LoginPage from './LoginPage';
import CreateAccountPage from './CreateAccountPage';
import CreateEventPage from './CreateEventPage';
import AdminLoginPage from './AdminLoginPage';
import AdminRegistrationPage from './AdminRegistrationPage';
import AdminEventsPage from './AdminEventsPage';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/create-event" element={<CreateEventPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/register" element={<AdminRegistrationPage />} />
            <Route path="/admin/events" element={<AdminEventsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
