const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser')


module.exports = function (io) {
  io.sockets.emit('newTweet', { tweet: 'here I AM!' });

  router.use(bodyParser.urlencoded({ extended: false }))
  
  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render('index', { tweets: tweets, showForm: true });
  });
  
  router.post('/tweets', function(req, res) {
    let name = req.body.name;
    let text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('back');
  });
  
  router.get('/users/:name', function (req, res) {
    let username = req.params.name;
    let list = tweetBank.find({ name: username });
    res.render('index', { tweets: list, showForm: true, name: username })
  });
  
  router.get('/tweets/:id', function (req, res) {
    let tweetId = req.params.id;
    let list = tweetBank.find({ id: +tweetId });
    res.render('index', { tweets: list })
  });


  return router;
};