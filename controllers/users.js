const
  User = require('../models/User.js')

module.exports = {
  dashboard: (req, res) => {
    res.render('users/dashboard')
  },

  show: (req, res) => {
    User.findById(req.params.id, (err, user) => {
      res.render('users/profile')
    })
  },

  new: (req, res) => {
    res.render('users/new')
  },

  create: (req, res) => {
    res.json("user create route")
  },

  edit: (req, res) => {
    res.json("user edit route")
  },

  update: (req, res) => {
    res.json("user show route")
  },

  destroy: (req, res) => {
    res.json("user destroy route")
  },
}