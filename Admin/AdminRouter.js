const express = require('express');
const router = express.Router();
const AdminLogin = require('../Admin/AdminModel')



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



// Create a new user
router.post('/admin-create', async (req, res) => {
    const newUser = new AdminLogin({
        name: req.body.name,
        address: req.body.address,
        office: req.body.office,
        jobType: req.body.jobType,
        targetWeek: req.body.targetWeek,
        targetMonth: req.body.targetMonth,
        mobile: req.body.mobile,
        aadhaarNumber: req.body.aadhaarNumber,
        userName: req.body.userName,
        password: req.body.password,
        role: req.body.role,
        userType: req.body.userType
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all users
router.get('/admin-all', async (req, res) => {
    try {
        const users = await AdminLogin.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// // Get a single user by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const user = await AdminLogin.findById(req.params.id);
//         if (user == null) {
//             return res.status(404).json({ message: 'Cannot find user' });
//         }
//         res.json(user);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// Update a user by ID
router.patch('/admin-update/:id', async (req, res) => {
    try {
        const user = await AdminLogin.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' });
        }

        if (req.body.name != null) {
            user.name = req.body.name;
        }
        if (req.body.address != null) {
            user.address = req.body.address;
        }
        if (req.body.office != null) {
            user.office = req.body.office;
        }
        if (req.body.jobType != null) {
            user.jobType = req.body.jobType;
        }
        if (req.body.targetWeek != null) {
            user.targetWeek = req.body.targetWeek;
        }
        if (req.body.targetMonth != null) {
            user.targetMonth = req.body.targetMonth;
        }
        if (req.body.mobile != null) {
            user.mobile = req.body.mobile;
        }
        if (req.body.aadhaarNumber != null) {
            user.aadhaarNumber = req.body.aadhaarNumber;
        }
        if (req.body.userName != null) {
            user.userName = req.body.userName;
        }
        if (req.body.password != null) {
            user.password = req.body.password;
        }
        if (req.body.role != null) {
            user.role = req.body.role;
        }
        if (req.body.userType != null) {
            user.userType = req.body.userType;
        }

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.delete('/admin-delete/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        console.log(`Attempting to delete user with ID: ${userId}`);
        
        const user = await AdminLogin.findById(userId);
        if (user == null) {
            console.log('User not found');
            return res.status(404).json({ message: 'Cannot find user' });
        }

        // Use findByIdAndDelete() instead of remove()
        await AdminLogin.findByIdAndDelete(userId);

        res.json({ message: 'Deleted user' });
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;












// const express = require('express');
// const AdminLogin = require('./AdminModel'); // Adjust the path if needed
// const router = express.Router();
// // const multer = require('multer');

// // // Set up multer for file uploads
// // const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         cb(null, 'uploads/');
// //     },
// //     filename: (req, file, cb) => {
// //         cb(null, file.originalname);
// //     }
// // });
// // const upload = multer({ storage });

// // Admin registration route (POST /register)
// router.post('/admin/register', async (req, res) => {
//     const {
//         name,
//         address,
//         office,
//         jobType,
//         targetWeek,
//         targetMonth,
//         mobile,
//         aadhaarNumber,
//         userName,
//         password,
//         role,
//         userType
//     } = req.body;

//     try {
//         // Check if an admin with the same username already exists
//         const existingAdmin = await AdminLogin.findOne({ userName });
//         if (existingAdmin) {
//             return res.status(400).json({ message: 'Admin with this username already exists.' });
//         }

//         // Create a new admin entry
//         const newAdmin = new AdminLogin({
//             name,
//             address,
//             office,
//             jobType,
//             targetWeek,
//             targetMonth,
//             mobile,
//             aadhaarNumber,
//             userName,
//             password,
//             role,
//             userType
//         });

//         // Save the new admin to the database
//         await newAdmin.save();

//         // Respond with success
//         return res.status(200).json({ message: 'Admin Added', data: newAdmin });

//     } catch (error) {
//         // Handle validation errors
//         if (error.name === 'ValidationError') {
//             const errorMessages = Object.values(error.errors).map(e => e.message);
//             return res.status(400).json({ message: 'Validation error', errors: errorMessages });
//         }
//         // Handle duplicate entries
//         else if (error.code === 11000) {
//             return res.status(400).json({ message: 'Duplicate admin username' });
//         }
//         // Catch all other errors
//         else {
//             return res.status(500).json({ message: 'Something went wrong', error: error.message });
//         }
//     }
// });

// // Admin update route (PUT /admin/update/:name)
// router.put('/admin/update/:name', async (req, res) => {
//     const { name } = req.params;
//     const {
//         address,
//         office,
//         jobType,
//         targetWeek,
//         targetMonth,
//         mobile,
//         aadhaarNumber,
//         password,
//         role,
//         userType
//     } = req.body;

//     try {
//         // Find and update the admin by name
//         const admin = await AdminLogin.findOne({ name });
//         if (!admin) {
//             return res.status(404).json({ message: 'Admin not found' });
//         }

//         // Update fields if provided
//         if (password) admin.password = password;
//         if (role) admin.role = role;
//         if (userType) admin.userType = userType;
//         if (address) admin.address = address;
//         if (office) admin.office = office;
//         if (jobType) admin.jobType = jobType;
//         if (targetWeek || targetWeek === 0) admin.targetWeek = targetWeek;
//         if (targetMonth) admin.targetMonth = targetMonth;
//         if (mobile) admin.mobile = mobile;
//         if (aadhaarNumber) admin.aadhaarNumber = aadhaarNumber;

//         // Save the updated admin
//         await admin.save();

//         // Respond with success
//         return res.status(200).json({ message: 'Admin updated successfully', data: admin });

//     } catch (error) {
//         // Handle validation or other errors
//         return res.status(500).json({ message: 'Something went wrong', error: error.message });
//     }
// });



// // API to delete an admin
// router.delete('/admin/delete', async (req, res) => {
//     try {
//       const { adminName } = req.body;
//       const admin = await AdminLogin.findOneAndDelete({ name: adminName });
//       if (!admin) {
//         return res.status(404).send({ message: 'Admin not found' });
//       }
//       res.send({ message: 'Admin deleted successfully' });
//     } catch (err) {
//       res.status(400).send({ message: 'Error deleting admin', error: err.message });
//     }
//   });
  
//   // API to get all admins
//   router.get('/admin/listall', async (req, res) => {
//     try {
//       const admins = await AdminLogin.find();
//       res.send(admins);
//     } catch (err) {
//       res.status(500).send({ message: 'Error fetching admins', error: err.message });
//     }
//   });


// module.exports = router;
