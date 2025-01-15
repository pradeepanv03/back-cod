const express = require('express');
const AdminLogin = require('./AdminModel'); 
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);  
    }
});
const upload = multer({ storage });  

// Admin registration route (POST /register)
router.post('/admin/register', async (req, res) => {
    const { name, password, role, userType } = req.body;

    try {
        // Check if an admin with the same name already exists (if needed)
        const existingAdmin = await AdminLogin.findOne({ name });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin with this name already exists.' });
        }

        // Create a new admin entry
        const newAdmin = new AdminLogin({
            name,
            password,
            role,
            userType
        });

        // Save the new admin to the database
        await newAdmin.save();

        // Respond with success
        return res.status(200).json({ message: 'Admin Added', data: newAdmin });

    } catch (error) {
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const errorMessages = Object.values(error.errors).map(e => e.message);
            return res.status(400).json({ message: 'Validation error', errors: errorMessages });
        }
        // Handle duplicate entries (e.g., unique name if needed)
        else if (error.code === 11000) {
            return res.status(400).json({ message: 'Duplicate admin name' });
        }
        // Catch all other errors
        else {
            return res.status(500).json({ message: 'Something went wrong', error: error.message });
        }
    }
});



// Admin login route (POST /login)
router.post('/adminlogin', async (req, res) => {
    const { name, password } = req.body;

    try {
        // Find the admin by name
        const admin = await AdminLogin.findOne({ name,password });
        if (!admin) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare password (you would hash the password in a real app)
        if (admin.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Respond with a success message and token (implement JWT or session handling here)
        return res.status(200).json({ message: 'Login successful', data: admin });

    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});



// Admin update route (PUT /admin/update/:name)
router.put('/admin/update', async (req, res) => {
    const { name } = req.params;  // Admin's name from the URL parameter
    const { password, role, userType } = req.body;  // Updated data from the body

    try {
        // Find the admin by name
        const admin = await AdminLogin.findOneAndUpdate({ name });
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        // Update admin details
        if (password) admin.password = password;
        if (role) admin.role = role;
        if (userType) admin.userType = userType;

        // Save the updated admin
        await admin.save();

        // Respond with success
        return res.status(200).json({ message: 'Admin updated successfully', data: admin });

    } catch (error) {
        // Handle validation or other errors
        return res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});



//Delete Admin Using Name

router.delete('/admin/delete/:name', async (req, res) => {
    const { name } = req.params; // Get the 'name' from the URL parameter

    try {
        // Delete admin by name
        const deletedAdmin = await AdminLogin.findOneAndDelete({ name });

        // If no admin is found, return a 404 error
        if (!deletedAdmin) {
            return res.status(404).json({ message: "Admin not found." });
        }

        // Return success message with deleted admin details
        return res.status(200).json({ message: "Admin deleted successfully", data: deletedAdmin });

    } catch (error) {
        // Handle any errors that occur during deletion
        return res.status(500).json({ message: "Error deleting Admin", error: error.message });
    }
});




module.exports = router;
