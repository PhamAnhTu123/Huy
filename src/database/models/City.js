import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const DiscountSchema = new mongoose.Schema(
  {
    DiscountName: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

DiscountSchema.loadClass(BaseModel);

export default mongoose.model('discounts', DiscountSchema);
