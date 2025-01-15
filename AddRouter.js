


// const express = require('express');
// const router = express.Router();
// const AddModel = require('./AddModel');

// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// // Set up multer storage configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const uploadDirectory = 'uploads/';
//         if (!fs.existsSync(uploadDirectory)) {
//             fs.mkdirSync(uploadDirectory, { recursive: true });
//         }
//         cb(null, uploadDirectory);
//     },
//     filename: (req, file, cb) => {
//         const fileExtension = path.extname(file.originalname);
//         const fileName = Date.now() + fileExtension; // Unique filename
//         cb(null, fileName);
//     },
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 50 * 1024 * 1024 }, // 50MB file size limit
//   fileFilter: (req, file, cb) => {
//       const fileTypes = /jpeg|jpg|png|gif|mp4|avi|mov/; // Allowed file types
//       const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
//       const mimetype = fileTypes.test(file.mimetype);
//       if (extname && mimetype) {
//           return cb(null, true); // Accept the file
//       } else {
//           return cb(new Error('Only image and video files (JPEG, PNG, GIF, MP4, AVI, MOV) are allowed!'), false);
//       }
//   },
// });

// router.post('/update-property', upload.fields([{ name: 'video', maxCount: 1 }, { name: 'photos', maxCount: 5 }]), async (req, res) => {
//   // Check for multer errors
//   if (req.fileValidationError) {
//       return res.status(400).json({ message: req.fileValidationError });
//   }
//   if (req.files['video'] && req.files['video'][0].size > 50 * 1024 * 1024) {
//       return res.status(400).json({ message: 'Video file size exceeds 50MB.' });
//   }

//   // Handle the incoming request
//   const { ppcId, phoneNumber, propertyMode, propertyType, ownerDetails } = req.body;

//   if (!ppcId || !phoneNumber) {
//       return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
//   }

//   try {
//       console.log('Incoming update request:', req.body);

//       const user = await AddModel.findOne({ ppcId, phoneNumber });
//       if (!user) {
//           return res.status(404).json({ message: 'User not found.' });
//       }

//       // Update property details
//       user.propertyMode = propertyMode || user.propertyMode;
//       user.propertyType = propertyType || user.propertyType;
//       user.ownerDetails = ownerDetails || user.ownerDetails;

//       // Handle video and photo updates
//       if (req.files) {
//           if (req.files['video']) {
//               user.video = req.files['video'][0].path; // Save video path
//           }

//           if (req.files['photos']) {
//               user.photos = req.files['photos'].map(file => file.path); // Save photo paths
//           }
//       }

//       // Save updated user data
//       await user.save();

//       console.log('Property details updated successfully:', user);
//       res.status(200).json({ message: 'Property details updated successfully!', user });
//   } catch (error) {
//       console.error('Error updating property details:', error);
//       res.status(500).json({ message: 'Error updating property details.', error });
//   }
// });




// // Store new user data with PPC-ID
// router.post('/store-data', async (req, res) => {
//   const { phoneNumber } = req.body;

//   if (!phoneNumber) {
//     return res.status(400).json({ message: 'Phone number is required.' });
//   }

//   try {
//     console.log('Incoming request body:', req.body);

//     // Check if the user already exists
//     const existingUser = await AddModel.findOne({ phoneNumber });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists.' });
//     }

//     // Create new user with PPC-ID
//     const count = await AddModel.countDocuments();
//     const ppcId = 1001 + count;

//     const newUser = new AddModel({ phoneNumber, ppcId });
//     await newUser.save();

//     console.log('User stored successfully:', newUser);
//     res.status(201).json({ message: 'User added successfully!', ppcId });
//   } catch (error) {
//     console.error('Error storing user details:', error);
//     res.status(500).json({ message: 'Error storing user details.', error });
//   }
// });




// // Update property details for an existing user
// router.post('/update-property', async (req, res) => {
//   const { ppcId, phoneNumber, propertyMode, propertyType, ownerDetails } = req.body;

//   if (!ppcId || !phoneNumber) {
//     return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
//   }

//   try {
//     console.log('Incoming update request:', req.body);

//     // Find the user by PPC-ID and phone number
//     const user = await AddModel.findOne({ ppcId, phoneNumber });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found.' });
//     }

//     // Update the property details
//     user.propertyMode = propertyMode || user.propertyMode;
//     user.propertyType = propertyType || user.propertyType;
//     user.ownerDetails = ownerDetails || user.ownerDetails;

//     // Save the updated user
//     await user.save();

//     console.log('Property details updated successfully:', user);
//     res.status(200).json({ message: 'Property details updated successfully!', user });
//   } catch (error) {
//     console.error('Error updating property details:', error);
//     res.status(500).json({ message: 'Error updating property details.', error });
//   }
// });


// *************************************


// // Update property details for an existing user
// router.post('/update-property', async (req, res) => {
//   const {
//     ppcId,
//     phoneNumber,
//     propertyMode,
//     propertyType,
//     ownerDetails,
//     propertyAge,
//     bankLoan,
//     negotiation,
//     length,
//     breadth,
//     totalArea,
//     ownership,
//     bedrooms,
//     kitchen,
//     kitchenType,
//     balconies,
//     floorNo,
//     areaUnit,
//     propertyApproved,
//     postedBy,
//     facing,
//     salesMode,
//     salesType,
//     description,
//     furnished,
//     lift,
//     attachedBathrooms,
//     western,
//     numberOfFloors,
//     carParking,
//     rentalPropertyAddress,
//     country,
//     state,
//     city,
//     district,
//     area,
//     streetName,
//     doorNumber,
//     nagar,
//     ownerName,
//     email,
//     bestTimeToCall,
//   } = req.body;

