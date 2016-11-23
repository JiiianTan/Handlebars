var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var app = express();
var mysql = require('mysql');


app.engine('handlebars', exphbs({defaultLayout: 'Main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')));


app.get('/index', function (req, res) {
		res.render('index');
});

app.get('/dashboard', function (req, res) {
		res.render('dashboard');

});
app.get('/register', function (req, res) {
	res.render('register');
});
app.listen(1010, function () {
	console.log('Example app listening on port 1010!');
});

