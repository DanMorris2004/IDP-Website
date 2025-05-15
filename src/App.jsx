
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import AboutUsPage from './AboutUsPage';
import EventsPage from './EventsPage';
import ContactPage from './ContactPage';
import LoginPage from './LoginPage';
import CreateAccountPage from './CreateAccountPage';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
