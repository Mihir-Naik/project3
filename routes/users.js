// /routes/users.js
const
  express = require('express'),
  passport = require('passport'),
  userRouter = express.Router(),
  usersCtrl = require('../controllers/users.js')

userRouter.route('/login')
  .get((req,res) => {
    res.render('login')
  })
  .post(passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login'
})) 

userRouter.route('/signup')
  .get((req, res) => {
    res.render('signup')
  })
  .post(passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup'
}))

userRouter.get('/logout', (req,res) => {
  // destroy the session, and redirect the user back to home page
  req.logout()
  res.redirect('/')
})

userRouter.route('/users/:id')
  .get(isLoggedIn, usersCtrl.show)
  .patch(usersCtrl.update)
  .delete(usersCtrl.destroy)

userRouter.get('/user/:id/edit', usersCtrl.edit)

// Authorization check function for user trying to login
function isLoggedIn(req, res, next){
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}

module.exports = userRouter