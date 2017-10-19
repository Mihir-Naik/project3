const
  express = require('express'),
  conversationRouter = express.Router(),
  conversationCtrl = require('../controllers/conversations.js')

conversationRouter.get('/:id', conversationCtrl.show)
module.exports = conversationRouter