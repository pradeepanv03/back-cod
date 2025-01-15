







// const express = require('express');
// const multer = require('multer');
// const AddProperty = require('./AddModel'); // Adjust path based on your project structure

// const router = express.Router();

// // Set up Multer storage engine
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); // Folder where files will be stored
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname); // Rename file to avoid conflicts
//     }
// });

// // Initialize multer upload middleware
// // const upload = multer({ storage });


// const upload = multer({
//     storage,
//     limits: { fileSize: 10 * 1024 * 1024 }, // Limit to 10MB
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype.startsWith('image/')) {
//             cb(null, true);
//         } else {
//             cb(new Error('Only image files are allowed!'), false);
//         }
//     }
// });


// // POST route to add property and upload images
// router.post('/add-property', upload.array('profile', 10), async (req, res) => {
// //     try {
// //         const propertyData = req.body;

// //         // Ensure propertyMode is provided and not empty
// //         if (!propertyData.propertyMode || propertyData.propertyMode === '') {
// //             return res.status(400).json({ message: 'propertyMode is required' });
// //         }

// //         // If files are uploaded, attach the file paths to the property data
// //         if (req.files) {
// //             propertyData.profile = req.files.map(file => file.path); // Store file paths in the database
// //         }

// //         // Create a new property document with the provided data
// //         const newProperty = new AddProperty(propertyData);

// //         // Save the property to the database
// //         await newProperty.save();

// //         // Respond with the property data including the status
// //         res.status(201).json({
// //             message: 'Property added successfully',
// //             property: newProperty,
// //         });
// //     } catch (error) {
// //         console.error("Error adding property:", error);

// //         // Handle validation errors
// //         if (error.name === 'ValidationError') {
// //             const errorMessages = Object.values(error.errors).map(e => e.message);
// //             return res.status(400).json({ message: 'Validation error', errors: errorMessages });
// //         }

// //         // Catch all other errors
// //         res.status(500).json({
// //             message: 'Error adding property',
// //             error: error.message || error
// //         });
// //     }

// try {
//     const propertyData = req.body;
  
//     if (!propertyData.propertyMode || propertyData.propertyMode === '') {
//         return res.status(400).json({ message: 'propertyMode is required' });
//     }
  
//     if (req.files && req.files.length > 0) {
//         propertyData.profile = req.files.map(file => file.path); // Store file paths
//     } else {
//         console.log("No files uploaded");
//     }
  
//     const newProperty = new AddProperty(propertyData);
//     await newProperty.save();
  
//     res.status(201).json({
//         message: 'Property added successfully',
//         property: newProperty,
//     });
//   } catch (error) {
//     console.error("Error adding property:", error);
  
//     if (error.name === 'ValidationError') {
//         const errorMessages = Object.values(error.errors).map(e => e.message);
//         return res.status(400).json({ message: 'Validation error', errors: errorMessages });
//     }
  
//     console.error("File Upload Error:", error.message); // Enhanced logging
//     res.status(500).json({
//         message: 'Error adding property',
//         error: error.message || error
//     });
//   }
// })

// module.exports = router;













// const express = require('express');
// const multer = require('multer');
// const AddProperty = require('./AddModel'); // Adjust path based on your project structure
// const fs = require('fs');

// const router = express.Router();

// // Set up Multer storage engine
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const uploadDirectory = 'uploads/';
//         if (!fs.existsSync(uploadDirectory)) {
//             fs.mkdirSync(uploadDirectory); // Create the directory if it doesn't exist
//         }
//         cb(null, uploadDirectory); // Folder where files will be stored
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname); // Rename file to avoid conflicts
//     }
// });

