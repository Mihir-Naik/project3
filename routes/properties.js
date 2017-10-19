// /routes/properties.js
const
  express = require('express'),
  passport = require('passport'),
  propertyRouter = express.Router(),
  propertiesCtrl = require('../controllers/properties.js'),
  inquiriesCtrl = require('../controllers/inquiries.js'),
  inquiryRoutes = require('./inquiries.js'),
  residentRoutes = require('./residents.js'),
  invoiceRoutes = require('./invoices.js') //Required Invoice router file

propertyRouter.get('/new', isLoggedIn, propertiesCtrl.new)
propertyRouter.get('/my_properties', isLoggedIn, propertiesCtrl.currentUserProperties)


propertyRouter.use('/:id/inquiries', inquiryRoutes)

propertyRouter.route('/:id')
  .get(propertiesCtrl.show)
  .patch(propertiesCtrl.update)
  .delete(propertiesCtrl.destroy)

//show property you want to edit
propertyRouter.get('/:id/edit', isLoggedIn, propertiesCtrl.edit)
  
//show all properties
propertyRouter.route('/')
  .post(propertiesCtrl.create)
  .get(propertiesCtrl.index)

propertyRouter.use('/:propertyId/residents', residentRoutes)
propertyRouter.use('/:propertyId/invoices', invoiceRoutes) // Directing to Invoice routes 

function isLoggedIn(req, res, next){
  if (req.isAuthenticated()) return next()
  req.flash('error', 'You must be logged in to view that page')
  res.redirect('/')
}

module.exports = propertyRouter