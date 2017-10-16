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
  passport = require('passport'),
  dotenv = require('dotenv').config(),
  passportConfig = require('./config/passport.js'),
  userRoutes = require('./routes/users.js'),
  propertyRoutes = require('./routes/properties.js')

// Environment PORT ///////// replace Project3 with project name once decided ⬇//////
const
  port = process.env.PORT || 3000,
  mongoConnectionString = process.env.MONGODB_URL || 'mongodb://localhost/project3'

// Establish Mongoose Connection
mongoose.connect(mongoConnectionString, (err) => {
  console.log(err || `Connected to MongoDB @ ${mongoConnectionString}`)
})

// Store sessions
const store = new MongoDBStore({
  uri: mongoConnectionString,
  collection: 'sessions'
})

// Middleware
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(flash())
// session + passport //// Add secret in the .env file
app.use(session({
	secret: process.env.secret,
	cookie:{maxAge : 60000000},
	resave: true,
	saveUninitialized: false,
  	store: store
}))

app.use(passport.initialize())
app.use(passport.session())


// ejs Configuration here ////////////////
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// Root Route
app.get('/', (req,res) => {
  res.render('index')
})

app.use('/', userRoutes)
app.use('/properties', propertyRoutes)

// Server startup
app.listen(port, (err) => {
  console.log(err || `Server running on port: ${port}`)
})