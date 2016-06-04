module.exports = {
  /**
  * @function extractTopic
  * @name extractTopic
  * @returns {String} removes the channel and state, leaving the action type
  */
  extractAction: function(topic) {
    return topic.split('.')[1];
  }
};