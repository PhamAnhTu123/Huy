import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const OrderSchema = new mongoose.Schema(
  {
    shop: {
      type: mongoose.Types.ObjectId,
      ref: 'shops',
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'users',
    },
    service: {
      type: mongoose.Types.ObjectId,
      ref: 'services',
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

OrderSchema.loadClass(BaseModel);

export default mongoose.model('orders', OrderSchema);
