const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  mongoConnectionString = process.env.MONGODB_URL || 'mongodb://localhost/project3',
  User = require('./models/User.js'),
  Property = require('./models/Property.js')
  
mongoose.connect(mongoConnectionString, (err) => {
  console.log(err || `Connected to MongoDB @ ${mongoConnectionString}`)
})

var user1params = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@gmail.com",
  telephone: "5629870123",
  admin: false,
  ownedProperties: []
}

var user2params = {
  firstName: "Scarlet",
  lastName: "Johnson",
  email: "johnson@gmail.com",
  telephone: "3239873451",
  admin: false,
  ownedProperties: []
}

var user3params = {
  firstName: "Bob",
  lastName: "Smith",
  email: "bobsmith@gmail.com",
  telephone: "4245386972",
  admin: false,
  ownedProperties: []
}

User.find({firstName: "Jane", lastName: "Doe"}, (req, users) => {
  if(users.length > 1) {
    return console.log('User1 already exists')
  }
  else {
    console.log('im here 1')
    var user1 = new User(user1params)
    user1.password = user1.generateHash('janedoe')
    return user1.save()
  }  
})

User.find({firstName: "Scarlet", lastName: "Johnson"}, (req, users) => {
  if(users.length > 1) {
    return console.log('User2 already exists')
  }
  else {
    console.log('im here 2')
    var user2 = new User(user2params)
    user2.password = user2.generateHash('johnson')
    return user2.save()
  }  
})

User.find({firstName: "Bob", lastName: "Smith"}, (req, users) => {
  if(users.length > 1) {
    return console.log('User already exists 3')
  }
  else {
    console.log('im here 3')
    var user3 = new User(user3params)
    user3.password = user3.generateHash('bobsmith')
    return user3.save()
  }   
})

console.log('end of seeds')

// User.find({email}, (err, user) => {
//   var newProperty = new Property
//   newProperty.owner = user._id
//   newProperty.save()
// })