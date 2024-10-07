import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  Name: { type: String, required: true, unique : true }
});

const categoryModel = mongoose.model('Categories', categorySchema);

export default categoryModel;  
