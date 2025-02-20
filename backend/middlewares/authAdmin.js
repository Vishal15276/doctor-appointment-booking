import jwt from "jsonwebtoken";

// Admin Authentication Middleware
const authAdmin = async (req, res, next) => {
    try {
        // Get token from 'atoken' header
        const token = req.headers.atoken;

        if (!token) {
            return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
        }

        // Verify the token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // Ensure the decoded email matches the admin email
        if (!decodedToken.email || decodedToken.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ success: false, message: "Forbidden: Not Authorized" });
        }

        next(); // Proceed if authentication is successful
    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: "Invalid or Expired Token" });
    }
};

export default authAdmin;
