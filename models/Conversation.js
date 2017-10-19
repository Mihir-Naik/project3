const
  mongoose = require('mongoose'),
  messageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }, { timestamps: true} ),
  conversationSchema = new mongoose.Schema({
    propertyOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    propertyResident: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    messages: [messageSchema]
  }, { timestamps: true })

module.exports = mongoose.model('Conversation', conversationSchema)