const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://Vercel-Admin-arizonawomenspecialists:XE4cY6lJrlDU1Bnk@arizonawomenspecialists.s09rljo.mongodb.net/?retryWrites=true&w=majority";

const PostSchema = new mongoose.Schema({
  title: String,
  slug: String,
  excerpt: String,
  content: String,
  image: String,
  category: String,
  author: String,
  status: String,
  publishedAt: Date,
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

const samplePosts = [
  {
    title: "Understanding Different Types of Birth Control",
    slug: "understanding-birth-control-types",
    excerpt: "Exploring the various options available for contraception and which one might be right for your lifestyle.",
    content: "When it comes to birth control, there are many options available. From hormonal methods like pills and IUDs to barrier methods like condoms, each has its own benefits and considerations. This comprehensive guide will help you understand your options and make an informed decision with your healthcare provider.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    category: "Family Planning",
    author: "Dr. Maria Rodriguez",
    status: "published",
    publishedAt: new Date("2026-03-15")
  },
  {
    title: "What to Expect During Your First Prenatal Visit",
    slug: "first-prenatal-visit-guide",
    excerpt: "A comprehensive guide to your initial appointment and how we support your pregnancy journey.",
    content: "Your first prenatal visit is an important milestone in your pregnancy journey. During this appointment, we'll review your medical history, perform initial tests, and discuss what to expect in the coming months. We'll also answer all your questions and create a personalized care plan for you and your baby.",
    image: "https://images.unsplash.com/photo-1584362923647-481cf0653f0e?auto=format&fit=crop&q=80&w=800",
    category: "Pregnancy Care",
    author: "Dr. Sarah Johnson",
    status: "published",
    publishedAt: new Date("2026-03-10")
  },
  {
    title: "The Benefits of GLP-1 for Medical Weight Loss",
    slug: "glp1-weight-loss-benefits",
    excerpt: "How modern medications are revolutionizing weight management under medical supervision.",
    content: "GLP-1 medications like Ozempic, Wegovy, and Mounjaro have transformed medical weight loss. These medications work by regulating appetite and blood sugar levels, helping patients achieve sustainable weight loss when combined with lifestyle changes. Learn about how our medically supervised program can help you reach your goals.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    category: "Weight Loss",
    author: "Medical Director",
    status: "published",
    publishedAt: new Date("2026-03-05")
  }
];

async function createPosts() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing posts
    await Post.deleteMany({});
    console.log('Cleared existing posts');

    // Create new posts
    await Post.insertMany(samplePosts);
    console.log('✅ Created', samplePosts.length, 'sample blog posts');

    // Verify
    const posts = await Post.find();
    console.log('\nCreated posts:');
    posts.forEach(p => {
      console.log('-', p.title);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

createPosts();
