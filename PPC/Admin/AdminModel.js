const mongoose = require('mongoose');

// User schema with additional fields
const AdminLogin = mongoose.Schema({
    name: {
        type: String,
        required: true, // Ensure name is provided
        trim: true, // Trim spaces around name
    },
    password: {
        type: String,
        required: true, // Ensure password is provided
        minlength: 6, // Password must be at least 6 characters long
    },
    role: {
        type: String,
        required: true, // Ensure role is selected
        enum: ['manager', 'admin', 'accountant'], // Define valid roles
    },
    userType: {
        type: String,
        required: true, 
        enum: ['all', 'PUC', 'TUC'],
    }
});

module.exports = mongoose.model('AdminLogin', AdminLogin);






















// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   postedFrom: { type: String, required: true },
//   createdDate: { type: Date, default: Date.now },
//   lastLoginDate: { type: Date, default: null },
//   code: { type: String, required: true, unique: true },
//   mobileNumber: { type: String, required: true },
//   mode: { type: String, required: true },
//   version: { type: String, required: true },
//   verifiedOTPBy: { type: String, default: null },
//   staffName: { type: String, required: true },
//   remarks: { type: String, default: '' },
//   reportDate: { type: Date, default: null },
//   deletedDate: { type: Date, default: null },
//   bannedDate: { type: Date, default: null },
//   action: { type: String, default: 'None' },
//   status: { type: String, default: 'Active' }
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;
