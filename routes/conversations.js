const
  express = require('express'),
  conversationRouter = express.Router(),
  conversationCtrl = require('../controllers/conversations.js')

conversationRouter.get('/:id', conversationCtrl.show)
conversationRouter.route('/:id/messages')
  .post(conversationCtrl.createMessage)
  .get(conversationCtrl.getMessages)

module.exports = conversationRouter