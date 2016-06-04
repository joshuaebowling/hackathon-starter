/**
 * @class NumeraInput
 * @version 1.0.0
 * @description React Component, text input for triggering numerological calculation
 */

const
 _ = require('underscore');

var React,
  NumeraChannel, NumeraWords;

React = require('react');

NumeraChannel = require('../../channels').numerology;
NumeraWords = React.createClass({
  getInitialState: function() {
    var self;
    self = this;
    // decoded to state object
    return {words: [], set: []}; 
  },
  componentDidMount: function() {
    var route, self, consts;

    self = this;
    // subscribe when the calculation event is finished
    consts = NumeraChannel.constants;
    route = `${consts.Base}.${consts.ActionTypes.CALCULATE}.${consts.States.RESPONSE}`;
    NumeraChannel.channel.subscribe(route, (data) => {
      self.setState({words: _.pluck(data, 'word'), set: data});
    });
  },
  showLetters: function(word) {
    NumeraChannel.showLetters(_.where(this.state.set, {word: word})[0].letters);
  },

  render: function() {
    var result = 
      <tr>
       { this.state.words.map((word) => {
          return <td> <span onMouseOver={ () => this.showLetters(word) } onTouchStart={ () => this.showLetters(word) }>{word}</span> </td>
        }) }
      </tr>;
    return result;
  }
});

module.exports = NumeraWords;