//   if (!ppcId || !phoneNumber) {
//     return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
//   }

//   try {
//     console.log('Incoming update request:', req.body);

//     // Find the user by PPC-ID and phone number
//     const user = await AddModel.findOne({ ppcId, phoneNumber });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found.' });
//     }

//     // Update the property details only if provided in the request
//     if (propertyMode) user.propertyMode = propertyMode;
//     if (propertyType) user.propertyType = propertyType;
//     if (ownerDetails) user.ownerDetails = ownerDetails;
//     if (propertyAge) user.propertyAge = propertyAge;
//     if (bankLoan) user.bankLoan = bankLoan;
//     if (negotiation) user.negotiation = negotiation;
//     if (length) user.length = length;
//     if (breadth) user.breadth = breadth;
//     if (totalArea) user.totalArea = totalArea;
//     if (ownership) user.ownership = ownership;
//     if (bedrooms) user.bedrooms = bedrooms;
//     if (kitchen) user.kitchen = kitchen;
//     if (kitchenType) user.kitchenType = kitchenType;
//     if (balconies) user.balconies = balconies;
//     if (floorNo) user.floorNo = floorNo;
//     if (areaUnit) user.areaUnit = areaUnit;
//     if (propertyApproved) user.propertyApproved = propertyApproved;
//     if (postedBy) user.postedBy = postedBy;
//     if (facing) user.facing = facing;
//     if (salesMode) user.salesMode = salesMode;
//     if (salesType) user.salesType = salesType;
//     if (description) user.description = description;
//     if (furnished) user.furnished = furnished;
//     if (lift) user.lift = lift;
//     if (attachedBathrooms) user.attachedBathrooms = attachedBathrooms;
//     if (western) user.western = western;
//     if (numberOfFloors) user.numberOfFloors = numberOfFloors;
//     if (carParking) user.carParking = carParking;

//     // Update new fields
//     if (rentalPropertyAddress) user.rentalPropertyAddress = rentalPropertyAddress;
//     if (country) user.country = country;
//     if (state) user.state = state;
//     if (city) user.city = city;
//     if (district) user.district = district;
//     if (area) user.area = area;
//     if (streetName) user.streetName = streetName;
//     if (doorNumber) user.doorNumber = doorNumber;
//     if (nagar) user.nagar = nagar;
//     if (ownerName) user.ownerName = ownerName;
//     if (email) user.email = email;
//     if (bestTimeToCall) user.bestTimeToCall = bestTimeToCall;

//     // Save the updated user
//     await user.save();

//     console.log('Property details updated successfully:', user);
//     res.status(200).json({ message: 'Property details updated successfully!', user });
//   } catch (error) {
//     console.error('Error updating property details:', error);
//     res.status(500).json({ message: 'Error updating property details.', error });
//   }
// });


// // Update property details for an existing user
// router.post('/update-property', async (req, res) => {
//   const {
//     ppcId,
//     phoneNumber,
//     propertyMode,
//     propertyType,
//     ownerDetails,
//     propertyAge,
//     bankLoan,
//     negotiation,
//     length,
//     breadth,
//     totalArea,
//     ownership,
//     bedrooms,
//     kitchen,
//     kitchenType,
//     balconies,
//     floorNo,
//     areaUnit,
//     propertyApproved,
//     postedBy,
//     facing,
//     salesMode,
//     salesType,
//     description,
//     furnished,
//     lift,
//     attachedBathrooms,
//     western,
//     numberOfFloors,
//     carParking,
//   } = req.body;

//   if (!ppcId || !phoneNumber) {
//     return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
//   }

//   try {
//     console.log('Incoming update request:', req.body);

//     // Find the user by PPC-ID and phone number
//     const user = await AddModel.findOne({ ppcId, phoneNumber });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found.' });
//     }

//     // Update the property details only if provided in the request
//     if (propertyMode) user.propertyMode = propertyMode;
//     if (propertyType) user.propertyType = propertyType;
//     if (ownerDetails) user.ownerDetails = ownerDetails;
//     if (propertyAge) user.propertyAge = propertyAge;
//     if (bankLoan) user.bankLoan = bankLoan;
//     if (negotiation) user.negotiation = negotiation;
//     if (length) user.length = length;
//     if (breadth) user.breadth = breadth;
//     if (totalArea) user.totalArea = totalArea;
//     if (ownership) user.ownership = ownership;
//     if (bedrooms) user.bedrooms = bedrooms;
//     if (kitchen) user.kitchen = kitchen;
//     if (kitchenType) user.kitchenType = kitchenType;
//     if (balconies) user.balconies = balconies;
//     if (floorNo) user.floorNo = floorNo;
//     if (areaUnit) user.areaUnit = areaUnit;
//     if (propertyApproved) user.propertyApproved = propertyApproved;
//     if (postedBy) user.postedBy = postedBy;
//     if (facing) user.facing = facing;
//     if (salesMode) user.salesMode = salesMode;
//     if (salesType) user.salesType = salesType;
//     if (description) user.description = description;
//     if (furnished) user.furnished = furnished;
//     if (lift) user.lift = lift;
//     if (attachedBathrooms) user.attachedBathrooms = attachedBathrooms;
//     if (western) user.western = western;
//     if (numberOfFloors) user.numberOfFloors = numberOfFloors;
//     if (carParking) user.carParking = carParking;

