const
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  // Require model here //
  User = require('../models/User.js')
  
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })
  
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, email, password, done) => {
    User.findOne({email: email}, (err, user) => {
      if (err) return done(err)
      if (user) return done(null, false)
      var newUser = new User(req.body)
      newUser.password = newUser.generateHash(password)
      newUser.save((err) => {
        if (err) return console.log(err)
        return done(null, newUser)
      })
    })
  }))
  
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, email, password, done) => {
    User.findOne({email: email}, (err, user) => {
      if (err) return done(err)
      // if (!user) return done(null, false)
      // if (!user.validPassword(password)) return done(null, false)
      if (!user || !user.validPassword(password)) {
          return done(null, false, req.flash('error', 'There was a problem logging in...'))
      }

      // if it gets to this, it means they loggedin successfully.
      return done(null, user, req.flash('success', `You have successfully signed in as ${user.email}`))
    })
  }))

module.exports = passport