const
  mongoose = require('mongoose'),
  InquirySchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    telephone: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property',required:true}
  },{ timestamps: true})

module.exports = mongoose.model('Inquiry', InquirySchema)