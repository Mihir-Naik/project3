const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  propertySchema = new mongoose.Schema({
    address: { type: String, required: true },
    rentalPrice: { type: Number, required: true },
    numBedrooms: { type: Number, required: true}, // validate format of email here
    numBathrooms: { type: Number, required: true},
    sizeSquareFeet: { type: Number, required: true },
    vacant: Boolean,
    description: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  })

module.exports = mongoose.model('Property', propertySchema)