//     // Save the updated user
//     await user.save();

//     console.log('Property details updated successfully:', user);
//     res.status(200).json({ message: 'Property details updated successfully!', user });
//   } catch (error) {
//     console.error('Error updating property details:', error);
//     res.status(500).json({ message: 'Error updating property details.', error });
//   }
// });



// // Update property details for an existing user
// router.post('/update-property', async (req, res) => {
//   const {
//     ppcId,
//     phoneNumber,
//     propertyMode,
//     propertyType,
//     ownerDetails,
//     price,
//     balconies,
//     floorNo,
//     areaUnit,
//     propertyApproved,
//     postedBy,
//     facing,
//     salesMode,
//     salesType,
//     description,
//     furnished,
//     lift,
//     attachedBathrooms,
//     western,
//     numberOfFloors,
//     carParking,
//     rentalPropertyAddress,
//     country,
//     state,
//     city,
//     district,
//     area,
//     streetName,
//     doorNumber,
//     nagar,
//     ownerName,
//     email,
//     bestTimeToCall,
//   } = req.body;

//   if (!ppcId || !phoneNumber) {
//     return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
//   }

//   try {
//     console.log('Incoming update request:', req.body);

//     // Find the user by PPC-ID and phone number
//     const user = await AddModel.findOne({ ppcId, phoneNumber });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found.' });
//     }

//     // Update the property details only if provided in the request
//     if (propertyMode) user.propertyMode = propertyMode;
//     if (propertyType) user.propertyType = propertyType;
//     if (ownerDetails) user.ownerDetails = ownerDetails;
//     if (price) user.price = price;
//     if (balconies) user.balconies = balconies;
//     if (floorNo) user.floorNo = floorNo;
//     if (areaUnit) user.areaUnit = areaUnit;
//     if (propertyApproved) user.propertyApproved = propertyApproved;
//     if (postedBy) user.postedBy = postedBy;
//     if (facing) user.facing = facing;
//     if (salesMode) user.salesMode = salesMode;
//     if (salesType) user.salesType = salesType;
//     if (description) user.description = description;
//     if (furnished) user.furnished = furnished;
//     if (lift) user.lift = lift;
//     if (attachedBathrooms) user.attachedBathrooms = attachedBathrooms;
//     if (western) user.western = western;
//     if (numberOfFloors) user.numberOfFloors = numberOfFloors;
//     if (carParking) user.carParking = carParking;
    
//     // Address fields
//     if (rentalPropertyAddress) user.rentalPropertyAddress = rentalPropertyAddress;
//     if (country) user.country = country;
//     if (state) user.state = state;
//     if (city) user.city = city;
//     if (district) user.district = district;
//     if (area) user.area = area;
//     if (streetName) user.streetName = streetName;
//     if (doorNumber) user.doorNumber = doorNumber;
//     if (nagar) user.nagar = nagar;
//     if (ownerName) user.ownerName = ownerName;
//     if (email) user.email = email;
//     if (bestTimeToCall) user.bestTimeToCall = bestTimeToCall;

//     // Check if all required fields are filled
//     const isComplete = [
//       propertyMode, propertyType, ownerDetails, price, balconies, floorNo,
//       areaUnit, propertyApproved, postedBy, facing, salesMode, salesType,
//       description, furnished, lift, attachedBathrooms, western, numberOfFloors,
//       carParking, rentalPropertyAddress, country, state, city, district,
//       area, streetName, doorNumber, nagar, ownerName, email, bestTimeToCall
//     ].every(field => field !== undefined && field !== '');

//     // Set status based on whether all required fields are filled
//     user.status = isComplete ? 'complete' : 'incomplete';

//     // Save the updated user
//     await user.save();

//     console.log('Property details updated successfully:', user);
//     res.status(200).json({ message: 'Property details updated successfully!', user });
//   } catch (error) {
//     console.error('Error updating property details:', error);
//     res.status(500).json({ message: 'Error updating property details.', error });
//   }
// });





// ***********************************************************




//   // Fetch user data by phone number or PPC-ID
// router.get('/fetch-data', async (req, res) => {
//     const { phoneNumber, ppcId } = req.query;
  
//     if (!phoneNumber && !ppcId) {
//       return res.status(400).json({ message: 'Either phone number or PPC-ID is required.' });
//     }
  
//     try {
//       console.log('Incoming fetch request:', req.query);
  
//       // Find the user by either phoneNumber or ppcId
//       const query = {};
//       if (phoneNumber) query.phoneNumber = phoneNumber;
//       if (ppcId) query.ppcId = ppcId;
  
//       const user = await AddModel.findOne(query);
  
//       if (!user) {
//         return res.status(404).json({ message: 'User not found.' });
//       }
  
//       console.log('User data fetched successfully:', user);
//       res.status(200).json({ message: 'User data fetched successfully!', user });
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       res.status(500).json({ message: 'Error fetching user details.', error });
//     }
//   });
  






