
// This is a utility script to create a test admin user
// Run this in your browser console while on the admin registration page

async function createTestAdmin() {
  try {
    const response = await fetch('/api/auth/create-admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'admin',
        email: 'admin@example.com',
        password: 'admin123',
        adminSecretKey: 'adminkey' // Make sure this matches your ADMIN_SECRET_KEY in .env
      }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to create admin account');
    }
    
    console.log('Admin account created successfully!', data);
    
    // You can automatically log in with the created account if you want
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    // Redirect to admin dashboard
    window.location.href = '/admin/events';
  } catch (error) {
    console.error('Error creating admin account:', error);
  }
}

// Uncomment and run this line to create the admin account
// createTestAdmin();
