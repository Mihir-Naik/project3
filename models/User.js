const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true}, // validate format of email here
    telephone: String,
    password: String,
    admin: { type: Boolean, default: false},
    ownedProperties: [{type: mongoose.Schema.Types.ObjectId, ref: 'Property'}],
    residence: {type: mongoose.Schema.Types.ObjectId, ref: 'Property'}
  },{ timestamps: true})

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

// Note: This is to set admin to false when creating a user
// userSchema.pre('save', function(next) {
//   if(this.isNew && this.admin) delete this.admin
//   next()
// })

module.exports = mongoose.model('User', userSchema)