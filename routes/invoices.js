const
  express = require('express'),
  invoiceRouter = express.Router({mergeParams: true}),
  invoicesCtrl = require('../controllers/invoices.js')

  invoiceRouter.get('/new', invoicesCtrl.new)

  invoiceRouter.route('/')
    .post(invoicesCtrl.create)

module.exports = invoiceRouter