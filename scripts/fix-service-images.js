const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://Vercel-Admin-arizonawomenspecialists:XE4cY6lJrlDU1Bnk@arizonawomenspecialists.s09rljo.mongodb.net/?retryWrites=true&w=majority";

const ServiceSchema = new mongoose.Schema({}, { strict: false });
const Service = mongoose.model('Service', ServiceSchema);

async function fixImages() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Update Gynecology service with proper image
    await Service.updateOne(
      { slug: 'gynecology' },
      { 
        $set: { 
          image: 'https://images.unsplash.com/photo-1559839734-2b71ce190291?auto=format&fit=crop&q=80&w=800'
        }
      }
    );
    console.log('✅ Updated Gynecology service image');

    // Update Family Planning service with proper image
    await Service.updateOne(
      { slug: 'family-planning' },
      { 
        $set: { 
          image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&q=80&w=800'
        }
      }
    );
    console.log('✅ Updated Family Planning service image');

    console.log('\n✅ All service images fixed!');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

fixImages();
