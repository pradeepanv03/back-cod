const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    ppcId: {
        type: String,
        // required: true, 
    },
    propertyMode: {
        type: String,
        required: true, 
        enum: ['Residential', 'Commercial','Agricultural','Rent'], 
    },
    propertyType: {
        type: String,
        required: true,
        enum: [
            // Residential Property Types
            'Flat/ Apartment',
            'Residential House',
            'Villa',
            'Builder Floor Apartment',
            'Penthouse',
            'Studio Apartment',
            'Service Apartment',
            
            // Commercial Property Types
            'Commercial Office Space',
            'Office in IT Park/ SEZ',
            'Commercial Shop',
            'Commercial Showroom',
            'Commercial Land',
            'Warehouse/ Godown',
            'Industrial Land',
            'Industrial Building',
            'Industrial Shed',

            // Agricultural Property Types
            'Agricultural Land',
            'Farm House'
        ]
    },
    price: {
        type: Number,
        required: true, 
    },
    propertyAge: {
        type: String,
        required: true,
        enum: [
          'Newly Build',
          '2 Years',
          '3 Years',
          '4 Years',
          '5 Years',
          '6 Years',
          '7 Years',
          '8 Years',
          '9 Years',
          '10 Years',
          '11 Years',
          '12 Years',
          '13 Years',
          '14 Years',
          '15 Years',
          '16 Years',
          '17 Years',
          '18 Years',
          '19 Years',
          '20 Years',
          '20+ Years',
        ], 
      },
    bankLoan: {
        type: String,
        required: true,
        enum: ['Yes', 'No'], // Whether bank loan is available
    },
    negotiation: {
        type: String,
        required: true, // Whether negotiation is allowed
        enum: ['Yes', 'No'],
    },
    length: {
        type: Number,
        required: true, // Length of the property in feet
    },
    breadth: {
        type: Number,
        required: true, // Breadth of the property in feet
    },
    totalArea: {
        type: Number,
        required: true, // Total area of the property in square feet
    },
    ownership: {
        type: String,
        required: true,
        enum: ['single Owner', 'Multiple Owner','Power Of Attorney'],
    },
    bedrooms: {
        type: Number,
        required: true, 
        enum:['No','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','20+'],
    },
    kitchen:{
        type: String,
        required: true,
        enum:['Yes','NO'],
    },
    kitchenType:{
        type: String,
        required: true,
        enum: [
            'Modular','Normal']    
    },
    balconies: {
        type: String,
        required: true,
        enum: [
            'No',
            '1 Balcony',
            '2 Balconies',
            '3 Balconies',
            '4 Balconies',
            '5 Balconies',
            '6 Balcony',
            '7 Balconies',
            '8 Balconies',
            '9 Balconies',
            '10 Balconies',
            '10+ Balconies',
        ]
    },
    floorNo: {
        type: String,
        required: true,
        enum: [
            'Lower Basement',
            'Upper Basement',
            'Ground Floor',
            'Top Floor',
            '1st Floor',
            '2nd Floor',
            '3rd Floor',
            '4th Floor',
            '5th Floor',
            '6th Floor',
            '7th Floor',
            '8th Floor',
            '9th Floor',
            '10th Floor'
        ]
    },
    areaUnit: {
        type: String,
        required: true,
        enum:['sq.ft','sq.meter','cent','Acre','Hectare'],
    },
    propertyApproved: {
        type: String,
        required: true, 
        enum: ['Yes', 'No'],
    },
    postedBy: {
        type: String,
        required: true, 
        enum:['Owner','Broker','Developer'],
    },
    facing: {
        type: String,
        required: true, 
        enum: [
            'North',
            'South',
            'East',
            'West',
            'North-East',
            'South-East',
            'North-West',
            'South-West',
            'North-North-East',
            'South-South-West',
            'East-North-East',
            'West-North-West'
        ]
    },
    salesMode: {
        type: String,
        required: true,
        enum:['Full Payment','Partial Paymaent']
    },
    salesType: {
        type: String,
        required: true, 
        enum:['Normal','Urgent']
    },
    description: {
        type: String,
        required: true, 
    },
    furnished: {
        type: String,
        required: true, 
        enum:['Furnished','Unfurnished','Semi-Furnished']
    },
    lift: {
        type: String,
        required: true, 
        enum:['Yes','No','Closed']
    },
    attachedBathrooms: {
        type: Number,
        required: true, 
        enum:['No','1','2','3','4','5','6','7','8','9','10','10+']
    },
    western: {
        type: String,
        required: true, 
        enum:['No','1','2','3','4','5','6','7','8','9','10','10+']
    },
    numberOfFloors: {
        type: Number,
        required: true,
        enum:['UnderGround','GroundFloor','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','20+'] 
    },
    carParking: {
        type: String,
        required: true, 
        enum: ['Yes', 'No'],
    },
    rentalPropertyAddress: {
        type: String,
        required: true, 
    },
    country:{
        type:String,
        required:true,
    },
    state: {
        type: String,
        required: true, 
    },
    city: {
        type: String,
        required: true, 
    },
    district: {
        type: String,
        required: true, 
    },
    area: {
        type: String,
        required: true, 
    },
    streetName: {
        type: String,
        required: true, 
    },
    doorNumber: {
        type: String,
        required: true, 
    },
    nagar: {
        type: String,
        required: true, 
    },
    ownerName: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true, 
    },
    phoneNumber: {
        type: String,
        required: true, 
    },
    alternatePhone: {
        type: String,
        required: false, 
    },
    bestTimeToCall: {
        type: String,
        required: false, 
        enum:['AnyTime','Morning','Afternoon','Evening'],
    },
    
    profile: [{
        type: String, 
        required: false, 
    }],
    photos: {
        type: [String],
        required: true, // Make sure photos are required if you expect them
    },
