const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  propertyImageSchema = new mongoose.Schema({
    url: { type: String, required: true },
    caption: String,
    property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property'}
  })

module.exports = mongoose.model('PropertyImage', propertyImageSchema)