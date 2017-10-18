const
  express = require('express'),
  residentRouter = express.Router({mergeParams: true}),
  residentsCtrl = require('../controllers/residents.js')

residentRouter.get('/new', residentsCtrl.new)

residentRouter.route('/')
  .post(residentsCtrl.create)

module.exports = residentRouter