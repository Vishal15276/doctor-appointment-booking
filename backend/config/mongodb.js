import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'prescripto', // Set the correct database name
            connectTimeoutMS: 10000, // 10s timeout
            serverSelectionTimeoutMS: 10000, // Prevents long waiting times
        });

        console.log("✅ Database Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
};  

export default connectDB;
