# prototype-webstorm-es6

Prototyping Es6 Development Environment Best Practices

Babel Webstorm Configuration w IWP developers, exploring Es development best practices like linting and automated testing.

# IWP6 Ecmascript6 Summer Prep Topics

- Session 1: Webstorm and Babel for Transpiling ES6 (2020Jul24) 

	https://www.jetbrains.com/webstorm/download/

- Session 2: npm + mocha automated unit tests (2020Jul31)

- Es Modules

- Theory: Browser/server duality (React.js)

- Webpack

- Node ->  React

- Javascript running inside jvm : Nashorn, J2V8



## Session 1: Webstorm and Babel for Transpiling ES6 (2020Jul24) 

### Summer Updates

Prep: Code academy career course, HTML, CSS, Javascript,  js with HTML, go into react app, handlebars.   IDE is Visual Code.

### Theory - Javascript, ES6

Functions - Async, Fired from timers, from ui events, from console. (in some iwp6 code)

Callbacks -  Fired during iteration, in the future!  Can be decarled as anonymous. (not assigned to an identifier)

ES6: "Fat Arrow" or "Rocket" or "Arrow Functions"

### Transpiling

ES6 -->  Classic Javascript

(a) => a+1    -->    function(a) { return a+1; }

Build phases: Compile, test, package, deploy

Test = automated unit tests.


Compile = Transpiler
			
Deploy = Enable everyone on the team to deploy to prod.

### Babel

https://babeljs.io/docs/en/babel-cli/

```sh
npm install --save-dev @babel/core @babel/cli
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


### Babel Envrionment Cleanup from Session 1

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

.babelrc with @babel/preset-env

See the updates to package.json,  plus creation of a package-lock.json


### Why Unit Testing?

npm run failing:     echo "Error: no test specified" && exit 1

### Mocha Tests

https://mochajs.org/

npm install --save-dev mocha

$ npm test

npm test now works!

### Math.js library

$ npm install mathjs --save

package.json: dependencies -vs- devDependencies

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

### Exercise together: write new unit tests that flex the application's math.js usage



## Action Items:

* Taylor - Get brockman@iwphys.org email setup

* Taylor - Apply for Get educational licenses

* Git clone on the https://github.com/ntbrock/prototype-webstorm-es6/settings/access project.


- 2020-21 Planning



