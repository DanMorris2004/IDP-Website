
// Test API connectivity
import fetch from 'node-fetch';

const testApiConnection = async () => {
  try {
    console.log('Testing API connection...');
    
    // Test the server connection
    const testResponse = await fetch('http://0.0.0.0:3000/api/test');
    if (!testResponse.ok) {
      console.error('Server test failed:', testResponse.status, testResponse.statusText);
      console.log('Response:', await testResponse.text());
      return;
    }
    
    const testData = await testResponse.json();
    console.log('Server test response:', testData);
    
    // Test the login endpoint
    try {
      console.log('Testing login endpoint...');
      const loginResponse = await fetch('http://0.0.0.0:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: 'admin', 
          password: 'admin123' 
        }),
      });
      
      console.log('Login status:', loginResponse.status);
      
      if (!loginResponse.ok) {
        console.log('Login test failed with status:', loginResponse.status);
        console.log('Response:', await loginResponse.text());
      } else {
        const loginData = await loginResponse.json();
        console.log('Login test successful:', loginData);
      }
    } catch (loginError) {
      console.error('Login test error:', loginError);
    }
    
  } catch (error) {
    console.error('API test failed:', error);
  }
};

testApiConnection();
