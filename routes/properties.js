// /routes/properties.js
const
  express = require('express'),
  passport = require('passport'),
  propertyRouter = express.Router(),
  propertiesCtrl = require('../controllers/properties.js')

propertyRouter.get('/new', propertiesCtrl.new)
propertyRouter.get('/my_properties', propertiesCtrl.currentUserProperties)

propertyRouter.route('/:id')
  .get(propertiesCtrl.show)
  .patch(propertiesCtrl.update)
  .delete(propertiesCtrl.destroy)

// propertyRouter.use('/:id/inquiries', inquiriesRouter)
  
  
//show property you want to edit
propertyRouter.get('/:id/edit', propertiesCtrl.edit)
  
//show all properties
propertyRouter.route('/')
  .post(propertiesCtrl.create)
  .get(propertiesCtrl.index)

module.exports = propertyRouter