require("dotenv").config();

var path = require('path');
var bodyParser = require('body-parser');
const express = require("express");
const cors = require('cors');
const mongoose = require("./middlewares/mongo/mongoose");
var routes = require('./Routes/Routes');
const app = express();


/**
 * Start MongoDB connection
 */
mongoose.connect();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept,auth");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header( 'Content-Type', 'application/json',);
    next();
  });
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static('/public/uploads/images'));
app.use(express.static(path.join(__dirname, 'public')));

//associando os arquivos de rota na aplicação

routes(app);

app.listen(process.env.PORT);

module.exports = app;