// // Initialize multer upload middleware
// const upload = multer({
//     storage,
//     limits: { fileSize: 10 * 1024 * 1024 }, // Limit to 10MB
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype.startsWith('image/')) {
//             cb(null, true);
//         } else {
//             cb(new Error('Only image files are allowed!'), false);
//         }
//     }
// });


// // // Set up Multer storage engine
// // const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         cb(null, 'uploads/'); // Folder where files will be stored
// //     },
// //     filename: (req, file, cb) => {
// //         cb(null, Date.now() + '-' + file.originalname); // Rename file to avoid conflicts
// //     }
// // });

// // // Initialize multer upload middleware
// // const upload = multer({ storage });


// // POST route to add property and upload images
// router.post('/add-property', upload.array('photos', 10), async (req, res) => {
//     try {
//         const propertyData = req.body;

//         // Log incoming data to check the request
//         console.log('Incoming Property Data:', propertyData);

//         // Ensure propertyMode is provided and not empty
//         if (!propertyData.propertyMode || propertyData.propertyMode === '') {
//             return res.status(400).json({ message: 'propertyMode is required' });
//         }

//         // If files are uploaded, store file paths in the database
//         if (req.files && req.files.length > 0) {
//             propertyData.photos = req.files.map(file => file.path);
//         } else {
//             console.log("No files uploaded");
//         }

//         const newProperty = new AddProperty(propertyData);
//         await newProperty.save();

//         res.status(201).json({
//             message: 'Property added successfully',
//             property: newProperty,
//         });
//     } catch (error) {
//         console.error("Error adding property:", error);
//         console.error("Request Body:", req.body);  // Log the incoming body

//         // Handle validation errors
//         if (error.name === 'ValidationError') {
//             const errorMessages = Object.values(error.errors).map(e => e.message);
//             return res.status(400).json({ message: 'Validation error', errors: errorMessages });
//         }

//         console.error("File Upload Error:", error.message);  // Log file upload errors
//         res.status(500).json({
//             message: 'Error adding property',
//             error: error.message || error
//         });
//     }
// });

// module.exports = router;























const express = require('express');
const multer = require('multer');
const AddProperty = require('./AddModel'); // Adjust path based on your project structure
const fs = require('fs');

const router = express.Router();

// Set up Multer storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDirectory = 'uploads/';
        if (!fs.existsSync(uploadDirectory)) {
            fs.mkdirSync(uploadDirectory); // Create the directory if it doesn't exist
        }
        cb(null, uploadDirectory); // Folder where files will be stored
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Rename file to avoid conflicts
    }
});

// Initialize multer upload middleware
const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Limit to 10MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});


router.post('/add-property', upload.array('photos', 10), async (req, res) => {
    try {
        const propertyData = req.body;
        console.log('Request Body:', req.body); // Log the body of the request
        console.log('Uploaded Files:', req.files); // Log uploaded files

        if (!propertyData.propertyMode || propertyData.propertyMode === '') {
            return res.status(400).json({ message: 'propertyMode is required' });
        }

        // Check if files are uploaded
        if (req.files && req.files.length > 0) {
            propertyData.photos = req.files.map(file => file.path);
        } else {
            console.log("No files uploaded");
        }

        const newProperty = new AddProperty(propertyData);
        await newProperty.save();

        res.status(201).json({
            message: 'Property added successfully',
            property: newProperty,
        });
    } catch (error) {
        console.error("Error adding property:", error);  // Log the full error
        if (error.name === 'ValidationError') {
            const errorMessages = Object.values(error.errors).map(e => e.message);
            return res.status(400).json({ message: 'Validation error', errors: errorMessages });
        }

        // General error handling
        res.status(500).json({
            message: 'Error adding property',
            error: error.message || error
        });
    }
});


module.exports = router;









// const express = require('express');
// const multer = require('multer');
// const path = require('path'); // Import path module
// const fs = require('fs');

// const router = express.Router();

// // // Set up Multer storage engine
// // const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         const uploadDirectory = 'uploads/';
// //         if (!fs.existsSync(uploadDirectory)) {
// //             fs.mkdirSync(uploadDirectory); // Create the directory if it doesn't exist
// //         }
// //         cb(null, uploadDirectory); // Folder where files will be stored
// //     },
// //     filename: (req, file, cb) => {
// //         cb(null, Date.now() + '-' + file.originalname); // Rename file to avoid conflicts
// //     }
// // });

// // // File type validation (photos and videos)
// // const fileTypes = /jpeg|jpg|png|gif|mp4|mov|wmv/; // Include more formats as needed

// // const fileFilter = (req, file, cb) => {
// //     const extname = fileTypes.test(path.extname(file.originalname).toLowerCase()); // Check the file extension
// //     const mimetype = fileTypes.test(file.mimetype); // Check the file mime type

