'use strict';

var Http = require('http');
var Express = require('express');
var BodyParser = require('body-parser');
var Swaggerize = require('swaggerize-express');
var Path = require('path');
var mongoose = require('mongoose');

var App = Express();

var Server = Http.createServer(App);

var cors = require('cors')

App.use(cors());


App.use(BodyParser.json());
App.use(BodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb://mongo:27017/mydata");
var Consent = require('./models/Consent');

App.use(Swaggerize({
    api: Path.resolve('./config/swagger.yaml'),
    handlers: Path.resolve('./handlers')
}));

Server.listen(8000, function () {
    App.swagger.api.host = this.address().address + ':' + this.address().port;
    /* eslint-disable no-console */
    console.log('App running on %s:%d', this.address().address, this.address().port);
    /* eslint-disable no-console */
});
