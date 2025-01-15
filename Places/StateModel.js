// Places/StateModel.js

const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    stateName: {
        type: String,
        required: true,
        enum: ['Pudhucherry', 'Tamilnadu', 'Others'] // Adding enum as you requested before
    }
});

const State = mongoose.model('State', stateSchema);

module.exports = State;
