const
  express = require('express'),
  passport = require('passport'),
  inquiryRouter = express.Router(),
  inquiriesCtrl = require('../controllers/properties.js')





inquiryRouter.get('/dashboard', isLoggedIn, usersCtrl.dashboard)


inquiryRouter.get('/profile', isLoggedIn, usersCtrl.show)

userRouter.route('/users/:id')
.patch(usersCtrl.update)
.delete(usersCtrl.destroy)

userRouter.get('/users/:id/edit', usersCtrl.edit)

// Authorization check function for user trying to login
function isLoggedIn(req, res, next){
if (req.isAuthenticated()) return next()
res.redirect('/')
}

module.exports = userRouter