/**
 * @class NumerologyConstants
 * @version 1.0.0
 * @description Constants for calculating strings for numerology-related channeling
 */

module.exports = {
  /**
* @object ActionTypes
* @memberOf NumerologyConstants
* @description contains different action types for calculating strings for numerology-related channeling
*/
  ActionTypes: {
    CALCULATE: 'calculate',
    PROCESSING: 'processing',
    ERROR: 'error'
  },
  /**
* @string Base
* @memberOf NumerologyConstants
* @description the value of the type for calculating strings for numerology-related channeling
*/
  Base: 'numera',
  /**
* @object States
* @memberOf NumerologyConstants
* @description contains different states for calculating strings for numerology-related channeling
*/
  States: require('./base')
};