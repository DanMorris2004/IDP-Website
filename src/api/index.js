
const API_BASE = '/api';

// Events API
export const getEvents = async () => {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`${API_BASE}/events`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch events');
    }

    return await response.json();
  } catch (error) {
    console.error('Get events error:', error);
    throw error;
  }
};

export const createEvent = async (eventData) => {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`${API_BASE}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create event');
    }

    return await response.json();
  } catch (error) {
    console.error('Create event error:', error);
    throw error;
  }
};

export const deleteEvent = async (eventId) => {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`${API_BASE}/events/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to delete event');
    }

    return await response.json();
  } catch (error) {
    console.error('Delete event error:', error);
    throw error;
  }
};

// Auth API
export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

// Admin authentication
export const adminLogin = async (username, password) => {
  try {
    console.log("Attempting admin login with:", username);
    const response = await fetch(`${API_BASE}/auth/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        console.log("Response text:", await response.text());
        throw new Error('Server returned an invalid response');
      }

      throw new Error(errorData.message || 'Admin login failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Admin login error:', error);
    throw error;
  }
};

export const createAdmin = async (username, email, password, adminSecretKey) => {
  try {
    const response = await fetch(`${API_BASE}/auth/create-admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password, adminSecretKey }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Admin creation failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Admin creation error:', error);
    throw error;
  }
};
