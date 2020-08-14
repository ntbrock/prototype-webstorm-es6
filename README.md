# prototype-webstorm-es6

Ecmascript6 Development Environment Best Practices Webstorm Babel Mocha

Babel Webstorm Configuration w IWP developers, exploring Es development best practices like linting and automated testing.

# IWP6 Ecmascript6 Summer Prep Topics

- Session 1: Webstorm and Babel for Transpiling ES6 (2020Jul24) 

- Session 2: npm + Mocha automated unit tests (2020Jul31)

- Session 3: EcmaScript Modules  (2020Aug14)

- Session 4: Module Design Session for IWP7 (2020Aug22)
    
    Feature request: Function Calculators,  RK4 Calculator

- Session 5: Promises and async

- Session 6: React.js and the Designer

- Theory: Browser/server duality (React.js)

- Webpack

- Javascript running inside jvm : Nashorn, J2V8

- Addendum : Nodejs install on Ubuntu 18.04 LTS


## Session 1: Webstorm and Babel for Transpiling ES6 (2020Jul24) 

### Summer Updates

Prep: Code academy career course, HTML, CSS, Javascript,  js with HTML, go into react app, handlebars.   IDE is Visual Code.

### Theory - Javascript, ES6

Functions - Async, Fired from timers, from ui events, from console. (in some iwp6 code)

Callbacks -  Fired during iteration, in the future!  Can be decarled as anonymous. (not assigned to an identifier)

ES6: "Fat Arrow" or "Rocket" or "Arrow Functions" or "Lambda"

### Transpiling

ES6 -->  Classic Javascript

(a) => a+1    -->    function(a) { return a+1; }

Build phases: Compile, test, package, deploy

Test = automated unit tests.


Compile = Transpiler
			
Deploy = Enable everyone on the team to deploy to prod.

### Webstorm IDE

https://www.jetbrains.com/webstorm/download/


### Babel

https://babeljs.io/docs/en/babel-cli/

```sh
npm uninstall -g babel
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
npm install --save-dev @babel/plugin-transform-arrow-functions
```

### Plugins

babel src/main.js --out-dir dist --source-maps --plugins=@babel/plugin-transform-arrow-functions

### Webstorm Watchers

This is an outdated guide, but good overview:

https://mcculloughwebservices.com/2015/06/14/webstorm-babel-plugin/


#### MacOSX

Program: /usr/local/bin/npx
    
Arguments: babel $FilePathRelativeToProjectRoot$ --out-dir dist --source-maps

Then try this!

Arugment: babel src/main.js --out-dir dist --source-maps --plugins=@babel/plugin-transform-arrow-functions

Proof: that dist/ directory had the compiled code!!!


## Session 2: npm + mocha automated unit tests (2020Jul31)

### Npm environment provisioning

npm init -> package.json

Change to .gitignore:  node_modules/,  these are written by the --save-dev


### Babel Environment Cleanup from Session 1

```sh
$ npx babel

You have mistakenly installed the `babel` package, which is a no-op in Babel 6.
```

On TB's workstation, found this was a global package:

npm uninstall -g babel

which babel should not return nothing


#### Proper Package re-install

npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill

npx babel src --out-dir dist

Package.json results in:

```
  "devDependencies": {
    "@babel/cli": "^7.10.5",
    "@babel/core": "^7.11.0",
    "@babel/polyfill": "^7.10.4",
    "@babel/preset-env": "^7.11.0",
```

#### Successful tests:

```
$ ./node_modules/.bin/babel src --out-dir dist
Successfully compiled 1 file with Babel (386ms).
```

```
$ npx babel src --out-dir dist
Successfully compiled 1 file with Babel (378ms).
```

After a Webstorm restart, reconfigured my watcher to use npx and now working succesfully!

Every time I edit src/, babel recompiles it into dist/

