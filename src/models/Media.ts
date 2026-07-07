import mongoose, { Schema, model, models } from 'mongoose';

const MediaSchema = new Schema(
  {
    url: { type: String, required: true },
    public_id: { type: String, required: true },
    alt: { type: String },
    caption: { type: String },
    usedInPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
  },
  { timestamps: true }
);

const Media = models?.Media || model('Media', MediaSchema);

export default Media;
