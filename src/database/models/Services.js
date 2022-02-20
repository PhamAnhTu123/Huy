import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const ServiceSchema = new mongoose.Schema(
  {
    shop: {
      type: mongoose.Types.ObjectId,
      ref: 'shops',
    },
    serviceName: {
      type: String,
    },
    serviceDescription: {
      type: String,
    },
    servicePrice: {
      type: Number,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'categories',
    },
    discount: {
      type: mongoose.Types.ObjectId,
      ref: 'discounts',
    },
    image: {
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

ServiceSchema.loadClass(BaseModel);

export default mongoose.model('services', ServiceSchema);
