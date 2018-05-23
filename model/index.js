const User = require('./user')
const Wallet = require('./wallet')
const models = require('../index')

class Accounts {
  static createUser(params) {
    return models.User.create(
      User.create(params)
    )
  }
}

module.exports = Accounts