// *******************************************







const express = require('express');
const router = express.Router();
const AddModel = require('./AddModel');

const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDirectory = 'uploads/';
        if (!fs.existsSync(uploadDirectory)) {
            fs.mkdirSync(uploadDirectory, { recursive: true });
        }
        cb(null, uploadDirectory);
    },
    filename: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname);
        const fileName = Date.now() + fileExtension; // Unique filename
        cb(null, fileName);
    },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB file size limit
  fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif|mp4|avi|mov/; // Allowed file types
      const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = fileTypes.test(file.mimetype);
      if (extname && mimetype) {
          return cb(null, true); // Accept the file
      } else {
          return cb(new Error('Only image and video files (JPEG, PNG, GIF, MP4, AVI, MOV) are allowed!'), false);
      }
  },
});





router.get('/latest-ppcid', async (req, res) => {
    try {
        const latestProperty = await AddModel.findOne().sort({ ppcId: -1 }).exec();
        const latestPpcId = latestProperty ? latestProperty.ppcId : 1000; // Default to 1000 if no properties exist
        res.status(200).json({ latestPpcId });
    } catch (error) {
        console.error('Error fetching latest ppcId:', error);
        res.status(500).json({ message: 'Error fetching latest property ID' });
    }
});





// Store new user data with PPC-ID
router.post('/store-datas', async (req, res) => {
  const { phoneNumber } = req.body;

  if (!phoneNumber) {
    return res.status(400).json({ message: 'Phone number is required.' });
  }

  try {
    console.log('Incoming request body:', req.body);

    // Check if the user already exists
    const existingUser = await AddModel.findOne({ phoneNumber });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Create new user with PPC-ID
    const count = await AddModel.countDocuments();
    const ppcId = 1001 + count;

    const newUser = new AddModel({ phoneNumber, ppcId });
    await newUser.save();

    console.log('User stored successfully:', newUser);
    res.status(201).json({ message: 'User added successfully!', ppcId });
  } catch (error) {
    console.error('Error storing user details:', error);
    res.status(500).json({ message: 'Error storing user details.', error });
  }
});




// Store new user data with PPC-ID
router.post('/store-data', async (req, res) => {
    const { phoneNumber } = req.body;
  
    if (!phoneNumber) {
      return res.status(400).json({ message: 'Phone number is required.' });
    }
  
    try {
      console.log('Incoming request body:', req.body);
  
      // Count the total documents to generate a unique PPC-ID
      const count = await AddModel.countDocuments();
      const ppcId = 1001 + count;
  
      // Create new user with a new PPC-ID even if the phone number exists
      const newUser = new AddModel({ phoneNumber, ppcId });
      await newUser.save();
  
      console.log('User stored successfully:', newUser);
      res.status(201).json({ message: 'User added successfully!', ppcId });
    } catch (error) {
      console.error('Error storing user details:', error);
      res.status(500).json({ message: 'Error storing user details.', error });
    }
  });
  


