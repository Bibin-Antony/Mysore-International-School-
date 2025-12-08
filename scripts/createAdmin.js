const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

// Admin Schema
const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['admin', 'superadmin'], default: 'admin' },
  isActive: { type: Boolean, default: true },
  lastLogin: { type: Date }
}, { timestamps: true });

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/school-admin');
    console.log('✅ Connected to MongoDB');

    const adminData = {
      email: 'admin@mysore.com',
      password: 'Mysore@123',
      name: 'Mysore Admin',
      role: 'superadmin'
    };

    const existingAdmin = await Admin.findOne({ email: adminData.email });
    
    if (existingAdmin) {
      console.log('❌ Admin already exists with this email!');
      await mongoose.connection.close();
      process.exit(1);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminData.password, salt);

    const admin = await Admin.create({
      ...adminData,
      password: hashedPassword
    });

    console.log('✅ Admin created successfully!');
    console.log('📧 Email:', admin.email);
    console.log('👤 Name:', admin.name);
    console.log('🔑 Role:', admin.role);
    console.log('\n🎉 You can now login with:');
    console.log('   Email: admin@mysore.com');
    console.log('   Password: Mysore@123');

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

createAdmin();
