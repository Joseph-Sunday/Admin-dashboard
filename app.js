const express = require('express'); 
const path = require('path');

const mongoose = require('mongoose'); 
const csrf = require('csurf');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express(); 
const MONGODB_URI = 'mongodb+srv://Joseph18:Thankgod1@cluster0.hgj8mum.mongodb.net/analysis?retryWrites=true&w=majority';

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employee'); 

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

app.use(flash());

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  next();
});

app.use((req, res, next) => {
  // throw new Error('Sync Dummy');
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if (!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch(err => {
      next(new Error(err));
    });
});

app.use(csrfProtection);
app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use(authRoutes);
app.use(employeeRoutes); 

app.get('/500', errorController.get500);

app.use(errorController.get404);

app.use((error, req, res, next) => {
  // res.status(error.httpStatusCode).render(...);
  // res.redirect('/500');
  console.log(error)
  res.status(500).render('errors/500', {
    pageTitle: 'Error!',
    path: '/500',
  });
});

mongoose.connect(MONGODB_URI)
  .then(result => {
    app.listen(8080);
    console.log('Connected');
  })
  .catch(err => {
    console.log(err)
  });