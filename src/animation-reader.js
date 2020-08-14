/**
 * Read animation Json into the memory object.
 * Will migrate teh 300 lines of iwp6 code into here.
 * De-spaghetti, write unit tests!
 * kebab-cased
 * Example of a new require!
 * Isolated memory space, Can defined what's public - 'api'
 */

const os = require('os');


module.exports = function() {

    return {
        reader: true,
        parseJson: function(json) {
            // 300 lines of:
            // Defensive code
            // Building all the calculators
            // Checking for circular dependencies
            return { parsed: true, animationName: json.animationName }

        }

    }
}

