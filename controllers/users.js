const
  User = require('../models/User.js'),
  Property = require('../models/Property.js')

module.exports = {
  dashboard: (req, res) => {
    Property.find({owner: req.user._id}).populate('properties residence inquiries').exec((req, properties) => {
      res.render('users/dashboard', { properties })
    })
  },

  myInvoices: (req, res) => {
    Property.find({resident: req.user._id}).populate('resident owner invoices').exec((req, property)=> {
      if (property[0].invoices[0]){
        res.render('invoices/index', {property: property[0]})
      } else {
        res.render('/dashboard', req.flash('error', "There are no invoices to show at this time !"))
      }
    })
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