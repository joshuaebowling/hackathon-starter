/**
 * @class NumerologyChannel
 * @version 1.0.0
 * @description Provides Service for Calculating the Numerological Value of a P, utils
 */
const _ = require('underscore');

var calculate, channel, channelHelpers, showLetters, numerologyConstants, subscriptions;

channel = require('./baseChannel');
channelHelpers = require('../utils').channelHelpers;
numerologyConstants = require('../constants').numerology;

subscriptions = {};

// for each actionType there will be a function to subscribe to it without having
// piece together the subscription string 
_.each(numerologyConstants.ActionTypes, (value) => {
  subscriptions[value] = (todo) => {
    var result, route;

    route = `${ numerologyConstants.Base }.${ value }`;
    result = channel.subscribe(`${ route }.${ numerologyConstants.States.RESPONSE }`, todo);

    return result;
  };
});

/**
* @function calculate
* @memberOf NumerologyChannel
* @description shorthand for triggers calculation function via channel
* @returns {null}
*/
calculate = function(inText) {
  'use strict';
  var route;

  route = `${ numerologyConstants.Base }.${ numerologyConstants.ActionTypes.CALCULATE }.${ numerologyConstants.States.REQUEST }`;
  channel.publish(route, { text: inText });
};

/**
* @function showLetters
* @memberOf NumerologyChannel
* @description shorthand for delivering letters for a giv
* @returns {null}
*/
showLetters = function(letters) {
  'use strict';
  var route;

  route = `${ numerologyConstants.Base }.${ numerologyConstants.ActionTypes.LETTERS }.${ numerologyConstants.States.RESPONSE }`;
  channel.publish(route, letters);
};

module.exports = {
  channel: channel,
  subscriptions: subscriptions,
  constants: numerologyConstants,
  calculate: calculate,
  showLetters: showLetters
};