router.get('/edit-property/:ppcId', async (req, res) => {
  const { ppcId } = req.params;  // ppcId from URL parameter

  try {
      // Find the property by PPC-ID
      const user = await AddModel.findOne({ ppcId });

      if (!user) {
          return res.status(404).json({ message: 'Property not found.' });
      }

      // Send the current property details to the client
      res.status(200).json({ user });
  } catch (error) {
      console.error('Error fetching property details:', error);
      res.status(500).json({ message: 'Error fetching property details.', error });
  }
});



  router.post('/update-property', upload.fields([{ name: 'video', maxCount: 1 }, { name: 'photos', maxCount: 15 }]), async (req, res) => {
    // Check for multer errors
    if (req.fileValidationError) {
        return res.status(400).json({ message: req.fileValidationError });
    }
    if (req.files['video'] && req.files['video'][0].size > 50 * 1024 * 1024) {
        return res.status(400).json({ message: 'Video file size exceeds 50MB.' });
    }

    const {
        ppcId,
        phoneNumber,
        propertyMode,
        propertyType,
        price, 
    propertyAge,
    bankLoan,
    negotiation,
    length,
    breadth,
    totalArea,
    ownership,
    bedrooms,
    kitchen,
    kitchenType,
    balconies,
    floorNo,
    areaUnit,
    propertyApproved,
    postedBy,
    facing,
    salesMode,
    salesType,
    description,
    furnished,
    lift,
    attachedBathrooms,
    western,
    numberOfFloors,
    carParking,
    rentalPropertyAddress,
    country,
    state,
    city,
    district,
    area,
    streetName,
    doorNumber,
    nagar,
    ownerName,
    email,
    bestTimeToCall
    } = req.body;




    if (!ppcId || !phoneNumber) {
        return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
    }

    try {
        console.log('Incoming update request:', req.body);

        // Find the user by PPC-ID and phone number
        const user = await AddModel.findOne({ ppcId, phoneNumber });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Update the property details only if provided in the request
        if (propertyMode) user.propertyMode = propertyMode;
        if (propertyType) user.propertyType = propertyType;
        if (price) user.price = price;
        if (propertyAge) user.propertyAge = propertyAge;
        if (bankLoan) user.bankLoan = bankLoan;
        if (negotiation) user.negotiation = negotiation;
        if (length) user.length = length;
        if (breadth) user.breadth = breadth;
        if (totalArea) user.totalArea = totalArea;
        if (ownership) user.ownership = ownership;
        if (bedrooms) user.bedrooms = bedrooms;
        if (kitchen) user.kitchen = kitchen;
        if (kitchenType) user.kitchenType = kitchenType;
        if (balconies) user.balconies = balconies;
        if (floorNo) user.floorNo = floorNo;
        if (areaUnit) user.areaUnit = areaUnit;
        if (propertyApproved) user.propertyApproved = propertyApproved;
        if (postedBy) user.postedBy = postedBy;
        if (facing) user.facing = facing;
        if (salesMode) user.salesMode = salesMode;
        if (salesType) user.salesType = salesType;
        if (description) user.description = description;
        if (furnished) user.furnished = furnished;
        if (lift) user.lift = lift;
        if (attachedBathrooms) user.attachedBathrooms = attachedBathrooms;
        if (western) user.western = western;
        if (numberOfFloors) user.numberOfFloors = numberOfFloors;
        if (carParking) user.carParking = carParking;
        
        // Address fields
        if (rentalPropertyAddress) user.rentalPropertyAddress = rentalPropertyAddress;
        if (country) user.country = country;
        if (state) user.state = state;
        if (city) user.city = city;
        if (district) user.district = district;
        if (area) user.area = area;
        if (streetName) user.streetName = streetName;
        if (doorNumber) user.doorNumber = doorNumber;
        if (nagar) user.nagar = nagar;
        if (ownerName) user.ownerName = ownerName;
        if (email) user.email = email;
        if (bestTimeToCall) user.bestTimeToCall = bestTimeToCall;

        // Handle video and photo updates
        if (req.files) {
            if (req.files['video']) {
                user.video = req.files['video'][0].path; // Save video path
            }

            if (req.files['photos']) {
                user.photos = req.files['photos'].map(file => file.path); // Save photo paths
            }
        }

        // Check if all required fields are filled
        const isComplete = [
            propertyMode, propertyType, price, propertyAge,
            bankLoan,
            negotiation,
            length,
            breadth,
            totalArea,
            ownership,
            bedrooms,
            kitchen,
            kitchenType, balconies, floorNo,
            areaUnit, propertyApproved, postedBy, facing, salesMode, salesType,
            description, furnished, lift, attachedBathrooms, western, numberOfFloors,
            carParking, rentalPropertyAddress, country, state, city, district,
            area, streetName, doorNumber, nagar, ownerName, email, bestTimeToCall,
            req.files['photos'], req.files['video'] // Ensure photos and video are present
        ].every(field => field !== undefined && field !== '' && (Array.isArray(field) ? field.length > 0 : true));

        // Set status based on whether all required fields are filled
        user.status = isComplete ? 'complete' : 'incomplete';

        // Save updated user data
        await user.save();

        console.log('Property details updated successfully:', user);
        res.status(200).json({ message: 'Property details updated successfully!', user });
    } catch (error) {
        console.error('Error updating property details:', error);
        res.status(500).json({ message: 'Error updating property details.', error });
    }
});



router.post('/add-property', upload.fields([{ name: 'video', maxCount: 1 }, { name: 'photos', maxCount: 15 }]), async (req, res) => {
    // Check for multer errors
    if (req.fileValidationError) {
        return res.status(400).json({ message: req.fileValidationError });
    }
    if (req.files['video'] && req.files['video'][0].size > 50 * 1024 * 1024) {
        return res.status(400).json({ message: 'Video file size exceeds 50MB.' });
    }

    const {
        ppcId,
        phoneNumber,
        propertyMode,
        propertyType,
        price, 
        propertyAge,
        bankLoan,
        negotiation,
        length,
        breadth,
        totalArea,
        ownership,
        bedrooms,
        kitchen,
        kitchenType,
        balconies,
        floorNo,
        areaUnit,
        propertyApproved,
        postedBy,
        facing,
        salesMode,
        salesType,
        description,
        furnished,
        lift,
        attachedBathrooms,
        western,
        numberOfFloors,
        carParking,
        rentalPropertyAddress,
        country,
        state,
        city,
        district,
        area,
        streetName,
        doorNumber,
        nagar,
        ownerName,
        email,
        bestTimeToCall
    } = req.body;

    try {
        console.log('Incoming add property request:', req.body);

        // Create new property entry
        const newProperty = new AddModel({
            ppcId,
            phoneNumber,
            propertyMode,
            propertyType,
            price,
            propertyAge,
            bankLoan,
            negotiation,
            length,
            breadth,
            totalArea,
            ownership,
            bedrooms,
            kitchen,
            kitchenType,
            balconies,
            floorNo,
            areaUnit,
            propertyApproved,
            postedBy,
            facing,
            salesMode,
            salesType,
            description,
            furnished,
            lift,
            attachedBathrooms,
            western,
            numberOfFloors,
            carParking,
            rentalPropertyAddress,
            country,
            state,
            city,
            district,
            area,
            streetName,
            doorNumber,
            nagar,
            ownerName,
            email,
            bestTimeToCall,
        });

        // Handle video and photo uploads
        if (req.files) {
            if (req.files['video']) {
                newProperty.video = req.files['video'][0].path; // Save video path
            }

            if (req.files['photos']) {
                newProperty.photos = req.files['photos'].map(file => file.path); // Save photo paths
            }
        }

        // Check if all required fields are filled
        const isComplete = [
            propertyMode, propertyType, price, propertyAge,
            bankLoan, negotiation, length, breadth, totalArea,
            ownership, bedrooms, kitchen, kitchenType, balconies,
            floorNo, areaUnit, propertyApproved, postedBy, facing,
            salesMode, salesType, description, furnished, lift,
            attachedBathrooms, western, numberOfFloors, carParking,
            rentalPropertyAddress, country, state, city, district,
            area, streetName, doorNumber, nagar, ownerName, email,
            bestTimeToCall, req.files['photos'], req.files['video']
        ].every(field => field !== undefined && field !== '' && (Array.isArray(field) ? field.length > 0 : true));

        // Set status based on completeness
        newProperty.status = isComplete ? 'complete' : 'incomplete';

        // Save the new property
        await newProperty.save();

        console.log('Property added successfully:', newProperty);
        res.status(201).json({ message: 'Property added successfully!', newProperty });
    } catch (error) {
        console.error('Error adding property:', error);
        res.status(500).json({ message: 'Error adding property.', error });
    }
});






