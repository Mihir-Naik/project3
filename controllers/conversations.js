const
  Conversation = require('../models/Conversation.js')

module.exports = {
  show: (req, res) => {
    res.json('conversation show page')
  }
}