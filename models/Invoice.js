const
  mongoose = require('mongoose'),
  invoiceSchema = new mongoose.Schema({
    amount: {type: Number, required: true},
    paid: {type: Boolean, default: false},
    description: {type: String},
    property: {type: mongoose.Schema.Types.ObjectId, ref: 'Property'},
    billFrom: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    billTo: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  }, {timestamps: true})

module.exports = mongoose.model('Invoice', invoiceSchema)