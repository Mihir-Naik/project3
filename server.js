// Main server file for the project //
const
    express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    ejsLayouts = require('express-ejs-layouts'),
    flash = require('connect-flash'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    MongoDBStore = require('connect-mongodb-session')(session),
    passport = require('passport')

// Environment PORT ///////// replace Project3 with project name once decided ⬇//////
const
    port = process.env.PORT || 3000,
    mongoConnectionString = process.env.MONGODB_URL || 'mongodb://localhost/project3'

// Establish Mongoose Connection
mongoose.connect(mongoConnectionString, (err) => {
    console.log(err || `Connected to MongoDB @ ${mongoConnectionString}`)
})

// ejs Configuration here ////////////////
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// Root Route
app.get('/', (req,res) => {
    res.render('index')
})

app.listen(port, (err) => {
    console.log(err || `Server running on port: ${port}`)
})