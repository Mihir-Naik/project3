const
  User = require('../models/User.js')

module.exports = {
  show: (req, res) => {
    User.findById(req.params.id, (err, user) => {
      res.json("user show route")
      res.render('users/')
    })
  },
  new: (req, res) => {
    res.json("user new route")
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