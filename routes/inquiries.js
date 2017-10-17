const
  express = require('express'),
  passport = require('passport'),
  inquiryRouter = express.Router(),
  inquiriesCtrl = require('../controllers/inquiries.js')