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

    describe('#calcRk4Iteration()', function () {
        it('should return the proper value after 10 steps', function () {

            
            // Site a =  https://planetcalc.com/8400/
            // Site b = https://keisan.casio.com/
            const expected = 282475249; // site a // site b = 282475249
            const actual =
            calculator.calcRk4Iteration(
                0,
                1,
                function(t,y) { return y * 2; },
                1,
                10 )

            assert.equal(expected, actual);
        });
    });

});