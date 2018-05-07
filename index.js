//Load express module with `require` directive
const express = require('express')
const app = express()
const mongoose = require(`mongoose`);

//DB setup


app.set('host', '0.0.0.0');
app.set('port', 8000);

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// dont run if running test
if(!module.parent) {
//Launch listening server on port 8081
app.listen(app.get('port'), function () {
  console.log('app listening on port 8081!')
})
}

module.exports = {
  server: server,
  app: app
}