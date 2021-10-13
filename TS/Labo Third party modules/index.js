"use strict";
exports.__esModule = true;
var mathjs_1 = require("mathjs");
var config = {};
var math = mathjs_1.create(mathjs_1.all, config);
var getal = math.unit('50 inch');
console.log(getal.to('cm').toString());
