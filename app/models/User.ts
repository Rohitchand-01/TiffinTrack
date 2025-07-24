// Updated /models/User.ts (with additional fields)
import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: { 
    type: String, 
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: String,
  address: String,
  pincode: String,
  role: { 
    type: String, 
    default: 'student' 
  }
}, { timestamps: true });

export default models.User || model('User', UserSchema);