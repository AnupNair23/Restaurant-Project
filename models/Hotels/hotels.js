const http = require('https');
var express = require('express');
var router = express.Router()
var app = express();
var bodyParser = require('body-parser');

require('es6-promise').polyfill();
require('isomorphic-fetch');



var apiKey = '19b60b586b09da81e5c0c909ae240c11';

const baseUrl = 'https://developers.zomato.com/api/v2.1/'

const headerVals = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'user-key': apiKey
};



// /api/v2.1 / collections ? city_id = 4
module.exports.totalcollections = function (req,responseCallback) {

    fetch('https://developers.zomato.com/api/v2.1/collections?city_id=4', {
        //fetch(baseUrl+'search?entity_id=${queryParameters.first}&entity_type=${queryParameters.second}', {
        method: 'GET',
        headers: headerVals

    }).then(function (response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then((responseData) => {

        //    console.log(responseData);
        var myJsonString = JSON.stringify(responseData);
        console.log(myJsonString);


        JSON.parse(myJsonString)



        // // TODO yet to add check for errors and send response accordingly
        responseCallback.end(myJsonString);

    })
}