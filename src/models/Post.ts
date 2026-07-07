import mongoose, { Schema, model, models } from 'mongoose';

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    content: { type: String, required: true },
    excerpt: { type: String },
    featuredImage: {
      url: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    status: {
      type: String,
      enum: ['Draft', 'Published'],
      default: 'Draft',
    },
    isFeatured: { type: Boolean, default: false },
    seo: {
      metaTitle: { type: String },
      metaDescription: { type: String },
      focusKeyword: { type: String },
      canonicalUrl: { type: String },
      ogImage: { type: String },
      ogTitle: { type: String },
      ogDescription: { type: String },
      twitterCard: {
        title: { type: String },
        description: { type: String },
        image: { type: String },
      },
      noIndex: { type: Boolean, default: false },
    },
    relatedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  },
  { timestamps: true }
);

const Post = models?.Post || model('Post', PostSchema);

export default Post;
