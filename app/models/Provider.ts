// Updated /models/Provider.ts (with additional fields)
import mongoose, { Schema, models } from 'mongoose';

const ProviderSchema = new Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
    ownerName: {
      type: String,
      required: true,
    },
    name: { // This can be an alias for ownerName
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    licenseNumber: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Provider = models.Provider || mongoose.model('Provider', ProviderSchema);

export default Provider;
