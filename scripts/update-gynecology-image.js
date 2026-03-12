const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://Vercel-Admin-arizonawomenspecialists:XE4cY6lJrlDU1Bnk@arizonawomenspecialists.s09rljo.mongodb.net/?retryWrites=true&w=majority";

const ServiceSchema = new mongoose.Schema({}, { strict: false });
const Service = mongoose.model('Service', ServiceSchema);

async function updateImage() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Update Gynecology service with the ultrasound image
    const result = await Service.updateOne(
      { slug: 'gynecology' },
      { 
        $set: { 
          image: 'https://images.unsplash.com/photo-1638202947799-44f48d3d1f78?auto=format&fit=crop&q=80&w=800'
        }
      }
    );

    console.log('✅ Updated Gynecology service image');
    console.log('Modified:', result.modifiedCount);
    
    // Verify the update
    const service = await Service.findOne({ slug: 'gynecology' });
    console.log('\nUpdated service:');
    console.log('Title:', service.title);
    console.log('Image:', service.image);

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

updateImage();
