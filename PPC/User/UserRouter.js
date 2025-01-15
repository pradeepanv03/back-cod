const express = require('express');
const admin = require('firebase-admin');
const UserLogin = require('./UserModel'); 
// const { getAuth } = require('firebase-admin/auth');


const router = express.Router();

const serviceAccount = require('../../config/serviceAccountKey.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


// const admin = require('firebase-admin');
// admin.initializeApp();

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};


// router.post('/user/register', async (req, res) => {
//   const { phone } = req.body;

//   if (!phone) {
//     return res.status(400).json({ message: "Phone number is required." });
//   }

//   try {
//     let existingUser = await UserLogin.findOne({ phone });

//     if (existingUser) {
//       existingUser.loginDate = new Date();
//       existingUser.otpStatus = 'pending';  

//       const otp = generateOtp();
//       await sendOtpToPhone(phone, otp); // Send OTP to the phone number

//       existingUser.otp = otp; // Set new OTP
//       await existingUser.save(); // Save changes

//       return res.status(200).json({
//         message: 'User already exists, new OTP sent.',
//         data: existingUser,
//       });
//     } else {
//       // If the phone number doesn't exist, create a new user entry
//       const otp = generateOtp(); // Generate OTP

//       const newUser = new UserLogin({
//         phone,
//         otp,
//         loginDate: new Date(),
//         otpStatus: 'pending', // Set OTP status as 'pending'
//       });

//       await newUser.save(); // Save the new user

//       await sendOtpToPhone(phone, otp); // Send OTP to the phone number

//       return res.status(200).json({
//         message: 'User registered successfully, OTP sent to your phone.',
//         data: newUser,
//       });
//     }
//   } catch (error) {
//     // Handle specific duplicate key error for unique phone or otp fields
//     if (error.code === 11000) {
//       return res.status(400).json({
//         message: 'Duplicate entry error, phone number may already be registered.',
//         error: error.message,
//       });
//     }
//     // Handle general errors
//     return res.status(500).json({ message: 'Something went wrong', error: error.message || error });
//   }
// });




// Helper function to combine country code and phone number
const formatPhoneNumber = (phone, countryCode) => {
  if (phone.startsWith('+')) {
    return phone; // Phone already has the country code
  }
  return `${countryCode}${phone}`; // Combine country code with phone number
};



// Register user with phone and country code
router.post('/user/register', async (req, res) => {
  const { phone, countryCode = '+91',mode='web' } = req.body;

  try {
    // Check if user already exists in the database
    let existingUser = await UserLogin.findOne({ phone });

    if (existingUser) {
      // If user exists, update their login date and OTP status
      existingUser.loginDate = new Date();
      existingUser.otpStatus = 'pending';
      existingUser.loginMode = mode; 
      existingUser.version='';
      existingUser.staffName='';
      existingUser.remarks='';
      existingUser.bannedDate='';
      

      // Generate OTP and send it to the phone with country code
      const otp = generateOtp();
      await sendOtpToPhone(formatPhoneNumber(phone, existingUser.countryCode), otp); // Send OTP to full phone number

      // Update OTP for the user
      existingUser.otp = otp;
      await existingUser.save();

      return res.status(200).json({
        message: 'User already exists, new OTP sent.',
        data: existingUser,
      });
    } else {
      // If user does not exist, create a new user
      const otp = generateOtp();

      const newUser = new UserLogin({
        phone,
        countryCode,
        otp,
        loginMode: mode,
        loginDate: new Date(),
        otpStatus: 'pending',
        version: '',
        staffName:'',
        remarks: '',
        bannedDate:'',
      });

      await newUser.save();

      // Send OTP to the full phone number (country code + phone)
      await sendOtpToPhone(formatPhoneNumber(phone, countryCode), otp);

      return res.status(200).json({
        message: 'User registered successfully, OTP sent to your phone.',
        data: newUser,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong', error: error.message || error });
  }
});

 
//otp verification
router.post('/user/verify-otp', async (req, res) => {
  const { phone, otp } = req.body;

  try {
    const user = await UserLogin.findOne({ phone });

    if (!user) {
      return res.status(404).json({ message: "Phone number not registered" });
    }

    // Check if OTP matches
    if (user.otp === otp) {
      user.otpStatus = 'verified';  
      await user.updateOne({ $unset: { otp: 1 }, $set: { otpStatus: 'verified' } });

      const newOtp = generateOtp(); 
      await sendOtpToPhone(phone, newOtp);  
      await user.updateOne({ $set: { otp: newOtp } }); 

      return res.status(200).json({ message: "OTP verified successfully!" });
    } else {
      return res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ message: "Something went wrong", error: error.message || error });
  }
});





//get one data
router.get('/user/data/:phone', async (req, res) => {
  const { phone } = req.params; 

  try {
    const user = await UserLogin.findOne({ phone });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User data fetched successfully", data: user });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong", error: error.message });
  }
});



