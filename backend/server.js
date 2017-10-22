var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var questions = require('./questions.json');

var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(questions);
})

app.listen(port, ()=>{
    console.log(`SurveyReact running on port ${port}`);
})