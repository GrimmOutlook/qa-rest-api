'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //return all questions
  res.json({response: "You sent a GET request."});
});

router.get('/:id', (req, res) => {
  //return specific question
  res.json({response: `Here's your certain question: ${req.params.id}`});
});

router.post('/', (req, res) => {
  //post a question
  res.json({response: "You sent a POST request.",
    body: req.body
  });
});


module.exports = router;
