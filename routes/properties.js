// /routes/properties.js
const
  express = require('express'),
  passport = require('passport'),
  propertyRouter = express.Router(),
  propertiesCtrl = require('../controllers/properties.js'),
  inquiriesCtrl = require('../controllers/inquiries.js'),
  residentRoutes = require('./residents.js'),
  invoiceRoutes = require('./invoices.js') //Required Invoice router file

propertyRouter.get('/new', propertiesCtrl.new)
propertyRouter.get('/my_properties', propertiesCtrl.currentUserProperties)


propertyRouter.post('/:id/inquiries', inquiriesCtrl.create)

propertyRouter.route('/:id')
  .get(propertiesCtrl.show)
  .patch(propertiesCtrl.update)
  .delete(propertiesCtrl.destroy)

//show property you want to edit
propertyRouter.get('/:id/edit', propertiesCtrl.edit)
  
//show all properties
propertyRouter.route('/')
  .post(propertiesCtrl.create)
  .get(propertiesCtrl.index)

propertyRouter.use('/:propertyId/residents', residentRoutes)
propertyRouter.use('/:propertyId/invoices', invoiceRoutes) // Directing to Invoice routes 

module.exports = propertyRouter