const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = {
  'development': {
    'username': 'postgres',
    'password': 'postgres',
    'database': 'db',
    'host': '127.0.0.1',
    'dialect': 'postgres',
    operatorsAliases: Op, // use Sequelize.Op
  },
  'test': {
    'username': 'postgres',
    'password': 'postgres',
    'database': 'db_test',
    'host': '127.0.0.1',
    'logging': false,
    'dialect': 'postgres',
  },
  'production': {
    'username': 'asgarduser',
    'password': 'asgardpassword',
    'database': 'db',
    'host': '',
    'dialect': 'postgres',
  },
}
