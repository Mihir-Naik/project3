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
  .post(/* create session using Passport */)

userRouter.route('/signup')
  .get((req,res) => {
    res.render('signup')
  })
  .post(/* create account using Passport */)

userRouter.get('/profile', isLoggedIn , (req,res) => {
// render the user's profile (only if they are currently logged in)
})

userRouter.get('/logout', (req,res) => {
// destroy the session, and redirect the user back to the home page
})

userRouter.route('/')
  .post(usersCtrl.create)

userRouter.route('/:id')
  .get(usersCtrl.show)
  .patch(usersCtrl.update)
  .delete(usersCtrl.destroy)

userRouter.get('/:id/edit', usersCtrl.edit)

// a method used to authorize a user BEFORE allowing them to proceed to the profile page:
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next()
  res.redirect('/')
}

module.exports = userRouter