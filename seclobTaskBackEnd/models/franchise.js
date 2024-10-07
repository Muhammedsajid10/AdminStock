import mongoose from 'mongoose';

const franchiseSchema = new mongoose.Schema({
  Name: { type: String, required: true, unique: true }
},{ timestamps: true });

const franchiseModel = mongoose.model('Franchise', franchiseSchema);

export default franchiseModel;  
