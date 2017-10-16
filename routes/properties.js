// /routes/properties.js
const
  express = require('express'),
  passport = require('passport'),
  propertyRouter = express.Router(),
  propertiesCtrl = require('../controllers/properties.js')



// show a specific prpoperty that should be destroyed

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

//new, index and create
propertyRouter.

module.exports = propertyRouter