const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
mongoose.connect('mongodb://localhost:27017/auth');
mongoose.connection.on('connected', ()=>{
    console.log('Connected successfully');

})

const app = express();

app.use(cors());




const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String
});
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.serializeUser(function(user, done) {
    done(null, user.id);
  }
);
  
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
  }
);





passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com//oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken,profile,email, cb) {
    console.log("")
    console.log(email);





    User.findOrCreate({ googleId: email.id, email: email.emails[0].value}, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ["email", "profile"] }),
  (req, res) =>{
    res.redirect('/auth/google');
  }
  
);

app.get('/auth/google/secrets',
  passport.authenticate('google', { failureRedirect: '/login', successRedirect: 'http://localhost:5000/secrets' }),
  function(req, res) {
    
    // Successful authentication, redirect home.
  },
  
);

app.get("/", (req, res)=>{
  res.send("Hello");

})

app.get("/google", (req, res) =>{
    res.send("Received request, this is the response");
})




app.get("/secrets", (req, res) => {
    res.send("you've been authenticated successfully and reached the hidden page");

})

app.listen(process.env.PORT, ()=>{
  console.log(`Server started at port ${process.env.PORT}`);

})

