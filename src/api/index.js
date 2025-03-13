// Base API URL (using relative URLs)
const API_URL = '';

// Helper function for API requests
async function apiRequest(url, method = 'GET', data = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Add auth token if available
  const token = localStorage.getItem('token');
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  // Add body for non-GET requests
  if (data && method !== 'GET') {
    options.body = JSON.stringify(data);
  }

  console.log(`Sending ${method} request to:`, url);
  const response = await fetch(url, options);

  // For debugging
  if (!response.ok) {
    const responseText = await response.text();
    console.log("Response text:", responseText);

    let errorMessage;
    try {
      const errorData = JSON.parse(responseText);
      errorMessage = errorData.message || 'Something went wrong';
    } catch (e) {
      errorMessage = responseText || 'Something went wrong';
    }

    throw new Error(errorMessage);
  }

  // Check if response is empty
  const responseText = await response.text();
  if (!responseText) {
    throw new Error('Empty response received from server');
  }

  // Parse JSON response
  return JSON.parse(responseText);
}

// Auth functions
export async function login(username, password) {
  console.log("Attempting login with:", username);
  return apiRequest('/auth/login', 'POST', { username, password });
}

export async function adminLogin(username, password) {
  console.log("Attempting admin login with:", username);
  return apiRequest('/auth/admin/login', 'POST', { username, password });
}

export async function register(username, email, password) {
  return apiRequest('/auth/register', 'POST', { username, email, password });
}

export async function createAdmin(username, email, password, adminSecretKey) {
  return apiRequest('/auth/create-admin', 'POST', { 
    username, 
    email, 
    password, 
    adminSecretKey 
  });
}

// Events functions
export async function getEvents() {
  return apiRequest('/events');
}

export async function getEvent(id) {
  return apiRequest(`/events/${id}`);
}

export async function createEvent(eventData) {
  return apiRequest('/events', 'POST', eventData);
}

export async function updateEvent(id, eventData) {
  return apiRequest(`/events/${id}`, 'PUT', eventData);
}

export async function deleteEvent(id) {
  return apiRequest(`/events/${id}`, 'DELETE');
}