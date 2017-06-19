'use strict';

const express = require('express');
const router = express.Router();

//POST questions/:qID/answers
//Route for creating an answer
router.post('/:qID/answers', (req, res) => {
  res.json({response: "You sent a POST request to /answers.",
    questionId: req.params.qID,
    body: req.body
  });
});


//PUT request for questions/:qID/answers/:aID
//Edit a specific answer
router.put('/:qID/answers/:aID', (req, res) => {
  res.json({response: "You sent a PUT request to /answers/:aID to update a specific answer",
    questionId: req.params.qID,
    answerId: req.params.aID,
    body: req.body
  });
});


//DELETE request for questions/:qID/answers/:aID
//Edit a specific answer
router.delete('/:qID/answers/:aID', (req, res) => {
  res.json({response: "You sent a DELETE request to /answers/:aID to update a specific answer",
    questionId: req.params.qID,
    answerId: req.params.aID
  });
});


//POST request for questions/:qID/answers/:aID/vote-up
//POST request for questions/:qID/answers/:aID/vote-down
//Vote on a specific answer
router.post('/:qID/answers/:aID/vote-:dir', (req, res) => {
  res.json({response: `You sent a POST request to /answers/:aID/vote-${req.params.dir}`,
    questionId: req.params.qID,
    answerId: req.params.aID,
    vote: req.params.dir
  });
});


module.exports = router;
