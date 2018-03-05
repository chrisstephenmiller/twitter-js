const express = require('express')
const app = express();

app.listen(3000, () => console.log('Server listening!'))

app.get('/is-anybody-in-there/', function (req, res, next) {
    res.send(req.method + ' ' + req.path);
})