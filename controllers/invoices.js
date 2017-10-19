const
  Invoice = require('../models/Invoice.js'),
  Property = require('../models/Property.js'),
  User = require('../models/User.js')

module.exports = {
  index: (req,res) => {
    Property.findById(req.params.propertyId).populate('resident invoices').exec((err, property) => {
      if (err) return console.log(err)
      res.render('invoices/index', {property}) 
    })
  },
  new: (req,res) => {
    res.render('invoices/new', {propertyId: req.params.propertyId})
  },
  create: (req,res) => {
    var newInvoice = new Invoice(req.body)
    Property.findById(req.params.propertyId, (err, property) => {
      newInvoice.property = req.params.propertyId
      newInvoice.billFrom = property.owner
      newInvoice.billTo = property.resident
      newInvoice.save((err, invoice) => {
        if (err) return console.log(err)
        property.invoices.push(invoice._id)
        property.save((err) => {
          res.redirect(`/properties/${property._id}/invoices/${invoice._id}`)
        })
      })
    })
  },
  show: (req,res) => {
    Invoice.findById(req.params.id).populate('property billTo billFrom').exec((err, invoice) => {
      if (err) return console.log(err)
      res.render('invoices/show', {propertyId: req.params.propertyId, property: invoice.property, invoice: invoice})
    })
  },
  edit: (req, res) => {
    Invoice.findById(req.params.id, (err, invoice) => {
      res.render('invoices/edit', {propertyId: req.params.propertyId, invoice: invoice})
    })
  },
  update: (req,res) =>{
    Invoice.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, invoice)=>{
      if (err) return console.log(err)
      res.redirect(`/properties/${invoice.property}/invoices/${invoice._id}`)
    })
  }
}