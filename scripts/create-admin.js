const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGODB_URI = "mongodb+srv://Vercel-Admin-arizonawomenspecialists:XE4cY6lJrlDU1Bnk@arizonawomenspecialists.s09rljo.mongodb.net/?retryWrites=true&w=majority";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  role: { type: String, default: 'admin' },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function createAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@arizonawomenspecialists.com' });
    
    if (existingAdmin) {
      console.log('Admin user already exists!');
      console.log('Email: admin@arizonawomenspecialists.com');
      console.log('If you forgot the password, delete this user from MongoDB and run this script again.');
      process.exit(0);
    }

    // Create new admin user
    const hashedPassword = await bcrypt.hash('Admin@123', 10);
    
    const admin = await User.create({
      email: 'admin@arizonawomenspecialists.com',
      password: hashedPassword,
      name: 'Admin',
      role: 'admin'
    });

    console.log('✅ Admin user created successfully!');
    console.log('-----------------------------------');
    console.log('Email: admin@arizonawomenspecialists.com');
    console.log('Password: Admin@123');
    console.log('-----------------------------------');
    console.log('⚠️  Please change this password after first login!');
    
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
}

createAdmin();
