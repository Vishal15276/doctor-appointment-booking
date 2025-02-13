import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';

// App configuration
const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB & Cloudinary
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/admin', adminRouter);

app.get('/', (req, res) => {
    res.send('API is running');
});

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
