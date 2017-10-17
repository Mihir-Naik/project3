// /routes/properties.js
const
  express = require('express'),
  passport = require('passport'),
  propertyRouter = express.Router(),
  propertiesCtrl = require('../controllers/properties.js')

propertyRouter.get('/new', propertiesCtrl.new)

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

propertyRouter.get('/my_properties', propertiesCtrl.currentUserProperties)


module.exports = propertyRouter