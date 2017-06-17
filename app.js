var express = require('express')
var todoController = require('./controllers/todoControl')

var app = express()

app.set('view engine', 'ejs')

app.use(express.static('./public'))

todoController(app);

app.listen('4000')
console.log('Listening');
