/**
 * @class ChannelHelpers
 * @version 1.0.0
 * @description utilities for using channels
 */

module.exports = {
  /**
  * @function extractAction
  * @memberof ChannelHelpers
  * @name extractTopic
  * @returns {String} removes the channel and state, leaving the action type
  */
  extractAction: function(topic) {
    return topic.split('.')[1];
  }
};