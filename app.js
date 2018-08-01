var express = require('express');
var router = express.Router()
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var JWT = require('jwt-simple');
var http = require('http');
var fs = require('fs');
const Promise = require("bluebird");
mongoose.Promise = require('bluebird');
var request = require('request');


function parallel(middlewares) {
    return function (req, res, next) {
        async.each(middlewares, function (mw, cb) {
            mw(req, res, cb);
        }, next);
    };
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (err, req, res, next) {
    if (err.constructor.name === 'UnauthorizedError') {
        res.status(401).send('Unauthorized');
    }
});

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');



// ============================================== HTML PAGES =========================================


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/landing.html');
});

app.get('/Restaurants', function (req, res) {
    res.sendFile(__dirname + '/views/restaurants.html');
});

//================================================= MODEL =========================================

// var Textbox = require('./models/TEXT/text');
var hotels = require('./models/Hotels/hotels');


// ======================================== API END POINTS ==========================================

app.get('/GetCollections', hotels.totalcollections);

// ===========================================CONNECTING TO PORT ===============================

const PORT = process.env.PORT || 6060;
app.listen(PORT);
console.log("Restaurant project Server connected to port" + " " + PORT);