// //     if (extname && mimetype) {
// //         return cb(null, true); // Accept the file
// //     } else {
// //         cb(new Error('Only image or video files are allowed!'), false); // Reject the file
// //     }
// // };

// // // Initialize multer upload middleware
// // const upload = multer({
// //     storage,
// //     limits: { fileSize: 10 * 1024 * 1024 }, // Limit to 10MB
// //     fileFilter, // Use the file filter to validate files
// // });



// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const uploadDirectory = 'uploads/';
//         if (!fs.existsSync(uploadDirectory)) {
//             fs.mkdirSync(uploadDirectory); // Create directory if it doesn't exist
//         }
//         cb(null, uploadDirectory); // Files will be saved in the uploads/ folder
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname); // Ensure a unique file name
//     }
// });

// // File types for images and video
// const fileTypes = /jpeg|jpg|png|gif|mp4|avi|mov/; 

// const upload = multer({
//     storage,
//     limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
//     fileFilter: (req, file, cb) => {
//         const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
//         const mimetype = fileTypes.test(file.mimetype);
//         if (extname && mimetype) {
//             return cb(null, true);
//         } else {
//             cb(new Error('Only image and video files are allowed!'), false);
//         }
//     }
// });


// // // POST route to add property and upload images/videos
// // router.post('/add-property', upload.array('photos', 15), async (req, res) => {
// //     try {
// //         const propertyData = req.body;

// //         // Log incoming data to check the request
// //         console.log('Incoming Property Data:', propertyData);

// //         // Ensure propertyMode is provided and not empty
// //         if (!propertyData.propertyMode || propertyData.propertyMode === '') {
// //             return res.status(400).json({ message: 'propertyMode is required' });
// //         }

// //         // If files are uploaded, store file paths in the database
// //         if (req.files && req.files.length > 0) {
// //             propertyData.photos = req.files.map(file => file.path);
// //         } else {
// //             console.log("No files uploaded");
// //         }

// //         const newProperty = new AddProperty(propertyData);
// //         await newProperty.save();

// //         res.status(201).json({
// //             message: 'Property added successfully',
// //             property: newProperty,
// //         });
// //     } catch (error) {
// //         console.error("Error adding property:", error);
// //         console.error("Request Body:", req.body);  // Log the incoming body

// //         // Handle validation errors
// //         if (error.name === 'ValidationError') {
// //             const errorMessages = Object.values(error.errors).map(e => e.message);
// //             return res.status(400).json({ message: 'Validation error', errors: errorMessages });
// //         }

// //         console.error("File Upload Error:", error.message);  // Log file upload errors
// //         res.status(500).json({
// //             message: 'Error adding property',
// //             error: error.message || error
// //         });
// //     }
// // });

// router.post('/add-property', upload.fields([
//     { name: 'photos', maxCount: 15 },
//     { name: 'video', maxCount: 1 }
// ]), async (req, res) => {
//     try {
//         const propertyData = req.body;

//         // Check if required fields are present
//         if (!propertyData.propertyMode || !propertyData.propertyType || !propertyData.price || !propertyData.description) {
//             return res.status(400).json({ message: 'Missing required fields' });
//         }

//         // Process image uploads
//         if (req.files && req.files.photos && req.files.photos.length > 0) {
//             propertyData.photos = req.files.photos.map(file => file.path);
//         } else {
//             console.log('No photos uploaded');
//         }

//         // Process video upload
//         if (req.files && req.files.video && req.files.video.length > 0) {
//             propertyData.video = req.files.video[0].path; // Store the video path
//         } else {
//             console.log('No video uploaded');
//         }

//         // Create a new property document
//         const newProperty = new AddProperty(propertyData);

//         // Save property to the database
//         await newProperty.save();

//         res.status(201).json({
//             message: 'Property added successfully',
//             property: newProperty,
//         });

//     } catch (error) {
//         console.error('Error in add-property route:', error); // Log the error details here
//         res.status(500).json({
//             message: 'Error adding property',
//             error: error.message || error,
//         });
//     }
// });



// module.exports = router;
