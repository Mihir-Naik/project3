const
  express = require('express'),
  passport = require('passport'),
  inquiryRouter = express.Router({mergeParams: true}),
  inquiriesCtrl = require('../controllers/inquiries.js')



// inquiryRouter.post('/properties/:id/inquiry', inquiriesCtrl.create)
inquiryRouter.post('/', inquiriesCtrl.create)

inquiryRouter.get('/:id', inquiriesCtrl.show)

module.exports = inquiryRouter