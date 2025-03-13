
// Test API connectivity
import fetch from 'node-fetch';

const testApiConnection = async () => {
  try {
    console.log('Testing API connection...');
    
    // Test the server connection with more detailed logging
    console.log('1. Testing basic server connection');
    const serverUrl = 'http://0.0.0.0:3000/api/test';
    console.log(`   Sending request to: ${serverUrl}`);
    
    try {
      const testResponse = await fetch(serverUrl);
      console.log(`   Response status: ${testResponse.status}`);
      
      const responseText = await testResponse.text();
      console.log(`   Response body: ${responseText}`);
      
      if (responseText) {
        try {
          const testData = JSON.parse(responseText);
          console.log('   Parsed JSON response:', testData);
        } catch (jsonError) {
          console.error('   Failed to parse JSON:', jsonError.message);
        }
      } else {
        console.error('   Empty response received');
      }
    } catch (serverError) {
      console.error('   Server connection error:', serverError.message);
    }
    
    // Test the auth endpoint
    console.log('\n2. Testing auth endpoint');
    const authUrl = 'http://0.0.0.0:3000/auth/login';
    console.log(`   Sending request to: ${authUrl}`);
    
    try {
      const loginResponse = await fetch(authUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: 'admin', 
          password: 'admin123' 
        }),
      });
      
      console.log(`   Login status: ${loginResponse.status}`);
      
      const loginResponseText = await loginResponse.text();
      console.log(`   Response body: ${loginResponseText || '(empty)'}`);
      
      if (loginResponseText) {
        try {
          const loginData = JSON.parse(loginResponseText);
          console.log('   Parsed JSON response:', loginData);
        } catch (jsonError) {
          console.error('   Failed to parse JSON:', jsonError.message);
        }
      } else {
        console.error('   Empty response received from login endpoint');
      }
    } catch (loginError) {
      console.error('   Login request error:', loginError.message);
    }
    
    console.log('\nAPI testing completed');
  } catch (error) {
    console.error('Overall test failed:', error.message);
  }
};

testApiConnection();