router.get('/fetch-data', async (req, res) => {
    const { phoneNumber, ppcId } = req.query;

    // Ensure at least one parameter is provided
    if (!phoneNumber && !ppcId) {
        return res.status(400).json({ message: 'Either phone number or PPC-ID is required.' });
    }

    try {
        console.log('Incoming fetch request:', req.query);

        // Normalize phone number (remove spaces, dashes, country code, and ensure consistency)
        const normalizedPhoneNumber = phoneNumber
            ? phoneNumber.replace(/[\s-]/g, '').replace(/^(\+91|91|0)/, '').trim() // Remove country code, spaces, dashes
            : null;

        // Build query dynamically based on the provided parameters
        const query = {};
        if (normalizedPhoneNumber) query.phoneNumber = new RegExp(normalizedPhoneNumber + '$'); // Match phone number ending with the query
        if (ppcId) query.ppcId = ppcId;

        console.log('Query Object:', query);

        // Fetch user from the database
        const user = await AddModel.findOne(query);

        // Check if user exists
        if (!user) {
            console.error('User not found:', query);
            return res.status(404).json({ message: 'User not found.' });
        }

        res.status(200).json({ message: 'User data fetched successfully!', user });
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: 'Error fetching user details.', error });
    }
});





router.get('/fetch-datas', async (req, res) => {
    const { phoneNumber } = req.query;
  
    if (!phoneNumber) {
      return res.status(400).json({ message: 'Phone number is required.' });
    }
  
    try {
      // Normalize phone number (remove spaces, dashes, country code, etc.)
      const normalizedPhoneNumber = phoneNumber
        .replace(/[\s-]/g, '')
        .replace(/^(\+91|91|0)/, '') // Remove country code if any
        .trim();
  
      const query = { phoneNumber: new RegExp(normalizedPhoneNumber + '$') }; // Match ending phone number
  
      const users = await AddModel.find(query);
  
      if (!users || users.length === 0) {
        return res.status(404).json({ message: 'Users not found.' });
      }
  
      // Send the user data in the response
      res.status(200).json({ message: 'User data fetched successfully!', users });
    } catch (error) {
      console.error('Error fetching user details:', error);
      res.status(500).json({ message: 'Error fetching user details.', error });
    }
  });
  

router.get('/fetch-all-data', async (req, res) => {
    try {

        // Fetch all users from the database
        const users = await AddModel.find({});

        // Return the fetched user data
        res.status(200).json({ message: 'All user data fetched successfully!', users });
    } catch (error) {
        console.error('Error fetching all user details:', error);
        res.status(500).json({ message: 'Error fetching all user details.', error });
    }
});


router.get('/fetch-all-complete-data', async (req, res) => {
  try {
      // Fetch all users with the status 'complete' from the database
      const users = await AddModel.find({ status: 'complete' });

      // Return the fetched user data
      res.status(200).json({ message: 'All complete user data fetched successfully!', users });
  } catch (error) {
      console.error('Error fetching complete user details:', error);
      res.status(500).json({ message: 'Error fetching complete user details.', error });
  }
});




router.delete('/delete-data', async (req, res) => {
    const { phoneNumber, ppcId } = req.query;

    // Ensure at least one parameter is provided
    if (!phoneNumber && !ppcId) {
        return res.status(400).json({ message: 'Either phone number or PPC-ID is required.' });
    }

    try {
        console.log('Incoming delete request:', req.query);

        // Normalize phone number (remove spaces, dashes, country code, and ensure consistency)
        const normalizedPhoneNumber = phoneNumber
            ? phoneNumber.replace(/[\s-]/g, '').replace(/^(\+91|91|0)/, '').trim() // Remove country code, spaces, dashes
            : null;

        // Build query dynamically based on the provided parameters
        const query = {};
        if (normalizedPhoneNumber) query.phoneNumber = new RegExp(normalizedPhoneNumber + '$'); // Match phone number ending with the query
        if (ppcId) query.ppcId = ppcId;

        console.log('Query Object for deletion:', query);

        // Delete user from the database
        const deletedUser = await AddModel.findOneAndDelete(query);

        // Check if user was found and deleted
        if (!deletedUser) {
            console.error('User not found for deletion:', query);
            return res.status(404).json({ message: 'User not found.' });
        }

        console.log('User deleted successfully:', deletedUser);

        // Return success response
        res.status(200).json({ message: 'User deleted successfully!', deletedUser });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user.', error });
    }
});