//delete one data
router.delete('/user/delete/:phone', async (req, res) => {
  const { phone } = req.params; 

  try {
    const result = await UserLogin.findOneAndDelete({ phone });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ message: "Something went wrong", error: error.message || error });
  }
});



//get all datas
router.get('/user/all', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await UserLogin.find();

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json({ message: "Users fetched successfully", data: users });
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ message: "Something went wrong", error: error.message || error });
  }
});



// //report date 
// router.post('/user/report', async (req, res) => {
//   const { phone, issueDetails } = req.body;

//   try {
//     const user = await UserLogin.findOne({ phone });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Save the report date (when the report was made)
//     user.reportDate = new Date(); // Current date and time

//     // Optionally, you can store details about the issue being reported
//     user.issueDetails = issueDetails;

//     await user.save();

//     return res.status(200).json({ message: 'Issue reported successfully', data: user });
//   } catch (error) {
//     return res.status(500).json({ message: 'Something went wrong', error: error.message });
//   }
// });


router.post('/user/report', async (req, res) => {
  const { phone, issueDetails } = req.body; // Expect phone and issueDetails in the request body

  try {
    const user = await UserLogin.findOne({ phone });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Save the report date (the date when the report was made)
    user.reportDate = new Date(); // Current date and time

    // Save the issue details (the details of the report)
    user.issueDetails = issueDetails; // Save the reported issue

    await user.save();

    return res.status(200).json({ message: 'Issue reported successfully', data: user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
});




// //deleted Date
// router.post('/user/deleteDate', async (req, res) => {
//   const { phone, issueDetails } = req.body;

//   try {
//     const user = await UserLogin.deleteOne({ phone });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     user.deletedDate = new Date(); 

//     if (issueDetails) {
//       user.issueDetails = issueDetails;
//     }

//     user.status = 'deleted';

//     return res.status(200).json({
//       message: 'User marked as deleted successfully',
//       data: user,  // Return the updated user data
//     });
//   } catch (error) {
//     console.error('Error occurred:', error);
//     return res.status(500).json({ message: 'Something went wrong', error: error.message });
//   }
// });


router.post('/user/deleteDate', async (req, res) => {
  const { phone, issueDetails } = req.body;

  try {
    const user = await UserLogin.findOne({ phone });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Set the deleted date (when the user is deleted)
    user.deletedDate = new Date(); // Current date and time

    // If issueDetails (reason) is provided, store it
    if (issueDetails) {
      user.issueDetails = issueDetails;
    }

    // Update the user's status to 'deleted'
    user.status = 'deleted';

    await user.save(); // Save the updated user

    return res.status(200).json({
      message: 'User marked as deleted successfully',
      data: user,  // Return the updated user data
    });
  } catch (error) {
    console.error('Error occurred:', error);
    return res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
});





// // ban a user
// router.post('/user/ban', async (req, res) => {
//   const { phone, reason } = req.body; // Expecting phone and reason in the body

//   try {
//     const user = await UserLogin.findOne({ phone });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Set the banned date (when the user is banned)
//     user.bannedDate = new Date(); // Current date and time
//     user.bannedReason = reason || 'No reason provided'; // If no reason is provided, default to a fallback message

//     // Update the user's status to banned
//     user.status = 'banned';

//     await user.save();

//     return res.status(200).json({ message: 'User banned successfully', data: user });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Something went wrong', error: error.message });
//   }
// });



// Ban a user
router.post('/user/ban', async (req, res) => {
  const { phone, reason } = req.body; // Expecting phone and reason in the body

  try {
    const user = await UserLogin.findOne({ phone });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Set the banned date (when the user is banned)
    user.bannedDate = new Date(); // Current date and time
    user.bannedReason = reason || 'No reason provided'; // If no reason is provided, default to a fallback message

    // Update the user's status to banned
    user.status = 'banned';

    await user.save();

    return res.status(200).json({ message: 'User banned successfully', data: user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
});



const sendOtpToPhone = async (phone, otp) => {
  
  console.log(`Sending OTP: ${otp} to phone: ${phone}`);
  return true;
};


module.exports = router;












