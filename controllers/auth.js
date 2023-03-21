const User = require('../models/user');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

exports.getLogin = (req, res, next) => {
  let message = req.flash('error')
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.status(200).render('auth/login', {
    pageTitle: 'Login', 
    path: '/login',
    errorMessage: message, 
    oldInputs: {
      email: '',
      password: ''
    },
    validationErrors: []
  }); 
}; 

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email:email})
    .then(user => {
      if (!user) {
        return res.status(422).render('auth/login', {
          path: '/login',
          pageTitle: 'Login',
          errorMessage: 'Invalid Email.',
          oldInputs: {
            email: email,
            password: password
          },
          validationErrors: []
        });
      }
      bcrypt.compare(password, user.password)
        .then(doMatch => {
          if(doMatch) {
            req.session.isLoggedIn = true; 
            req.session.user = user;
            return req.session.save(err => {
              console.log(err); 
              res.status(200).redirect('/employees');
            }); 
          }
          return res.status(422).render('auth/login', {
            path: '/login',
            pageTitle: 'Login',
            errorMessage: 'Invalid email or password.',
            oldInputs: {
              email: email,
              password: password
            },
            validationErrors: []
          });
        })
        .catch(err => {
          const error = new Error(err);
          error.httpStatusCode = 500;
          return next(error);
        });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error')
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.status(200).render('auth/signup', {
    pageTitle: 'Signup', 
    path: '/signup',
    errorMessage: message, 
    oldInputs: {
      email: '',
      password: ''
    },
    validationErrors: []
  }); 
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email; 
  const password = req.body.password;

  bcrypt.hash(password, 12)
    .then(hashedPw => {
      const user = new User({
        email: email, 
        password: hashedPw
      }); 
      return user.save()
    })
    .then(result => {
      console.log('User created'); 
      res.status(201).redirect('/');
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err); 
    res.redirect('/'); 
  }); 
}; 