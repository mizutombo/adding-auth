const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('.error-handler')();



// dev tool to see requests in terminal
app.use(morgan('dev'));

app.use(errorHandler);

module.exports = app;