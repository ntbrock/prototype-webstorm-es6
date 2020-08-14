"use strict";

console.log("Taylor was here @ 1442");

// Babel.js transpile of an arrow function
const arrow2 = (a) => a+1;

// Call our new CommonJS module

const animationReaderFactory = require("./animation-reader");

const animationReader = animationReaderFactory();

const animation = animationReader.parseJson( { animationName: 'redball01.iwp', description: 'a very simple DVAT animation'});

console.log("animation-reader.jks: " + JSON.stringify(animation,null,4) );



/*
// ES module
// import { sqrt } from 'mathjs'
// Node.js
const { sqrt } = require('mathjs')
console.log( "Math.js: " + sqrt(-4).toString());

// Node.js Require method 1 - Unbox the exports
const { calcZero } = require('./calculator')
console.log( "calculator.js:17 " + calcZero() );

// Node.js Require method 2 - Entire module
const calculator = require("./calculator")
console.log( "calculator.js:21 " + calculator.calcZero() );


// Example of a node builting
const os = require("os");
console.log("hostname: " + os.hostname() );

*/