// Temporary deletion
router.delete('/delete-temporary', async (req, res) => {
    const { phoneNumber, ppcId, reason } = req.query;

    // Ensure at least one parameter and reason are provided
    if (!phoneNumber && !ppcId) {
        return res.status(400).json({ message: 'Either phone number or PPC-ID is required.' });
    }

    if (!reason) {
        return res.status(400).json({ message: 'Reason for deletion is required.' });
    }

    try {
        console.log('Incoming delete request:', req.query);

        // Normalize phone number (remove spaces, dashes, country code, and ensure consistency)
        const normalizedPhoneNumber = phoneNumber
            ? phoneNumber.replace(/[\s-]/g, '').replace(/^(\+91|91|0)/, '').trim() // Remove country code, spaces, dashes
            : null;

        // Build query dynamically based on the provided parameters
        const query = {};
        if (normalizedPhoneNumber) query.phoneNumber = new RegExp(normalizedPhoneNumber + '$'); // Match phone number ending with the query
        if (ppcId) query.ppcId = ppcId;

        console.log('Query Object for deletion:', query);

        // Find the user and update the deletion reason, time, and date
        const update = {
            isDeleted: true,
            deletionReason: reason,
            deletionDate: new Date(), // Store the current date and time
        };

        const updatedUser = await AddModel.findOneAndUpdate(query, update, { new: true });

        // Check if user was found and updated
        if (!updatedUser) {
            console.error('User not found for deletion:', query);
            return res.status(404).json({ message: 'User not found.' });
        }

        console.log('User marked as deleted successfully:', updatedUser);

        // Return success response with additional details
        res.status(200).json({
            message: 'User marked as deleted successfully!',
            timestamp: new Date().toISOString(),
            reason,
            deletedUser: {
                id: updatedUser._id,
                phoneNumber: updatedUser.phoneNumber,
                ppcId: updatedUser.ppcId,
                deletionReason: updatedUser.deletionReason,
                deletionDate: updatedUser.deletionDate,
            },
        });
    } catch (error) {
        console.error('Error marking user as deleted:', error);
        res.status(500).json({ message: 'Error marking user as deleted.', error });
    }
});


// router.post('/delete-properties', async (req, res) => {
//     const { ppcId, phoneNumber } = req.body;

//     if (!ppcId || !phoneNumber) {
//         return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
//     }

//     try {
//         // Find the user by PPC-ID and phone number
//         const user = await AddModel.findOne({ ppcId, phoneNumber });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found.' });
//         }

//         // Change the status to 'delete'
//         user.status = 'delete';

//         // Save the updated user data
//         await user.save();

//         console.log('Property marked as deleted:', user);
//         res.status(200).json({ message: 'Property deleted successfully!', user });
//     } catch (error) {
//         console.error('Error deleting property:', error);
//         res.status(500).json({ message: 'Error deleting property.', error });
//     }
// });


router.post('/undo-delete', async (req, res) => {
    const { ppcId, phoneNumber } = req.body;

    if (!ppcId || !phoneNumber) {
        return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
    }

    try {
        // Find the user by PPC-ID and phone number
        const user = await AddModel.findOne({ ppcId, phoneNumber });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // If there's no previous status, we can't undo
        if (!user.previousStatus) {
            return res.status(400).json({ message: 'No previous status to revert to.' });
        }

        // Revert the status to the previous status
        user.status = user.previousStatus;
        user.previousStatus = null;  // Clear the previous status

        // Save the updated user data
        await user.save();

        console.log('Property status reverted:', user);
        res.status(200).json({ message: 'Property status reverted successfully!', user });
    } catch (error) {
        console.error('Error undoing delete operation:', error);
        res.status(500).json({ message: 'Error undoing delete operation.', error });
    }
});



router.post('/delete-property', async (req, res) => {
    const { ppcId, phoneNumber } = req.body;

    if (!ppcId || !phoneNumber) {
        return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
    }

    try {
        const user = await AddModel.findOne({ ppcId, phoneNumber });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        user.previousStatus = user.status;

        user.status = 'delete';

        await user.save();

        console.log('Property marked as deleted:', user);
        res.status(200).json({ message: 'Property deleted successfully!', user });
    } catch (error) {
        console.error('Error deleting property:', error);
        res.status(500).json({ message: 'Error deleting property.', error });
    }
});



