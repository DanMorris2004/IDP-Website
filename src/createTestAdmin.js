
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

// Create a standalone user schema for this script
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

// Pre-save middleware to hash password
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password (for testing login)
UserSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

async function createAdmin() {
  try {
    // Connect to MongoDB with proper error handling
    console.log('Connecting to MongoDB:', process.env.MONGO_URI);
    
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s
    });
    
    console.log('Connected to MongoDB');
    
    // Register the model
    const User = mongoose.model('User', UserSchema, 'users');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ username: 'admin' });
    
    if (existingAdmin) {
      console.log('Admin user already exists!');
      // Update password if needed
      existingAdmin.password = 'admin123';
      await existingAdmin.save();
      console.log('Admin password updated');
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
    }
    
    console.log('You can login with:');
    console.log('Username: admin');
    console.log('Password: admin123');
    
    // Test admin login
    const adminForLogin = await User.findOne({ username: 'admin' });
    if (adminForLogin) {
      const isValidPassword = await adminForLogin.comparePassword('admin123');
      console.log('Password verification test:', isValidPassword ? 'PASSED' : 'FAILED');
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

createAdmin();
