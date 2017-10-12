const bcrypt = require('bcryptjs');
const User = require('../../models/user');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
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

module.exports = {
  comparePass,
  createNewUser
}
