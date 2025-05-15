// Test API connectivity
import fetch from 'node-fetch';

const testApiConnection = async () => {
  try {
    console.log('Testing API endpoints...');

    // Test register endpoint
    console.log('\n1. Testing user registration');
    const registerResponse = await fetch('http://0.0.0.0:5000/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'testuser',
        email: 'test@example.com',
        password: 'test123'
      })
    });
    console.log('Register response:', await registerResponse.json());

    // Test login endpoint
    console.log('\n2. Testing user login');
    const loginResponse = await fetch('http://0.0.0.0:5000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'testuser',
        password: 'test123'
      })
    });
    const loginData = await loginResponse.json();
    console.log('Login response:', loginData);

    // Test create event endpoint
    if (loginData.token) {
      console.log('\n3. Testing event creation');
      const eventResponse = await fetch('http://0.0.0.0:5000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginData.token}`
        },
        body: JSON.stringify({
          title: 'Test Event',
          date: new Date(),
          location: 'Test Location',
          description: 'Test Description'
        })
      });
      console.log('Create event response:', await eventResponse.json());
    }

    // Test get events endpoint
    console.log('\n4. Testing get events');
    const eventsResponse = await fetch('http://0.0.0.0:5000/events');
    console.log('Get events response:', await eventsResponse.json());

  } catch (error) {
    console.error('Test failed:', error);
  }
};

testApiConnection();