/**
 * @class NumerologyStore
 * @version 1.0.0
 * @description Provides Service for Calculating the Numerological Value of a Phrase
 */

//jshint is throwing an error claiming that I'm redefing Promise (not true as far a I can tell)

var _, async, Promise,
  calculate, calculationListener, init, nc, numerologyChannel, positionMap;

_ = require('underscore');
async = require('async');
Promise = require('promise');


numerologyChannel = require('../channels').numerology;
nc = numerologyChannel.constants;

/**
* @function positionMap
* @memberOf _NumerologyStore#
* @name positionMap
* @returns {Object} of letters along with their numerological value
*/
positionMap = function() {
  var abc, arrAbc, calcNumera;

  abc = 'abcdefghijklmnopqurstuvwxyz';
  arrAbc = abc.split('');
  calcNumera = function(index) {
    // these values have proven to be problematic in the loop, so reduce them conditionally
    if(index === 10 || index == 19) return 1;
    // if the index is already one digit in length, return it
    if(index.toString().length === 1) return index;
    // since the current english alphabet only goes up to 27 we can
    // combine the values by splitting and adding
    return parseInt(index.toString().split('')[0]) + parseInt(index.toString().split('')[1]);
  };
  return _.map(abc, (letter, letteri) => {
    return {
      letter: letter,
      position: letteri + 1,
      numera: calcNumera(letteri + 1)
    };
  });
}();

/**
* @function calculate
* @memberOf _NumerologyStore#
* @name getNews
* @description returns news feed
* @returns {Object} $q.deferred.promise
*/
calculate = function(inTxt = '') {
  var _calculate, format, numerize;
  /**
     * Get the formetted value of the input with only a-z, lowercase -- everything else is removed
     * @return {string} The formatted input.
   */
  format = function(rawText) {
    var rgx, spaceRegex;

    rgx = /[^a-zA-Z\s]+/g;
    spaceRegex = /\s\s+/g;
    return rawText.toLowerCase().replace(rgx, '').replace(spaceRegex,' ');
  };

  /**
     * Get the value of a number reduced to a single-digit number
     * @return {Number}
  */
  numerize = function(val = 0) {

    if(!_.isNumber(val)) return 0;

    var isOneLen, _numerize, nums, ranOnce;

    nums = 0;
    // checks to see if the val (number) is one digit, after it has run once
    isOneLen = function() {
      if(!ranOnce) {
        ranOnce = true;
        return false;
      }

      return nums.toString().length <= 1;
    };

    _numerize = function(cb) {
      // split a number into its individual digits
      _.each(val.toString().split(''), (num) => {
        // and add them
        nums += parseInt(num);
      });

      cb();
    };
    // return promises regardless
    if(val.toString().length === 1) return new Promise((resolve) => resolve(val));
    // if the value is in the range of the alphabet, return the pre-calculated value
    if(val <= 27) {
      return new Promise((resolve) => resolve(_.where(positionMap, {position: val})[0].numera));
    // otherwise, reduce until one digit number
    } else {
      return new Promise((resolve) => {
        async.until(isOneLen, _numerize, () => resolve(nums));
      });
    }
  };

  /**
     * Get the numerologized value of the formatted text
     * @return {Object} The formatted input.
  */
  _calculate = function(formattedText) {
    return new Promise((resolve) => { 
      var result, translateLetters;
      /**
         * Get the numerologized value of a word
         * @return {Array} of Numbers.
      */
      translateLetters = function(word) {
        var wordArr = word.split('');

        return _.map(wordArr, (letter) => {
            var result;

            result = _.where(positionMap, { letter: letter })[0];
            return result;
        });
      };
      // an array of objects
      result = _.map(formattedText.split(' '), (word) => {
        var ret, letterNums;
        // each word becomes one of these
        ret = {
          word: word,
          length: word.length,
          letters: '',
          numera: 0
        };
        // after the return object has been created
        // add the array of number value representing the word
        ret.letters = translateLetters(word);
        // add those numbers together
        letterNums = _.pluck(ret.letters, 'numera').reduce((a, b) => a + b, 0);
        // then condense those values to a single digit
        numerize(letterNums).then((_numera) => {
          ret.numera = _numera;
        });

        return ret;
      });

      resolve(result);
    });
  };
//  console.log(`${numerologyChannel.constants.Base}.${numerologyChannel.constants.ActionTypes.CALCULATE}.${numerologyChannel.constants.States.RESPONSE}`);
//  numerologyChannel.channel.publish(`${numerologyChannel.constants.Base}.${numerologyChannel.constants.ActionTypes.CALCULATE}.${numerologyChannel.constants.States.RESPONSE}`, {test: 'data'});
  return _calculate(format(inTxt));
};

/**
* @function calculationListener
* @memberOf NumerologyStore#
* @description triggers calculation function via channel
* @returns {null}
*/
calculationListener = function(inText) {
  var result = calculate(inText);
  result.then((result) => {
    numerologyChannel.channel.publish(`${numerologyChannel.constants.Base}.${numerologyChannel.constants.ActionTypes.CALCULATE}.${numerologyChannel.constants.States.RESPONSE}`, result);
  });
};

init = function() {
  numerologyChannel.channel.subscribe(`${numerologyChannel.constants.Base}.${numerologyChannel.constants.ActionTypes.CALCULATE}.${numerologyChannel.constants.States.REQUEST}`, (data) => {
    calculationListener(data.text);
  });
  numerologyChannel.channel.publish(`${numerologyChannel.constants.Base}.${numerologyChannel.constants.ActionTypes.CALCULATE}.${numerologyChannel.constants.States.REQUEST}`, {data:' tast'});
};

init();

module.exports = {
  calculate: calculate,
  numeras: positionMap
};