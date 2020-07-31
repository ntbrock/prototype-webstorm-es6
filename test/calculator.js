// https://mochajs.org/
// https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/
// BBD - Behavior Driven Development

let assert = require('assert');
let calculator = require('../src/calculator');

describe('calculator', function () {
    describe('#calcZero()', function () {
        it('should return 0', function () {
            assert.equal(calculator.calcZero(), 0);
        });
    });
});