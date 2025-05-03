import { model, Schema } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    description: { type: String, required: true },
    image: { type: String },
    tags: { type: [String] },
    authorImage: { type: String, required: true },
    authorName: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Blog = model<TBlog>('Blog', blogSchema);
