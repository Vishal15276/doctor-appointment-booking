import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import doctorModel from '../models/doctorModel.js';

// API for adding doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;

        // Checking for all required fields
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.status(400).json({ success: false, message: "Missing details" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        // Validate password length
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Please enter a strong password" });
        }

        // Ensure the address is valid JSON
        let parsedAddress;
        try {
            parsedAddress = typeof address === "string" ? JSON.parse(address) : address;
        } catch (error) {
            return res.status(400).json({ success: false, message: "Invalid address format" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create doctor object
        const doctorData = {
            name,
            email,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: parsedAddress,
            date: Date.now()
        };

        // Save doctor to database
        const newDoctor = await doctorModel.create(doctorData);
        await newDoctor.save();

        res.status(201).json({ success: true, message: "Doctor Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// API for admin login
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password match the admin credentials
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

            return res.json({ success: true, token });
        } else {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export { addDoctor, loginAdmin };
