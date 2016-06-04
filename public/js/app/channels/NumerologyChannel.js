/**
 * @class NumerologyChannel
 * @version 1.0.0
 * @description Provides Service for Calculating the Numerological Value of a P, utils*/
var _ = require('underscore'),
Promise = require('promise');

var calculate, channel, channelHelpers, showLetters, numerologyConstants, _subscriptions, subscriptions;

channel = require('./baseChannel');
numerologyConstants = require('../constants').numerology;
channelHelpers = require('../utils').channelHelpers;

subscriptions = {};

// for each actionType there will be a function to subscribe to it without having
// piece together the subscription string 
_.each(numerologyConstants.ActionTypes, (value, label = '') => {
  subscriptions[value] = (todo) => {
    var result, route;

    route = `${numerologyConstants.Base}.${value}`;
    result = channel.subscribe(`${route}.${numerologyConstants.States.RESPONSE}`, todo);

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
  var route;

  route = `${numerologyConstants.Base}.${numerologyConstants.ActionTypes.CALCULATE}.${numerologyConstants.States.REQUEST}`;
  channel.publish(route, {text: inText});
};

/**
* @function showLetters
* @memberOf NumerologyChannel
* @description shorthand for delivering letters for a giv
* @returns {null}
*/
showLetters = function(letters) {
  var route;
  console.log('letters0=',letters[0])
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