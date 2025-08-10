import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    organizationId: {
      type: Schema.Types.ObjectId,
      ref: 'Organization', // Refers to your Organization model
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model('Post', PostSchema);