![Webstorm Babel Watcher with npx](https://raw.githubusercontent.com/ntbrock/prototype-webstorm-es6/master/screenshots/Webstorm%20Babel%20Watcher%20with%20npx.png)


#### Setup Babel Sane Defaults

.babelrc with @babel/preset-env  (Committed)

See the updates to package.json,  plus creation of a package-lock.json


### Why Unit Testing?

TDD - Test Driven Development - Begin with is breaking tests that don't work.

BDD - Behavior Driven Development

npm run failing:     echo "Error: no test specified" && exit 1

### Mocha Tests

https://mochajs.org/

npm install --save-dev mocha

$ npm test

npm test now works!

### Math.js library

$ npm install mathjs --save

package.json: dependencies -vs- devDependencies  ( --save -vs- --save-dev )

Runs in Webstorm:
```
/usr/local/bin/node /Users/brockman/ncssm/git/prototype-webstorm-es6/src/main.js
2i
Taylor was here @ 1442
```

Runs in console:

```
$ npm start

2i
Taylor was here @ 1442
```

### Second source file: Calculator.js

We will be defining a set of common functions that can be used anywhere in our application.

Created calculator.js, defined calcZero

```
calcZero();
^

ReferenceError: calcZero is not defined
    at Object.<anonymous> (/Users/brockman/ncssm/git/prototype-webstorm-es6/src/main.js:10:1)
    at Module._compile (internal/modules/cjs/loader.js:1147:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1167:10)
    at Module.load (internal/modules/cjs/loader.js:996:32)
    at Function.Module._load (internal/modules/cjs/loader.js:896:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! prototype-webstorm-es6@1.0.0 start: `node src/main.js`
npm ERR! Exit status 1
npm ERR!
```

The secret is using module.exports, and require from the main.js:

```
module.exports = {

    calcZero: function() {
        console.log("Calc Zero Called");
        return 0;
    }

}
```

Two different require syntaxes:

```js
// Node.js Require method 1 - Unbox the exports
const { calcZero } = require('./calculator')
console.log( "calculator.js: " + calcZero() );

// Node.js Require method 2 - Entire module
const calculator = require("./calculator")
console.log( "calculator.js: " + calculator.calcZero() );
```


### Write new unit tests that flex the application's calculator.js 

```
Error: Cannot find module 'calculator'
Require stack:
- /Users/brockman/ncssm/git/prototype-webstorm-es6/test/calculator.js
- /Users/brockman/ncssm/git/prototype-webstorm-es6/node_modules/mocha/lib/esm-utils.js
- /Users/brockman/ncssm/git/prototype-webstorm-es6/node_modules/mocha/lib/mocha.js
- /Users/brockman/ncssm/git/prototype-webstorm-es6/node_modules/mocha/lib/cli/one-and-dones.js
```

Good idea: Have a unit test for every function that your module exposes!


### Extend Calculator to depend on math.js library

What is algorithm for RK4?

We added this!  Did TDD, and fixed a bug!  All test now pass.


## Session 3: EcmaScript modules

- CommonJS -vs- ESM

    Ecmascript modules.
    
    Node -> initial ideas, got formatlized into CommonJS,  other libs, require.js, browserfy.
    
    https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1
    
    * Taylor> Udgrade node to version 14!  Locally is 13.
    $ brew upgrade node
    

- require -vs- import

    Require is CommonJS
    
https://nodejs.org/api/modules.html

Dove into Math.js, package.json >  "main": "main/es5",  <-- CommonJS
                                    "module": "main/esm",  <--  Alternative. 

Require when it doesn't find any relative pathed .js files, it dives into node_modules, finds mathjs path -> looks inside package.json.  If no package.json -> then look for index.js.

// Es5
module.exports = require('../../lib/entry/mainAny')

// Es6
export * from '../../es/entry/mainAny'

MathJs can import either way! Cool.

Webstorm - Preferes-> Languages + Toolkits -> Node.js -> Active coding assistance for node.js to make warnigns go away.    
    
import is ESM Ecmascript modules.

1417> Successful built a CommonJs module , with factory pattern, now it's time to declare an esm !

https://nodejs.org/api/esm.html

Struggled with the lodash include as esm

Found that once you become an esm, the requre func is no longer available, have to use import + export.

https://exploringjs.com/impatient-js/ch_modules.html#importing

2 line syntax:

import MathJs from 'mathjs'
const { sin } = MathJs;
    
- module.exports and inner memory / public API

- bacon.js that supports both

- Taylor's new app!! (sails.js!)

Really cool to learn!   Segfault from Node 13 -> node 14 in brew.

Able to connect to databases, able to write + read from mongo.

Reactive application - filesystem, schedules, commits. 

Friday Aug 21 Yes - 

More interactive: Make something together, build a piece of the application. start with that. Learn by doing!!  Decide on commonJs.

Class starts Aug 25, Cohort model, with fully remote option.  Cohort B Oct 11.


## Session 4: Module Design Session for IWP7 

## Session 5: Promises and async


## Action Items:

= Taylor - Provisioned node v14 + npm on the iwp6 Ubuntu linux cloud droplet

= Taylor - Get brockman@iwphys.org email setup

= Taylor - Apply for educational/opensource licenses x3
Your JetBrains Open Source License Request. Request ID = 31072020/5510798

Student Application Form: https://www.jetbrains.com/shop/eform/students

* Team - Git clone on the https://github.com/ntbrock/prototype-webstorm-es6/settings/access project.


## Addendum : Nodejs install on Ubuntu 18.04 LTS

```shell script
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt-get install gcc g++ make
sudo apt-get install -y nodejs
```


