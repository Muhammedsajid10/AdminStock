import jwt from 'jsonwebtoken';
import adminModel from '../models/adminSchema.js';

const login = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        // Validate input
        if (!Email || !Password) {
            return res.status(400).json({ error: "Email and Password are required" });
        }

        // Check if admin exists
        const foundAdmin = await adminModel.findOne({ Email });

        if (!foundAdmin) {
            return res.status(401).json({ error: "Authentication failed. Admin not found." });
        }

        // Generate token
        const token = jwt.sign({ Email: foundAdmin.Email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Token:', token);

        // Set token in response header and return success message
        res.header('Authorization', token).json({ message: "Login successful", data: token });

    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default login;
