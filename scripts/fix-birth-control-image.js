const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://Vercel-Admin-arizonawomenspecialists:XE4cY6lJrlDU1Bnk@arizonawomenspecialists.s09rljo.mongodb.net/?retryWrites=true&w=majority";

async function fixImage() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const Post = mongoose.model('Post', new mongoose.Schema({}, { strict: false }));
    
    await Post.updateOne(
      { slug: 'understanding-birth-control-types' },
      { $set: { image: '/images/birthcontrol.jpg' } }
    );
    
    console.log('✅ Updated birth control image');
    
    const posts = await Post.find().sort({ createdAt: -1 });
    console.log('\nAll blog posts:');
    posts.forEach(p => {
      console.log(`${p.title} -> ${p.image}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

fixImage();
