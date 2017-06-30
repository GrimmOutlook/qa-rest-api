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

app.use((req, res, next) => {
  const err = new Error("It ain't here!");
  err.status = 404;
  next(err);
})

//Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error:{
      message: err.message
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log(`Express server is listening on port ${port}`);
});
