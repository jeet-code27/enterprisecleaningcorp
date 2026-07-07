import mongoose, { Schema, model, models } from 'mongoose';

const AuthorSchema = new Schema(
  {
    name: { type: String, required: true },
    bio: { type: String },
    avatar: { type: String },
    socialLinks: {
      twitter: { type: String },
      linkedin: { type: String },
    }
  },
  { timestamps: true }
);

const Author = models?.Author || model('Author', AuthorSchema);

export default Author;
