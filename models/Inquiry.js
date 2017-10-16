const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  InquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    telephone: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property'}
  })

module.exports = mongoose.model('Inquiry', InquirySchema)