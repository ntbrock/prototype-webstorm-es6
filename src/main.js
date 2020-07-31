"use strict";

console.log("Taylor was here @ 1442");

// Babel.js transpile of an arrow function
const arrow2 = (a) => a+1;


// ES module
// import { sqrt } from 'mathjs'
// Node.js
const { sqrt } = require('mathjs')
console.log( "Math.js: " + sqrt(-4).toString());


const { calcZero } = require('./calculator')
console.log( "calculator.js: " + calcZero() );
