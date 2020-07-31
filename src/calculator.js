console.log("calculator.js: being required");

module.exports = {

    calcZero: function() {
        console.log("Calc Zero Called");
        return 0;
    },

    // https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods
    calcRk4Iteration: function( t0, y0, f, h, steps ) {

        var t = t0;
        var y = y0;

        for (var step = 0; step < steps; step++) {

            const k1 = f(t, y);
            const k2 = f(t + h / 2, y + h * k1 / 2);
            const k3 = f(t + h / 2, y + h * k2 / 2);
            const k4 = f(t + h, y + h * k3);


            const yp = y + (1 / 6) * h * (k1 + 2 * k2 + 2 * k3 + k4);
            const tp = t + h

            //console.log("calculator.js:27> [step="+step+"] t : "+ t +   "  y: " + y);
            //console.log("calculator.js:27> [step="+step+"] k1: "+ k1 + " k2: "+ k2 + " k3: "+ k3 + " k4: "+ k4 + " ");
            t = tp;
            y = yp;
        }
        
        return y;
    }

}