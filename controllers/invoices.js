const
  Property = require('../models/Property.js'),
  User = require('../models/User.js')

module.exports = {
  new: (req,res) => {
    res.render('invoices/new', {propertyId: req.params.propertyId})
  },
  create: () => {},
  show: () => {}
}