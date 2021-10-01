
var path = require('path');
var express = require('express');
var exphs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('css'));
app.engine('handlebars', exphs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res, next){
    res.status(200).render("pageTemplete");
});

app.get('/canvas', function(req, res, next){
    res.status(200).sendFile(__dirname + "/public/canvas.html");
});

app.get('*', function(req, res, next){
    res.status(404).render("404");
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});