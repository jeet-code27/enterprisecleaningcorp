import mongoose, { Schema, model, models } from 'mongoose';

const TagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

const Tag = models?.Tag || model('Tag', TagSchema);

export default Tag;
