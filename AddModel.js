


// const mongoose = require('mongoose');

// const AddSchema = new mongoose.Schema({
//   phoneNumber: { type: String, required: true, unique: true },
//   ppcId: { type: Number, required: true },
// });

// const AddModel = mongoose.model('AddModel', AddSchema);

// module.exports = AddModel;







// const mongoose = require('mongoose');

// const AddSchema = new mongoose.Schema({
//   phoneNumber: { type: String, required: true, unique: true },
//   ppcId: { type: Number, required: true, unique: true },
//   propertyMode: { type: String },
//   propertyType: { type: String },
//   ownerDetails: { type: String },
//   video: {
//     type: String, 
//     required: false, 
// },
// photos: {
//   type: [String],
//   // required: true, // Make sure photos are required if you expect them
// },
// });

// module.exports = mongoose.model('AddModel', AddSchema);


















        // ********************************************************************************



const mongoose = require('mongoose');

const countryList = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
  'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
  'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
  'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso',
  'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic',
  'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)', 'Congo (Congo-Kinshasa)',
  'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia (Czech Republic)', 'Denmark', 'Djibouti',
  'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
  'Eritrea', 'Estonia', 'Eswatini (fmr. "Swaziland")', 'Ethiopia', 'Fiji', 'Finland', 'France',
  'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea',
  'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia',
  'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan',
  'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia',
  'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar',
  'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius',
  'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique',
  'Myanmar (formerly Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua',
  'Niger', 'Nigeria', 'North Macedonia (formerly Macedonia)', 'Norway', 'Oman', 'Pakistan', 'Palau',
  'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar',
  'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
  'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles',
  'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
  'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan',
  'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago',
  'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
  'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam',
  'Yemen', 'Zambia', 'Zimbabwe'
];

