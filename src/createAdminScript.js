
// Create Admin Account Script
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ username: 'admin' });
    
    if (existingAdmin) {
      console.log('Admin user already exists!');
      console.log('You can login with:');
      console.log('Username: admin');
      console.log('Password: admin123');
    } else {
      // Create admin user
      const adminUser = new User({
        username: 'admin',
        email: 'admin@example.com',
        password: 'admin123',
        isAdmin: true
      });
      
      await adminUser.save();
      console.log('Admin user created successfully!');
      console.log('You can login with:');
      console.log('Username: admin');
      console.log('Password: admin123');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  }
};

createAdmin();
