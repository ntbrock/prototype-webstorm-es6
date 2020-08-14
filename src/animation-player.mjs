/**
 * This player ticks the aniamtion calculations forwards and back thru the steps of time
 * First concept of a Ecmascript module
 */


// Can I import lodash as a module?

//import isEqual from 'lodash-es';

// const _ = require('lodash');

import Lodash from 'lodash';
const { extend } = Lodash

import MathJs from 'mathjs'
const { sin } = MathJs;


function initialize(animation) {

    console.log("initializing...");

    return { tick: 0, animation: animation };
}

function stepForward(player) {

    console.log("steping forward 1 tick");

    console.log(`maths sin: ${ sin(1) }`);

    return extend(player, { tick: player.tick+1 });
}


export { initialize, stepForward }
