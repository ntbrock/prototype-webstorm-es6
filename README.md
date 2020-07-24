# prototype-webstorm-es6
2020Jul24 Prototyping an Es6 Babel Webstorm Configuration w IWP developers

# Session Notes

## 2020Jul24 IWP6 Summer Prep Call 

## Agenda

### Summer Updates

Code academy career course, HTML , CSS , Javscript,  js with HTML, go into react app, handlebars.   IDE is Visual Code.

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
   

# Future Topics

- write JS automated unit tests.

- Theory: Browser/server duality (React.js)

- Webpack

- Node ->  React

- Two session out:  Javascript running inside jvm.

- Nashorn

- J2V8

- Webstorm IDE

	https://www.jetbrains.com/webstorm/download/

## Action Items:

* Taylor - Get brockman@iwphys.org email setup

* Taylor - Apply for Get educational licenses

* Git clone on the https://github.com/ntbrock/prototype-webstorm-es6/settings/access project.


- 2020-21 Planning



