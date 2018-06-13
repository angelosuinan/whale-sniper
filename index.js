const express = require('express')
const app = express()
//const mongoose = require('mongoose')

app.set('host', '0.0.0.0')
app.set('port', 8000)
//Define request response in root URL (/)
app.use('/', index)
app.use('/graphql', require('./routes/graphql'))


// dont run if running test
if (!module.parent) {
//Launch listening server on port 8081
  app.listen(app.get('port'), () => {
    console.log('app listening on port 8081!')
  })
}

// models

const Sequelize = require('sequelize')
const env = 'development'
const config = require('./config/config')[env]

const sequelize = new Sequelize(config.database, config.username, config.password, config)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = app
