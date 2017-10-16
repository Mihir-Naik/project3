const
  mongoose = require('mongoose'),
  propertySchema = new mongoose.Schema({
    aptNumber: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: Number, required: true },
    state: { type: String, required: true },
    rentalPrice: { type: Number, required: true },
    numBedrooms: { type: Number, required: true}, // validate format of email here
    numBathrooms: { type: Number, required: true},
    sizeSquareFeet: { type: Number, required: true },
    vacant: { type: Boolean, default: true },
    description: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    resident: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  })

module.exports = mongoose.model('Property', propertySchema)

