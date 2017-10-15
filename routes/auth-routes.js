const express = require('express');
const authRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const User = require('../models/user')

authRouter.post('/login', (req, res, next) => {
  console.log(req.body)
  User.findByUserName(req.body.username)
    .then(user => {
      // console.log(user)
      if(!user) { return res.status(401).json({ error: "Invalid credentials" }); }

      if(!authHelpers.comparePass(req.body.password, user.password_digest)) {
        return res.status(401).json({ error: "Invalid credentials" });
      } else {
        return res.status(200).json({
          user: {
            username: user.username,
            email: user.email,
            user_id: user.id
          }
        })
      }
    })
    .catch((err) => { res.status(500).json({ status: 'Error logging in' }); });
});

authRouter.post('/register', (req, res, next)  => {
  console.log(req.body)
  authHelpers.createNewUser(req.body)
  .then(user => {
    if(!user) res.status(401).json({ error: "Error while registering" });
    if(user) {
      res.status(200).json({
          user: {
            username: user.username,
            email: user.email,
            user_id: user.id
          }
        })
    }
  })
  .catch((err) => { res.status(500).json({ status: 'error' }); });
});

module.exports = authRouter;