//    video: {
//         type: String, 
//         required: false, 
//     },
    rentAmount:{
        type: Number,
        required: true,    
    },
    rentSecurityAmount:{
        type: Number,
        required: true,
    },
    rentMaintenanceCharge:{
        type: Number,
        required: true,
    },
    maintancePer:{
        type: String,
        required: true,
        enum:['Monthly','Yearly','Quarterly','One-Time']
    },
    status: {
        type: String,
        enum: ['incomplete', 'complete'],
        default: 'incomplete', // Set default to 'incomplete'
    },
}, { timestamps: true });

const AddProperty = mongoose.model('AddProperty', propertySchema);
module.exports = AddProperty;



// propertySchema.methods.updateStatus = function() {
//     // Check if all required fields are filled
//     const requiredFields = [
//         'propertyMode', 'propertyType', 'price', 'propertyAge', 'bankLoan', 
//         'negotiation', 'length', 'breadth', 'totalArea', 'ownership', 
//         'bedrooms', 'kitchen', 'kitchenType', 'balconies', 'floorNo', 
//         'areaUnit', 'propertyApproved', 'postedBy', 'facing', 'salesMode', 
//         'salesType', 'description', 'furnished', 'lift', 'attachedBathrooms', 
//         'western', 'numberOfFloors', 'carParking', 'rentalPropertyAddress', 
//         'country', 'state', 'city', 'district', 'area', 'streetName', 'doorNumber', 
//         'nagar', 'ownerName', 'email', 'phoneNumber', 'profile', 'video', 
//         'rentAmount', 'rentSecurityAmount', 'rentMaintenanceCharge', 'maintancePer'
//     ];

//     const isComplete = requiredFields.every(field => this[field]);

//     // Set the status accordingly
//     this.status = isComplete ? 'complete' : 'incomplete';
// };

// // This method is called before saving the document to ensure status is updated.
// propertySchema.pre('save', function(next) {
//     this.updateStatus();
//     next();
// });


// module.exports = mongoose.model('AddProperty', propertySchema);







// const mongoose = require('mongoose');


// const propertySchema = new mongoose.Schema({
//     propertyMode: {
//         type: String,
//         required: true,
//         enum: ['Residential', 'Commercial', 'Agricultural', 'Rent'],
//     },
//     propertyType: {
//         type: String,
//         required: true,
//         enum: ['Flat/ Apartment', 'Residential House', 'Villa'],
//     },
//     price: {
//         type: Number,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     photos: {
//         type: [String],
//         required: true, // Make sure photos are required if you expect them
//     },
//     // video: {
//     //     type: String, 
//     //     required: false, 
//     // },

// }, { timestamps: true });

// const AddProperty = mongoose.model('AddProperty', propertySchema);
// module.exports = AddProperty;
