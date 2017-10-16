// /routes/properties.js
const
  express = require('express'),
  passport = require('passport'),
  propertyRouter = express.Router(),
  propertiesCtrl = require('../controllers/properties.js')

propertyRouter.route('/:id')
  .get(propertiesCtrl.show)
  .patch(propertiesCtrl.update)
  .delete(propertiesCtrl.destroy)
  
//show property you want to edit
propertyRouter.get('/:id/edit', propertiesCtrl.edit)
  
//show all properties
propertyRouter.get('/')
  .post(propertiesCtrl.create)
  .get(propertiesCtrl.index)

propertyRouter.get('/new', propertiesCtrl.new)

module.exports = propertyRouter