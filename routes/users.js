// Routes file /////// Remember to rename the file //////
const
  express = require('express'),
  passport = require('passport'),
  userRouter = express.Router()
  
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

userRouter.get('/profile', isLoggedIn, (req,res) => {
  // show the user page if they are logged in
  res.render('profile', {user: req.user})
})

userRouter.get('/logout', (req,res) => {
  // destroy the session, and redirect the user back to home page
  req.logout()
  res.redirect('/')
})

// Authorization check function for user trying to login
function isLoggedIn(req, res, next){
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}

module.exports = userRouter