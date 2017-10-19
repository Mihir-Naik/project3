const
  Conversation = require('../models/Conversation.js'),
  Property = require('../models/Property.js')

module.exports = {
  show: (req, res) => {
    Conversation.findById(req.params.id).populate('propertyOwner propertyResident').exec((err, conversation) => {
      var talkingTo = req.user.id == conversation.propertyOwner.id ? conversation.propertyResident : conversation.propertyOwner
      Property.findOne({owner: conversation.propertyOwner.id, resident: conversation.propertyResident.id }, (err, property) => {
        if(err) return console.log(err)
        res.render('conversations/show', { conversation, talkingTo, property })
      })
    })
  },
  createMessage: (req, res) => {
    console.log(req.body)
    Conversation.findById(req.body.conversationId, (err, conversation) => {
      if(err) return console.log(err)
      var newMessage = {
        content: req.body.content,
        sender: req.body.sender,
        receiver: req.body.receiver
      }
      conversation.messages.push(newMessage)
      conversation.save((err, conversation) => {
        console.log(conversation)
        if(err) {
          return console.log(err)
          res.json('error')
        }
        res.json('success')
      })
    })
  },
  getMessages: (req, res) => {
    Conversation.findById(req.params.id, (err, conversation) => {
      res.json(conversation.messages)
    })
  }
}