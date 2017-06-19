'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const morgan = require('morgan');

const questionRoutes = require('./questionRouter');
const answerRoutes = require('./answerRouter');

app.use(jsonParser);
app.use(morgan('common'));

app.use('/questions', questionRoutes);
app.use('/questions', answerRoutes);

const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log(`Express server is listening on port ${port}`);
});
