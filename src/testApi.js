
// Test function for API connectivity
// Run this in the browser console to test the API

function testApiConnection() {
  fetch('/api/test')
    .then(response => response.json())
    .then(data => {
      console.log('API test successful:', data);
    })
    .catch(error => {
      console.error('API test failed:', error);
    });
}

function createTestAdmin() {
  const adminData = {
    username: 'admin',
    email: 'admin@example.com',
    password: 'admin123',
    adminSecretKey: 'adminkey'
  };

  fetch('/api/auth/create-admin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(adminData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Server returned ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log('Admin created successfully:', data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      console.log('Credentials stored in localStorage. You can now navigate to /admin/events');
    })
    .catch(error => {
      console.error('Error creating admin:', error);
    });
}

// Export the functions so they can be called from the browser console
window.testApiConnection = testApiConnection;
window.createTestAdmin = createTestAdmin;

export { testApiConnection, createTestAdmin };
