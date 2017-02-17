const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./error-handler')();
const sharks = require('./routes/sharks');

const auth = require('./routes/auth');
const ensureAuth = require('./auth/ensure-auth')();

// dev tool to see requests in terminal
app.use(morgan('dev'));

app.use('/auth', auth);
app.use('/sharks', ensureAuth, sharks);

app.use(errorHandler);

module.exports = app;