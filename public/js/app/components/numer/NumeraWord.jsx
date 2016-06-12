/**
 * @class NumeraWord
 * @version 1.0.0
 * @description React Component, text input for triggering numerological calculation
 */

const _ = require('underscore'),
  React = require('React');

var NumeraChannel, NumeraWord;

NumeraChannel = require('../../channels').numerology;
NumeraWord = React.createClass({
  getInitialState: function() {
    'use strict';
    return { NumeraWord: null }; 
  },
  componentDidMount: function() {
    'use strict';
  },
  showLetters: function(word) {
    'use strict';
    NumeraChannel.showLetters(word);
  },
  render: function() {
    return <td><span>test</span></td>
  }
});

module.exports = NumeraWord;