router.get('/fetch-status', async (req, res) => {
    const { phoneNumber } = req.query;
  
    if (!phoneNumber) {
      return res.status(400).json({ message: 'Phone number is required.' });
    } 
    try {
      const normalizedPhoneNumber = phoneNumber
        .replace(/[\s-]/g, '')
        .replace(/^(\+91|91|0)/, '') 
        .trim();
  
      const query = {
        phoneNumber: new RegExp(normalizedPhoneNumber + '$'),
        status: { $in: ['incomplete', 'complete'] },
      };
  
      const users = await AddModel.find(query);
  
      if (!users || users.length === 0) {
        return res.status(404).json({ message: 'Users not found.' });
      }
  
      res.status(200).json({ message: 'User data fetched successfully!', users });
    } catch (error) {
      console.error('Error fetching user details:', error);
      res.status(500).json({ message: 'Error fetching user details.', error });
    }
  });

  

  router.get('/fetch-delete-status', async (req, res) => {
    const { phoneNumber } = req.query;
  
    if (!phoneNumber) {
      return res.status(400).json({ message: 'Phone number is required.' });
    }
  
    try {
      const normalizedPhoneNumber = phoneNumber
        .replace(/[\s-]/g, '')
        .replace(/^(\+91|91|0)/, '') 
        .trim();
  
      const query = {
        phoneNumber: new RegExp(normalizedPhoneNumber + '$'), 
        status: 'delete', 
      };
  
      const users = await AddModel.find(query);
  
      if (!users || users.length === 0) {
        return res.status(404).json({ message: 'No deleted properties found.' });
      }
  
      res.status(200).json({ message: 'Deleted properties fetched successfully!', users });
    } catch (error) {
      console.error('Error fetching user details:', error);
      res.status(500).json({ message: 'Error fetching deleted properties.', error });
    }
  });
  

  router.get('/fetch-complete-status', async (req, res) => {
    const { phoneNumber } = req.query;

    if (!phoneNumber) {
        return res.status(400).json({ message: 'Phone number is required.' });
    }

    try {
        const normalizedPhoneNumber = phoneNumber
            .replace(/[\s-]/g, '')
            .replace(/^(\+91|91|0)/, '') 
            .trim();

        const query = {
            phoneNumber: new RegExp(normalizedPhoneNumber + '$'), 
            status: 'complete', 
        };

        const users = await AddModel.find(query);

        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users with complete status found.' });
        }

        // Send the user data in the response
        res.status(200).json({ message: 'Complete status user data fetched successfully!', users });
    } catch (error) {
        console.error('Error fetching complete status user details:', error);
        res.status(500).json({ message: 'Error fetching complete status user details.', error });
    }
});


router.get('/fetch-status-complete-all', async (req, res) => {
  try {
      const query = { status: 'complete' };

      const users = await AddModel.find(query);

      if (!users || users.length === 0) {
          return res.status(404).json({ message: 'No users with complete status found.' });
      }

      res.status(200).json({ message: 'Complete status user data fetched successfully!', users });
  } catch (error) {
      console.error('Error fetching complete status user details:', error);
      res.status(500).json({ message: 'Error fetching complete status user details.', error });
  }
});





// *********************************



router.post('/send-interest', async (req, res) => {
  const { phoneNumber, ppcid } = req.body;

  if (!phoneNumber || !ppcid) {
      return res.status(400).json({ message: 'Phone number and PPC ID are required.' });
  }

  try {
      // Normalize phone number (remove spaces, dashes, country code, etc.)
      const normalizedPhoneNumber = phoneNumber
          .replace(/[\s-]/g, '')
          .replace(/^(\+91|91|0)/, '') // Remove country code if any
          .trim();

      // Find and update the user's status to "Interest" and store the ppcid
      const updatedUser = await AddModel.findOneAndUpdate(
          { phoneNumber: normalizedPhoneNumber },
          { $set: { status: 'Interest', ppcid: ppcid } },
          { new: true, upsert: true } // Create new document if not found
      );

      // Send the updated user data in the response
      res.status(200).json({ message: 'Interest status updated successfully!', user: updatedUser });
  } catch (error) {
      console.error('Error updating interest status:', error);
      res.status(500).json({ message: 'Error updating interest status.', error });
  }
});



router.get('/fetch-status-interestall', async (req, res) => {
  try {
      const query = { status: 'Interest' };

      const users = await AddModel.find(query);

      if (!users || users.length === 0) {
          return res.status(404).json({ message: 'No users with interest status found.' });
      }

      res.status(200).json({ message: 'Interest status user data fetched successfully!', users });
  } catch (error) {
      console.error('Error fetching interest status user details:', error);
      res.status(500).json({ message: 'Error fetching interest status user details.', error });
  }
});




router.get('/fetch-status-interest-all', async (req, res) => {
  try {
      const query = { status: 'Interest' };

      // Find all users with 'Interest' status and include specific fields
      const users = await AddModel.find(query, 'ppcId phoneNumber status');

      if (!users || users.length === 0) {
          return res.status(404).json({ message: 'No users with interest status found.' });
      }

      res.status(200).json({ message: 'Interest status user data fetched successfully!', users });
  } catch (error) {
      console.error('Error fetching interest status user details:', error);
      res.status(500).json({ message: 'Error fetching interest status user details.', error });
  }
});



router.post('/send-interests', (req, res) => {
  console.log('Request Body:', req.body);  // Log the incoming request body

  const { phoneNumber, ppcId } = req.body;

  if (!phoneNumber || !ppcId) {
    return res.status(400).json({ message: 'Phone number and property ID are required.' });
  }

  const newInterest = {
    phoneNumber,
    ppcId,
    date: new Date(),
  };

  interests.push(newInterest);

  console.log('New interest received:', newInterest);
  res.status(200).json({ message: 'Your interest has been recorded. We will contact you soon!' });
});


module.exports = router;







