const bcrypt = require('bcryptjs');
const User = require('../../models/user');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRedirect(req, res, next) {
  if (req.user) res.redirect('/user');

  return next();
}

function createNewUser(user) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(user.password, salt);
  return User.create({
    username: user.username,
    email: user.email,
    password: hash,
  });
}

function loginRequired(req, res, next) {
  if (!req.user) res.redirect('/auth/login');

  return next();
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
  createNewUser
}
