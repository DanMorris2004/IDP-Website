
// Base API URL
const API_URL = '';

// Admin Auth
export const adminLogin = async (username, password) => {
  try {
    console.log('Sending login request to:', `${API_URL}/auth/login`);
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    
    const text = await response.text();
    console.log('Response text:', text);
    
    if (!text) {
      throw new Error('Empty response received from server');
    }
    
    const data = JSON.parse(text);
    
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    
    if (!data.user.isAdmin) {
      throw new Error('Admin access required');
    }
    
    return data;
  } catch (error) {
    console.error('Admin login error:', error);
    throw error;
  }
};

export const adminRegister = async (adminData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...adminData,
      isAdmin: true
    }),
  });
  
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || 'Registration failed');
  }
  
  return data;
};

// Events
export const getEvents = async () => {
  const response = await fetch(`${API_URL}/events`);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to fetch events');
  }
  
  return response.json();
};

export const createEvent = async (eventData, token) => {
  const response = await fetch(`${API_URL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(eventData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create event');
  }
  
  return response.json();
};

export const updateEvent = async (eventId, eventData, token) => {
  const response = await fetch(`${API_URL}/events/${eventId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(eventData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to update event');
  }
  
  return response.json();
};

export const deleteEvent = async (eventId, token) => {
  const response = await fetch(`${API_URL}/events/${eventId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to delete event');
  }
  
  return response.json();
};

// User Authentication
export const login = async (username, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || 'Login failed');
  }
  
  return data;
};

export const register = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || 'Registration failed');
  }
  
  return data;
};
