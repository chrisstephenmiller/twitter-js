const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets });
});

router.get('/:fileName', function (req, res) {
  let fileName = req.params.fileName;
  res.sendFile(fileName);
});

router.get('/users/:name', function (req, res) {
  let username = req.params.name;
  let list = tweetBank.find({ name: username });
  res.render('index', { tweets: list })
});

router.get('/tweets/:id', function (req, res) {
  let tweetId = req.params.id;
  let list = tweetBank.find({ id: +tweetId });
  res.render('index', { tweets: list })
});

module.exports = router;