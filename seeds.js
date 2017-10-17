const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  mongoConnectionString = process.env.MONGODB_URL || 'mongodb://localhost/partmint',
  User = require('./models/User.js'),
  Property = require('./models/Property.js')
  
mongoose.connect(mongoConnectionString, (err) => {
  console.log(err || `Connected to MongoDB @ ${mongoConnectionString}`)
})

// *** user seeds with properties *** //

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
  if(users.length) {
    return console.log('User1 already exists')
  }
  else {
    console.log('im here 1')
    var user1 = new User(user1params)
    user1.password = user1.generateHash('janedoe')
    return user1.save(() => {
      var newProperty1 = new Property()
      newProperty1.aptNumber = "4565";
      newProperty1.street = "5th Ave";
      newProperty1.city = "Los Angeles";
      newProperty1.zipCode = 90006;
      newProperty1.state = "CA";
      newProperty1.rentalPrice = 2500;
      newProperty1.numBedrooms = 1;
      newProperty1.numBathrooms = 1;
      newProperty1.sizeSquareFeet = 700;
      newProperty1.vacant = true;
      newProperty1.description = "Here is the description of property that describes the property...";
      newProperty1.owner = user1._id;
      newProperty1.save(function(err) {
        if (err) console.log(err);
        else console.log('saved');
        user1.ownedProperties.push(newProperty1)
        user1.save();
      })
    })
  }  
})

User.find({firstName: "Scarlet", lastName: "Johnson"}, (req, users) => {
  if(users.length) {
    return console.log('User2 already exists')
  }
  else {
    console.log('im here 2')
    var user2 = new User(user2params)
    user2.password = user2.generateHash('johnson')
    return user2.save(() => {
      var newProperty2 = new Property()
      newProperty2.aptNumber = "123";
      newProperty2.street = "Main Street East";
      newProperty2.city = "Santa Monica";
      newProperty2.zipCode = 90401;
      newProperty2.state = "CA";
      newProperty2.rentalPrice = 2800;
      newProperty2.numBedrooms = 2;
      newProperty2.numBathrooms = 2;
      newProperty2.sizeSquareFeet = 800;
      newProperty2.vacant = true;
      newProperty2.description = "Here is the description of property that describes the property...";
      newProperty2.owner = user2._id;
      newProperty2.save(function(err) {
        if (err) console.log(err);
        else console.log('saved');
        user2.ownedProperties.push(newProperty2)
        user2.save();
      })
    })
  }  
})

User.find({firstName: "Bob", lastName: "Smith"}, (req, users) => {
  if(users.length) {
    return console.log('User already exists 3')
  }
  else {
    console.log('im here 3')
    var user3 = new User(user3params)
    user3.password = user3.generateHash('bobsmith')
    return user3.save(() => {
      var newProperty3 = new Property()
      newProperty3.aptNumber = "333";
      newProperty3.street = "7th Street East";
      newProperty3.city = "Los Angeles";
      newProperty3.zipCode = 90016;
      newProperty3.state = "CA";
      newProperty3.rentalPrice = 2300;
      newProperty3.numBedrooms = 2;
      newProperty3.numBathrooms = 1;
      newProperty3.sizeSquareFeet = 900;
      newProperty3.vacant = true;
      newProperty3.description = "Here is the description of property that describes the property...";
      newProperty3.owner = user3._id;
      newProperty3.save(function(err) {
        if (err) console.log(err);
        else console.log('saved');
        user3.ownedProperties.push(newProperty3)
        user3.save();
      })
    })
  }   
})

/*
function dropCollection(collection) {
  if (mongoose.connection.collections[collection]) {
    mongoose.connection.collections[collection].drop((err)=>{
      if (err) console.log(err);
      else console.log(collection + ' dropped')
    })
  }
}

dropCollection('users');
dropCollection('properties');
*/