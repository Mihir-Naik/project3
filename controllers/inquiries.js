const 
  Property = require('../models/Property.js')
  Inquiry = require('../models/Inquiry.js')

module.exports = {
  
  create: (req,res)=>{
    Property.findById(req.params.id, (err, property) => {
      var newInquiry = new Inquiry()
      newInquiry.firstName = req.body.firstName
      newInquiry.lastName = req.body.lastName
      newInquiry.telephone = req.body.telephone
      newInquiry.email = req.body.email
      newInquiry.description = req.body.description
      newInquiry.property = req.params.id
      console.log(newInquiry)
      newInquiry.save((err, inquiry) => {
        property.inquiries.push(inquiry)
        property.save((err, property) => {
          if(err) return err
          res.redirect(`/properties/${req.params.id}`)
        })
      })
    })
  }
}