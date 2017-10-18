const
  express = require('express'),
  passport = require('passport'),
  inquiryRouter = express.Router(),
  inquiriesCtrl = require('../controllers/properties.js')



// inquiryRouter.post('/properties/:id/inquiry', inquiriesCtrl.create)

module.exports = inquiryRouter