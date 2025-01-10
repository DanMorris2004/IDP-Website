import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./LoginPage";
import CreateAccountPage from "./CreateAccountPage";
import HomePage from './HomePage'
import EventsPage from './EventsPage'
import CreateEventPage from './CreateEventPage'
import AboutUsPage from './AboutUsPage'
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/create-account" element={<CreateAccountPage />} />
				<Route path="/events" element={<EventsPage />} />
				<Route path="/create-event" element={<CreateEventPage />} />
				<Route path="/about-us" element={<AboutUsPage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
