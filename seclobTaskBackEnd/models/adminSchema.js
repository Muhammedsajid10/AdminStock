import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    Name: { type: String, unique: true, required: true },
    Email: { type: String, unique: true, required: true },
    Password: { type: String, required: true },
});

const adminModel = mongoose.model("admin", adminSchema);

export default adminModel;
