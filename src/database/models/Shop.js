import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const ShopSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
    },
    shopDescription: {
      type: String,
    },
    address: {
      type: String,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'owners',
    },
    logo: {
      type: String,
    },
    idShop: {
      type: String,
    },
    passShop: {
      type: String,
    },
    rating: {
      type: Number,
      default: 5,
    },
    followers: {
      type: Number,
      default: 24,
    },
    phone: {
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

ShopSchema.loadClass(BaseModel);

export default mongoose.model('shops', ShopSchema);
