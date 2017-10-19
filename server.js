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
  _ = require('underscore'),
  passport = require('passport'),
  dotenv = require('dotenv').config(),
  passportConfig = require('./config/passport.js'),
  userRoutes = require('./routes/users.js'),
  methodOverride = require('method-override')
  propertyRoutes = require('./routes/properties.js')
  inquiryRouter = require('./routes/inquiries.js')

// Environment PORT 
const
  port = process.env.PORT || 3000,
  mongoConnectionString = process.env.MONGODB_URI || 'mongodb://localhost/partmint'

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
app.use(express.static(`${__dirname}/public`))
app.use(methodOverride('_method'))
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

app.use((req, res, next) => {
	app.locals.currentUser = req.user
  app.locals.loggedIn = !!req.user
  app.locals._ = _
  app.locals.success = req.flash('success')
  app.locals.error = req.flash('error')

	next()
})

// ejs Configuration here ////////////////
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// setting delete method for delete request
app.use((req, res, next) => {
  if(req.query._method == "DELETE"){
    req.method = "DELETE"
    req.url = req.path
  }
  next()
})


// Root Route
app.get('/', (req,res) => {
  res.render('index')
})

app.use('/', userRoutes)
app.use('/properties', propertyRoutes)
// app.use('/inquiries', inquiryRouter)

// Server startup
app.listen(port, (err) => {
  console.log(err || `Server running on port: ${port}`)
})