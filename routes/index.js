const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/:fileName', function (req, res) {
  let fileName = req.params.fileName;
  res.sendFile(fileName);
});

module.exports = router;