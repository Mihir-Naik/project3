const
  User = require('../models/User.js'),
  Property = require('../models/Property.js'),
  Conversation = require('../models/Conversation.js')

module.exports = {
  new: (req, res) => {
    res.render('residents/new', {propertyId: req.params.propertyId })
  },
  create: (req, res) => {
    var newResident = new User(req.body)
    newResident.password = newResident.generateHash(newResident.password)
    newResident.residence = req.params.propertyId
    newResident.save((err, resident) => {
      if(err) return console.log(err)
      Property.findById(req.params.propertyId, (err, property) => {
        if(err) return console.log(err)
        property.resident = resident._id
        property.vacant = false
        property.save((err) => {
          var newConversation = new Conversation()
          newConversation.propertyOwner = req.user._id
          newConversation.propertyResident = resident._id
          newConversation.save((err, conversation) => {
            if(err) return console.log(err)
            resident.conversation = conversation._id
            resident.save((err) => {
              if(err) return console.log(err)
              res.redirect(`/properties/${property._id}`)
            })
          })
        })
      })
    })
  },
  myResidents: (req, res) => {
    
  }
}