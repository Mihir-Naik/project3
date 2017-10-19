const
  express = require('express'),
  invoiceRouter = express.Router({mergeParams: true}),
  invoicesCtrl = require('../controllers/invoices.js')

  invoiceRouter.get('/new', invoicesCtrl.new)

  invoiceRouter.route('/')
    .get(invoicesCtrl.index)
    .post(invoicesCtrl.create)

  invoiceRouter.get('/:id', invoicesCtrl.show)
  invoiceRouter.get('/:id/edit', invoicesCtrl.edit)
  invoiceRouter.patch('/:id', invoicesCtrl.update)

module.exports = invoiceRouter