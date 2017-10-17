const
  User = require('../models/User.js')

module.exports = {
  dashboard: (req, res) => {
    res.render('users/dashboard')
  },

  show: (req, res) => {
    res.render('users/profile', { user: req.user })
  },

  new: (req, res) => {
    res.render('users/new')
  },

  create: (req, res) => {
    res.json("user create route")
  },

  edit: (req, res) => {
    User.findById(req.params.id, (err, user) => {
      res.render('users/edit', { user })
    })
  },

  update: (req, res) => {
    console.log(req.body)
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
      res.redirect('/profile')
    })
  },

  resetPassword: (req, res) => {
    res.render('users/resetPassword')
  },

  updatePassword: (req, res) => {
    User.findById(req.user._id, (err, user) => {
      user.password = user.generateHash(req.body.password)
      user.save((err) => {
        if(err) return console.log(err)
        res.redirect('/profile')
      })
    })
  },

  destroy: (req, res) => {
    res.json("user destroy route")
  },
}