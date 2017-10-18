// /routes/properties.js
const
  express = require('express'),
  passport = require('passport'),
  propertyRouter = express.Router(),
  propertiesCtrl = require('../controllers/properties.js')
  inquiriesCtrl = require('../controllers/inquiries.js')
  
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

module.exports = propertyRouter