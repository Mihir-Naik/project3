// /routes/properties.js
const
  express = require('express'),
  passport = require('passport'),
  propertyRouter = express.Router(),
  propertiesCtrl = require('../controllers/properties.js')



// destroy the session, and redirect the user back to home page

propertyRouter.route('/properties/:id')
.get(propertiesCtrl.show)
.patch(usersCtrl.update)
.delete(usersCtrl.destroy)

userRouter.get('/user/:id/edit', usersCtrl.edit)

// Authorization check function for user trying to login
function isLoggedIn(req, res, next){
if (req.isAuthenticated()) return next()
res.redirect('/')
}

module.exports = userRouter