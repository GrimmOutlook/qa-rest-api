'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const questionRoutes = require('./questionRouter');

app.use(jsonParser);

app.use('/questions', questionRoutes);

const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log(`Express server is listening on port ${port}`);
});
