const express = require('express')
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks')

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.listen(3000, () => console.log('Server listening!'))

app.get('/one/', function (req, res, next) {
    res.render('index.html', {title: 'Hall of Fame', people: people});
})

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates