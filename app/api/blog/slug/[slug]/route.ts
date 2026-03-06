import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Post from '@/models/Post';

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  try {
    await connectDB();
    const post = await Post.findOne({ slug: params.slug, status: 'published' });
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}
