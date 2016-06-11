/**
 * @class NumeraWord
 * @version 1.0.0
 * @description React Component, text input for triggering numerological calculation
 */

const
 _ = require('underscore');

var NumeraChannel, NumeraWord, react;

react = require('React');

NumeraChannel = require('../../channels').numerology;
NumeraWord = react.createClass({
  getInitialState: function() {
    var self;
    self = this;
    // decoded to state object
    return {NumeraWord: null}; 
  },
  componentDidMount: function() {
    var route, self, consts;

    self = this;
    // subscribe when the calculation event is finished
  },
  showLetters: function() {
    console.log('show letters');
    NumeraChannel.showLetters('test');
  },
  render: function() {
    return <td><span>test</span></td>
  }
});

module.exports = NumeraWord;