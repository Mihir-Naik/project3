const Property = require('../models/Property.js')
// this variable allows us to retriever the data out of the models folder and then out of the file
    

//this is where we set our controller functions for the routes. this helps us consolidate our files
module.exports = {
  index: (req,res) => {
    Property.find({vacant: true}).populate('owner').exec((err, properties) => {
      if(err) return console.log(err)
      res.render('properties/index', {properties} )
    })
  },

  currentUserProperties: (req, res) => {
    Property.find({owner: req.user._id}).populate('owner').exec((err, properties) => {
      res.render('properties/currentUserProperties', { properties })
    })
  },

  create: (req,res)=>{
    var newProperty = new Property(req.body)
    newProperty.owner = req.user._id
    newProperty.save((err, property) => {
      if(err) return console.log(err)
      var currentUser = req.user
      currentUser.ownedProperties.push(property._id)
      currentUser.save((err) => {
        if(err) return console.log(err)
        res.redirect('/properties')
      })
    })
  },

  show:(req,res)=>{
    Property.findById(req.params.id).populate('owner').exec((err, specificProperty) => {
      res.render('properties/show', { property: specificProperty })
    })
  },

  new:(req,res)=>{
    res.render('properties/new')
  },

  edit: (req, res) => {
    Property.findById(req.params.id, (err, specificProperty) => {
      res.render('properties/edit', { property: specificProperty} )
    })
  },
  
  update: (req,res)=>{
    Property.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProperty) => {
      res.redirect(`/properties/${updatedProperty._id}`)
    })
  },
  destroy: (req,res)=>{
    Property.findByIdAndRemove(req.params.id,(err, vacantProperty) => {
      if(err) return console.log(err)
      res.redirect('/properties') 
    })
  }
}