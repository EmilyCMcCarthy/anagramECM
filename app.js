'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.port || 8080;

moduele.exports = app;

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.json()); // would be for AJAX requests

//  api routes
app.use('/api', require('./api'))

// error handling endware
app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})

// start the server
var server = app.listen(PORT, function(){
  console.log(`listening on port 1337 ${PORT}`);
});
