"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
// Define a simple route to return "Hello, world!"
app.get('/', function (req, res) {
    res.send('Hello, world!');
});
exports.default = app;