const AddSchema = new mongoose.Schema({
  // phoneNumber: { type: String, required: true, unique: true },
  // ppcId: { type: Number, required: true, unique: true },
  phoneNumber: { type: String, required: true, index: true }, 
  ppcId: { type: Number, required: true  },
  propertyMode: {
    type: String,
    required: false,
    enum: ['Residential', 'Commercial', 'Agricultural', 'Rent'],
  },
  propertyType: {
    type: String,
    // required: true,
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
      'Farm House',
    ],
  },

  propertyAge: {
    type: String,
    required: false,
    enum: [
      'Newly Build', '2 Years', '3 Years', '4 Years', '5 Years', '6 Years', '7 Years', '8 Years', '9 Years',
      '10 Years', '11 Years', '12 Years', '13 Years', '14 Years', '15 Years', '16 Years', '17 Years', '18 Years',
      '19 Years', '20 Years', '20+ Years',
    ],
  },
  price: { type: Number },  // Added price field
  status: {
    type: String,
    enum: ['incomplete', 'complete','delete'],
    default: 'incomplete',  
  },
  previousStatus: { type: String, enum: ['incomplete', 'complete'] }, // New field

  bankLoan: {
    type: String,
    required: false,
    enum: ['Yes', 'No'],
  },
  negotiation: {
    type: String,
    required: false,
    enum: ['Yes', 'No'],
  },
  length: { type: Number, required: false }, // Optional field
  breadth: { type: Number, required: false }, // Optional field
  totalArea: { type: Number, required: false }, // Optional field
  ownership: {
    type: String,
    required: false,
    enum: ['Single Owner', 'Multiple Owner', 'Power Of Attorney'],
  },
  bedrooms: {
    type: String,
    required: false,
    enum: ['No', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '20+'],
  },
  kitchen: {
    type: String,
    required: false,
    enum: ['Yes', 'No'],
  },
  kitchenType: {
    type: String,
    required: false,
    enum: ['Modular', 'Normal', 'No'],
  },
  balconies: {
    type: String,
    required: false,
    enum: [
      'No', '1 Balconie', '2 Balconies', '3 Balconies', '4 Balconies', '5 Balconies', 
      '6 Balcony', '7 Balconies', '8 Balconies', '9 Balconies', '10 Balconies', 
      '10+ Balconies',
    ],
  },
  floorNo: {
    type: String,
    required: false,
    enum: [
      'Lower Basement', 'Upper Basement', 'Ground Floor', 'Top Floor', '1st Floor', 
      '2nd Floor', '3rd Floor', '4th Floor', '5th Floor', '6th Floor', '7th Floor', 
      '8th Floor', '9th Floor', '10th Floor',
    ],
  },
  areaUnit: {
    type: String,
    required: false,
    enum: ['sq.ft', 'sq.meter', 'cent', 'Acre', 'Hectare'],
  },
  propertyApproved: { type: String, required: false, enum: ['Yes', 'No'] },
  postedBy: { type: String, required: false, enum: ['Owner', 'Agent', 'Builder'] },
  facing: {
    type: String,
    required: false,
    enum: [
      'North', 'South', 'East', 'West', 'North-East', 'South-East', 'North-West', 
      'South-West', 'North-North-East', 'South-South-West', 'East-North-East', 
      'West-North-West',
    ],
  },
  salesMode: { type: String, required: false, enum: ['Full Payment', 'Partial Payment'] },
  salesType: { type: String, required: false, enum: ['Normal', 'Urgent'] },
  description: { type: String, required: false },
  furnished: { type: String, required: false, enum: ['Furnished', 'Unfurnished', 'Semi-Furnished'] },
  lift: { type: String, required: false, enum: ['Yes', 'No', 'Closed'] },
  attachedBathrooms: {
    type: String,
    required: false,
    enum: ['No', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10+'],
  },
  western: {
    type: String,
    required: false,
    enum: ['No', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10+'],
  },
  numberOfFloors: {
    type: String,
    enum: [
      'UnderGround', 'GroundFloor', '1', '2', '3', '4', '5', '6', '7', '8', 
      '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
      '20', '20+',
    ],
  },
  carParking: { type: String, required: false, enum: ['Yes', 'No'] },

  rentalPropertyAddress: {
    type: String,
    required: false,  // Optional field
},
country: {
    type: String,
    required: false,  // Optional field
},

// country: {
//   type: String,
//   required: false,  // Optional field
//   enum: countryList,  // Using predefined list of countries
// },

state: {
    type: String,
    required: false,  // Optional field
},
city: {
    type: String,
    required: false,  // Optional field
},
district: {
    type: String,
    required: false,  // Optional field
},
area: {
    type: String,
    required: false,  // Optional field
},
streetName: {
    type: String,
    required: false,  // Optional field
},
doorNumber: {
    type: String,
    required: false,  // Optional field
},
nagar: {
    type: String,
    required: false,  // Optional field
},
ownerName: {
    type: String,
    required: false,  // Optional field
},
email: {
    type: String,
    required: false,  // Optional field
},

bestTimeToCall: {
    type: String,
    required: false,
    enum: ['AnyTime', 'Morning', 'Afternoon', 'Evening'],
},

video: {
  type: String, 
  required: false, 
},
photos: {
type: [String],
// required: true, // Make sure photos are required if you expect them
},
createdAt: {
  type: Date,
  default: Date.now,
},
updatedAt: {
  type: Date,
  default: Date.now,
},
reason: {
  type: String,
  default: null, // Default to null if not provided
  trim: true,
},
isDeleted: {
  type: Boolean,
  default: false, // Indicates whether the user is marked as deleted
},
deletionReason: {
  type: String,
  default: null, // Reason for deletion
  trim: true,
},
deletionDate: {
  type: Date,
  default: null, // Date and time of deletion
},

},
{
  timestamps: true, // Automatically manage `createdAt` and `updatedAt`
  }
);

module.exports = mongoose.model('AddModel', AddSchema);
