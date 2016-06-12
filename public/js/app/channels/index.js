/**
 * @object Channels
 * @version 1.0.0
 * @description Provides Service for Calculating the Numerological Value of a P, utils
 */

module.exports = {
  /**
* @object numerology
* @memberOf Channels#
* @description Channel for all numerology-related pub-sub
*/
  numerology: require('./NumerologyChannel')
};